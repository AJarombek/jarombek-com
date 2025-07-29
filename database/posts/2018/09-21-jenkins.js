/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/18/2018
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
                "value":" So far in my DevOps journey I've explored ",
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
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and how to use it to deploy ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/sep-7-2018-aws-lambda-api-gateway"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Lambda Infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In this post I explore Jenkins, which is a Continuous Integration and Continuous Delivery (CI/CD) tool used for automating tasks. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Continuous Integration and Continuous Delivery"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Continuous Integration and Continuous Delivery",
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
                "value":" Jenkins is not my first glance into the world on Continuous Integration (CI).  That came with my post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-9-2018-travisci"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"TravisCI",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is a CI tool that hosts tasks on a server (free of charge!).  I still use TravisCI to help unit test my code every time I push to GitHub. ",
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
                "value":" So far in my DevOps journey I've explored ",
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
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and how to use it to deploy ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/sep-7-2018-aws-lambda-api-gateway"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Lambda Infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In this post I explore Jenkins, which is a Continuous Integration and Continuous Delivery (CI/CD) tool used for automating tasks. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Continuous Integration and Continuous Delivery"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Continuous Integration and Continuous Delivery",
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
                "value":" Jenkins is not my first glance into the world on Continuous Integration (CI).  That came with my post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-9-2018-travisci"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"TravisCI",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is a CI tool that hosts tasks on a server (free of charge!).  I still use TravisCI to help unit test my code every time I push to GitHub. ",
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
                "value":" Jenkins differs from TravisCI in a few ways.  To work with Jenkins you must set up a server for it to run on.  Because of this, getting started with Jenkins is a longer process, and the learning curve is greater.  However, once you get over the initial learning curve of Jenkins, you'll find a richer ecosystem that allows for extensive customization.  This is due to the emergence of user defined plugins which allow Jenkins tasks to be manipulated in ways outside of the core Jenkins vision. ",
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
                "value":" While TravisCI uses YAML for task definitions, Jenkins uses a UI and Groovy scripts. Having the expressiveness of a full programming language for Jenkins tasks makes development fun! ",
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
                "value":" Despite their differences, Jenkins and TravisCI are both CI/CD tools that are commonly used to automate application deployments. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Continuous Integration"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The practice of merging code in a development environment into a main repository on a regular basis. Code is merged every time a significant change is made.  When a code merge occurs, tests run to make sure no parts of the application are broken.  Continuous Integration (CI) helps developers detect bugs early, reducing development time and safeguarding application deployments. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Continuous Delivery"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The goal of short development cycles and configuring applications to be built, tested, and released at any time",
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
                "value":".  Continuous Delivery (CD) is possible through a deployment pipeline.  There are many CD tools which allow for easy creation of pipelines, such as Jenkins and TravisCI. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Jenkins Jobs and the DSL Plugin"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Jenkins Jobs and the DSL Plugin",
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
                "value":" Automated tasks are called \"jobs\" in Jenkins.  There are a number of different job types in Jenkins, the most popular being the Pipeline Job.  This job type creates CD pipelines using a Groovy script",
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
                "value":".  Jenkins created its own Groovy DSL for specifying pipeline steps, although the full scope of the Groovy language can be used. ",
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
                "value":" Typically, Jenkins jobs are created in the web GUI for the Jenkins server.  However, as I previously mentioned, Jenkins has an extensive library of plugins that manipulate jobs and change the way we work with Jenkins.  One of these plugins, the Jenkins Job DSL Plugin, specifies a DSL for creating Jenkins jobs! ",
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
                "value":" If you read my discovery post on ",
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
                        "value":"Terraform ",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", you'll remember my dislike for GUI configuration.  I'd much rather write code to configure my infrastructure/CD pipelines.  Writing code is fun and allows the configuration to be checked into version control.  With code, replicating infrastructure or a Jenkins job is as simple as executing a script! ",
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
                "value":" The rest of this discovery post will follow the basic setup for a \"Hello World\" Jenkins job using the DSL Plugin. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Jenkins Hello World Example"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Jenkins \"Hello World\" Example",
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
                "value":" There are a number of different ways to install Jenkins (such as using a Docker container), however I usually use the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jenkins.io/download/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Generic Java Package",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" approach.  With a Jenkins .war file on hand, starting a Jenkins server is as simple as executing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java -jar jenkins.war",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the terminal. ",
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
                "value":" The Jenkins Job DSL Plugin does not install by default, so it must be added under Manage Jenkins > Manage Plugins.  Once the DSL Plugin is added, seed jobs can be created that consume Jenkins Job DSL Scripts",
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
                "value":".  A seed job is the only job that needs to be created using the traditional Jenkins web interface. ",
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
                "value":" The DSL Plugin seed job is a Freestyle Jenkins job, which is the legacy job type used before Pipeline Jobs were introduced in Jenkins 2",
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
                "value":".  Freestyle Jobs don't use Groovy code to specify their execution, instead relying on a web interface configuration.  However, with the Job DSL Plugin, we can drop Groovy code into a text area in the web config.  The steps to create a seed job are specified in detail on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/jenkinsci/job-dsl-plugin/wiki/Tutorial-\n--Using-the-Jenkins-Job-DSL"
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
                "value":".  Here is the Groovy code used in the seed job: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"// 'job' closure creates a new freestyle job.\n// This type of Job is usually configured in the Jenkins UI,\n// however with the DSL Plugin all configuration is in a Groovy script.\njob(\"Seed_Job\") {\n\n  // Parameters for users of the Jenkins job to pass in\n  parameters {\n    // String parameters are simply single line text inputs.  The arguments of stringParam() are as follows:\n    // (1) -> the name of the parameter that can be used later in the script as a variable.\n    // (2) -> the default value of the parameter.  Defaults to null.\n    // (3) -> the description of the parameter which will be displayed in Jenkins.\n    stringParam(\"job_dsl_repo\", \"\", \"Job DSL Repo\")\n    stringParam(\"job_dsl_branch\", \"\", \"Job DSL Branch\")\n    stringParam(\"job_dsl_path\", \"\", \"Location of Job DSL Groovy Script\")\n  }\n\n  // SCM (Source Control Management) allows the Jenkins pipeline to use different version control systems\n  scm {\n    // In my case, I use Git\n    git {\n      // From the repository specified in one of the Jenkins job parameters, checkout from a certain branch\n      branch(\"\\$job_dsl_branch\")\n      remote {\n        name(\"origin\")\n        url(\"\\$job_dsl_repo\")\n      }\n    }\n  }\n\n  // Add build steps to the freestyle job.\n  steps {\n\n    // Add a Job DSL Plugin step to the freestyle job.  This step runs a Groovy script to build Jenkins jobs.\n    dsl {\n      // Read the Groovy script to build Jenkins job from the Jenkins workspace\n      external(\"\\$job_dsl_path\")\n    }\n  }\n}\n",
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
                "value":" The Jenkins Job DSL Plugin has some incredible ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jenkinsci.github.io/job-dsl-plugin/#"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on the Groovy DSL for creating jobs, but I did my best to inline document what was happening above.  This script creates a second freestyle job called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Seed_Job",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which takes in three parameters.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Seed_Job",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates new jobs by executing a Job DSL script in a Git repository. ",
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
                "value":" After clicking “Build Now” in the seed job, I can see two jobs listed on the Jenkins server: ",
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
                    "src":"https://asset.jarombek.com/posts/9-21-18-jenkins01.png"
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
                "value":" With Seed_Job all set, I created a new parameterized build with the location of one of my GitHub repositories and the path to a Job DSL script. ",
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
                    "src":"https://asset.jarombek.com/posts/9-21-18-jenkins02.png"
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
                "value":" Based of the parameters, Seed_Job will checkout the devops-prototypes repository from the master branch and find the file jenkins/basic-dsl-plugin/basicJob.groovy.  This is what that file looks like: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"// 'pipelineJob' creates a new pipeline Job\n// which uses a Groovy script to execute\npipelineJob(\"Hello_World\") {\n\n  // Define the pipeline script which is located in Git\n  definition {\n    cpsScm {\n      scm {\n        git {\n          branch(\"master\")\n          remote {\n            name(\"origin\")\n            url(\"https://github.com/AJarombek/devops-prototypes.git\")\n          }\n        }\n      }\n      // The path within source control to the pipeline jobs Jenkins file\n      scriptPath(\"jenkins/basic-dsl-plugin/Jenkinsfile.groovy\")\n    }\n  }\n}\n",
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
                "value":" This Groovy script creates a Pipeline Job called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Hello_World",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The script finds a Jenkinsfile in the devops-prototypes repository on the master branch. This Jenkinsfile is what will execute every time the Hello_World job runs. ",
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
                "value":" After clicking \"Build\", I looked at the console output from Seed_Job and saw that the new Hello_World pipeline job was created. ",
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
                    "src":"https://asset.jarombek.com/posts/9-21-18-jenkins03.png"
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
                "value":" Now I see three jobs listed on the Jenkins server: ",
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
                    "src":"https://asset.jarombek.com/posts/9-21-18-jenkins04.png"
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
                "value":" Running the Hello_World job executes the following Jenkinsfile: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"node(\"master\") {\n  stage(\"Execute Bash Script\") {\n\n    // Log out the file structure of the jenkins job workspace\n    sh \"\"\"\n      pwd\n      ls -la\n      ls -la ../\n      ls -la ../Hello_World/\n      ls -la ../Hello_World@script/\n      ls -la ../Hello_World@tmp/\n    \"\"\"\n\n    // Give Jenkins access to a bash script and then execute it\n    sh \"\"\"\n      chmod +x ../Hello_World@script/jenkins/basic-dsl-plugin/script.sh\n      ../Hello_World@script/jenkins/basic-dsl-plugin/script.sh\n    \"\"\"\n  }\n}\n",
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
                "value":" Jenkins pipeline scripts are written in one of two styles - scripted or declarative.  The Jenkinsfile script for Hello_World follows the scripted syntax, which is written in the imperative paradigm",
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
                "value":". I won't give a full comparison between the two styles, but I picked the scripted style due to its enhanced customization and flexibility",
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
                "value":".  However, for simple pipelines like this either method will suffice. ",
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
                "value":" The pipeline code starts by specifying a node to run the job on with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"node(\"master\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A node is a system that can run a Jenkins job, and the master node is the default system for the Jenkins server",
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
                "value":".  Usually jobs are supposed to run on nodes other than master, but for a simple prototype its okay. ",
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
                "value":" A stage specifies a logical grouping of steps in a pipeline",
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
                "value":".  I specified one stage for my pipeline - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stage(\"Execute Bash Script\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Each stage can have multiple steps, with each step being a command that executes.  My stage has two steps, both of which execute commands in Bash.  The first step looks at all the files accessible to the Jenkins pipeline, and the second step executes a simple script.sh file: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"#!/usr/bin/env bash\n\necho \"Hello from Jenkins Pipeline\"\ndate\n",
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
                "value":" Executing this pipeline produces the following output: ",
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
                    "src":"https://asset.jarombek.com/posts/9-21-18-jenkins05.png"
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
                "value":" In this demo I used Seed_Job to generated a simple “Hello World” example.  However, it can also create jobs of greater complexity. ",
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
                "value":" The jobs I created don't show the power of using Jenkins for Continuous Integration and Continuous Delivery.  However, these seed jobs are building blocks to create more complex jobs.  I will save my adventure into complex Jenkins pipelines for another discovery post.  All the code for this post is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/tree/master/jenkins/basic-dsl-plugin"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" GitHub",
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

postName = "sep-21-2018-jenkins";
postDate = new Date('2018-09-21T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring Jenkins and the Job DSL Plugin",
    description: `In this post I explore Jenkins, which is a Continuous Integration and Continuous 
        Delivery (CI/CD) tool used for automating tasks.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Jenkins",
            picture: "https://asset.jarombek.com/logos/jenkins.png",
            color: "jenkins"
        },
        {
            name: "DevOps"
        },
        {
            name: "Continuous Integration"
        },
        {
            name: "Continuous Deployment"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Continuous delivery\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Continuous_delivery",
            link: "https://en.wikipedia.org/wiki/Continuous_delivery"
        },
        {
            startName: "\"Pipeline\", ",
            endName: "",
            linkName: "https://jenkins.io/doc/book/pipeline/",
            link: "https://jenkins.io/doc/book/pipeline/"
        },
        {
            startName: "\"Tutorial Using the Jenkins Job DSL\", ",
            endName: "",
            linkName: "https://goo.gl/k1uFVr",
            link: "https://goo.gl/k1uFVr"
        },
        {
            startName: "Brent Laster, ",
            endName: " (Sebastopol, CA: O'Reilly, 2018), 7-9",
            linkName: "Jenkins 2: Up & Running",
            link: "http://shop.oreilly.com/product/0636920064602.do"
        },
        {
            startName: "",
            endName: ", 24",
            linkName: "Ibid.",
            link: "http://shop.oreilly.com/product/0636920064602.do"
        },
        {
            startName: "",
            endName: ", 25-26",
            linkName: "Ibid.",
            link: "http://shop.oreilly.com/product/0636920064602.do"
        },
        {
            startName: "",
            endName: ", 27",
            linkName: "Ibid.",
            link: "http://shop.oreilly.com/product/0636920064602.do"
        },
        {
            startName: "",
            endName: ", 34",
            linkName: "Ibid.",
            link: "http://shop.oreilly.com/product/0636920064602.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});