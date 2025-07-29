/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/25/2018
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
                "value":" In my last discovery post, I went over the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-9-2017-js-closure-modules"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"revealing module pattern in JavaScript.",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Now I am recreating the same API with ES6 modules.  The API code will look familiar: ",
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
                "value":" The only change to the API is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"export",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"export",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a new keyword in ES6 that reveals the function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyrics",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to other JavaScript code.  Any JavaScript file can be a module if it exports functions/variables. Only one module can exist per file, and each module can export multiple items.  Since one file is one and only one module, the name of a module is the filename. Code to import a module uses the ",
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
                "value":" keyword: ",
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
                "value":" In my last discovery post, I went over the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-9-2017-js-closure-modules"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"revealing module pattern in JavaScript.",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Now I am recreating the same API with ES6 modules.  The API code will look familiar: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"export function lyrics(song) {\n    switch(song.toLowerCase()) {\n    case \"sparks fly\":\n        return lyric.sparks;\n        case \"mine\":\n        return lyric.mine;\n    case \"back to december\":\n        return lyric.dec;\n    default:\n        return lyric.other;\n    }\n}\n\nvar lyric = {\n    sparks: \"I see sparks fly whenever you smile\",\n    mine: \"You are the best thing thats ever been mine\",\n    dec: \"I go back to Decemeber all the time\",\n    other: \"I'm sorry, taylor can't pick up the phone right now\"\n}\n",
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
                "value":" The only change to the API is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"export",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"export",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a new keyword in ES6 that reveals the function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyrics",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to other JavaScript code.  Any JavaScript file can be a module if it exports functions/variables. Only one module can exist per file, and each module can export multiple items.  Since one file is one and only one module, the name of a module is the filename. Code to import a module uses the ",
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
                "value":" keyword: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import * as ts from './taylorSwift';\n",
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
                "value":" All variables/functions in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"taylorSwift",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module are imported with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"import *",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax. The imported module is then given the alias ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ts",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". With the Taylor Swift API imported, I invoked the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lyrics()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"ts.lyrics(\"Sparks Fly\");\n",
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
                "value":" If you tried running this code in certain environments it would fail.  Many JavaScript engines are not ES6 compliant (including my version of Node.js!).  Therefore, when I tried running my main.js file (containing the input code) I got an error: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"node main.js\n#import * as ts from 'taylorSwift';\n#^^^^^^\n#SyntaxError: Unexpected token import\n",
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
                "value":" Eventually I got this code to work after jumping through some hoops. The tool to get the job done was Babel, which is a JavaScript transpiler. ",
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
                "value":" The way to get ES6 code to work in all environments is by converting it to an ES5 equivalent (or as close as possible).  This would be quite the task to do manually, so Babel does the work for us.  As I mentioned, Babel is a transpiler.  Transpile is a combination of the words translate and compile.  So Babel (a compiler) converts (translates) ES6 code to ES5. ",
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
                "value":" Let’s set up Babel.  Since I’m using Node.js I set up a dependency manager and installed Babel",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"npm install --save-dev babel-cli\nnpm install babel-preset-env --save-dev\n",
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
                "value":" I then configured Babel by creating a .babelrc file.  In this JSON file I set ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"presets",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"env\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which helps Babel determine the Babel plugins I need to perform a transpilation based on my environment",
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
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"presets\": [\"env\"]\n}\n",
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
                "value":" Now when I got to this point I thought \"great I’m done! Let’s run the code!\"  Unfortunately, I forgot to actually tell Babel which files to convert to ES5.  One way to do that is like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"npx babel main.js --out-file es5/main.js\n",
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
                "value":" This command tells Babel to take main.js and transpile it to a file of the same name in a folder named es5 (note: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"npx",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not a typo – install it with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"npm install –g npx",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to simplify Babel commands). ",
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
                "value":" There is however a better way of doing this.  Babel has the ability to watch ES6 files for changes. When a change is made, the ES6 code is automatically transpiled to an output file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"npx babel main.js --watch --out-file es5/main.js &\nnpx babel taylorSwift.js --watch --out-file es5/taylorSwift.js &\n",
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
                "value":" I added the ampersand to the end of these commands to place them in the background. This is so the bash shell is not blocked and I can continue to execute commands in one window. Background tasks can be killed at any time with their job number",
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
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Kill the task by job number (in this case 1)\nkill %1\n",
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
                "value":" Now Babel is all set and the files are transpiled! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"node es5/main.js\n# I see sparks fly whenever you smile\n",
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
                "value":" Looking at the transpiled ES5 code reveals that Babel is using CommonJS for the ES6 modules.  This is the library that Node.js uses for modules in pre-ES6 code. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"var _taylorSwift = require(\"./taylorSwift\");\n",
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
                "value":" That was a lot of work just to see some sparks fly using ES6!  Obviously it is not practical to transpile ES6 code for such a small codebase, but for larger projects we want to use ES6+ JavaScript features no matter the environment.  I'll be using Babel for many projects in the future.  You can find all the code in this demo on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2017/11-Nov/11-10-ES6-Modules-Babel"
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

postName = "nov-10-2017-es6-modules-babel";
postDate = new Date('2017-11-10T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "ES6 Modules Run with Babel",
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
            color: "javascript"
        },
        {
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        },
        {
            name: "Babel",
            picture: "https://asset.jarombek.com/logos/babel.png",
            color: "babel"
        },
        {
            name: "Transpiler"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Using Babel\", ",
            endName: "",
            linkName: "https://babeljs.io/docs/setup/#installation",
            link: "https://babeljs.io/docs/setup/#installation"
        },
        {
            startName: "\"Env preset\", ",
            endName: "",
            linkName: "https://babeljs.io/docs/plugins/preset-env/",
            link: "https://babeljs.io/docs/plugins/preset-env/"
        },
        {
            startName: "\"linux: kill background task\", October 26th, 2009, ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/1624691/linux-kill-background-task",
            link: "https://stackoverflow.com/questions/1624691/linux-kill-background-task"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});