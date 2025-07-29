/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/15/2019
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
                "value":" When programming with ",
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
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":",   I often find myself writing the same code again and again.  In order to maintain the DRY principal in Terraform configuration, modules are used to encapsulate logic and design a layer of abstraction for infrastructure code.  This article explains how I created Terraform modules that are reused throughout my AWS Infrastructure as Code. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"DRY Principal"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" DRY stands for \"Do not Repeat Yourself.\"  It's the design philosophy that similar code shouldn't exist in multiple locations.  Instead, repeated code segments should be combined into a single component or function. ",
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
                "value":" When programming with ",
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
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":",   I often find myself writing the same code again and again.  In order to maintain the DRY principal in Terraform configuration, modules are used to encapsulate logic and design a layer of abstraction for infrastructure code.  This article explains how I created Terraform modules that are reused throughout my AWS Infrastructure as Code. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"DRY Principal"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" DRY stands for \"Do not Repeat Yourself.\"  It's the design philosophy that similar code shouldn't exist in multiple locations.  Instead, repeated code segments should be combined into a single component or function. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Terraform Module Design Choices"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Terraform Module Design Choices",
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
                "value":" As I write Terraform code, I notice there are certain AWS resource configurations repeated across my repositories.  For example, my AWS infrastructure has multiple VPCs which are all configured in a similar manner.  Eventually I got unhappy with all this duplicate code.  I started creating reusable modules that are used across all my Terraform repositories. ",
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
                "value":" My current AWS architecture is split across multiple git repositories.  I have a single repository with global infrastructure such as VPCs and multiple other repositories with application specific infrastructure such as EC2 instances.  Additionally, I have one final repository containing reusable modules. ",
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
                    "src":"https://asset.jarombek.com/posts/6-17-19-repos.png"
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
                "value":" All my repositories are able to use Terraform modules defined in ",
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
                        "value":"terraform-modules",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". In fact, anyone can use these modules because the repository is public. ",
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
                "value":" Now that I've explained my Terraform modules from the repository standpoint, let's look at the code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Terraform Module Structure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Terraform Module Structure",
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
                "value":" Terraform defines a module as a series of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".tf",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files in a directory",
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
                "value":".  Therefore, anytime you write Terraform code you are creating one or more modules. A common approach is to have three Terraform files in a module.  The first file contains resources and data blocks, the second file contains input variables, and the final file contains output variables",
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
                "value":". For example, a VPC module would have the following folder structure: ",
                "children":null
            }
        ]
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"vpc/\n├── main.tf\n├── var.tf\n├── output.tf\n",
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
                "value":" This file structure isn't mandatory.  Instead, it's a common standard used for grouping related Terraform code blocks.  In practice Terraform simply loads all ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".tf",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files in a directory at once for execution",
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
                "value":" With this structure in mind, let's explore one of the reusable modules I've built so far: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"security-group",
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
            "title":"Terraform Module Composition"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Terraform Module Composition",
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
                "value":" I currently have two reusable modules - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"security-group",
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
                "value":"vpc",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The rest of this article explores the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"security-group",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module since it has fewer moving parts.  You can check out the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"vpc",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/terraform-modules/blob/master/vpc"
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
                "value":" In the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"security-group",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/terraform-modules/\nblob/master/security-group/var.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"var.tf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file contains input variables.  These variables are like function arguments for the module. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# var.tf\n\nvariable \"enabled\" {\n  description = \"Whether or not the security group should be created\"\n  default = true\n}\n\n#-----------------\n# Naming Variables\n#-----------------\n\nvariable \"name\" {\n  description = \"Name to use as a prefix for different resources\"\n}\n\nvariable \"tag_name\" {\n  description = \"Name to use for the Name property in the Tag objects\"\n}\n\n#-----------------------------\n# aws_security_group Variables\n#-----------------------------\n\nvariable \"vpc_id\" {\n  description = \"VPC identifier for the security group\"\n}\n\nvariable \"description\" {\n  description = \"Information about the security group\"\n  type = string\n  default = \"Security Group\"\n}\n\nvariable \"sg_rules\" {\n  description = \"A list of security group rules\"\n  type = list\n  default = []\n}\n",
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
                "value":" The variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"enabled",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to enable or disable the creation of the security group.  Usually the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"count",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable is used for this purpose in Terraform resources, however it isn't exposed to modules.  Using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"enabled",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable is a workaround for this limitation. ",
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
                "value":" Variables under the “Naming Variables” header are used to name the AWS resources and their tags.  Variables under the “aws_security_group Variables” header are used to configure the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_security_group",
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
                "value":"aws_security_group_rule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resources. Both are defined in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/terraform-modules/blob/master/security-group/main.tf"
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
                "value":".  It's important to note that these resources use the new Terraform 0.12 and HCL 2 syntax. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# main.tf\n\nlocals {\n  count = var.enabled ? 1 : 0\n}\n\nresource \"aws_security_group\" \"security\" {\n  count = local.count\n\n  name = var.name\n  description = var.description\n  vpc_id = var.vpc_id\n\n  tags = {\n    Name = var.tag_name\n  }\n}\n\nresource \"aws_security_group_rule\" \"security-rule\" {\n  count = length(var.sg_rules)\n\n  security_group_id = local.count == 1 ? aws_security_group.security[0].id : null\n  type = lookup(var.sg_rules[count.index], \"type\", \"ingress\")\n\n  from_port = lookup(var.sg_rules[count.index], \"from_port\", 0)\n  to_port = lookup(var.sg_rules[count.index], \"to_port\", 0)\n  protocol = lookup(var.sg_rules[count.index], \"protocol\", \"-1\")\n\n  cidr_blocks = [lookup(var.sg_rules[count.index], \"cidr_blocks\", \"\")]\n}\n",
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
                "value":" This code creates an AWS security group and its corresponding rules.  Rules are created for each item in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var.sg_rules",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" list.  This module returns a single value - the ID of the security group. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# outputs.tf\n\noutput \"security_group_id\" {\n  # There will always be 0 or 1 security groups in the output\n  value = aws_security_group.security.*.id\n}\n",
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
                "value":" This is the complete complete configuration of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"security-group",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module. To use this module, a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"module",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code block must be created. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"module",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exposes a variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"source",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which helps Terraform locate the module.   Since my module lives in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nterraform-modules"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub repository",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", its accessible using a GitHub source type",
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
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"module \"security-group\" {\n  source = \"github.com/ajarombek/terraform-modules//security-group?ref=v0.1.7\"\n\n  ...\n}\n",
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
                "value":" The module is located in the ",
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
                        "value":"security-group",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" subdirectory.  I tag my repository whenever I alter the modules.  In the example above, I'm pulling the module from the v0.1.7 tag.  This is helpful because I don't want a potentially breaking change to impact existing codebases.  You can also omit  the tag reference, in which case the latest commit is pulled. ",
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
                "value":" The rest of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"module",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code block assigns values to the input variables defined in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/terraform-modules/blob/master/security-group/var.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" var.tf",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following code snippet is an example ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"security-group",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" implementation. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"module \"security-group\" {\n  source = \"github.com/ajarombek/terraform-modules//security-group?ref=v0.1.7\"\n  \n  # Mandatory arguments\n  name = \"example-sg\"\n  tag_name = \"example-sg\"\n  vpc_id = data.existing-vpc.vpc_id\n  \n  # Optional arguments\n  sg_rules = [\n    {\n      # Inbound traffic for SSH\n      type = \"ingress\"\n      from_port = 22\n      to_port = 22\n      protocol = \"tcp\"\n      cidr_blocks = local.my_cidr\n    },\n    {\n      # Outbound traffic for HTTP\n      type = \"egress\"\n      from_port = 80\n      to_port = 80\n      protocol = \"tcp\"\n      cidr_blocks = local.public_cidr\n    }\n  ]\n  description = \"example sg module\"\n}\n",
        "children":null
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
                "value":" Creating generic Terraform modules promotes code reuse and cuts down on bugs that commonly plague developers  who copy and paste their code.  I have a much better understanding of Terraform and HCL syntax because I spent time designing reusable modules.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/terraform-modules"
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

postName = "jun-17-2019-terraform-module";
postDate = new Date('2019-06-17T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating a Reusable Terraform Module",
    description: `This article explains how I created Terraform modules that are reused throughout 
        my AWS Infrastructure as Code.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "HCL"
        },
        {
            name: "Infrastructure as Code"
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
            startName: "\"Modules\", ",
            endName: "",
            linkName: "https://www.terraform.io/docs/configuration/modules.html",
            link: "https://www.terraform.io/docs/configuration/modules.html"
        },
        {
            startName: "Yevgeniy Brikman, ",
            endName: " (Sebastopol, CA: O'Reilly, 2017), 88",
            linkName: "Terraform Up & Running",
            link: "https://www.terraformupandrunning.com/"
        },
        {
            startName: "\"Load Order and Semantics\", ",
            endName: "",
            linkName: "https://www.terraform.io/docs/configuration-0-11/load.html",
            link: "https://www.terraform.io/docs/configuration-0-11/load.html"
        },
        {
            startName: "\"terraform modules value of count cannot be computed\", ",
            endName: "",
            linkName: "https://bit.ly/2RiZZHV",
            link: "https://bit.ly/2RiZZHV"
        },
        {
            startName: "\"Module Sources: GitHub\", ",
            endName: "",
            linkName: "https://www.terraform.io/docs/modules/sources.html#github",
            link: "https://www.terraform.io/docs/modules/sources.html#github"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});