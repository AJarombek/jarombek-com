/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/4/2019
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
                    "href":"https://jarombek.com/blog/sep-3-2019-rds-backups-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I discussed my existing AWS infrastructure and the additional resources needed to automate backups for a RDS MySQL instance using a lambda function.  In this article I'll create those additional resources and further explain my design decisions. Finally, I'll test the lambda function and show the backup file in my S3 bucket. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Building the Additional Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Building the Additional Infrastructure",
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
                    "href":"https://jarombek.com/blog/sep-3-2019-rds-backups-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I discussed my existing AWS infrastructure and the additional resources needed to automate backups for a RDS MySQL instance using a lambda function.  In this article I'll create those additional resources and further explain my design decisions. Finally, I'll test the lambda function and show the backup file in my S3 bucket. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Building the Additional Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Building the Additional Infrastructure",
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
                "value":" The lambda function for RDS backups is currently implemented for my ",
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
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"   application.  Before creating the lambda function, all my application infrastructure was in place.  This includes a VPC with four subnets - two public and two private.  It also includes web servers behind a load balancer and a highly available RDS MySQL database.  Here is a diagram of my existing infrastructure: ",
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
                    "src":"https://asset.jarombek.com/posts/9-3-19-saints-xctf-infra-diagram-2.png"
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
                "value":" As I discussed in my ",
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
                        "value":"last article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", there are four additional resources needed to implement the lambda function.  The first is the lambda function itself, which is placed in the VPC alongside the RDS instances.  The second is an S3 bucket to store the database backup files.  The third is credentials for the database which are stored in Secrets Manager.  The fourth and final resource is a VPC endpoint allowing the lambda function to access S3 and Secrets Manager.  We actually need two separate VPC endpoints to complete this task.  Here is the infrastructure diagram with the new resources: ",
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
                    "src":"https://asset.jarombek.com/posts/9-3-19-saints-xctf-infra-diagram-4.png"
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
                "value":" Now let’s add these additional pieces to my infrastructure using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=terraform&page=1"
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"AWS Lambda Function"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"AWS Lambda Function",
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
                "value":" The lambda function for creating backups of an RDS MySQL instance is written in Python.  I chose Python because of its concise syntax and my liking of the ",
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
                        "value":"boto3",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" AWS SDK.  The Python function also invokes a Bash script which executes on the AWS Lambda runtime environment.  AWS Lambda functions run on an Amazon Linux server, so executing Bash is no problem",
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
                "value":" The lambda function is scheduled to run every morning at 7:00am UTC.  Its located in the same private subnet as the RDS instance.  This is necessary for the Lambda function to connect to the database.  With the help of IAM roles, the lambda function is granted access to RDS, S3, and Secrets Manager resources. ",
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
                "value":" At the core of the Terraform infrastructure is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/\ntree/master/database-snapshot/modules/lambda"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"lambda function configuration",
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
            "language":"HCL"
        },
        "value":"locals {\n  env = var.prod ? \"prod\" : \"dev\"\n}\n\n#-------------------\n# Existing Resources\n#-------------------\n\ndata \"aws_vpc\" \"saints-xctf-com-vpc\" {\n  tags = {\n    Name = \"saints-xctf-com-vpc\"\n  }\n}\n\ndata \"aws_subnet\" \"saints-xctf-com-vpc-public-subnet-0\" {\n  tags = {\n    Name = \"saints-xctf-com-lisag-public-subnet\"\n  }\n}\n\ndata \"aws_subnet\" \"saints-xctf-com-vpc-public-subnet-1\" {\n  tags = {\n    Name = \"saints-xctf-com-megank-public-subnet\"\n  }\n}\n\ndata \"aws_db_instance\" \"saints-xctf-mysql-database\" {\n  db_instance_identifier = \"saints-xctf-mysql-database-${local.env}\"\n}\n\ndata \"archive_file\" \"lambda\" {\n  source_dir = \"${path.module}/func\"\n  output_path = \"${path.module}/dist/lambda-${local.env}.zip\"\n  type = \"zip\"\n}\n\n#--------------------------------------------------\n# SaintsXCTF MySQL Backup Lambda Function Resources\n#--------------------------------------------------\n\nresource \"aws_lambda_function\" \"rds-backup-lambda-function\" {\n  function_name = \"SaintsXCTFMySQLBackup${upper(local.env)}\"\n  filename = \"${path.module}/dist/lambda-${local.env}.zip\"\n  handler = \"lambda.create_backup\"\n  role = aws_iam_role.lambda-role.arn\n  runtime = \"python3.7\"\n  timeout = 15\n\n  environment {\n    variables = {\n      ENV = local.env\n      DB_HOST = data.aws_db_instance.saints-xctf-mysql-database.address\n    }\n  }\n\n  vpc_config {\n    security_group_ids = [module.lambda-rds-backup-security-group.security_group_id[0]]\n    subnet_ids = [\n      data.aws_subnet.saints-xctf-com-vpc-public-subnet-0.id,\n      data.aws_subnet.saints-xctf-com-vpc-public-subnet-1.id\n    ]\n  }\n\n  tags = {\n    Name = \"saints-xctf-rds-${local.env}-backup\"\n    Environment = upper(local.env)\n    Application = \"saints-xctf\"\n  }\n}\n",
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
                "value":" The first thing you will notice is that my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-3-2018-terraform#infrastructure-as-code-(iac)"
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
                "value":" is applied to my production and development environments depending on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var.prod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable.  Production and development databases live in the same VPC and subnets, so I grab the VPC and subnet information with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code blocks. I also grab the database information for the specified environment. ",
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
                "value":" When the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-17-2019-terraform-module"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform module",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" first executes, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"archive_file",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code blocks executes.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"archive_file",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" zips the functions code because AWS Lambda expects source code to be uploaded in a ",
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
                        "value":"zip",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. This zip file includes a ",
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
                        "value":"lambda.py",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file containing the entry point to the lambda function, a ",
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
                        "value":"backup.sh",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file which creates a SQL backup file from the RDS instance, and a ",
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
                        "value":"mysqldump",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" binary which connects to MySQL and dumps the database contents into a SQL file.  I will walk through the Python and Bash files momentarily. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"resource",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" block in the Terraform code defines the AWS lambda function. In my production environment the lambda function is named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SaintsXCTFMySQLBackupPROD",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and uses the Python 3 runtime.  I pass the RDS instance domain name as an environment variable to the functions runtime environment.  This is used to connect to the database.  The domain name can also be obtained programmatically in the lambda function, however a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/vpc/latest/userguide/\nvpc-nat-gateway.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"NAT Gateway",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" would be required because the lambda function lives in my applications VPC and has no internet access",
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
                "value":".  NAT Gateways are expensive, so I avoided that approach.  RDS does not offer VPC endpoints at this time (as of September 2019)",
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
                "value":" The next chunk of Terraform IaC configures the IAM policy for the lambda function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_iam_role\" \"lambda-role\" {\n  name = \"saints-xctf-rds-backup-lambda-role\"\n  assume_role_policy = file(\"${path.module}/role.json\")\n\n  tags = {\n    Name = \"saints-xctf-rds-backup-lambda-role\"\n    Environment = \"all\"\n    Application = \"saints-xctf\"\n  }\n}\n\nresource \"aws_iam_policy\" \"rds-backup-lambda-policy\" {\n  name = \"rds-backup-lambda-policy\"\n  path = \"/saintsxctf/\"\n  policy = file(\"${path.module}/rds-backup-lambda-policy.json\")\n}\n\nresource \"aws_iam_role_policy_attachment\" \"lambda-role-policy-attachment\" {\n  policy_arn = aws_iam_policy.rds-backup-lambda-policy.arn\n  role = aws_iam_role.lambda-role.name\n}\n",
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
                "value":"rds-backup-lambda-policy",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" IAM policy is attached to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saints-xctf-rds-backup-lambda-role",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" IAM role, which in turn is bound to the lambda function.  The IAM policy grants the lambda function access to Secrets Manager, S3, RDS, and the Network Interfaces in the VPC.  Network Interface access is required for the lambda function to connect to my VPC",
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
            "language":"JSON"
        },
        "value":"{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": {\n    \"Effect\": \"Allow\",\n    \"Action\": [\n      \"secretsmanager:Describe*\",\n      \"secretsmanager:Get*\",\n      \"secretsmanager:List*\",\n      \"ec2:CreateNetworkInterface\",\n      \"ec2:DescribeNetworkInterfaces\",\n      \"ec2:DetachNetworkInterface\",\n      \"ec2:DeleteNetworkInterface\",\n      \"rds:*\",\n      \"s3:*\"\n    ],\n    \"Resource\": \"*\"\n  }\n}\n",
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
                "value":" Further improvement can be made to this policy by restricting RDS and S3 access to certain operations. ",
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
                "value":" The final piece of lambda function infrastructure is a CloudWatch trigger",
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
                "value":".  The following IaC configures a CloudWatch event that invokes the lambda function every morning at 7:00am UTC. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_cloudwatch_event_rule\" \"lambda-function-schedule-rule\" {\n  name = \"saints-xctf-rds-${local.env}-backup-lambda-rule\"\n  description = \"Execute the Lambda Function Daily\"\n  schedule_expression = \"cron(0 7 * * ? *)\"\n  is_enabled = true\n\n  tags = {\n    Name = \"saints-xctf-rds-${local.env}-backup-lambda-rule\"\n    Environment = upper(local.env)\n    Application = \"saints-xctf\"\n  }\n}\n\nresource \"aws_cloudwatch_event_target\" \"lambda-function-schedule-target\" {\n  arn = aws_lambda_function.rds-backup-lambda-function.arn\n  rule = aws_cloudwatch_event_rule.lambda-function-schedule-rule.name\n}\n\nresource \"aws_lambda_permission\" \"lambda-function-schedule-permission\" {\n  statement_id = \"AllowExecutionFromCloudWatch\"\n  action = \"lambda:InvokeFunction\"\n  function_name = aws_lambda_function.rds-backup-lambda-function.function_name\n  principal = \"events.amazonaws.com\"\n  source_arn = aws_cloudwatch_event_rule.lambda-function-schedule-rule.arn\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Lambda Function Source Code"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Lambda Function Source Code",
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
                "value":" In the previous section I discussed all the infrastructure required to configure the AWS Lambda function. Now let’s explore the function source code! ",
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
                "value":" The lambda function is written in Python and utilizes the ",
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
                        "value":"boto3",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" AWS SDK.  It grabs the database credentials from Secrets Manager, runs a Bash script which calls the ",
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
                        "value":"mysqldump",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command line utility, and uploads the resulting SQL file to an S3 bucket. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import os\nimport boto3\nimport botocore.config\nimport json\nimport subprocess\n\n\ndef create_backup(event, context):\n  \"\"\"\n  Create a backup of an RDS MySQL database and store it on S3\n  :param event: provides information about the triggering of the function\n  :param context: provides information about the execution environment\n  :return: True when successful\n  \"\"\"\n\n  # Set the path to the executable scripts in the AWS Lambda environment.\n  # Source: https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/\n  os.environ['PATH'] = os.environ['PATH'] + ':' + os.environ['LAMBDA_TASK_ROOT']\n\n  try:\n    env = os.environ['ENV']\n  except KeyError:\n    env = \"prod\"\n\n  try:\n    host = os.environ['DB_HOST']\n  except KeyError:\n    host = \"\"\n\n  secretsmanager = boto3.client('secretsmanager')\n  response = secretsmanager.get_secret_value(SecretId=f'saints-xctf-rds-{env}-secret')\n  secret_string = response.get(\"SecretString\")\n  secret_dict = json.loads(secret_string)\n\n  username = secret_dict.get(\"username\")\n  password = secret_dict.get(\"password\")\n\n  # To execute the bash script on AWS Lambda, change its pemissions and move it into the /tmp/ directory.\n  # Source: https://stackoverflow.com/a/48196444\n  subprocess.check_call([\"cp ./backup.sh /tmp/backup.sh && chmod 755 /tmp/backup.sh\"], shell=True)\n\n  subprocess.check_call([\"/tmp/backup.sh\", env, host, username, password])\n\n  # By default, S3 resolves buckets using the internet.  To use the VPC endpoint instead, use the 'path' addressing\n  # style config.  Source: https://stackoverflow.com/a/44478894\n  s3 = boto3.resource('s3', 'us-east-1', config=botocore.config.Config(s3={'addressing_style':'path'}))\n\n  s3.meta.client.upload_file('/tmp/backup.sql', f'saints-xctf-db-backups-{env}', 'backup.sql')\n\n  return True\n",
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
                "value":"subprocess.check_call()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" invokes the Bash script which creates the database backup SQL file.  The bash script only backs up the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saintsxctf",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" database within my MySQL RDS instance: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# backup.sh\n\n# Input Variables\nENV=$1\nHOST=$2\nUSERNAME=$3\nPASSWORD=$4\n\ncp ./mysqldump /tmp/mysqldump\nchmod 755 /tmp/mysqldump\n\n# Use an environment variable for the MySQL password so that mysqldump doesn't have to prompt for one.\nexport MYSQL_PWD=\"${PASSWORD}\"\n\n# Dump the saintsxctf database into a sql file\n/tmp/mysqldump -v --host ${HOST} --user ${USERNAME} --max_allowed_packet=1G --single-transaction --quick \\\n  --lock-tables=false --routines saintsxctf > /tmp/backup.sql\n",
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
                "value":" The function takes less than 15 seconds to complete in my tests.  By the time it finishes, the S3 bucket is updated with a new SQL file. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"S3 Bucket"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"S3 Bucket",
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
                "value":" I configured an S3 bucket in my production and development environments to hold database backups.  The following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/database/modules/s3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"S3   infrastructure and IAM policy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" create the buckets and give other AWS resources read and write access to bucket objects (files). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"locals {\n  env = var.prod ? \"prod\" : \"dev\"\n}\n\n/* The S3 bucket holding database backups keeps old files versioned for 60 days.  After that they are deleted. */\nresource \"aws_s3_bucket\" \"saints-xctf-db-backups\" {\n  bucket = \"saints-xctf-db-backups-${local.env}\"\n\n  # Bucket owner gets full control, nobody else has access\n  acl = \"private\"\n\n  # Policy allows for resources in this AWS account to create and read objects\n  policy = file(\"${path.module}/policies/policy-${local.env}.json\")\n\n  versioning {\n    enabled = true\n  }\n\n  lifecycle_rule {\n    enabled = true\n\n    noncurrent_version_expiration {\n      days = 60\n    }\n  }\n\n  tags = {\n    Name = \"SaintsXCTF Database Backups Bucket\"\n    Application = \"saints-xctf\"\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"Permissions\",\n      \"Effect\": \"Allow\",\n      \"Principal\": { \"AWS\": \"xxxx\" },\n      \"Action\": [\"s3:PutObject\", \"s3:GetObject\"],\n      \"Resource\": [\"arn:aws:s3:::saints-xctf-db-backups-prod/*\"]\n    }\n  ]\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Secrets Manager Credentials"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Secrets Manager Credentials",
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
                "value":" Protecting sensitive data is paramount when developing software.  To avoid hard coding credentials anywhere in my source code, I utilized AWS Secrets Manager to store database credentials.  As I previously showed, the Python lambda function grabs the RDS database credentials from Secrets Manager via the AWS SDK.  The following IaC stores RDS credentials in Secrets Manager through a command line variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"rds_secrets",
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
        "value":"locals {\n  env = var.prod ? \"prod\" : \"dev\"\n}\n\nresource \"aws_secretsmanager_secret\" \"saints-xctf-rds-secret\" {\n  name = \"saints-xctf-rds-${local.env}-secret\"\n  description = \"SaintsXCTF MySQL RDS Login Credentials for the ${upper(local.env)} Environment\"\n\n  tags = {\n    Name = \"saints-xctf-rds-${local.env}-secret\"\n    Environment = upper(local.env)\n    Application = \"saints-xctf\"\n  }\n}\n\nresource \"aws_secretsmanager_secret_version\" \"saints-xctf-rds-secret-version\" {\n  secret_id = aws_secretsmanager_secret.saints-xctf-rds-secret.id\n  secret_string = jsonencode(var.rds_secrets)\n}\n",
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
                "value":" My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/secrets-manager"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Secrets Manager module on GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" walks through how to pass the database credentials into Terraform using the CLI. It’s as simple as running the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/\nsecrets-manager/env/prod"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"following command",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" from your terminal: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"terraform apply -auto-approve -var 'rds_secrets={ username = \"saintsxctfprod\", password = \"XXX\" }'\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"VPC Endpoints"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"VPC Endpoints",
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
                "value":" A consequence of my AWS Lambda function living in my application VPC (so it can connect to my RDS instance) is that it has no access to the internet.  This is a problem when using the AWS SDK, which requires an internet connection to access other AWS resources.  Fortunately, Amazon created a solution to this problem called VPC endpoints.  VPC endpoints provide access to other AWS services without the need for an internet connection. I use them to connect to Secrets Manager and S3 from my lambda function. ",
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
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/database-snapshot/\nmodules/vpc-endpoints"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"IaC creates my two VPC endpoints",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"locals {\n  public_cidr = \"0.0.0.0/0\"\n}\n\n#-------------------\n# Existing Resources\n#-------------------\n\ndata \"aws_vpc\" \"saints-xctf-com-vpc\" {\n  tags = {\n    Name = \"saints-xctf-com-vpc\"\n  }\n}\n\ndata \"aws_subnet\" \"saints-xctf-com-vpc-public-subnet-0\" {\n  tags = {\n    Name = \"saints-xctf-com-lisag-public-subnet\"\n  }\n}\n\ndata \"aws_subnet\" \"saints-xctf-com-vpc-public-subnet-1\" {\n  tags = {\n    Name = \"saints-xctf-com-megank-public-subnet\"\n  }\n}\n\ndata \"aws_route_table\" \"saints-xctf-com-route-table-public\" {\n  tags = {\n    Name = \"saints-xctf-com-vpc-public-subnet-rt\"\n  }\n}\n\n#----------------------------------\n# SaintsXCTF VPC Ednpoint Resources\n#----------------------------------\n\nresource \"aws_vpc_endpoint\" \"saints-xctf-secrets-manager-vpc-endpoint\" {\n  vpc_id = data.aws_vpc.saints-xctf-com-vpc.id\n  service_name = \"com.amazonaws.us-east-1.secretsmanager\"\n  vpc_endpoint_type = \"Interface\"\n\n  subnet_ids = [\n    data.aws_subnet.saints-xctf-com-vpc-public-subnet-0.id,\n    data.aws_subnet.saints-xctf-com-vpc-public-subnet-1.id\n  ]\n\n  security_group_ids = [module.vpc-endpoint-security-group.security_group_id[0]]\n  private_dns_enabled = true\n}\n\nresource \"aws_vpc_endpoint\" \"saints-xctf-s3-vpc-endpoint\" {\n  vpc_id = data.aws_vpc.saints-xctf-com-vpc.id\n  service_name = \"com.amazonaws.us-east-1.s3\"\n  vpc_endpoint_type = \"Gateway\"\n\n  route_table_ids = [\n    data.aws_route_table.saints-xctf-com-route-table-public.id\n  ]\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Testing the Lambda Function"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Testing the Lambda Function",
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
                "value":" After building my new AWS Lambda, S3, Secrets Manager, and VPC Endpoint resources with Terraform, I’m ready to test out the lambda function.  If you want to implement your own version of this lambda function, you will have to tweak the code on ",
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
                        "value":"GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to match your application needs. ",
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
                "value":" When navigating to the AWS Lambda service page in the AWS Console, I can view the code uploaded in my new lambda function. ",
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
                    "src":"https://asset.jarombek.com/posts/9-5-19-rds-backup-lambda-1.png"
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
                "value":" There are multiple options for invoking the AWS Lambda function.  One option is to test the function directly in the AWS Console.  Another is to invoke it programmatically using the AWS CLI or SDKs.  I could enhance the lambda function by placing it behind API Gateway.  Or I can just wait until 7:00am UTC for the function to be invoked via the CloudWatch event. ",
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
                "value":" After testing the function a few times manually, I checked my S3 bucket and saw the ",
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
                        "value":"backup.sql",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file as expected: ",
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
                    "src":"https://asset.jarombek.com/posts/9-5-19-rds-backup-lambda-2.png"
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
                "value":" The next morning, I checked the version history of the ",
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
                        "value":"backup.sql",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file and saw it was updated at 3:00am EST (7:00am UTC) as expected: ",
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
                    "src":"https://asset.jarombek.com/posts/9-5-19-rds-backup-lambda-3.png"
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
                "value":" From here I can download the backup file, test it on a local MySQL instance, or run it on my RDS instance to restore the database contents. ",
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
                "value":" Creating an AWS Lambda function that handles RDS MySQL backups involved a lot of moving parts and was more complex than I initially anticipated.  The biggest hurdle was getting the function to connect to an RDS instance living in a private subnet while simultaneously granting it access to S3 and Secrets Manager.  You can view the code from this discovery post along with the rest of my application infrastructure on ",
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

postName = "sep-5-2019-rds-backups-pt2";
postDate = new Date('2019-09-05T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "AWS Lambda Function for MySQL RDS Backups Part II: Building the Function",
    description: `In this article I create additional AWS resources and further explain my design 
        decisions.  Finally, I test the lambda function and show the backup file in my S3 bucket.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "AWS Lambda",
            picture: "https://asset.jarombek.com/logos/awslambda.png",
            color: "awslambda"
        },
        {
            name: "AWS RDS",
            picture: "https://asset.jarombek.com/logos/awsrds.png",
            color: "awsrds"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "MySQL",
            picture: "https://asset.jarombek.com/logos/mysql.png",
            color: "mysql"
        },
        {
            name: "AWS S3",
            picture: "https://asset.jarombek.com/logos/awss3.svg",
            color: "awss3"
        },
        {
            name: "AWS Secrets Manager",
            picture: "https://asset.jarombek.com/logos/aws-secrets-manager.png",
            color: "awssm"
        },
        {
            name: "AWS VPC Endpoint",
            picture: "https://asset.jarombek.com/logos/aws-vpc-endpoint.png",
            color: "awsvpcendpoint"
        },
        {
            name: "AWS IAM",
            picture: "https://asset.jarombek.com/logos/aws-iam.svg",
            color: "awsiam"
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
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Bash",
            picture: "https://asset.jarombek.com/logos/bash.png",
            color: "bash"
        },
        {
            name: "Infrastructure as Code"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"AWS Lambda Runtimes\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html",
            link: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"
        },
        {
            startName: "\"AWS Lambda: Internet and Service Access for VPC-Connected Functions\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-internet",
            link: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-internet"
        },
        {
            startName: "\"VPC Endpoints\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html",
            link: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html"
        },
        {
            startName: "\"AWS Lambda: Execution Role and User Permissions\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-permissions",
            link: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-permissions"
        },
        {
            startName: "\"Use terraform to set up a lambda function triggered by a scheduled event source\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/35895316",
            link: "https://stackoverflow.com/a/35895316"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
