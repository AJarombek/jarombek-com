/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/17/2021
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
                "value":" Many of my applications contain frontend components and API components.  These two components are loosely coupled but communicate with each other over HTTPS.  For example, my ",
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
                "value":" application has a React frontend which communicates with a Flask REST API backend, along with other API Gateway REST APIs.  One way to accomplish communication from a frontend to an API is by explicitly writing the URLs of the APIs in the frontend code.  This works fine, but it also exposes information about API origin servers to clients. Origin server information exposure can be avoided by passing all API traffic through the same URL as the frontend application. This is accomplished using a reverse proxy. ",
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
                "value":" The following image shows my SaintsXCTF website, and how the URL of the API is hidden from clients.  If users inspect the website's network traffic, they see HTTPS requests sent to the reverse proxy server for ",
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
                "value":", instead of the actual API server ",
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
                    "src":"https://asset.jarombek.com/posts/9-24-21-shared-url.png"
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
                "value":" This article discusses reverse proxy servers, shows examples from my applications, and provides application source code; allowing you to achieve similar results.  More specifically, it looks at creating Nginx reverse proxies in Docker containers. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is an Nginx Reverse Proxy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is an Nginx Reverse Proxy?",
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
                "value":" When discussing Nginx reverse proxies, there are two distinct technologies to unpack: Nginx and reverse proxies. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Nginx"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Nginx (pronounced Engine-X) is an open source web server which can be used as a reverse proxy",
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
                "value":".  It is commonly used for serving content from HTTP requests, as well as caching and load balancing requests.  Nginx is comparable in popularity with Apache HTTP Server, which is another open source web server.  Nginx has its own configuration language, which engineers use to adjust the web server's behavior",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Reverse Proxy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A reverse proxy server sits between a client and one or more backend servers.  Reverse proxy servers intake   requests from a client, and appropriately distributes those requests to servers sitting behind it.  When a  reverse proxy server sends responses from it's backend servers to a client, it does so without alluding to the existence of backend servers at all.  From the client's perspective, responses originate from the reverse proxy server itself.  Reverse proxy servers are used to hide backend servers, cache responses, load balance, and more",
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
                "value":" Using Nginx's configuration language, servers can be configured as reverse proxy servers.  While these servers can exist on physical machines or virtual machines, the Nginx servers discussed in this article exist on Docker containers. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Architectural Overview"
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" I have multiple applications which use Nginx reverse proxy servers on Docker containers, including the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://\ngithub.com/AJarombek/saints-xctf-web/blob/master/nginx.conf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF web application",
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
                    "href":"https://github.com/\nAJarombek/saints-xctf-api/blob/master/api/src/nginx.conf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF API",
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
                    "href":"https://github.com/AJarombek/\napollo-client-server-prototype/blob/master/client/nginx.conf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Apollo client prototype",
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
                    "href":"https://github.com/\nAJarombek/apollo-client-server-prototype/blob/master/server/nginx.conf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Apollo server prototype",
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
                    "href":"https://\ngithub.com/AJarombek/graphql-react-prototype/blob/master/nginx.conf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GraphQL React prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  All these proxy server containers are orchestrated using Kubernetes and hosted on AWS EKS.  For the remainder of the article, I'll look specifically at the Nginx configuration for my SaintsXCTF application.  Nginx code from my other applications can be viewed on GitHub using the links above. ",
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
                "value":" The SaintsXCTF application has two Nginx reverse proxies, one for the web application and one for the main API.  The application also has smaller APIs which are hosted using AWS API Gateway.  As I mentioned earlier, the Nginx reverse proxies are hosted on Docker containers orchestrated on Kubernetes.  My Kubernetes infrastructure is hosted on an AWS EKS cluster in my AWS account.  Below is an infrastructure diagram showing the reverse proxy servers. ",
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
                    "src":"https://asset.jarombek.com/posts/9-24-21-reverse-proxy-infrastructure.png"
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
                "value":" The web application Kubernetes deployment consists of a single container running an Nginx server.  The API Kubernetes deployment consists of two containers: an Nginx server and a uWSGI server.  For the API, the Nginx server is the reverse proxy server and the uWSGI server is the application server, hosting the Python/Flask API. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Configuring Nginx Docker Containers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Configuring Nginx Docker Containers",
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
                "value":" Let's look at the Docker and Nginx configurations for these containers, back to front; starting with the uWSGI container for the API code.  The two important configuration files for the uWSGI container are a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/saints-xctf-api/blob/master/api/src/api.flask.dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/saints-xctf-api/blob/master/api/src/uwsgi.ini"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"uwsgi.ini",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Dockerfile"
        },
        "value":"# Dockerfile\n\nFROM python:3.8\n\nLABEL maintainer=\"andrew@jarombek.com\" \\\n      version=\"1.0.0\" \\\n      description=\"Dockerfile for the Flask SaintsXCTF API in Production\"\n\nRUN apt-get update \\\n    && apt-get install g++\n\nRUN pip install pipenv \\\n    && pip install uwsgi\n\nRUN mkdir /src\nWORKDIR /src\n\nCOPY Pipfile .\nCOPY Pipfile.lock .\n\nRUN pipenv install --system\n\nCOPY . .\nENV FLASK_ENV production\nENV ENV prod\n\nCOPY credentials .aws/\nENV AWS_DEFAULT_REGION us-east-1\nENV AWS_SHARED_CREDENTIALS_FILE .aws/credentials\n\nSTOPSIGNAL SIGTERM\nEXPOSE 5000\n\nCMD [\"uwsgi\", \"--ini\", \"uwsgi.ini\"]\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TOML"
        },
        "value":"; uwsgi.ini\n\n[uwsgi]\nprotocol = uwsgi\nmodule = main\ncallable = app\nmaster = true\nprocesses = 5\n\n; When using an Nginx reverse proxy, use 'socket'\nsocket = :5000\n\n; When using uWSGI as a server that awaits HTTP requests, use 'http-socket'\n; http-socket = :5000\n",
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
                "value":" Don't get bogged down by the details of the Dockerfile; the important takeaway is that it installs uWSGI with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pip install uwsgi",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and starts the uWSGI application server with the configuration specified in ",
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
                        "value":"uwsgi.ini",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It does so using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CMD [\"uwsgi\", \"--ini\", \"uwsgi.ini\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" entrypoint. ",
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
                "value":" The uWSGI configuration file is configured to open a socket on port ",
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
                        "value":"5000",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for incoming requests.  These requests are passed from the Nginx reverse proxy server",
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
                "value":".  The Nginx container for the API has two important configuration files: the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-api/blob/master/api/src/\napi.nginx.dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
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
                    "href":""
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"nginx.conf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Dockerfile"
        },
        "value":"# Dockerfile\n\nFROM nginx:latest\n\nLABEL maintainer=\"andrew@jarombek.com\" \\\n      version=\"1.0.0\" \\\n      description=\"Dockerfile for the Nginx Reverse Proxy to the SaintsXCTF API in Production\"\n\nRUN rm /etc/nginx/conf.d/default.conf\nCOPY nginx.conf /etc/nginx/conf.d\n\nSTOPSIGNAL SIGTERM\nEXPOSE 80\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Nginx"
        },
        "value":"# nginx.conf\n\nserver {\n    listen 80;\n    root /usr/share/nginx/html;\n\n    location / {\n        try_files $uri @api;\n    }\n\n    location @api {\n        include uwsgi_params;\n        uwsgi_pass saints-xctf-api-flask:5000;\n    }\n}\n",
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
                "value":" The important parts of the ",
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
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RUN",
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
                "value":"COPY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands.  These commands delete the default Nginx configuration and add the custom Nginx configuration, respectively.  The custom Nginx configuration exists in the ",
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
                        "value":"nginx.conf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
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
                "value":" In the Nginx configuration, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"server",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" block creates a virtual server, which in my case is a reverse proxy server",
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
                "value":".  Inside the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"server",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" block are two ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"location",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" blocks; each location determines what actions occur when incoming requests are made to certain URLs",
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
                "value":".  The remaining configuration is a standard Flask/uWSGI Nginx setup found in the Flask ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://flask.palletsprojects.com/en/2.0.x/deploying/uwsgi/#configuring-nginx"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" documentation",
                        "children":null
                    }
                ]
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"uwsgi_pass",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive makes the Nginx server a reverse proxy server that proxies requests to the uWSGI application server located at ",
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
                        "value":"saints-xctf-api-flask:5000",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This URL is the DNS location of the uWSGI Docker container on my Kubernetes cluster. ",
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
                "value":" With the uWSGI and Nginx containers created, the infrastructure for my API is in place.  The Docker containers are configured to run locally with Docker Compose in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-api/blob/master/\ninfra/docker-compose/docker-compose-api.yml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"docker-compose-api.yml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file and in production with Kubernetes in a ",
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
                        "value":"main.tf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
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
                "value":" The web application infrastructure consists of a single Nginx Docker container.  The two important configuration files for the web application container are a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/\napp.dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/nginx.conf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" nginx.conf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Dockerfile"
        },
        "value":"# Dockerfile\n\nFROM 739088120071.dkr.ecr.us-east-1.amazonaws.com/saints-xctf-web-base:latest AS base\n\nWORKDIR src\nRUN yarn build\n\nFROM nginx AS host\n\nLABEL maintainer=\"andrew@jarombek.com\" \\\n      version=\"1.0.0\" \\\n      description=\"Dockerfile for running the SaintsXCTF web application.\"\n\nRUN rm /etc/nginx/conf.d/default.conf\nCOPY nginx.conf /etc/nginx/conf.d\n\nCOPY --from=base /src/dist /usr/share/nginx/html\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Nginx"
        },
        "value":"# nginx.conf\n\nserver {\n    listen 80;\n\n    location / {\n        root /usr/share/nginx/html;\n        try_files $uri /index.html;\n    }\n\n    location /api {\n        rewrite /api/(.*) /$1 break;\n        proxy_pass https://api.saintsxctf.com;\n    }\n\n    location /auth {\n        rewrite /auth/(.*) /$1 break;\n        proxy_pass https://auth.saintsxctf.com;\n\n        proxy_redirect off;\n        proxy_ssl_server_name on;\n        proxy_ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        proxy_buffering off;\n\n        proxy_set_header Host $proxy_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n    }\n\n    location /fn {\n        rewrite /fn/(.*) /$1 break;\n        proxy_pass https://fn.saintsxctf.com;\n\n        proxy_redirect off;\n        proxy_ssl_server_name on;\n        proxy_ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        proxy_buffering off;\n\n        proxy_set_header Host $proxy_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n    }\n\n    location /asset {\n        rewrite /asset/(.*) /$1 break;\n        proxy_pass https://asset.saintsxctf.com;\n\n        proxy_redirect off;\n        proxy_ssl_server_name on;\n        proxy_ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        proxy_buffering off;\n\n        proxy_set_header Host $proxy_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n    }\n\n    location /uasset {\n        rewrite /uasset/(.*) /prod/$1 break;\n        proxy_pass https://uasset.saintsxctf.com;\n\n        proxy_redirect off;\n        proxy_ssl_server_name on;\n        proxy_ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        proxy_buffering off;\n\n        proxy_set_header Host $proxy_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-NginX-Proxy true;\n    }\n\n    location /s3 {\n        rewrite /s3/(.*) /$1 break;\n        proxy_pass https://s3.amazonaws.com;\n    }\n}\n",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the web application should look similar to the Nginx Dockerfile for the API.  The differences include the use of a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/base.dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" base image",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which installs npm dependencies using yarn, the creation of JavaScript bundles for the frontend application via ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RUN yarn build",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and JavaScript bundles being copied from the base image to the Nginx image via ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"COPY --from=base /src/dist /usr/share/nginx/html",
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
                "value":" The Nginx reverse proxy server configuration for the web application is a bit more complex. The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"server",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" block for the web application has many ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"location",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" blocks.  The first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"location",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" block serves the React.js web application, while each subsequent block proxies requests to different backend servers.  These proxies use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"proxy_pass",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directives instead of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"uwsgi_pass",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directives, since the backend servers are simple HTTPS servers instead of uWSGI applciation servers",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"8",
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
                "value":" Similar to the API, the web application is configured to run in production with Kubernetes in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/saints-xctf-infrastructure/blob/master/saints-xctf-com/modules/kubernetes/main.tf"
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
                "value":" file.  Instead of using Docker Compose locally like the API, the web application configures a local reverse proxy using webpack dev server",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The configuration for webpack dev server exists in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/\nwebpack.config.js#L116-L155"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"webpack.config.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
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
                "value":" Reverse proxy servers are a great way to hide backend server locations from end users.  I also find them very elegant, as they remove the need to hardcode server URLs in application code.  Code for the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nsaints-xctf-web"
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
                "value":" and ",
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
                "value":" referenced throughout this article is available on GitHub. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "sep-24-2021-nginx-docker";
postDate = new Date('2021-09-24T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating Reverse Proxies with Nginx and Docker",
    description: `This article discusses reverse proxy servers, walks through examples from my applications, and 
        provides application source code; allowing you to achieve similar results.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "Nginx",
            picture: "https://asset.jarombek.com/logos/nginx.png",
            color: "nginx"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "Kubernetes",
            picture: "https://asset.jarombek.com/logos/k8s.png",
            color: "k8s"
        },
        {
            name: "uWSGI",
            picture: "https://asset.jarombek.com/logos/uwsgi.png",
            color: "uwsgi"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Nginx\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Nginx",
            link: "https://en.wikipedia.org/wiki/Nginx"
        },
        {
            startName: "\"Full Example Configuration\", ",
            endName: "",
            linkName: "https://www.nginx.com/resources/wiki/start/topics/examples/full/#nginx-conf",
            link: "https://www.nginx.com/resources/wiki/start/topics/examples/full/#nginx-conf"
        },
        {
            startName: "\"Reverse proxy: Uses\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Reverse_proxy#Uses",
            link: "https://en.wikipedia.org/wiki/Reverse_proxy#Uses"
        },
        {
            startName: "\"What are the differences between http and socket inside of ini file in uWSGI?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/57113565",
            link: "https://stackoverflow.com/a/57113565"
        },
        {
            startName: "\"Nginx: server\", ",
            endName: "",
            linkName: "http://nginx.org/en/docs/http/ngx_http_core_module.html#server",
            link: "http://nginx.org/en/docs/http/ngx_http_core_module.html#server"
        },
        {
            startName: "\"Nginx: location\", ",
            endName: "",
            linkName: "http://nginx.org/en/docs/http/ngx_http_core_module.html#location",
            link: "http://nginx.org/en/docs/http/ngx_http_core_module.html#location"
        },
        {
            startName: "\"uWSGI: Configuring nginx\", ",
            endName: "",
            linkName: "https://flask.palletsprojects.com/en/2.0.x/deploying/uwsgi/#configuring-nginx",
            link: "https://flask.palletsprojects.com/en/2.0.x/deploying/uwsgi/#configuring-nginx"
        },
        {
            startName: "\"NGINX Reverse Proxy\", ",
            endName: "",
            linkName: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/",
            link: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/"
        },
        {
            startName: "\"DevServer: devServer.proxy\", ",
            endName: "",
            linkName: "https://webpack.js.org/configuration/dev-server/#devserverproxy",
            link: "https://webpack.js.org/configuration/dev-server/#devserverproxy"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
