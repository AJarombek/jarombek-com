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
                "value":" One JavaScript feature I've used before but never fully understood is strict mode. Strict mode restricts certain features and leniencies in the language",
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
                "value":". It protects the developer from things that happen implicitly in JavaScript (that only an experienced dev would be aware of).  In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-11-2017-js-this"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" previous discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I looked at how strict mode disallows ",
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
                "value":" from containing the global scope variable.  What else does strict mode have to offer? ",
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
                "value":" Certain things that silently fail in JavaScript throw errors when executed in strict mode.  This includes setting properties to primitives and assigning values to keywords. ",
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
                "value":" One JavaScript feature I've used before but never fully understood is strict mode. Strict mode restricts certain features and leniencies in the language",
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
                "value":". It protects the developer from things that happen implicitly in JavaScript (that only an experienced dev would be aware of).  In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-11-2017-js-this"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" previous discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I looked at how strict mode disallows ",
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
                "value":" from containing the global scope variable.  What else does strict mode have to offer? ",
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
                "value":" Certain things that silently fail in JavaScript throw errors when executed in strict mode.  This includes setting properties to primitives and assigning values to keywords. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"try {\n    undefined = \"defined!\";\n} catch(e) {\n    console.error('Strict mode disallows assigning values to keywords');\n}\n\ntry {\n    false.not = true;\n} catch(e) {\n    console.error('Strict mode disallows setting properties for primitive values');\n}\n",
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
                "value":" Strict mode also disallows duplicate parameter names for functions.  In previous JavaScript versions it restricted duplicate property names on objects, but this restriction was lifted in ES6 (either a bug or poor design choice). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// Strict mode does not throw an error for duplicate property names\nvar andy = {\n    name: \"Andy J\",\n    name: \"whoops\",\n    /* Strict mode disallows duplicate parameter names for functions\n    func: function(a, b, a) {\n        console.info(a + b + c);\n    }*/\n};\n",
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
                "value":" Strict mode also stops variable creation when assigning a value to an undeclared variable without a ",
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
                "value":", ",
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
                "value":", or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"try {\n    hey = \"hello\"\n} catch(e) {\n    console.error('Strict mode disallows assigning to undeclared variables');\n    console.error(e);\n}\n",
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
                "value":" Without strict mode forgetting the ",
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
                "value":" or ",
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
                "value":" variable is \"forgiving.\"  If the variable is not defined, JavaScript creates a new global variable with the name provided. In my opinion this should be considered a syntax mistake by the developer and throw an error.  That is exactly what happens in strict mode. ",
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
                "value":" Strict mode includes other features that can come in useful (such as throwing errors when trying to assign values to immutable properties) but the ones I went over have the largest impact on my code. You can find the code used in this discovery on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\nblob/master/2017/11-Nov/11-15-JS-Strict-Mode/strict-mode.js"
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

postName = "nov-15-2017-js-strict-mode";
postDate = new Date('2017-11-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "JavaScript Strict Mode",
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
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Strict mode\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});