/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 11/13/2022
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
                "value":" During software development, it's important to test logic and perform static code analysis to ensure programs meet certain standards.  Build tools and CI/CD platforms help developers automate these tasks.  There are many different build tools, such as Make, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Bazel&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Bazel",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":",  and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Please&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Please",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", along with many CI/CD platforms, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Jenkins&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=TravisCI&page=1"
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
                "value":",  and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=GitHub%20Actions&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub Actions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (to name a few). Due to a  wide variety of choices, it can be overwhelming for engineers to pick the best option for their codebase. ",
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
                "value":" Although I've experimented a bit with TravisCI in the past, most of my CI/CD work up until now has been on Jenkins. Outside of language or platform specific build tools (such as CMake or Webpack), I haven't used many language-agnostic build tools in my code up to this point.  While designing my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, which contains Go programming language code samples, I decided to work with a new build tool and CI/CD platform. ",
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
                "value":" For the build tool, I decided to use ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://please.build/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Please Build",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a language agnostic build platform  derived from Google's internal Blaze build tool, which was ported to the open source community as Bazel",
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
                "value":".  For the  CI/CD platform, I decided to use ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/features/actions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub Actions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is built into GitHub.  In this article, I'll discuss the basics of Please Build and GitHub Actions, along with how I integrated both into my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Repository Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Repository Overview",
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
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository consists of many subdirectories containing Go code.  This Go code contains unit tests that I ensure are successful and libraries that I build and compile into machine specific binaries.  For example, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/\ngoroutines"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"goroutines",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" subdirectory contains unit tests, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ngo-programming/blob/v1.1.2/goroutines/basics_test.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"basics_test.go",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", along with libraries, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/goroutines/goroutine_example/goroutine_example.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" goroutine_example.go",
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
                "value":" I use the GoLand IDE by Jetbrains for Go development.  One of the great features of Jetbrains IDEs, GoLand included, are  run configurations.  Run configurations enable an easy way to run or test Go code through the GoLand UI",
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
                "value":". Run configurations can optionally run on a Docker container, and configurations can be saved and committed to a repository in XML files. ",
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
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, run configurations are stored in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/.run"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".run",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory.  These run configurations execute on Docker containers, which are defined in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/base"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"base",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory.  Currently, all my run configurations execute on docker containers derived from a base ",
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
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is specified in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/base/Dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"base/Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", with the following setup. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Dockerfile"
        },
        "value":"FROM golang:1.18.3-alpine3.16\n\nRUN apk add gcc libc-dev linux-headers\n\nRUN curl https://get.please.build > please.sh && \\\n    bash ./please.sh\n\nENV PATH=\"${PATH}:/root/.please/bin\"\n\nSTOPSIGNAL SIGTERM\n",
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
                "value":" Most importantly, the base Dockerfile installs Please Build from the URL ",
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
                        "value":" https://get.please.build",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and appends its installation directory onto the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PATH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" environment variable.  Go is installed and configured in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"golang",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image, which is specified as the base image using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FROM golang:1.18.3-alpine3.16",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command. ",
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
                "value":" Each subdirectory in the repository has its own Dockerfile, using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/\nblob/v1.1.2/base/Dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"base/Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as its base image. Subdirectory Dockerfiles contain commands needed to execute the code within the subdirectory.  For example, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ngo-programming/tree/v1.1.2/goroutines"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"goroutines",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" subdirectory contains the following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/go-programming/blob/v1.1.2/goroutines/Dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Dockerfile"
        },
        "value":"FROM ajarombek/go-alpine-linux-programming:latest\n\nWORKDIR src\nCOPY . .\n\nENTRYPOINT [\"go\", \"test\", \"-v\", \".\"]\n",
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
                "value":" This Dockerfile uses the base image ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ajarombek/go-alpine-linux-programming:latest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://hub.docker.com/repository/docker/ajarombek/go-alpine-linux-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" DockerHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It copies files from my repository onto the containers filesystem and runs the command ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go test -v .",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which executes all the Go tests. ",
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
                "value":" This Dockerfile is also used in a run configuration for the repository.  GoLand run configurations are XML files, and in my repository they specify a docker container to run.  For the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/goroutines"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"goroutines",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" subdirectory, I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/.run/goroutines.run.xml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"goroutines.run.xml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" run configuration which starts a Docker container. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"XML"
        },
        "value":"<component name=\"ProjectRunConfigurationManager\">\n    <configuration default=\"false\" name=\"goroutines\" type=\"docker-deploy\" factoryName=\"dockerfile\" server-name=\"Docker\">\n        <deployment type=\"dockerfile\">\n            <settings>\n                <option name=\"containerName\" value=\"go_programming_goroutines\" />\n                <option name=\"sourceFilePath\" value=\"goroutines/Dockerfile\" />\n            </settings>\n        </deployment>\n        <method v=\"2\" />\n    </configuration>\n</component>\n",
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
                "value":" This run configuration specifies the creation of a Docker image named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_programming_goroutines",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" created using the Dockerfile ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"goroutines/Dockerfile",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Putting all the pieces together, the following image shows what it looks like to trigger the run configuration and view its console log. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-15-22-goland-run-config.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" Run configurations are great for manually executing tests or running code.  However, for CI/CD purposes, operations like executing tests, compiling code, and packaging binaries should be automated.  This is where Please Build and GitHub Actions can help. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Please Build Setup"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Please Build Setup",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Please Build"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Please Build is a language agnostic build system derived from Bazel and Blaze, which are open source and proprietary build systems originating at Google.  Like Bazel and Blaze, Please Build uses the Starlark programming language for its build files.  Build files, commonly named ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", contain build targets, which are units of deployable code",
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
                "value":".  Build targets are written using rules, which appear as Python functions.  Rules are configurable using arguments and they determine what occurs when a build target is run.  Builds are run in isolation from application source code; they are given a separate ",
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
                        "value":"plz-out",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory to run it.  Build results are also cached, which makes subsequent builds on unchanged code very fast. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Starlark Programming Language"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Starlark is a programming language that is syntactically similar to and inspired by Python",
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
                "value":".  Starlark is used in ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files for the Blaze and Bazel build tools, along with their derivatives such as Please Build.  Starlark has different language rules than Python despite its syntactic similarities;  Starlark is neither a superset or subset of Python. ",
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
                "value":" When configuring Please Build in a repository, a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz init",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command is run from the root of the codebase.  This command creates a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/\nv1.1.2/.plzconfig"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".plzconfig",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file in the repository, which configures the execution of Please commands",
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
                "value":".  This is how ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/.plzconfig"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" .plzconfig",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" appears in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
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
        "el":"codesnippet",
        "attributes":{
            "language":"TOML"
        },
        "value":"[please]\nversion = 16.22.1\n\n[build]\nPassEnv = PATH\npath = $PATH:/usr/local/bin:/usr/bin:/bin\n\n[buildenv]\ntest-env = plz\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/.plzconfig"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".plzconfig",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" lists out different build options to use in the repository",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"version = 16.22.1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sets the version of Please Build to use while performing builds.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PassEnv = PATH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PATH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" environment variable and makes it accessible while Please Build rules are executed.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"path = $PATH:/usr/local/bin:/usr/bin:/bin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  takes this ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PATH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" environment variable and appends  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/usr/local/bin:/usr/bin:/bin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to it.  Finally, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"test-env = plz",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a new environment variable named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TEST_ENV",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and assigns it a value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz",
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
                "value":"TEST_ENV",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is accessible while running Please Build commands. These are just a few of the configuration options available with Please Build; a full list of options are available in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://please.build/config.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Please Build documentation",
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
                "value":" As previously mentioned, Please Build consists of ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files written in Starlark.  In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, the root directory contains a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/BUILD"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file with the following contents. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Starlark"
        },
        "value":"package(default_visibility = [\"PUBLIC\"])\n\ngo_toolchain(\n    name = \"go_download\",\n    version = \"1.18\",\n)\n\ngo_module(\n    name = \"testify\",\n    module = \"github.com/stretchr/testify\",\n    install = [\"...\"],\n    version = \"v1.7.0\",\n    deps = [\n        \":go_difflib\",\n        \":go_yaml\",\n        \":go_spew\",\n        \":objx\",\n    ],\n)\n\ngo_module(\n    name = \"go_difflib\",\n    module = \"github.com/pmezard/go-difflib\",\n    install = [\"...\"],\n    version = \"v1.0.0\",\n    deps = [\":go_download\"],\n)\n\ngo_module(\n    name = \"go_yaml\",\n    module = \"gopkg.in/yaml.v3\",\n    install = [\"...\"],\n    version = \"v3.0.0-20200313102051-9f266ea9e77c\",\n    deps = [\":go_download\"],\n)\n\ngo_module(\n    name = \"go_spew\",\n    module = \"github.com/davecgh/go-spew\",\n    install = [\"...\"],\n    version = \"v1.1.0\",\n    deps = [\":go_download\"],\n)\n\ngo_module(\n    name = \"objx\",\n    module = \"github.com/stretchr/objx\",\n    install = [\"...\"],\n    version = \"v0.1.0\",\n    deps = [\":go_download\"],\n)\n",
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
                "value":" On the first line of code, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"package()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a Please Build built-in function, sets configuration details for all the ensuing rules",
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
                "value":".  In my code, it sets the visibility of all the rules in the file to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PUBLIC",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which makes them accessible to all the other rules in the repository",
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
                "value":" The next rule, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_toolchain()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", downloads Go for other ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefixed rules to use.  Based on my configurations, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_toolchain()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" downloads version 1.18 of Go.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_toolchain()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a unique name for the rule that can be used as a dependency for other rules. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is considered a common argument, and exists on every rule in Please Build",
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
                "value":" The first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_module()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule, named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"testify",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", downloads and installs a Go module that is used by other ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefixed rules.  This Go module contains assertion functions which I use in unit tests.   The full path of the module is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"github.com/stretchr/testify",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the version I install is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"v1.7.0",
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
                "value":"testify",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" depends on four Go modules itself, which are defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"deps",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument.  Each dependency has its own ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_module()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule in the ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. The colon (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") before each dependency name informs Please Build that the dependency is another rule declared in the same package. ",
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
                "value":" With that in mind, notice how the rules in this ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file define a dependency tree. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"testify",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is dependent on four dependencies, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_difflib",
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
                "value":"go_yaml",
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
                "value":"go_spew",
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
                "value":"objx",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which in turn are all dependent on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_download",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This is often the case in Please Build, where rules build on each other to create a functional build system for an application. ",
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
                "value":" Rules in the root ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/BUILD"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file create a foundation for other rules in the repository.  Let's take a look at another ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/unit-testing/BUILD"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"unit-testing/BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines rules that run unit tests for a Go program.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/\nunit-testing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"unit-testing",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory contains code samples I created based on my learnings from chapter 11 of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.gopl.io/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"The Go Programming Language",
                        "children":null
                    }
                ]
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file contains two rules. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Starlark"
        },
        "value":"go_library(\n    name = \"license_plates\",\n    srcs = [\"license_plates.go\"],\n    deps = [\"//:go_download\"],\n    labels = [\"unit_testing\"],\n)\n\ngo_test(\n    name = \"test\",\n    srcs = [\"license_plates_test.go\"],\n    deps = [\":license_plates\"],\n    labels = [\n        \"unit_testing\",\n        \"test\",\n    ],\n)\n",
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
                "value":" First, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_library()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a rule, named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plates",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", that creates a Go library usable by other Go programs. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plates",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains a single Go file ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plates.go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and is dependent on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"//:go_download",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which downloads and installs Go. The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"//:",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefix to the dependency tells Please Build that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_download",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a rule located in the root of the repository. ",
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
                "value":" Second, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_test()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a rule, named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", to run Go tests.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains a single Go file ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plates_test.go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which implements multiple unit test cases, and is dependent on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plates",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule. ",
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
                "value":"test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is executed from the command line to verify that all Go tests are successful. Running a test rule is done with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command; in my scenario, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz test //unit-testing:test -vvv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs my ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"//unit-testing:test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specifies the path and name of the rule to execute, and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-vvv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sets the verbosity level of the console output logs.  Running this command in my repository generates an output similar to the following log. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"...\n//unit-testing:test 5 tests run in 121ms; 5 passed\n    TestValidCountryCode    PASS  0s\n    TestInvalidCountryCode  PASS  0s\n    TestCollected           PASS  0s\n    Collected               PASS  0s\n    CountryCode             PASS  0s\n1 test target and 5 tests run; 5 passed.\nTotal time: 15.22s real, 120ms compute.\n",
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
                "value":" Let's look at a similar example in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/reflection"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" reflection",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory, which analyzes how to use reflection to gain runtime information about types in Go programs. ",
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
                        "value":"reflection",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains zero library files and two unit test files, with the following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/reflection/BUILD"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configuration. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Starlark"
        },
        "value":"filegroup(\n    name = \"test_files\",\n    srcs = glob([\"*.go\"]),\n)\n\ngo_test(\n    name = \"test\",\n    srcs = [\":test_files\"],\n    deps = [\n        \"//:go_download\",\n        \"//:testify\",\n    ],\n    labels = [\n        \"reflection\",\n        \"test\"\n    ],\n)\n",
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
                "value":" Instead of explicitly writing names of Go files in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"srcs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_test()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule, I use a separate ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"filegroup()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule to collect all the files matching the glob pattern ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*.go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In the end, running these tests is the same as it was in the ",
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
                        "value":"unit-testing",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory, with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz test //reflection:test -vvv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command. ",
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
                "value":" Let's look at one more example in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/goroutines/\nchannel_example"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"goroutines/channel_example",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory.  ",
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
                        "value":"channel_example",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains a single Go application file, and has the following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.2/goroutines/\nchannel_example/BUILD"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configuration. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Starlark"
        },
        "value":"go_binary(\n    name = \"binary\",\n    srcs = [\"channel_example.go\"],\n    out = \"channel_example\",\n    deps = [\"//:go_download\"],\n    labels = [\n        \"goroutines\",\n        \"binary\",\n    ],\n)\n",
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
                "value":"go_binary()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule creates an executable binary file from compiled Go code.  After Go is installed from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"//:go_download",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" dependency rule, a single ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"channel_example.go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file is compiled.  Running a binary rule is done with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz build",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command; in my scenario, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz build //goroutines/channel_example:binary -vvv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"binary",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule.  Running this command in my repository generates an output similar to the following log. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"...\nBuild finished; total time 12.67s, incrementality 66.7%. Outputs:\n//goroutines/channel_example:binary:\n  plz-out/bin/goroutines/channel_example/channel_example\n",
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
                "value":"plz build",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command created a binary file within a ",
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
                        "value":"plz-out/bin ",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory.  From a command prompt (in my case running Bash), this binary file can be executed. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"./plz-out/bin/goroutines/channel_example/channel_example\n",
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
                "value":" Every subdirectory in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository contains a ",
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
                        "value":"BUILD",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file with additional rules in case you want to explore more.  One last thing to mention is that re-running any Please Build command without altering the source code results in a faster build.  This is because stages of builds are cached, similar to layers on images being cached in a Dockerfile build.  For example, the previous ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz build",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz build //goroutines/channel_example:binary -vvv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", took 12.67 seconds the first time it ran on my machine. Running it a second time took just 140 milliseconds. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"...\nBuild finished; total time 140ms, incrementality 100.0%. Outputs:\n//goroutines/channel_example:binary:\n  plz-out/bin/goroutines/channel_example/channel_example\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Enabling GitHub Actions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Enabling GitHub Actions",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"GitHub Actions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" GitHub Actions is a CI/CD platform integrated with the GitHub version control hosting service.  GitHub Actions allows engineers to create workflows that run on virtual machines, containers, or self-hosted infrastructure",
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
                "value":". Workflows, written in YAML, contain one or many jobs that run on a schedule or respond to events within a repository, such as code commits or pull request creation. ",
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
                "value":" GitHub Actions workflows exist in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2/.github/workflows"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" .github/workflows",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory for GitHub repositories.  In my repository, this directory contains two YAML files, each corresponding to a workflow.  Let's look at the first workflow, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/\nblob/v1.1.2/.github/workflows/go_tests.yml"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go_tests.yml",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which runs all the Go tests in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
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
        "el":"codesnippet",
        "attributes":{
            "language":"YAML"
        },
        "value":"name: Go Tests\n\non:\n  push:\n    branches: [\"main\", \"feature/*\"]\n  pull_request:\n    branches: [\"main\"]\n\n  schedule:\n    - cron: \"0 5 * * 1,3,5\"\n\n  workflow_dispatch:\n\njobs:\n  go_tests:\n    runs-on: ubuntu-latest\n    container: ajarombek/go-alpine-linux-programming:latest\n    steps:\n      - run: echo \"Job running on a ${{ runner.os }} server\"\n\n      - name: Check out repository code\n        uses: actions/checkout@v3\n\n      - run: echo \"Checked out branch '${{ github.ref }}' of the ${{ github.repository }} repository\"\n\n      - name: Files installed from repository\n        run: ls -ltra\n\n      - name: Run Go tests using Please Build\n        run: plz test //... -i test -vvv\n",
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
                "value":" This YAML document creates a workflow named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Go Tests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"on",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" dictionary configures events that trigger the workflow along with  an additional cron schedule for the workflow to run on.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"on",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains four keys, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"push",
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
                "value":"pull_request",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":",  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"schedule",
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
                "value":"workflow_dispatch",
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
                "value":"push",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" triggers the workflow anytime code is pushed to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"main",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" branch or any branch matching the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"feature/*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" pattern.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pull_request",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" triggers the workflow anytime a pull request is made that merges code into the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"main",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  branch.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"schedule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sets a cron schedule for the workflow to run on, in my case 5:00 AM every Monday, Wednesday, and Friday.  Finally, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"workflow_dispatch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" enables manual triggers of the pipeline from the GitHub UI or API",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jobs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" dictionary configures one or many jobs within a workflow.  My workflow contains a single job named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_tests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"runs-on",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" key-value pair determines the machine and operating system to run on, in my case an Ubuntu distribution of Linux (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ubuntu-latest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  On top of Ubuntu, my job runs in a Docker container, with the image name and tag specified under the  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"container",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" key-value pair.  The value under ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"container",
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
                "value":"ajarombek/go-alpine-linux-programming:latest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is a Docker image stored on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://hub.docker.com/\nrepository/docker/ajarombek/go-alpine-linux-programming"
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
                "value":" and defined in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/go-programming/blob/v1.1.2/base/Dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in my repository. ",
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
                "value":"steps",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a list of steps within a job.  Steps with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"run",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" key execute its corresponding value from the shell as a command line program",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"12",
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
                "value":"name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keys give steps a name that are displayed in the GitHub UI and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"uses",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keys run actions for a step",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"13",
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
                "value":" Actions are a unit of execution within GitHub Actions.  They are programs, often written in JavaScript, that perform commonly repeated tasks",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"14",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In my case, I use a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"actions/checkout@v3",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" action, which is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/actions/checkout"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"maintained by GitHub",
                        "children":null
                    }
                ]
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
                "value":"actions/checkout@v3",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to checkout a GitHub repository. ",
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
                "value":" As a whole, my ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Go Tests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" workflow runs on a custom Docker container, performs a checkout of my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, and runs a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz test //... -i test -vvv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command, which executes all Go tests in my code.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-i test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" flag in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plz test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command runs every Please Build rule that has a label of value ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"test",
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
                "value":" Results of GitHub actions are viewable in repositories on GitHub.  One way to view actions is to click on the \"Actions\" tab at the top of a repository page. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-15-22-actions-tab.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" In the list of workflow results under the \"Actions\" tab, clicking on one of them navigates to the following page, which  gives an overview of the workflow run and the results of individual jobs. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-15-22-workflow-result.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" My \"Go Tests\" workflow contains a single ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go_tests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job, and clicking on it displays the execution logs. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-15-22-job-result.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-15-22-job-result-logs.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" GitHub Actions send an email when workflows fail, which is a great way to stay alerted on the status of a codebase.  I only demonstrated the basics of GitHub Actions in this article, and there is a lot more for me to learn, but GitHub Actions is a very promising CI/CD framework that I intend to use extensively in the future. ",
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
                "value":" Combining the \"Please Build\" build system and GitHub Actions CI/CD platform was a great way to test Go code in both my development environment and on GitHub's hosted platform.  I plan to expand my usage of both technologies into other projects and learn more advanced features.  All the code discussed in this article is available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository on GitHub. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "nov-15-2022-go-please-github-actions";
postDate = new Date('2022-11-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Building and Testing Go Code using Please Build and GitHub Actions",
    description: `In this article, I’ll discuss the basics of Please Build and GitHub Actions, along with how I 
        integrated both into my go-programming repository.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Please Build",
            picture: "https://asset.jarombek.com/logos/please-build.png",
            color: "please-build"
        },
        {
            name: "GitHub Actions",
            picture: "https://asset.jarombek.com/logos/github-actions.png",
            color: "github-actions"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "GoLand",
            picture: "https://asset.jarombek.com/logos/goland.png",
            color: "goland"
        },
        {
            name: "Bazel",
            picture: "https://asset.jarombek.com/logos/bazel.svg",
            color: "bazel"
        },
        {
            name: "Starlark"
        },
        {
            name: "YAML",
            picture: "https://asset.jarombek.com/logos/yaml.png",
            color: "yaml"
        },
        {
            name: "Go",
            picture: "https://asset.jarombek.com/logos/go.png",
            color: "go"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Bazel (software)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Bazel_(software)",
            link: "https://en.wikipedia.org/wiki/Bazel_(software)"
        },
        {
            startName: "\"Run/debug configurations\", ",
            endName: "",
            linkName: "https://www.jetbrains.com/help/go/run-debug-configuration.html",
            link: "https://www.jetbrains.com/help/go/run-debug-configuration.html"
        },
        {
            startName: "\"Please basics\", ",
            endName: "",
            linkName: "https://please.build/basics.html",
            link: "https://please.build/basics.html"
        },
        {
            startName: "\"Starlark Language\", ",
            endName: "",
            linkName: "https://bazel.build/rules/language",
            link: "https://bazel.build/rules/language"
        },
        {
            startName: "\"Please quickstart\", ",
            endName: "",
            linkName: "https://please.build/quickstart.html",
            link: "https://please.build/quickstart.html"
        },
        {
            startName: "\"Please config file reference\", ",
            endName: "",
            linkName: "https://please.build/config.html",
            link: "https://please.build/config.html"
        },
        {
            startName: "\"The Lexicon of Please: package\", ",
            endName: "",
            linkName: "https://please.build/lexicon.html#package",
            link: "https://please.build/lexicon.html#package"
        },
        {
            startName: "\"Visibility\", ",
            endName: "",
            linkName: "https://bazel.build/concepts/visibility",
            link: "https://bazel.build/concepts/visibility"
        },
        {
            startName: "\"Rules: Attributes\", ",
            endName: "",
            linkName: "https://bazel.build/extending/rules#attributes",
            link: "https://bazel.build/extending/rules#attributes"
        },
        {
            startName: "\"Understanding GitHub Actions\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",
            link: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"
        },
        {
            startName: "\"Events that trigger workflows: pull_request\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request",
            link: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request"
        },
        {
            startName: "\"Workflow syntax for GitHub Actions: jobs.job_id.steps[*].run\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun",
            link: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun"
        },
        {
            startName: "\"Workflow syntax for GitHub Actions: jobs.job_id.steps[*].uses\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses",
            link: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses"
        },
        {
            startName: "\"Understanding GitHub Actions: Actions\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#actions",
            link: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#actions"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
