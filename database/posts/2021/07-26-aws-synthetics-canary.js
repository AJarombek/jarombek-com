/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/25/2021
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
                "value":" AWS CloudWatch Synthetic Monitoring is a platform that enables the creation of functions that monitor applications or APIs.  These functions are known as canary functions, and they use AWS Lambda for their infrastructure.  Canary functions are written in JavaScript or Python.  They utilize Puppeteer (JavaScript) and Selenium (Python) for browser test automation. ",
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
                "value":" I started looking into Synthetic Monitoring as a way to test my SaintsXCTF application running in production.  I had an issue where the website unexpectedly stopped working, and there was no automated process in place to alert me.  With Synthetic Monitoring, I created canary functions to test critical paths of the website, such as signing in a user.  If canary functions fail, I get an email alerting me of the issue. ",
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
                "value":" Synthetic Monitoring is a relatively new AWS service, so documentation is a bit lighter when compared to other services.  Specifically, documentation for building canary functions with Terraform is incomplete with very few code  samples.  In this article, I give an overview of my Synthetic Monitoring AWS infrastructure and show how it's configured with Terraform.  I also give a brief walk through of my canary function source code.  All the code mentioned in this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/\nsynthetic-monitoring"
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
            "title":"Canary Function Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Canary Function Infrastructure",
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
                "value":" My Synthetic Monitoring infrastructure consists of canary functions, an S3 bucket holding canary function results and images, and CloudWatch events to notify me via email when a canary function fails.  This infrastructure is shown in the diagram below. ",
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
                    "src":"https://asset.jarombek.com/posts/7-26-21-synthetics-canary-architecture.png"
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
                "value":" Notice that my infrastructure consists of three canary functions, two written in JavaScript and one written in Python. All this infrastructure is built with Terraform, separated into three modules.  The first module is for canary functions and CloudWatch events, the second module is for an S3 bucket holding canary function results, and the third  module contains an IAM role and policy assumed by the canary function. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Canary Functions and CloudWatch Events"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Canary Functions and CloudWatch Events",
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
                "value":" The following Terraform code creates one of my canary functions.  This canary function tests the sign in functionality on my website.  It also sets up a CloudWatch event for sending alerts when the function fails. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_s3_bucket\" \"saints-xctf-canaries\" {\n  bucket = \"saints-xctf-canaries\"\n}\n\ndata \"aws_iam_role\" \"canary-role\" {\n  name = \"canary-role\"\n}\n\ndata \"aws_sns_topic\" \"alert-email\" {\n  name = \"alert-email-topic\"\n}\n\nresource \"aws_synthetics_canary\" \"saints-xctf-sign-in\" {\n  name = \"sxctf-sign-in\"\n  artifact_s3_location = \"s3://${data.aws_s3_bucket.saints-xctf-canaries.id}/\"\n  execution_role_arn = data.aws_iam_role.canary-role.arn\n  runtime_version = \"syn-nodejs-puppeteer-3.1\"\n  handler = \"signIn.handler\"\n  zip_file = \"${path.module}/SaintsXCTFSignIn.zip\"\n  start_canary = true\n\n  success_retention_period = 2\n  failure_retention_period = 14\n\n  schedule {\n    expression = \"rate(1 hour)\"\n    duration_in_seconds = 0\n  }\n\n  run_config {\n    timeout_in_seconds = 300\n    memory_in_mb = 960\n    active_tracing = false\n  }\n\n  tags = {\n    Name = \"sxctf-sign-in\"\n    Environment = local.environment\n    Application = \"saints-xctf\"\n  }\n}\n\nresource \"aws_cloudwatch_event_rule\" \"saints-xctf-sign-in-canary-event-rule\" {\n  name = \"saints-xctf-sign-in-canary-rule\"\n  event_pattern = jsonencode({\n    source = [\"aws.synthetics\"]\n    detail = {\n      \"canary-name\": [aws_synthetics_canary.saints-xctf-sign-in.name],\n      \"test-run-status\": [\"FAILED\"]\n    }\n  })\n}\n\nresource \"aws_cloudwatch_event_target\" \"saints-xctf-sign-in-canary-event-target\" {\n  target_id = \"SaintsXCTFSignInCanaryTarget\"\n  arn = data.aws_sns_topic.alert-email.arn\n  rule = aws_cloudwatch_event_rule.saints-xctf-sign-in-canary-event-rule.name\n}\n",
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
                "value":" This canary function is started upon creation and is scheduled to run hourly.  It uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"syn-nodejs-puppeteer-3.1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runtime, which is the latest JavaScript runtime available to canary functions at the time of this article's writing.  The source code for the canary functions exists in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/synthetic-monitoring/modules/canaries/func"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" separate folder in my repository",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and is bundled into a zip file before the Terraform script is executed. ",
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
                "value":" The canary function Terraform module code is available in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/synthetic-monitoring/modules/canaries/main.tf"
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
                "value":" file on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
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
                "value":" The results of the canary function are uploaded to an S3 bucket, which is specified in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"artifact_s3_location",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_synthetics_canary",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource. This S3 bucket is created with the following configuration: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_caller_identity\" \"current\" {}\n\nresource \"aws_s3_bucket\" \"saints-xctf-canaries\" {\n  bucket = \"saints-xctf-canaries\"\n  acl = \"private\"\n\n  versioning {\n    enabled = true\n  }\n\n  lifecycle_rule {\n    enabled = true\n\n    noncurrent_version_expiration {\n      days = 60\n    }\n  }\n\n  tags = {\n    Name = \"saints-xctf-canaries\"\n    Application = \"saints-xctf\"\n    Environment = \"all\"\n  }\n}\n\nresource \"aws_s3_bucket_policy\" \"saints-xctf-canaries-policy\" {\n  bucket = aws_s3_bucket.saints-xctf-canaries.id\n  policy = jsonencode({\n    Version = \"2012-10-17\"\n    Id = \"SaintsXCTFCanariesPolicy\"\n    Statement = [\n      {\n        Sid = \"Permissions\"\n        Effect = \"Allow\"\n        Principal = {\n          AWS = data.aws_caller_identity.current.account_id\n        }\n        Action = [\"s3:*\"]\n        Resource = [\"${aws_s3_bucket.saints-xctf-canaries.arn}/*\"]\n      }\n    ]\n  })\n}\n",
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
                "value":" The S3 bucket Terraform module code is available in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/\nblob/master/synthetic-monitoring/modules/s3/main.tf"
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
                "value":" file on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"IAM Role and Policy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"IAM Role and Policy",
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
                "value":" Canary functions are given an IAM role, which is specified in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"execution_role_arn",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_synthetics_canary",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource.  The following code creates this IAM role and its corresponding policy. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_secretsmanager_secret\" \"saints-xctf-andy-password\" {\n  name = \"saints-xctf-andy-password\"\n}\n\ndata \"aws_iam_policy_document\" \"canary-assume-role-policy\" {\n  statement {\n    actions = [\"sts:AssumeRole\"]\n    effect = \"Allow\"\n\n    principals {\n      identifiers = [\"lambda.amazonaws.com\"]\n      type = \"Service\"\n    }\n  }\n}\n\nresource \"aws_iam_role\" \"canary-role\" {\n  name = \"canary-role\"\n  path = \"/saints-xctf-com/\"\n  assume_role_policy = data.aws_iam_policy_document.canary-assume-role-policy.json\n  description = \"IAM role for AWS Synthetic Monitoring Canaries\"\n}\n\ndata \"aws_iam_policy_document\" \"canary-policy\" {\n  statement {\n    sid = \"CanaryGeneric\"\n    effect = \"Allow\"\n    actions = [\n      \"s3:PutObject\",\n      \"s3:GetBucketLocation\",\n      \"s3:ListAllMyBuckets\",\n      \"cloudwatch:PutMetricData\",\n      \"logs:CreateLogGroup\",\n      \"logs:CreateLogStream\",\n      \"logs:PutLogEvents\"\n    ]\n    resources = [\"*\"]\n  }\n\n  statement {\n    sid = \"CanarySecretsManager\"\n    effect = \"Allow\"\n    actions = [\"secretsmanager:GetSecretValue\"]\n    resources = [data.aws_secretsmanager_secret.saints-xctf-andy-password.arn]\n  }\n}\n\nresource \"aws_iam_policy\" \"canary-policy\" {\n  name = \"canary-policy\"\n  path = \"/saints-xctf-com/\"\n  policy = data.aws_iam_policy_document.canary-policy.json\n  description = \"IAM role for AWS Synthetic Monitoring Canaries\"\n}\n\nresource \"aws_iam_role_policy_attachment\" \"canary-policy-attachment\" {\n  role = aws_iam_role.canary-role.name\n  policy_arn = aws_iam_policy.canary-policy.arn\n}\n",
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
                "value":" There are certain permissions that canary functions must have in their IAM roles",
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
                "value":".  These permissions are specified in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CanaryGeneric",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement of the policy.  My canary functions also require additional permissions, specifically for AWS Secrets Manager. These permissions are specified in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CanarySecretsManager",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement of the policy. ",
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
                "value":" The IAM Terraform module code is available in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/synthetic-monitoring/modules/iam/main.tf"
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
                "value":" file on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Resulting Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Resulting Infrastructure",
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
                "value":" After all this infrastructure is created, the canary functions and their execution results are viewable in the AWS console.  Individual functions can also be viewed and their execution results can be thoroughly analyzed. ",
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
                    "src":"https://asset.jarombek.com/posts/7-26-21-aws-canaries.png"
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
                    "src":"https://asset.jarombek.com/posts/7-26-21-aws-sign-in-canary.png"
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
            "title":"Canary Function Source Code"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Canary Function Source Code",
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
                "value":" The source code for canary functions is written in JavaScript or Python.  I used both languages, simply for the sake of trying all available options.  The runtime environments for both languages are configured with browser test libraries.  JavaScript functions use Puppeteer while Python functions use Selenium. ",
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
                "value":" First, I will walkthrough one of my functions utilizing JavaScript and Puppeteer, followed by a walkthrough of a  function utilizing Python and Selenium. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"JavaScript and Puppeteer Functions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"JavaScript and Puppeteer Functions",
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
                "value":" One of my JavaScript canary functions performs a test to see whether a user can sign in to my website.  The source code is shown below, and exists in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/synthetic-monitoring/\nmodules/canaries/func/sign-in/nodejs/node_modules/signIn.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"signIn.js",
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
        "value":"const synthetics = require('Synthetics');\nconst log = require('SyntheticsLogger');\nconst AWS = require('aws-sdk');\n\nconst secretsManager = new AWS.SecretsManager();\n\nconst synConfig = synthetics.getConfiguration();\n\nsynConfig.setConfig({\n    screenshotOnStepStart: true,\n    screenshotOnStepSuccess: false,\n    screenshotOnStepFailure: true\n});\n\nconst getCredentials = async () => {\n    const params = {\n        SecretId: 'saints-xctf-andy-password'\n    }\n\n    const secret = await secretsManager.getSecretValue(params).promise();\n    const { password } = JSON.parse(secret.SecretString);\n    return password;\n}\n\nconst signInUser = async () => {\n    log.info('Starting saints-xctf-sign-in canary.');\n    const page = await synthetics.getPage();\n    const response = await page.goto('https://saintsxctf.com/signin', {waitUntil: 'domcontentloaded', timeout: 30000});\n\n    if (!response) {\n        await synthetics.takeScreenshot('failed', 'load');\n        throw 'Failed to load SaintsXCTF, the website might be down.'\n    }\n\n    await synthetics.executeStep('enter_credentials', async () => {\n        const password = await getCredentials();\n        await page.type('.sxctf-image-input input[name=\"username\"]', 'andy');\n        await page.type('.sxctf-image-input input[name=\"password\"]', password);\n    });\n\n    await synthetics.executeStep('sign_in', async () => {\n        await page.waitForSelector('.sxctf-sign-in-body .aj-contained-button > button');\n        await page.click('.sxctf-sign-in-body .aj-contained-button > button');\n    });\n\n    await synthetics.executeStep('profile_page_click', async () => {\n        await page.waitForSelector('#dashboardSidePanel > .accordion:nth-child(1) > div');\n        await page.click('#dashboardSidePanel > .accordion:nth-child(1) > div');\n    });\n\n    await synthetics.executeStep('profile_page_view', async () => {\n        await page.waitForSelector('.pictureTitleContainer');\n    });\n}\n\nexports.handler = async () => {\n    return await signInUser();\n}\n",
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
                "value":" This function uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"synthetics",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" library, which is imported with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const synthetics = require('Synthetics')",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The synthetics library is a wrapper around Puppeteer, so reading the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/\nCloudWatch_Synthetics_Canaries_WritingCanary_Nodejs.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Synthetics documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" along with the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://pptr.dev/#?product=Puppeteer&version=v10.1.0&show=outline"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Puppeteer documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is enough to hit the ground running. Synthetics also has a bunch of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library_Nodejs.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" custom functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", such as the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"executeStep()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function used in my code. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"executeStep()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs Puppeteer commands and takes screenshots of the website, which are eventually uploaded to the canary function's S3 bucket. ",
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
                "value":" The canary function starts by navigating to the sign in page.  This is performed by the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"page.goto('https://saintsxctf.com/signin')",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command.  Then, in the four  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"executeStep()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions, it types in credentials to a sign in form (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'enter_credentials'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), clicks the sign in button (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'sign_in'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), clicks on the profile page button once signed in (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'profile_page_click'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), and checks to see if an element appears  in the profile page (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'profile_page_view'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"). ",
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
                "value":" This code also shows how canary functions can use the AWS SDK, in this case to grab user credentials from Secrets Manager.  Secrets Manager helps avoid the bad practice of hard coding credentials into the canary function source code. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Python and Selenium Functions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Python and Selenium Functions",
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
                "value":" Another runtime option for canary functions is Python and the Selenium library.  My Python canary function tests whether a \"forgot password\" email can be sent from my website.  The source code is shown below, and exists in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/synthetic-monitoring/modules/canaries\n/func/forgot-password/python/forgot_password.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"forgot_password.py",
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
            "language":"Python"
        },
        "value":"from aws_synthetics.selenium import synthetics_webdriver as webdriver\nfrom aws_synthetics.common import synthetics_logger as logger\nfrom selenium.webdriver.chrome.webdriver import WebDriver as ChromeWebDriver\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom selenium.webdriver.common.by import By\n\n\ndef forgot_password():\n    # 1) Navigate to the SaintsXCTF website homepage.\n    browser: ChromeWebDriver = webdriver.Chrome()\n    browser.get('https://saintsxctf.com/')\n\n    logger.info('Loaded SaintsXCTF')\n    browser.save_screenshot('home_page.png')\n\n    # 2) Click on the 'Sign In' button.\n    button_condition = EC.element_to_be_clickable((By.CSS_SELECTOR, '.signInButton'))\n    WebDriverWait(browser, 5).until(button_condition, message='Sign In Button Never Loaded').click()\n\n    url_sign_in_condition = EC.url_to_be('https://saintsxctf.com/signin')\n    WebDriverWait(browser, 5).until(url_sign_in_condition, message='Failed to Navigate to the Sign In Page')\n\n    browser.save_screenshot('sign_in_page.png')\n\n    # 3) Click on the 'Forgot Password' link.\n    forgot_password_link_condition = EC.element_to_be_clickable((By.LINK_TEXT, 'Forgot Password?'))\n    WebDriverWait(browser, 5).until(forgot_password_link_condition, message='Forgot Password Link Never Loaded').click()\n\n    url_forgot_password_condition = EC.url_to_be('https://saintsxctf.com/forgotpassword')\n    WebDriverWait(browser, 5).until(\n        url_forgot_password_condition,\n        message='Failed to Navigate to the Forgot Password Page'\n    )\n\n    browser.save_screenshot('forgot_password_page.png')\n\n    # 4) Type an email address into the 'Forgot Password' input field.\n    forgot_password_input = browser.find_element_by_css_selector('.sxctf-image-input input')\n    forgot_password_input.clear()\n    forgot_password_input.send_keys('andrew@jarombek.com')\n\n    browser.save_screenshot('forgot_password_email_typed.png')\n\n    # 5) Click on the 'Send' button.\n    forgot_password_button_condition = EC.element_to_be_clickable(\n        (By.CSS_SELECTOR, '.form-buttons > .aj-contained-button > button')\n    )\n\n    WebDriverWait(browser, 5) \\\n        .until(forgot_password_button_condition, message='Forgot Password Button Not Clickable') \\\n        .click()\n\n    # 6) Confirm that the 'Forgot Password' email was sent.\n    success_text_condition = EC.text_to_be_present_in_element(\n        (By.CSS_SELECTOR, '.sxctf-forgot-password-body h5'),\n        'An email was sent to your email address with a forgot password code.'\n    )\n\n    browser.save_screenshot('forgot_password_sending.png')\n\n    WebDriverWait(browser, 15).until(success_text_condition, message='Forgot Password Not Successfully Sent')\n\n    browser.save_screenshot('forgot_password_sent.png')\n\n\ndef handler(event, context):\n    return forgot_password()\n",
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
                "value":" Python canary code uses a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_synthetics",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" library, which is a wrapper around Selenium.  Reading the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/\nCloudWatch_Synthetics_Canaries_WritingCanary_Python.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Synthetics documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" along with the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://selenium-python.readthedocs.io/getting-started.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Selenium documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is enough to hit the ground running with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_synthetics",
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
                "value":"aws_synthetics",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also has a bunch of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library_Python.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" custom functions and classes",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", such as the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"synthetics_logger",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class used in my code. ",
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
                "value":" The steps taken by the canary function are listed in the Python code. ",
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
                "value":" Synthetic Monitoring canary functions are a nice addition to AWS that allow users to easily create and schedule browser test code for applications.  In my case, canary functions assist in sending me notifications if critical parts of my website stop working.  Although documentation is still a bit rough around the edges, I believe canary functions are a worthwhile option for end to end testing applications running in production environments.  All the source code for this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/synthetic-monitoring"
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

preview = content.slice(0, 2);

postName = "jul-26-2021-aws-synthetics-canary";
postDate = new Date('2021-07-26T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating AWS CloudWatch Synthetics Canary Functions with Terraform",
    description: ``,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "AWS CloudWatch",
            picture: "https://asset.jarombek.com/logos/aws-cloudwatch.png",
            color: "cloudwatch"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "HCL"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Selenium",
            picture: "https://asset.jarombek.com/logos/selenium.png",
            color: "selenium"
        },
        {
            name: "Puppeteer",
            picture: "https://asset.jarombek.com/logos/puppeteer.png",
            color: "puppeteer"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"AWS::Synthetics::Canary - ExecutionRoleArn\", ",
            endName: "",
            linkName: "https://amzn.to/3i11auu",
            link: "https://amzn.to/3i11auu"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
