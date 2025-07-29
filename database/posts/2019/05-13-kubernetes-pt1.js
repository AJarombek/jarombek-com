/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/11/2019
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
                "value":" I recently wrote a ",
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
                        "value":"series",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
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
                        "value":"of",
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
                    "href":"https://jarombek.com/blog/\napr-28-2019-docker-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"articles",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on Docker and containerized applications.  In those articles I worked with a single Docker container at a time.  Each container was mapped to a port on its host machines IP, making it accessible from the browser.  In my case, the host machine was an EC2 instance. ",
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
                "value":" While the single container approach works, it has a number of limitations and drawbacks.  First off, a single container isn't scalable.  As web traffic to an application increases, the load becomes too much for a single container to handle.  Secondly, there isn't a zero-downtime approach to release a new version of an application.  The container running the old version has to stop and a container with the new version has to start in its place.  While both these limitations are deal breakers in themselves, the worst part about the single container approach is that its a single point of failure. If the container stops or the application crashes, the entire website goes down. This makes deploying a production application on a single container inadequate. ",
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
                "value":" I recently wrote a ",
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
                        "value":"series",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
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
                        "value":"of",
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
                    "href":"https://jarombek.com/blog/\napr-28-2019-docker-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"articles",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on Docker and containerized applications.  In those articles I worked with a single Docker container at a time.  Each container was mapped to a port on its host machines IP, making it accessible from the browser.  In my case, the host machine was an EC2 instance. ",
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
                "value":" While the single container approach works, it has a number of limitations and drawbacks.  First off, a single container isn't scalable.  As web traffic to an application increases, the load becomes too much for a single container to handle.  Secondly, there isn't a zero-downtime approach to release a new version of an application.  The container running the old version has to stop and a container with the new version has to start in its place.  While both these limitations are deal breakers in themselves, the worst part about the single container approach is that its a single point of failure. If the container stops or the application crashes, the entire website goes down. This makes deploying a production application on a single container inadequate. ",
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
                "value":" The tool to solve these issues is a container orchestrator. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Container Orchestrator"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A container orchestrator is a tool that manages the lifecycle of containers.  Orchestrators handle container scaling, self-healing, load balancing, deployment, and more",
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
                "value":".  Orchestrators  operate the same in all environments, no matter if they are running on bare-metal machines or cloud   VMs.  They effectively abstract away the underlying infrastructure",
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
                "value":".  This allows DevOps engineers to focus on the most important aspect of a project - the application itself. ",
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
                "value":" The most popular container orchestrator right now is Kubernetes.  The second most popular container orchestrator is Docker Swarm, which I will likely explore in a future post.  The rest of this post explains the basic concepts of Kubernetes. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Kubernetes Concepts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Kubernetes Concepts",
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
                "value":" To work with Kubernetes, a cluster is created consisting of a master node and worker nodes.  A node can be a bare-metal server or virtual machine.  Nodes are often virtual machines hosted in the cloud, such as Amazon EC2 instances. ",
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
                "value":" Master nodes run the Kubernetes Control Plane, which you can think of as the brain of the cluster.   Worker nodes run application pods and services. Let's explore the master node first. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Master Node"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Master Node",
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
                "value":" As previously mentioned, master nodes run the Kubernetes Control Plane.  There are four main pieces of the Control Plane - persistent storage, Kubernetes API, Scheduler, and Controller Manager",
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
                "value":" The Kubernetes ",
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
                        "value":"API server",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a CRUD API that describes and modifies objects in the cluster",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"4,5",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Interaction with the Kubernetes API server is often done through a CLI called ",
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
                "value":".  However, since the API server is a REST API, you can also interact with it using HTTP requests. ",
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
                "value":" Objects in a Kubernetes cluster are represented as YAML documents.  YAML is a superset of JSON, so you can write documents with JSON as well.  Objects represent the desired state of the Kubernetes cluster.  An example of an object is a pod, which contains one or more containers.  Another example is a replica set, which self-heals and horizontally scales a pod (allowing you to have many pods with the same configuration).  The YAML file declares the desired state of the pod or replica set in the cluster. ",
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
                "value":" The most common approach for adding an object to a Kubernetes cluster is to send a YAML file to the API server.  This is usually done through the ",
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
                "value":" CLI with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubectl create -f <filename>.yml",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubectl apply -f <filename>.yml",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands.  For example, the following YAML file creates a pod object which holds a single container. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"# pod.yml\n\n# Version of the Kubernetes API.  Pods exist in the stable v1 version\napiVersion: v1\n# What kind of object to deploy (in this case a Pod)\nkind: Pod\n# Metadata describing the Pod object\nmetadata:\n  name: nodejs-app\n  labels:\n    app: nodejs-app\n    version: v1.0.0\n    environment: sandbox\nspec:\n  containers:\n    # Unique name for the container in the pod\n  - name: nodejs-app\n    # Docker image to use for the container from DockerHub\n    image: ajarombek/nodejs-docker-app:latest\n    # Configure a network port for a container\n    ports:\n      # Port to expose on the container IP\n    - containerPort: 3000\n      # Protocol defaults to TCP\n      protocol: TCP\n",
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
                "value":" The Pod contains a container running a simple Node.js/Express web application.  To deploy this object on a Kubernetes cluster, the following ",
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
                "value":" command is run: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"kubectl create -f pod.yml\n",
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
                "value":"kubectl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sends the YAML document to the API server.  When the API server receives a YAML document, it stores all the Kubernetes objects it declares in persistent storage as JSON",
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
                "value":".  Kubernetes uses an etcd key-value store for ",
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
                        "value":"persistent storage",
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
                "value":" The last two pieces of the master node are the Scheduler and Controller Manager.  The ",
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
                        "value":"Scheduler",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs an algorithm to determine which node a pod should run on",
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
                "value":".  The ",
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
                        "value":"Controller Manager",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" maintains multiple different controllers.  Controllers watch the API Server for changes to Kubernetes objects",
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
                "value":".  Most Kubernetes objects have their own Controller.  For example, there is a ReplicaSet controller which watches for changes to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ReplicaSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects.  When changes occur, controllers perform operations on the cluster.  Their objective is to keep the cluster matching the desired state declared in the Kubernetes objects.  The only Kubernetes object that Controller's don't handle are Pods, which are configured by a component called the Kubelet.  I will provide details about the Kubelet when discussing worker nodes. ",
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
                "value":" Here is a diagram of the master node and its four main components: ",
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
                    "src":"https://asset.jarombek.com/posts/5-13-19-k8s-master.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Master Node Components"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"API Server",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" The central component of the master node.  It's a REST API that stores JSON documents in persistent storage.  JSON documents are Kubernetes objects which represent the desired state of the cluster. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Persistent Storage",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" An etcd key-value store which holds JSON documents.  The structure of etcd is similar to a filesystem containing JSON files.  Each JSON file represents a Kubernetes object.  The etcd database is highly available, making it resistant to failures. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Scheduler",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" Waits for new pod definitions on the API server and schedules them to worker nodes.  The scheduler runs an algorithm to determine which node is the best fit for a pod. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Controller Manager",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" While the API Server is the central component of the master node, it doesn't do anything besides accept API requests and write JSON to etcd.  The controller manager performs the actual work in the cluster based on the desired state exposed by the API Server.  It tries to keep the cluster in the desired state. ",
                                        "children":null
                                    }
                                ]
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
            "title":"Worker Nodes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Worker Nodes",
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
                "value":" Worker nodes run applications and services.  Worker nodes are equipped with a Kubelet, kube-proxy, and container runtime. ",
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
                        "value":"Kubelet",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has two main jobs.  The first is to register the machine its running on as a worker node for the cluster.  The second is to watch the API Server for scheduled Pods",
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
                "value":". The role of starting Pods is left to the ",
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
                        "value":"Container Runtime",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Kubernetes can be configured with many different Container Runtimes, the most common being Docker. ",
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
                "value":" The last major piece of a worker node is the ",
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
                        "value":"kube-proxy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".   While not actually a proxy server as the name suggests, kube-proxy makes sure that Pods are reachable via a static IP address",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"10",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This static IP address is created by a Kubernetes object known as a Service.  I will discuss services in more detail in my next Kubernetes article. ",
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
                "value":" Here is a diagram of the worker node and its main components: ",
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
                    "src":"https://asset.jarombek.com/posts/5-13-19-k8s-worker.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Worker Node Components"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Kubelet",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" A component that watches the API Server for Pod objects scheduled to run on its node.  The Kubelet notifies the Container Runtime to start Pods after they are scheduled.  It also destroys Pods after they are removed from the API Server and tells the Container Runtime to restart containers when they fail health checks. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"kube-proxy",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" Ensures that HTTP requests to a Service object are sent to the proper Pod.  These requests can come from the internet or locally within the worker node. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Container Runtime",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" A container runtime executes a container based off an image.  The most common Container runtime is containerd, which is part of Docker.  The Docker container system consists of multiple decoupled components, one of which is the container runtime (containerd)",
                                        "children":null
                                    },
                                    {
                                        "el":"sup",
                                        "attributes":null,
                                        "value":"11",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  Other container runtimes can be used instead of Docker. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
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
                "value":" Here is a diagram of a three node cluster with one master node and two worker nodes: ",
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
                    "src":"https://asset.jarombek.com/posts/5-13-19-k8s-cluster.png"
                },
                "value":null,
                "children":[

                ]
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
                "value":" This article provides a high level view of a Kubernetes cluster.  In my next Kubernetes article, I'll walk through creating a simple one node cluster on AWS.  I'll also discuss all the basic Kubernetes objects used in an application.  I'm also building a full Kubernetes prototype application, which is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/kubernetes-prototype"
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
                "value":"! ",
                "children":null
            }
        ]
    }
];

postName = "may-13-2019-kubernetes-pt1";
postDate = new Date('2019-05-13T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Orchestrating Containers with Kubernetes Part I: Concepts",
    description: `Kubernetes is a container orchestrator.  To work with Kubernetes, a cluster is 
        created consisting of a master node and worker nodes.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
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
            name: "Container"
        },
        {
            name: "Container Orchestrator"
        },
        {
            name: "YAML",
            picture: "https://asset.jarombek.com/logos/yaml.png",
            color: "yaml"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Nigel Poulton, ",
            endName: " (Nigel Poulton, 2018), 5",
            linkName: "The Kubernetes Book",
            link: "http://blog.nigelpoulton.com/my-books/"
        },
        {
            startName: "Marko Lukša, ",
            endName: " (Shelter Island, NY: Manning, 2018), 2",
            linkName: "Kubernetes in Action",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 310",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 316",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "\"kube-apiserver\", ",
            endName: "",
            linkName: "https://bit.ly/2VhkJjp",
            link: "https://bit.ly/2VhkJjp"
        },
        {
            startName: "",
            endName: ", 314",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 319",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 322",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 326",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 327-328",
            linkName: "Lukša.",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "",
            endName: ", 73",
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