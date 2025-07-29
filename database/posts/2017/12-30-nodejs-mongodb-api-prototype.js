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
                "value":" Most of my discoveries lately have been about JavaScript.   This includes learning the new ES6 syntax and features along with all the quirks that come with the JavaScript language.  Recently I have been exploring the MongoDB database and Node.js environment.  MongoDB is a NoSQL database that allows you to store JSON formatted documents in a schema-less model.  I wrote four discovery posts on MongoDB starting with the ",
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
                        "value":" basic features of the database",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" .  While I haven't written any discoveries with Node.js as the main focus, I have experimented with it when testing out ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-10-2017-es6-modules-babel"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ES6 modules with Babel",
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
                    "href":"https://jarombek.com/blog/nov-26-2017-js-async-function"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Async Functions",
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" All of this knowledge buildup is for a personal website project that I have planned (and where this blog will call home!).  Before I start development on the website directly, I will create a series of prototypes to get a feel for some of the technologies I will use in my websites stack.  With these prototypes I can make sure the technology I choose is a good fit for the full project.  Also I can use them as templates to complete future discoveries!  In general if you have the time to build prototypes with technologies you want to use in a production project it is a great idea! ",
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
                "value":" Most of my discoveries lately have been about JavaScript.   This includes learning the new ES6 syntax and features along with all the quirks that come with the JavaScript language.  Recently I have been exploring the MongoDB database and Node.js environment.  MongoDB is a NoSQL database that allows you to store JSON formatted documents in a schema-less model.  I wrote four discovery posts on MongoDB starting with the ",
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
                        "value":" basic features of the database",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" .  While I haven't written any discoveries with Node.js as the main focus, I have experimented with it when testing out ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-10-2017-es6-modules-babel"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ES6 modules with Babel",
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
                    "href":"https://jarombek.com/blog/nov-26-2017-js-async-function"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Async Functions",
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" All of this knowledge buildup is for a personal website project that I have planned (and where this blog will call home!).  Before I start development on the website directly, I will create a series of prototypes to get a feel for some of the technologies I will use in my websites stack.  With these prototypes I can make sure the technology I choose is a good fit for the full project.  Also I can use them as templates to complete future discoveries!  In general if you have the time to build prototypes with technologies you want to use in a production project it is a great idea! ",
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
                "value":" My planned production web stack will be either MEAN (MongoDB, Express, ",
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
                        "value":"Angular",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", Node.js) or MERN (MongoDB, Express, ",
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
                        "value":"React.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", Node.js).  Both of these web stacks share three technologies  - ",
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
                        "value":"MongoDB, Express,",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Node.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I used all three of these technologies to build this prototype! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Prototype Structure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Prototype Structure",
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
                "value":" The prototype is a REST API that lets users look at songs and artists.  They can also comment on songs. MongoDB stores this information in a database called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"music_api",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Databases in MongoDB are simply namespaces, which is much different than their Relational Database equivalents.  In a RDBMS you need a username and password among other items to connect to a certain database.  MongoDB does not have this requirement. ",
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
                "value":" The data is then stored in collections of documents including songs, artists, and end users. ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"mongo-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/12-30-17-mongodb.png"
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
                "value":" The Node.js run-time environment and Express web application framework then expose a REST API to users so they can query, create, update, and delete items in the database (all CRUD operations). ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"restapi-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/12-30-17-restapi.png"
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
                "value":" For the prototype most of the functionality surrounds viewing and manipulating songs, however in a full application these uses would be expanded.  This could include creating and updating users, rating songs, user-to-user interactivity, etc.  Now let's look at some insteresting aspects of the prototype and certain challenges that I faced while creating it. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Using Mongoose"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Using Mongoose",
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
                "value":" For interacting with the MongoDB database from Node.js I chose to use a module called Mongoose.  Mongoose allows you to model database JSON objects and perform all MongoDB queries, inserts, and updates.  With MongoDB you don't really need to use a ORM (Object Relational Mapping) framework since all the data is already in JSON form which any programming language can deal with.  However, Mongoose gives us some additional capabilities which make it desirable. ",
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
                "value":" First off Mongoose allows you to set strict schema rules for your MongoDB objects.  As previously mentioned ",
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
                        "value":"MongoDB is schema-less",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so this stricter model can help restrict what exactly a user can place in a document.  You can also create nested schemas for complex JSON documents.  For example, my song collection schema contains a nested schema for a list of comments. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const Schema = mongoose.Schema;\n\nconst SongSchema = new Schema({\n    title: {\n        type: String,\n        trim: true,\n        required: true\n    },\n    album: {\n        type: String,\n        trim: true\n    },\n    artist: {\n        type: String,\n        trim: true,\n        required: true\n    },\n        artist_id: Schema.Types.ObjectId,\n        type: {\n        type: String,\n        enum: ['a', 'j', 'aj']\n    },\n    release_date: {\n        type: Date,\n        default: Date.now()\n    },\n    best_lyric: String,\n    comments: [{\n        type: CommentSchema\n    }]\n}, {usePushEach: true});\n",
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
                "value":" Each ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Schema()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor function takes a JSON object that represents all the properties of the MongoDB document.  You can also add additional validations, such as making certain fields required (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"required: true",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") or having a default value (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"default: Date.now()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":")",
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
                "value":".  When a user uploads a JSON object to a schema and tries updating the database, only the properties seen in the schema will be persisted to MongoDB. ",
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
                "value":" Also there is a comments property which takes an array of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CommentSchema",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CommentSchema",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be defined similarly to how I implemented ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SongSchema",
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
        "value":"const CommentSchema = new Schema({\n    username: String,\n    user_id: Schema.Types.ObjectId,\n    date: {\n        type: Date,\n        default: Date.now()\n    },\n    content: {\n        type: String,\n        trim: true\n    }\n}, {usePushEach: true, _id : false});\n",
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
                "value":" Another powerful feature of Mongoose is we can define database indexes directly on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Schema",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object.  With advanced features such as this, Mongoose has transformed into something much more powerful than a ORM.  With Mongoose I never used the MongoDB CLI since everything I needed could be performed through Mongoose.  Here is an index I made on the ",
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
                "value":" property in the artist schema. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"ArtistSchema.index({name: 1});\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Switching to Promises"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Switching to Promises",
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
                "value":" Mongoose allows you to perform any query, update, insert, or delete operation on a Schema.  By default Mongoose uses callbacks to perform these operations.  We want to avoid callbacks as they become ugly and hard to read once nested database calls are made (commonly known as callback hell). Luckily Mongoose allows us to use ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-21-2017-js-promises"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ES6 Promises",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instead",
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
                "value":".  One of the first things I did when creating my API calls was replace all the callbacks with Promises.  Here is some code that performs a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"find",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operation on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Song",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" schema and then returns it as a HTTP response using a promise. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"Song.find().exec()\n    .then((songs) => {\n        res.format({\n            'application/json': () => {\n                res.json(songs);\n            },\n            'application/xml': () => {\n                res.render('xml/songs', {songs: songs});\n            }\n        });\n    })\n    .catch((err) => {\n        console.error(err);\n        res.status(500).send(err);\n    });\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Using EJS to Return XML"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Using EJS to Return XML",
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
                "value":" You may have noticed in the last code sample the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"res.format()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function which returns the song data as an HTTP response.  This function also returns either JSON or XML depending on the MIME type specified in the HTTP requests ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Accept",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" header.  Normally I don't think the amount of development work needed to return both notations would be worth it but Express made it so easy to implement",
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
                "value":"! ",
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
                "value":" There are two ways to implement the conversion to XML.  One option is to perform it in JavaScript itself",
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
        "value":"'application/xml': () => {\n    res.write('<songs>\\n');\n\n    songs.forEach((song) => {\n        let comments = \"\";\n        song.comments.forEach((comment) => {\n            comments = `\n                ${comments}\n                <comment>\n                    <username>${comment.username}</username>\n                    <date>${comment.date}</date>\n                    <content>${comment.content}</content>\n                </comment>\n            `;\n        });\n\n        res.write(`\n            <entry>\n                <title>${song.title}</title>\n                <artist>${song.artist}</artist>\n                <album>${song.album}</album>\n                <type>${song.type}</type>\n                <release_date>${song.release_date}</release_date>\n                <best_lyric>${song.best_lyric}</best_lyric>\n                <comments>${comments}</comments>\n            </entry>\n        `);\n    });\n    res.end('</songs>');\n}\n",
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
                "value":" This is a bit messy as you are mixing JavaScript and a markup language together.  A more elegant solution uses a tempting language to generate the XML.  The template language I used is EJS (Embedded JavaScript Templating) which mixes JavaScript with HTML similarly to JSP for Java or PHP (which I used in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saintsxctf.com website",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":")",
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
                "value":".  I used this template to create the markup on the server before sending it to the client. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"EJS"
        },
        "value":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<songs>\n    <% for (var i = 0; i < songs.length; i++) { %>\n        <song>\n            <_id><%= songs[i]._id %></_id>\n            <title><%= songs[i].title %></title>\n            <artist><%= songs[i].artist %></artist>\n            <album><%= songs[i].album %></album>\n            <type><%= songs[i].type %></type>\n            <release_date><%= songs[i].release_date %></release_date>\n            <best_lyric><%= songs[i].best_lyric %></best_lyric>\n            <comments>\n                <% for (var j = 0; j < songs[i].comments.length; j++) { %>\n                    <comment>\n                        <username><%= songs[i].comments[j].username %></username>\n                        <date><%= songs[i].comments[j].date %></date>\n                        <content><%= songs[i].comments[j].content %></content>\n                    </comment>\n                <% } %>\n            </comments>\n        </song>\n    <% } %>\n</songs>\n",
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
                "value":" One drawback of this approach is that all the JavaScript code I wrote in the EJS template was in ES5. Babel is unable to transpile EJS so if you write ES6 all browsers must be ES6 compatible.  Therefore I settled for ES5 just to be safe.  Here you can see the XML result in postman: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"xmlresponse-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "src":"https://asset.jarombek.com/posts/12-30-17-xmlresponse.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Text Search"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Text Search",
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
                "value":" Text searching is how search engines take user input and return a list of results.  The full picture of how it works is beyond the scope of this blog (although it would make for a fun discovery some day!) but just know that MongoDB allows for a barebones version of text searching.  You can implement a text search by defining an index of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'text'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on a property (most likely you will define it on a string but you could even place it on an array)",
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
                "value":".  MongoDB will do the rest of the work for you.  Weights can also be placed on properties to specify how important a certain field is for a search",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"7",
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
                "value":" Remember how I said practically anything you wanted to do in MongoDB can be done in Node.js using Mongoose? You can implement a text search and its necessary indexes as well",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"8",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"!  Here are the indexes which are placed on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SongSchema",
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
        "value":"SongSchema.index(\n    {\n        'title': 'text',\n        'album': 'text',\n        'artist': 'text',\n        'best_lyric': 'text'\n    },\n    {\n        'weights': {\n            'title': 10,\n            'album': 5,\n            'artist': 8,\n            'best_lyric': 2\n        }\n    }\n);\n",
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
                "value":" Then you can perform the text search using Mongoose: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"searchRouter.route('/:query')\n    .get((req, res) => {\n\n    // Perform a text search and sort based on the text score.\n    // The score is calculated by the indexes placed in the database\n    Song.find({ \"$text\": {\"$search\": req.params.query}})\n        .select({\"score\": {\"$meta\": \"textScore\"}})\n        .sort({\"score\": {\"$meta\": \"textScore\"}}).exec()\n        .then((songs) => {\n            res.format({\n                'application/json': () => {\n                    res.json(songs);\n                },\n                'application/xml': () => {\n                    res.render('xml/songs', {songs: songs});\n                }\n            });\n        })\n        .catch((err) => {\n            res.status(500).send(err);\n        });\n});\n",
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
                "value":" Now a text search can be executed on the song collection.  When a text string is entered, it finds matches on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"title",
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
                "value":"artist",
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
                "value":"album",
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
                "value":"best_lyric",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" fields.  When I search the word 'faith', it matches a Mariah Carey song with a matching lyric: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"xmlresponsetext-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/12-30-17-xmlresponsetext.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Basic Auth"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Basic Auth",
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
                "value":" I also found a really nice library to add basic auth to my endpoints.  Basic auth works by using the HTTP requests ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Authorization",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" header to check for a base64 encoded credential string.  This credential string before being encoded has the form <username>:<password> followed by the unicode pound sign (U+00A3)",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9",
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
                "value":" All you need to do to implement basic auth in an express app is pass the module a JSON object of usernames and passwords to accept",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"10",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This is yet another example of how user made npm modules can make Node.js development easy. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"app.use(basicAuth({\n    users: {'a': 'j'}\n}));\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Gulp"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Gulp",
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
                "value":" The final major piece of this prototype was the build automation tool - Gulp.  Gulp allows you to build your project in stages using tasks defined as JavaScript functions",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"11",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I am still trying to get a hang of gulp but I made a build file that watches for any file changes and automatically restarts the Express server with the changes applied.  In the process, Gulp uses Babel to transpile all the ES6+ files into ES5 and moves these transpiled files into a new directory.  I also move all my EJS files into this new directory.  The code is very hackish (as I don't know gulp well) but gets the job done! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// The main task called.  We first execute the 'watch' task and then run a script\n// to start the server\ngulp.task('default', ['watch'], () => {\n    nodemon({\n        script: './dist/app.js',\n        ext: 'js',\n        env: {\n            PORT: 3000\n        },\n        ignore: [\n            './node_modules/**',\n            './dist/**/*.js',\n            './dist/**/*.map',\n            './package.json',\n            './package-lock.json',\n            './dbscripts/**'\n        ]\n\n    }).on('restart', () => {\n        // Nodemon will restart the server when any of the src files change\n        console.info('Restarting Server with Changes');\n    });\n});\n\n// The 'watch' task will wait for changes in the source files and when they occur invoke\n// the 'transpile' task.\ngulp.task('watch', ['transpile', 'move'], () => {\n    livereload.listen();\n    gulp.watch('./src/**/*.js', ['transpile']);\n    gulp.watch('./src/view/**/*.ejs', ['move']);\n});\n\n// The transpile task invokes babel to convert ES6+ code into ES5\ngulp.task('transpile', () => {\n    gulp.src('./src/**/*.js')\n        .pipe(sourcemaps.init())\n        .pipe(babel({\n            presets: ['env']\n        }))\n        .pipe(sourcemaps.write('.'))\n        .pipe(gulp.dest('./dist'))\n        .pipe(livereload());\n});\n\n// The move task takes out ejs files used for xml generation and puts them in the dist folder\ngulp.task('move', () => {\n    gulp.src('./src/view/**/*.ejs')\n        .pipe(gulp.dest('./dist/view'));\n});\n",
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
                "value":" Now all I have to do to run my server is enter one command in bash: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"gulp\n",
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
                "value":" Gulp made my life a lot easier in this project.  Combining Gulp which restarted my server on all changes and the WebStorm IDE which automatically saves files, I never had to save a file or restart my server throughout development.  I put 100% of my focus on developing! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Conclusions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Conclusions",
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
                "value":" This MongoDB and Node.js prototype was very enjoyable to make and the full JavaScript stack is growing on me.  There are still many unexplored areas of Node.js development for me but it is clear why this server side environment was such a game changer. ",
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
                "value":" The code for the prototype is available on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/nodejs-mongodb-api-prototype"
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

postName = "dec-30-2017-nodejs-mongodb-api-prototype";
postDate = new Date('2017-12-30T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating a Node.js and MongoDB REST API Prototype",
    date: postDate,
    type: "Blog",
    views: postViews,
    tags: [
        {
            name: "MongoDB",
            picture: "https://asset.jarombek.com/logos/mongodb.png",
            color: "mongodb"
        },
        {
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        },
        {
            name: "Express",
            picture: "https://asset.jarombek.com/logos/express.png",
            color: "express"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "ECMAScript 6",
            picture: "https://asset.jarombek.com/logos/es6.png",
            color: "ecmascript6"
        },
        {
            name: "NoSQL"
        },
        {
            name: "Document Database"
        },
        {
            name: "Mongoose",
            picture: "https://asset.jarombek.com/logos/mongoose.png",
            color: "mongoose"
        },
        {
            name: "Babel",
            picture: "https://asset.jarombek.com/logos/babel.png",
            color: "babel"
        },
        {
            name: "Gulp",
            picture: "https://asset.jarombek.com/logos/gulp.svg",
            color: "gulp"
        },
        {
            name: "REST"
        },
        {
            name: "API"
        },
        {
            name: "Basic Auth"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Amos Haviv, ",
            endName: ", 2nd ed (Birmingham, UK: Packt, 2016), 110",
            linkName: "MEAN Web Development",
            link: "https://www.packtpub.com/mapt/book/web_development/9781783983285"
        },
        {
            startName: "\"Built-in Promises\", ",
            endName: "",
            linkName: "http://mongoosejs.com/docs/promises.html",
            link: "http://mongoosejs.com/docs/promises.html"
        },
        {
            startName: "Alex Young, Bradley Meck, Mike Cantelon, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2017), 156",
            linkName: "Node.js In Action",
            link: "https://www.manning.com/books/node-js-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 157",
            linkName: "Young",
            link: "https://www.manning.com/books/node-js-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 158",
            linkName: "Young",
            link: "https://www.manning.com/books/node-js-in-action-second-edition"
        },
        {
            startName: "Kyle Banker, Peter Bakkum, Shaun Verch, Douglas Garrett &amp; Tom Hawkins, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2016), 252",
            linkName: "MongoDB In Action",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 255",
            linkName: "Banker",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "\"Mongoose - Search for text in three fields based on score or weightage\", ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/32063998/mongoose-search-for-text-in-three-fields-based-on-score-or-weightage",
            link: "https://stackoverflow.com/questions/32063998/mongoose-search-for-text-in-three-fields-based-on-score-or-weightage"
        },
        {
            startName: "\"The 'Basic' HTTP Authentication Scheme\", ",
            endName: "",
            linkName: "https://tools.ietf.org/html/rfc7617",
            link: "https://tools.ietf.org/html/rfc7617"
        },
        {
            startName: "\"express-basic-auth\", ",
            endName: "",
            linkName: "https://www.npmjs.com/package/express-basic-auth",
            link: "https://www.npmjs.com/package/express-basic-auth"
        },
        {
            startName: "",
            endName: "., 73",
            linkName: "Young",
            link: "https://www.manning.com/books/node-js-in-action-second-edition"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});