/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/31/2018
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
                "value":" Ever since I first heard about infrastructure as code (IaC) and Terraform 9 months ago, I’ve been intrigued by what the fuss is all about.  I always developed software and nothing more. Digging through Linux or setting up email servers are things I have nightmares about.  When told that learning operations is important for developers and warned of the combination of developer and operations (DevOps), I kindly said \"no thank you, operations are not for me.\" ",
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
                "value":" With my first website ",
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
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I was exposed to the world of setting up linux servers to host websites.  I set up an Apache web server with DNS routing and stumbled through a Postfix mail transferring agent.  I felt very accomplished by all that, but quickly shifted my focus back to developing software.  After all, writing code is what I love to do! ",
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
                "value":" With my second website (which you are currently viewing) I started working in the cloud with AWS. I didn't enjoy my time clicking through the AWS UI, picking EC2 instances to start up and configuring S3 buckets.  Clicking through a website to configure cloud infrastructure isn't fun, writing code is. If only I could configure all my infrastructure by writing code! ",
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
                "value":" Ever since I first heard about infrastructure as code (IaC) and Terraform 9 months ago, I’ve been intrigued by what the fuss is all about.  I always developed software and nothing more. Digging through Linux or setting up email servers are things I have nightmares about.  When told that learning operations is important for developers and warned of the combination of developer and operations (DevOps), I kindly said \"no thank you, operations are not for me.\" ",
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
                "value":" With my first website ",
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
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I was exposed to the world of setting up linux servers to host websites.  I set up an Apache web server with DNS routing and stumbled through a Postfix mail transferring agent.  I felt very accomplished by all that, but quickly shifted my focus back to developing software.  After all, writing code is what I love to do! ",
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
                "value":" With my second website (which you are currently viewing) I started working in the cloud with AWS. I didn't enjoy my time clicking through the AWS UI, picking EC2 instances to start up and configuring S3 buckets.  Clicking through a website to configure cloud infrastructure isn't fun, writing code is. If only I could configure all my infrastructure by writing code! ",
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
                "value":" With Terraform writing code for cloud infrastructure is a reality.  I never thought I could have fun doing operations work, but now Terraform allows me to!  No longer will I stumble through a cloud UI to set up a website.  Infrastructure as code is not a completely new concept, however it is one that managed to evade me until now.  This post is my first baby steps with IaC and Terraform. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Terraform?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Terraform?",
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
                "value":" Terraform is part of the DevOps movement, which describes the combination of software development and operations.  Terraform in particular allows developers to write infrastructure as code. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"DevOps"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Software developers create application software, while operations teams work on managing the hardware infrastructure that applications sit upon.  As new technologies such as cloud hosting and infrastructure as code emerged, the lines between developer and operations blurred.  Often these days the development and operations roles are merged, since in both cases the job involves writing code! ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Infrastructure as Code (IaC)"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Traditionally, managing infrastructure meant setting up physical servers. With the cloud, servers are part of a paid subscription model.  Companies no longer adjust physical servers to fit the scaling needs of a company.  Cloud infrastructure is declared in new ways - such as code written in a programming language.  IaC uses scripts to run and provision cloud infrastructure instantly.  For example, a script can set up a linux machine with a web server. ",
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
                "value":" Terraform is a server provisioning tool - meaning it enables servers, databases, load balancers, and more to be written as code",
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
                "value":".  IaC can be fully documented and versioned.  Just looking at a Terraform script declaratively outlines an applications infrastructure needs. Reverting to a previous infrastructure simply requires pulling an old tag or different branch from version control and executing the Terraform script.  Terraform is pleasant and fun compared to navigating a cloud providers UI! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Creating a Hello World Web Server with Terraform"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Creating a Hello World Web Server with Terraform",
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
                "value":" Terraform scripts are written in HCL (HashiCorp Configuration Language), which is a declarative language",
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
                "value":".  When HashiCorp created Terraform, they thought of using JSON for IaC.   However, certain JSON limitations (such as the inability to write comments) caused them to create their own configuration language",
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
                "value":" To create a \"hello world\" web server in Terraform, I wrote one file with all the IaC configuration. The configuration file creates a new EC2 instance to host a web server.  Let’s spend the following  sections breaking down the code in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/\nblob/master/terraform/helloworld/server.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"server.tf",
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
            "title":"Input Variables"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Input Variables",
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
                "value":" The configuration begins with a couple variable definitions: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"variable \"region\" {\n  description = \"The region in AWS for the EC2 Instance\"\n  default = \"us-east-1\"\n  type = \"string\"\n}\n\nvariable \"instance_type\" {\n  description = \"The instance type (size of the instance)\"\n  default = \"t2.micro\"\n}\n\nvariable \"ami\" {\n  description = \"The Amazon Machine Image for the instance\"\n  default = \"ami-04169656fea786776\"\n}\n\nvariable \"server_port\" {\n  description = \"The server port to use for the basic web server\"\n  default = 8080\n}\n",
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
                "value":" Variables are used as inputs in terraform scripts for flexibility across executions. Variables are defined with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"variable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword followed by a block of configuration items. ",
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
                "value":" The first variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"region",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the AWS region, which is a geographic area to host cloud components",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"region",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has three pieces of configuration - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"description",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"description",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" documents an input variable both in code and when using the Terraform CLI",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" gives input variables a value to fall back on if one isn't provided.  There are a couple ways to provide input variables in Terraform, all which utilize command line flags or environment variables.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" explicitly binds variables to a type. If type isn't specified in a variable configuration, HCL will implicitly guess what the type is. ",
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
                "value":" The other three variables also assist in making the Terraform configuration dynamic. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instance_type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specifies the EC2 instance type.  Each instance type has a different configuration of resources, such as CPU and memory. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instance_type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defaults to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"t2.micro",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which exists on Amazon’s free tier of instances. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ami",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines the Amazon Machine Image for an EC2 instance. An AMI is a blueprint for EC2 instances (virtual machines), and in the Terraform script I specified one of the official Ubuntu AMIs as the default",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"6,7",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Finally, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"server_port",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines the port to host the web server. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Providers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Providers",
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
                "value":" Once input variables are declared, a service provider for the script is specified.  My cloud provider is AWS, and the region to build infrastructure is determined by an input variable. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"provider \"aws\" {\n  region = \"${var.region}\"\n}\n",
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
                "value":" Input variables are accessed as properties on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  HCL supports string interpolation, so the values of variables can be written inside strings. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Resources"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Resources",
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
                "value":" Now we can pick apart the meat of Terraform scripts - resources.  Resources are the pieces of infrastructure on your provider.  I created three resources - an EC2 instance, an elastic IP address, and an AWS security group.  First let’s look at the EC2 instance resource. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_instance\" \"tf-basic-instance\" {\n  ami = \"${var.ami}\"\n  instance_type = \"${var.instance_type}\"\n  vpc_security_group_ids = [\"${aws_security_group.instance_security.id}\"]\n\n  # Define user_data which will execute while the instance is booting up\n  user_data = <<-EOF\n                #!/bin/bash\n                echo \"Hello From Terraform\" > index.html\n                nohup busybox httpd -f -p \"${var.server_port}\" &\n                EOF\n\n  tags {\n    Name = \"tf-basic-instance\"\n  }\n}\n",
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
                "value":" Resources follow a similar syntax to variables and providers: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"<resource-type>\" \"<user-defined-resource-name>\" {\n  <configuration items>\n}\n",
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
                "value":" The AMI and instance type of the EC2 instance are defined in input variables.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"tags",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code block displays a name for the instance in the AWS UI",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"user_data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is interesting because any statements written in its body are executed when the instance starts up.  In my config, a batch script executes and starts a basic web server. ",
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
                "value":" In order for an EC2 instance to accept web traffic, a security group is specified to accept incoming traffic across all IP addresses",
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
                "value":".  You will recognize that the port specified for incoming traffic matches the web servers port. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_security_group\" \"instance_security\" {\n  name = \"tf-basic-instance\"\n\n  # Handle incomming traffic\n  ingress {\n    from_port = \"${var.server_port}\"\n    to_port = \"${var.server_port}\"\n    protocol = \"tcp\"\n\n    # IP Range - allow all incomming IP addresses\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n}\n",
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
                "value":" The last resource I made for the simple web server was an elastic IP address. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_eip\" \"tf-instance-ip\" {\n  # Map the elastic IP address to the EC2 instance\n  instance = \"${aws_instance.tf-basic-instance.id}\"\n\n  # You can define explicit dependencies to make sure terraform processes resources in order,\n  # However terraform handles dependencies behind the scenes implicitly.  So this is redundant.\n  depends_on = [\"aws_instance.tf-basic-instance\"]\n}\n",
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
                "value":" Elastic IP addresses are static while EC2 IP addresses change when an instance is torn down. Instead of accessing an EC2 instance from the instances IP address, you can go through the elastic IP address. ",
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
                "value":" For example, let's say an elastic IP is 60.0.0.1 and an EC2 instance IP is 60.0.0.2.  Both IPs are available to access the EC2 instance.  What would happen if the EC2 instance went down or was torn down by Terraform?  In this case the IP address would probably change.  Once the EC2 instance is back online, the IP is changed to 60.0.0.3.  If all your web server DNS entries were mapped to 60.0.0.2, you would have to reconfigure them.  However, the elastic IP address never changed, so the new EC2 instance is still accessible through 60.0.0.1.  Elastic IPs mask failures of EC2 instances ",
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
                "value":"Output Variables",
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
                "value":" The final piece of the Terraform script defines output variables.  Once a Terraform script executes, output variables are displayed and stored for future access.  In general, output variables are important pieces of data that script users need access to - such as the generated EC2 IP address. ",
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
                "value":" In my Terraform script I defined two output variables - the EC2 instance IP address and the elastic IP address. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"output \"public_ip\" {\n  value = \"${aws_instance.tf-basic-instance.public_ip}\"\n}\n\noutput \"elastic_ip\" {\n  value = \"${aws_eip.tf-instance-ip.public_ip}\"\n}\n",
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
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/terraform/helloworld/\nserver.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform script",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is complete and the AWS infrastructure is ready to build. ",
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
                "value":"Building Infrastructure",
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
                "value":" Executing Terraform scripts is easy.  Using the Terraform CLI, the following four commands are used: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Initialize a working directory for Terraform\nterraform init\n\n# Plan out what changes Terraform will make when executed\nterraform plan\n\n# Execute the Terraform files\nterraform apply\n\n# Destroy all Infrastructure created with Terraform\nterraform destroy\n",
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
                "value":"terraform init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is mandatory in order to designate a working directory for Terraform.  A crucial part of the working directory is the Terraform state file, which maintains the current infrastructure deployed. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"terraform plan",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" shows what changes Terraform will make to your infrastructure, and executing a Terraform script is done with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"terraform apply",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  After running ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"terraform apply",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I navigated to the AWS console and saw the EC2 instance up and running: ",
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
                    "src":"https://asset.jarombek.com/posts/9-3-18-aws.png"
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
                "value":" Using the elastic IP, I viewed the web server in my browser. ",
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
                    "src":"https://asset.jarombek.com/posts/9-3-18-web.png"
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
                "value":" With just a few simple commands, I created a web server on AWS! ",
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
                "value":" Using Terraform and IaC makes building cloud infrastructure fun!  I'm excited to learn more about Terraform and different DevOps practices.  The code for this discovery post along with my other DevOps adventures is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/tree/master/\nterraform/helloworld"
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

postName = "sep-3-2018-terraform";
postDate = new Date('2018-09-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "DevOps: Learning Terraform",
    description: `With Terraform writing code for cloud infrastructure is a reality.  I never 
        thought I could have fun doing operations work, but finally I’ve found a product that allows 
        me to do just that.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "DevOps"
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
            name: "Infrastructure as Code"
        },
        {
            name: "Amazon EC2",
            picture: "https://asset.jarombek.com/logos/ec2.png",
            color: "ec2"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Yevgeniy Brikman, ",
            endName: " (Sebastopol, CA: O'Reilly, 2017), 11-12",
            linkName: "Terraform Up & Running",
            link: "https://www.terraformupandrunning.com/"
        },
        {
            startName: "",
            endName: ", 34",
            linkName: "Yevgeniy.",
            link: "https://www.terraformupandrunning.com/"
        },
        {
            startName: "\"HCL: Why?\", ",
            endName: "",
            linkName: "https://github.com/hashicorp/hcl#why",
            link: "https://github.com/hashicorp/hcl#why"
        },
        {
            startName: "\"Regions and Availability Zones\", ",
            endName: "",
            linkName: "https://amzn.to/2mcqGyX",
            link: "https://amzn.to/2mcqGyX"
        },
        {
            startName: "",
            endName: ", 46",
            linkName: "Yevgeniy.",
            link: "https://www.terraformupandrunning.com/"
        },
        {
            startName: "\"Amazon Machine Image\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Amazon_Machine_Image",
            link: "https://en.wikipedia.org/wiki/Amazon_Machine_Image"
        },
        {
            startName: "\"Amazon EC2 AMI Locator\", ",
            endName: "",
            linkName: "https://cloud-images.ubuntu.com/locator/ec2/",
            link: "https://cloud-images.ubuntu.com/locator/ec2/"
        },
        {
            startName: "",
            endName: ", 37",
            linkName: "Yevgeniy.",
            link: "https://www.terraformupandrunning.com/"
        },
        {
            startName: "",
            endName: ", 41",
            linkName: "Yevgeniy.",
            link: "https://www.terraformupandrunning.com/"
        },
        {
            startName: "\"Elastic IP Addresses\", ",
            endName: "",
            linkName: "https://amzn.to/2GxmLso",
            link: "https://amzn.to/2GxmLso"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});