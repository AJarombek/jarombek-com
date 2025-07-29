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
                "value":" For more complex queries and data manipulation in MongoDB, we can use the aggregation framework. First introduced in MongoDB V2.2 (the current version as of this writing is V3.6) the aggregation framework creates a pipeline of operations to perform on documents",
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
                "value":".  Pipelines support operations such as sorting, filtering, and grouping documents similar to a SQL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GROUP BY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  Pipelines also enable grouped data manipulation, creating entirely new collections in the process.  I used the tree database from my ",
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
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-16-2017-mongodb-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"second",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" MongoDB discoveries to explore the aggregation framework. ",
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
                "value":" If you remember from my previous posts, each tree has a type and a grade which specifies the height of the tree.  One piece of information I'm curious about is the total number of trees in each grade with type frazier fir.  The aggregation function to answer my question is written like so: ",
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
                "value":" For more complex queries and data manipulation in MongoDB, we can use the aggregation framework. First introduced in MongoDB V2.2 (the current version as of this writing is V3.6) the aggregation framework creates a pipeline of operations to perform on documents",
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
                "value":".  Pipelines support operations such as sorting, filtering, and grouping documents similar to a SQL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GROUP BY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  Pipelines also enable grouped data manipulation, creating entirely new collections in the process.  I used the tree database from my ",
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
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-16-2017-mongodb-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"second",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" MongoDB discoveries to explore the aggregation framework. ",
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
                "value":" If you remember from my previous posts, each tree has a type and a grade which specifies the height of the tree.  One piece of information I'm curious about is the total number of trees in each grade with type frazier fir.  The aggregation function to answer my question is written like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.aggregate([\n    {$match: {type: 'frazier'}},\n    {$group: {\n        _id: '$grade',\n        count: {$sum:1}\n    }},\n    {$sort: {count: -1}}\n])\n\n/* Result */\n{ \"_id\" : \"9-10ft\", \"count\" : 71 }\n{ \"_id\" : \"10+ft\", \"count\" : 70 }\n{ \"_id\" : \"6-7ft\", \"count\" : 68 }\n{ \"_id\" : \"7-8ft\", \"count\" : 67 }\n{ \"_id\" : \"5-6ft\", \"count\" : 63 }\n{ \"_id\" : \"3-4ft\", \"count\" : 61 }\n{ \"_id\" : \"8-9ft\", \"count\" : 61 }\n{ \"_id\" : \"4-5ft\", \"count\" : 58 }\n",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aggregate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function takes an array of pipeline steps.  The first step matches on type frazier.  The seconds step groups all matched documents by grade and gets the number of documents in each group. The final step sorts each group by the count.  These three steps are performed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$match",
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
                "value":"$group",
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
                "value":"$sort",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operators respectively. ",
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
                "value":" Grouping is not restricted to a single property.  To group by multiple properties, each property is added to the ",
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
                "value":" object.  In the next example I grouped the aggregate by type and grade.  Also since I matched on the entire collection, I excluded the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$match",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" pipeline step. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.aggregate([\n    {$group: {\n        _id: {type: '$type', grade: '$grade'},\n        count: {$sum:1}\n    }},\n    {$sort: {count: -1}}\n])\n",
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
                "value":" Multiple ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$group",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operations can exist in an aggregation pipeline.  In the next pipeline I get all the tree statistics - count, expenses, revenue, and profits.  Since I don't want the result of this aggregation to go to waste, I saved its result to a new collection with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$out",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator.  I simply specified the name of the collection to save the output to (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"treestat",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  I also used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$project",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator to structure and pick the properties for the output collection.  All properties specified in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$project",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" step are passed to the next step in the pipeline. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.tree.aggregate([\n    {$group: {\n        _id: {\n            type: '$type',\n            grade: '$grade',\n            source: '$source_price',\n            sell: '$sell_price'\n        },\n        count: {$sum:1},\n        expenses: {$sum: '$source_price'},\n        revenue: {$sum: '$sell_price'}\n    }},\n    {$group: {\n        _id: {\n            type: '$_id.type',\n            grade: '$_id.grade',\n            source: '$_id.source',\n            sell: '$_id.sell',\n            count: '$count',\n            expenses: '$expenses',\n            revenue: '$revenue'\n        },\n        profit: {$sum: {$subtract: ['$revenue', '$expenses']}}\n    }},\n    {$sort: {profit: -1}},\n    {$project: {\n        _id: {\n            type: '$_id.type',\n            grade: '$_id.grade'\n        },\n        count: '$_id.count',\n        expenses: '$_id.expenses',\n        revenue: '$_id.revenue',\n        profit: '$profit'\n    }},\n    {$out: 'treestat'}\n])\n",
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
                "value":" One important thing to note about the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$out",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator is it completely replaces the existing collection with the result of the aggregation",
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
                "value":".  This can accidentally wipe out an entire collection. Be careful! ",
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
                "value":" Finally I got the tree count, expenses, revenue, and profits for all trees using the newly created ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"treestat",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" collection: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.treestat.aggregate([\n    {$group: {\n        _id: 'all_trees',\n        total_trees: {$sum: '$count'},\n        total_expenses: {$sum: '$expenses'},\n        total_revenue: {$sum: '$revenue'},\n        total_profit: {$sum: '$profit'}\n    }}\n])\n\n/* Result */\n{\n    \"_id\" : \"all_trees\",\n    \"total_trees\" : 1001,\n    \"total_expenses\" : 10220.5,\n    \"total_revenue\" : 62245,\n    \"total_profit\" : 52024.5\n}\n",
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
                "value":" The aggregation framework is very powerful.  You can even use it to create a pseudo ",
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
                "value":" operation between collections",
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
                "value":"!  The source code for this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2017/12-Dec/12-27-MongoDB-Pt4"
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

postName = "dec-27-2017-mongodb-pt4";
postDate = new Date('2017-12-27T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Learning MongoDB Part IV: Aggregation Framework",
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
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2016), 121",
            linkName: "MongoDB In Action",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 140",
            linkName: "Ibid",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 129",
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