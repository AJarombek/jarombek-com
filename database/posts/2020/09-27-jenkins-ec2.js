/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/26/2020
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

preview = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Back in 2018, I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Jenkins&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" server which automated tasks for my applications.  Jenkins is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nsep-21-2018-jenkins#continuous-integration"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"continuous integration",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/sep-21-2018-jenkins#continuous-delivery"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"continuous delivery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (CI/CD) tool which I've written about in the past.  When I first created the Jenkins server, I had a few jobs which ran unit tests, but I never took full advantage of them.  Over the past two years, I've gained a greater appreciation for CI/CD tools and their ability to save time deploying code and building confidence in codebases by automating tests.  Nowadays all my applications have automated test and deployment jobs on Jenkins. ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Since 2018 the Jenkins ecosystem has evolved along with my understanding of cloud concepts.  My original Jenkins server was hosted on an AWS EC2 instance which utilized AWS EFS for persistent storage. In the spring of 2020, I decided to rewrite the Jenkins server infrastructure.  With my added knowledge of containerization with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Docker&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Docker",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and container orchestration with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Kubernetes&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Kubernetes",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I hosted the Jenkins server on AWS EKS as part of a Kubernetes deployment.  In this article, I discuss the original EC2 Jenkins server and its creation process with Terraform.  In an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-29-2020-jenkins-kubernetes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"upcoming article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I'll discuss the Kubernetes Jenkins server infrastructure. ",
                "children":null
            }
        ]
    }
];

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Back in 2018, I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Jenkins&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" server which automated tasks for my applications.  Jenkins is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nsep-21-2018-jenkins#continuous-integration"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"continuous integration",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/sep-21-2018-jenkins#continuous-delivery"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"continuous delivery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (CI/CD) tool which I've written about in the past.  When I first created the Jenkins server, I had a few jobs which ran unit tests, but I never took full advantage of them.  Over the past two years, I've gained a greater appreciation for CI/CD tools and their ability to save time deploying code and building confidence in codebases by automating tests.  Nowadays all my applications have automated test and deployment jobs on Jenkins. ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Since 2018 the Jenkins ecosystem has evolved along with my understanding of cloud concepts.  My original Jenkins server was hosted on an AWS EC2 instance which utilized AWS EFS for persistent storage. In the spring of 2020, I decided to rewrite the Jenkins server infrastructure.  With my added knowledge of containerization with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Docker&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Docker",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and container orchestration with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Kubernetes&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Kubernetes",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I hosted the Jenkins server on AWS EKS as part of a Kubernetes deployment.  In this article, I discuss the original EC2 Jenkins server and its creation process with Terraform.  In an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-29-2020-jenkins-kubernetes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"upcoming article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I'll discuss the Kubernetes Jenkins server infrastructure. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"AWS EC2 Jenkins Architecture"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"AWS EC2 Jenkins Architecture",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" While designing AWS architecture for the Jenkins server, I wanted the server configuration to persist between virtual machine restarts.  This way I could schedule my EC2 instance to only run during the day (which optimizes energy consumption and cost) and not lose any data when offline at night.  The solution to persisting data between EC2 instances is to store the Jenkins server configuration files on AWS EFS and mount it onto the instances.  When the EC2 instance is shut down at night, the filesystem in EFS is not destroyed, allowing it to be remounted onto another instance in the morning. ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/9-27-20-ec2-efs-architecture.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"AWS EFS"
        },
        "value":null,
        "children":[
            {
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" AWS Elastic File Storage (EFS) is a filesystem that is highly available and scalable",
                        "children":null
                    },
                    {
                        "el":"sup",
                        "attributes":null,
                        "value":"1",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  It can be mounted on multiple EC2 instances",
                        "children":null
                    },
                    {
                        "el":"sup",
                        "attributes":null,
                        "value":"2",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  The filesystem of EFS uses the Network File System (NFS) protocol, which is distributed (located on a different server than the server which communicates with it)",
                        "children":null
                    },
                    {
                        "el":"sup",
                        "attributes":null,
                        "value":"3",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  From a user perspective EFS behaves like any non-distributed filesystem, making it easy to work with. ",
                        "children":null
                    }
                ]
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Besides for EC2 and EFS, the infrastructure utilizes Route53 for DNS records, AMI for a custom Jenkins virtual machine image, auto scaling for shutting down the EC2 instance at night, and Elastic Load Balancer (ELB) for load balancing to the EC2 instance(s) running Jenkins.  All of this infrastructure is configured and created with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Terraform&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  (except for the custom AMI, which is created with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.packer.io/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Packer",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Terraform IaC for the Jenkins Server"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Terraform IaC for the Jenkins Server",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The Jenkins server's Terraform configuration is separated into three modules.  The first module creates EC2 related resources, the second creates the EFS filesystem and mount target, and the third creates Route53 records.  I will discuss some important pieces of the configuration, but the full code is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0/jenkins"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0/jenkins-efs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins-efs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0/jenkins-route53"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins-route53",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" folders, respectively. ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0/jenkins"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module, the main resource is the launch configuration for the Jenkins server.  A launch configuration determines how an autoscaling group creates EC2 instances. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_launch_configuration\" \"jenkins-server-lc\" {\n  name = \"global-jenkins-server-lc\"\n  image_id = data.aws_ami.jenkins-ami.id\n  instance_type = \"t2.micro\"\n  key_name = \"jenkins-key\"\n  security_groups = [aws_security_group.jenkins-server-lc-security-group.id]\n  associate_public_ip_address = true\n  iam_instance_profile = aws_iam_instance_profile.jenkins-instance-profile.name\n\n  # Script to run during instance startup\n  user_data = data.template_file.jenkins-startup.rendered\n\n  lifecycle {\n    create_before_destroy = true\n  }\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The two aspects of the launch configuration I want to focus on are the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"image_id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"user_data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The image id specifies a custom Amazon Machine Image (AMI) for the Jenkins server.  An AMI is a template for creating a virtual machine in AWS. I create (bake) the AMI with Packer, which I'll discuss later.  Its important to note that in the Terraform configuration I use a data object to find the custom AMI that I create (as shown below). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_ami\" \"jenkins-ami\" {\n  # If more than one result matches the filters, use the most recent AMI\n  most_recent = true\n\n  filter {\n    name = \"name\"\n    values = [\"global-jenkins-server*\"]\n  }\n\n  filter {\n    name = \"virtualization-type\"\n    values = [\"hvm\"]\n  }\n\n  owners = [\"<aws_account_id>\"]\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The user data specified on the launch configuration is a Bash script that runs when the virtual machine boots up.  It's in this script that I mount the EFS filesystem onto the EC2 instance.  This script is passed parameters from Terraform and is found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/\nblob/v1.0.0/jenkins/jenkins-setup.sh"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins-setup.sh",
                        "children":null
                    }
                ]
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Another important piece of the EC2 setup is the autoscaling group and autoscaling schedules.  The Terraform configuration   below creates the autoscaling group. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_autoscaling_group\" \"jenkins-server-asg\" {\n  name = \"global-jenkins-server-asg\"\n  launch_configuration = aws_launch_configuration.jenkins-server-lc.id\n  vpc_zone_identifier = [data.aws_subnet.resources-vpc-public-subnet.id]\n\n  max_size = var.max_size_on\n  min_size = var.min_size_on\n  desired_capacity = var.desired_capacity_on\n\n  load_balancers = [aws_elb.jenkins-server-elb.id]\n  health_check_type = \"ELB\"\n  health_check_grace_period = 600\n\n  lifecycle {\n    create_before_destroy = true\n  }\n\n  tag {\n    key = \"Name\"\n    propagate_at_launch = true\n    value = \"global-jenkins-server-asg\"\n  }\n\n  tag {\n    key = \"Application\"\n    propagate_at_launch = false\n    value = \"jenkins-jarombek-io\"\n  }\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The capacity arguments, which determine the number of EC2 instances in the autoscaling group, are configured with variables.  The same holds true for the autoscaling schedules, which start the Jenkins server in the morning and stop it at night.  The start and stop times are configured differently for weekdays and weekends. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# main.tf\n\nresource \"aws_autoscaling_schedule\" \"jenkins-server-asg-online-weekday\" {\n  autoscaling_group_name = aws_autoscaling_group.jenkins-server-asg.name\n  scheduled_action_name = \"jenkins-server-online-weekday\"\n\n  max_size = var.max_size_on\n  min_size = var.min_size_on\n  desired_capacity = var.desired_capacity_on\n\n  recurrence = var.online_cron_weekday\n}\n\nresource \"aws_autoscaling_schedule\" \"jenkins-server-asg-offline-weekday\" {\n  autoscaling_group_name = aws_autoscaling_group.jenkins-server-asg.name\n  scheduled_action_name = \"jenkins-server-offline-weekday\"\n\n  max_size = var.max_size_off\n  min_size = var.min_size_off\n  desired_capacity = var.desired_capacity_off\n\n  recurrence = var.offline_cron_weekday\n}\n\nresource \"aws_autoscaling_schedule\" \"jenkins-server-asg-online-weekend\" {\n  autoscaling_group_name = aws_autoscaling_group.jenkins-server-asg.name\n  scheduled_action_name = \"jenkins-server-online-weekend\"\n\n  max_size = var.max_size_on\n  min_size = var.min_size_on\n  desired_capacity = var.desired_capacity_on\n\n  recurrence = var.online_cron_weekend\n}\n\nresource \"aws_autoscaling_schedule\" \"jenkins-server-asg-offline-weekend\" {\n  autoscaling_group_name = aws_autoscaling_group.jenkins-server-asg.name\n  scheduled_action_name = \"jenkins-server-offline-weekend\"\n\n  max_size = var.max_size_off\n  min_size = var.min_size_off\n  desired_capacity = var.desired_capacity_off\n\n  recurrence = var.offline_cron_weekend\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# var.tf\n\nvariable \"max_size_on\" {\n  description = \"Max number of instances in the auto scaling group during an online period\"\n  default = 1\n}\n\nvariable \"min_size_on\" {\n  description = \"Min number of instances in the auto scaling group during an online period\"\n  default = 1\n}\n\nvariable \"max_size_off\" {\n  description = \"Max number of instances in the auto scaling group during an offline period\"\n  default = 0\n}\n\nvariable \"min_size_off\" {\n  description = \"Min number of instances in the auto scaling group during an offline period\"\n  default = 0\n}\n\nvariable \"desired_capacity_on\" {\n  description = \"The desired number of intances in the autoscaling group when I am working\"\n  default = 1\n}\n\nvariable \"desired_capacity_off\" {\n  description = \"The desired number of intances in the autoscaling group when I am NOT working\"\n  default = 0\n}\n\n# Weekdays: 6:30PM - 8:00PM EST\nvariable \"online_cron_weekday\" {\n  description = \"The cron syntax for when the Jenkins server should go online on a weekday\"\n  default = \"0 23 * * 1-5\"\n}\n\nvariable \"offline_cron_weekday\" {\n  description = \"The cron syntax for when the Jenkins server should go offline on a weekday\"\n  default = \"0 1 * * 2-6\"\n}\n\n# Weekends: 12:00PM - 8:00PM EST\nvariable \"online_cron_weekend\" {\n  description = \"The cron syntax for when the Jenkins server should go online on a weekend\"\n  default = \"0 17 * * 0,6\"\n}\n\nvariable \"offline_cron_weekend\" {\n  description = \"The cron syntax for when the Jenkins server should go offline on a weekend\"\n  default = \"0 1 * * 0,1\"\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The other pieces of the main Jenkins module, such as the load balancer and security groups, are available on GitHub in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/blob/v1.0.0/jenkins/main.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"main.tf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0/jenkins-efs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins-efs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module, the EFS filesystem is created along with a mount target, which is located in the same subnet as the EC2 instance. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_efs_file_system\" \"jenkins-efs\" {\n  creation_token = \"jenkins-fs\"\n\n  tags = {\n    Name = \"jenkins-efs\"\n  }\n}\n\nresource \"aws_efs_mount_target\" \"jenkins-efs-mount\" {\n  file_system_id = aws_efs_file_system.jenkins-efs.id\n  subnet_id = data.aws_subnet.resources-vpc-public-subnet.id\n  security_groups = [aws_security_group.jenkins-efs-security.id]\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" And finally in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/v1.0.0/\njenkins-route53"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins-route53",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module, a Route53 record is created and bound to the load balancer. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_route53_zone\" \"jarombek-io-zone\" {\n  name = \"jarombek.io.\"\n}\n\ndata \"aws_elb\" \"jenkins-server-elb\" {\n  name = \"global-jenkins-server-elb\"\n}\n\nresource \"aws_route53_record\" \"jenkins-jarombek-io-a\" {\n  name = \"jenkins.jarombek.io\"\n  type = \"A\"\n  zone_id = \"${data.aws_route53_zone.jarombek-io-zone.zone_id}\"\n\n  alias {\n    evaluate_target_health = true\n    name = \"${data.aws_elb.jenkins-server-elb.dns_name}\"\n    zone_id = \"${data.aws_elb.jenkins-server-elb.zone_id}\"\n  }\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Creating a Custom AMI with Packer"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Creating a Custom AMI with Packer",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Packer is a tool which allows developers to configure and create custom machine images",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"4",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It has the ability to create images for multiple different platforms, but the image I'm creating is specifically for AWS (an Amazon Machine Image).  To build an image with Packer, the first task is to create a JSON template which configures the image.  I created a JSON template called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-aws-infrastructure/blob/v1.0.0/jenkins/ami/jenkins-image.json"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins-image.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which has the following content: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"variables\": {\n    \"aws_access_key\": \"{{env `AWS_ACCESS_KEY_ID`}}\",\n    \"aws_secret_key\": \"{{env `AWS_SECRET_ACCESS_KEY`}}\"\n  },\n  \"builders\": [{\n    \"type\": \"amazon-ebs\",\n    \"access_key\": \"{{user `aws_access_key`}}\",\n    \"secret_key\": \"{{user `aws_secret_key`}}\",\n    \"region\": \"us-east-1\",\n    \"source_ami_filter\": {\n      \"filters\": {\n        \"virtualization-type\": \"hvm\",\n        \"name\": \"ubuntu/images/*ubuntu-xenial-16.04-amd64-server-*\",\n        \"root-device-type\": \"ebs\"\n      },\n      \"owners\": [\"099720109477\"],\n      \"most_recent\": true\n    },\n    \"instance_type\": \"t2.micro\",\n    \"ssh_username\": \"ubuntu\",\n    \"ami_name\": \"global-jenkins-server {{timestamp}}\"\n  }],\n  \"provisioners\": [\n    {\n      \"type\": \"shell\",\n      \"script\": \"./setup-jenkins-image.sh\"\n    },\n    {\n      \"type\": \"ansible-local\",\n      \"playbook_file\": \"./setup-playbook.yml\"\n    }\n  ]\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The template is split into three pieces - variables, builders, and provisioners.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"variables",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" section defines variables which can be used throughout the template.  In my template, I set variables for my AWS SDK/CLI credentials.  These variables are passed to the builder, allowing it to push the AMI to my AWS account. ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The builders section defines Builders, which are components of Packer that are able to create machine images for a specific platform",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"5",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In my case, I use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"amazon-ebs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" builder which creates an Elastic Block Storage (EBS) backed Amazon EC2 image",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"6",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I configure the builder to use a base Ubuntu image in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"source_ami_filter",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object.  When the AMI is created, it will exist in my AWS account with the name specified in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ami_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field (note the dynamic timestamp which will resolve to the current time). ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The provisioners section configures software that runs on top of the base image.  There are multiple different provisioner types, such as Shell scripts or Ansible playbooks.  Multiple provisioners can be used for a single image.  In my case, the first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shell",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provisioner runs a shell script which installs Ansible on the image.  This is a required step in order to use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ansible-local",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provisioner. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"#!/usr/bin/env bash\n\n# Make sure Ubuntu has enough time to initialize (https://www.packer.io/intro/getting-started/provision.html)\nsleep 30\n\napt-add-repository ppa:ansible/ansible -y\nsudo apt-get update\nsudo apt-get -y install ansible\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The second provisioner runs an Ansible playbook on the image, installing dependencies such as Java, Python, and Jenkins in the process.  At its most basic level, Ansible Playbooks can be run locally or remotely, running tasks on a machine.  Playbooks are YAML files which specify the host to run on and the tasks to execute.  Below is a snippet of my Playbook installing dependencies such as Java from the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/APT_(software)"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"apt",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" package manager (Jenkins is written in Java). The full playbook code can be found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/\nblob/v1.0.0/jenkins/ami/setup-playbook.yml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"setup-playbook.yml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"- hosts: localhost\n  connection: local\n  become: yes\n\n  tasks:\n\n    - name: Install Java8, Python3, Git, Wget & Unzip\n      become: yes\n      apt: pkg={{item}} state=installed\n      with_items:\n        - openjdk-8-jdk\n        - git\n        - wget\n        - unzip\n        - software-properties-common\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" To build an AMI with the Packer template, a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"packer build jenkins-image.json",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command is run from the terminal.  Optionally, the template can be verified prior to the build with  a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"packer validate jenkins-image.json",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Reflections on the Initial Infrastructure Design"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Reflections on the Initial Infrastructure Design",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" One of the nice aspects of this infrastructure design was that I had a functional Jenkins server to work with but didn't have to pay for a constantly running server due to the autoscaling schedules.  It was also all configured as code, so destroying and rebuilding the infrastructure was as simple as running ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"terraform destroy",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"terraform apply",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands, along with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"packer build jenkins-image.json",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" if the AMI changed. ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" However, with time I realized there were better approaches to building a Jenkins server on the cloud. One of the biggest reasons I needed to use EFS was to avoid manually reconfiguring the Jenkins server and reinstalling Jenkins plugins every time I wanted to make an infrastructure change.  Luckily, Jenkins provides a plugin called Jenkins Configuration as Code (JCasC), which automates the configuration of a Jenkins server",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"7",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Jenkins also allows plugins to be pre-installed with a ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"plugins.txt",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file.  I'll discuss both of these approaches in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-29-2020-jenkins-kubernetes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"follow-up article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", but in summary, the end result of using both these approaches is that I no longer need EFS. ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The JCasC plugin was in its infancy when I created the original EC2/EFS Jenkins infrastructure in 2018, so I can't really blame myself for lack of knowledge about it.  One of the things I should have known at the time was the power of using containers instead of virtual machines for cloud infrastructure. After using Docker and Kubernetes a good amount in the past year and a half, I decided to move my Jenkins server to a Docker container, which is orchestrated by Kubernetes on EKS in production.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/apr-1-2019-docker-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"benefits of containers over virtual machines",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are well documented, but in short, containers are more lightweight, energy efficient, and require less maintenance (since you are virtualizing the operating system only, not an entire server).  I also find Dockerfiles easier to work with and read than Packer templates, but that is more of a personal preference. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Conclusions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Conclusions",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The EC2 and EFS infrastructure discussed in this article was a good foundation to improve upon with Docker and Kubernetes.  While this infrastructure no longer exists in my cloud, the repository is tagged at the time of its existence and its code can be found on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/\ntree/v1.0.0"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-29-2020-jenkins-kubernetes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"follow-up article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":",  I will discuss the Kubernetes Jenkins server infrastructure that I'm using in my cloud today. ",
                "children":null
            }
        ]
    }
];

postName = "sep-27-2020-jenkins-ec2";
postDate = new Date('2020-09-27T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Jenkins Server Legacy Infrastructure on EC2 and EFS",
    description: `In this article, I discuss my original EC2 Jenkins server and its creation 
        process with Terraform.  In an upcoming article, I’ll discuss the Kubernetes Jenkins 
        server infrastructure.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "Jenkins",
            picture: "https://asset.jarombek.com/logos/jenkins.png",
            color: "jenkins"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "Amazon EC2",
            picture: "https://asset.jarombek.com/logos/ec2.png",
            color: "ec2"
        },
        {
            name: "Amazon EFS",
            picture: "https://asset.jarombek.com/logos/aws-efs.png",
            color: "efs"
        },
        {
            name: "Packer",
            picture: "https://asset.jarombek.com/logos/packer.svg",
            color: "packer"
        },
        {
            name: "Ansible",
            picture: "https://asset.jarombek.com/logos/ansible.png",
            color: "ansible"
        },
        {
            name: "DevOps"
        },
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Amazon Elastic File System\", ",
            endName: "",
            linkName: "https://aws.amazon.com/efs/",
            link: "https://aws.amazon.com/efs/"
        },
        {
            startName: "Michael Wittig & Andreas Wittig, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2019), 275",
            linkName: "Amazon Web Services In Action",
            link: "https://www.manning.com/books/amazon-web-services-in-action-second-edition"
        },
        {
            startName: "\"Network File System\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Network_File_System",
            link: "https://en.wikipedia.org/wiki/Network_File_System"
        },
        {
            startName: "\"What is Packer?\", ",
            endName: "",
            linkName: "https://www.packer.io/intro#what-is-packer",
            link: "https://www.packer.io/intro#what-is-packer"
        },
        {
            startName: "\"Packer Terminology: Builders\", ",
            endName: "",
            linkName: "https://www.packer.io/docs/terminology#builders",
            link: "https://www.packer.io/docs/terminology#builders"
        },
        {
            startName: "\"AMI Builder (EBS backed)\", ",
            endName: "",
            linkName: "https://www.packer.io/docs/builders/amazon/ebs",
            link: "https://www.packer.io/docs/builders/amazon/ebs"
        },
        {
            startName: "\"Jenkins Configuration as Code (a.k.a. JCasC) Plugin\", ",
            endName: "",
            linkName: "https://github.com/jenkinsci/configuration-as-code-plugin/blob/master/README.md",
            link: "https://github.com/jenkinsci/configuration-as-code-plugin/blob/master/README.md"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
