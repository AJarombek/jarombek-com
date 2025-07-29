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
                "value":" Recently I made the decision to move my applications to ",
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
                "value":", specifically hosted in an EKS cluster on AWS.  Before making this decision, my applications (",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.saintsxctf.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saintsxctf.com",
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
                    "href":"https://jarombek.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") were hosted using different methods.  ",
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
                        "value":"saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was hosted on autoscaled ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=AWS%20EC2&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS EC2",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instances and ",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was hosted on AWS ECS.  I also had prototypes using different hosting methods and a ",
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
                "value":" server which was hosted on EC2 instances.  Moving all these applications to Kubernetes unifies the deployment process and allows me to take advantage of ",
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
                        "value":"containerization",
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
                    "href":"https://jarombek.com/blog/may-13-2019-kubernetes-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"container orchestration",
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
                "value":" In this article, I'll discuss the process for setting up my EKS cluster with Terraform.  I'll also detail my experience deploying ALB Ingress Controller and External DNS pods on the cluster. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"EKS Cluster Terraform Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"EKS Cluster Terraform Infrastructure",
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
                "value":" One thing I've noticed with EKS is that it's very difficult to create Terraform infrastructure for a cluster from scratch.  This difficulty is also true for CloudFormation, so it seems to be an EKS specific weakness.  Because of this, I decided to use a community made ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://registry.terraform.io/\nmodules/terraform-aws-modules/eks/aws/12.1.0"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"EKS module",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" from the Terraform registry.  I've found this module to be very reliable, and because EKS is updated rather frequently, it helps me avoid spending time fixing my Terraform configuration. ",
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
                "value":" With the community Terraform module, configuration for a cluster is very simple.  Besides calling the module, the only resource needed to get the cluster set up is an IAM policy for worker nodes in the cluster (depending on your use case, this can be omitted as well).  The following code snippet configures  the cluster. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"module \"andrew-jarombek-eks-cluster\" {\n  source = \"terraform-aws-modules/eks/aws\"\n  version = \"~> 12.1.0\"\n\n  create_eks = true\n  cluster_name = local.cluster_name\n  cluster_version = \"1.16\"\n  vpc_id = data.aws_vpc.application-vpc.id\n  subnets = [\n    data.aws_subnet.kubernetes-grandmas-blanket-public-subnet.id,\n    data.aws_subnet.kubernetes-dotty-public-subnet.id\n  ]\n\n  worker_groups = [\n    {\n      instance_type = \"t2.medium\"\n      asg_max_size = 2\n      asg_desired_capacity = 1\n    }\n  ]\n}\n\nresource \"aws_iam_policy\" \"worker-pods-policy\" {\n  name = \"worker-pods\"\n  path = \"/kubernetes/\"\n  policy = file(\"${path.module}/worker-pods-policy.json\")\n}\n\nresource \"aws_iam_role_policy_attachment\" \"worker-pods-role-policy\" {\n  policy_arn = aws_iam_policy.worker-pods-policy.arn\n  role = module.andrew-jarombek-eks-cluster.worker_iam_role_name\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Creating Cluster-Wide Objects"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Creating Cluster-Wide Objects",
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
                "value":" Once the cluster is running, I create Kubernetes objects and resources that can be utilized by all applications.  The first resources I create are namespaces, which provide a logical separation of the cluster for different applications and environments.  Namespaces act as virtual clusters with object and resource name scoping",
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
                "value":".  This means there can be two objects (for example, two pods) with the same name in different namespaces. ",
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
                "value":" In my cluster, each application gets at least one namespace (except for prototypes, which all exist in the same namespace).  If the application has a development environment along with a production environment, it gets one namespace for each environment.  For example, my ",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application has two namespaces - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jarombek-com",
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
                "value":"jarombek-com-dev",
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
                "value":" There are multiple ways to automate the creation of these Kubernetes objects.  Some approaches include using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubectl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CLI or using a high-level programming language API such as the Kubernetes Go client",
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
                "value":".  The approach I decided to take was to just use Terraform! Terraform has a provider which allows you to provision Kubernetes objects and resources on a cluster. ",
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
                "value":" The biggest benefit of using Terraform is that the same language and CLI commands are used to build the cluster and the Kubernetes objects.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://registry.terraform.io/providers/hashicorp/\nkubernetes/latest/docs/guides/getting-started#why-terraform"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" lists out some other reasons to use Terraform for Kubernetes object management. ",
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
                "value":" Below is an example of a Kubernetes object defined in Terraform.  It defines a namespace for my ",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_eks_cluster\" \"cluster\" {\n  name = module.andrew-jarombek-eks-cluster.cluster_id\n}\n\ndata \"aws_eks_cluster_auth\" \"cluster\" {\n  name = module.andrew-jarombek-eks-cluster.cluster_id\n}\n\nprovider \"kubernetes\" {\n  host = data.aws_eks_cluster.cluster.endpoint\n  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)\n  token = data.aws_eks_cluster_auth.cluster.token\n  load_config_file = false\n}\n\nresource \"kubernetes_namespace\" \"jarombek-com-namespace\" {\n  metadata {\n    name = \"jarombek-com\"\n\n    labels = {\n      name = \"jarombek-com\"\n      environment = \"production\"\n    }\n  }\n}\n",
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
                "value":" The Kubernetes provider needs to be configured once before building any Kubernetes resources with Terraform. As you can see in the code snippet, I pass parameters to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"provider",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object from the existing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_eks_cluster",
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
                "value":"aws_eks_cluster_auth",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" data sources on AWS.  Then I can create a new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubernetes_namespace",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource.  For reference, an  equivalent YAML file for this resource looks like this: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: jarombek-com\n  labels:\n    name: jarombek-com\n    environment: production\n",
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
                "value":" I often keep the YAML documents in a folder alongside my Terraform infrastructure for reference. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"ALB Ingress Controller and External DNS"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"ALB Ingress Controller and External DNS",
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
                "value":" Kubernetes provides multiple ways to configure networking capabilities.  Three options are available to make applications on Kubernetes accessible outside the cluster - a ",
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
                "value":" service, a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LoadBalancer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" service, or an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ingress",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object",
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
                "value":".  ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LoadBalancer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" services have limitations - ",
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
                "value":" services can only use ports ",
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
                        "value":"30000",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"-",
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
                        "value":"32767",
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
                "el":"code",
                "attributes":null,
                "value":"LoadBalancer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" services can only direct traffic to a single application",
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
                "value":".  Due to these limitations, I use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ingress",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects and ingress controllers for directing traffic to my applications. ",
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
                "value":" Ingress objects take network requests and forward them to services defined in the Kubernetes cluster. In order for an ingress to work, an ingress controller must be running in the cluster.  An ingress controller is simply a pod.  There are many different ingress controller implementations.  AWS has its own implementation called the ALB Ingress Controller.  The ALB Ingress Controller watches for Ingress objects and creates AWS infrastructure such as Application Load Balancers (ALBs) if the Ingress objects have the proper tags",
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
                "value":".  For example, my Jenkins server has the following Ingress object: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: jenkins-ingress\n  namespace: jenkins\n  annotations:\n    kubernetes.io/ingress.class: alb\n    external-dns.alpha.kubernetes.io/hostname: jenkins.jarombek.io,www.jenkins.jarombek.io\n    alb.ingress.kubernetes.io/backend-protocol: HTTP\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/certificate-arn: ${ACM_CERT_ARNS}\n    alb.ingress.kubernetes.io/listen-ports: '[{\"HTTP\":80}, {\"HTTPS\":443}]'\n    alb.ingress.kubernetes.io/healthcheck-path: '/login'\n    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP\n    alb.ingress.kubernetes.io/security-groups: ${SECURITY_GROUPS_ID}\n    alb.ingress.kubernetes.io/subnets: ${SUBNET_IDS}\n    alb.ingress.kubernetes.io/target-type: instance\n    alb.ingress.kubernetes.io/tags: Name=jenkins-load-balancer,Application=jenkins,Environment=${ENV}\n  labels:\n    version: v1.0.0\n    environment: production\n    application: jenkins-server\n  spec:\n    rules:\n      - host: jenkins.jarombek.io\n        http:\n          paths:\n            - path: /*\n              backend:\n                serviceName: jenkins-service\n                servicePort: 80\n      - host: www.jenkins.jarombek.io\n        http:\n          paths:\n            - path: /*\n            backend:\n              serviceName: jenkins-service\n              servicePort: 80\n",
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
                "value":" This Ingress object routes traffic from the ",
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
                "value":" domains to a Jenkins server on my Kubernetes cluster.  Take note of all the tags on the Ingress object with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alb.ingress.kubernetes.io",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefix.  The ALB Ingress controller uses these annotations to determine the configuration of the load balancer it builds on AWS",
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
                "value":".  Also notice there is an additional annotation with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"external-dns.alpha.kubernetes.io",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefix.  Although the ALB Ingress Controller builds the load balancer AWS infrastructure, it does not build any AWS Route53 DNS records for the domain names that the load balancer takes in traffic from.  To build these DNS records, an additional pod called External DNS needs to run on the Kubernetes cluster",
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
                "value":". External DNS is not strictly tied to AWS, but in my use cases I ask it to configure AWS Route53 records. To start the ALB Ingress Controller and External DNS, I added more Terraform Kubernetes resources.  The configuration is a bit long, so you can view it in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/\nblob/master/eks/main.tf#L359-L595"
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
                "value":" on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Debugging with kubectl"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Debugging with kubectl",
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
                "value":" One of the things I've noticed is that sometimes the ALB Ingress Controller and External DNS don't work as I expect them to.  Luckily this is pretty easy to debug.  When The Terraform EKS module creates the cluster, it also creates a ",
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
                        "value":"kubeconfig",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file which can be used for ",
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
                        "value":"kubectl",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" authentication.  Since the ALB Ingress Controller and External DNS are simply Kubernetes pods, their logs can be viewed with ",
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
                        "value":"kubectl",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Doing this is as simple as the following commands: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"export KUBECONFIG=/path/to/kubeconfig\n\n# My ALB Ingress Controller and External DNS pods are in the kube-system namespace.\nkubectl get po -n kube-system\nkubectl logs -f ${alb-ingress-controller-pod-name} -n kube-system\nkubectl logs -f ${external-dns-pod-name} -n kube-system\n",
        "children":null
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
                "value":" I've always enjoyed using Kubernetes to orchestrate application infrastructure, so I'm happy to have my own cluster in AWS.  All the code I use to build the EKS cluster is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/global-aws-infrastructure/tree/master/eks"
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
    }
];

preview = content.slice(0, 2);

postName = "sep-28-2020-eks";
postDate = new Date('2020-09-28T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Building an AWS EKS cluster with Terraform",
    description: `In this article, I’ll discuss the process for setting up my EKS cluster with 
        Terraform.  I'll also detail my experience deploying ALB Ingress Controller and External DNS 
        pods on the cluster.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "AWS EKS",
            picture: "https://asset.jarombek.com/logos/eks.png",
            color: "eks"
        },
        {
            name: "Kubernetes",
            picture: "https://asset.jarombek.com/logos/k8s.png",
            color: "k8s"
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
            name: "Container Orchestrator"
        },
        {
            name: "HCL"
        },
        {
            name: "DevOps"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Namespaces: When to Use Multiple Namespaces\", ",
            endName: "",
            linkName: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#when-to-use-multiple-namespaces",
            link: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#when-to-use-multiple-namespaces"
        },
        {
            startName: "\"client-go\", ",
            endName: "",
            linkName: "https://github.com/kubernetes/client-go",
            link: "https://github.com/kubernetes/client-go"
        },
        {
            startName: "Marko Lukša, ",
            endName: " (Shelter Island, NY: Manning, 2018), 135",
            linkName: "Kubernetes in Action",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 142",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "\"How ALB ingress controller works\", ",
            endName: "",
            linkName: "https://kubernetes-sigs.github.io/aws-alb-ingress-controller/guide/controller/how-it-works/",
            link: "https://kubernetes-sigs.github.io/aws-alb-ingress-controller/guide/controller/how-it-works/"
        },
        {
            startName: "\"ExternalDNS\", ",
            endName: "",
            linkName: "https://github.com/kubernetes-sigs/external-dns",
            link: "https://github.com/kubernetes-sigs/external-dns"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
