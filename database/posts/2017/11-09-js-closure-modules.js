/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/24/2018
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
                "value":" In JavaScript there are multiple module patterns for creating APIs and separating concerns in code (as of ES6 there is also official module syntax in the spec). In the following code I created an API using the revealing module pattern.  The name 'revealing module pattern' comes from the return statement at the end of the module - it 'reveals' functions to outside code. ",
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
                "value":" This module provides lyrics for Taylor Swift songs (because who doesn't enjoy some T-Swift!)  The ",
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
                "value":" statement is the public API for the module.  All interior details, such as the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyric",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable, are hidden. This pattern harnesses the power of closure in JavaScript! ",
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
                "value":" In JavaScript there are multiple module patterns for creating APIs and separating concerns in code (as of ES6 there is also official module syntax in the spec). In the following code I created an API using the revealing module pattern.  The name 'revealing module pattern' comes from the return statement at the end of the module - it 'reveals' functions to outside code. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"var taylorSwiftApi = function() {\n    var lyric = {\n        sparks: \"I see sparks fly whenever you smile\",\n        mine: \"You are the best thing that's ever been mine\",\n        dec: \"I go back to December all the time\",\n        other: \"I'm sorry, taylor can't pick up the phone right now\"\n    }\n\n    function lyrics(song) {\n        switch(song.toLowerCase()) {\n            case \"sparks fly\":\n                return lyric.sparks;\n            case \"mine\":\n                return lyric.mine;\n            case \"back to december\":\n                return lyric.dec;\n            default:\n                return lyric.other;\n        }\n    }\n\n    return {\n        lyrics: lyrics\n    }\n}();\n",
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
                "value":" This module provides lyrics for Taylor Swift songs (because who doesn't enjoy some T-Swift!)  The ",
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
                "value":" statement is the public API for the module.  All interior details, such as the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyric",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable, are hidden. This pattern harnesses the power of closure in JavaScript! ",
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
                "value":" Closure is defined \"when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope",
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
                "value":".\" ",
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
                "value":" Okay cool, so when ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"taylorSwiftApi.lyrics()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked later on, it will remember the modules interior ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyric",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable! But what is this 'lexical scope' the definition refers to? ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Lexical Scope"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Lexical scope is when the physical structure of a program determines the scope.  Because of this, the scope in which you define a function is always that functions scope.  The lexical scope attached to a function can never change. ",
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
                "value":" Maybe lexical scope and closure will be easier to understand with an example using the Taylor Swift API: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"var lyric = {\n    sparks: \"I was enchanted to meet you\"\n};\n\nlet result = taylorSwiftApi.lyrics(\"Sparks Fly\");\nconsole.info(result); // I see sparks fly whenever you smile\n",
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
                "value":" In the global scope I defined a second ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyric",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable with a different (and as T-Swift fans know – incorrect) value.  The question now is which ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyric.sparks",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable will the API find when invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"taylorSwiftApi.lyrics()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?  In this case, it will be the one defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"taylorSwiftApi",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module.  This is because of a closure that was created over the lexical scope of the API. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"taylorSwiftApi.lyrics()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was defined in the API's lexical scope, so that scope can’t change! ",
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
                "value":" As I mentioned in the beginning of this discovery, there is support for modules in the JavaScript spec as of ES6.  I will expand on the Taylor Swift API using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-10-2017-es6-modules-babel"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ES6 modules",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the future.  You can find all the code from this article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2017/\n11-Nov/11-9-JS-Closure-Modules/module.js"
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A final note: there is another type of scoping called dynamic scope.  This is used in shell scripts such as Bash and PowerShell.  In these scripting languages, the scope is determined by the executing programs location on the call stack",
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
                "value":".  This may be a fun topic to explore in the future! ",
                "children":null
            }
        ]
    }
];

postName = "nov-9-2017-js-closure-modules";
postDate = new Date('2017-11-09T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Closure & Lexical Scope in JavaScript Modules",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "API"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Kyle Simpson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2014), 48",
            linkName: "You Don't Know JavaScript: Scope & Closures",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures"
        },
        {
            startName: "\"Static (Lexical) Scoping vs Dynamic Scoping (Pseudocode)\", March 14th, 2014, ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/22394089/static-lexical-scoping-vs-dynamic-scoping-pseudocode",
            link: "https://stackoverflow.com/questions/22394089/static-lexical-scoping-vs-dynamic-scoping-pseudocode"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});