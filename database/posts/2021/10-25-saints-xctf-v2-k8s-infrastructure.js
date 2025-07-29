/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/23/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [
    {
        "el":"note",
        "attributes":{
            "type":"info"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" This is part of a series of articles on SaintsXCTF Version 2.0. The first article in the series provides an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"overview of the application",
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
                "value":" The infrastructure for the React/TypeScript frontend and Flask/Python backend for my website ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com/"
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
                "value":" is hosted on Kubernetes.  My Kubernetes infrastructure is hosted on a cluster, which is managed by AWS EKS.  This article outlines the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog?query=kubernetes&page=1"
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
                "value":" infrastructure and walks through ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog?query=Terraform&page=1"
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
                "value":" code which configures and builds the infrastructure. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"SaintsXCTF Version 2.0 Articles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"SaintsXCTF Version 2.0 Articles",
                "children":null
            }
        ]
    },
    {
        "el":"ul",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Architectural Overview",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"AWS Infrastructure",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
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
                                "value":"Kubernetes Infrastructure",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/nov-1-2021-saints-xctf-v2-react-web-app"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"React Web Application Overview",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/nov-15-2021-react-typescript"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application React and TypeScript",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/dec-3-2021-redux-react"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application Redux State Configuration",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/aug-11-2021-cypress-typescript"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application Cypress E2E Tests",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jun-30-2021-react-jss"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application JSS Modular Design",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/dec-24-2021-flask-python-api"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Flask Python API",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jan-10-2022-flask-api-testing"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Flask API Testing",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/feb-5-2022-function-api"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Function API Using API Gateway & Lambda",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/feb-18-2022-auth-api"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Auth API Using API Gateway & Lambda",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/mar-27-2022-mysql-client-kubernetes"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Database Client on Kubernetes",
                                "children":null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Infrastructure Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Infrastructure Overview",
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
                "value":" SaintsXCTF application infrastructure can be grouped into two categories - AWS and Kubernetes.  This article only discusses the Kubernetes infrastructure, which has a green background in the diagram below.  The AWS infrastructure, which has a red background in the diagram, was discussed in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njun-18-2021-saints-xctf-v2-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"a prior article",
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
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/10-25-21-k8s-architecture.png"
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
                "value":" Similar to the AWS infrastructure, the SaintsXCTF Kubernetes infrastructure is logically grouped into Terraform modules.  More specifically, there are three Terraform modules for Kubernetes infrastructure.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/saints-xctf-com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is for the web  (frontend) application, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/saints-xctf-com-api"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" second",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is for the API (backend) application, and the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/\nmaster/saints-xctf-com-ingress"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"third",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is for an Ingress object which directs traffic to the web application and API.  All three are discussed in this article. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Motivations for using Kubernetes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Motivations for using Kubernetes",
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
                    "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview#lift-and-shift-aws-architecture"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prior infrastructure for my SaintsXCTF website",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the web application and API were hosted on an EC2 instance in AWS.  While this worked okay, it presented a number of issues.  First, there was no easy way to update the application without any downtime.  Second, since the application was on a virtual machine and not a container, updates to the virtual machine often caused unexpected behavior for the application, sometimes requiring code changes. ",
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
                "value":" While updating the application infrastructure for version 2.0, I wanted to use a more lightweight container approach to my application infrastructure.  I also wanted to leverage a container orchestrator with built-in deployment management that could  update an application with zero downtime.  ",
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
                "value":" containers orchestrated with Kubernetes matched this requirement.  Since my application was already hosted on AWS, the clear choice was to use ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=aws%20eks&page=1"
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
                "value":" to host  Kubernetes infrastructure for the application. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"SaintsXCTF Web Application Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"SaintsXCTF Web Application Infrastructure",
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
                "value":" Kubernetes infrastructure for the web application consists of a service and a deployment.  The service networks traffic to the pods in the deployment.  The service YAML configuration is shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"apiVersion: v1\nkind: Service\nmetadata:\n  name: saints-xctf-web-service\n  namespace: saints-xctf\n  labels:\n    version: v1.0.0\n    environment: production\n    application: saints-xctf-web\nspec:\n  type: NodePort\n  ports:\n    - port: 80\n      targetPort: 80\n      protocol: TCP\n  selector:\n    application: saints-xctf-web\n",
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
                "value":" This YAML configuration is translated into HCL (Hashicorp Configuration Language) for use in Terraform.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/saints-xctf-com/modules/kubernetes/\nmain.tf#L137-L162"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform configuration for the service",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"kubernetes_service\" \"service\" {\n  metadata {\n    name = \"saints-xctf-web-service\"\n    namespace = local.namespace\n\n    labels = {\n      version = local.version\n      environment = local.env\n      application = \"saints-xctf-web\"\n    }\n  }\n\n  spec {\n    type = \"NodePort\"\n\n    port {\n      port = 80\n      target_port = 80\n      protocol = \"TCP\"\n    }\n\n    selector = {\n      application = \"saints-xctf-web\"\n    }\n  }\n}\n",
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
                "value":" The service object ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saints-xctf-web-service",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" navigates traffic to port 80 of the SaintsXCTF web application, which is hosted on Kubernetes pods as part of a deployment object.  The web application deployment, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saints-xctf-web-deployment",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is also translated from a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/saints-xctf-com/modules/kubernetes/\nk8s-config/deployment.yaml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"YAML file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" into ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/\nmaster/saints-xctf-com/modules/kubernetes/main.tf#L45-L135"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform configuration",
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
        "value":"resource \"kubernetes_deployment\" \"deployment\" {\n  metadata {\n    name = \"saints-xctf-web-deployment\"\n    namespace = local.namespace\n\n    labels = {\n      version = local.version\n      environment = local.env\n      application = \"saints-xctf-web\"\n    }\n  }\n\n  spec {\n    replicas = 2\n    min_ready_seconds = 10\n\n    strategy {\n      type = \"RollingUpdate\"\n\n      rolling_update {\n        max_surge = \"1\"\n        max_unavailable = \"0\"\n      }\n    }\n\n    selector {\n      match_labels = {\n        version = local.version\n        environment = local.env\n        application = \"saints-xctf-web\"\n      }\n    }\n\n    template {\n      metadata {\n        labels = {\n          version = local.version\n          environment = local.env\n          application = \"saints-xctf-web\"\n        }\n      }\n\n      spec {\n        affinity {\n          node_affinity {\n            required_during_scheduling_ignored_during_execution {\n              node_selector_term {\n                match_expressions {\n                  key = \"workload\"\n                  operator = \"In\"\n                  values = [\"production-applications\"]\n                }\n              }\n            }\n          }\n        }\n\n        container {\n          name = \"saints-xctf-web\"\n          image = \"${local.account_id}.dkr.ecr.us-east-1.amazonaws.com/${local.image}:${local.short_version}\"\n\n          readiness_probe {\n            period_seconds = 5\n            initial_delay_seconds = 20\n\n            http_get {\n              path = \"/\"\n              port = 80\n            }\n          }\n\n          liveness_probe {\n            period_seconds = 5\n            initial_delay_seconds = 20\n            failure_threshold = 4\n\n            http_get {\n              path = \"/api/\"\n              port = 80\n            }\n          }\n\n          port {\n            container_port = 80\n            protocol = \"TCP\"\n          }\n        }\n      }\n    }\n  }\n}\n",
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
                "value":"saints-xctf-web-deployment",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object creates two pods which host the SaintsXCTF web application (as configured by ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"replicas",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  The deployment strategy is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RollingUpdate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which allows for zero downtime as pods update one by one.  The pods are configured with node affinity (configured by ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"node_affinity",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), which forces all pods to exist on Kubernetes cluster nodes with a certain label, in this case ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"production-applications",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Node affinity allows me to separate production applications from non-production and prototype applications on my Kubernetes cluster.  The pods are configured with readiness probes (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"readiness_probe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and liveness probes (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"liveness_probe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  The readiness probe checks that the web application is accessible via HTTP requests, and the liveness probe checks that the API is accessible from the pod via HTTP requests. If these checks fail, a new pod is started and the current pod is terminated.  This helps ensure that my application doesn't face any downtime. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"SaintsXCTF API Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"SaintsXCTF API Infrastructure",
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
                "value":" Similar to the web application infrastructure, the API infrastructure consists of Kubernetes service and deployment objects.  Unlike the web application, the API has two services and two deployments.  One service-deployment pair is for an Nginx reverse proxy, and the other is for a uWSGI application server.  The Nginx reverse proxy sits in front of the uWSGI server, routing traffic to it.  The uWSGI application server holds the API code.  I wrote ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-24-2021-nginx-docker"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"an article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" about using Nginx reverse proxies, with the SaintsXCTF application as the case study. ",
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
                "value":" Just like the web application Kubernetes configuration, the API Kubernetes configuration has YAML documents for the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/saints-xctf-com-api/modules/kubernetes/\nk8s-config/service.yaml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"services",
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
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/\nsaints-xctf-com-api/modules/kubernetes/k8s-config/deployment.yaml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"deployments",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which are translated into ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/saints-xctf-com-api/modules/kubernetes/\nmain.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform configuration",
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
            "title":"Ingress Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Ingress Infrastructure",
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
                "value":" The SaintsXCTF Kubernetes infrastructure has an Ingress object, which creates load balancing infrastructure needed to route traffic from the internet to the web application and API.  The Ingress object utilizes an ALB Ingress Controller (now known as an AWS Load Balancer Controller) to create a load balancer on AWS for the SaintsXCTF application.  It also uses ExternalDNS to create Route53 DNS records for ",
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
                "value":", ",
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
                        "value":"www.saintsxctf.com",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"api.saintsxctf.com",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"www.api.saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". I discussed ALB Ingress Controllers and  ExternalDNS in another article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nsep-28-2020-eks"
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Again, the infrastructure is originally configured in YAML and then translated into Terraform/HCL.  The following code is the Ingress YAML configuration.  The Terraform configuration is viewable on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nsaints-xctf-infrastructure/blob/master/saints-xctf-com-ingress/modules/kubernetes/main.tf"
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
            "language":"YAML"
        },
        "value":"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: saints-xctf-ingress\n  namespace: saints-xctf\n  annotations:\n    kubernetes.io/ingress.class: alb\n    external-dns.alpha.kubernetes.io/hostname: saintsxctf.com,www.saintsxctf.com,api.saintsxctf.com,www.api.saintsxctf.com\n    alb.ingress.kubernetes.io/actions.ssl-redirect: '{\"Type\": \"redirect\", \"RedirectConfig\": {\"Protocol\": \"HTTPS\", \"Port\": \"443\", \"StatusCode\": \"HTTP_301\"}}'\n    alb.ingress.kubernetes.io/backend-protocol: HTTP\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/certificate-arn: ${ACM_CERT_ARNS}\n    alb.ingress.kubernetes.io/listen-ports: '[{\"HTTP\":80}, {\"HTTPS\":443}]'\n    alb.ingress.kubernetes.io/healthcheck-path: '/'\n    alb.ingress.kubernetes.io/healthcheck-protocol: HTTP\n    alb.ingress.kubernetes.io/security-groups: ${SECURITY_GROUPS_ID}\n    alb.ingress.kubernetes.io/subnets: ${SUBNET_IDS}\n    alb.ingress.kubernetes.io/target-type: instance\n    alb.ingress.kubernetes.io/tags: Name=saints-xctf-load-balancer,Application=saints-xctf,Environment=${ENV}\n  labels:\n    version: v1.0.0\n    environment: production\n    application: saints-xctf-api\nspec:\n  rules:\n    - host: saintsxctf.com\n      http:\n        paths:\n          - path: /*\n            backend:\n              serviceName: ssl-redirect\n              servicePort: use-annotation\n          - path: /*\n            backend:\n              serviceName: saints-xctf-web-service\n              servicePort: 80\n    - host: www.saintsxctf.com\n      http:\n        paths:\n          - path: /*\n            backend:\n              serviceName: ssl-redirect\n              servicePort: use-annotation\n          - path: /*\n            backend:\n              serviceName: saints-xctf-web-service\n              servicePort: 80\n    - host: api.saintsxctf.com\n      http:\n        paths:\n          - path: /*\n            backend:\n              serviceName: ssl-redirect\n              servicePort: use-annotation\n          - path: /*\n            backend:\n              serviceName: saints-xctf-api\n              servicePort: 80\n    - host: www.api.saintsxctf.com\n      http:\n        paths:\n          - path: /*\n            backend:\n              serviceName: ssl-redirect\n              servicePort: use-annotation\n          - path: /*\n            backend:\n              serviceName: saints-xctf-api\n              servicePort: 80\n",
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
                "value":" Four hosts are specified in the configuration - ",
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
                "value":", ",
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
                        "value":"api.saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and their ",
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
                        "value":"www",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefixed equivalents.  Traffic to these domains are appropriately routed to either the SaintsXCTF web application or API via their Kubernetes services.  The most interesting configuration fields are found in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"annotations",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" dictionary.  All the ",
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
                "value":" annotations configure an AWS load balancer to route traffic to the Kubernetes cluster. The ",
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
                "value":" annotation creates Route53 DNS records for my SaintsXCTF web application & API domains.  With these DNS records created, HTTP/HTTPS requests to the  four ",
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
                "value":" domains are routed to the AWS load balancer created by the Ingress object, which  in turn routes traffic to my Kubernetes Pods. ",
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
                "value":" With the Ingress object and Service/Deployment objects created in Kubernetes, the website and API are fully functional and accessible from clients browsing the internet! ",
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
                "value":" Maintaining my SaintsXCTF web application and API infrastructure on Kubernetes is a massive improvement over my previous AWS EC2 virtual machine setup.  With Kubernetes, I can easily release new versions of my website and API with zero downtime.  Terraform also improves my ability to quickly alter Kubernetes infrastructure, since all the infrastructure is configured as code and can be created, updated, or destroyed on demand.  All the code for my Kubernetes infrastructure is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure"
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
                "value":". I also have ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/test-k8s"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"test code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for my Kubernetes infrastructure, which is discussed further in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\noct-10-2021-kubernetes-tests-go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"another article",
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

preview = content.slice(1, 3);

postName = "oct-25-2021-saints-xctf-v2-k8s-infrastructure";
postDate = new Date('2021-10-25T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "SaintsXCTF Version 2.0: Kubernetes Infrastructure",
    description: `This article outlines the Kubernetes infrastructure and walks through Terraform code which configures 
        and builds the infrastructure.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
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
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "HCL"
        },
        {
            name: "YAML",
            picture: "https://asset.jarombek.com/logos/yaml.png",
            color: "yaml"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: []
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
