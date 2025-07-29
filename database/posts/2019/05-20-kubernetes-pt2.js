/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/15/2019
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
                "value":" In my previous ",
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
                        "value":"Kubernetes article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I went over the concepts of container orchestration and the architecture of a Kubernetes cluster.  In this article, I'm building a single node Kubernetes cluster that runs a Node.js application. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Overview",
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
                "value":" The Node.js application is the same one I used in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/apr-28-2019-docker-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" article on Containerization",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The Kubernetes cluster environment is very similar to my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/apr-8-2019-docker-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Docker playground",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The single node Kubernetes cluster is created with a CloudFormation template wrapped in Terraform.  It installs Docker, kubeadm, kubectl, kubelet, and kubernetes-cni. You can check out the infrastructure code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/\ntree/master/playgrounds/kubernetes"
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

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In my previous ",
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
                        "value":"Kubernetes article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I went over the concepts of container orchestration and the architecture of a Kubernetes cluster.  In this article, I'm building a single node Kubernetes cluster that runs a Node.js application. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Overview",
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
                "value":" The Node.js application is the same one I used in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/apr-28-2019-docker-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" article on Containerization",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The Kubernetes cluster environment is very similar to my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/apr-8-2019-docker-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Docker playground",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The single node Kubernetes cluster is created with a CloudFormation template wrapped in Terraform.  It installs Docker, kubeadm, kubectl, kubelet, and kubernetes-cni. You can check out the infrastructure code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/\ntree/master/playgrounds/kubernetes"
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
                "value":" Let's quickly go over the installed components.  ",
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
                        "value":"Docker",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/may-13-2019-kubernetes-pt1#worker-nodes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"container runtime",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" used by the Kubernetes cluster.  My single node cluster only runs Docker containers, although it can be configured to use different runtimes. ",
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
                        "value":"kubeadm",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" bootstraps and initializes the Kubernetes cluster via an easy to use CLI. ",
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
                "value":" is a CLI that interacts with the Kubernetes API.  The Kubernetes API runs on the clusters master node after bootstrapping is completed.  My single node cluster only contains a master node (there are no worker nodes). ",
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
                "value":" Every worker node runs a ",
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
                        "value":"kubelet",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance.   The kubelet watches the Kubernetes API and waits for Pods to be scheduled to its node.  Pods are the simplest object in Kubernetes - they run one or more containers.  Once a Pod is scheduled, the kubelet tells the container runtime (Docker) to start a container in the Pod.  Since my cluster has no worker nodes, the kubelet runs on the master node. All my Pods are scheduled to run on the master node. ",
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
                "value":" Finally, the ",
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
                        "value":"kubernetes-cni",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used for cluster networking. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Starting the Cluster"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Starting the Cluster",
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
                "value":" Once the CloudFormation template is built, an EC2 instance exists on which we can execute kubeadm commands. The following script bootstraps the Kubernetes cluster, creating a single master node. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Initialize a new Kubernetes cluster\nsudo kubeadm init\n\n# Commands to run as provided by the kubeadm init command\nmkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n",
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
                "value":" With the cluster initialized, we can try running kubectl commands.  One simple test is to check the status of all the nodes in the cluster.  Only one master node should be returned. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"kubectl get nodes\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"NAME            STATUS     ROLES    AGE   VERSION\nip-10-0-1-154   NotReady   master   23s   v1.14.2\n",
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
                "value":" Notice that the node listed has a status of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NotReady",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The node isn't ready because the cluster isn't set up with networking capabilities yet",
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
                "value":".  The following command sets up the networking. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"kubectl apply -f \"https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\\n')\"\n",
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
                "value":" After waiting a few seconds, the master node will be in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ready",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" state. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"kubectl get nodes\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"NAME            STATUS   ROLES    AGE     VERSION\nip-10-0-1-154   Ready    master   2m13s   v1.14.2\n",
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
                "value":" At this point the Kubernetes cluster is bootstrapped and ready for use!  Now let's discuss the different Kubernetes objects needed to deploy the basic Node.js application. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Kubernetes Objects"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Kubernetes Objects",
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
                "value":" Objects in a Kubernetes cluster are represented as YAML documents.  For my basic Node.js application I created two objects on Kubernetes - a Pod and a Service. ",
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
                "value":" In my ",
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
                        "value":"previous Kubernetes article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I displayed the YAML document for the Node.js application Pod.  The document is shown again below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"# Version of the Kubernetes API.  Pods exist in the stable v1 version\napiVersion: v1\n# What kind of object to deploy (in this case a Pod)\nkind: Pod\n# Metadata describing the Pod object\nmetadata:\n  name: nodejs-app\n  labels:\n    app: nodejs-app\n    version: v1.0.0\n    environment: sandbox\nspec:\n  containers:\n    # Unique name for the container in the pod\n  - name: nodejs-app\n    # Docker image to use for the container from DockerHub\n    image: ajarombek/nodejs-docker-app:latest\n    # Configure a network port for a container\n    ports:\n    # Port to expose on the container IP\n    - containerPort: 3000\n      # Protocol defaults to TCP\n      protocol: TCP\n",
        "children":null
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
                        "value":"Pods",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are the smallest computable resource in Kubernetes",
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
                "value":".  They are an execution environment for one or more containers",
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
                "value":".  In fact, a Pod is a special kind of container that hosts one or more smaller containers",
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
                "value":".  The smaller containers inside a Pod are the ones which run applications. ",
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
                "value":" More often than not, a Pod holds a single container.  In the YAML configuration above, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nodejs-app",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Pod holds a single container based on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ajarombek/nodejs-docker-app:latest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Docker image.  This image is hosted on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://hub.docker.com/r/ajarombek/nodejs-docker-app"
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
                "value":" The Pod definition exposes port ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"3000",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on the container as an entry point to the application.  However, the Pod doesn't provide a way to access the container from outside the Kubernetes cluster.  Networking configuration for Pods is performed by another object called a Service. ",
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
                        "value":"Services",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provide networking capabilities and a stable IP address for Pods.  The following service object provides an entry point to the Pod from the internet. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"apiVersion: v1\nkind: Service\nmetadata:\n  name: nodejs-app-nodeport-service\n  labels:\n    version: v1.0.0\n    environment: sandbox\nspec:\n  type: NodePort\n  ports:\n  - name: tcp\n    # Port on nodes in the cluster which proxy to the service\n    nodePort: 30001\n    # Port exposed on the service for internal cluster use.  Requests to this port will be forwarded\n    # to the Pods matching the labels selected by this service.\n    port: 3000\n    # Port on the Pod that requests are sent to.  Applications must listen on this port.\n    targetPort: 3000\n    protocol: TCP\n  selector:\n    matchLabels:\n      # This service applies to Pods with an 'app' label and a corresponding 'nodejs-app' value.\n      app: nodejs-app\n",
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
                "value":" There are multiple different types of services in Kubernetes.  The type of the service defined above is ",
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
                "value":".  A ",
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
                "value":" service exposes a port on each node in the Kubernetes cluster",
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
                "value":".  When a request is made to a nodes IP address at the exposed port, the request is forwarded to any corresponding Pods. ",
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
                "value":" Since my node (an EC2 instance) has a public IP address, the ",
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
                "value":" service allows me to access the application at port ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"30001",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Configuring the Cluster"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Configuring the Cluster",
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
                "value":" At this point I have both my Pod and Service objects expressed in YAML documents.  I have a Docker image on DockerHub and a single node Kubernetes cluster.  To simplify things, I combined both my YAML documents into a single file called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://bit.ly/2LUntE9"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"all-in-one.yml",
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
        "value":"# all-in-one.yml\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: nodejs-app-service\n  labels:\n    version: v1.0.0\n    environment: sandbox\nspec:\n  type: NodePort\n  ports:\n  - port: 3000\n    nodePort: 30001\n    protocol: TCP\n  selector:\n    app: nodejs-app\n\n---\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nodejs-app\n  labels:\n    app: nodejs-app\n    version: v1.0.0\n    environment: sandbox\nspec:\n  containers:\n  - name: nodejs-app\n    image: ajarombek/nodejs-docker-app:latest\n    ports:\n    - containerPort: 3000\n      protocol: TCP\n",
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
                "value":" Let's try deploying these objects onto the Kubernetes cluster.  The following Bash commands clone the repository containing ",
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
                        "value":"all-in-one.yml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and attempt to create the Kubernetes objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"git clone https://github.com/AJarombek/devops-prototypes.git\ncd devops-prototypes/docker/nodejs-docker-app/k8s/\n\n# Create a Pod & Service based on the all-in-one.yml Kubernetes config file\nkubectl create -f all-in-one.yml\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"service/nodejs-app-service created\npod/nodejs-app created\n",
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
                "value":" The Pod and Service objects were successfully sent to the Kubernetes API.  Now let's confirm that the  Pod and Service are running successfully. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"kubectl get service\nkubectl get pod\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"NAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE\nkubernetes           ClusterIP   10.96.0.1      <none>        443/TCP          123m\nnodejs-app-service   NodePort    10.110.40.12   <none>        3000:30001/TCP   22s\n\nNAME         READY   STATUS    RESTARTS   AGE\nnodejs-app   0/1     Pending   0          32s\n",
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
                "value":" The first command proves that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nodejs-app-service",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" service was created and assigned an internal IP address and port mapping.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nodejs-app-service",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is accessible within the cluster at the private IP address ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"10.110.40.12",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on port ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"3000",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It's also accessible from the nodes public IP address at port ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"30001",
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
                "value":" The second command is a bit more concerning.  The status of the Pod is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pending",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", meaning it hasn't been scheduled to run on a node.  To debug this issue, we can execute the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubectl describe pod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command.  While it returns a lot of info, the relevant piece is the following: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Events:\nType     Reason           From               Message\n----     ------            ----               -------\nWarning  FailedScheduling default-scheduler  0/1 nodes are available: 1 node(s) had taints that the pod didn't tolerate.\n",
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
                "value":" This error message says the Scheduler failed because it didn't find any nodes for the Pod to run on.  This issue occurred because my Kubernetes cluster only contains a single master node. By default, user Pods are only scheduled to worker nodes.  However, my cluster doesn't have any worker nodes.  In a production environment its good to keep all the application Pods on worker nodes, however in my demo application we want the Pod to run on the master node.  This default behavior can be changed with a configuration object called a ",
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
                        "value":"taint",
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
                "value":" In Kubernetes, taints repel Pods from being scheduled to certain nodes",
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
                "value":".  By default, the master node has a taint called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NoSchedule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Unless you specify in the YAML configuration that a Pod tolerates the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NoSchedule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" taint, Pods are not be scheduled to the master node.  Since I did not specify this toleration, the Pod failed to be scheduled. ",
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
                "value":" A workaround for this issue is to remove the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NoSchedule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" taint from the master node.  The following command achieves this (note that the name of your node will be different): ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"kubectl taint node ip-10-0-1-154 node-role.kubernetes.io/master:NoSchedule-\n",
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
                "value":" Now if you check the status of the Pod again with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubectl get pod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", you will see that its status changed to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ready",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"!  The Pod was successfully scheduled to the master node.  The application setup is complete and the application is accessible on the master nodes public IP address. ",
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
                    "src":"https://asset.jarombek.com/posts/5-20-19-aws-console.png"
                },
                "value":null,
                "children":[

                ]
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
                    "src":"https://asset.jarombek.com/posts/5-20-19-web-browser.png"
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
            "title":"Cluster Limitations"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Cluster Limitations",
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
                "value":" While a single node cluster is nice for playing around and learning Kubernetes, it has a number of limitations and should never be used in a production environment.  Most importantly, a single node is a single point of failure.  If the master node goes down, so does the entire cluster.  In a production environment you want a cluster with multiple worker nodes and a highly available master node. With this setup, the cluster will not go down if nodes fail.  Most cloud providers offer highly available clusters.  For example, AWS provides EKS (Elastic Container Service for Kubernetes) and Google Cloud offers GKE (Google Kubernetes Engine).  I'm currently creating a Kubernetes prototype which uses EKS. Look forward to articles on that soon! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Application Limitations"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Application Limitations",
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
                "value":" Along with cluster limitations, the way I designed the application has a number of drawbacks.  One of the key reasons to use Kubernetes is to leverage its Pod autoscaling, self-healing, and deployments. I didn't take advantage of these capabilities in my Kubernetes configuration.  These features are easy to implement with the ReplicaSet, Deployment, and HorizontalPodAutoscaler Kubernetes objects.  I will cover these objects in the future. ",
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
                "value":" Another drawback is the NodePort service object.  As you likely noticed, the application wasn't accessible through the default HTTP or HTTPS ports (",
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
                        "value":"80",
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
                        "value":"443",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", respectively). This is a limitation of the NodePort service, which can only use IP addresses ranging from ",
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
                "value":".   In a production application, either a LoadBalancer service or an Ingress object will be used for networking.  I will also cover these objects in the future. ",
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
                "value":" In this article I created a barebones application in a single node Kubernetes cluster.  Although the application is far from production ready with the current configuration, its a good step forward in learning Kubernetes!  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ndevops-prototypes/tree/master/docker/nodejs-docker-app/k8s"
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

postName = "may-20-2019-kubernetes-pt2";
postDate = new Date('2019-05-20T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Orchestrating Containers with Kubernetes Part II: Single Node Cluster",
    description: `In this article, I'm building a single node Kubernetes cluster running a Node.js 
        application.`,
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
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Nigel Poulton, ",
            endName: " (Nigel Poulton, 2018), 59-60",
            linkName: "The Kubernetes Book",
            link: "http://blog.nigelpoulton.com/my-books/"
        },
        {
            startName: "\"Integrating Kubernetes via the Addon: Installation\", ",
            endName: "",
            linkName: "https://bit.ly/2EiJZjL",
            link: "https://bit.ly/2EiJZjL"
        },
        {
            startName: "\"Pods\", ",
            endName: "",
            linkName: "https://kubernetes.io/docs/concepts/workloads/pods/pod/",
            link: "https://kubernetes.io/docs/concepts/workloads/pods/pod/"
        },
        {
            startName: "",
            endName: ", 64",
            linkName: "Poulton.",
            link: "http://blog.nigelpoulton.com/my-books/"
        },
        {
            startName: "",
            endName: ", 66",
            linkName: "Poulton.",
            link: "http://blog.nigelpoulton.com/my-books/"
        },
        {
            startName: "Marko Lukša, ",
            endName: " (Shelter Island, NY: Manning, 2018), 135",
            linkName: "Kubernetes in Action",
            link: "https://www.manning.com/books/kubernetes-in-action"
        },
        {
            startName: "\"Taints and Tolerations\", ",
            endName: "",
            linkName: "https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/",
            link: "https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});