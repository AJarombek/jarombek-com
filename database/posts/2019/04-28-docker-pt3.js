/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/15/2019
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
                "value":" In my ",
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
                        "value":"previous",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\napr-8-2019-docker-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"two",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Docker articles, I explored container environment basics and created a playground to run Docker on AWS.  In this article, I'm creating a containerized application that is publicly accessible from the internet. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Containerizing a Node.js Application"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Containerizing a Node.js Application",
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
                "value":" In my ",
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
                        "value":"previous",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\napr-8-2019-docker-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"two",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Docker articles, I explored container environment basics and created a playground to run Docker on AWS.  In this article, I'm creating a containerized application that is publicly accessible from the internet. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Containerizing a Node.js Application"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Containerizing a Node.js Application",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Containerized Application"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A software application which is running inside a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\napr-1-2019-docker-pt1#container"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"container",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Configuring an application to run inside a container is known as \"containerizing an application.",
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
                "value":"\"  This process usually includes creating a Dockerfile in the root directory of an application repository.  Dockerfiles are blueprints for building Docker images, and commonly declare application dependencies and execution processes",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The first thing needed before containerizing an application is the application itself.  I created a basic ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=node.js&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Node.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application which prints out some JSON.  It consists of a single ",
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
                        "value":"main.js",
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
            "language":"JavaScript"
        },
        "value":"// main.js\n\nconst express = require('express');\n\nconst app = express();\nconst port = process.env.port || 3000;\n\napp.get('/', (req, res) => {\n  res.json({title: 'Dockerized Node.js App'});\n});\n\nmodule.exports = app.listen(port, () => {\n  console.info(`Started Containerized App on Port ${port}`);\n});\n",
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
                "value":" With the Node.js application in place, I created a Dockerfile which configures a container to run the ",
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
                        "value":"main.js",
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
        "value":"# Dockerfile\n\n# The 'FROM' instruction defines the base layer of the image.\n# This image uses the Alpine Linux distro as the base image.\nFROM alpine\n\n# The 'LABEL' instruction is used to add metadata about the image.\nLABEL maintainer=\"andrew@jarombek.com\"\n\n# The 'RUN' instruction adds a new layer to an image.  It executes commands on the image.\nRUN apk add --update nodejs nodejs-npm\n\n# The 'COPY' instruction copies files in the build context onto the image\nCOPY . /src\n\n# The 'WORKDIR' instruction sets the directory to execute the remaining commands from\nWORKDIR /src\n\n# Install npm inside the /src directory\nRUN npm install\n\n# The 'EXPOSE' instruction determines which port is exposed for the containerized application\nEXPOSE 3000\n\n# The 'ENTRYPOINT' instruction declares the main application that the container runs\nENTRYPOINT [\"node\", \"./main.js\"]\n",
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
                "value":" As previously mentioned, a Dockerfile is a blueprint for an image.  A container is a running image. The Dockerfile for my application begins by building on top of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alpine",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alpine",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an extremely small Docker image based on the Alpine Linux distribution.  On top of the Alpine OS, I install Node.js and the application npm dependencies.  Finally I declare the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"node",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" process that runs on the container in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ENTRYPOINT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instruction. ",
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
                "value":" Now it's time to containerize the application in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/apr-8-2019-docker-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Docker playground",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I built in my previous post.  The first steps are connecting to the playground EC2 instance and cloning the Git repository which contains the Node.js application. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Connect to Docker Playground EC2\nssh -A ec2-user@ec2-xx-xx-xx-xx.compute-1.amazonaws.com\n\ngit clone https://github.com/AJarombek/devops-prototypes.git\ncd devops-prototypes/docker/nodejs-docker-app/\n",
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
                "value":" With the Node.js application on the EC2 instance, it's time to containerize the application using Docker. The following command does the trick: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker image build -t nodejs-docker-app:latest .\n",
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
                "value":" The final dot (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") in this command is important since it tells Docker to build an image based on the Dockerfile in the current directory.  List all the Docker images to confirm that a new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nodejs-docker-app",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image exists. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker image ls\n\n# REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n# nodejs-docker-app   latest              1510b5182aaa        2 seconds ago       50.3MB\n# alpine              latest              cdf98d1859c1        6 days ago          5.53MB\n",
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
                "value":" Notice there is also an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alpine",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image.  This is pulled from DockerHub during the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FROM alpine",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instruction of my Dockerfile. ",
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
                "value":" The next step is to start a Docker container from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nodejs-docker-app",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker container run -d --name nodejs-app -p 80:3000 nodejs-docker-app:latest\n",
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
                "value":" Confirm the container is running by listing the containers with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"docker container ls",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The application is now running in a container on port 3000 and accessible from the Docker playground EC2 instance on port 80.  Using the public DNS name of the EC2 instance, the application is viewable from a web browser. ",
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
                    "src":"https://asset.jarombek.com/posts/4-28-19-app.png"
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
                "value":" While this is a very basic application, the same containerizing process can be used for complex pieces of software.  In a production system, you won't just run a single container.  Replicas will be created through a container orchestrator such as Kubernetes or Docker Swarm.  Kubernetes will be the topic of  ",
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
                        "value":"future articles",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" since I've been using it  extensively lately.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/tree/master/docker/nodejs-docker-app"
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

postName = "apr-28-2019-docker-pt3";
postDate = new Date('2019-04-28T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Docker Part III: Containerizing an Application",
    description: ``,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "Bash",
            picture: "https://asset.jarombek.com/logos/bash.png",
            color: "bash"
        },
        {
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        },
        {
            name: "Container"
        },
        {
            name: "Containerized Application"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Nigel Poulton, ",
            endName: " (Nigel Poulton, 2018), 133",
            linkName: "Docker Deep Dive",
            link: "http://blog.nigelpoulton.com/my-books/"
        },
        {
            startName: "",
            endName: ", 136",
            linkName: "Poulton.",
            link: "http://blog.nigelpoulton.com/my-books/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});