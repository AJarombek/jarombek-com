/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 3/29/2019
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
                "value":" When I worked on my first website ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.saintsxctf.com"
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
                "value":" during my senior year of college, it was a huge revelation that I could pay a company to host my website on their servers.  The most surprising part for me was how they were hosting it.  The web server was a virtual private server, which is a virtual machine (VM) sold as a service",
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
                "value":".  The VM ran a Debian Linux distribution.  This means I wasn't paying for an entire bare metal server, instead provided a software program which acts like a physical server.  In fact, there were likely many other virtual private servers running on the same hardware as mine. ",
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
                "value":" The adaptation of virtual machines was a major milestone in software development history.  Instead of needing a single physical server for each application, a single server could run a program called a hypervisor which would create one or many virtual machines.  Virtual machines scaled as needed to match business needs.  Eventually companies didn't need to invest in physical servers as cloud providers started offering VM IaaS (Infrastructure as a Service).  An example of a VM IaaS is EC2 (Elastic Compute Cloud) on AWS. ",
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
                "value":" When I worked on my first website ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.saintsxctf.com"
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
                "value":" during my senior year of college, it was a huge revelation that I could pay a company to host my website on their servers.  The most surprising part for me was how they were hosting it.  The web server was a virtual private server, which is a virtual machine (VM) sold as a service",
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
                "value":".  The VM ran a Debian Linux distribution.  This means I wasn't paying for an entire bare metal server, instead provided a software program which acts like a physical server.  In fact, there were likely many other virtual private servers running on the same hardware as mine. ",
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
                "value":" The adaptation of virtual machines was a major milestone in software development history.  Instead of needing a single physical server for each application, a single server could run a program called a hypervisor which would create one or many virtual machines.  Virtual machines scaled as needed to match business needs.  Eventually companies didn't need to invest in physical servers as cloud providers started offering VM IaaS (Infrastructure as a Service).  An example of a VM IaaS is EC2 (Elastic Compute Cloud) on AWS. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Virtual Machine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A virtual machine emulates a physical machine and its corresponding hardware and software",
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
                "value":". Virtual machines are given a subsection of a physical machines resources to run on.  Often VMs are used as a replacement for real machines, as they are easily built, destroyed, and rebuilt.  Virtual machines are created by a piece of software or firmware called a hypervisor.  Hypervisors control the lifecycle of virtual machines and isolate them from other virtual machines on the same hardware",
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
                "value":" While virtual machines are great, they do present some challenges.  Just like physical machines, VMs consume energy on a virtualized CPU, RAM, and storage devices",
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
                "value":".  They also run their own operating system, which requires updating and maintenance to fix exploits and bugs.  VMs also take quite a bit of time to start up, which is obvious if you've ever started an EC2 instance on AWS.  With both my websites currently running on EC2 VMs, I'm well aware of these challenges.  Still, the creation of a virtual machine is magnitudes faster than building a physical server. ",
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
                "value":" For a long time there was no better option than VMs for hosting enterprise applications.  Nowadays there exists another layer of abstraction away from physical machines - containers.  The best description I read about containers described them as virtualized operating systems, compared to VMs which are virtualized computers.  While containers are comparable to traditional operating systems, they can be much more lightweight.  This is due to containers utilizing their host operating system, freeing them from running certain tasks.  Containers use less CPU cycles and don't need as much RAM and storage. ",
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
                "value":" Ubuntu can be used as a clear demonstration of the size difference between a full operating system and a container.  For the 18.04 LTS release of Ubuntu, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://releases.ubuntu.com/18.04/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"full operating system",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" size is around 1.9 GB.  In comparison, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://blog.ubuntu.com/2018/07/\n09/minimal-ubuntu-released"
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
                "value":" is as small as 29 MB!  It takes a lot less energy and time to start up and maintain a 29 MB operating system vs. a 1.9 GB one. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Container"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A container is the virtualization of an operating system.  Containers are lightweight because they utilize their host operating system, allowing them to only run the processes required by a deployed application. ",
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
                "value":" Docker is the most popular container system and runtime.  In fact, due to its popularity you often hear people use the words \"container\" and \"docker\" interchangeably.  There are other container systems available, many of which can be used interchangeably with Docker thanks to container standards",
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
                "value":". The rest of this article discusses the basics of Docker containers. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Docker Setup"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Docker Setup",
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
                "value":" Installing Docker is a fairly simple process.  Worst case you will need to download installation software and follow the appropriate steps.  Best case you can just execute a single Bash command, as is the case on Amazon Linux: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"amazon-linux-extras install docker\n",
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
                "value":" Most environments have installation instructions on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.docker.com/install/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Docker's website",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  To work with Docker, you also must start it on your machine.  For example, on Amazon Linux the command ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"service docker start",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" starts Docker. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Docker Concepts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Docker Concepts",
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
                "value":" The two most important Docker concepts are images and containers.  An image is a blueprint for a container in the same way a class is a blueprint for an object.  A container is a running image. ",
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
                "value":" Docker has a CLI for interacting with images and containers.  To download an existing image onto your computer, you can execute the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"docker pull",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command.  For example, the following command downloads the official ubuntu image onto your computer.  It pulls the default repository tag (similar to tags in a git repository), which is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"latest",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker pull ubuntu\n",
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
                "value":"docker pull",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command retrieves an image from a repository. By default Docker uses ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://hub.docker.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"DockerHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as a repository.  You can find the pulled image on the official ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://hub.docker.com/_/ubuntu"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Ubuntu DockerHub repository",
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
                "value":" The following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"docker container run",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command starts a container based on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ubuntu",
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
        "value":"docker container run -it ubuntu:latest /bin/bash\n",
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
                "value":"-it",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" flags allow commands to be written in a terminal running inside the container",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/bin/bash",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tells the container to run a bash process.  After running the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"docker container run",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command, your Bash terminal runs inside the container.  For example, you can run ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ps -elf",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to see all the processes running inside the container. To return the Bash shell from the container to the host machine, click ",
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
                        "value":"CTRL-P + CTRL-Q",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on the keyboard. ",
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
                "value":" To view all the images and containers on your machine, run the following two commands: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker image ls\ndocker container ls\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"REPOSITORY      TAG              IMAGE ID        CREATED           SIZE\nubuntu          latest           94e814e2efa8    2 weeks ago       88.9MB\n\nCONTAINER ID    IMAGE            COMMAND         CREATED           STATUS           PORTS    NAMES\n7daf46a8cbdb    ubuntu:latest    \"/bin/bash\"     33 seconds ago    Up 32 seconds             infallible_lamport\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
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
                "value":" reveals that each container is given a name; in my case the ubuntu container is given the name ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"infallible_lamport",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Using a container name, you can reconnect to, stop, or delete a container. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Reconnect to the running container\ndocker container exec -it infallible_lamport bash\n\n# Stop the container\ndocker container stop infallible_lamport\n\n# Remove the container\ndocker container rm infallible_lamport\n",
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
                "value":" You can find all the basic Docker commands I discussed on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ndevops-prototypes/blob/master/docker/basic-commands.sh"
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
                "value":" The basic Docker concepts covered in this article can be incorporated into our projects to create containerized applications.  Once an application is containerized, it can easily be orchestrated in a scalable and updatable manner.  The ",
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
                        "value":"next article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in my Docker series creates a playground environment on AWS for Docker.  The third and final article containerizes an application. ",
                "children":null
            }
        ]
    }
];

postName = "apr-1-2019-docker-pt1";
postDate = new Date('2019-04-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Docker Part I - Basic Concepts",
    description: `Docker is the most popular container system and runtime.  The rest of this article 
        discusses the basics of Docker containers.`,
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
            name: "Container"
        },
        {
            name: "Virtual Machine"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Josh Lockhart, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 130",
            linkName: "Modern PHP",
            link: "http://shop.oreilly.com/product/0636920033868.do"
        },
        {
            startName: "\"Virtual machine\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Virtual_machine",
            link: "https://en.wikipedia.org/wiki/Virtual_machine"
        },
        {
            startName: "\"Hypervisor\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Hypervisor",
            link: "https://en.wikipedia.org/wiki/Hypervisor"
        },
        {
            startName: "Nigel Poulton, ",
            endName: " (Nigel Poulton, 2018), 10",
            linkName: "Docker Deep Dive",
            link: "http://blog.nigelpoulton.com/my-books/"
        },
        {
            startName: "Marko Lukša, ",
            endName: " (Shelter Island, NY: Manning, 2018), 16",
            linkName: "Kubernetes in Action",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 33",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});