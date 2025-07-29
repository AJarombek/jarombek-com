/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/5/2018
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
                "value":" Over the last year or so I've heard whispers about a technology called GraphQL.  GraphQL is marketed as an alternative for the REST API which so many of our applications use these days (all my websites/mobile apps use different REST APIs).  I decided that I'd heard enough about GraphQL and it was time to try it out and form my own opinions. ",
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
                "value":" I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/\n08-Aug/8-5-graphql"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prototype GraphQL API",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in JavaScript.  There was a bit more development work  for the GraphQL prototype then I anticipated, so I am splitting up my GraphQL research across two separate discovery posts.  The post you are reading now serves as an introduction to the GraphQL ecosystem and compares it to the humble REST API.  The follow up post will look at my work developing a GraphQL prototype. ",
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
                "value":" Over the last year or so I've heard whispers about a technology called GraphQL.  GraphQL is marketed as an alternative for the REST API which so many of our applications use these days (all my websites/mobile apps use different REST APIs).  I decided that I'd heard enough about GraphQL and it was time to try it out and form my own opinions. ",
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
                "value":" I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/\n08-Aug/8-5-graphql"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prototype GraphQL API",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in JavaScript.  There was a bit more development work  for the GraphQL prototype then I anticipated, so I am splitting up my GraphQL research across two separate discovery posts.  The post you are reading now serves as an introduction to the GraphQL ecosystem and compares it to the humble REST API.  The follow up post will look at my work developing a GraphQL prototype. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What Made the REST API Great?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What Made the REST API Great?",
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
                "value":" GraphQL was created to fix certain flaws of the REST API.  However, there is no denying the greatness of the REST API in software development.  Almost all production applications use or expose a REST API these days as a way to transfer resources across different services. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"REST API"
        },
        "value":null,
        "children":[
            {
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" The REST API definition can easily be broken down into its two components, REST (representational state transfer) and API (application programming interface). ",
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
                        "value":" An API is an exposed set of methods or processes that can be communicated with from an outside application.  For example, in object oriented programming a class has public methods that other outside objects can call to perform some logic.  These exposed public methods make up the classes API. ",
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
                        "value":" REST is an architectural style that usually uses HTTP (Hypertext Transfer Protocol) as its underlying data transfer mechanism",
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
                        "value":".  The REST architecture is used to define APIs with the use of endpoints (URIs).    This means that a REST API will expose a bunch of URIs that outside applications can call over HTTP.  For example, a RESTful URI called ",
                        "children":null
                    },
                    {
                        "el":"strong",
                        "attributes":null,
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"http://api.cats.com/bengal",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" may return data on bengal cats. ",
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
                        "value":" Most REST APIs are simply CRUD applications, which expose create, read, update, and delete operations through different HTTP verbs",
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
                        "value":".  The HTTP verbs for CRUD are ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"GET",
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
                        "value":"POST",
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
                        "value":"PUT",
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
                        "value":"DELETE",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" respectively.  A HTTP ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"GET",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" request is made every time you type a URL into a web browser. ",
                        "children":null
                    }
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
                "value":" The great thing about REST APIs is their simplicity.  Even people without technical knowledge of software can easily understand how they work.  In the internet age nearly everyone uses HTTP on a daily basis, making REST APIs an easy learning curve. ",
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
                "value":" REST APIs are also very simple and predictable thanks to the HTTP protocols stateless nature.  This allows for many of the HTTP verbs to be idempotent. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Idempotent"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" An operation is idempotent when it can be called multiple times and always return the same result as the initial invocation",
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
                "value":".  An idempotent operation also should not change the state of the application beyond the initial call.  Idempotence enables predictable results.  For example, an HTTP ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GET",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" call is idempotent as the returned value is always the same and no data in the application will change because of the request. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What GraphQL Tries to Solve"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What GraphQL Tries to Solve",
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
                "value":" While REST APIs are a great software architecture and work extremely well in most applications, they do have some drawbacks as an application expands.  The list of HTTP endpoints in a REST API can quickly get very large and the URLs can get extremely long.  Lots of documentation is needed to cover all the endpoints.  Often an application that consumes a REST API will have to make multiple endpoint calls to get all the data it needs. ",
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
                "value":" There is also an issue with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GET",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" HTTP method as a means of querying data.  While many HTTP verbs allow for a request body to send an application necessary data, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GET",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not allow a request body.  All your querying information needs to be in the URL itself, which can quickly get out of control.  A hack around for this problem is to use an HTTP ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"POST",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" request for querying instead of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GET",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" - allowing the placement of query information in the request body.  Unfortunately this hack breaks the simplicity and elegance of the CRUD model. ",
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
                "value":" GraphQL is a query language for your API.  In GraphQL you define a schema for your API to follow along with all the data types it handles",
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
                "value":".  Then in the programming language of your choice you create functions to help GraphQL return the proper data for each query. ",
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
                "value":" The big draw of GraphQL comes from the APIs client perspective.  In order to query or manipulate data in an API, the client simply sends GraphQL the structure of the data it wants and the rest is handled by the API application.  Querying GraphQL is a single call, while querying a REST API may require multiple calls to get the same data. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"GraphQL and REST Comparison"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"GraphQL and REST Comparison",
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
                "value":" I think the differences between GraphQL and REST are better explained with an example.  Let's take a website that handles running logs for cross country runners.  The application has two layers - the front end code that defines the user interface and the back end code consisting of an API and a database.  We have two choices for the backend API - REST and GraphQL. ",
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
                "value":" As an example, let's say a user navigated to a runners profile page.  On this page we want to display the runners name, their weekly mileage, and their last three runs. ",
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
                "value":" First up is the REST API.  Depending on how the API was set up, all this data may come from multiple different endpoints: ",
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
                "el":"#text",
                "attributes":null,
                "value":"   ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/8-5-18-restapi.png"
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
                "value":" While building the application, setup with the REST API was a breeze and extremely easy for all the developers and business folks alike.  However, note some of the drawbacks here.  First off the data was retrieved in three HTTP calls instead of one.  Network calls are often the slowest part of an application, so reducing them is often a solid action plan.  Also these endpoints gave back some excess information that the client doesn't need in its current state.  The frontend profile page doesn't need to know the runners mileage last week and only requires three runs instead of the provided five.  The structure of the data received back from the endpoint is static. ",
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
                "value":" Next up is GraphQL: ",
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
                "el":"#text",
                "attributes":null,
                "value":"   ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/8-5-18-graphql.png"
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
                "value":" Note that while querying GraphQL the client explicitly tells the backend API what data it wants, and GraphQL returns nothing more.  This makes GraphQL extremely flexible compared to REST.  Also, only one API call was made, reducing the time spent on network calls.  Setting up GraphQL for the application was more complex and the non-technical folks don't exactly understand how it works, but the end result is quite elegant. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Wrapping Up (For Now)"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Wrapping Up (For Now)",
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
                "value":" No GraphQL code has been shown yet, but hopefully you have a better understanding of the benefits and drawbacks of GraphQL.  The next post in the series will look at the GraphQL language and how to set up a GraphQL API in JavaScript.  If you want a head start, the code for the GraphQL API is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/\n08-Aug/8-5-graphql"
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

postName = "aug-5-2018-graphql-pt1";
postDate = new Date('2018-08-05T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "GraphQL Part I - A High Level View",
    description: `I decided that I'd heard enough about GraphQL and it was time to try it out 
        and form my own opinions.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "GraphQL",
            picture: "https://asset.jarombek.com/logos/graphql.png",
            color: "graphql"
        },
        {
            name: "REST"
        },
        {
            name: "API"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Representational state transfer\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Representational_state_transfer",
            link: "https://en.wikipedia.org/wiki/Representational_state_transfer"
        },
        {
            startName: "Jim Webber, Savas Parastatidis & Ian Robinson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2010), 20",
            linkName: "REST in Practice: Hypermedia and Systems Architecture",
            link: "http://shop.oreilly.com/product/9780596805838.do"
        },
        {
            startName: "\"Idempotence: Computer science meaning\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Idempotence#Computer_science_meaning",
            link: "https://en.wikipedia.org/wiki/Idempotence#Computer_science_meaning"
        },
        {
            startName: "\"Introduction to GraphQL\", ",
            endName: "",
            linkName: "https://graphql.org/learn/",
            link: "https://graphql.org/learn/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});