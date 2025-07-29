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
                "value":" In my last discovery post on graph databases and Neo4j, I ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-6-2017-neo4j-create"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" created a graph",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" representing a map of Fairfield County, Connecticut.  I created nodes for all the towns/cities and edges between the settlements that shared borders.  This discovery adds to the graph and shows some of the challenges I faced along the way.  Let's dive in! ",
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
                "value":" First I populated the graph with some people (after all, a settlement needs citizens!). ",
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
                "value":" In my last discovery post on graph databases and Neo4j, I ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-6-2017-neo4j-create"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" created a graph",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" representing a map of Fairfield County, Connecticut.  I created nodes for all the towns/cities and edges between the settlements that shared borders.  This discovery adds to the graph and shows some of the challenges I faced along the way.  Let's dive in! ",
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
                "value":" First I populated the graph with some people (after all, a settlement needs citizens!). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"CREATE (aj:Person {name: 'Andy J.'}),\n    (tc:Person {name: 'Tom C.'}),\n    (js:Person {name: 'Joe S.'}),\n    (bf:Person {name: 'Ben F.'})\n",
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
                "value":" If I want to undo this ",
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
                "value":" statement, one option is to simply delete all the people from the graph: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (p:Person) DELETE p\n",
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
                "value":" However, maybe I just want specific people removed from the graph.  The first idea that came into to my head was to match on a certain name such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MATCH (p:Person {name: 'Andy J.'})",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". In this case I would delete all nodes with label ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":Person",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" where the property ",
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
                "value":" equals 'Andy J.'. You may see the potential issue here.  What if there are two people with the name 'Andy J'?  In that case Cypher deletes both of the vertices!  In a large graph that scenario is very likely. What I can do instead is delete a vertex by looking up its node id.  Each vertex and edge has a unique id, so if I delete a vertex by its id I know only one vertex will be removed.  Node ids are accessed with the Cypher ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"id()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (p:Person) WHERE id(p) = 62 DETACH DELETE p\n",
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
                "value":" This example searches for a node where the id equals 62 and deletes it.  The pair of keywords I haven't used before are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DETACH DELETE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In order to delete a node in Cypher you also have to delete its relationships, so ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DETACH DELETE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" removes both",
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
                "value":" If all four people vertices are back in the graph, I can create a relationship between them and the settlements they are citizens of: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (greenwich:Town {name: 'Greenwich'}),\n    (sherman:Town {name: 'Sherman'}),\n    (fairfield:Town {name: 'Fairfield'}),\n    (easton:Town {name: 'Easton'})\nCREATE (aj:Person {name: 'Andy J.'}),\n    (aj)-[:LIVES_IN]->(greenwich),\n    (tc:Person {name: 'Tom C.'}),\n    (tc)-[:LIVES_IN]->(fairfield),\n    (js:Person {name: 'Joe S.'}),\n    (js)-[:LIVES_IN]->(easton),\n    (bf:Person {name: 'Ben F.'}),\n    (bf)-[:LIVES_IN]->(sherman)\n",
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
                "value":" The settlements are now populated with people!  However, Fairfield County still seems a bit boring.  Let's populate it with the top rated pizza places in the county.  I created pizza vertices and gave them a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":LOCATED_IN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" relationship to a settlement: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"CREATE (stan:Pizza {name: 'Stanziatos Wood Fired Pizza', price: 2, rating: 4.5}),\n    (stan)-[:LOCATED_IN]->(:Settlement {name: 'Danbury'}),\n    (bw:Pizza {name: 'Brick + Wood', price: 2, rating: 4.5}),\n    (bw)-[:LOCATED_IN]->(:Settlement {name: 'Fairfield'}),\n    ...\n",
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
                "value":" When I first ran this code I really thought it would work!  However, instead of connecting the newly created pizza places to existing settlements, Cypher created new settlements as well!  Now there are duplicate settlements in the graph that need to be deleted.  The following query does the job",
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
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"MATCH (s:Settlement)\nWITH s.name as name, collect(s) as instances\nWHERE size(instances) > 1\nUNWIND tail(instances) as dups\nMATCH (dups)-[r:LOCATED_IN]-(pizza)\nDELETE r, dups, pizza\n",
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
                "value":" Let's walk through this.  First I queried the graph for all settlements.  Then I set up a table with two columns.  The first column contains the name of a settlement and the second column contains a list of all settlement vertices with that name. The first column is created with the statement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WITH s.name as name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WITH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause is used to manipulate data (in this case the settlement vertices) before its passed to the next line in the query",
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
                "value":". The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AS",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword creates an alias for a column. I created a list of all the settlement vertices with a given name with Cypher's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"collect()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  The entire second line of code in the sample above is basically an implicit ",
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
                "value":" statement (like those in SQL).  Cypher has no explicit ",
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
                "value":" syntax. ",
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
                "value":" Next, the line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WHERE size(instances) > 1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" filters the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instances",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" list down to those with multiple vertices.  The following line, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UNWIND tail(instances) as dups",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" transforms the list back into table rows",
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
                "value":". Finally we see if a table row (which is a settlement) has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LOCATED_IN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" relationship to a vertex with label ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":Pizza",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If so the settlement is duplicated data.  In the final line, I deleted the settlement, relationship, and pizza place from the graph.  The graph is successfully cleaned up! ",
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
                "value":" Let's again create pizza places and relate them to a settlement without creating duplicates: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"CREATE (p1:Pizza {name: 'Stanziatos Wood Fired Pizza', price: 2, rating: 4.5})\nWITH p1\nMATCH (s1:Settlement {name: 'Danbury'})\nMERGE (p1)-[:LOCATED_IN]->(s1)\n",
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
                "value":" First I created a pizza place and passed it to the ",
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
                "value":" statement via the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WITH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  This sequence uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WITH",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for variable passing without performing any manipulations.  Instead of creating a new settlement I used ",
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
                "value":" to find an existing one.  I then used ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MERGE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to create a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LOCATED_IN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" relationship between the settlement and the pizza place. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MERGE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" only creates a new relationship if one does not already exist.  If a relationship does not exist, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MERGE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" acts the same as ",
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
                "value":" Now the graph is complete with settlements, people, and places to eat.  One last important thing to mention is indexes.  In Neo4j indexes are used to speed up vertex lookup speeds",
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
                "value":". This is important when searching for a specific item in a graph, such as a person with the name Tom. ",
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
                "value":" Since settlements and pizza places are often queried by their names, I created indexes on those labels and properties like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Cypher"
        },
        "value":"CREATE INDEX ON :Settlement(name)\nCREATE INDEX ON :Pizza(name)\n",
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
                "value":" Now the graph database is ready to be queried.  The code used for this discovery can be found on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://\ngithub.com/AJarombek/jarombek-com-sources/blob/master/2017/11-Nov/11-12-Neo4j-Challenges/neo4j-additions.cql"
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

postName = "nov-12-2017-neo4j-challenges";
postDate = new Date('2017-11-12T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Challenges with Neo4j Graph Creation",
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
        },
        {
            name: "SQL",
            picture: "https://asset.jarombek.com/logos/sql.png",
            color: "sql"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"What's the Cypher script to delete a node by ID?\", September 20th, 2016, ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/28144751/whats-the-cypher-script-to-delete-a-node-by-id",
            link: "https://stackoverflow.com/questions/28144751/whats-the-cypher-script-to-delete-a-node-by-id"
        },
        {
            startName: "\"DETACH DELETE Neo4j 2.3.x/Cypher\", October 15th, 2015, ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/33139903/detach-delete-neo4j-2-3-x-cypher",
            link: "https://stackoverflow.com/questions/33139903/detach-delete-neo4j-2-3-x-cypher"
        },
        {
            startName: "\"How to delete duplicate nodes and their relationships in neo4j with cypher?\", ",
            endName: "",
            linkName: "https://gist.github.com/jruts/fe782ff2531d509784a24b655ad8ae76",
            link: "https://gist.github.com/jruts/fe782ff2531d509784a24b655ad8ae76"
        },
        {
            startName: "\"WITH\", ",
            endName: "",
            linkName: "https://neo4j.com/docs/developer-manual/current/cypher/clauses/with/",
            link: "https://neo4j.com/docs/developer-manual/current/cypher/clauses/with/"
        },
        {
            startName: "\"UNWIND\", ",
            endName: "",
            linkName: "https://neo4j.com/docs/developer-manual/current/cypher/clauses/unwind/",
            link: "https://neo4j.com/docs/developer-manual/current/cypher/clauses/unwind/"
        },
        {
            startName: "Ian Robinson, Jim Webber & Emil Eifrem, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 47",
            linkName: "Graph Databases",
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