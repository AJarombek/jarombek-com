/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/12/2018
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
                "value":" When developers think of the JavaScript engine executing code in the browser, thoughts of a single threaded event loop come to mind.  You often hear people say that JavaScript doesn't support multithreaded programming and that only one piece of code can run at a time.  What they are referring to is the event loop, which delegates browser events for execution one at a time. But is JavaScript really single threaded?  The answer used to be \"its hard to tell,\" unless you had access to how exactly different browsers executed JavaScript code. With the addition of Web Workers, the answer is \"no, JavaScript can run on multiple threads\". ",
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
                "value":" Web Workers enable multithreaded JavaScript programming in the browser.  This discovery post discusses the basics of what Web Workers are and gives sample code of their basic functionality. ",
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
                "value":" When developers think of the JavaScript engine executing code in the browser, thoughts of a single threaded event loop come to mind.  You often hear people say that JavaScript doesn't support multithreaded programming and that only one piece of code can run at a time.  What they are referring to is the event loop, which delegates browser events for execution one at a time. But is JavaScript really single threaded?  The answer used to be \"its hard to tell,\" unless you had access to how exactly different browsers executed JavaScript code. With the addition of Web Workers, the answer is \"no, JavaScript can run on multiple threads\". ",
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
                "value":" Web Workers enable multithreaded JavaScript programming in the browser.  This discovery post discusses the basics of what Web Workers are and gives sample code of their basic functionality. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"How the Browser Executes JavaScript"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"How the Browser Executes JavaScript",
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
                "value":" JavaScript browser code is executed in two different phases.  The first phase occurs when a webpage is first loaded.  At this phase the DOM is built from the HTML template and all the associated JavaScript code - either inlined or in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<script>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tags - is executed",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<script>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tags are executed sequentially unless specified with the ",
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
                "value":" or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"defer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attributes",
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
                "value":".  I'd guess this JavaScript code is executed in a single thread since order must not be violated, although its hard to say without seeing how the browsers work behind the scenes.  Either way, from the programmers view ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<script>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tags are executed synchronously. ",
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
                "value":" During the first stage all event handlers are set up.  These event handlers use ",
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
                "value":" from the DOM API to respond to DOM events",
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
                "value":".  This is where JavaScripts asynchronous nature comes into play - you never know when an event such as a mouse click or scroll will occur.  Responding to these events is what the second execution phase is for. ",
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
                "value":" The second JavaScript execution phase is all about responding to asynchronous events.  Every event that occurs in the browser can be assigned one or many event handler functions",
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
                "value":". Event handler functions are implemented with JavaScript and the DOM API.  Whenever an event occurs in the browser the event handler function is invoked.  The event is added to a FIFO event queue which JavaScript handles one at a time. This is where the single threaded loop idea comes into play - JavaScript only dispatches one event handler to be executed at a time. ",
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
                "value":" I've read conflicting articles about whether JavaScript has multithreading when handling the event loop.  Some articles say the JavaScript code that handles events is actually in multiple threads",
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
                "value":".  Once again, even if there is multithreading happening behind the scenes it is abstracted away from the developers view.  Everything still passes through a single threaded event loop. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Introducing Web Workers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Introducing Web Workers",
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
                "value":" So why are Web Workers a big deal?  Web Workers allow us to dispatch messages to a separate JavaScript thread for execution.  This means a Web Worker isn't on the main thread and doesn't clog up the event queue.  Imagine you had a very long expensive computation occurring on the main thread. In this case the event queue would be filled with the expensive computation instead of focusing on responding to browser events.  That would make performance sluggish.  Imagine if it took a long time for the browser to respond to a button click or if animations on the webpage were lagging?  End users would not be happy. ",
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
                "value":" When using Web Workers you no longer have to worry about an operation using too much of the event queues capacity.  Web Workers function in an entirely separate thread.  The code for a web worker exists in a separate file from the main threads JavaScript code.  In order to use a Web Worker, a new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Worker",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance is created and the main thread passes messages to the worker thread. ",
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
                "value":" Web Workers wait for a message to come from the main thread and handles it once it arrive. The worker code performs some logic and then passes the message back to the client. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Web Worker Implementation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Web Worker Implementation",
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
                "value":" To make these concepts more concrete let's look at an example of a simple Web Worker.  The goal of this Web Worker is to add a timestamp to the message it receives (in my implementation the message represents a note). ",
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
                "value":" First I defined some JavaScript code in the main thread: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const noteInput = document.getElementById('noteInput');\nconst outputDiv = document.querySelector('.output');\n\nif (window.Worker) {\n\n  const noteWorker = new Worker(\"worker.js\");\n\n  ...\n\n} else {\n  console.error(\"Web Worker Not Supported!\");\n}\n",
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
                "value":" The first thing I do in this code is access two DOM elements - the note input and the output. The input is where users enter a new note and the output displays the note with a timestamp. ",
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
                "value":" Next the code checks if the global ",
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
                "value":" object has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Worker",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  If this property exists, the current browser supports Web Workers.  Almost all major browsers ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://caniuse.com/#feat=webworkers"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"support Web Workers",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" these days, so unless the user is using an old browser this check should pass. ",
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
                "value":" Inside the ",
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
                "value":" object check, I created a web worker by invoking the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Worker(path)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor function. The path parameter contains the location of the worker code",
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
                "value":". In this case I use a local ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/06-Jun/6-13-Web-Workers/worker.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"worker.js",
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
                "value":" The rest of the code adds an event listener to the note input field and another event listener for the Web Worker. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"  ...\n\n  const noteWorker = new Worker(\"worker.js\");\n\n  noteInput.addEventListener(\"keyup\", (event) => {\n    event.preventDefault();\n\n    // Check if the enter button was pressed\n    if (event.keyCode === 13) {\n      const newNote = noteInput.value;\n      noteInput.value = \"\";\n\n      // If so pass the input elements value to the web worker for processing\n      noteWorker.postMessage({note: newNote});\n    }\n  });\n\n  noteWorker.onmessage = (e) => {\n\n    // When a message is received from the web worker a new HTML element will be\n    // created displaying the workers message\n    const newNote = document.createElement(\"div\");\n    const noteContent = document.createTextNode(e.data.note);\n    newNote.appendChild(noteContent);\n    outputDiv.prepend(newNote);\n  }\n",
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
                "value":" Learning the DOM API is beyond the scope of this post, but basically the first listener waits for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"keyup\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" events on the input field.  Whenever a key press is released, the event is added to the event loop queue and the event handler function (defined in the ",
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
                "value":" function) is triggered. ",
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
                "value":" The event handler function is implemented to check if the key pressed has the code ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"13",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which corresponds to the enter key.  If the enter key is pressed, I get the input value and clear the value from the DOM.  The input value is then sent as a message body to the Web Worker.  Messages are sent to the worker via the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postMessage()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method on the Web Worker object. ",
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
                "value":" The second event listener waits for messages back from the Web Worker.  This listener is implemented as a function on the Web Worker ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"onmessage",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  My implementation takes the message contents and adds them into the output portion of the webpage. ",
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
                "value":" The other file of JavaScript code defines the Web Worker.  This code is very straightforward. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"onmessage = (e) => {\n\n  // Add a timestamp to the note and pass it back to the main thread\n  const date = new Date();\n  const result = {note: `${e.data.note} - ${date.toString()}`};\n\n  postMessage(result);\n};\n",
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
                "value":" All the Web Worker does is listen for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"onmessage",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" event and then respond to it.  Before responding, my worker adds a timestamp to the data sent in the message.  The response itself is handled in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postMessage(data)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, which is defined in the global scope of the web worker.  A web workers global scope is the worker itself, which is why ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postMessage()",
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
                "value":"onmessage",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are not called on an object variable directly",
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
                "value":" Just a quick reminder before moving forward - this is an awful use case of a Web Worker! Workers are supposed to help relieve the event queue from extremely expensive tasks. This implementation just demonstrates how they work in an educational sense. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Running the Web Workers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Running the Web Workers",
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
                "value":" Along with the JavaScript code previously discussed, to get my Web Workers functioning I also created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/06-Jun/\n6-13-Web-Workers/index.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"HTML file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the view and a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-sources/blob/master/2018/06-Jun/6-13-Web-Workers/index.css"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CSS file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the styling. ",
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
                "value":" For Web Workers to function a web server must be deployed.  An easy way to start a web server locally is to use the npm module \"serve.\"  Deploying a server with the serve module only takes one command",
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
        "value":"# Globally install the serve dependency which serves up a static web server.\nyarn global add serve\n\n# Spin up local web server\nserve\n",
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
                "value":" Once the server is deployed, you can watch the Web Workers in action: ",
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
                    "src":"https://asset.jarombek.com/posts/6-13-18-writing-notes.gif"
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
                "value":" If you look at the network sources in chrome, you will see a few files in the main thread and the worker file in the Web Worker thread. ",
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
                    "src":"https://asset.jarombek.com/posts/6-13-18-network-files.png"
                },
                "value":null,
                "children":[

                ]
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
                "value":" I am really interested in learning more about Web Workers.  I haven't found a use case for them yet in my personal projects, but it is good to know they are available if the need arises. ",
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
                "value":" The Web Worker shown in this discovery was a dedicated worker - one that can only be accessed by the script that called it.  There is another type of worker that I would like to explore in the future called a shared worker.  This type of worker can be shared globally among all scripts in a domain",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Maybe I will look into shared workers in a future post. ",
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
                "value":" As always, the code for this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2018/06-Jun/6-13-Web-Workers"
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

postName = "jun-13-2018-web-workers";
postDate = new Date('2018-06-13T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Introduction to Web Workers",
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
            name: "Web Workers"
        },
        {
            name: "Document Object Model"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "John Resig, Bear Bibeault, & Josip Maras, ",
            endName: " (Shelter Island, NY: Manning, 2016), 17",
            linkName: "Secrets of the JavaScript Ninja",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "\"<script>: The Script element\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
        },
        {
            startName: "",
            endName: "., 29",
            linkName: "Resig",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "",
            endName: "., 26",
            linkName: "Resig",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "\"How does a single thread handle asynchronous code in JavaScript?\", ",
            endName: "",
            linkName: "https://www.quora.com/How-does-a-single-thread-handle-asynchronous-code-in-JavaScript",
            link: "https://www.quora.com/How-does-a-single-thread-handle-asynchronous-code-in-JavaScript"
        },
        {
            startName: "\"Worker()\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker"
        },
        {
            startName: "\"Using Web Workers\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
        },
        {
            startName: "\"serve\", ",
            endName: "",
            linkName: "https://www.npmjs.com/package/serve",
            link: "https://www.npmjs.com/package/serve"
        },
        {
            startName: "\"What's the difference between Shared Worker and Worker in HTML5?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/6778480",
            link: "https://stackoverflow.com/a/6778480"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});