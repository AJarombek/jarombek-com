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
                "value":" Today I am looking at Promises in JavaScript and how they are used to write easy to follow  and error resistant asynchronous code.  Before writing any Promises I made an async call in JavaScript the traditional way; with callbacks. I didn't use any fancy JavaScript framework to make my async http request, just the simple ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object (which is as poorly named as AJAX - it can be used for much more than XML!)",
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
                "value":" I made a custom google search API which was really easy and fun to create",
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
                "value":"! It searches certain websites for cat related posts (and is appropriately called meowmeow)! Who wouldn't love that?  In my code I retrieve the article names from the top 10 searches in my custom meow search.  The code uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object and a callback function: ",
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
                "value":" Today I am looking at Promises in JavaScript and how they are used to write easy to follow  and error resistant asynchronous code.  Before writing any Promises I made an async call in JavaScript the traditional way; with callbacks. I didn't use any fancy JavaScript framework to make my async http request, just the simple ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object (which is as poorly named as AJAX - it can be used for much more than XML!)",
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
                "value":" I made a custom google search API which was really easy and fun to create",
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
                "value":"! It searches certain websites for cat related posts (and is appropriately called meowmeow)! Who wouldn't love that?  In my code I retrieve the article names from the top 10 searches in my custom meow search.  The code uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object and a callback function: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"var httpRequest = new XMLHttpRequest();\n\nhttpRequest.open('GET', 'https://www.googleapis.com/customsearch/#', true);\nhttpRequest.send();\n\nhttpRequest.onreadystatechange = function() {\n\n    if (httpRequest.status === 200 && httpRequest.readyState === 4) {\n        var json = JSON.parse(httpRequest.response);\n\n        for (let item of json.items) {\n            console.info(item.title);\n        }\n    }\n}\n",
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
                    "src":"https://asset.jarombek.com/posts/11-21-17-results.png"
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
                "value":" I won't explain the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object in detail here but you can see that the callback function is placed on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"onreadystatechange",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  This approach gets pretty ugly since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"onreadystatechange",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is called multiple times for each request.  Due to multiple invocations I checked if ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"readyState === 4",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", where 4 represents the request being done",
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
                "value":" There are obvious issues with this callback function approach.  What happens if the request errors out?  This code has no error handling so the result of an unsuccessful call to the custom google search is unclear.  Also what if I need to make a second asynchronous call after this request is completed? Using callbacks I would need nested callback functions, which quickly becomes ugly and hard to follow.  This is commonly referred to as callback hell. ",
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
                "value":" These are just a few of the reasons to move away from callbacks to a more elegant solution - promises! A promise object is a value that currently does not exist but is guaranteed to exist in the future. With promises it is easy to write error handling for asynchronous code and hide some of the asynchronous details inside the promise definition.  Let's see how ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" works using promises: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function httpMeow() {\n    return new Promise(function (resolve, reject) {\n        var httpRequest = new XMLHttpRequest();\n\n        httpRequest.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA2QIPJoGYMx_DuQH6wDqNG3AHXG7bcb94' +\n                '&cx=005720647135116730303:chkg-pnyocg&q=meow&prettyPrint=false', true);\n\n        httpRequest.onload = function success() {\n            if (httpRequest.status === 200) {\n                resolve(httpRequest.response);\n            } else {\n                reject(\"no meow was heard :(\");\n            }\n        };\n        httpRequest.onerror = function error() {\n            reject(\"no meow was heard :(\");\n        };\n        httpRequest.send();\n    });\n}\n\nhttpMeow().then(function(response) {\n    var json = JSON.parse(response);\n\n    for (let item of json.items) {\n        console.info(item.title);\n    }\n}, function(err) {\n    console.info(err);\n});\n",
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
                "value":" This code is broken up into two parts.  First the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"httpMeow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function returns a ",
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
                "value":" object.  You can think of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"httpMeow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as a reusable function to execute http requests, hiding the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XMLHttpRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" details from outside code.  A promise can either reject or resolve a currently non-existent value.  This is represented in code by the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"resolve()",
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
                "value":"reject()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions in the promise. ",
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
                "value":" The second part of the code interacts with the created promise.  Every ",
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
                "value":" object has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"then()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function which is called once the promise value exists.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"then()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is supplied two functions, the first which is called when the promise is resolved, the second when it is rejected.  With this solution I'm not required to know the details of the promise and can simply supply it with actions to perform on success or failure. ",
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
                "value":"next()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function also has the benefit of returning a Promise",
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
                "value":".  This allows for chained promises, as shown in the pseudocode below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"httpMeow()\n    .then(/* Get all the article titles */)\n    .then(/* Get all the article dates */)\n    .then(/* Get all the article URLs */);\n",
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
                "value":" Chained promises help with readability and are an escape from callback hell!  Other ",
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
                "value":" object methods include ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"all()",
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
                "value":"race()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which resolve or reject a value after all promises complete or the first promise completes (respectively)",
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
                "value":".  You can read all the code from this discovery on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2017/11-Nov/11-21-JS-Promises"
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

postName = "nov-21-2017-js-promises";
postDate = new Date('2017-11-21T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "JavaScript Async: Converting Callbacks to Promises",
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
            name: "Asynchronous Programming"
        },
        {
            name: "Promises"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Why is it called XMLHttpRequest?\", Aug. 22nd, 2012, ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/12067185/why-is-it-called-xmlhttprequest",
            link: "https://stackoverflow.com/questions/12067185/why-is-it-called-xmlhttprequest"
        },
        {
            startName: "\"What is Google Custom Search?\", ",
            endName: "",
            linkName: "https://developers.google.com/custom-search/",
            link: "https://developers.google.com/custom-search/"
        },
        {
            startName: "\"XMLHttpRequest.readyState\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState"
        },
        {
            startName: "John Resig, Bear Bibeault, & Josip Maras, ",
            endName: " (Shelter Island, NY: Manning, 2016), 155",
            linkName: "Secrets of the JavaScript Ninja",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "\"Promise\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});