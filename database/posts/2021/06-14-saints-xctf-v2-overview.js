/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/12/2021
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
                "value":" On December 24th 2016, I released my first website ",
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
                "value":".  I was still a senior in college at the time, and used my limited software development knowledge from classes and a summer internship to build the application.  SaintsXCTF is a training log designed for my college Cross Country and Track & Field teams at St. Lawrence University.  Running competitively in college had a major impact on my life, and I was really proud to create the website to assist my teammates and coaches.  Shortly after releasing the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"website",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I created an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-android"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Android application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"iOS application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for SaintsXCTF.  With SaintsXCTF accessible via web browsers and mobile applications, I felt my development work was complete and moved on to other programming projects. ",
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
                "value":" As I began my professional software engineering career in the summer of 2017, I gradually learned industry best practices and became more well rounded as a developer.  At this point, certain shortcomings and misguided assumptions about my SaintsXCTF applications became apparent.  First, the core web application and API did not follow the latest industry standards.  Second, all three applications were not properly tested and were prone to degradation if left unchecked.  Third, the security & infrastructure of the applications was very basic and not fault tolerant. Lastly, my assumption that releasing the applications meant my work was done proved to be incorrect. As all software engineers know, the work just begins when an application is initially released. ",
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
                "value":" These realizations resulted in a multi-year effort to create a new version of SaintsXCTF that fixed all the issues with  the original.  I decided upon a two step process to get the original version of SaintsXCTF converted to the  new version.  The first step began in December 2018 and was completed in February 2019.  This step moved the website, API, and database infrastructure to AWS.  All the infrastructure was written as code using Terraform.  The second step began in June 2019 and was completed in May 2021.  This two year development step rewrote the SaintsXCTF ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"web application",
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
                    "href":"https://github.com/AJarombek/saints-xctf-api"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"API",
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
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It also created a new ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-auth"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"authentication API",
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
                    "href":"https://github.com/AJarombek/saints-xctf-functions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Lambda Function API",
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
                "value":" This article explores the architectural changes to the SaintsXCTF application across these iterations.  Subsequent articles discuss certain components, technologies, and design decisions in SaintsXCTF 2.0. ",
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
                        "el":"strong",
                        "attributes":null,
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
                            "href":"https://jarombek.com/blog/jun-15-2021-saints-xctf-v2-aws-infrastructure"
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
            "title":"Initial Architecture"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Initial Architecture",
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
                "value":" The initial SaintsXCTF infrastructure was extremely barebones, consisting of a single hosted linux server. This server, a virtual machine hosted by Linode, ran the web application, API, and database. ",
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
                    "src":"https://asset.jarombek.com/posts/6-14-21-initial-architecture.png"
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
                "value":" There are many flaws with this architecture design.  The most obvious issue is that the linux server is a single point of failure.  If the server goes down, so does the website, API, and database.  Worst of all, in the case of a catastrophic failure where the virtual machine’s file system isn’t recoverable, all the application data is lost.  For an application with user information and exercise logs uploaded every day, this is an unacceptable level of risk. ",
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
                "value":" The initial UI and API code was tightly coupled into a single codebase. The API was written in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=PHP&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"PHP",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" without the use of any server framework. The UI code was written in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=JavaScript&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JavaScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" using the JQuery library. ",
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
                "value":" These technologies have their fair share of issues as well.  In the UI technology ecosystem, JQuery is infamous for resulting in difficult to read spaghetti code.  With modern front-end frameworks and libraries such as React and Angular, UI code has become more modular, clean, and reusable.  In college, I wasn't aware of these libraries, so JQuery was a logical starting point.  An additional problem with the UI code was the stylesheet.  The UI consisted of one single CSS file for the entire application.  This resulted in hard to identify styling issues, especially when adding new styles to one page negatively impacted another page.  Once again, modern CSS preprocessors and CSS in JavaScript libraries have greatly improved the modularity of stylesheets as modern frameworks and libraries have for JavaScript code. ",
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
                "value":" In the API technology ecosystem, the lack of a server-side framework resulted in hard to read code.  Also, certain actions such as creating classes that represent HTTP request objects were written by me.  If I used a back-end framework instead, these classes would have been provided for me.  I was reinventing the wheel without realizing it.  Another issue with the API was that it shared the same codebase and build process (a manual SFTP upload to the linux server) as the front-end code.  This meant if the website went down, the API would as well.  If new UI code was deployed, the API was redeployed as well.  In the second version of the application, I redesigned the codebase to separate the UI and API. ",
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
                "value":" Due to all these flaws in the initial website’s technology stack and infrastructure, I stopped  enhancing the functionality of the application shortly after releasing it.  Instead, I began planning an iterative process of refurbishing the application up to industry standards. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Lift and Shift AWS Architecture"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Lift and Shift AWS Architecture",
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
                "value":" Before creating entirely new codebases for the UI and API, I fixed all the fatal flaws with the initial version of the application.  The biggest flaw of the initial design was the linux server, which was a single point of failure.  If that server went down, everything would have been lost. ",
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
                "value":" To remedy this issue I redesigned the infrastructure on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=AWS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and wrote the infrastructure as code using ",
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
                "value":".  As a result, I  was able to build the infrastructure in a repeatable manner.  This new infrastructure was designed without any single points of failure. ",
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
                    "src":"https://asset.jarombek.com/posts/6-14-21-aws-lift-shift-architecture.png"
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
                "value":" From the end user perspective, nothing changed while using the application after these changes.  However, the reliability of the application greatly increased.  First, in a worst case scenario where the infrastructure broke, Terraform scripts were capable of recreating the infrastructure in a matter of minutes. ",
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
                "value":" Second, I implemented an AWS Lambda function (not shown in the infrastructure diagram) which takes ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-3-2019-rds-backups-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"database backups",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" daily and uploads them to S3. Therefore, the new worst case scenario would result in one day of lost data; a great improvement over losing everything. ",
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
                "value":" Luckily, this scenario is extremely unlikely.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=aws%20rds&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS RDS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (the MySQL database) and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=aws%20ec2&page=1"
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
                "value":" (the API and web application server) have impressive uptime percentages of 99.95% and 99.99%, respectively",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1,2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  RDS also takes snapshots on a regular basis for disaster recovery purposes.  With this impressive reliability, I never had to use my database backup files to restore the database.  Nevertheless, the peace of mind it gave me was worth it. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Version 2.0 Architecture"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Version 2.0 Architecture",
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
                "value":" With the application infrastructure in a reliable state, I took my time creating a second version of the web application and API.  With increased knowledge of cloud infrastructure, containers, and container orchestrators, I also decided to rewrite the application infrastructure for a third time.  I released this new codebase at the end of May 2021. ",
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
                    "src":"https://asset.jarombek.com/posts/6-14-21-v2-architecture.png"
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
                "value":" The updated infrastructure for the new version of the application is still hosted on AWS and written as code with Terraform.  The biggest infrastructure change was moving to ",
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
                "value":" on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=EKS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"EKS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Both the API and web application are deployed on Kubernetes pods, with traffic routed to them from an AWS load balancer.  All the Kubernetes infrastructure is created with Terraform as well.  With the combined ease of Terraform and elegance of Kubernetes deployments, updating or reverting a website or API version is as easy as building ",
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
                "value":" images and applying Terraform changes.  I go into all the technical details of this process in the article on SaintsXCTF Kubernetes Infrastructure. ",
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
                "value":" Other infrastructure changes include the use of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=API%20Gateway&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"API Gateway",
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
                    "href":"https://jarombek.com/blog?query=AWS%20Lambda&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Lambda",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  There are two APIs deployed on API Gateway - an authentication API (",
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
                        "value":"auth.saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and a function API (",
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
                        "value":"fn.saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  The authentication API has endpoints for creating authentication tokens and validating authentication tokens.  These tokens are ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=JWT&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JWTs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that have a lifespan of one hour.  This authentication approach is a major improvement over my old implementation, which just used a static passcode in the authorization header for all API calls. ",
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
                "value":" The function API serves many purposes, including profile picture uploads and all the email functionality on the website.  Profile pictures are saved and accessed from an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=AWS%20S3&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS S3",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" bucket. ",
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
                "value":" The API and web application technology stacks where built from the ground up for the new version.  The API now uses the Flask server side library, which is written in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Python&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The web application uses ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=React&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", Redux, and  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=JSS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JSS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This time around all the front-end code is written in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=TypeScript&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"TypeScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instead of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=JavaScript&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JavaScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The only unchanged technology between the two versions of the application is the MySQL database, which is hosted on AWS RDS.  All these technologies and their use in SaintsXCTF are discussed in depth in separate articles. ",
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
                "value":" SaintsXCTF has undergone massive changes since its initial release in December 2016.  My knowledge of the software engineering landscape has grown a lot since my senior year of college, and that growth is displayed in the technological changes of SaintsXCTF.  Learning from and evolving this application is invaluable to my growth as a software engineer, and I’m excited for its continued evolution in the future. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "jun-14-2021-saints-xctf-v2-overview";
postDate = new Date('2021-06-14T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "SaintsXCTF Version 2.0: Architectural Overview",
    description: `This article explores architectural changes to the SaintsXCTF application across multiple 
        iterations.  Subsequent articles discuss certain components, technologies, and design decisions in 
        SaintsXCTF 2.0.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Kubernetes",
            picture: "https://asset.jarombek.com/logos/k8s.png",
            color: "k8s"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "TypeScript",
            picture: "https://asset.jarombek.com/logos/ts.png",
            color: "typescript"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "PHP",
            picture: "https://asset.jarombek.com/logos/php.svg",
            color: "php"
        },
        {
            name: "iOS",
            picture: "https://asset.jarombek.com/logos/ios.png",
            color: "ios"
        },
        {
            name: "Android",
            picture: "https://asset.jarombek.com/logos/android.png",
            color: "android"
        },
        {
            name: "Flask",
            picture: "https://asset.jarombek.com/logos/flask.png",
            color: "flask"
        },
        {
            name: "React",
            picture: "https://asset.jarombek.com/logos/react.png",
            color: "react"
        },
        {
            name: "Redux",
            picture: "https://asset.jarombek.com/logos/redux.png",
            color: "redux"
        },
        {
            name: "JSS",
            picture: "https://asset.jarombek.com/logos/jss.png",
            color: "jss"
        },
        {
            name: "MySQL",
            picture: "https://asset.jarombek.com/logos/mysql.png",
            color: "mysql"
        },
        {
            name: "JQuery",
            picture: "https://asset.jarombek.com/logos/jquery.png",
            color: "jquery"
        },
        {
            name: "AWS API Gateway",
            picture: "https://asset.jarombek.com/logos/apigateway.svg",
            color: "apigateway"
        },
        {
            name: "AWS EKS",
            picture: "https://asset.jarombek.com/logos/eks.png",
            color: "eks"
        },
        {
            name: "AWS EC2",
            picture: "https://asset.jarombek.com/logos/ec2.png",
            color: "ec2"
        },
        {
            name: "AWS Lambda",
            picture: "https://asset.jarombek.com/logos/awslambda.png",
            color: "awslambda"
        },
        {
            name: "AWS S3",
            picture: "https://asset.jarombek.com/logos/awss3.svg",
            color: "awss3"
        },
        {
            name: "AWS RDS",
            picture: "https://asset.jarombek.com/logos/awsrds.png",
            color: "awsrds"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Amazon RDS Service Level Agreement\", ",
            endName: "",
            linkName: "https://aws.amazon.com/rds/sla/",
            link: "https://aws.amazon.com/rds/sla/"
        },
        {
            startName: "\"Amazon Compute Service Level Agreement\", ",
            endName: "",
            linkName: "https://aws.amazon.com/compute/sla/",
            link: "https://aws.amazon.com/compute/sla/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
