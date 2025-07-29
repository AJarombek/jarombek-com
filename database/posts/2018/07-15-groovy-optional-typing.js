/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/15/2018
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
                "value":" While reading a book on Groovy recently I came across two different definitions that apply to the languages type system.  The first states that Groovy is an optionally typed language. Optional typing in Groovy allows certain variables defined without a type (using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword) and others with a type similar to Java. The second definition given to Groovy's type system is that it is dynamically typed.  In the past I always associated dynamic typing with not having to explicitly declare types in code (in languages like Python and JavaScript).  So how can Groovy have dynamic typing along with optional type declarations?  To answer these questions I had to dig deeper into programming languages type system and sharpen up my definitions of dynamic and static typing. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Dynamic & Static Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Dynamic & Static Typing",
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
                "value":" As previously mentioned, I used to associate dynamic typing with a lack of type definitions.  I likely made this association because languages that don't declare types in code are often dynamically typed - such as JavaScript and Python.  While both JavaScript and Python are dynamically typed, the meaning of dynamic typing is less about existence of type definitions and more about when types are enforced. ",
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
                "value":" While reading a book on Groovy recently I came across two different definitions that apply to the languages type system.  The first states that Groovy is an optionally typed language. Optional typing in Groovy allows certain variables defined without a type (using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword) and others with a type similar to Java. The second definition given to Groovy's type system is that it is dynamically typed.  In the past I always associated dynamic typing with not having to explicitly declare types in code (in languages like Python and JavaScript).  So how can Groovy have dynamic typing along with optional type declarations?  To answer these questions I had to dig deeper into programming languages type system and sharpen up my definitions of dynamic and static typing. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Dynamic & Static Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Dynamic & Static Typing",
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
                "value":" As previously mentioned, I used to associate dynamic typing with a lack of type definitions.  I likely made this association because languages that don't declare types in code are often dynamically typed - such as JavaScript and Python.  While both JavaScript and Python are dynamically typed, the meaning of dynamic typing is less about existence of type definitions and more about when types are enforced. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Dynamic Vs. Static Typing"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Dynamic Typing ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" A language is dynamically typed when types are enforced at runtime.  Dynamic typing is a form of type safety - making sure there are no discrepancies between expected types and actual types in the language",
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
                                        "value":".  Dynamic typed languages enforce type safety dynamically at runtime.  Dynamically typed languages often syntactically lack type definitions",
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
                                        "value":". ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Static Typing ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" A language that is statically typed enforces types at compile time and runtime.  The ability to enforce types at compile time allows a language to safely fail the compilation stage when type definitions mismatch their values.  Knowing types early on gives the compiler enough knowledge to optimize code even further based on the type",
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
                                        "value":".  Languages that are statically typed are generally categorized as safer and faster, albeit with less flexibility and more up front work when building code due to syntactic type definitions. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
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
                "value":" Quickly before moving further, here is a refresher of what I mean by types and type safety: ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Type"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A type consists of certain characteristics that describe a piece of data",
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
                "value":".  The characteristics alter how the compiler/interpreter handles the data's value",
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
                "value":".  Developers can perform different operations with a value depending of the characteristics defined in its type. Examples of data types are integers and objects (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"int",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Java and instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Groovy/Java). ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Type Safety"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Type safety defines the handling of type errors and type mismatches in a programming language. Enforcement of type safety can occur at compile time or runtime.  An example of a compile time type safety check in a statically typed language is failing the compilation stage if an object defined as type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is given a value of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Type safety in a dynamic programming language is handled at runtime, which is arguably a less elegant solution then failing before the code gets a chance to execute. ",
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
                "value":" Since Groovy is dynamically typed, it enforces type safety at runtime instead of compile time. In some of the definitions I've seen about dynamic typing, dynamically typed languages are said to lack type definitions.  However, in Groovy we know that type definitions are available for use similar to Java.  The difference between using type definitions in Groovy and Java is enforcement at runtime in Groovy and enforcement at both compile time and runtime in Java.  This makes Groovy dynamically typed and Java statically typed. ",
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
                "value":" The following code and comments show the unique behavior of dynamically typed Groovy: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"// The following code will compile yet fail at runtime since casting an\n// ArrayList to an Integer is not valid\nInteger hello = ['h', 'e', 'l', 'l', 'o']\nprintln hello\n\n// Interestingly the same code will pass if you use a String type,\n// casting an ArrayList to a String\nString helloString = ['h', 'e', 'l', 'l', 'o']\nprintln helloString\n",
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
                "value":" Groovy's ability to use type definitions leads to the definition of optionally typed. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Optionally Typed"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Optionally Typed",
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
                "value":" As explored in my ",
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
                        "value":"first Groovy discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword actually just assigns a value to type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object",
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
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not define a value without a type - the type is just not explicitly declared.  Everything in Groovy is an object, so everything has a type at runtime",
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
                "value":" The phrase \"optionally typed\" comes from the fact that syntactically declaring types in code is optional in Groovy.  Developers can use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword, allowing for implicit type declarations.  Let's officially define optional typing and show some example Groovy code. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Optionally Typed"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Optional typing is the syntactic ability to leave out type definitions.  All values still have types, however they can be implicitly assigned. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"// When a type is not specified, the type is Object.\n// It does not mean there is no type\ndef hiWorld = \"Hello World\"\n\nassert hiWorld instanceof Object\nassert hiWorld instanceof String\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Other Type Definitions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Other Type Definitions",
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
                "value":" If you are like me you probably also heard the terms strong and weak typing (loosely typing) before.  I've often heard strong typing interchanged with static typing (and weak typing interchanged with dynamic typing).  Unfortunately these definitions are incorrect, along with many of the textbooks and blog entries you hear the terms used in.  Even I have used the terms incorrectly numerous times. ",
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
                "value":" There is no real correct definition for strict and weak typing.  It is often agreed upon that the terms should not be used due to the confusion they cause",
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
                "value":".  I won't go into the many definitions here, but you can read more about the history of the terms and their various uses ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/Strong_and_weak_typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"elsewhere",
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
            "title":"Duck Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Duck Typing",
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
                "value":" A common use of dynamically typed languages is duck typing. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Duck Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The general phrase that applies to duck typing is \"If it walks like a duck and it quacks like a duck, then it must be a duck",
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
                "value":".\"  At its core this phrase is a conditional statement. If a value is able to quack, then the value must be a duck.  In other words, if a values type definition has a method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"quack()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", then we can safely assume that it is an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Duck",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or another compatible object with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"quack()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  Bringing it all together, if an object has the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"quack()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method it can be treated as a duck without even checking the type definition at all. ",
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
                "value":" The following code takes advantage of Groovy's dynamic type system and duck typing.  The value passed to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"outputAll()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be of any type with the assumption that its type definition has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"each()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def static outputAll(item) {\n  def str = \"[\"\n  item.each {\n    str += \"${it}\"\n  }\n  str += \"]\"\n  return str\n}\n\ndef outputList = outputAll([1,2,3,4,5])\ndef outputMap = outputAll([name:'Andy', age:'23'])\n\nprintln outputMap\nprintln outputList\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"[name=Andyage=23]\n[12345]\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Changing Groovy's Type System"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Changing Groovy's Type System",
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
                "value":" Groovy is unique because it allows for static typing with the use of annotations.  I explored the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@TypeChecked",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotation in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-4-2018-groovy-basics-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"second Groovy discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and its ability to enable static typing on methods.  Groovy can even take things to the next level with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@CompileStatic",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotation.  This annotation takes away even more of Groovy's dynamic language features.  These annotations deserve an article of their own and I still don't understand them fully, but they seem to give even more flexibility to the Groovy programmer. ",
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
                "value":" It turns out I really didn't know my definitions of dynamic and static typing at all.  A future discovery can explore the differences between dynamic programming languages and static programming languages (these topics are different than static and dynamic  ",
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
                        "value":"typing",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" but related). I can also look into static typing with Groovy.  I'm really happy with the new knowledge I gained from the research for this post and look forward to reading more about Groovy soon. ",
                "children":null
            }
        ]
    }
];

postName = "jul-15-2018-groovy-optional-typing";
postDate = new Date('2018-07-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Optional Typing in Groovy",
    description: `How can Groovy both have dynamic typing and optionally allow for types 
        to be declared like Java?`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
        },
        {
            name: "Type Systems"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Type safety\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Type_safety",
            link: "https://en.wikipedia.org/wiki/Type_safety"
        },
        {
            startName: "\"Dynamic Typing\", ",
            endName: "",
            linkName: "http://wiki.c2.com/?DynamicTyping",
            link: "http://wiki.c2.com/?DynamicTyping"
        },
        {
            startName: "\"JavaScript’s type system\", ",
            endName: "",
            linkName: "http://2ality.com/2013/09/types.html",
            link: "http://2ality.com/2013/09/types.html"
        },
        {
            startName: "\"Data type\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Data_type",
            link: "https://en.wikipedia.org/wiki/Data_type"
        },
        {
            startName: "Dierk König & Paul King, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2015), 55",
            linkName: "Groovy In Action",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "Kyle Simpson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 1",
            linkName: "You Don't Know JavaScript: Types & Grammar",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar"
        },
        {
            startName: "\"What is the difference between a strongly typed language and a statically typed language?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/2690593",
            link: "https://stackoverflow.com/a/2690593"
        },
        {
            startName: "",
            endName: ", 63",
            linkName: "König.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});