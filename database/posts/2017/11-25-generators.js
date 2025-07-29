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
                "value":" When I first heard about generators in the ES6 version of JavaScript, I wasn't quite sure how useful they would be.  In this post I will look at the basics of generators in JavaScript and other languages. In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-26-2017-js-async-function"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"future post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I'll explore how to combine Generators and ",
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
                "value":" The following code uses generators to create a fibonacci sequence. ",
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
                "value":" When I first heard about generators in the ES6 version of JavaScript, I wasn't quite sure how useful they would be.  In this post I will look at the basics of generators in JavaScript and other languages. In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-26-2017-js-async-function"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"future post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I'll explore how to combine Generators and ",
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
                "value":" The following code uses generators to create a fibonacci sequence. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function *fib() {\n    var first = 0;\n    var last = 1;\n\n    yield first;\n    yield last;\n\n    while(true) {\n        // ES6 Desconstructing shortens the traditional variable swap\n        [first, last] = [last, first + last];\n\n        yield last;\n    }\n}\n\nvar fibonacci = fib();\n\nfor(let i = 0; i < 50; i++) {\n    let result = fibonacci.next();\n    console.info(result.value);\n}\n",
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
                "value":" To create a generator function in JavaScript the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token is placed next to a function.  When a generator function is invoked, it does not execute like a normal function.  Instead it creates an iterator which is called to execute the functions contents. Therefore the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fibonacci",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable actually contains an iterator that you can iterate over using the ",
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
                "value":" function.  When ",
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
                "value":" is called, the generator contents execute until the whole code body is run or a ",
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
                "value":" keyword is encountered.  At this point a generator is paused.  ",
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
                "value":" statements can also return a value.  A returned value is placed in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"value",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property of the iterator (which itself is an object). I printed this property out when I called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console.info(result.value)",
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
                "value":" One thing you may have noticed is the infinite ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"while",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop in the generator. Usually infinite loops should be avoided, but in generator bodies they are completely okay!  The reason infinite loops are okay is because the user of the generator decides how many times the iterator is called, so it won't necessarily run forever. ",
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
                "value":" It is still possible for a generator to be called an infinite number of times. In ES6 there is a new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for...of",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop which is used to loop through the iterator until completion.  In the fibonacci example, I did not use this loop because it would run forever! ",
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
                "value":" I mentioned that the ",
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
                "value":" keyword passes a value to the outer code via the iterators ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"value",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  You can also pass values back into the generator by adding a parameter to the iterators ",
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
                "value":" function.  An example of passing values into generators can be found in this articles ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/\n2017/11-Nov/11-25-Generators"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"source code",
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
                "value":" JavaScript is not the only language with generators.  Amongst my commonly used languages Python and PHP also have generators.  Let's look at an example in Python",
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
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"def fib():\n    first = 0\n    last = 1\n\n    yield first\n    yield last\n\n    while True:\n        # Construct and deconstruct a tuple\n        first, last = last, first + last\n        yield last\n\nfibonacci = fib()\nfor x in range(50):\n    print(next(fibonacci))\n",
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
                "value":" Notice that the Python code is nearly identical - although you don't need the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token next to the function definition. ",
                "children":null
            }
        ]
    }
];

postName = "nov-25-2017-generators";
postDate = new Date('2017-11-25T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring Generators",
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
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Generators"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Improve Your Python: 'yield' and Generators Explained\", Apr. 7th, 2013, ",
            endName: "",
            linkName: "https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/",
            link: "https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});