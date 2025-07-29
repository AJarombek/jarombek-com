/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/26/2018
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
                "value":" In previous posts I looked at ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-21-2017-js-promises"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Promises",
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
                    "href":"https://jarombek.com/blog/nov-25-2017-generators"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Generators",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in JavaScript.  I mentioned these two new ES6 features are especially powerful when combined.  I do think that Promises on their own are very useful, however I am not yet sold on Generators. ",
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
                "value":" By combining Promises and Generators, we can create a function that handles asynchronous tasks (let's call it ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  This function takes one parameter - a generator function.  Each ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"yield",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement in the generator returns a promise, which calls the generators iterator once resolved.  Therefore each asynchronous task in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function moves on to the next task in sequential order.  Let's look at some pseudocode: ",
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
                "value":" In previous posts I looked at ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-21-2017-js-promises"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Promises",
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
                    "href":"https://jarombek.com/blog/nov-25-2017-generators"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Generators",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in JavaScript.  I mentioned these two new ES6 features are especially powerful when combined.  I do think that Promises on their own are very useful, however I am not yet sold on Generators. ",
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
                "value":" By combining Promises and Generators, we can create a function that handles asynchronous tasks (let's call it ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  This function takes one parameter - a generator function.  Each ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"yield",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement in the generator returns a promise, which calls the generators iterator once resolved.  Therefore each asynchronous task in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function moves on to the next task in sequential order.  Let's look at some pseudocode: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function async(generator) {\n    var iterator = generator();\n    await(iterator.next())\n\n    function await(promise) {\n        promise.then(function() {\n            await(iterator.next());\n        })\n    }\n}\n",
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
                "value":" This code lacks error handling and other technicalities present in production code, but displays the basic idea of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  The following pseudocode uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to execute HTTP GET requests. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"async(function *tasks() {\n    yield httpGet(\"www.example.com/search/1\");\n    yield httpGet(\"www.example.com/search/2\");\n    yield httpGet(\"www.example.com/search/3\");\n})\n",
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
                "value":" With the reusable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, asynchronous code is very simple!  Even better, its written in a synchronous manner with no promises or dreaded callbacks to deal with!  All of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Promise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code is abstracted away. So why am I only showing pseudocode and not the real thing?  The reason is because ECMAScript 2017 (or following the old naming convention ES8) implemented this pattern using the new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
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
                "value":"await",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keywords",
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
                "value":" In my discovery on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-21-2017-js-promises"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"promises",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I created a google search API for cat posts.  Let's refactor this example using an ES2017 ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  I used Node 9 for the refactor to avoid transpiling my code with Babel.  One thing that Node 9 (the newest version of Node.js as of November 2017) does not support by default is ES6 modules.  As a workaround, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"--experimental-modules",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" flag can be used to enable ES6 modules",
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
                "value":".  To notify Node.js that files are modules, the .mjs file extension is used. These files are hilariously referred to as Micheal Jackson Scripts.  Hopefully the .mjs files are just for the experimental version and not here to stay - I would miss those .js files (and it doesn't seem like an elegant solution)! ",
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
                "value":" Now let's get to the code.  The first module creates a promise for a request to the google search API",
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
                "value":". The second module imports the first module and uses the ES2017 ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import {default as https} from 'https';\n\nexport function search(query = 'cat') {\n\n    const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA2QIPJoGYMx_DuQH6wDqNG3AHXG7bcb94' +\n                '&cx=005720647135116730303:chkg-pnyocg&q=' + query + '&prettyPrint=false';\n\n    return new Promise(function (resolve, reject) {\n\n        https.get(url, res => {\n            res.setEncoding('utf-8');\n            let response = '';\n\n            res.on('data', data => {\n                response += data;\n            });\n\n            res.on('end', () => {\n                resolve(JSON.parse(response));\n            });\n        });\n    });\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import * as http from './meowHttp';\n\n(async function search() {\n    let catResult = await http.search();\n    print(catResult);\n\n    let meowResult = await http.search('meow');\n    print(meowResult);\n})();\n",
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
                "value":" You may have noticed that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
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
                "value":"await",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keywords are simply syntactic sugar for our ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async()",
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
                "value":"await()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions.  This is a truly elegant solution that allows asynchronous code to be written in an easily understandable synchronous manner.  Executing this code results in the following: ",
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
                    "src":"https://asset.jarombek.com/posts/11-26-17-results.png"
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
                "value":" The ES2017 ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is very powerful! Although you never need to fully understand the details of combined Promises and Generators when using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions, it is still good to know what is going on behind the scenes! All the code from this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/\nmaster/2017/11-Nov/11-26-JS-Async-Function"
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

postName = "nov-26-2017-js-async-function";
postDate = new Date('2017-11-26T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "JavaScript Async Functions: Combining Promises and Generators",
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
            name: "ECMAScript 6",
            picture: "https://asset.jarombek.com/logos/es6.png",
            color: "ecmascript6"
        },
        {
            name: "ECMAScript 2017",
            picture: "https://asset.jarombek.com/logos/es2017.png",
            color: "javascript"
        },
        {
            name: "Asynchronous Programming"
        },
        {
            name: "Promises"
        },
        {
            name: "Generators"
        },
        {
            name: "Async Function"
        },
        {
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"async function\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
        },
        {
            startName: "\"Node.js v9.2.0 Documentation: ECMAScript Modules\", ",
            endName: "",
            linkName: "https://nodejs.org/api/esm.html#esm_enabling",
            link: "https://nodejs.org/api/esm.html#esm_enabling"
        },
        {
            startName: "\"Node.js v9.2.0 Documentation: HTTPS\", ",
            endName: "",
            linkName: "https://nodejs.org/api/https.html",
            link: "https://nodejs.org/api/https.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});