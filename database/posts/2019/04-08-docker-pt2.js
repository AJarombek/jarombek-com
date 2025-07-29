/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/4/2019
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
                "value":" In my previous post about ",
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
                        "value":"Docker",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I explored the basic concepts of Docker containers.  In this post, I'm creating a Docker playground environment on AWS with Terraform and CloudFormation.  The playground consists of an EC2 instance with Docker installed. It's accessible from the internet to facilitate containerized web applications.  To start I'll discuss why I used Terraform and CloudFormation to build the playground.  Then I'll take a deep dive into the infrastructure code. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Terraform & CloudFormation for IaC"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Terraform & CloudFormation for IaC",
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
                "value":" In my previous post about ",
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
                        "value":"Docker",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I explored the basic concepts of Docker containers.  In this post, I'm creating a Docker playground environment on AWS with Terraform and CloudFormation.  The playground consists of an EC2 instance with Docker installed. It's accessible from the internet to facilitate containerized web applications.  To start I'll discuss why I used Terraform and CloudFormation to build the playground.  Then I'll take a deep dive into the infrastructure code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Terraform & CloudFormation for IaC"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Terraform & CloudFormation for IaC",
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
                "value":" The Infrastructure is built using Terraform and CloudFormation, which are infrastructure as code (IaC) tools.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-3-2018-terraform#what-is-terraform?"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"IaC",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses a programming/configuration language to run and provision cloud infrastructure.  I discussed Terraform in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-3-2018-terraform"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prior",
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
                    "href":"https://jarombek.com/blog/\nsep-7-2018-aws-lambda-api-gateway"
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
                "value":" and use it to provision the infrastructure for my ",
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
                        "value":"SaintsXCTF website",
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
                "value":" CloudFormation is another IaC tool designed by Amazon exclusively for AWS.  CloudFormation's AWS exclusivity is different than Terraform, which is cloud agnostic.  Similar to Terraform, CloudFormation allows developers to create infrastructure declaratively",
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
                "value":".  CloudFormation is written in JSON or YAML files called templates (always use YAML if you can, it's easier on the eyes).  When a template file is built (the infrastructure is instantiated), the resulting infrastructure is called a stack",
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
                "value":".  Stacks are easily debugged and validated in the AWS Console.  In my experience, debugging errors in CloudFormation is much easier than Terraform, which often gives confusing error messages. ",
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
                "value":" When people discuss Terraform and CloudFormation for AWS infrastructure, they make it seem like one must be picked over the other.  This is a difficult choice, since Terraform and CloudFormation have different strengths and weaknesses.  For example, Terraform has the ability to retrieve existing infrastructure while CloudFormation does not (you have to use the AWS CLI or SDKs).  CloudFormation has certain features that Terraform lacks, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/AWSCloudFormation/\nlatest/UserGuide/aws-resource-init.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Cloud Init",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for EC2 instances.  There is also the personal preference of CloudFormation's YAML syntax or Terraform's HCL syntax. ",
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
                "value":" In reality, you can easily use a combination of both IaC tools.  For building a Docker playground environment, I started with Terraform to get existing AWS infrastructure such as VPCs and subnets. I then called a CloudFormation template file from Terraform to build a stack.  The Terraform state is stored on S3 and the CloudFormation stack logs are available on the AWS Console. ",
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
                "value":" Now let's look at the code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Playground Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Playground Infrastructure",
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
                "value":" As I previously mentioned, the IaC codebase begins with Terraform to get existing AWS infrastructure. In particular, I'm interested in an existing VPC and Subnet.  A VPC (Virtual Private Cloud) is a private cloud with its own IP address range, providing a network for cloud resources",
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
                "value":".  Within a VPC, IP addresses are further partitioned into subnetworks (subnets).  Subnets can either be publicly accessible to the internet or private to the VPC.  The Docker playground is an EC2 instance located inside a VPC and public subnet.  The VPC and subnet are used for all my experimental applications, so they already exist in my AWS account.  The following Terraform code retrieves both the VPC and subnet. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_vpc\" \"sandbox-vpc\" {\n  tags {\n    Name = \"sandbox-vpc\"\n  }\n}\n\ndata \"aws_subnet\" \"sandbox-subnet\" {\n  tags {\n    Name = \"sandbox-vpc-fearless-public-subnet\"\n  }\n}\n",
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
                "value":" Next I create an SSH key used to connect to the EC2 instance from my local computer.  I wrote a Bash script to complete this task.  Local bash scripts can be invoked from Terraform using a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null_resource",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"local-exec",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provisioner. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"null_resource\" \"key-gen\" {\n  provisioner \"local-exec\" {\n    command = \"bash ../key-gen.sh sandbox-docker-playground-key\"\n  }\n}\n",
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
                "value":" With access to the VPC, public subnet, and SSH key, I'm ready to invoke the CloudFormation template. The following resource passes variables from Terraform to the ",
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
                        "value":"docker-playground.yml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CloudFormation template for execution. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_cloudformation_stack\" \"docker-playground-cf-stack\" {\n  name = \"docker-playground-cf-stack\"\n  template_body = \"${file(\"docker-playground.yml\")}\"\n  on_failure = \"DELETE\"\n  timeout_in_minutes = 20\n\n  parameters {\n    VpcId = \"${data.aws_vpc.sandbox-vpc.id}\"\n    SubnetId = \"${data.aws_subnet.sandbox-subnet.id}\"\n    MyCidr = \"${local.my_cidr}\"\n    PublicCidr = \"${local.public_cidr}\"\n  }\n\n  capabilities = [\"CAPABILITY_IAM\", \"CAPABILITY_NAMED_IAM\"]\n\n  tags {\n    Name = \"docker-playground-cf-stack\"\n  }\n\n  depends_on = [\"null_resource.key-gen\"]\n}\n",
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
                "value":" I named the CloudFormation stack ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"docker-playground-cf-stack",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ensure it executes after the SSH key Bash script with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"depends_on = [\"null_resource.key-gen\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I passed four parameters to the CloudFormation stack - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VpcId",
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
                "value":"SubnetId",
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
                "value":"MyCidr",
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
                "value":"PublicCidr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VpcId",
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
                "value":"SubnetId",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are the existing AWS resources.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MyCidr",
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
                "value":"PublicCidr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are used for configuring the security groups of the EC2 instance. ",
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
                "value":" Now let's switch over to the CloudFormation template.  The first section of the template collects inputs and assigns them to variables.  I specified an optional ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Interface",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" metadata section which groups parameters together in the AWS Console",
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
        "value":"AWSTemplateFormatVersion: '2010-09-09'\nDescription: 'Playground EC2 instance for testing Docker'\n\nParameters:\n  VpcId:\n    Type: \"AWS::EC2::VPC::Id\"\n    Description: \"VPC to deploy the Docker Playground in\"\n  SubnetId:\n    Type: \"AWS::EC2::Subnet::Id\"\n    Description: \"Subnet to deploy the Docker Playground in\"\n  MyCidr:\n    Type: \"String\"\n    Description: \"CIDR for my local environment\"\n  PublicCidr:\n    Type: \"String\"\n    Description: \"CIDR for all IP addresses\"\n\nMetadata:\n\n  AWS::CloudFormation::Interface:\n    ParameterGroups:\n    -\n      Label:\n        default: \"Terraform AWS Data\"\n    Parameters:\n    - VpcId\n    - SubnetId\n    - MyCidr\n    - PublicCidr\n    ParameterLabels:\n      VpcId:\n        default: \"VPC to deploy the EC2 instance in\"\n      SubnetId:\n        default: \"Subnet to deploy the EC2 instance in\"\n      MyCidr:\n        default: \"CIDR for my local environment\"\n      PublicCidr:\n        default: \"CIDR for all IP addresses\"\n",
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
                "value":" Once the parameters from Terraform are collected, the CloudFormation template specifies AWS resources to create.  The first resource is the EC2 instance to run Docker on. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"Resources:\n\n# Create an EC2 instance for Docker testing running Amazon Linux 2\nDockerPlaygroundInstance:\n  Type: AWS::EC2::Instance\n  Metadata:\n    AWS::CloudFormation::Init:\n      configSets:\n        default:\n        - \"installDocker\"\n        - \"installGit\"\n      installDocker:\n        # Commands are executed in alphabetical order\n        commands:\n          00Begin:\n            command: echo \"Beginning Install Docker Step (CF::Init)\"\n          01UpdatePackages:\n            command: sudo yum update -y\n          02InstallDocker:\n            command: sudo amazon-linux-extras install docker\n          03StartDocker:\n            command: sudo service docker start\n          04ChangeDockerUnixGroup:\n            command: sudo usermod -a -G docker ec2-user\n          05TestDocker:\n            command: docker --version\n          06GetDockerInfo:\n            command: docker system info\n          07End:\n            command: echo \"Finishing Install Docker Step (CF::Init)\"\n      installGit:\n        commands:\n          00Install:\n            command: sudo yum -y install git\n  Properties:\n    # us-east-1 Amazon Linux 2\n    ImageId: \"ami-035be7bafff33b6b6\"\n    InstanceType: \"t2.micro\"\n    KeyName: \"sandbox-docker-playground-key\"\n    IamInstanceProfile: !Ref DockerPlaygroundInstanceProfile\n    NetworkInterfaces:\n    - AssociatePublicIpAddress: true\n      DeviceIndex: 0\n      SubnetId: !Ref SubnetId\n      GroupSet:\n      - !Ref DockerPlaygroundSecurityGroup\n    UserData:\n      Fn::Base64:\n        !Sub |\n          #!/bin/bash\n          echo \"Beginning UserData Step\"\n          sudo yum install -y aws-cfn-bootstrap\n          /opt/aws/bin/cfn-init -v -s ${AWS::StackName} -r DockerPlaygroundInstance -c default --region ${AWS::Region}\n          echo \"Finishing UserData Step\"\n    Tags:\n    -\n      Key: Name\n      Value: docker-playground-instance\n",
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
                "value":" When CloudFormation creates an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::EC2::Instance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource, it first creates a VM based on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ImageId",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" AMI.  My EC2 instance is of size ",
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
                "value":" and can be accessed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sandbox-docker-playground-key",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" SSH key.  As the EC2 instance boots up, the Bash script declared under ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UserData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs. The Bash script I wrote simply calls ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cfn-init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which executes the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands. ",
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
                "value":" Let's break down how ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" works.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cfn-init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Bash command under ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UserData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains multiple flags for configuration.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-s ${AWS::StackName}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specifies the CloudFormation stack that contains the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" template.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"--region ${AWS::Region}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" helps guide ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cfn-init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to the template since a CloudFormation stack only exists in a single region.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-r DockerPlaygroundInstance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the resource ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exists inside (my EC2 instance) and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-c default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"configSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to use.  In the code above you can see that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has a single configuration set called ",
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
                "value":", which specifies the execution order of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configurations. ",
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
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" consists of configurations and configuration sets.  Configuration sets create groups of configurations and gives them an execution order.  The following code helps show the structure of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
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
            "language":"YAML"
        },
        "value":"AWS::CloudFormation::Init:\n  configSets:\n    default:\n      - \"configuration1\"\n      - \"configuration2\"\n      - \"configuration3\"\n    skipThirdConfig:\n      - \"configuration1\"\n      - \"configuration2\"\n  configuration1:\n    commands:\n      00Command:\n        command: echo \"First Configuration Executing...\"\n  configuration2:\n    commands:\n      00Command:\n        command: echo \"Second Configuration Executing...\"\n  configuration3:\n    commands:\n      00Command:\n        command: echo \"Third Configuration Executing...\"\n",
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
                "value":" In my Docker playground template, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" installs Docker, starts Docker, and then installs Git. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Why use AWS::CloudFormation::Init"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Why use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"? ",
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
                "value":" When I first learned about CloudFormation, I was really confused about the purpose of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Why not just place all the Bash commands under ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UserData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?  It turns out ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UserData",
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
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" behave quite differently. ",
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
                "value":"UserData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains commands which are executed when the virtual machine boots up.  Its written imperatively, and is only executed once.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a declaration of desired state on the virtual machine.  Its written declaratively, and can be updated throughout the lifecycle of the virtual machine",
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
                "value":" The consequence of this on virtual machine IaC is significant.  If I change the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UserData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" script, the virtual machine has to be restarted to take effect.  However I can change ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in whatever way I want without stopping the virtual machine.  This makes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" extremely powerful, and is a key reason why I've started using CloudFormation for configuring EC2 virtual machines. ",
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
                "value":" The remainder of the CloudFormation template configures a security group to open appropriate ports on the EC2 instance and gives the EC2 instance access to Elastic Container Registry (ECR), which is a private repository for Docker images.  You can find all the CloudFormation code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ndevops-prototypes/blob/master/playgrounds/docker/docker-playground.yml"
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
            "title":"Using the Docker Playground"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Using the Docker Playground",
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
                "value":" With both ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/playgrounds/docker/main.tf"
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
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/playgrounds/docker/\ndocker-playground.yml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"docker-playground.yml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the same directory, the playground infrastructure is built with the following commands: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"terraform init\nterraform plan\nterraform approve -auto-approve\n",
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
                "value":" Once the infrastructure is built, the following command is used to connect to the EC2 instance.  This command must be run from the directory that contains the SSH key. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"ssh -i \"sandbox-docker-playground-key.pem\" ec2-user@ec2-xxx-xxx-xxx-xxx.compute-1.amazonaws.com\n",
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
                "value":" Run ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"docker -v",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to confirm that everything is set up correctly. If there are any issues, you can debug what occurred during the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UserData",
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
                "value":"AWS::CloudFormation::Init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stages with the following commands: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Debug UserData\nsudo nano /var/log/cloud-init-output.log\n\n# Debug CloudFormation::Init\nsudo nano /var/log/cfn-init.log\n",
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
                "value":" In my next post, I'll write about containerizing an application on the Docker playground and accessing it from the browser.  If you haven't seen it already, check out my ",
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
                        "value":"first Docker post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which covers the basics of the container system. ",
                "children":null
            }
        ]
    }
];

postName = "apr-8-2019-docker-pt2";
postDate = new Date('2019-04-08T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Docker Part II - Building a Playground Environment",
    description: `In this post, I’m creating a Docker playground environment on AWS with Terraform 
        and CloudFormation`,
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
            name: "CloudFormation",
            picture: "https://asset.jarombek.com/logos/cloudformation.png",
            color: "cloudformation"
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
            name: "Amazon EC2",
            picture: "https://asset.jarombek.com/logos/ec2.png",
            color: "ec2"
        },
        {
            name: "YAML",
            picture: "https://asset.jarombek.com/logos/yaml.png",
            color: "yaml"
        },
        {
            name: "HCL"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Michael Wittig & Andreas Wittig, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2019), 121",
            linkName: "Amazon Web Services In Action",
            link: "https://www.manning.com/books/amazon-web-services-in-action-second-edition"
        },
        {
            startName: "",
            endName: ", 128",
            linkName: "Wittig.",
            link: "https://www.manning.com/books/amazon-web-services-in-action-second-edition"
        },
        {
            startName: "",
            endName: ", 189",
            linkName: "Wittig.",
            link: "https://www.manning.com/books/amazon-web-services-in-action-second-edition"
        },
        {
            startName: "\"AWS::CloudFormation::Init\", ",
            endName: "",
            linkName: "https://amzn.to/2wkSMjB",
            link: "https://amzn.to/2wkSMjB"
        },
        {
            startName: "\"What are the benefits of cfn-init over userdata?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/51451990",
            link: "https://stackoverflow.com/a/51451990"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});