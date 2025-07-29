/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 3/20/2022
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
                "value":".  You ",
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
                        "value":"DO NOT",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" need to read prior articles in the series to fully understand this article. ",
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
                "value":" In the first version of my ",
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
                        "value":"SaintsXCTF application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", one underdeveloped aspect of the technology stack was the MySQL database infrastructure.  The only way to access the production database was to create a bastion host and interact with it via the command line.  This bastion host was a server that was only accessible from my IP address and could only interact with my MySQL database.  All other network ports were closed. ",
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
                "value":" While this was an okay start, I really wanted a user interface to interact with the MySQL database with similar functionality to a local MySQL IDE, such as DataGrip.  After researching different options, I decided to use phpMyAdmin, a MySQL administrative client that can run on a web server. ",
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
                "value":" My approach is to run phpMyAdmin on a container within a Kubernetes deployment.  This way, I can create and destroy the phpMyAdmin   client quickly depending on my needs. ",
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
                "value":" In this article, I'll give an overview of phpMyAdmin and share the infrastructure needed to create it. ",
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
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/oct-25-2021-saints-xctf-v2-k8s-infrastructure"
                        },
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
                        "el":"strong",
                        "attributes":null,
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
            "title":"phpMyAdmin Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"phpMyAdmin Overview",
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
                "value":" phpMyAdmin is a web application that allows administrators to view MySQL databases, tables, and more.  Administrators can also execute queries and other SQL statements in the web application UI.  In many ways, phpMyAdmin operates the same as a desktop SQL IDE. ",
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
                "value":" When loading the webpage for phpMyAdmin, users are presented with the following screen. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-27-22-phpmyadmin.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" From here, database connection details are entered.  If phpMyAdmin is successful in connecting to the database, the following webpage is displayed. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-27-22-homepage.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" Multiple options are presented on this page, such as viewing schemas within the database or writing SQL statements. SQL statements can be entered into a text box and executed, with results shown in the UI. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-27-22-write-query.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-27-22-query-result.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Kubernetes Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Kubernetes Infrastructure",
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
                "value":" All the infrastructure for the phpMyAdmin database client is written as code using Terraform.  The phpMyAdmin server is a container running within a Kubernetes cluster.  My Kubernetes cluster is hosted using AWS EKS, with the cluster infrastructure existing in an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/master/eks"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"eks",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module within my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global-aws-infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
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
                "value":" My phpMyAdmin server infrastructure has its own Terraform module named ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nsaints-xctf-infrastructure/tree/master/database-client"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"database-client",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which exists in my ",
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
                        "value":"saints-xctf-infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository.  This diagram shows all the infrastructure components. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-27-22-infra-diagram.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" Most of the infrastructure code exists within a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/\nmaster/database-client/main.tf"
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
                "value":" file.  The most important resource for the web server, the Kubernetes Deployment object, has the following setup. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"kubernetes_deployment\" \"deployment\" {\n  metadata {\n    name = \"saints-xctf-database-client-deployment\"\n    namespace = \"saints-xctf\"\n\n    labels = {\n      version = local.version\n      environment = \"all\"\n      application = \"saints-xctf-database-client\"\n    }\n  }\n\n  spec {\n    replicas = 1\n    min_ready_seconds = 10\n\n    strategy {\n      type = \"RollingUpdate\"\n\n      rolling_update {\n        max_surge = \"1\"\n        max_unavailable = \"0\"\n      }\n    }\n\n    selector {\n      match_labels = {\n        version = local.version\n        environment = \"all\"\n        application = \"saints-xctf-database-client\"\n      }\n    }\n\n    template {\n      metadata {\n        labels = {\n          version = local.version\n          environment = \"all\"\n          application = \"saints-xctf-database-client\"\n        }\n      }\n\n      spec {\n        affinity {\n          node_affinity {\n            required_during_scheduling_ignored_during_execution {\n              node_selector_term {\n                match_expressions {\n                  key = \"workload\"\n                  operator = \"In\"\n                  values = [\"development-tests\"]\n                }\n              }\n            }\n          }\n        }\n\n        container {\n          name = \"saints-xctf-database-client\"\n          image = \"phpmyadmin/phpmyadmin:latest\"\n\n          readiness_probe {\n            period_seconds = 5\n            initial_delay_seconds = 20\n\n            http_get {\n              path = \"/\"\n              port = 80\n            }\n          }\n\n          env {\n            name = \"PMA_ARBITRARY\"\n            value = \"1\"\n          }\n\n          port {\n            container_port = 80\n            protocol = \"TCP\"\n          }\n        }\n      }\n    }\n  }\n}\n",
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
                "value":" The Kubernetes Deployment runs a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"phpmyadmin/phpmyadmin:latest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" container, which starts a phpMyAdmin web server.  Importantly, a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PMA_ARBITRARY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" environment variable on the container is given a value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This determines that any arbitrary MySQL database can be accessed from phpMyAdmin",
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
                "value":".  The alternative is to make phpMyAdmin purpose-built for a single MySQL database. ",
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
                "value":" The remainder of the infrastructure deals with networking and setting up a domain name for the phpMyAdmin server.  You can view it in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/database-client/main.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" main.tf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, and read more about how this setup works in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\noct-25-2021-saints-xctf-v2-k8s-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF Kubernetes Infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" article. ",
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
                "value":" Creating a phpMyAdmin server on Kubernetes is a quick way to administer a MySQL database.  It can be spun up and down at a moments notice, and provides similar functionality to a desktop IDE application.  All the code discussed in this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/database-client"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" GitHub",
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

postName = "mar-27-2022-mysql-client-kubernetes";
postDate = new Date('2022-03-27T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Running a MySQL Database Client on Kubernetes",
    description: `In this article, I'll give an overview of the phpMyAdmin database client and share the Kubernetes 
        infrastructure needed to create it.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "MySQL",
            picture: "https://asset.jarombek.com/logos/mysql.png",
            color: "mysql"
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
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Official phpMyAdmin Docker image\", ",
            endName: "",
            linkName: "https://hub.docker.com/r/phpmyadmin/phpmyadmin/",
            link: "https://hub.docker.com/r/phpmyadmin/phpmyadmin/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
