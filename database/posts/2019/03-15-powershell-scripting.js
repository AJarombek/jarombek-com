/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 3/13/2019
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
                "value":" Over the summer I wrote an article about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-31-2018-batch-scripting"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Batch scripting",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and just a few weeks ago wrote a follow up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nfeb-22-2019-bash-scripting"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Bash scripting",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Today I'm exploring PowerShell scripting on Windows. I've used PowerShell at work recently for automating the deployment of .NET applications.  The rest of this article looks at basic features of PowerShell and how it compares to Bash and Batch. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is a PowerShell Script"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a PowerShell Script?",
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
                "value":" Over the summer I wrote an article about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-31-2018-batch-scripting"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Batch scripting",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and just a few weeks ago wrote a follow up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nfeb-22-2019-bash-scripting"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Bash scripting",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Today I'm exploring PowerShell scripting on Windows. I've used PowerShell at work recently for automating the deployment of .NET applications.  The rest of this article looks at basic features of PowerShell and how it compares to Bash and Batch. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a PowerShell Script"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a PowerShell Script?",
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
                "value":" Powershell is a command line shell and scripting language first released for Windows in 2006",
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
                "value":". It was created as a better way to perform command line scripting on Windows.  Before Powershell, Batch files were used for command line scripting in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cmd.exe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CLI. While Batch was suitable for basic tasks, the scripting language was rough around the edges and lacked modern functionality.  PowerShell aimed to improve upon these shortcomings. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"PowerShell File Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"PowerShell File Basics",
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
                "value":" PowerShell scripts are files with the ",
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
                        "value":".ps1",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" extension.  The PowerShell language is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing#dynamic-&-static-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"   dynamically typed",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and contains basic programming constructs familiar to software developers",
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
                "value":". Powershell types are objects, and type definitions can be explicitly or implicitly declared on variables",
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
                "value":".  This is much different than Bash, which doesn't have types.  In Bash everything is plain text which is interpreted differently depending on the context. ",
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
                "value":" Let's look at a basic example.  PowerShell has very clean syntax for handling script arguments (similar to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-26-2018-nodejs-command-line"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JavaScript command line programs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"). In the script parameter definition, I explicitly declare the type of the single parameter as a string. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"# basics.ps1\n\n# Handle script arguments\nparam (\n  [string]$author = \"Andrew Jarombek\"\n)\n",
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
                "value":" This code declares a single parameter for the ",
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
                        "value":"basics.ps1",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" script.  It creates a new variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$author",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of type string (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[string]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  If no argument is supplied to ",
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
                        "value":"basics.ps1",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the default value ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"Andrew Jarombek\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used. ",
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
                "value":" PowerShell scripts are easily invoked in the PowerShell CLI by writing the path of the script followed by any arguments. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"# No arguments\nbasics.ps1\n\n# Single argument\nbasics.ps1 \"Andy J\"\n",
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
                "value":" Variables are written to stdout with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Write-Host",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command, which is admittedly a bit more verbose than its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"echo",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" bash counterpart.  The verbosity of commands is a common PowerShell gripe from developers accustomed to using Bash.  The following command prints out the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$author",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" parameter. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"Write-Host $author\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Execution Policies"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Execution Policies",
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
                "value":" One complicated aspect of PowerShell is its execution policy.  Execution policies configure requirements that must be met for a PowerShell script to execute",
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
                "value":".  By default, the execution policy for PowerShell on Windows machines is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Restricted",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", meaning no scripts are allowed to execute.  When I first started using PowerShell this was quite confusing since all my scripts failed before executing. ",
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
                "value":" While you can create complex execution policy hierarchies at the process, user, and computer levels (among others), the most basic way to change the execution policy is with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Set-ExecutionPolicy <policy>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command.  For example, the following command changes the execution policy to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RemoteSigned",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which provides some protection against running untrustworthy downloaded scripts. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"Set-ExecutionPolicy RemoteSigned\n",
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
                "value":" You can also check the current execution policy with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Get-ExecutionPolicy",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". All the different execution policies are explained on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.microsoft.com/en-us/\npowershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Microsoft's website",
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
            "title":"Working with Objects"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Working with Objects",
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
                "value":" As I previously mentioned, all types in PowerShell are objects.  Because of this, variables have methods and properties that we can invoke and access.  For example, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"string",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type has methods such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Substring()",
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
                "value":"Replace()",
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
            "language":"PowerShell"
        },
        "value":"[string]$author = \"Andrew Jarombek\"\n\n# Select just the lastname portion of the author string\n$lastname = $author.Substring(7)\nWrite-Host $lastname\n\n# the -match operator checks if author contains \"Jarombek\"\n$lastname2 = $author -match \"Jarombek\"\nWrite-Host $lastname2\n\n# Replace Jarombek with Jarbek\n$altauthor = $author.Replace(\"Jarombek\", \"Jarbek\")\nWrite-Host $altauthor\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Jarombek\nTrue\nAndrew Jarbek\n",
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
                "value":" I also utilized a PowerShell operator ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-match",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to match a regular expression to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$author",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" string. ",
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
                "value":" If you are coming from Batch or Bash, the fact that PowerShell has objects similar to an Object-oriented programming language is surprising.  PowerShell objects are very helpful in creating concise scripts and integrate well with IDEs. ",
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
                "value":" Because PowerShell has object types, performing arithmetic is simpler than Bash (and much simpler than Batch).  PowerShell doesn't need an integer context to perform operations like simple addition. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"$age = 23\n$ageInTenYears = $age + 10\nWrite-Host $ageInTenYears\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"33\n",
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
                "value":"$age",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is implicitly typed in this example.  It can be explicitly typed as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[int]$age = 23",
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
                "value":" PowerShells object based type system really shines when dealing with more complex types.  For example, the following script handles the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DateTime",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"# Get the current date set on the computer\n[DateTime]$CurrentDate = Get-Date -DisplayHint Date\n\n# Demonstrate that there is a lot of functionality availiable on a DateTime object\nWrite-Host \"It is currently Daylight Savings Time: $($CurrentDate.IsDaylightSavingTime())\"\nWrite-Host \"Current Month: $($CurrentDate.Month)\"\nWrite-Host \"Next Month: $($CurrentDate.AddMonths(1).Month)\"\n\n# Prove that $CurrentDate didn't mutate from the previous method invocations\nWrite-Host $CurrentDate\n\n# Build another DateTime object\n[DateTime]$EndOfMonth = (Get-Date -Year 2019 -Month 03 -Day 31)\n\n# Its extremely simple to compare dates\nif ($CurrentDate -GT $EndOfMonth) {\n  Write-Host \"It isn't March Anymore: $CurrentDate\"\n} else {\n  Write-Host \"It's still March: $CurrentDate\"\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"It is currently Daylight Savings Time: True\nCurrent Month: 3\nNext Month: 4\n3/13/2019 11:21:00 AM\nIt's still March: 03/13/2019 11:21:00\n",
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
                "value":" This code snippet also shows off some modern PowerShell features such as string interpolation. ",
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
                "value":" Powershell arrays are also objects that are easy to work with. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"# Basic array syntax @()\n[string[]]$names = @(\"Andy\", \"Tom\", \"Joe\")\n\n# Arrays are objects with methods and properties\nWrite-Host $names.GetUpperBound(0)\n\n# Implicitly typed array of towns in Connecticut\n$towns = @(\"Greenwich\",\"Darien\",\"New Canaan\",\"Wilton\",\"Ridgefield\")\nWrite-Host $towns[0]\n\n# Shortened syntax to create an array of a number range\n$numberArray = @(0..10)\n$subArray = $numberArray[5..9]\n\n# Collect all the towns north of I-95\n$northernTownsArray = $towns[2..4]\n$northernTownsString = \"\"\n\nforeach ($element in $northernTownsArray) {\n  $northernTownsString += $element + \" \"\n}\n\nWrite-Host $northernTownsString\n\n# An alternative way to iterate over an array is to use a pipe and a foreach loop\n# Collect all the towns along the coast\n$coastalTownsArray = $towns[0..1]\n$coastalTownsString = \"\"\n\n$coastalTownsArray | foreach {\n  $coastalTownsString += $_ + \" \"\n}\n\nWrite-Host $coastalTownsString\n\n# PowerShell supports multidimensional arrays\n$multiDimensional = @(\n  @(\"Andrew\", \"Jarombek\"),\n  @(\"Tom\", \"Caul\"),\n  @(\"Joseph\", \"Smoth\")\n)\n\n$tom = $multiDimensional[1][0]\nWrite-Host $tom\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"2\nGreenwich\nNew Canaan Wilton Ridgefield\nGreenwich Darien\nTom\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Writing Functions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Writing Functions",
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
                "value":" PowerShell has pretty clean syntax for writing functions.  By default variables defined in functions are scoped locally to the function and don't leak into the global scope.  This is the opposite of Bash which leaks variables globally by default. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"$age = 23\n\nfunction Test-Scoping() {\n  # $age is scoped locally to the function\n  $age = 24\n  Write-Host $age\n}\n\nTest-Scoping\nWrite-Host $age\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"24\n23\n",
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
                "value":" To create a global variable from a function, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"global:",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable prefix is used.  PowerShell also provides a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"script:",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable prefix which persists the variable across function invocations. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"function Test-Scoping-Variables() {\n  # By default, variables created in functions are local\n  $countLocal = 0\n\n  # By using the $script: prefix, variables are persisted across function calls\n  $script:countScript = 0\n\n  # By using the $global: prefix, variables become global\n  $global:countGlobal = 0\n\n  Write-Host \"Local count: $countLocal, Script count: $script:countScript, Global count: $global:countGlobal\"\n}\n\nTest-Scoping-Variables\nWrite-Host \"Local count: $countLocal, Script count: $countScript, Global count: $countGlobal\"\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Local count: 0, Script count: 0, Global count: 0\nLocal count: , Script count: 0, Global count: 0\n",
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
                "value":" Function parameters and return values are a bit funky in PowerShell.  Parameters are defined similar to script parameters with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"param()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" block.  Return values are captured at the end of a function or when a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"return",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword is encountered.  Therefore a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"return",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword isn't needed for functions to return a value!  They simply declare a function exit point",
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
                "value":" I think the easiest way to demonstrate this behavior is with an example.  The following three functions multiply a string a number of times and return a new string.  They all behave the same way despite the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"return",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword used differently (or missing entirely) in each. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PowerShell"
        },
        "value":"# Output of functions are captured and returned.\n# There is a return keyword, but it just specifies an exit point.\nfunction Mult() {\n  param([string]$str, [int]$count)\n  $str * $count\n}\n\n# Therefore, Mult2 is equivalent to Mult...\nfunction Mult2() {\n  param([string]$str, [int]$count)\n  return $str * $count\n}\n\n# ...and Mult3 is equivalent to Mult2 and Mult\nfunction Mult3() {\n  param([string]$str, [int]$count)\n  $str * $count\n  return\n}\n\n# The result is the same when invoking the three functions\n$meows = Mult -str \"meow\" -count 3\nWrite-Host $meows\n\n$meows2 = Mult2 -str \"meow\" -count 3\nWrite-Host $meows2\n\n$meows3 = Mult3 -str \"meow\" -count 3\nWrite-Host $meows3\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"meowmeowmeow\nmeowmeowmeow\nmeowmeowmeow\n",
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
                "value":" Besides for return values, PowerShell functions behave as you likely expect. ",
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
                "value":" One thing that fascinates me is the different design decisions across programming languages. I really enjoyed comparing the biggest three scripting languages - Bash, PowerShell, and Batch.  I plan to use all three throughout the rest of my career, and will write more discovery posts about them as I learn more.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2019/03-Mar/03-15-powershell-scripting"
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

postName = "mar-15-2019-powershell-scripting";
postDate = new Date('2019-03-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring PowerShell Scripting",
    description: `I’ve used PowerShell at work recently for automating the deployment of .NET 
        applications.  The rest of this article looks at basic features of PowerShell and how it 
        compares to Bash and Batch.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "PowerShell",
            picture: "https://asset.jarombek.com/logos/powershell.png",
            color: "powershell"
        },
        {
            name: "Bash",
            picture: "https://asset.jarombek.com/logos/bash.png",
            color: "bash"
        },
        {
            name: "Batch",
            picture: "https://asset.jarombek.com/logos/batch.png",
            color: "batch"
        },
        {
            name: "Command Line Scripting"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"PowerShell\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/PowerShell",
            link: "https://en.wikipedia.org/wiki/PowerShell"
        },
        {
            startName: "\"PowerShell: Scripting\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/PowerShell#Scripting",
            link: "https://en.wikipedia.org/wiki/PowerShell#Scripting"
        },
        {
            startName: "\"Working with Object Types in PowerShell\", ",
            endName: "",
            linkName: "https://mcpmag.com/articles/2017/06/01/working-with-object-types-in-powershell.aspx",
            link: "https://mcpmag.com/articles/2017/06/01/working-with-object-types-in-powershell.aspx"
        },
        {
            startName: "\"About Execution Policies\", ",
            endName: "",
            linkName: "https://bit.ly/2SfbcwG",
            link: "https://bit.ly/2SfbcwG"
        },
        {
            startName: "\"Function return value in PowerShell\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/10288256",
            link: "https://stackoverflow.com/a/10288256"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});