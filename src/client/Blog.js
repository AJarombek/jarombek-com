/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';
import CodeSnippet from './CodeSnippet';
import moment from 'moment';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    title: "Creating a Simple Geographical Map with Neo4j and Cypher",
                    date: moment('2017-11-06'),
                    type: "Discovery",
                    tags: [
                        {
                            name: "Neo4j",
                            picture: "./assets/neo4j.png",
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
                    content:
                        <div>
                            <p>
                                Lately I have been reading up on graph databases and their place in the NoSQL data storage universe.
                                The graph database I've worked with is Neo4j, which is very easy to get set up.  I've found the user interface
                                to view graphs and type in queries to be very enjoyable and I highly recommend it if you need a graph database solution.
                            </p>
                            <p>
                                Without going into too much detail, the largest draw to graph databases is storing relationships between data and the
                                speed at which you can query related data points (or in graph terms nodes/vertices). Relationships are first class citizens
                                in graph databases which allows you to query related data by traversing the relationship itself.  This is contrasted with a
                                typical relational database solution where you have to find relationships through foreign keys or combine two tables of data
                                with a very slow SQL JOIN operation<sup>1</sup>.  Our same slow query in a RDBMS (Relational DataBase Management System) is extremely quick
                                in a graph database.
                            </p>
                            <p>
                                One of the first graphs I made in Neo4j represented the county I grew up in -
                                <a href="https://i.pinimg.com/736x/32/10/06/3210060e2e11b84a497e7b56dac7fbb8--connecticut-ancestry.jpg">Fairfield County CT</a>.
                                The first task on my list was to create a vertex to represent a state - in this case Connecticut.  In Cypher (the query language used by Neo4j)
                                that is easy!
                            </p>
                            <CodeSnippet>
                                {`CREATE (ct:State {name: 'Connecticut'}) RETURN ct`}
                            </CodeSnippet>
                            <p>
                                We use the <code className="jarombek-inline-code">CREATE</code> statement to build a vertex and pass it a label <code className="jarombek-inline-code">:State</code> and a property <code className="jarombek-inline-code">name</code>.  The label
                                is used for grouping, in this case all states will have the label <code className="jarombek-inline-code">:State</code>. You can also name the vertex along with supply additional
                                key->value information in the vertices properties.
                            </p>
                            <p>
                                You can also create multiple vertices from a single <code className="jarombek-inline-code">CREATE</code> statement.  I will utilize this to populate the counties towns and cities:
                            </p>
                            <figure>
                        <pre className="line-numbers">
                            <code className="language-clike" title="Cypher">{`CREATE (:City {name: 'Bridgeport'}),
    (:City {name: 'Danbury'}),
    ...
    
CREATE (:Town {name: 'Bethel'}),
    (:Town {name: 'Brookfield'}),
    ...`}</code>
                        </pre>
                            </figure>
                            <p>
                                Before I create any relationships, I want to make life easier and group together cities and towns under one common label.  After all they are
                                both considered settlements.
                            </p>
                            <figure>
                        <pre className="line-numbers">
                            <code className="language-clike" title="Cypher">{`MATCH (s) WHERE s:City OR s:Town SET s:Settlement`}</code>
                        </pre>
                            </figure>
                            <p>
                                I introduced some new keywords here. Most important of them is <code className="jarombek-inline-code">MATCH</code> which queries the database based on some ASCII Art that I pass it.
                                The <code className="jarombek-inline-code">(...)</code> token represents a node in the database which I assign to variable <code className="jarombek-inline-code">s</code>.  So this query says "for each vertex in the
                                database that is a city or town set a new label called Settlement".  In Neo4j a vertex can have multuple labels so this <code className="jarombek-inline-code">SET</code> operation will
                                not override the old labels.
                            </p>
                            <p>
                                Now it is time for the fun part: relationships.  Lets create a relationship between all the settlements and the state of Connecticut:
                            </p>
                            <figure>
                        <pre className="line-numbers">
                            <code className="language-clike" title="Cypher">{`MATCH (ct:State), (s:Settlement) MERGE (ct)<-[:IN]-(s)`}</code>
                        </pre>
                            </figure>
                            <p>
                                As you likely guessed, the ASCII art for a relationship is <code className="jarombek-inline-code">{`<-[:IN]-`}</code> where the arrow shows the direction of the relationship.  We also give the
                                relationship a label, in this case <code className="jarombek-inline-code">:IN</code>.  We could also give a relationship properties just like you would a vertex.  This is what I meant by 'relationships are
                                first class entities' - they are treated and can be queried just like a vertex!  This is extremely powerful.
                            </p>
                            <p>
                                You may have noticied that in this query we match for multiple vertices.  In this case, we want all the vertices where the label is State or Settlement.  Then
                                we create the relationship "settlement is in state".  Since the only state in the database is Connecticut, this simple query will give us the intended result.
                            </p>
                            <p>
                                For the final step of this graph we want to create relationships between all the neighboring towns.  This is a long query so I'll just show a snippet (the full code
                                for this and the other snippets can be found <a href="https://github.com/AJarombek/jarombek-com-submittions/blob/master/Discoveries/2017/11-Nov/11-6-Neo4j-Create/Source/neo4j-create.cql">HERE</a>):
                            </p>
                            <figure>
                        <pre className="line-numbers">
                            <code className="language-clike" title="Cypher">{`MATCH (greenwich:Settlement {name: 'Greenwich'}),
    (stamford:Settlement {name: 'Stamford'}),
    (newcannan:Settlement {name: 'New Cannan'}),
    (darien:Settlement {name: 'Darien'}),
    ...
CREATE (greenwich)-[:NEIGHBORS_OF]->(stamford),
    (stamford)-[:NEIGHBORS_OF]->(newcannan),
    (stamford)-[:NEIGHBORS_OF]->(darien),
    ...`}</code>
                        </pre>
                            </figure>
                            <p>
                                In this code we first want to give variables for all the settlement nodes by their name.  Then we want to create neighbors relationships between towns that
                                share borders.  One thing that I questioned when writing this code is 'why cant their be bi-directional relationships?'  It turns out at the time of this writing
                                Neo4j does not support  bi-directional relationships.  This is because traversing a realtionship takes the same amount of time (O(1)) regardless of the direction it is
                                pointing<sup>2</sup>.  In a case like this one where we will treat the relationships as bi-directional, you can just ignore the arrow in <code className="jarombek-inline-code">MATCH</code> queries.  Below you
                                can see the output of the settlements in the Neo4j user interface:
                            </p>
                            <figure>
                                <img src="./assets/jarombek.png" />
                            </figure>
                            <p>
                                I will look further at Neo4j and build off this graph in future discoveries.  I hope this shows you just how simple it is to build a graph database!
                            </p>
                        </div>,
                    sources: []
                }
            ]
        };
    }

    render() {
        const {blogs} = this.state;
        return (
            <WebsiteTemplate>
                <div className="jarombek-blog-background">
                    <div className="jarombek-blog">
                        <BlogList blogList={blogs} />
                    </div>
                </div>
            </WebsiteTemplate>
        );
    }
}

export default Blog;