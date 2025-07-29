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
                "value":" Continuing the trend of learning more about JavaScript, today I'm looking at MongoDB. Mongo is a NoSQL database that stores data in documents.  Before getting into the code, its important to question why MongoDB is used in the first place. ",
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
                "value":" First lets look at some positive aspects of MongoDB.  MongoDB stores its data as JSON (and internally as BSON - short for Binary JSON) which in my personal opinion is the best structure for transferable data.  BSON causes the stored data to be extremely lightweight",
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
                "value":". MongoDB is great for a full JavaScript web stack, since MongoDB uses JavaScript as its query language instead of SQL.  Having simple JavaScript knowledge helps make MongoDB an easy transition.  You can even use JavaScript functions and variables to perform complex queries and database updates! ",
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
                "value":" Continuing the trend of learning more about JavaScript, today I'm looking at MongoDB. Mongo is a NoSQL database that stores data in documents.  Before getting into the code, its important to question why MongoDB is used in the first place. ",
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
                "value":" First lets look at some positive aspects of MongoDB.  MongoDB stores its data as JSON (and internally as BSON - short for Binary JSON) which in my personal opinion is the best structure for transferable data.  BSON causes the stored data to be extremely lightweight",
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
                "value":". MongoDB is great for a full JavaScript web stack, since MongoDB uses JavaScript as its query language instead of SQL.  Having simple JavaScript knowledge helps make MongoDB an easy transition.  You can even use JavaScript functions and variables to perform complex queries and database updates! ",
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
                "value":" As far as negatives are concerned, MongoDB does not have transaction support (similar to many NoSQL databases).  MongoDB does support atomic writes for a single document (the equivalent of a row in a RDBMS table)",
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
                "value":".  In other words, while you are updating a document either the entire update takes place, or no change occurs.  Other database connections will never see an update in progress",
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
                "value":".  Unfortunately this is where MongoDB's ACID transaction properties end.  This can cause issues if you need true transactions in your database.  Another drawback (in my opinion) for MongoDB is the lack of SQL.  Using JavaScript for querying is nice, but SQL is the de facto standard of query languages.  Luckily if you know SQL and JavaScript the learning curve for querying MongoDB is small. ",
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
                "value":" One thing about MongoDB that can be seen as a positive or negative is its schema-less design.  This allows for a variable number of properties in a document and the ability to add or remove properties at any time. A schema-less design provides a lot of flexibility for changing requirements and evolving object state.  However it can make it harder to create a well structured database.  With more power comes more responsibility! ",
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
                "value":" Now let's get started creating a MongoDB database that represents different Christmas trees.  Once you have MongoDB installed, you can run the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mongo",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command in bash to start up the database and CLI.  It is important to know that MongoDB has three logical groupings; databases, collections, and documents.  Databases are not the same as a traditional RDBMS database connection - they are simply groupings (namespaces) for collections and documents",
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
                "value":". Collections are a way to group documents together in MongoDB, similar to tables in an RDBMS. ",
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
                "value":" To start, I made a new database for Christmas trees.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"use <database>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command changes the current database. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"use xmas\n",
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
                "value":" This command does not create a database yet.  To do that I need to add some collections and documents. I added a document to a collection called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"tree",
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
            "language":"JavaScript"
        },
        "value":"db.tree.insert({type: \"balsam\"})\n",
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
                "value":" The document JSON is passed as an argument to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"insert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"tree",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" collection object.  The ",
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
                "value":" function can be used to view all the documents in the tree collection. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.find().pretty()\n",
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
                "value":" This code sample shows the ability to chain functions.  The second function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pretty()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will format the JSON in an easily readable fashion. ",
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
                "value":" Let's say I want to add more properties to the tree document.  Since MongoDB collections have no schema, any properties can be added! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.update({type: \"balsam\"}, {\n    $set: {\n        height: \"6'11\\\"\",\n        source_price: 10.50,\n        sell_price: 45.00,\n        grade: \"6-7ft\"\n    }\n})\n",
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
                "value":" I used the ",
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
                "value":" function on the collection to edit a document.  The first parameter queries the collection and matches with a document.  The second parameter defines what to update.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$set",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property binds the specified properties in the document to the given values",
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
                "value":" These simple queries are easily written in the MongoDB CLI. However performing complex JavaScript code in the CLI gets quite difficult.  Thankfully MongoDB allows any variable or function to be edited in a text editor.  In my case I used Vim.  To get Vim to work I had to change the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"EDITOR",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"vim",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in bash. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"export EDITOR=vim\n",
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
                "value":" Now in the MongoDB shell I defined a function to edit in Vim: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function createTree() {}\n",
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
                "value":" Using the name of this function, I began editing in Vim with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"edit",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"edit createTree\n",
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
                "value":" Since MongoDB queries use JavaScript, anything in the JavaScript language (even ES6+ features!) can be used in a function.  I edited the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createTree",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function so that it inserts another document into the tree collection.  Once the function was finalized, I saved the file and quit vim. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function createTree() {\n    db.tree.insert({\n    type: \"frazier\",\n    height: \"6'1\\\"\",\n    source_price: 14.00,\n    sell_price: 45.00,\n    grade: \"6-7ft\"\n    })\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":":wq\n",
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
                "value":" Back in the MongoDB CLI the functions contents can be viewed by typing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createTree",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The function is executed by typing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createTree()",
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
                "value":" Now the tree collection contains two documents.  What if I wanted to add the properties ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sold",
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
                "value":"buyer_id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to the existing documents?  I could use the ",
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
                "value":" function, however it only matches with the first document it finds.  To match all documents that fit certain query conditions, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"updateMany()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is used. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.updateMany({}, {\n    $set: {\n        \"sold\": false,\n        \"buyer_id\": undefined\n    }\n})\n",
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
                "value":" Finally to show the power of using JavaScript functions in MongoDB, I created a function that bulk inserts random trees into the database. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function bulkTreeInsert(number=1) {\n    let types = [\n        {type: \"frazier\", grade: \"3-4ft\", feet: 3, source: 7, sell: 25},\n        {type: \"frazier\", grade: \"4-5ft\", feet: 4, source: 7.50, sell: 30},\n        {type: \"frazier\", grade: \"5-6ft\", feet: 5, source: 8, sell: 45},\n        {type: \"frazier\", grade: \"6-7ft\", feet: 6, source: 9.50, sell: 55},\n        {type: \"frazier\", grade: \"7-8ft\", feet: 7, source: 10.50, sell: 65},\n        {type: \"frazier\", grade: \"8-9ft\", feet: 8, source: 12, sell: 85},\n        {type: \"frazier\", grade: \"9-10ft\", feet: 9, source: 15, sell: 115},\n        {type: \"frazier\", grade: \"10+ft\", feet: 10, source: 20, sell: 140},\n        {type: \"balsam\", grade: \"5-6ft\", feet: 5, source: 7, sell: 30},\n        {type: \"balsam\", grade: \"6-7ft\", feet: 6, source: 8, sell: 40},\n        {type: \"balsam\", grade: \"7-8ft\", feet: 7, source: 9, sell: 50},\n        {type: \"balsam\", grade: \"8-9ft\", feet: 8, source: 10, sell: 65},\n        {type: \"balsam\", grade: \"9-10ft\", feet: 9, source: 11.50, sell: 80},\n        {type: \"douglas\", grade: \"5-6ft\", feet: 5, source: 7.50, sell: 40},\n        {type: \"douglas\", grade: \"6-7ft\", feet: 6, source: 8.50, sell: 50},\n        {type: \"douglas\", grade: \"7-8ft\", feet: 7, source: 10, sell: 60}\n    ];\n\n    for (let i = 0; i < number; i++) {\n\n        // Get a random index in the types array\n        let random = Math.floor(Math.random() * 16);\n\n        // Get a random number for inches between 0-11\n        let inches = Math.floor(Math.random() * 11);\n\n        let selected = types[random];\n        let tree = {\n            type: selected[\"type\"],\n            height: `${selected[\"feet\"]}' ${inches}\"`,\n            source_price: selected[\"source\"],\n            sell_price: selected[\"sell\"],\n            grade: selected[\"grade\"],\n            sold: false,\n            buyer_id: undefined\n        };\n\n        db.tree.insert(tree)\n    }\n}\n",
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
                "value":" I passed ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1000",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as a parameter to this function, invoking it one thousand times.  When I checked to see the number of trees in tree collection, I got 1003 as expected. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"bd.tree.count() // 1003\n",
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
                "value":" Since the ",
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
                "value":" function also accepts JSON, it is easy to count all the trees of type Frazier with a height between 6-7 feet: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.find({type:\"frazier\", grade:\"6-7ft\"}).count()\n",
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
                "value":" With knowledge of JavaScript and query languages, MongoDB can be an extremely powerful database.  I only scratched the surface here, but there will be many more discoveries to come!  You can find all the code from this discovery on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2017/12-Dec/12-15-MongoDB-Pt1"
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

postName = "dec-15-2017-mongodb-pt1";
postDate = new Date('2017-12-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Learning MongoDB Part I: Creating the Database",
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
            name: "Vim",
            picture: "https://asset.jarombek.com/logos/vim.png",
            color: "vim"
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
            startName: "\"BSON\", ",
            endName: "",
            linkName: "http://bsonspec.org",
            link: "http://bsonspec.org"
        },
        {
            startName: "\"Atomicity and Transactions\", ",
            endName: "",
            linkName: "https://docs.mongodb.com/manual/core/write-operations-atomicity/",
            link: "https://docs.mongodb.com/manual/core/write-operations-atomicity/"
        },
        {
            startName: "\"Atomicity (database systems)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Atomicity_(database_systems)",
            link: "https://en.wikipedia.org/wiki/Atomicity_(database_systems)"
        },
        {
            startName: "Kyle Banker, Peter Bakkum, Shaun Verch, Douglas Garrett &amp; Tom Hawkins, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2016), 31",
            linkName: "MongoDB In Action",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 34",
            linkName: "Ibid",
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