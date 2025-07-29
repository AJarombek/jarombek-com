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
                "value":" When you run code in JavaScript there is a global object created in the global scope.  What this object is depends on the environment JavaScript is running in.  If you run JavaScript code in your web browser the global object is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which represents the browser window.  Window exposes an API for interaction with the Document Object Model (DOM), click listeners, and other information about the browser window",
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
                "value":" In the past I have used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object to check the current URL and previous page visited by the user (to create a 'back' button).  However, the most common use of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is to manipulate the DOM and set click listeners (I used frameworks such as JQuery to perform these tasks in the past). ",
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
                "value":" When you run code in JavaScript there is a global object created in the global scope.  What this object is depends on the environment JavaScript is running in.  If you run JavaScript code in your web browser the global object is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which represents the browser window.  Window exposes an API for interaction with the Document Object Model (DOM), click listeners, and other information about the browser window",
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
                "value":" In the past I have used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object to check the current URL and previous page visited by the user (to create a 'back' button).  However, the most common use of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is to manipulate the DOM and set click listeners (I used frameworks such as JQuery to perform these tasks in the past). ",
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
                "value":" Before we look at some uses for the window object, it is important to note that when code is run in the global scope ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"console.info(this); // window object\n\nconsole.info(window); // window object\n",
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
                "value":" Because of this fact we can use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the global scope (and any ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-submittions/blob/master/Discoveries/\n2017/11-Nov/11-11-JS-This/View/js-this.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"other scopes",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" where the assigned value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to refer to window.  One function that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" API exposes is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"prompt()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which displays a field for the user to enter a value.  In the global scope you can call ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"prompt()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
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
        "value":"this.prompt(\"What is your name?\");\n",
        "children":null
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/11-13-17-prompt.png"
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
                "value":" Another ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"open()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which creates and returns a new window.  The following code uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"open()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" along with the window objects ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"document.write()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to write a new element to the DOM. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"var newWindow = window.open();\nnewWindow.document.write(\"<p>Hello</p>\");\n",
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
                "value":" In this code I opened a new window and assigned the newly created ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"newWindow",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"document",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"document.write()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the API revealed for the DOM. The document API can traverse and manipulate the DOM to create dynamic web pages. ",
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
                "value":" Finally I utilized the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object's event listeners. I created a function that is called when a user clicks on the new window.  Once clicked, the new window closes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"newWindow.onclick = function click() {\n    newWindow.close();\n};\n",
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
                "value":" The problem with this approach is only one click listener can be assigned to the window at a time",
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
                "value":". If I wanted to create more, I could utilize the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"addEventListener()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function on the target object (in this case the window)",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object and DOM API have many features.  I think understanding both of them can help a programmer to build better web pages (even if you aren't contacting them directly.  In newer code, you are likely using a higher level framework such as JQuery, AngularJS, or ReactJS instead). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Global Object in Nodejs"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Global Object in Node.js",
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
                "value":" So what about code running in Node.js?  In Node there is also a global object called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"global",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I haven't found anything too useful in this global object (although my knowledge of Node is limited), but it does expose information on the environment Node is running in. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// The following results are from my PC\nglobal.process.arch; // x64\nglobal.process.platform; // win32\nglobal.process.env.OS; // Windows_NT\nglobal.process.env.PROCESSOR_ARCHITECTURE; // AMD64\nglobal.process.env.USERNAME; // Andy\nglobal.process.pid; // 15088\n",
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
                "value":" One final note on the global object in Node.  You may expect the assigned value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to be ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"global",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the global scope (just like ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the browser).  Let's try it out: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"console.info(this); // { }\n",
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
                "value":" If you run this code, the returned value is actually the empty object ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{ }",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" .  Why is this?  It turns out upon debugging the file, this code is executed like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"(function (exports, require, module, __filename, __dirname) {\n    console.info(this);\n});\n",
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
                "value":" In this code ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is assigned to the module itself, which is empty.  As I mentioned my Node.js experience is limited, but I'll be ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-30-2017-nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"fixing that soon",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"! ",
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
                "value":" If you want to look at everything on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"global",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object, you can do so while debugging.  You can debug Node.js by running the following command and navigating to the link given: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"node --inspect --debug-brk test.js\n",
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
                "value":" All the code from this discovery can be found on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2017/11-Nov/11-13-JS-Global-Object"
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

postName = "nov-13-2017-js-global-object";
postDate = new Date('2017-11-13T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Global Objects in JavaScript",
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
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        },
        {
            name: "Document Object Model"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Window\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/API/Window",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Window"
        },
        {
            startName: "John Resig, Bear Bibeault, & Josip Maras, ",
            endName: " (Shelter Island, NY: Manning, 2016), 26",
            linkName: "Secrets of the JavaScript Ninja",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "\"EventTarget.addEventListener()\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});