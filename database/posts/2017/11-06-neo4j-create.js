/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/13/2018
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
                "value":" Lately I've read about graph databases and their place in the NoSQL data storage universe. The graph database I've worked with is Neo4j, which is fun and easy to get started with. I found the user interface very enjoyable for viewing graphs and executing queries. I highly recommend it if you need a graph database solution. ",
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
                "value":" Graph databases largest draw is related data storage and the speed at which you can query related data points (or in graph terms, nodes/vertices). Relationships are first class citizens, which allows related data queries to be executed by traversing relationships themselves.  This is contrasted with a typical relational database where you have to find relationships through foreign keys or combine two tables with a very slow SQL ",
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
                "value":" operation",
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
                "value":". The same slow query in a RDBMS (Relational DataBase Management System) is extremely quick in a graph database. ",
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
                "value":" Lately I've read about graph databases and their place in the NoSQL data storage universe. The graph database I've worked with is Neo4j, which is fun and easy to get started with. I found the user interface very enjoyable for viewing graphs and executing queries. I highly recommend it if you need a graph database solution. ",
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
                "value":" Graph databases largest draw is related data storage and the speed at which you can query related data points (or in graph terms, nodes/vertices). Relationships are first class citizens, which allows related data queries to be executed by traversing relationships themselves.  This is contrasted with a typical relational database where you have to find relationships through foreign keys or combine two tables with a very slow SQL ",
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
                "value":" operation",
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
                "value":". The same slow query in a RDBMS (Relational DataBase Management System) is extremely quick in a graph database. ",
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
                "value":" One of the first graphs I made in Neo4j represented the county I grew up in - ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://i.pinimg.com/736x/32/10/06/3210060e2e11b84a497e7b56dac7fbb8--connecticut-ancestry.jpg"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Fairfield County CT",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  My first task was to create a vertex representing a state - in this case Connecticut.  In Cypher (the query language used by Neo4j) that was easy! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"CREATE (ct:State {name: 'Connecticut'}) RETURN ct\n",
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
                "value":"CREATE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement builds a vertex and passes it a label ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":State",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a property ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" . The label is used for grouping - in this case all states will have the label ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":State",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Properties can give vertices names along with supplying additional key->value information. ",
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
                "value":" Building multiple vertices at once can be done from a single ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CREATE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  statement. I utilize this to populate the counties towns and cities: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"CREATE (:City {name: 'Bridgeport'}),\n  (:City {name: 'Danbury'}),\n  ...\n\nCREATE (:Town {name: 'Bethel'}),\n  (:Town {name: 'Brookfield'}),\n  ...\n",
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
                "value":" Before I made any relationships, I wanted to simplify things and group together cities and towns under one common label. After all towns and cities are both considered settlements. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (s) WHERE s:City OR s:Town SET s:Settlement\n",
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
                "value":" I introduced some new keywords here, most importantly ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MATCH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":",  which queries the database based on some ASCII Art I pass it. The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(s)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token represents a node in the database that I assign to variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"s",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This query can be read as \"for each vertex in the database that is a city or town, give the vertex a new label called Settlement\". In Neo4j vertices can have multiple labels, so the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SET",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operation will not override old labels. ",
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
                "value":" Now its time for the fun part: relationships. Lets create a relationship between all the settlements and the state of Connecticut: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (ct:State), (s:Settlement) MERGE (ct)<-[:IN]-(s)\n",
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
                "value":" As you likely guessed, the ASCII art for relationships is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<-[:IN]-",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" where the arrow shows the direction of the relationship. Relationships are given a label, in this case ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":IN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" .  Relationships can also have properties just like a vertex. This is what I meant by 'relationships are first class entities' - they are treated and queried just like a vertex! First class relationships are extremely powerful. ",
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
                "value":" You may have noticed the query matches multiple vertices. I looked for all vertices where the label is State or Settlement. Then I created the relationship \"all settlements are in all the states\". Since the only state in the database is Connecticut, all settlements are given an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":IN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" relationship to Connecticut. ",
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
                "value":" For the final step I created relationships between all the neighboring towns. The query is long so I'll just show a snippet (the full code for all queries is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/\nmaster/2017/11-Nov/11-6-Neo4j-Create/neo4j-create.cql"
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
                "value":"): ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (greenwich:Settlement {name: 'Greenwich'}),\n  (stamford:Settlement {name: 'Stamford'}),\n  (newcannan:Settlement {name: 'New Cannan'}),\n  (darien:Settlement {name: 'Darien'}),\n  ...\nCREATE (greenwich)-[:NEIGHBORS_OF]->(stamford),\n  (stamford)-[:NEIGHBORS_OF]->(newcannan),\n  (stamford)-[:NEIGHBORS_OF]->(darien),\n  ...\n",
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
                "value":" This code creates neighbor relationships between towns that share borders. One thing that I questioned when writing this code is 'why cant there be bi-directional relationships?' It turns out Neo4j does not support bi-directional relationships at this time. This is because traversing a relationship takes the same amount of time (O(1)) regardless of the direction it is pointing",
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
                "value":". In a case like this where the relationships should be bi-directional, you can just ignore the arrow in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MATCH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" queries. Below you can see the output of the settlements in the Neo4j user interface: ",
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
                    "src":"https://asset.jarombek.com/posts/11-6-17-FairfieldGraphImage.png"
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
                "value":" I will look further at Neo4j and build off this graph in future discoveries. I hope this post helps show how simple it is to build a graph database! ",
                "children":null
            }
        ]
    }
];

postName = "nov-6-2017-neo4j-create";
postDate = new Date('2017-11-06T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating a Simple Geographical Map with Neo4j and Cypher",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Neo4j",
            picture: "https://asset.jarombek.com/logos/neo4j.png",
            color: "neo4j"
        },
        {
            name: "Graph Databases"
        },
        {
            name: "Cypher Query Language"
        },
        {
            name: "NoSQL"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Ian Robinson, Jim Webber & Emil Eifrem, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 6",
            linkName: "Graph Databases",
            link: "http://shop.oreilly.com/product/0636920028246.do"
        },
        {
            startName: "",
            endName: "., 152",
            linkName: "Ibid",
            link: "http://shop.oreilly.com/product/0636920028246.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});