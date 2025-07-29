/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/15/2021
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
                "value":" Recently I wrote ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-10-2021-kubernetes-tests-go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"tests for my Kubernetes infrastructure in Go",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These tests are split across ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-infrastructure/tree/master/test-k8s"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"multiple",
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
                    "href":"https://github.com/AJarombek/\nsaints-xctf-infrastructure/tree/master/test-k8s"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"different",
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
                    "href":"https://github.com/AJarombek/\nglobal-aws-infrastructure/tree/master/test-k8s"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"repositories",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  However, there is a lot of overlap in testing logic between the test suites in each repository.  In attempts to follow good programming practices and keep my code DRY, I split out the common code between the repositories into reusable functions.  These functions exist in their own Go module, which is imported into the test suites as a dependency. ",
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
                "value":" Go modules are part of Go's dependency management system",
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
                "value":".  They consist of a collection of packages, which are defied in a ",
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
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file.  Go modules can be used as dependencies in other modules, as is the case with my reusable test function module and my Kubernetes test modules. ",
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
                "value":" In this article, I first show how to configure a Go module, using my reusable test function module as an example. Then, I show how the reusable test function module is used in my Kubernetes test modules. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Configuring the Go Module"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Configuring the Go Module",
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
                "value":" Go modules are defined in a ",
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
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, similar to how a npm package is defined in a  ",
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
                        "value":"package.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file.  ",
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
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exists in the root directory of a Go module. ",
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
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files have their own syntax separate from the Go programming language or any other  configuration language",
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/cloud-modules/blob/master/\nkubernetes-test-functions/go.mod"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file for my reusable test function module has the following content: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"module github.com/ajarombek/cloud-modules/kubernetes-test-functions\n\ngo 1.15\n\nrequire (\n\tk8s.io/api v0.17.0\n\tk8s.io/apimachinery v0.17.3-beta.0\n\tk8s.io/client-go v0.17.0\n)\n",
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
                "value":" Go module files consist of multiple directives",
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
                "value":".  In the code above, ",
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
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go",
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
                "value":"require",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are directives. ",
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
                "value":"module",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive defines the path of the module, which is used as an identifier when it is imported into other modules.  The path of my module is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"github.com/ajarombek/cloud-modules/kubernetes-test-functions",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Notice that the module path is similar to the modules  GitHub repository URL - ",
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
                        "value":"github.com/AJarombek/cloud-modules/tree/master/kubernetes-test-functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".   This is no coincidence; the module path needs to match the location where it is hosted",
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
                "value":".  Module paths with hosting locations allow Go to find the module when its path is used.  In my module path, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"github.com",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the hosting domain, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ajarombek",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the GitHub user, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cloud-modules",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the repository name, and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubernetes-test-functions",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the directory within the repository containing the ",
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
                        "value":"go.mod",
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
                "value":"go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive specifies the version of Go that the module is written in.  In my case, that version is ",
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
                        "value":"1.15",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", with the latest version of Go being ",
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
                        "value":"1.17",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  (as of October 2021). ",
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
                "value":"require",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive specifies all the Go module dependencies and their minimum versions.  My Go module has three dependency modules, all of which are Kubernetes modules. ",
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
                "value":" Go modules can have additional directives, but these three are the most common ones you will see.  The last thing needed to configure the Go module is to add tags to the GitHub repository.  These tags specify different versions of the module.  For example, one of my tags is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/cloud-modules/tree/\nkubernetes-test-functions/v0.2.10/kubernetes-test-functions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"kubernetes-test-functions/v0.2.10",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This tag declares the version as ",
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
                        "value":"v0.2.10",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", with ",
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
                        "value":"kubernetes-test-functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specifying the directory containing the Go module. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Using the Go Module"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Using the Go Module",
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
                "value":" With a Go module created and pushed to GitHub with tags specifying different versions, it is time to use the module within another  module.  In a different Go module, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"require",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive can be used to specify ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"github.com/ajarombek/cloud-modules/kubernetes-test-functions",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as a dependency.  The following code snippet is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/master/test-k8s/go.mod"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file from one of my Go modules which tests the Kubernetes infrastructure for ",
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
                        "value":"jarombek.com",
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
        "attributes":null,
        "value":"module github.com/ajarombek/jarombek-com-infrastructure/test-k8s\n\ngo 1.14\n\nrequire (\n\tgithub.com/ajarombek/cloud-modules/kubernetes-test-functions v0.2.10\n\tk8s.io/apimachinery v0.17.3-beta.0\n\tk8s.io/client-go v0.17.0\n)\n",
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
                "value":"require",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive specifies that version ",
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
                        "value":"0.2.10",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (at a minimum) of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"github.com/ajarombek/cloud-modules/kubernetes-test-functions",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module is a dependency of this Go module. ",
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
                "value":" Now we can import and use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"kubernetes-test-functions",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module. Go modules contain one or more packages, which are collections of source code files.  In Go, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"import",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement consists of one or many package paths, which are strings.  Using my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/master/test-k8s/\njarombek_com_test.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jarombek.com Kubernetes tests",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as an example once again, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"github.com/ajarombek/cloud-modules/kubernetes-test-functions",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" package is imported and given an alias with the following code: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"import (\n\tk8sfuncs \"github.com/ajarombek/cloud-modules/kubernetes-test-functions\"\n    ...\n)\n",
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
                "value":"k8sfuncs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" package alias is used to invoke functions from the package, such as the following example: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"func TestJarombekComDeploymentExists(t *testing.T) {\n\tk8sfuncs.DeploymentExists(t, ClientSet, \"jarombek-com\", namespace)\n}\n",
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
                "value":" To learn more about the Kubernetes test functions themselves, you can check out my previous article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-10-2021-kubernetes-tests-go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"writing Kubernetes tests with Go",
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
                "value":" Two takeaways I had while writing Go modules were how easy they are to create and the elegance of the ",
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
                        "value":"go.mod",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax.  I love how simply naming Go modules with their host domain, in my case ",
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
                        "value":"github.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", allows Go to resolve module dependencies.  In my view, a great dependency management system can enhance a programming language and make it more viable for projects.  Go modules make me even more likely to use the Go programming language in the future, as it continues to climb in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/stats"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"programming rankings",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The code shown in this article is found in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/cloud-modules/tree/master/\nkubernetes-test-functions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"cloud-modules",
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
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/\ntree/master/test-k8s"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jarombek-com-infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repositories. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "oct-19-2021-go-module-test-functions";
postDate = new Date('2021-10-19T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating a Go Module for Reusable Test Functions",
    description: `In this article, I first show how to configure a Go module, using my reusable test function module as 
        an example.  Then, I show how this module is used in my Kubernetes test modules.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "Go",
            picture: "https://asset.jarombek.com/logos/go.png",
            color: "go"
        },
        {
            name: "Kubernetes",
            picture: "https://asset.jarombek.com/logos/k8s.png",
            color: "k8s"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Using Go Modules\", ",
            endName: "",
            linkName: "https://go.dev/blog/using-go-modules",
            link: "https://go.dev/blog/using-go-modules"
        },
        {
            startName: "\"Go Modules Reference: go.mod files\", ",
            endName: "",
            linkName: "https://golang.org/ref/mod#go-mod-file",
            link: "https://golang.org/ref/mod#go-mod-file"
        },
        {
            startName: "\"Go Modules Reference: Grammar\", ",
            endName: "",
            linkName: "https://golang.org/ref/mod#go-mod-file-grammar",
            link: "https://golang.org/ref/mod#go-mod-file-grammar"
        },
        {
            startName: "\"Caveats if go package name doesn't start with github.com?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/49839325",
            link: "https://stackoverflow.com/a/49839325"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
