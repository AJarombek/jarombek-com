/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 2/20/2019
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
                "value":" Back in the summer I wrote an article about ",
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
                "value":" on Windows.  In today's article, I'm looking at Bash scripting.  I've used Bash quite a bit recently.  At work I've used Bash scripts to automate the conversion of Subversion repositories to Git. In my personal work I've used Bash scripts to assist setting up AWS infrastructure.  The rest of this article explores basic Bash features and how they compare to Batch. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is a Bash Script"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Bash Script?",
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
                "value":" Back in the summer I wrote an article about ",
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
                "value":" on Windows.  In today's article, I'm looking at Bash scripting.  I've used Bash quite a bit recently.  At work I've used Bash scripts to automate the conversion of Subversion repositories to Git. In my personal work I've used Bash scripts to assist setting up AWS infrastructure.  The rest of this article explores basic Bash features and how they compare to Batch. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Bash Script"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Bash Script?",
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
                "value":" Bash stands for ",
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
                        "value":"B",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"ourne-",
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
                        "value":"A",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"gain ",
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
                        "value":"SH",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"ell, and is derived from the original Bourne shell",
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
                "value":".  The Bourne shell was distributed with Unix operating systems starting in 1979, written by Stephen Bourne in Bell Labs",
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
                "value":".  Bash began replacing the original Bourne shell in 1989",
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
                "value":" Bash is a command line scripting language originally used on Unix-like operating systems.  Nowadays, Bash is found on most major operating systems, including Linux distributions, MacOS, and Windows 10. Bash commands are written from a terminal or collected into a script.  Today I'm exploring the creation of Bash scripts. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Bash File Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Bash File Basics",
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
                "value":" Bash scripts have the file extension ",
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
                        "value":".sh",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A typical bash file begins with a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-26-2018-nodejs-command-line#shebang-line"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"shebang line",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" pointing to the bash interpreter.  Script input arguments are handled with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$<argument-number>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"#!/usr/bin/env bash\n\necho \"The first argument passed: $1\"\n",
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
                "value":" Assigning values to variables is very simple in Bash.  It's equally simple to use these variables in future commands. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Name=\"Andrew Jarombek\"\necho ${Name}\n",
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
                "value":"${...}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax is called a parameter expansion.  Parameter expansions are used to substitute variables or expressions with their values.  Therefore ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"echo ${Name}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is substituted with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"echo \"Andrew Jarombek\"",
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
                "value":" Interestingly Bash variables are untyped (unlike most programming languages I use).  This has interesting consequences which I'll explore in a future post.  Bash variables contain character strings which are used in different ways depending on the context",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Parameter expansions can manipulate existing variables.  The following examples alter the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable.  In this context ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a string. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Name=\"Andrew Jarombek\"\n\n# Extract the characters after index 7\nLastName=${Name:7}\necho ${LastName}  # \"Jarombek\"\n\n# Extract the characters from index 0 to index 6\nFirstName=${Name:0:6}\necho ${FirstName}  # \"Andrew\"\n\n# Replace Jarombek with Jarbek\nAltName=${Name/Jarombek/Jarbek}\necho ${AltName}  # \"Andrew Jarbek\"\n",
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
                "value":" In some contexts, variables can represent integers.  In the following example, an arithmetic substitution is used to create an integer context. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Age=23\nAgeInTenYears=$(($Age + 10))\necho ${AgeInTenYears}  # 33\n",
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
                "value":"$((...))",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax creates an arithmetic substitution",
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
                "value":". There are other ways to create integer contexts for performing arithmetic, including backticks and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"let",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" construct",
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
                "value":" Bash also has an easy construct for creating functions.  This is much improved from the hacky labeling and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"call",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statements in Batch. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Age=23\n\nfunc() {\n  Age=24\n  echo ${Age}\n}\n\n# Prints: 24\nfunc\n",
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
                "value":" One interesting aspect of Bash functions is that variables defined in functions leak into the global scope.  Luckily if this is not what you intend, there are keywords for altering this behavior. The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"local",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword defines a variable scoped to the function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"func2() {\n  Global=\"Global Variable\"\n  local Local=\"Local Variable\"\n\n  # Both global and local print\n  echo \"${Global}, ${Local}\"\n}\n\nfunc2\n\n# Only global prints\necho \"${Global}, ${Local}\"\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Global Variable, Local Variable\nGlobal Variable,\n",
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
                "value":" As you can see, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Local",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not accessible outside the function. ",
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
                "value":" Arrays are also available in Bash.  They are simpler than their Batch equivalents because complicated delayed expansion logic isn't needed.  Bash also provides associative arrays in newer versions. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Create an array and assign values to indices\nTowns=()\nTowns[0]=Greenwich\nTowns[1]=\"New Canaan\"\nTowns[2]=Darien\nTowns[3]=Wilton\nTowns[4]=Ridgefield\n\necho ${Towns[0]}\n\n# Bash also has associative arrays (These only work in Bash Version 4)\ndeclare -A SkiLocations=([sat]=\"Catamount\" [sun]=\"Jiminy Peak\")\necho ${SkiLocations[sat]}\n\n# Create an array of integers\nNumberList=(1 2 3 4 5)\n\n# Get all the items from NumberList\necho ${NumberList[*]}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Greenwich\nCatamount\n1 2 3 4 5\n",
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
                "value":" Bash also has simple ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
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
                "value":"if",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statements: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Accumulate all of the strings in the town list\nfor i in ${NumberList[*]}\ndo\n  AllTowns=\"${AllTowns} ${Towns[$((i - 1))]}\"\ndone\n\necho ${AllTowns}\n\n# Accumulate some of the strings in the town list\nfor i in 2 4\ndo\n  SomeTowns=\"${SomeTowns} ${Towns[$((i - 1))]}\"\ndone\n\necho ${SomeTowns}\n\n# Create a unix timestamp of a date on MacOS\nDateWritten=$(date -j -f \"%F\" 2019-01-28 +\"%s\")\nMonthsEnd=$(date -j -f \"%F\" 2019-01-31 +\"%s\")\n\nif [ ${DateWritten} -lt ${MonthsEnd} ]\nthen\n  echo \"Date is before Jan. 31st, 2019\"\nelse\n  echo \"Date is equal to or after Jan. 31st, 2019\"\nfi\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Greenwich New Canaan Darien Wilton Ridgefield\nNew Canaan Wilton\nDate is before Jan. 31st, 2019\n",
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
                "value":" I really enjoy working with Bash due to its simplicity.  It's commands are short and easy to use, with common utilities such as ",
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
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cat",
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
                "value":"grep",
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
                "attributes":null,
                "value":"head",
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
                "value":"tail",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" being good examples.  I much prefer it over Batch scripting.  You can check out more Bash code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\ntree/master/2019/02-Feb/02-22-bash-scripting"
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

postName = "feb-22-2019-bash-scripting";
postDate = new Date('2019-02-22T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring Bash Scripting",
    description: `This article looks at the basic features of Bash and how it compares to Batch.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
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
            startName: "Arnold Robbins, ",
            endName: ", 2nd ed (Sebastopol, CA: O'Reilly, 2016), 2",
            linkName: "Bash Pocket Reference",
            link: "http://shop.oreilly.com/product/0636920046288.do"
        },
        {
            startName: "\"Bourne shell\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Bourne_shell",
            link: "https://en.wikipedia.org/wiki/Bourne_shell"
        },
        {
            startName: "\"Bash (Unix shell)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
            link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
        },
        {
            startName: "\"Bash Variables Are Untyped\", ",
            endName: "",
            linkName: "https://www.tldp.org/LDP/abs/html/untyped.html",
            link: "https://www.tldp.org/LDP/abs/html/untyped.html"
        },
        {
            startName: "",
            endName: ", 16",
            linkName: "Simpson.",
            link: "http://shop.oreilly.com/product/0636920046288.do"
        },
        {
            startName: "\"Arithmetic Expansion\", ",
            endName: "",
            linkName: "https://www.tldp.org/LDP/abs/html/arithexp.html",
            link: "https://www.tldp.org/LDP/abs/html/arithexp.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});