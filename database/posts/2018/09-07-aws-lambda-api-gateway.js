/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/4/2018
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
                "value":" Traditionally when building a mobile app or website, the application is split into a few different layers.  The necessary layers commonly comprise a front-end, backend, and database.  In recent years, the backend is often a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-5-2018-graphql-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"REST API",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that makes requests to a database.  The front-end communicates with the REST API through HTTP requests. ",
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
                "value":" To set up a REST API, a server is needed to host backend code.  Using a backend server means app developers have to spend time managing infrastructure.  As I mentioned in my post on ",
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
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", when cloud computing came along new techniques for handling infrastructure were introduced.  With AWS Lambda, we have a new technique for handling code and infrastructure in our backend.  AWS Lambda introduces containerized functions and serverless computing. ",
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
                "value":" Traditionally when building a mobile app or website, the application is split into a few different layers.  The necessary layers commonly comprise a front-end, backend, and database.  In recent years, the backend is often a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-5-2018-graphql-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"REST API",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that makes requests to a database.  The front-end communicates with the REST API through HTTP requests. ",
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
                "value":" To set up a REST API, a server is needed to host backend code.  Using a backend server means app developers have to spend time managing infrastructure.  As I mentioned in my post on ",
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
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", when cloud computing came along new techniques for handling infrastructure were introduced.  With AWS Lambda, we have a new technique for handling code and infrastructure in our backend.  AWS Lambda introduces containerized functions and serverless computing. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Serverless Model"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Serverless Model",
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
                "value":" In a serverless model, each API endpoint corresponds to a containerized function",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1,2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". While each container does run on a server, AWS abstracts the server infrastructure away, letting developers focus solely on the function definition.  Developers only pay Amazon for the memory usage of a function.  If a function never executes, you never have to pay. ",
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
                "value":" AWS Lambda is a service for defining functions that fit the serverless model.  APIs are defined with another AWS service called API Gateway.  API Gateway gives AWS Lambda functions a REST API endpoint mapping. ",
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
                    "src":"https://asset.jarombek.com/posts/9-7-18-serverless.png"
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
                "value":" With a serverless model, you don’t have to maintain an entire backend server. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Building an AWS Lambda Function"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Building an AWS Lambda Function",
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
                "value":" AWS Lambda functions are just like any other programming language function - they take in arguments and return a value.  They are specified as synchronous or asynchronous.  A number of different runtimes are supported for lambda functions - such as Node.js, Java, and Python. ",
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
                "value":" I created a lambda function in JavaScript on the Node.js runtime.  The function takes an integer argument and returns a roman numeral equivalent.  The following code sets up the function: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"exports.handler = (event, context, callback) => {\n\n  const romanNumeral = toRomanNumeral(event.integer);\n\n  callback(null, romanNumeral);\n};\n",
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
                "value":" The function definition takes three arguments and is given the name ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"handler",
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
                "value":"callback",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a callback function used to return data back to whoever invoked the lambda function.  The first argument passed to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"callback",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an error status.  If this argument is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the lambda function returned successfully.  The second argument contains any data the lambda function should return. My function always returns back the roman numeral. ",
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
                "value":" The argument ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"context",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains runtime information about the lambda function. ",
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
                "value":"event",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides information about the lambda function request.  Inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"event",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exists data passed by whoever invoked the function.  In the code above I access the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"event",
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
                "value":"integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains a number that is passed to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"toRomanNumeral()",
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
            "language":"JavaScript"
        },
        "value":"const toRomanNumeral = (int) => {\n  const romanNumerals = [\n    {number: 1000, letter: 'M'},\n    {number: 900, letter: 'CM'},\n    {number: 500, letter: 'D'},\n    {number: 400, letter: 'CD'},\n    {number: 100, letter: 'C'},\n    {number: 90, letter: 'XC'},\n    {number: 50, letter: 'L'},\n    {number: 40, letter: 'XL'},\n    {number: 10, letter: 'X'},\n    {number: 9, letter: 'IX'},\n    {number: 5, letter: 'V'},\n    {number: 4, letter: 'IV'},\n    {number: 1, letter: 'I'}\n  ];\n\n  let convertedNumber = \"\";\n  for (const i in romanNumerals) {\n    while (int >= romanNumerals[i].number) {\n      convertedNumber += romanNumerals[i].letter;\n      int -= romanNumerals[i].number;\n    }\n  }\n\n  return convertedNumber;\n};\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Deploying an AWS Lambda Function"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Deploying an AWS Lambda Function",
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
                "value":" One way to set up a lambda function is to go into the AWS Console UI and follow the steps on the graphical display.  If you read my previous post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nsep-3-2018-terraform"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Infrastructure as Code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" you know that there is a better option - Terraform! Terraform provisions cloud infrastructure with a script and CLI.  In my previous post I used Terraform to configure infrastructure for a web server, however it also works with AWS Lambda and API Gateway. ",
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
                "value":" Terraform isn’t the main topic of this post, so I will quickly breeze through this section.  All the code is fully inline documented and is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ndevops-prototypes/blob/master/terraform/awslambda/lambda.tf"
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
                "value":".  Terraform has great documentation for ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.terraform.io/docs/providers/aws/r/lambda_function.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" AWS Lambda",
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
                    "href":"https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" API Gateway",
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
                "value":" The first resources to create in Terraform relate to the lambda function and granting invocation permissions to API Gateway.  Remember each lambda function is mapped to an API Gateway endpoint. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"provider \"aws\" {\n  region = \"us-east-1\"\n}\n\n# A data source containing the lambda function\ndata \"archive_file\" \"lambda\" {\n  source_file = \"toRomanNumeral.js\"\n  type = \"zip\"\n  output_path = \"toRomanNumeral.zip\"\n}\n\nresource \"aws_lambda_function\" \"to-roman-numberal-js\" {\n  # The local file to use as the lambda function.  A popular alternative is to keep the lambda function\n  # source code in an S3 bucket.\n  filename = \"toRomanNumeral.zip\"\n\n  # A unique name to give the lambda function.\n  function_name = \"ToRomanNumberalJs\"\n\n  # The entrypoint to the lambda function in the source code.  The format is <file-name>.<property-name>\n  handler = \"toRomanNumeral.handler\"\n\n  # IAM (Identity and Access Management) policy for the lambda function.\n  role = \"${aws_iam_role.lambda-role.arn}\"\n\n  # Use Node.js for this lambda function.\n  runtime = \"nodejs8.10\"\n\n  # The source code hash is used by Terraform to detect whether the source code of the lambda function\n  # has changed.  If it changed, Terraform will re-upload the lambda function.\n  source_code_hash = \"${base64sha256(file(\"${data.archive_file.lambda.output_path}\"))}\"\n}\n\n# Set permissions on the lambda function, allowing API Gateway to invoke the function\nresource \"aws_lambda_permission\" \"allow_api_gateway\" {\n  # The action this permission allows is to invoke the function\n  action = \"lambda:InvokeFunction\"\n\n  # The name of the lambda function to attach this permission to\n  function_name = \"${aws_lambda_function.to-roman-numberal-js.arn}\"\n\n  # An optional identifier for the permission statement\n  statement_id = \"AllowExecutionFromApiGateway\"\n\n  # The item that is getting this lambda permission\n  principal = \"apigateway.amazonaws.com\"\n\n  # /*/*/* sets this permission for all stages, methods, and resource paths in API Gateway to the lambda\n  # function. - https://bit.ly/2NbT5V5\n  source_arn = \"${aws_api_gateway_rest_api.roman-numeral-api.execution_arn}/*/*/*\"\n}\n\n# Create an IAM role for the lambda function\nresource \"aws_iam_role\" \"lambda-role\" {\n  name = \"iam-lambda-role\"\n  assume_role_policy = \"${file(\"lambdaRole.json\")}\"\n}\n",
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
                "value":" With AWS Lambda set up, I created an API Gateway REST API.  I defined nested API Gateway resources so that the REST API forms the path ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/roman-numeral/{integer}",
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
                "value":"{integer}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is replaced with whatever number a user of the API wants converted to a roman numeral. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# Declare a new API Gateway REST API\nresource \"aws_api_gateway_rest_api\" \"roman-numeral-api\" {\n  # The name of the REST API\n  name = \"RomanNumeralAPI\"\n\n  # An optional description of the REST API\n  description = \"A Prototype REST API for Converting Integers to Roman Numerals\"\n}\n\n# Create an API Gateway resource, which is a certain path inside the REST API\nresource \"aws_api_gateway_resource\" \"roman-numeral-api-resource\" {\n  # The id of the associated REST API and parent API resource are required\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n  parent_id = \"${aws_api_gateway_rest_api.roman-numeral-api.root_resource_id}\"\n\n  # The last segment of the URL path for this API resource\n  path_part = \"roman-numeral\"\n}\n\nresource \"aws_api_gateway_resource\" \"integer-api-resource\" {\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n  parent_id = \"${aws_api_gateway_resource.roman-numeral-api-resource.id}\"\n\n  path_part = \"{integer}\"\n}\n\n# Provide an HTTP method to a API Gateway resource (REST endpoint)\nresource \"aws_api_gateway_method\" \"integer-to-roman-numeral-method\" {\n  # The ID of the REST API and the resource at which the API is invoked\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n  resource_id = \"${aws_api_gateway_resource.integer-api-resource.id}\"\n\n  # The verb of the HTTP request\n  http_method = \"GET\"\n\n  # Whether any authentication is needed to call this endpoint\n  authorization = \"NONE\"\n}\n",
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
                "value":" Now that both API Gateway and AWS Lambda exist, they are easily integrated together.  The API Gateway URL is returned as an output to easily invoke the finished product of the Terraform script. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"# Integrate API Gateway REST API with a Lambda function\nresource \"aws_api_gateway_integration\" \"lambda-api-integration\" {\n  # The ID of the REST API and the endpoint at which to integrate a Lambda function\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n  resource_id = \"${aws_api_gateway_resource.integer-api-resource.id}\"\n\n  # The HTTP method to integrate with the Lambda function\n  http_method = \"${aws_api_gateway_method.integer-to-roman-numeral-method.http_method}\"\n\n  # AWS is used for Lambda proxy integration when you want to use a Velocity template\n  type = \"AWS\"\n\n  # The URI at which the API is invoked\n  uri = \"${aws_lambda_function.to-roman-numberal-js.invoke_arn}\"\n\n  # Lambda functions can only be invoked via HTTP POST - https://amzn.to/2owMYNh\n  integration_http_method = \"POST\"\n\n  # Configure the Velocity request template for the application/json MIME type\n  request_templates {\n    \"application/json\" = \"${file(\"request.vm\")}\"\n  }\n}\n\n# Create an HTTP method response for the aws lambda integration\nresource \"aws_api_gateway_method_response\" \"lambda-api-method-response\" {\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n  resource_id = \"${aws_api_gateway_resource.integer-api-resource.id}\"\n  http_method = \"${aws_api_gateway_method.integer-to-roman-numeral-method.http_method}\"\n  status_code = \"200\"\n}\n\n# Configure the API Gateway and Lambda functions response\nresource \"aws_api_gateway_integration_response\" \"lambda-api-integration-response\" {\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n  resource_id = \"${aws_api_gateway_resource.integer-api-resource.id}\"\n  http_method = \"${aws_api_gateway_method.integer-to-roman-numeral-method.http_method}\"\n\n  status_code = \"${aws_api_gateway_method_response.lambda-api-method-response.status_code}\"\n\n  # Configure the Velocity response template for the application/json MIME type\n  response_templates {\n    \"application/json\" = \"${file(\"response.vm\")}\"\n  }\n\n  # Remove race condition where the integration response is built before the lambda integration\n  depends_on = [\n    \"aws_api_gateway_integration.lambda-api-integration\"\n  ]\n}\n\n# Create a new API Gateway deployment\nresource \"aws_api_gateway_deployment\" \"roman-numeral-api-dev-deployment\" {\n  rest_api_id = \"${aws_api_gateway_rest_api.roman-numeral-api.id}\"\n\n  # development stage\n  stage_name = \"dev\"\n\n  # Remove race conditions - deployment should always occur after lambda integration\n  depends_on = [\n    \"aws_api_gateway_integration.lambda-api-integration\",\n    \"aws_api_gateway_integration_response.lambda-api-integration-response\"\n  ]\n}\n\n# URL to invoke the API\noutput \"url\" {\n  value = \"${aws_api_gateway_deployment.roman-numeral-api-dev-deployment.invoke_url}\"\n}\n",
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
                "value":" Take note of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"request_templates",
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
                "value":"response_templates",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configuration under ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_api_gateway_integration",
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
                "value":"aws_api_gateway_integration_response",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" respectively.  For  HTTP requests and responses to API Gateway, templates are used to determine what is passed to AWS Lambda functions and returned back to the API invoker. ",
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
                "value":" Both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"request_templates",
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
                "value":"response_templates",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for API Gateway use the Velocity Template Language (which is managed by Apache, the same company that leads development of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-2-2018-groovy-basics-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Groovy",
                        "children":null
                    }
                ]
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
                "value":" First let’s take a look at the HTTP request template.  If you aren't familiar with Velocity templating, don’t worry about the syntax - the logic is very simple. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Velocity"
        },
        "value":"#set($integer = $input.params('integer'))\n\n{\n  #if($integer != \"\")\n    \"integer\": \"$integer\"\n  #end\n}\n",
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
                "value":" The first line takes the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{integer}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" parameter from the URL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/roman-numeral/{integer}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and assigns it to the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The rest of the Velocity template creates a JSON object to pass to the AWS Lambda function.  If ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains a value, its used as a JSON property.  Otherwise, an empty JSON object ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is passed to the lambda function. ",
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
                "value":" The HTTP response template is also simple.  It takes whatever value is returned from the lambda function (represented as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$input.path('$')",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and assigns it to the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$response",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If the response exists, it is returned with the JSON.  Otherwise, the JSON property ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"error",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to return an error message. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Velocity"
        },
        "value":"#set($response = $input.path('$'))\n\n{\n  #if($response != \"\")\n    \"romanNumeral\": \"$response\"\n  #else\n    \"error\": \"failed converting to roman numeral\"\n  #end\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Testing API Gateway"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Testing API Gateway",
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
                "value":" With Terraform all configured, I ran ",
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
                "value":" and tested out the REST API which invokes my AWS Lambda function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl https://xyhzuzr8z2.execute-api.us-east-1.amazonaws.com/dev/roman-numeral/8\n# {\"romanNumeral\": \"VIII\"}\n\ncurl https://xyhzuzr8z2.execute-api.us-east-1.amazonaws.com/dev/roman-numeral/28\n# {\"romanNumeral\": \"XXVIII\"}\n\ncurl https://xyhzuzr8z2.execute-api.us-east-1.amazonaws.com/dev/roman-numeral/2013\n# {\"romanNumeral\": \"MMXIII\"}\n\ncurl https://xyhzuzr8z2.execute-api.us-east-1.amazonaws.com/dev/roman-numeral/ye\n# {\"error\": \"failed converting to roman numeral\"}\n",
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
                "value":" Although I only created one lambda function and REST endpoint, you can imagine a scaled up serverless backend with more lambda functions. ",
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
                "value":" This is only the beginning of my development with serverless architecture.  I am actively using AWS Lambda and API Gateway to handle the subscription feature for this website, and it has worked great so far.  You can view the full code from this discovery post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/devops-prototypes/tree/master/terraform/awslambda"
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

postName = "sep-7-2018-aws-lambda-api-gateway";
postDate = new Date('2018-09-07T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Using AWS Lambda with API Gateway and Terraform",
    description: `With AWS Lambda, we now have a new technique for handling 
        code and infrastructure in our backend.  AWS Lambda brings containerized
        functions and serverless computing to the backend.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "AWS Lambda",
            picture: "https://asset.jarombek.com/logos/awslambda.png",
            color: "awslambda"
        },
        {
            name: "API Gateway",
            picture: "https://asset.jarombek.com/logos/apigateway.svg",
            color: "apigateway"
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
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "HCL"
        },
        {
            name: "Infrastructure as Code"
        },
        {
            name: "REST"
        },
        {
            name: "API"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Danilo Poccia, ",
            endName: " (Shelter Island, NY: Manning, 2017), 6",
            linkName: "AWS Lambda In Action",
            link: "https://www.manning.com/books/aws-lambda-in-action"
        },
        {
            startName: "",
            endName: ", 15",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/aws-lambda-in-action"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});