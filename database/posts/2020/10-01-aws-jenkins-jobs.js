/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/1/2020
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
                "value":" I recently built a new ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-28-2020-eks"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins server hosted using Kubernetes on EKS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". My main use of the Jenkins server is to automate application and infrastructure tests, deployments, and miscellaneous tasks.  I get email notifications if these jobs fail, so I know when there is an issue with my software. ",
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
                "value":" Many of my Jenkins jobs work with the AWS CLI and Terraform to interact with and manipulate my cloud infrastructure.  I believe these jobs may be useful as templates for others wishing to achieve similar results. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Cost Detection"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Cost Detection",
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
                "value":" One issue I often faced with my AWS account was inadvertently keeping infrastructure running, using energy and costing me money.  To help safeguard against this, I decided to create a Jenkins job which would run on a daily schedule, checking the costs incurred on my account. If the daily costs are under a certain amount, the job passes.  If the costs hit a certain threshold, the job throws a warning, and if the costs are way too high it fails. ",
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
                "value":" The Jenkins pipeline is named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cost-detection",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The full Jenkinsfile is listed below, with the code also available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-jenkins-jobs/tree/master/global-aws/cost-detection"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"@Library(['global-jenkins-library@master']) _\n\npipeline {\n  agent {\n    label 'master'\n  }\n  triggers {\n    cron('H 7 * * *')\n  }\n  options {\n    ansiColor('xterm')\n    timeout(time: 1, unit: 'HOURS')\n    buildDiscarder(\n      logRotator(daysToKeepStr: '10', numToKeepStr: '5')\n    )\n  }\n  stages {\n    stage(\"Clean Workspace\") {\n      steps {\n        script {\n          cleanWs()\n        }\n      }\n    }\n    stage(\"Checkout Repository\") {\n      steps {\n        script {\n          checkoutRepo()\n        }\n      }\n    }\n    stage(\"Setup Environment\") {\n      steps {\n        script {\n          setupEnvironment()\n        }\n      }\n    }\n    stage(\"Detect AWS Costs\") {\n      steps {\n        script {\n          detectAWSCosts()\n        }\n      }\n    }\n  }\n  post {\n    always {\n      script {\n        postScript()\n      }\n    }\n  }\n}\n\ndef checkoutRepo() {\n  dir('repos/global-aws-infrastructure') {\n    git.basicClone('global-aws-infrastructure', 'master')\n  }\n}\n\ndef setupEnvironment() {\n  infrastructuresteps.setupEnvironment('repos/global-aws-infrastructure/scripts')\n}\n\ndef detectAWSCosts() {\n  dir('repos/global-aws-infrastructure/scripts') {\n    String cost_string = sh (\n      script: \"pipenv run python costDetection.py\",\n      returnStdout: true\n    )\n\n    println cost_string\n    float cost = cost_string as float\n\n    if (cost <= 8.5) {\n      currentBuild.result = \"SUCCESS\"\n    } else if (cost > 8.5 && cost <= 9.5) {\n      currentBuild.result = \"UNSTABLE\"\n    } else {\n      currentBuild.result = \"FAILURE\"\n    }\n\n    env.AVG_COST = cost_string\n  }\n}\n\ndef postScript() {\n  def bodyTitle = \"Detect AWS Costs\"\n  def bodyContent = \"3-Day Cost Average: $env.AVG_COST\"\n  def jobName = env.JOB_NAME\n  def buildStatus = currentBuild.result\n  def buildNumber = env.BUILD_NUMBER\n  def buildUrl = env.BUILD_URL\n\n  genericsteps.postScript(bodyTitle, bodyContent, jobName, buildStatus, buildNumber, buildUrl)\n}\n",
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
                "value":" The first thing to notice is that the Jenkins job imports a shared library named ",
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
                        "value":"global-jenkins-library",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Functions from this library are used throughout the Jenkinsfile, such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"git.basicClone()",
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
                "value":"infrastructuresteps.setupEnvironment()",
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
                "value":"genericsteps.postScript()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The code for these functions is in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-library"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global-jenkins-library",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
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
                "value":" The job runs on my master Jenkins agent (the Jenkins server's container) and is triggered every morning sometime between 7 and 8 AM UTC.  The job has three stages - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"checkoutRepo",
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
                "value":"setupEnvironment",
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
                "value":"detectAWSCosts",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". These stages checkout the repository, create a Python virtual environment from a Pipfile, and run a Python script which performs the AWS account cost detection, respectively.  In the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"detectAWSCosts",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stage you can also see the cost ranges and their respective build results. ",
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
                "value":" Once all the stages are completed, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postScript",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is called.  This function cleans the Jenkins workspace and sends me an email notification with the job results. ",
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
                "value":" The most important part of the Jenkins job is the Python script which calculates the average cost of my AWS infrastructure over the past three days.  The script uses ",
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
                "value":", an AWS SDK for Python.  Specifically, it uses the cost explorer API to get cost and usage statistics. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"from datetime import datetime, timedelta\nfrom typing import List\nfrom functools import reduce\n\nimport boto3\nfrom boto3_type_annotations.ce import Client as CEClient\n\n\ndef main():\n  cost_explorer: CEClient = boto3.client('ce')\n\n  end = datetime.now()\n  start = end - timedelta(days=3)\n\n  cost_statistics: dict = cost_explorer.get_cost_and_usage(\n    TimePeriod={\n      'Start': start.strftime('%Y-%m-%d'),\n      'End': end.strftime('%Y-%m-%d')\n    },\n    Granularity='DAILY',\n    Metrics=['AmortizedCost']\n  )\n\n  costs: List[float] = [\n    float(cost.get('Total').get('AmortizedCost').get('Amount'))\n    for cost in cost_statistics.get('ResultsByTime')\n  ]\n\n  avg_cost = reduce(lambda x, y: x + y, costs) / 3\n  avg_cost = round(avg_cost, 2)\n  print(avg_cost)\n\n\nif __name__ == '__main__':\n  exit(main())\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Scheduling RDS Databases"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Scheduling RDS Databases",
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
                "value":" My ",
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
                        "value":"SaintsXCTF application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog?query=AWS%20RDS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Amazon RDS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" database, running MySQL, to hold application data.  The application has a production environment and a development environment.  Both environments have their own RDS database instance.  When my development environment is running, I try to cut costs by shutting down its RDS database at night.  I created a Jenkins job called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"scheduling-dev-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The full Jenkinsfile is listed below, with the code also available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-jenkins-jobs/tree/master/saints-xctf/infrastructure/scheduling-dev-database"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"@Library(['global-jenkins-library@master']) _\n\npipeline {\n  agent {\n    label 'master'\n  }\n  parameters {\n    choice(\n      name: 'action',\n      choices: ['start', 'stop'],\n      description: 'Whether to start or stop the database.'\n    )\n  }\n  options {\n    ansiColor('xterm')\n    timeout(time: 1, unit: 'HOURS')\n    timestamps()\n    buildDiscarder(\n      logRotator(daysToKeepStr: '10', numToKeepStr: '5')\n    )\n  }\n  triggers {\n    parameterizedCron('''\n      15 11 * * * %action=start\n      45 1 * * * %action=stop\n    ''')\n  }\n  stages {\n    stage(\"Clean Workspace\") {\n      steps {\n        script {\n          cleanWs()\n        }\n      }\n    }\n    stage(\"Schedule Database\") {\n      steps {\n        script {\n          if (params.action == 'stop') {\n            sh '''\n              export AWS_DEFAULT_REGION=us-east-1\n              aws rds stop-db-instance --db-instance-identifier saints-xctf-mysql-database-dev\n            '''\n          } else {\n            sh '''\n              export AWS_DEFAULT_REGION=us-east-1\n              aws rds start-db-instance --db-instance-identifier saints-xctf-mysql-database-dev\n            '''\n          }\n        }\n      }\n    }\n  }\n  post {\n    always {\n      script {\n        postScript()\n      }\n    }\n  }\n}\n\ndef postScript() {\n  def bodyTitle = \"Schedule SaintsXCTF Development Database.\"\n  def bodyContent = \"Action: ${params.action.capitalize()}\"\n  def jobName = env.JOB_NAME\n  def buildStatus = currentBuild.result\n  def buildNumber = env.BUILD_NUMBER\n  def buildUrl = env.BUILD_URL\n\n  genericsteps.postScript(bodyTitle, bodyContent, jobName, buildStatus, buildNumber, buildUrl)\n}\n",
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
                "value":" The job takes in a parameter named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"action",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which determines whether the RDS database is stopped or started.  It also runs on a schedule, utilizing the Parameterized Scheduler plugin",
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
                "value":".  This plugin allows the database to be stopped every night and started  up again every morning. ",
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
                "value":" The AWS CLI is utilized to start or stop the database, depending on the action specified.  Just like the cost detection job, the results are emailed to me after all the stages are completed. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Create & Destroy Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Create & Destroy Infrastructure",
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
                "value":" Most of my AWS Infrastructure is written as code using Terraform.  I decided to write Jenkins jobs for all my Terraform modules which create and destroy infrastructure.  This has two benefits.  The first benefit is that the creation and deletion of infrastructure is automated, so I don't need to manually type out Terraform CLI commands.  The second benefit is that the Jenkins job code is a form of documentation for how to build certain infrastructure modules, similarly to how a Dockerfile is documentation for how to host an application on a server.  With the Jenkins jobs in place, I can refer to their Jenkinsfiles in case I forget the steps for building infrastructure in the future. ",
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
                "value":" Let's go over an example.   I created a Jenkins job called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"create-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to build an applications RDS infrastructure and a Jenkins job called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"destroy-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to tear down an applications RDS infrastructure.  The full Jenkinsfile for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"create-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is listed below, with the code also available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-jobs/\ntree/master/saints-xctf/infrastructure/create-database"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"@Library(['global-jenkins-library@master']) _\n\npipeline {\n  agent {\n    label 'master'\n  }\n  parameters {\n    booleanParam(\n      name: 'autoApply',\n      defaultValue: true,\n      description: \"Whether the Terraform infrastructure should be automatically approved.\"\n    )\n    choice(\n      name: 'environment',\n      choices: ['dev'],\n      description: 'Environment to create the database.'\n    )\n  }\n  options {\n    ansiColor('xterm')\n    timeout(time: 1, unit: 'HOURS')\n    buildDiscarder(\n      logRotator(daysToKeepStr: '10', numToKeepStr: '5')\n    )\n  }\n  stages {\n    stage(\"Clean Workspace\") {\n      steps {\n        script {\n          cleanWs()\n        }\n      }\n    }\n    stage(\"Checkout Repository\") {\n      steps {\n        script {\n          checkoutRepo()\n        }\n      }\n    }\n    stage(\"Terraform Init\") {\n      steps {\n        script {\n          terraformInit()\n        }\n      }\n    }\n    stage(\"Terraform Validate\") {\n      steps {\n        script {\n          terraformValidate()\n        }\n      }\n    }\n    stage(\"Terraform Plan\") {\n      steps {\n        script {\n          terraformPlan()\n        }\n      }\n    }\n    stage(\"Terraform Apply\") {\n      when {\n        allOf {\n          environment name: 'TERRAFORM_NO_CHANGES', value: 'false'\n          environment name: 'TERRAFORM_PLAN_ERRORS', value: 'false'\n        }\n      }\n      steps {\n        script {\n          terraformApply()\n        }\n      }\n    }\n  }\n  post {\n    always {\n      script {\n        postScript()\n      }\n    }\n  }\n}\n\n// Stage functions\ndef checkoutRepo() {\n  def name = \"saints-xctf-infrastructure\"\n  def branch = \"master\"\n\n  genericsteps.checkoutRepo(name, branch)\n}\n\ndef terraformInit() {\n  INFRA_DIR = \"repos/saints-xctf-infrastructure/database/env/$params.environment\"\n  terraform.terraformInit(INFRA_DIR)\n}\n\ndef terraformValidate() {\n  terraform.terraformValidate(INFRA_DIR)\n}\n\ndef terraformPlan() {\n  withCredentials([\n    usernamePassword(\n      credentialsId: 'saintsxctf-rds-dev',\n      passwordVariable: 'password',\n      usernameVariable: 'username'\n    )\n  ]) {\n    terraform.terraformPlan(\n      INFRA_DIR,\n      \"terraform plan -var 'username=${username}' -var 'password=${password}' -detailed-exitcode -out=terraform.tfplan\"\n    )\n  }\n}\n\ndef terraformApply() {\n  terraform.terraformApply(INFRA_DIR, params.autoApply)\n}\n\ndef postScript() {\n  def bodyTitle = \"Create saints-xctf-infrastructure $params.environment Database.\"\n  def bodyContent = \"\"\n  def jobName = env.JOB_NAME\n  def buildStatus = currentBuild.result\n  def buildNumber = env.BUILD_NUMBER\n  def buildUrl = env.BUILD_URL\n\n  genericsteps.postScript(bodyTitle, bodyContent, jobName, buildStatus, buildNumber, buildUrl)\n}\n",
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
                "value":" The Jenkins job takes two parameters - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"autoApply",
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
                "value":"environment",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"autoApply",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is false, then manual intervention is needed to approve the Terraform plan which builds AWS infrastructure. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"environment",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides a choice of environments to create the RDS database in.  I then have a series of stages which checkout the repository containing the RDS Terraform scripts and attempt to apply them.  The Terraform module that is checked out comes from my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/database"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints-xctf-infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
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
                "value":" The Terraform stages utilize some reusable functions I've created.  These functions, which initialize a Terraform module, validate it, generate a plan for the changes, and apply the changes, are listed below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"/**\n * Initialize the Terraform configuration in a given directory.\n * @param directory The directory containing Terraform files.\n */\ndef terraformInit(String directory) {\n    dir(directory) {\n        sh \"\"\"\n            terraform --version\n            terraform init\n        \"\"\"\n    }\n}\n\n/**\n * Validate the Terraform files in a directory for syntax issues.\n * @param directory The directory containing Terraform files.\n */\ndef terraformValidate(String directory) {\n    dir(directory) {\n        sh \"terraform validate\"\n    }\n}\n\n/**\n * Create a plan of the infrastructure that Terraform will create.\n * @param directory The directory containing Terraform files.\n * @param script Optional custom Terraform plan script.  Useful when the plan includes variables.\n */\ndef terraformPlan(String directory, String script = 'terraform plan -detailed-exitcode -out=terraform.tfplan') {\n    env.TERRAFORM_NO_CHANGES = 'false'\n    env.TERRAFORM_PLAN_ERRORS = 'false'\n\n    dir(directory) {\n        def result = sh(\n            script: script,\n            returnStatus: true\n        )\n\n        // The result is 0 if the plan found no changes, 1 if there are errors with the plan,\n        // and 2 if the plan is successful and changes will be made.\n        switch (result) {\n            case 0:\n                currentBuild.result = 'SUCCESS'\n                env.TERRAFORM_NO_CHANGES = 'true'\n                break\n            case 1:\n                currentBuild.result = 'UNSTABLE'\n                env.TERRAFORM_PLAN_ERRORS = 'true'\n                break\n            case 2:\n                println 'The \"terraform plan\" Response Was Valid.'\n                break\n            default:\n                println 'Unexpected Terraform exit code.'\n                currentBuild.result = 'FAILURE'\n        }\n    }\n}\n\n/**\n * Apply/create the infrastructure defined in Terraform configuration files.\n * @param directory The directory containing Terraform files.\n * @param autoApply Whether to automatically create the infrastructure or prompt the user to confirm/deny creation.\n */\ndef terraformApply(String directory, boolean autoApply) {\n    if (!autoApply) {\n        timeout(time: 15, unit: 'MINUTES') {\n            input message: 'Confirm Plan', ok: 'Apply'\n        }\n    }\n\n    dir(directory) {\n        sh \"terraform apply -auto-approve terraform.tfplan\"\n    }\n}\n",
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
                "value":" Once the database infrastructure is created with Terraform, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"destroy-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Jenkins job can be run to tear it down.  The Jenkinsfile is listed below and is also available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-jobs/tree/master/saints-xctf/infrastructure/\ndestroy-database"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"@Library(['global-jenkins-library@master']) _\n\npipeline {\n    agent {\n        label 'master'\n    }\n    parameters {\n        booleanParam(\n            name: 'autoDestroy',\n            defaultValue: true,\n            description: \"Whether the Terraform infrastructure should be automatically destroyed.\"\n        )\n        choice(\n            name: 'environment',\n            choices: ['dev'],\n            description: 'Environment to destroy the database.'\n        )\n    }\n    options {\n        ansiColor('xterm')\n        timeout(time: 1, unit: 'HOURS')\n        buildDiscarder(\n            logRotator(daysToKeepStr: '10', numToKeepStr: '5')\n        )\n    }\n    stages {\n        stage(\"Clean Workspace\") {\n            steps {\n                script {\n                    cleanWs()\n                }\n            }\n        }\n        stage(\"Checkout Repository\") {\n            steps {\n                script {\n                    checkoutRepo()\n                }\n            }\n        }\n        stage(\"Terraform Init\") {\n            steps {\n                script {\n                    terraformInit()\n                }\n            }\n        }\n        stage(\"Terraform Plan\") {\n            steps {\n                script {\n                    terraformPlanDestroy()\n                }\n            }\n        }\n        stage(\"Terraform Destroy\") {\n            when {\n                allOf {\n                    environment name: 'TERRAFORM_NO_CHANGES', value: 'false'\n                    environment name: 'TERRAFORM_PLAN_ERRORS', value: 'false'\n                }\n            }\n            steps {\n                script {\n                    terraformDestroy()\n                }\n            }\n        }\n    }\n    post {\n        always {\n            script {\n                postScript()\n            }\n        }\n    }\n}\n\n// Stage functions\ndef checkoutRepo() {\n    def name = \"saints-xctf-infrastructure\"\n    def branch = \"master\"\n\n    genericsteps.checkoutRepo(name, branch)\n}\n\ndef terraformInit() {\n    INFRA_DIR = \"repos/saints-xctf-infrastructure/database/env/$params.environment\"\n    terraform.terraformInit(INFRA_DIR)\n}\n\ndef terraformPlanDestroy() {\n    terraform.terraformPlanDestroy(INFRA_DIR)\n}\n\ndef terraformDestroy() {\n    terraform.terraformDestroy(INFRA_DIR, params.autoDestroy)\n}\n\ndef postScript() {\n    def bodyTitle = \"Destroy saints-xctf-infrastructure $params.environment Database.\"\n    def bodyContent = \"\"\n    def jobName = env.JOB_NAME\n    def buildStatus = currentBuild.result\n    def buildNumber = env.BUILD_NUMBER\n    def buildUrl = env.BUILD_URL\n\n    genericsteps.postScript(bodyTitle, bodyContent, jobName, buildStatus, buildNumber, buildUrl)\n}\n",
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
                "value":" Just like the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"create-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"destroy-database",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" utilizes reusable Groovy scripts for destroying Terraform infrastructure. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"/**\n * Create a plan of the infrastructure that Terraform will destroy.\n * @param directory The directory containing Terraform files.\n */\ndef terraformPlanDestroy(String directory) {\n    env.TERRAFORM_NO_CHANGES = 'false'\n    env.TERRAFORM_PLAN_ERRORS = 'false'\n\n    dir(directory) {\n        def result = sh(\n            script: 'terraform plan -destroy -detailed-exitcode',\n            returnStatus: true\n        )\n\n        // The result is 0 if the plan found no changes, 1 if there are errors with the plan,\n        // and 2 if the plan is successful and changes will be made.\n        switch (result) {\n            case 0:\n                currentBuild.result = 'SUCCESS'\n                env.TERRAFORM_NO_CHANGES = 'true'\n                break\n            case 1:\n                currentBuild.result = 'UNSTABLE'\n                env.TERRAFORM_PLAN_ERRORS = 'true'\n                break\n            case 2:\n                println 'The \"terraform plan\" Response Was Valid.'\n                break\n            default:\n                println 'Unexpected Terraform exit code.'\n                currentBuild.result = 'FAILURE'\n        }\n    }\n}\n\n/**\n * Destroy the infrastructure that Terraform files in the specified directory are managing.\n * @param directory The directory containing Terraform files.\n * @param autoDestroy Whether to automatically destroy the infrastructure or\n * prompt the user to confirm/deny destruction.\n */\ndef terraformDestroy(String directory, boolean autoDestroy) {\n    if (!autoDestroy) {\n        timeout(time: 15, unit: 'MINUTES') {\n            input message: 'Confirm Plan', ok: 'Apply'\n        }\n    }\n\n    dir(directory) {\n        sh \"terraform destroy -auto-approve\"\n    }\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Push Images to ECR"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Push Images to ECR",
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
                "value":" The last Jenkins job to discuss takes a Dockerfile, creates an image, and pushes it to an AWS ECR repository.  Specifically, this image is for one of my prototype applications which uses GraphQL.  The full Jenkinsfile is listed below, with the code also available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-jenkins-jobs/tree/master/prototypes/graphql-react-prototype/push-app-image"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"@Library(['global-jenkins-library@master']) _\n\npipeline {\n    agent {\n        label 'master'\n    }\n    parameters {\n        string(\n            name: 'label',\n            defaultValue: '1.0.0',\n            description: 'Label/Version of the Docker image to push to DockerHub'\n        )\n        booleanParam(\n            name: 'isLatest',\n            defaultValue: true,\n            description: \"Whether this Docker image should also be pushed with the 'latest' label\"\n        )\n    }\n    options {\n        ansiColor('xterm')\n        timeout(time: 1, unit: 'HOURS')\n        buildDiscarder(\n            logRotator(daysToKeepStr: '10', numToKeepStr: '5')\n        )\n    }\n    stages {\n        stage(\"Clean Workspace\") {\n            steps {\n                script {\n                    cleanWs()\n                }\n            }\n        }\n        stage(\"Checkout Repository\") {\n            steps {\n                script {\n                    checkoutRepo()\n                }\n            }\n        }\n        stage(\"Build Docker Image\") {\n            steps {\n                script {\n                    buildImage()\n                }\n            }\n        }\n        stage(\"Push Docker Image\") {\n            steps {\n                script {\n                    pushImage()\n                }\n            }\n        }\n        stage(\"Cleanup Docker Environment\") {\n            steps {\n                script {\n                    cleanupDockerEnvironment()\n                }\n            }\n        }\n    }\n    post {\n        always {\n            script {\n                postScript()\n            }\n        }\n    }\n}\n\ndef checkoutRepo() {\n    def name = \"graphql-react-prototype\"\n    def branch = \"master\"\n\n    genericsteps.checkoutRepo(name, branch)\n}\n\ndef buildImage() {\n    dir(\"repos/graphql-react-prototype\") {\n        sh \"\"\"\n            sudo docker image build \\\n                -f app.dockerfile \\\n                -t graphql-react-prototype-app:latest \\\n                --network=host .\n        \"\"\"\n    }\n}\n\ndef pushImage() {\n    def repoUrl = \"739088120071.dkr.ecr.us-east-1.amazonaws.com\"\n    def imageName = \"graphql-react-prototype-app\"\n    def imageLabel = params.label\n    def isLatest = params.isLatest\n\n    sh \"\"\"\n        aws ecr get-login-password --region us-east-1 | sudo docker login -u AWS --password-stdin $repoUrl\n\n        sudo docker image tag $imageName:latest $repoUrl/$imageName:$imageLabel\n        sudo docker push $repoUrl/$imageName:$imageLabel\n    \"\"\"\n\n    if (isLatest) {\n        sh \"\"\"\n            sudo docker image tag $imageName:latest $repoUrl/$imageName:latest\n            sudo docker push $repoUrl/$imageName:latest\n        \"\"\"\n    }\n}\n\ndef cleanupDockerEnvironment() {\n    def imageName = \"graphql-react-prototype-app\"\n    def repoUrl = \"739088120071.dkr.ecr.us-east-1.amazonaws.com\"\n\n    sh \"\"\"\n        sudo docker image rm $imageName:latest\n        sudo docker image rm $repoUrl/$imageName:$params.label\n    \"\"\"\n\n    if (params.isLatest) {\n        sh \"\"\"\n            sudo docker image rm $repoUrl/$imageName:latest\n        \"\"\"\n    }\n\n    sh \"sudo docker image ls\"\n}\n\ndef postScript() {\n    def bodyTitle = \"Push graphql-react-prototype-app Docker image to ECR.\"\n    def bodyContent = \"\"\n    def jobName = env.JOB_NAME\n    def buildStatus = currentBuild.result\n    def buildNumber = env.BUILD_NUMBER\n    def buildUrl = env.BUILD_URL\n\n    genericsteps.postScript(bodyTitle, bodyContent, jobName, buildStatus, buildNumber, buildUrl)\n}\n",
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
                "value":" The Jenkins job takes two parameters which are used for labeling the Docker image.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"label",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the numbered version of the image and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"isLatest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines if this image should also be labelled with ",
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
                        "value":"latest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The stages of the pipeline checkout the repository containing the Dockerfile, build the image, and push it to an ECR repository. It also performs some cleanup work, such as deleting the Docker image after it's pushed.  Finally, just like my other Jenkins jobs, it sends me an email with the results. ",
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
                "value":" Jenkins jobs and other CI/CD scripts are great ways to automate deployments, testing, and infrastructure. I use Jenkins extensively to help my AWS cloud workloads.  You can view more of my Jenkins jobs in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-jobs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global-jenkins-jobs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository and my reusable Jenkins function library in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-library"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global-jenkins-library",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "oct-1-2020-aws-jenkins-jobs";
postDate = new Date('2020-10-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Interesting AWS Jenkins Jobs",
    description: `Many of my Jenkins jobs work with the AWS CLI and Terraform to interact with and 
        manipulate my cloud infrastructure.  I believe these jobs may be useful as templates for others 
        wishing to achieve similar results.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "Jenkins",
            picture: "https://asset.jarombek.com/logos/jenkins.png",
            color: "jenkins"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Parameterized Scheduler\", ",
            endName: "",
            linkName: "https://plugins.jenkins.io/parameterized-scheduler/",
            link: "https://plugins.jenkins.io/parameterized-scheduler/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
