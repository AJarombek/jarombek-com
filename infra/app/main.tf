/**
 * ECS Infrastructure for the jarombek.com website.
 * Author: Andrew Jarombek
 * Date: 7/29/2025
 */

provider "aws" {
  region = "us-east-1"
}

terraform {
  required_version = "~> 1.12.2"

  required_providers {
    aws = "~> 6.2.0"
  }

  backend "s3" {
    bucket  = "andrew-jarombek-terraform-state"
    encrypt = true
    key     = "jarombek-com/infra/app"
    region  = "us-east-1"
  }
}

locals {
  domain_cert      = "jarombek.com"
  www_domain_cert  = "*.jarombek.com"
  database_version = "1.4.4"
  web_version      = "1.4.4"
}

data "aws_vpc" "application-vpc" {
  tags = {
    Name = "application-vpc"
  }
}

data "aws_subnet" "kubernetes-dotty-public-subnet" {
  tags = {
    Name = "kubernetes-dotty-public-subnet"
  }
}

data "aws_subnet" "kubernetes-grandmas-blanket-public-subnet" {
  tags = {
    Name = "kubernetes-grandmas-blanket-public-subnet"
  }
}

data "aws_acm_certificate" "jarombek-cert" {
  domain   = local.domain_cert
  statuses = ["ISSUED"]
}

data "aws_acm_certificate" "jarombek-www-cert" {
  domain   = local.www_domain_cert
  statuses = ["ISSUED"]
}

# Security Group for ALB
resource "aws_security_group" "alb_sg" {
  name        = "jarombek-com-alb-sg"
  description = "Allow HTTP/HTTPS traffic to ALB"
  vpc_id      = data.aws_vpc.application-vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Security Group for ECS Services
resource "aws_security_group" "ecs_services" {
  name        = "jarombek-com-ecs-sg"
  description = "Allow traffic from ALB to ECS tasks"
  vpc_id      = data.aws_vpc.application-vpc.id

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    security_groups = [aws_security_group.alb_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Application Load Balancer
resource "aws_lb" "web_alb" {
  name               = "jarombek-com-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = [
    data.aws_subnet.kubernetes-dotty-public-subnet.id,
    data.aws_subnet.kubernetes-grandmas-blanket-public-subnet.id
  ]
}

# Target Group for Web Service
resource "aws_lb_target_group" "web_tg" {
  name     = "jarombek-com-web-tg"
  port     = 8080
  protocol = "HTTP"
  vpc_id   = data.aws_vpc.application-vpc.id
  target_type = "ip"
  health_check {
    path                = "/"
    protocol            = "HTTP"
    port                = "8080"
    matcher             = "200-399"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}

# HTTPS Listener for ALB (root domain)
resource "aws_lb_listener" "web_https_listener" {
  load_balancer_arn = aws_lb.web_alb.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = data.aws_acm_certificate.jarombek-cert.arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web_tg.arn
  }
}

# HTTPS Listener for ALB (www domain)
resource "aws_lb_listener_certificate" "web_www_cert" {
  listener_arn    = aws_lb_listener.web_https_listener.arn
  certificate_arn = data.aws_acm_certificate.jarombek-www-cert.arn
}

resource "aws_lb_listener" "web_lb_listener_http" {
  load_balancer_arn = aws_lb.web_alb.arn
  port = 80
  protocol = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port = 443
      protocol = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "jarombek_com" {
  name = "jarombek-com"
}

# IAM Role for ECS Task Execution
resource "aws_iam_role" "ecs_task_execution" {
  name = "ecsTaskExecutionRole"
  assume_role_policy = data.aws_iam_policy_document.ecs_task_assume_role_policy.json
}

data "aws_iam_policy_document" "ecs_task_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# ECS Task Definition for Web
resource "aws_ecs_task_definition" "web" {
  family                   = "jarombek-com"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([
    {
      name      = "jarombek-com-database"
      image     = "ajarombek/jarombek-com-database:${local.database_version}"
      portMappings = [
        {
          containerPort = 27017
          protocol      = "tcp"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/jarombek-com-database"
          awslogs-region        = "us-east-1"
          awslogs-stream-prefix = "ecs"
        }
      }
      environment = [
        {
          name  = "NODE_ENV"
          value = "production"
        }
      ]
    },
    {
      name      = "jarombek-com"
      image     = "ajarombek/jarombek-com:${local.web_version}"
      portMappings = [
        {
          containerPort = 8080
          protocol      = "tcp"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/jarombek-com-web"
          awslogs-region        = "us-east-1"
          awslogs-stream-prefix = "ecs"
        }
      }
      dependsOn = [
        {
          containerName = "jarombek-com-database"
          condition     = "START"
        }
      ]
      healthCheck = {
        command     = ["CMD-SHELL", "curl -f http://localhost:8080/ || exit 1"]
        interval    = 5
        timeout     = 2
        retries     = 3
        startPeriod = 20
      }
    }
  ])
}

# ECS Service for Web
resource "aws_ecs_service" "web" {
  name            = "jarombek-com"
  cluster         = aws_ecs_cluster.jarombek_com.id
  task_definition = aws_ecs_task_definition.web.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  network_configuration {
    subnets          = [
      data.aws_subnet.kubernetes-dotty-public-subnet.id,
      data.aws_subnet.kubernetes-grandmas-blanket-public-subnet.id
    ]
    security_groups  = [aws_security_group.ecs_services.id]
    assign_public_ip = true
  }
  load_balancer {
    target_group_arn = aws_lb_target_group.web_tg.arn
    container_name   = "jarombek-com"
    container_port   = 8080
  }
}

# Route53 Alias Record for jarombek.com
resource "aws_route53_record" "jarombek_com_alias" {
  zone_id = data.aws_route53_zone.jarombek_com.zone_id
  name    = "jarombek.com"
  type    = "A"

  alias {
    name                   = aws_lb.web_alb.dns_name
    zone_id                = aws_lb.web_alb.zone_id
    evaluate_target_health = true
  }
}

# Route53 Alias Record for www.jarombek.com
resource "aws_route53_record" "www_jarombek_com_alias" {
  zone_id = data.aws_route53_zone.jarombek_com.zone_id
  name    = "www.jarombek.com"
  type    = "A"

  alias {
    name                   = aws_lb.web_alb.dns_name
    zone_id                = aws_lb.web_alb.zone_id
    evaluate_target_health = true
  }
}

# Route53 Zone Data Source
data "aws_route53_zone" "jarombek_com" {
  name         = "jarombek.com."
  private_zone = false
}

# CloudWatch Log Groups for ECS Tasks
resource "aws_cloudwatch_log_group" "web" {
  name              = "/ecs/jarombek-com-web"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "database" {
  name              = "/ecs/jarombek-com-database"
  retention_in_days = 30
}
