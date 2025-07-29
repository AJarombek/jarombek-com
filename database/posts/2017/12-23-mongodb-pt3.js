/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/28/2018
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
                "value":" One of the really powerful things about a document database like MongoDB is the ability to store arrays of values in a document.  Arrays can even store sub-documents, allowing for many levels of nested data. ",
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
                "value":" An example use case of an array in a document database is a user with multiple addresses.  In a relational database, this address information would be stored in a separate table.  To get a users addresses, the addresses table would be joined with the users table.  In MongoDB, a user and their addresses can be stored in one document, making data access and updates quick and easy (with no expensive ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"JOIN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operations). ",
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
                "value":" One of the really powerful things about a document database like MongoDB is the ability to store arrays of values in a document.  Arrays can even store sub-documents, allowing for many levels of nested data. ",
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
                "value":" An example use case of an array in a document database is a user with multiple addresses.  In a relational database, this address information would be stored in a separate table.  To get a users addresses, the addresses table would be joined with the users table.  In MongoDB, a user and their addresses can be stored in one document, making data access and updates quick and easy (with no expensive ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"JOIN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operations). ",
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
                "value":" Now let's look at some array operations in the MongoDB shell.  I created a document called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"user",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which holds running log information.  This info consists of an array of exercise logs, an array of planned exercises, and the users personal records. ",
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
                "value":" Accessing data from nested objects and arrays is easy.  For example, each user has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plan",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" array that contains exercise plans.  Each item in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plan",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" array contains two properties - a date and a distance in miles.  If I'm only interested in the miles and not the date, I can use the following dot notation - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plan.miles",
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
        "value":"db.user.find({}, {'plan.miles': 1}).pretty()\n",
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
                "value":" If I only want the first item in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plan",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" array, I can use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$slice",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$slice",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines the number of items to return from an array. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.user.find({}, {_id: 1, plan: {$slice: 1}}).pretty()\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$slice",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is given a value of 1 which returns the first element in the array.  If ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$slice",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is given a negative value it returns items from the end of the array. ",
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
                "value":" Indexes are easily added to nested properties using dot notation: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.user.createIndex({'plan.date': 1})\n",
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
                "value":" There are numerous operators for updating arrays, including ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$push",
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
                "value":"$pop",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$addToSet",
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
                "value":"$pop",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" removes an item from an array, while both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$push",
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
                "value":"$addToSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" add an item to an array.  With ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$addToSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a new item is only added if it does not already exist in the array.  This is a better option if duplicates should be avoided. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// Delete the first element of the plan array\ndb.user.update({}, {$pop: {'plan': -1}})\n\n// Add an element to the array if it does not already exist\ndb.user.update({}, {$addToSet: {'plan': {date: new Date(\"2017-12-27\"), miles: 2}}})\n",
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
                "value":" One important operator for updating in MongoDB is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"findAndModify()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This command both updates and returns the newly altered document atomically",
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
                "value":".  All updates in MongoDB are performed atomically (an update is never half completed and no database connection ever sees an update in progress).  However, when calling the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"update()",
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
                "value":"find()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operations separately, there is a chance that another update is performed in between the execution of both commands.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"findAndModify()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" eliminates this problem so you know any changes reflected in the document are from the update just performed. The following query adds another sub-document to the plan array and also returns the newly updated document. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.user.findAndModify({\n    query: {},\n    update: {\n        $addToSet: {'plan': {date: new Date(\"2017-12-28\"), miles: 4.1}}\n    },\n    'new': true\n})\n",
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
                "value":" These code samples begin to expose the power of arrays and sub-documents in MongoDB.  A multi-table RDBMS structure is easily compressed into a single document with MongoDB.  All the code samples from this post are on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2017/12-Dec/12-23-MongoDB-Pt3/dbscripts.js"
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

postName = "dec-23-2017-mongodb-pt3";
postDate = new Date('2017-12-23T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Learning MongoDB Part III: Arrays and Nested Objects",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "MongoDB",
            picture: "https://asset.jarombek.com/logos/mongodb.png",
            color: "mongodb"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Relational Database"
        },
        {
            name: "NoSQL"
        },
        {
            name: "Document Database"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Kyle Banker, Peter Bakkum, Shaun Verch, Douglas Garrett &amp; Tom Hawkins, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2016), 171",
            linkName: "MongoDB In Action",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});