/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/27/2020
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-27-2020-jenkins-ec2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prior article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I discussed a ",
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
                "value":" server I created on AWS EC2 and EFS.  In this article I’ll discuss the second generation of that infrastructure, which uses ",
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
                "value":" containers orchestrated by ",
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
                "value":" on an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-28-2020-eks"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"EKS cluster",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Kubernetes Infrastructure with Terraform"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Kubernetes Infrastructure with Terraform",
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
                "value":" The Jenkins server infrastructure consists of AWS resources and Kubernetes objects.  On the AWS side, there is an Application Load Balancer (ALB) and an ECR repository for the Jenkins Docker image.  On the Kubernetes side, there is an Ingress object, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NodePort",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" service, and a Deployment for Pods.  These Kubernetes objects all live on an EKS cluster. ",
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
                    "src":"https://asset.jarombek.com/posts/9-29-20-k8s-architecture.png"
                },
                "value":null,
                "children":[

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
                "value":" All this infrastructure is written as code in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jenkins-kubernetes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module.  I’ll discuss some important parts of the infrastructure here, with the full code available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/master/jenkins-kubernetes"
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
                "value":". The first important part of the infrastructure is the Amazon Elastic Container Registry (ECR) repository. ECR provides the ability to create private repositories for Docker containers.  I created a single repository for the Jenkins server Docker image. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_ecr_repository\" \"jenkins-jarombek-io-repository\" {\n  name = \"jenkins-jarombek-io\"\n  image_tag_mutability = \"MUTABLE\"\n\n  image_scanning_configuration {\n    scan_on_push = true\n  }\n\n  tags = {\n    Name = \"jenkins-jarombek-io-container-repository\"\n    Application = \"jenkins\"\n    Environment = \"all\"\n  }\n}\n",
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
                "value":" The Kubernetes Deployment object then references this repository for Pod creation. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"kubernetes_deployment\" \"deployment\" {\n  metadata {\n    name = \"jenkins-deployment\"\n    namespace = local.namespace\n\n    labels = {\n      version = local.version\n      environment = local.env\n      application = \"jenkins-server\"\n    }\n  }\n\n  spec {\n    replicas = 1\n    min_ready_seconds = 10\n\n    strategy {\n      type = \"RollingUpdate\"\n\n      rolling_update {\n        max_surge = \"1\"\n        max_unavailable = \"0\"\n      }\n    }\n\n    selector {\n      match_labels = {\n        application = \"jenkins-server\"\n        environment = local.env\n      }\n    }\n\n    template {\n      metadata {\n        labels = {\n          version = local.version\n          environment = local.env\n          application = \"jenkins-server\"\n        }\n      }\n\n      spec {\n        container {\n          name = \"jenkins-server\"\n          image = \"${local.account_id}.dkr.ecr.us-east-1.amazonaws.com/jenkins-jarombek-io:${local.short_version}\"\n\n          volume_mount {\n            mount_path = \"/var/run/docker.sock\"\n            name = \"dockersock\"\n          }\n\n          volume_mount {\n            mount_path = \"/usr/bin/docker\"\n            name = \"dockercli\"\n          }\n\n          readiness_probe {\n            period_seconds = 5\n            initial_delay_seconds = 20\n\n            http_get {\n              path = \"/login\"\n              port = 8080\n            }\n          }\n\n          port {\n            name = \"http-port\"\n            container_port = 8080\n            protocol = \"TCP\"\n          }\n\n          port {\n            name = \"jnlp-port\"\n            container_port = 50000\n          }\n        }\n\n        volume {\n          name = \"dockersock\"\n\n          host_path {\n            path = \"/var/run/docker.sock\"\n          }\n        }\n\n        volume {\n          name = \"dockercli\"\n\n          host_path {\n            path = \"/usr/bin/docker\"\n          }\n        }\n\n        automount_service_account_token = true\n        service_account_name = \"jenkins-server\"\n      }\n    }\n  }\n}\n",
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
                "value":" One thing you may have noticed in this deployment is the Docker socket mounted as a volume on the Pod container.  The reason behind mounting it is that I have Jenkins jobs which build Docker images (and often push them to ECR repositories).  Since the Jenkins server is already a Docker container, there are two ways to use Docker commands within it - to install and run Docker-in-Docker, or expose the Docker socket. Running Docker-in-Docker is documented as a bad, bug-ridden approach by Docker developers, making the Docker socket approach the obvious choice",
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
                "value":" The last two Kubernetes objects for the Jenkins server are the Ingress and the Service.  The Ingress utilizes an ALB Ingress Controller to create a load balancer on AWS for the Jenkins server.  It also uses  ExternalDNS to create a Route53 DNS record for ",
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
                        "value":"jenkins.jarombek.io",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"www.jenkins.jarombek.io",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I discussed ALB Ingress Controllers and  ExternalDNS in my previous article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-28-2020-eks"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS EKS",
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
            "language":"HCL"
        },
        "value":"resource \"kubernetes_ingress\" \"ingress\" {\n  metadata {\n    name = \"jenkins-ingress\"\n    namespace = local.namespace\n\n    annotations = {\n      \"kubernetes.io/ingress.class\" = \"alb\"\n      \"external-dns.alpha.kubernetes.io/hostname\" = \"jenkins.jarombek.io,www.jenkins.jarombek.io\"\n      \"alb.ingress.kubernetes.io/backend-protocol\" = \"HTTP\"\n      \"alb.ingress.kubernetes.io/certificate-arn\" = \"${local.cert_arn},${local.wildcard_cert_arn}\"\n      \"alb.ingress.kubernetes.io/healthcheck-path\" = \"/login\"\n      \"alb.ingress.kubernetes.io/listen-ports\" = \"[{\\\"HTTP\\\":80}, {\\\"HTTPS\\\":443}]\"\n      \"alb.ingress.kubernetes.io/healthcheck-protocol\": \"HTTP\"\n      \"alb.ingress.kubernetes.io/scheme\" = \"internet-facing\"\n      \"alb.ingress.kubernetes.io/security-groups\" = aws_security_group.jenkins-lb-sg.id\n      \"alb.ingress.kubernetes.io/subnets\" = \"${local.subnet1},${local.subnet2}\"\n      \"alb.ingress.kubernetes.io/target-type\" = \"instance\"\n      \"alb.ingress.kubernetes.io/tags\" = \"Name=jenkins-load-balancer,Application=jenkins,Environment=${local.env}\"\n    }\n\n    labels = {\n      version = local.version\n      environment = local.env\n      application = \"jenkins-server\"\n    }\n  }\n\n  spec {\n    rule {\n      host = \"jenkins.jarombek.io\"\n\n      http {\n        path {\n          path = \"/*\"\n\n          backend {\n            service_name = \"jenkins-service\"\n            service_port = 80\n          }\n        }\n      }\n    }\n\n    rule {\n      host = \"www.jenkins.jarombek.io\"\n\n      http {\n        path {\n          path = \"/*\"\n\n          backend {\n            service_name = \"jenkins-service\"\n            service_port = 80\n          }\n        }\n      }\n    }\n  }\n}\n",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NodePort",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" service reserves a port on the EKS cluster nodes for the Jenkins server. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"kubernetes_service\" \"service\" {\n  metadata {\n    name = \"jenkins-service\"\n    namespace = local.namespace\n\n    labels = {\n      version = local.version\n      environment = local.env\n      application = \"jenkins-server\"\n    }\n  }\n\n  spec {\n    type = \"NodePort\"\n\n    port {\n      port = 80\n      target_port = 8080\n      protocol = \"TCP\"\n    }\n\n    selector = {\n      application = \"jenkins-server\"\n    }\n  }\n}\n",
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
                "value":" There is also one additional service for the Java Network Launch Protocol (JNLP) on the Jenkins server, which Jenkins uses to create agents",
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
                "value":".  In my case, I’m using JNLP to create Kubernetes Pod agents for my jobs.  The code for the service is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-aws-infrastructure/blob/master/jenkins-kubernetes/modules/kubernetes/main.tf#L289-L320"
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Jenkins Dockerfile"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Jenkins Dockerfile",
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
                "value":" Let’s take a closer look at the Dockerfile for the Jenkins server image which is stored on Amazon ECR. A large portion of my Dockerfile installs technologies on my base Jenkins server, so that they can be used for Jenkins jobs that don’t use custom agents.  Below is the Dockerfile with these installations omitted.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/blob/master/jenkins-kubernetes/\ndocker/Dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"full Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is available on my GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Dockerfile"
        },
        "value":"FROM jenkins/jenkins:lts\n\n# Configure the Jenkins server with plugins and seed jobs.\nCOPY plugins.txt /usr/share/jenkins/ref/plugins.txt\nCOPY jenkins.yaml /usr/share/jenkins/ref/jenkins.yaml\nRUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt\n\nUSER jenkins\nEXPOSE 8080 50000\n",
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
                "value":" The base image used is the official Jenkins Docker image.  The image exposes port 8080 (the port the Jenkins server runs on) and port 50000 (the port for JNLP).  It also copies two files from my repository onto the Jenkins image - ",
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
                "value":" and ",
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
                        "value":"jenkins.yaml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  ",
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
                "value":" is a text file with a list of plugins and corresponding versions.  These plugins are pre-installed on the server, allowing the server administrator to bypass the initial plugin installation page when the server boots up. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"ansicolor:latest\nauthorize-project:latest\nbuild-timeout:latest\ncloudbees-folder:latest\nconfiguration-as-code:latest\ncredentials-binding:latest\nemail-ext:latest\n...\n",
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
                "value":" The full ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/blob/master/jenkins-kubernetes/\ndocker/plugins.txt"
                },
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
                "value":" file is on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"JCasC Plugin"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"JCasC Plugin",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jenkins.yaml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a Jenkins Configuration as Code (JCasC) Plugin config file.  JCasC automates Jenkins server configuration (secrets, security, users, permissions, email, additional plugin configuration, etc.)",
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
                "value":".  This is a huge timesaver, allowing a Jenkins server to be configured in a repeatable way in minutes.  In the past, this process could take hours of tinkering with the Jenkins UI. ",
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
                "value":" My full JCasC YAML file is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/blob/master/\njenkins-kubernetes/docker/jenkins-template.yaml"
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
                "value":", but I’ll also break it down piece by piece. The YAML configuration contains multiple root objects.  The first object in the configuration, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jenkins",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", specifies some Jenkins server properties. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"jenkins:\n  authorizationStrategy:\n    globalMatrix:\n      permissions:\n        - \"Overall/Administer:andy\"\n        - \"Job/Discover:guest\"\n        - \"Job/Read:guest\"\n        - \"Job/Workspace:guest\"\n        - \"View/Read:guest\"\n  clouds:\n    - kubernetes:\n        name: kubernetes\n        serverUrl: ${KUBERNETES_URL}\n        namespace: jenkins\n        jenkinsUrl: \"http://jenkins-jnlp-service/\"\n        connectTimeout: 5\n        containerCapStr: 10\n        readTimeout: 15\n  numExecutors: 4\n  securityRealm:\n    local:\n      allowsSignup: false\n      users:\n        - id: andy\n          name: andy\n          password: ${JENKINS_PASSWORD}\n        - id: guest\n          name: guest\n          password: guest\n  systemMessage: \"Andrew Jarombek's Jenkins Server\"\n",
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
                "value":" In this section I create Jenkins server users (",
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
                        "value":"andy",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"guest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), grant them permissions, configure the Kubernetes plugin which allows Pods to be used as Jenkins agents, set the maximum number of Jenkins job agent processes (executors), and write a system message for the home screen.  In the next section, I configure different credentials for Jenkins jobs to use, ranging from GitHub keys to RDS passwords. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"credentials:\n  system:\n    domainCredentials:\n      - credentials:\n        - basicSSHUserPrivateKey:\n            scope: GLOBAL\n            id: \"ajarombek-github\"\n            username: ajarombek-github\n            description: \"AJarombek GitHub Key\"\n            privateKeySource:\n              directEntry:\n                privateKey: ${SSH_PRIVATE_KEY}\n        - usernamePassword:\n            scope: GLOBAL\n            id: \"ajarombek-docker-hub\"\n            username: ${DOCKER_HUB_USERNAME}\n            password: ${DOCKER_HUB_PASSWORD}\n            description: \"DockerHub Account Credentials\"\n        - string:\n            scope: GLOBAL\n            id: \"ajarombek-github-access-token\"\n            secret: ${GITHUB_ACCESS_TOKEN}\n            description: \"AJarombek GitHub Access Token\"\n",
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
                "value":" The next section imports a global library of Groovy functions and reusable Jenkins pipeline scripts to be used by Jenkins jobs.  It also configures the Jenkins server to send emails.  Emails are a great way to get notified if a Jenkins job fails for an unexpected reason. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"unclassified:\n  globalLibraries:\n    libraries:\n      - name: \"global-jenkins-library\"\n        allowVersionOverride: true\n        defaultVersion: \"master\"\n        implicit: false\n        includeInChangesets: true\n        retriever:\n          modernSCM:\n            scm:\n              git:\n                id: \"global-jenkins-library\"\n                remote: \"git@github.com:AJarombek/global-jenkins-library.git\"\n                credentialsId: \"ajarombek-github\"\n  email-ext:\n    mailAccount:\n      smtpHost: smtp.gmail.com\n      smtpPort: 465\n      smtpUsername: andrew@jarombek.com\n      smtpPassword: ${GOOGLE_ACCOUNT_PASSWORD}\n      useSsl: true\n    charset: UTF-8\n    defaultSuffix: \"@jarombek.com\"\n    defaultContentType: text/html\n    defaultSubject: \"$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!\"\n    defaultBody: >\n      $PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS:\n\n      Check console output at $BUILD_URL to view the results.\n    debugMode: true\n  mailer:\n    smtpHost: smtp.gmail.com\n    smtpPort: 465\n    useSsl: true\n    charset: UTF-8\n    defaultSuffix: \"@jarombek.com\"\n    authentication:\n      username: andrew@jarombek.com\n      password: ${GOOGLE_ACCOUNT_PASSWORD}\n",
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
                "value":" You may have noticed that the Kubernetes URL and all the credentials have template variable placeholders (ex. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"${GOOGLE_ACCOUNT_PASSWORD}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  For the sake of keeping sensitive and dynamic information out of my ",
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
                        "value":"jenkins.yaml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/blob/master/jenkins-kubernetes/docker/push-image.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Python script",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which uses ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-26-2019-unit-test-aws-infrastructure\n#unit-testing-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"boto3 (an AWS SDK)",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to grab this information from my AWS account (specifically EKS and Secrets Manager).  The Python script takes a file named ",
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
                        "value":"jenkins-template.yaml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (The JCasC configuration with template variable placeholders), retrieves the secrets and Kubernetes URL from AWS, creates a file named ",
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
                        "value":"jenkins.yaml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with all the placeholders filled in with their final values, and optionally pushes a Docker image with this final JCasC YAML file to my AWS ECR repository.  You can view all this code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/\nblob/master/jenkins-kubernetes/docker/push-image.py"
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
                "value":" The final section of the JCasC configuration creates seed jobs, taking advantage of the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nsep-21-2018-jenkins#jenkins-jobs-and-the-dsl-plugin"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Job DSL Plugin",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The Job DSL Plugin allows Jenkins jobs to be created in Groovy code instead of manually through the UI. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"jobs:\n  - script: >\n      job(\"single-seed-job\") {\n        description(\"Freestyle Job that builds a single other job\")\n        parameters {\n          stringParam(\"repository\", \"global-jenkins-jobs\", \"Repository containing the Job DSL script\")\n          stringParam(\"branch\", \"master\", \"Repo branch containing the Job DSL script\")\n          stringParam(\"job_dsl_path\", \"\", \"Location of Job DSL script\")\n        }\n        concurrentBuild(true)\n        scm {\n          git {\n            branch(\"\\$branch\")\n            remote {\n              credentials(\"ajarombek-github\")\n              github(\"AJarombek/\\$repository\", \"ssh\", \"github.com\")\n            }\n          }\n        }\n        steps {\n          dsl {\n            external(\"\\$job_dsl_path\")\n          }\n        }\n      }\n  - script: >\n      job(\"seed-job\") {\n        description(\"Freestyle Job that builds other jobs\")\n        parameters {\n          stringParam(\"repository\", \"global-jenkins-jobs\", \"Repository containing the Job DSL scripts\")\n          stringParam(\"branch\", \"master\", \"Repo branch containing the Job DSL scripts\")\n        }\n        concurrentBuild(false)\n        scm {\n          git {\n            branch(\"\\$branch\")\n            remote {\n              credentials(\"ajarombek-github\")\n              github(\"AJarombek/\\$repository\", \"ssh\", \"github.com\")\n            }\n          }\n        }\n        steps {\n          dsl {\n            external(\"**/job_dsl.groovy\")\n          }\n        }\n      }\n  - script: >\n      pipelineJob(\"init\") {\n        description(\"Pipeline Job for initializing the Jenkins server\")\n        definition {\n          cpsScm {\n            scm {\n              git {\n                branch(\"master\")\n                remote {\n                  credentials(\"ajarombek-github\")\n                  github(\"AJarombek/global-jenkins-jobs\", \"ssh\", \"github.com\")\n                }\n              }\n              scriptPath(\"bootstrap/init/Jenkinsfile.groovy\")\n            }\n          }\n        }\n      }\n  - script: >\n      pipelineJob(\"set-folders\") {\n        description(\"Pipeline Job for setting the folder structure of the Jenkins server\")\n        definition {\n          cpsScm {\n            scm {\n              git {\n                branch(\"master\")\n                remote {\n                  credentials(\"ajarombek-github\")\n                  github(\"AJarombek/global-jenkins-jobs\", \"ssh\", \"github.com\")\n                }\n              }\n              scriptPath(\"bootstrap/set-folders/Jenkinsfile.groovy\")\n            }\n          }\n        }\n      }\n",
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
                "value":" There are four Jenkins jobs specified here.  The first two are jobs that create other jobs. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"single-seed-job",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes the path to a Job DSL Groovy file and creates a job from it.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"seed-job",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" finds all the Job DSL Groovy files in a repository and creates their corresponding jobs.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"set-folders",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes advantage of the Job DSL Plugins ability to create folders.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sets up the Jenkins server when it's first created. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Initialization Jenkins Job"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Initialization Jenkins Job",
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
                "value":" Running the initialization (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") Jenkins job is currently the only manual process of setting up the Jenkins server.  Luckily it’s a very quick process.  A shortened version of the Jenkinsfile is shown below, with the full file on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-jenkins-jobs/blob/master/bootstrap/init/Jenkinsfile.groovy"
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"pipeline {\n  agent {\n    label 'master'\n  }\n  options {\n    ansiColor('xterm')\n    timeout(time: 1, unit: 'HOURS')\n    buildDiscarder(\n      logRotator(daysToKeepStr: '10', numToKeepStr: '5')\n    )\n  }\n  stages {\n    stage(\"Clean Workspace\") {\n      steps {\n        script {\n          cleanWs()\n        }\n      }\n    }\n    stage(\"Init Scripts\") {\n      steps {\n        script {\n          sh \"\"\"\n            # Install additional dependencies not handled by the Dockerfile\n          \"\"\"\n        }\n      }\n    }\n    stage(\"Create Jobs\") {\n      steps {\n        script {\n          // The first time JOB DSL scripts are built, they will fail and need approval.\n          build(job: 'set-folders', propagate: false, wait: true)\n\n          build(\n            job: 'seed-job',\n            parameters: [\n              string(name: 'repository', value: 'global-jenkins-jobs'),\n              string(name: 'branch', value: 'master')\n            ],\n            propagate: false\n          )\n\n          // Pause the job until the user approves the scripts.\n          timeout(time: 1, unit: 'HOURS') {\n            input message: 'Approve Scripts before continuing...', ok: 'Scripts Approved'\n          }\n\n          // On the Job DSL scripts second run, they should pass.\n          build(job: 'set-folders', propagate: true, wait: true)\n\n          build(\n            job: 'seed-job',\n            parameters: [\n              string(name: 'repository', value: 'global-jenkins-jobs'),\n              string(name: 'branch', value: 'master')\n            ]\n          )\n        }\n      }\n    }\n    stage(\"Trigger Initial Scheduled Jobs\") {\n      steps {\n        script {\n          buildJobs([\n            'global-aws/cost-detection',\n            ...\n          ])\n        }\n      }\n    }\n  }\n  post {\n    always {\n      script {\n        email.sendEmail(\n          \"Jenkins Server Initialized\",\n          \"\",\n          env.JOB_NAME,\n          currentBuild.result,\n          env.BUILD_NUMBER,\n          env.BUILD_URL\n        )\n\n        cleanWs()\n      }\n    }\n  }\n}\n\ndef buildJobs(List<String> jobList) {\n  jobList.each {\n    build(job: it, propagate: false, wait: false)\n  }\n}\n",
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
                "value":" The initialization job consists of three steps.  The first step installs additional libraries (which aren’t installed in the Dockerfile) onto the Jenkins server.  The second step runs a Jenkins job named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"seed-job",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This job attempts to create all the jobs configured with the Job DSL Plugin in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-jobs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global-jenkins-jobs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository.  Since these scripts need to be manually approved, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job pauses while I approve the scripts.  The final step triggers builds for all the jobs which run on a cron schedule.  This  ensures they properly run as their schedule dictates. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Future Improvements"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Future Improvements",
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
                "value":" While I am very happy with my current Jenkins server setup, there are definitely some improvements I can make.  The first would be to automate the build of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job and to find a way to safely and automatically approve the Job DSL scripts.  Another thing would be to streamline the installation of dependencies on the Jenkins server.  Currently I’m using both the Dockerfile and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job as methods for installing dependencies. Ideally I would use a single approach.  I’m currently leaning towards having a job that installs dependencies, especially considering that in order for changes to the Dockerfile to take effect on the server, an entire deployment needs to take place. ",
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
                "value":" Alas, the perfect solution would be a one click method to build the entire Jenkins server.  This would be an improvement over the current method where I run the Python script (which pushes the Jenkins server’s Docker image to ECR), apply the Terraform configuration, and run the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job. ",
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
                "value":" You can check out all the code for my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/\nmaster/jenkins-kubernetes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins server infrastructure",
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
                    "href":"https://github.com/AJarombek/\nglobal-jenkins-jobs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins jobs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on GitHub. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "sep-29-2020-jenkins-kubernetes";
postDate = new Date('2020-09-29T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Jenkins Server Modern Infrastructure with Kubernetes on EKS",
    description: `In this article I'll discuss the second generation of that infrastructure, which 
        uses Docker containers orchestrated by Kubernetes on an EKS cluster.`,
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
            name: "Kubernetes",
            picture: "https://asset.jarombek.com/logos/k8s.png",
            color: "k8s"
        },
        {
            name: "AWS EKS",
            picture: "https://asset.jarombek.com/logos/eks.png",
            color: "eks"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "DevOps"
        },
        {
            name: "HCL"
        },
        {
            name: "YAML",
            picture: "https://asset.jarombek.com/logos/yaml.png",
            color: "yaml"
        },
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Using Docker-in-Docker for your CI or testing environment? Think twice.\", ",
            endName: "",
            linkName: "https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/",
            link: "https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/"
        },
        {
            startName: "\"Kubernetes plugin for Jenkins\", ",
            endName: "",
            linkName: "https://github.com/jenkinsci/kubernetes-plugin/blob/master/README.md",
            link: "https://github.com/jenkinsci/kubernetes-plugin/blob/master/README.md"
        },
        {
            startName: "\"Jenkins Configuration as Code\", ",
            endName: "",
            linkName: "https://www.jenkins.io/projects/jcasc/",
            link: "https://www.jenkins.io/projects/jcasc/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
