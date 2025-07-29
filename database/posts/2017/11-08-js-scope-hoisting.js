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
                "value":" JavaScript has quickly become one of the languages I use the most (probably second behind Java). Many people use JavaScript along with one of its many frontend frameworks (JQuery, AngularJS, etc.) without really knowing how the core language operates.  I don't want to be one of those people! ",
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
                "value":" This is my first of many discovery posts on JavaScript.  Let's look at one of the basic concepts of the language: how variables interact with scope.  Scope describes the area of a program where a variable is accessible (e.g. a variable declared in a function is only accessible within that function). Scope is also the execution environment for each line of a program.  It consists of the variables and functions a program line is aware of.  In JavaScript, scope can get a bit tricky. ",
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
                "value":" JavaScript has quickly become one of the languages I use the most (probably second behind Java). Many people use JavaScript along with one of its many frontend frameworks (JQuery, AngularJS, etc.) without really knowing how the core language operates.  I don't want to be one of those people! ",
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
                "value":" This is my first of many discovery posts on JavaScript.  Let's look at one of the basic concepts of the language: how variables interact with scope.  Scope describes the area of a program where a variable is accessible (e.g. a variable declared in a function is only accessible within that function). Scope is also the execution environment for each line of a program.  It consists of the variables and functions a program line is aware of.  In JavaScript, scope can get a bit tricky. ",
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
                "value":" One tricky part is that declared variables in JavaScript get hoisted to the top of their scope.  Let's look at a quick code snippet. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"console.info(x);  // Error??\n\nvar x = 10;\n",
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
                "value":" For a Java developer like myself, I initially expected an error here.  Variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"x",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" hasn't been declared yet on line 1.  However, JavaScript returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"undefined",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which means the variable was declared but not initialized to a value. ",
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
                "value":" What happened is JavaScript split the statement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var x = 10",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" into its declaration and assignment.  It then ‘hoisted' the declaration to the top of the scope (in this case the global program scope).  When ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console.info()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked, JavaScript is already aware of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var x",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Tricky JavaScript! ",
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
                "value":" If you are using ES6+ and don't want hoisting, you can use the ",
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
                "value":" keyword (simply replace ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var",
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
                "value":"let",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the previous example).  Now if you run the code again, invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console.info(x)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will throw an error. ",
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
                "value":" Here is one more basic example: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"{\n    let firstName = \"Andy\";\n    var lastName = \"Jarombek\";\n\n    console.info(firstName); // Andrew\n    console.info(lastName); // Jarombek\n}\n\nconsole.info(lastName); // Jarombek\nconsole.info(firstName); // Reference Error\n",
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
                "value":" In JavaScript you can define a block scope with curly bracket syntax - ",
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
                "value":". In this code, the variable defined with ",
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
                "value":" is only available within the block scope, while the variable defined with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is exposed to the global scope",
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
                "value":"let",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is useful when you want to constrain a variable to one small piece of code. ",
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
                "value":" One thing that JavaScript block scope made me question was 'are variables defined with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in functions available globally?'  The answer is NO (thankfully) so your internally defined function variables are local and safe! ",
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
                "value":" You can check out the full code for these examples on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2017/11-Nov/11-8-JS-Scope-Hoisting/\nscope.js"
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
                "value":", along with a look at how variables in ",
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
                "value":" loops leak into the global scope (Yuck! – but there is a solution with ",
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
                "value":"). ",
                "children":null
            }
        ]
    }
];

postName = "nov-8-2017-js-scope-hoisting";
postDate = new Date('2017-11-08T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Scope & Hoisting in JavaScript",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Kyle Simpson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2014), 36",
            linkName: "You Don't Know JavaScript: Scope & Closures",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});