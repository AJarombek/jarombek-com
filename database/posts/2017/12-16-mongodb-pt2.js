/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/27/2018
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
                "value":" Today I'm building on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-15-2017-mongodb-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first MongoDB discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and looking at documents in more depth.  To start, let's implement Christmas tree purchases in the database.  The first task is picking a tree to buy!  I searched the database for a tree I liked and used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"findOne()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to return a single tree. ",
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
                "value":" Next I created a customer collection to hold all the people who bought trees: ",
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
                "value":" Today I'm building on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-15-2017-mongodb-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first MongoDB discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and looking at documents in more depth.  To start, let's implement Christmas tree purchases in the database.  The first task is picking a tree to buy!  I searched the database for a tree I liked and used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"findOne()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to return a single tree. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.findOne({type:\"douglas\", grade:\"7-8ft\", height:\"7' 3\\\"\"})\n\n/* Result */\n{\n    \"_id\" : ObjectId(\"5a3352702e48ee76cb1fe459\"),\n    \"type\" : \"douglas\",\n    \"height\" : \"7' 3\\\"\",\n    \"source_price\" : 10,\n    \"sell_price\" : 60,\n    \"grade\" : \"7-8ft\",\n    \"sold\" : false,\n    \"buyer_id\" : undefined\n}\n",
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
                "value":" Next I created a customer collection to hold all the people who bought trees: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.customer.insert({\n    username: \"andy\",\n    name: \"Andrew Jarombek\",\n    email: \"andy@jarombek.com\"\n})\n",
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
                "value":" One thing you may have noticed is that each document has a field called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"_id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with a value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ObjectId(...)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" containing a hex number.  These hex digits are not randomly generated.  Instead they hold organized information about the document.  The first eight hex digits (four bytes) of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ObjectId",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are a timestamp of when the id was created.  The rest of the id is broken down into three pieces - the machine ID, process ID, and a counter which increments each time an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ObjectId",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is generated. All these items together create a very reliable unique key (you don't have to worry about collisions, the possibility is so small). ",
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
                "value":" So why am I going into the details of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ObjectId",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?  These unique ids are commonly used to link documents together by creating a property on one document that contains the id of another document.  In the case of the Christmas tree database, I created a collection for purchases.  In this collection, each document is linked to both the purchased tree and the customer.  I took the ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"customer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" document ids and put them in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"purchase",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" document. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"let tree_id = db.tree.findOne({type:\"douglas\", grade:\"7-8ft\", height:\"7' 3\\\"\"})._id;\nlet user_id = db.customer.findOne()._id;\n\ndb.purchase.insert({\n    type: \"douglas\",\n    grade: \"7-8ft\",\n    price: 60,\n    tree_id: tree_id,\n    username: \"andy\",\n    user_id: user_id,\n    date: Date()\n})\n",
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
                "value":" This code also displays the ability to use JavaScript variables in MongoDB queries.  Variables allow for readable and structured queries. Now I can see the other document ids in the purchase document: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.purchase.findOne()\n\n/* Result */\n{\n    \"_id\" : ObjectId(\"5a34a1942e48ee76cb1fe82c\"),\n    \"type\" : \"douglas\",\n    \"grade\" : \"7-8ft\",\n    \"price\" : 60,\n    \"tree_id\" : ObjectId(\"5a3352702e48ee76cb1fe459\"),\n    \"username\" : \"andy\",\n    \"user_id\" : ObjectId(\"5a349e732e48ee76cb1fe82b\"),\n    \"date\" : \"Fri Dec 15 2017 23:31:16 GMT-0500 (EST)\"\n}\n",
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
                "value":" You will notice there are some duplicated fields from other collections in the purchase document (such as the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"username",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property). This sort of duplication is frowned upon in a RDBMS, however since there are no JOINs in MongoDB duplication is okay",
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
                "value":" I've demonstrated how to link related documents in MongoDB, making it easy to find a linked document without a ",
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
                "value":" operation.  Let's take a step back and look at the first query I made for picking out a Christmas tree.  I called the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"explain()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function on this query to find useful execution information: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.find({type:\"douglas\", grade:\"7-8ft\", height:\"7' 3\\\"\"}).explain(\"executionStats\")\n\n/* Result */\n{\n    \"executionStats\" : {\n        \"executionSuccess\" : true,\n        \"nReturned\" : 6,\n        \"executionTimeMillis\" : 4,\n        \"totalKeysExamined\" : 0,\n        \"totalDocsExamined\" : 1003,\n    }\n}\n",
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
                "value":" The most important property in the returned JSON object is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"totalDocsExamined",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Notice that the query looked at every single document in the collection.  Now imagine how slow this could be if there were millions of documents in the collection!  For anyone who has used databases before the solution should come to mind - an index.  Let's add indexes to the commonly queried fields in ",
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
        "value":"db.tree.createIndex({type: 1})\ndb.tree.createIndex({grade: 1})\ndb.tree.createIndex({height: 1})\n",
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
                "value":" You may be wondering about the significance of the value ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This means that the index is stored in ascending order, while a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" means descending order",
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
                "value":".  When I call ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"explain()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" again, only the returned documents are examined.  Much better! ",
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
                "value":" All the indexes on a document are displayed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getIndexes()",
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
        "value":"db.tree.getIndexes()\n",
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
                "value":" Indexes are used for other purposes besides speeding up query times.  They can expire documents in a time-to-live (TTL) collection",
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
                "value":".  These collections use indexes to set a date that a document expires.  In order to create a TTL collection, a date property needs to exist on the documents.  In the ",
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
                "value":" documents I set this date to Christmas eve, since nobody will buy a tree after then. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"\ndb.tree.updateMany({}, {$set: {\"availableUntil\": new Date(\"2017-12-24\")}})\n",
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
                "value":" Next I created an index on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"availableUntil",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property. The second parameter of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createIndex()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains additional options, in this case expiring the document zero seconds after the date in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"availableUntil",
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
        "value":"\ndb.tree.createIndex({availableUntil: 1}, {expireAfterSeconds: 0})\n",
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
                "value":" I applied a lot of new MongoDB concepts to the tree database.  The power of linked documents and indexes in MongoDB is now clear.  I will look at MongoDB even more in my next discovery.  The code for this discovery can be found on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/\n2017/12-Dec/12-16-MongoDB-Pt2/dbscrips.js"
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

postName = "dec-16-2017-mongodb-pt2";
postDate = new Date('2017-12-16T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Learning MongoDB Part II: Working with Documents",
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
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2016), 83",
            linkName: "MongoDB In Action",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "\"db.collection.createIndex()\", ",
            endName: "",
            linkName: "https://docs.mongodb.com/v3.4/reference/method/db.collection.createIndex/",
            link: "https://docs.mongodb.com/v3.4/reference/method/db.collection.createIndex/"
        },
        {
            startName: "",
            endName: "., 90",
            linkName: "Banker",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "\"Atomicity and Transactions\", ",
            endName: "",
            linkName: "https://docs.mongodb.com/manual/tutorial/expire-data/",
            link: "https://docs.mongodb.com/manual/tutorial/expire-data/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});