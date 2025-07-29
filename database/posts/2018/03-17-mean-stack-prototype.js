/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/29/2018
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
                "value":" Much of my work lately has been in preparation for a personal website that I'm going to build (and where this blog post will call home!).  The website is going to contain my resume, blog posts, and more. I am really excited to get started building it! ",
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
                "value":" However, the first order of business is to decide which technology stack I want to use for the website. I've narrowed it down to a full JavaScript stack, from the front-end through the database.  There are two remaining tech stacks in competition: the MEAN stack (MongoDB, Express, Angular, & Node.js) and the MERN stack (MongoDB, Express, React.js & Node.js).  I started my research for building the website by reading JavaScript books and writing plenty of discovery posts about them.  I also explored Node.js and MongoDB in depth.  I even made a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-30-2017-nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"blog post",
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
                    "href":"https://github.com/AJarombek/nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on both technologies! Now its time to pick between the two front end JavaScript frameworks: Angular by Google and React.js by Facebook. ",
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
                "value":" Much of my work lately has been in preparation for a personal website that I'm going to build (and where this blog post will call home!).  The website is going to contain my resume, blog posts, and more. I am really excited to get started building it! ",
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
                "value":" However, the first order of business is to decide which technology stack I want to use for the website. I've narrowed it down to a full JavaScript stack, from the front-end through the database.  There are two remaining tech stacks in competition: the MEAN stack (MongoDB, Express, Angular, & Node.js) and the MERN stack (MongoDB, Express, React.js & Node.js).  I started my research for building the website by reading JavaScript books and writing plenty of discovery posts about them.  I also explored Node.js and MongoDB in depth.  I even made a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-30-2017-nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"blog post",
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
                    "href":"https://github.com/AJarombek/nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on both technologies! Now its time to pick between the two front end JavaScript frameworks: Angular by Google and React.js by Facebook. ",
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
                "value":" This blog post is my journey through creating a prototype with Angular.  I'll describe the prototype at a high level and deep dive into code that makes the website function.  All along the way I will give my thoughts about Angular and all the other technologies that I learned in the process.  I will conclude with my current thoughts on Angular and what I feel React.js needs to bring to the table to defeat it! ",
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
                "value":" I had a lot of fun (for the most part!) building with Angular, so let's get started! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Prototype"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Prototype",
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
                "value":" The MEAN stack prototype is a website that allows its users to upload cat pictures!  Appropriately, the website is named MeowPics. ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"meowcat-image"
        },
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/meowcat.png"
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
                "value":" The MongoDB, Express, Angular, and Node.js technology stack works as follows: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"meanstack-image"
        },
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/MEAN-Stack.png"
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
                "value":" The first piece of the technology stack for MeowPics that I will go over is the MongoDB document database. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"MongoDB Structure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"MongoDB Structure",
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
                "value":" I've ",
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
                        "value":"written",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
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
                        "value":"many",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-23-2017-mongodb-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-27-2017-mongodb-pt4"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"posts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on MongoDB in the past, but in general terms its a NoSQL document database that stores data in collections of objects.  I used it extensively in my Node.js and MongoDB prototype as well.  The biggest reason I want to use MongoDB in my website is that it fits the JavaScript web stack since its queries are in JavaScript and objects are BSON (Binary JSON). ",
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
                "value":" The MongoDB database for MeowPics has two main collections for users and cat posts.  There is also an audit collection that is used for logging purposes when updates, inserts, or deletions are made to documents in the user or post collections. ",
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
                "value":" Here are some insert statements that show the structure of the user and post collections: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"db.user.insertMany([\n    {\n        username: \"andy\",\n        first: \"Andrew\",\n        last: \"Jarombek\",\n        password: \"$2a$10$c/DwED6TayK0d3ce5761zOTBBsnCB.JMpcF4l4Zojqti6Adaym9W2\",\n        postCount: 4\n    },\n    {\n        username: \"tom\",\n        first: \"Thomas\",\n        last: \"Caulfield\",\n        password: \"$2a$10$8Irw8CAvdJr2uBAUYdlinOf8T9dblJiz0mumgNyfiHGBmT9vUweo6\",\n        postCount: 2\n    }\n]);\n\nlet andy_id = db.user.findOne({username: \"andy\"})._id;\nlet tom_id = db.user.findOne({username: \"tom\"})._id;\n\ndb.post.insertMany([\n    {\n        picture: \"russianblue.jpg\",\n        name: \"Cat Pic\",\n        username: \"andy\",\n        user_id: andy_id,\n        first: \"Andrew\",\n        last: \"Jarombek\",\n        date: new Date(\"2018-02-26\"),\n        description: \"I love this picture!\",\n        up: 1,\n        down: 0\n    },\n    {\n        picture: \"toms-cat.jpg\",\n        name: \"Kitty!\",\n        username: \"tom\",\n        user_id: tom_id,\n        first: \"Thomas\",\n        last: \"Caulfield\",\n        date: new Date(\"2018-02-24\"),\n        description: \"awww!\",\n        up: 5,\n        down: 1\n    }\n]);\n",
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
                "value":" While these statements are performed on the MongoDB database directly, most of my interactions were done through Mongoose.  Mongoose is a Node.js module that allows you to model objects from MongoDB as well as perform queries, inserts, updates and more.  It is a really powerful tool that I used in my Node.js and MongoDB prototype.  For that prototype I was using version 4 of Mongoose.  I was excited to see that in early January Mongoose 5 was released, including large improvements by using Promises by default and supporting async functions",
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
                "value":"!  Let's take a look at Mongoose 5 and the rest of the Node.js/Express API. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Nodejs REST API"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Node.js REST API",
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
                "value":" The Node.js/Express API defines three main routes and one for developer testing.  The three main routes are for users, posts, and authentication.  The users and posts routes define a CRUD API for both corresponding MongoDB collections.  Here is the entry point code to the server application: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const express = require('express');\nconst mongoose = require('mongoose');\nconst bodyParser = require('body-parser');\nconst helmet = require('helmet');\n\nconst Post = require('./model/post');\nconst User = require('./model/user');\nconst Test = require('./model/test');\nconst Audit = require('./model/audit');\n\nconst userRouter = require('./route/userRouter')(User, Audit);\nconst postRouter = require('./route/postRouter')(Post, User, Audit);\nconst authRouter = require('./route/authRouter')(User);\nconst testRouter = require('./route/testRouter')(Test);\n\n// Mongoose 5.0 uses native JS Promises by default (less config needed!)\nmongoose.connect('mongodb://127.0.0.1/meowcat');\n\nconst app = express();\n\n// Set a larger payload limit for HTTP requests since some image data will be large\napp.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));\napp.use(bodyParser.json({limit: '50mb'}));\n\n// Helps protect our API endpoint from well known web security vulnerabilities\napp.use(helmet({}));\n\nconst port = process.env.port || 3000;\n\napp.use('/api/test', testRouter);\napp.use('/api/user', userRouter);\napp.use('/api/post', postRouter);\napp.use('/api/auth', authRouter);\n\napp.get('/', (req, res) => {\n    res.send(JSON.parse('{\"title\":\"Welcome to the Apps API!\"}'));\n});\n\nmodule.exports = app.listen(port, () => {\n    console.info(`Started MeowCat API on port ${port}`);\n});\n",
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
                "value":" If you've seen an Express application before this should look familiar, although there are a few unique configurations. I'm using Mongoose 5, which requires less startup configuration.  I also set the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"limit",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bodyParser",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" because the client sends large cat images to the server.  Now any request with a body under 50MB succeeds. ",
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
                "value":" I'm also using the helmet module which secures my API by setting certain HTTP headers on requests ",
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
                "value":".  All I did to activate helmet was write one line: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app.use(helmet({}))",
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
                "value":" Let's take a look at the user route in the API.  The first thing to look at is the user model which is defined using Mongoose.  The model defines all the properties of an object and configures validation rules such as regex matches and length requirements. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const mongoose = require('mongoose');\n\nconst UserSchema = new mongoose.Schema({\n    username: {\n        type: String,\n        trim: true,\n        required: true,\n        match: /^[a-zA-Z0-9]+$/,\n        validate: [\n            function (username) {\n                return username.length <= 15;\n            },\n            'Username must be less than 15 characters'\n        ]\n    },\n    first: {...},\n    last: {...},\n    password: {\n        type: String,\n        trim: true,\n        required: true,\n        match: /^[^\\s]+$/\n    },\n    postCount: {\n        type: Number,\n        default: 0\n    }\n});\n\nUserSchema.index({username: 1});\n\nmodule.exports = mongoose.model('User', UserSchema, 'user');\n",
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
                "value":"UserSchema",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines five properties - ",
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
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"first",
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
                "value":"last",
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
                "value":"password",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" & ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postCount",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It also configures validation for each property.  Mongoose even helps define indexes!  Practically all necessary MongoDB configurations and setup can be done from Mongoose! Now I am ready to use this model in my ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"userRouter",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"userRouter",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a CRUD API for the User model.  Here is the GET request for all the users in the database. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const userRouter = express.Router();\n\nuserRouter.route('/')\n    .get((req, res) => {\n\n        find().catch(error => res.status(500).send(error));\n\n        async function find() {\n            const users = await User.find().exec();\n\n            res.json(users);\n        }\n    });\n",
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
                "value":" I am utilizing Mongoose 5's support for async functions here.  It is much more concise and easy to read this way!  For more on how async functions work you can check out my ",
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
                        "value":"discovery post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on the topic. This code calls the Mongoose ",
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
                "value":" function on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"User",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" schema.  This function asynchronously returns all of the documents in the user collection. ",
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
                "value":" Here is another REST endpoint defined on the user route - this time for HTTP DELETE requests. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"userRouter.route('/:username')\n    .delete(jwtUtils.checkIfAuthenticated, (req, res) => {\n\n        remove().catch(error => res.status(500).send(error));\n\n        async function remove() {\n            await req.user.remove();\n\n            // Should return null if it was successfully deleted\n            const deleted = await User.findOne({username: req.user.username}).exec();\n\n            // Call the catch() function if the user was not deleted\n            if (deleted !== null) {\n                throw Error('User Still Exists');\n            }\n\n            // Audit the deletion of a user\n            const audit = new Audit({\n                object: req.user._id,\n                type: 'user',\n                message: `Deleted User ${req.user.username}`,\n                source: 'NodeJS MeowCat API'\n            });\n\n            await Audit.create(audit);\n\n            res.status(204).send();\n        }\n    });\n",
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
                "value":" In this code I used three Mongoose functions: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"remove()",
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
                "value":"findOne()",
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
                "value":"create()",
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
                "value":"remove()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" deletes an instance of the Mongoose user schema and ",
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
                "value":" tries to find that user to make sure it was properly deleted.  Finally I use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"create()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to insert a new document in the audit collection.  This audit collection holds all the important database interaction history.  Let's take a quick look at the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AuditSchema",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" because it is quite unique: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const mongoose = require('mongoose');\nconst Schema = mongoose.Schema;\n\nconst AuditSchema = new Schema({\n    time: {\n        type: Date,\n        default: Date.now(),\n        expires: 604800 // Expires after a week\n    },\n    object: Schema.Types.ObjectId,\n    type: {\n        type: String,\n        required: true,\n        enum: ['user', 'post']\n    },\n    message: {\n        type: String,\n        required: true\n    },\n    source: String\n}, { capped: { size: 8192, max: 100, autoIndexId: true }});\n\nAuditSchema.index({time: 1});\nAuditSchema.index({object: 1});\n\nmodule.exports = mongoose.model('Audit', AuditSchema, 'audit');\n",
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
                "value":" There are two important aspects of this schema.  The first is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"expires",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"time",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the corresponding index defined for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"time",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This is how you create a time-to-live (TTL) collection in Mongoose.  In MongoDB a TTL collection is one that expires its documents after a set amount of time",
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
                "value":".  In this case the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"audit",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" collection expires its documents after a week.  This is a similar behavior to many logging frameworks in applications. ",
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
                "value":" The second important aspect is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"capped",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property at the end of the schema definition.  This defines a max number of documents (the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"max",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property) and a max number of bytes (the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"size",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property) that are allowed in the collection",
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"audit",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" collection allows a maximum of 100 documents of no greater than 8192 bytes. ",
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
                "value":" Creating complex MongoDB structures in Mongoose shows off the versatility of the module. I use Mongoose with all my user and post routes.  One important aspect of the post route is the ability to upload a picture with a cat post.  I need to store this picture as a file on the server Node.js is running on.  Let's first look at the HTTP POST endpoint for posts, where I instruct Node to save the picture data as a file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const express = require('express');\nconst files = require('../utils/files');\nconst jwtUtils = require('../utils/jwt');\n\nconst postRouter = express.Router();\n\npostRouter.route('/')\n    .post(jwtUtils.checkIfAuthenticated, (req, res) => {\n\n        // pictureData isn't part of the Post Schema, so remove it once we assign it a variable\n        const data = req.body.pictureData;\n        delete req.body.pictureData;\n\n        const post = new Post(req.body);\n\n        if (post.picture && post.name && post.picture && data) {\n\n            // The naming convention for saved files is [username]_[filename].[filetype]\n            post.picture = `${post.username}_${post.picture}`;\n\n            // First save the file to the servers filesystem\n            files.saveFile(post.picture, data);\n\n            // Then insert the post into MongoDB\n            insert().catch(error => res.status(500).send(error));\n\n            async function insert() {...}\n        }\n    });\n",
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
                "value":" This endpoint extracts picture data from the HTTP request body and sends it to the function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saveFile()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The arguments for this function pass base 64 encoded picture data and the file name.  Let's take a look at ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saveFile()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" now: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const fs = require('fs');\nconst path = require('path');\n\nexports.saveFile = function saveFile(name, data) {\n\n    // Replace the start of the base 64 encoding - this is not the actual picture file data\n    const base64 = data.replace(/^data:image\\/([a-z]+);base64,/, \"\");\n\n    fs.writeFile(path.join(__dirname, `../pics/${name}`), base64, 'base64', (err) => {\n        console.error(err);\n    });\n};\n",
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
                "value":" The imported ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module allows for interaction with the filesystem.  I use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"writeFile()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to create a new file in the filesystem with the base 64 encoded picture data. ",
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
                "value":" Besides for adding a new file when uploading a post, I also delete a file when no more posts reference it.  You can check out all of the file manipulation functions I created in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-server-prototype/blob/master/src/utils/files.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"files.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and all the endpoints that use these functions in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-server-prototype/blob/master/src/route/postRouter.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" postRouter.js",
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
                "value":" You may have noticed that I passed ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postRouter.post()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" the argument ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jwtUtils.checkIfAuthenticated",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This is a function used for authentication.  Certain endpoints in my REST API require the user to be authenticated, such as deleting a user or creating a new post.  When a user logs in, they go through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"authRouter",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and get an authentication token.  This token is included on all further HTTP requests.  I used JSON Web Tokens (JWT) for authentication in my application.  JWT's are a huge topic, and I wrote an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-submittions/blob/master/Discoveries/\n2018/03-Mar/3-11-JWT/View/jwt.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" about some of the basic concepts.  Check it out if you want more details! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Webpack Not In the Web"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Webpack Not In the Web?",
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
                "value":" The MEAN Stack prototype was also my first experience with Webpack!  While Angular CLI is built on top of Webpack, you don't have to interact with the underlying Webpack config files to use it.  The Node.js server was my first actual time configuring Webpack to bundle an application! ",
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
                "value":" Webpack is a module bundler commonly used in JavaScript projects, especially those used in the browser",
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
                "value":".  It builds a dependency graph of a projects modules and bundles those modules into a few larger files.  The reason for bundling JavaScript files is that HTTP requests from the web browser to the server are expensive.  If JavaScript files are bundled into a smaller number of files, the amount of HTTP requests is reduced, thus speeding up the web application.  Webpack is quite complex and deserves many discovery posts of its own, but that is the basic idea! ",
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
                "value":" While Webpack is mostly used in the front-end, there is nothing stopping you from using it with Node.js.  The environment Webpack runs on is changed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"target",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field in the Webpack configuration",
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
                "value":".  Let's take a look at the Webpack configuration file ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-server-prototype/blob/master/src/webpack.config.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" webpack.config.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" used in my Node.js/Express server: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"module.exports = {\n    entry: [\n        'babel-polyfill',\n        './src/app'\n    ],\n    target: \"node\",\n    node: {\n        __dirname: false,\n        __filename: false\n    },\n    module: {\n        rules: [{\n            test: /\\.js?$/,\n            use: \"babel-loader\",\n            exclude: /node_modules/\n        }]\n    },\n    output: {\n        path: path.join(__dirname, '../build'),\n        filename: \"app.js\"\n    }\n};\n",
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
                "value":" First this configuration declares two entry points for Webpack to start building its dependency graph.  The entry ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"babel-polyfill",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is necessary to use those wonderful async functions seen in my routes. I then set the target environment to node.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"node",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field is necessary because of a bug where the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dirname",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains the incorrect value after being bundled with Webpack",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"module",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field defines Webpack loaders.  Loaders perform transformations on files during the bundling process. The loader used here is for Babel, a compiler that transpiles ES6+ JavaScript code into ES5. While less important on the server side since newest versions of Node.js support the newest JavaScript features, transpiling into ES5 gives much greater browser compatibility for a web application.  I did a full discovery on ",
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
                        "value":"Babel",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as well! ",
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
                "value":" Let's look at the Webpack config for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"babel-loader",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The regex defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property tells Webpack to only use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"babel-loader",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on files with the JavaScript extension.  The other regex defined in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"exclude",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tells Webpack to not run this loader on the projects module dependencies in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"node_modules",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" folder. ",
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
                "value":" Finally, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"output",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property defines where the completed bundle is located.  I tell Webpack to put it in the build directory with the name app.js. And just like that, the Webpack config for the server application is completed! ",
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
                "value":" I defined an npm script to start Webpack with this configuration in the projects ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-server-prototype/blob/master/package.json"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"package.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"...\n\"scripts\": {\n    \"start:dev\": \"webpack-node-dev --config src/webpack.config.js\"\n},\n...\n",
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
                "value":" While the server side app doesn't really require bundling, it was a really good experience to start using Webpack.  Also configuration on the server is much simpler than on the front-end, so it was great for a beginner.  I am excited to use Webpack with my upcoming React prototype! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Unit Tests and CI"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Unit Tests and CI",
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
                "value":" The MEAN Stack prototype was the first project I made with Continuous Integration (CI).  CI integrates code into the main repository on every commit.  With this approach unit tests are run every time new code is submitted.  This allows for constant regression testing and makes it easier to catch bugs early on.  I wrote a whole discovery about using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-9-2018-travisci"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"TravisCI",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for CI in this project!  It's a game changer, and I will use it in my projects from now on! ",
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
                "value":" With CI its important to have good unit tests.  I have a bad habit of slacking on writing test code.  While I didn't completely break this bad habit with the MEAN prototype, I did write some test code for my REST endpoints! ",
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
                "value":" I used the supertest npm module for testing HTTP requests along with the mocha test framework. Supertest is a really nice API that made testing my endpoints easy!  Here is the testing suite for my main app endpoint: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const request = require('supertest');\nconst app = require('../src/app');\n\n// Tests for the default endpoint '/'\ndescribe(\"GET '/'\", () => {\n    it('responded with a 200', () => {\n        return request(app).get('/').expect(200);\n    });\n\n    it(\"returned correct JSON\", () => {\n        return request(app)\n            .get('/')\n            .expect('Content-Type', /json/)\n            .expect(200)\n            .expect('Content-Length', '36');\n    });\n\n    it(\"Uses Helmet\", () => {\n        return request(app)\n            .get('/files')\n            .expect('X-Content-Type-Options', 'nosniff')\n            .expect('X-DNS-Prefetch-Control', 'off')\n            .expect('X-Download-Options', 'noopen')\n            .expect('X-Frame-Options', 'SAMEORIGIN')\n            .expect('X-XSS-Protection', '1; mode=block')\n    });\n});\n",
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
                "value":" In the mocha testing framework ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"describe()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a testing group and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"it()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a test case",
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
                "value":".  In the code above I defined a testing group with three test cases. The first test case checks to see if an endpoint returns an HTTP 200 OK status.  I use the supertest ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"get()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to make a GET request to an endpoint and use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"expect()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to define the anticipated HTTP response. ",
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
                "value":" The second and third test cases also use these basic building blocks.  I chain ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"expect()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions to define multiple anticipated responses.  The second test checks that the returned content type is JSON and is a certain length.  The last test case makes sure the helmet module discussed earlier is properly adding HTTP headers. It is really easy to create HTTP endpoint tests with supertest and mocha! ",
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
                "value":" I defined one more test suite in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-server-prototype/blob/master/test/postRouter.test.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" postRouter.test.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  One of the test cases makes sure an endpoint requiring JWT authentication returns a 401 error when no token is present on the request header. ",
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
                "value":" That finishes up my discussion of the Node.js/Express backend for my MEAN stack prototype. If you want to check out all the code for the Node.js backend its available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-server-prototype"
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
                "value":".  Now let's move on to the Angular frontend! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Angular Front-End"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Angular Front-End",
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
                "value":" The frontend of the MEAN stack uses Angular.  Angular is a full fledged frontend framework, meaning the code structure defined by Angular must be followed.  While this gives less flexibility to the developer, it makes sure the code stays structured even in the most complex applications.  The latest version of Angular at the time of this writing is 5, and that is what I used in my prototype.  While you can write Angular applications in JavaScript or any language that transpiles to JavaScript, the team at Angular suggests that you use TypeScript. TypeScript is a language developed by Microsoft that applies static typing on top of JavaScript.  I wrote a discovery post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-8-2018-typescript"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"TypeScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that explores different details of the language and analyzes what I learned about it from this project. ",
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
                "value":" I also wrote a discovery post about my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-6-2018-angular-5-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first impressions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of the Angular framework.  In that post I was a bit critical of Angular.  While I think Angular is far from perfect, it was a joy to learn and work with.  It does have its issues which I will cover in this blog.  Another note is that this blog isn't going to teach beginners how to use Angular.  I expect that you have some knowledge about the framework and how it works.  I will go through all the major components of my application as well as other cool services, directives, etc.  Let's get started by exploring the app component.  This component is the entry point for the application and holds all the routes in the single page application (SPA). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"App Component"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"App Component",
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
                "value":" Before looking at the app component directly, its important to observe the code in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/app.module.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" app.module.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This module contains all the components except for user profiles and cat posts. It also defines the routes for the application: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"export const routes: Routes = [\n    {path: '', component: HomeComponent},\n    {path: 'user', loadChildren: './profile/profile.module#ProfileModule'},\n    {path: 'about', component: AboutComponent},\n    {path: 'login', component: LoginComponent},\n    {path: 'signup', component: SignupComponent},\n    {path: '**', redirectTo: ''}\n];\n",
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
                "value":" The user route is unique because it implements lazy loading.  The module for the user route is not loaded from the server until the route is traversed.  I discussed ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-27-2018-angular-5-routing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Angular lazy loading",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a discovery post. ",
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
                "value":" You may be wondering why the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AppComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is missing in these routes.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AppComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is actually the root component and is bootstrapped into the module",
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
                "value":".  Its defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bootstrap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@NgModule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" definition.  On app launch the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AppComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is bootstrapped and rendered by default. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"@NgModule({\n    ...\n    bootstrap: [AppComponent]\n})\n",
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
                "value":"AppComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" template defines the navigation bar for the website.  Clicking on the navigation bar changes the route.  Based on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"routes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable shown before, different routes display different components on the page.  The components are displayed in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<router-outlet>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element, as discussed further in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-27-2018-angular-5-routing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"discovery post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The code for the app component template is found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/app.component.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"app.component.html",
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
                "value":" The navigation bar uses Bootstrap and Sass for styling.  In fact, the entire website UI uses a combination of Bootstrap and Sass.  I really loved Sass and how it modularized my stylesheets, making them easier to read and work with.  I made a discovery post about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-10-2018-sass"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Sass",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" if you want to learn more.  On the other hand, I have mixed feelings about Bootstrap.  While it does have cool components like the navbar I used for this website, it also comes with many frustrations.  For one the current state of Bootstrap is a bit of a mess. Different versions come with completely different naming conventions.  To make matters worse the documentation online is not up to date with the current release.  This made developing with Bootstrap really frustrating. ",
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
                "value":" If that was the only issue with Bootstrap I'd suggest to wait for its version to stabilize before jumping on board.  However, I also found that many Bootstrap components were not very customizable.  Bootstrap seem like more of a prototyping/pet project tool than something worth using in production.  I'll demonstrate the lack of customization later. ",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/\napp.component.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"app.component.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code also subscribes to certain services that emit and receive messages to and from child components.  This allows for message passing between components. I'll go into detail about these services once I look at the child components that subscribe to them. ",
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
                "value":" Let's look at the default route of the application which displays the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HomeComponent",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Home Page"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Home Page",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"maincomponent-image"
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
                    "src":"https://asset.jarombek.com/main-component.png"
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
                "value":" The code in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HomeComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is pretty simple.  It subscribes to a service called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postService",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  By calling the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getAll()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postService",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" the component gets all the cat posts stored on the server.  These are displayed in the UI. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { Component } from '@angular/core';\nimport {PostService} from \"../post.service\";\nimport {Post} from \"../models/post\";\nimport {environment} from \"../../environments/environment\";\n\n@Component({\n    selector: 'app-home',\n    templateUrl: './home.component.html',\n    styleUrls: ['./home.component.scss']\n})\nexport class HomeComponent {\n    posts: [Post];\n\n    // The private modifier creates a new instance variable\n    constructor(private postService: PostService) {\n\n        // When the Observable getAll() value returns give it to the posts variable\n        postService.getAll().subscribe(data => {\n\n            this.posts = data;\n\n            // Different behavior depending on environment\n            if (environment.evt === 'dev') {\n                this.posts.forEach(post => {\n                    post.date = new Date(post.date);\n                    post.picture = `${post.picture}`;\n                });\n            }\n        });\n    }\n}\n",
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
                "value":"postService",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is one of the many services I created for this project.  It makes HTTP requests to the posts API.  Here is a look at the service: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import {Injectable} from '@angular/core';\nimport {Post} from \"./models/post\";\nimport {HttpClient} from \"@angular/common/http\";\nimport {Observable} from \"rxjs/Observable\";\nimport {HttpService} from \"./http.service\";\n\n@Injectable()\nexport class PostService implements HttpService {\n\n    constructor(private http: HttpClient) {}\n\n    getAll(): Observable<[any]> {\n        return this.http.get<[Post]>(`/api/post`);\n    }\n\n    get(id: number): Observable<any> {\n        return this.http.get<Post>(`/api/post/${id}`);\n    }\n\n    post(post: Post): Observable<any> {\n        return this.http.post<Post>(`/api/post`, post);\n    }\n\n    put(post: Post): Observable<any> {\n        return this.http.put<Post>(`/api/post/${post.id}`, post);\n    }\n\n    delete(id: number): Observable<any> {\n        return this.http.delete<any>(`/api/post/${id}`);\n    }\n}\n",
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
                "value":" Each function corresponds with a route defined in the Node.js ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"postRouter",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" API.  The service implements a TypeScript interface.  The code for this interface is found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/http.service.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" http.service.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This interface is implemented in all my HTTP request services. ",
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
                "value":" The HTML template for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HomeComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loops through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"posts",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" array and passes each post to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CatPictureComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This component displays the cat post on the UI. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<div id=\"home-container\" class=\"container-fluid mt-3\">\n    <!-- Go through all the cat posts and pass each post to the cat-picture component -->\n    <div class=\"card-columns\">\n        <div *ngFor=\"let post of posts\">\n            <cat-picture [post]=\"post\"></cat-picture>\n        </div>\n    </div>\n</div>\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Cat Posts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Cat Posts",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CatPictureComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" displays details about a cat post and a picture in the UI.  It does this with the Bootstrap card component",
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
                "value":".  The card component makes displaying cat posts in a resizable grid extremely easy.  The one problem I have is the card components default behavior can't be customized.  By default the cards component displays each post from left to right.  This is a problem since old cat posts now show up at the top of the page.  Ideally I could change this behavior to populate cards from top to bottom instead.  However, Bootstrap does not allow for this customization. Bootstrap components aren't quite adequate for the needs of a production level website. ",
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
                "value":" Here is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CatPictureComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" template.  Take a close look at the first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<p>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(click)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" event, and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[routerLink]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<div class=\"card\">\n    <img class=\"img-fluid cat-image\" src={{post?.picture}} alt={{post?.picture}}>\n    <div class=\"card-block mx-2\">\n        <h4 class=\"card-title mt-2\">{{post?.name}}</h4>\n        <p class=\"card-text\">\n            <small class=\"text-muted\" (click)=\"emitUsername()\"\n                    [routerLink]=\"['../../user/profile', post?.username || '']\">\n                {{post?.first + \" \" + post?.last}}\n            </small>\n        </p>\n        <p class=\"card-text cat-post-date\">\n            <small class=\"text-muted\">\n                {{post?.date.toDateString()}}\n            </small>\n        </p>\n        <p class=\"card-text cat-post-description\">{{post?.description}}</p>\n    </div>\n</div>\n",
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
                "value":" The click event and router are placed on the name of the user who made the post.  This allows users to click the name and view the uploader's profile.  Besides for changing the SPA route, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"emitUsername()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is also called.  This function creates a message containing the posts username.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ProfileComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will subscribe to this emitted message so it knows which users information needs to be loaded.  The code for emitting the message is found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/cat-picture/\ncat-picture.component.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"cat-picture.component.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the subscriber of the message is found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/profile/\nprofile.component.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"profile.component.ts",
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
                "value":" While I don't mind setting up messaging between components, I wish there was a nicer way to store global data for use throughout the application.  This seems to be a weak point of the Angular framework, and I am curious how React.js handles the same situation. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Login Page"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Login Page",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"logincomponent-image"
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
                    "src":"https://asset.jarombek.com/login-component.png"
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LoginComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is pretty self explanatory - it logs in a user!  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LoginComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" asks for authentication from the server and get a JWT in response.  I then store the JWT in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"localStorage",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and send it along with all HTTP requests to the server.  For more information on that process you can check out my discovery post on JWT. ",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LoginComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also uses the Angular forms API to easily create and validate form inputs.  I really liked working with the forms API.  It simplified what is often the most convoluted part of a web application.  I remember how difficult it was to create a simple login and signup form on my first website (which was a LAMP stack website using JQuery in the frontend).  The Angular approach to forms is a welcome change! ",
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
                "value":" You can check out the code for the login form in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/login/\nlogin.component.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"login.component.ts",
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
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/login/\nlogin.component.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"login.component.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". A more complex example of the form API is found in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/signup/\nsignup.component.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"signup.component.ts",
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
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/master/web-app/src/app/signup/\nsignup.component.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"signup.component.html",
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
        "el":"figure",
        "attributes":{
            "id":"signupcomponent-image"
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
                    "src":"https://asset.jarombek.com/signup-component.png"
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
                "value":" Another cool thing about the forms API is the ease of implementing a custom validator. Validators are placed on any form element.  You can check out a custom validator I made which checks for whitespace in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/\nmaster/web-app/src/app/shared/no-whitespace.validator.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"no-whitespace.validator.ts",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Post Page"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Post Page",
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
                "value":" The post page is the most complex page in the website.  The component guides the user through a multi-part process of uploading a new cat post.  It involves the Angular forms API, picture file uploading, and calls to the Node.js posts API. ",
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
                "value":" The component lives in three different states.  Each of these states presents a different UI for the user.  The first state allows users to upload cat post details in an Angular form.  The second state allows them to upload a cat picture.  The third state occurs after the upload is successfully made. ",
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
                "value":" In order to display these three states, I used Angular's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<ng-template>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" HTML element.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<ng-template>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is Angular's implementation of HTML's native ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<template>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element.  Anything in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<template>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not be rendered when the page first loads, but is added to the page later on.  In my case the contents of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<ng-template>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are rendered when certain variables in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PostComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are set to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"true",
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
                "value":" One of the challenges I faced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PostComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was retrieving the value in an HTML ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<input>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element before it was removed from the DOM.  This scenario occurred when the first state was destroyed and the second state was created.  The solution was to create a spy directive on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<input>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements",
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
                "value":".  The spy monitored the lifecycle of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<input>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element.  When the element was created or destroyed I performed certain actions, such as initializing its value or retrieving its value.  Here is a look at the spy directive: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import {Directive, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';\nimport {LifecycleService} from \"./lifecycle.service\";\nimport {Lifecycle} from \"../models/lifecycle\";\n\n@Directive({\n    selector: '[spy]'\n})\nexport class SpyDirective implements OnInit, OnDestroy {\n\n    constructor(private renderer: Renderer2, private el: ElementRef,\n                private lifecycleService: LifecycleService) {}\n\n    /**\n     * The initialization lifecycle for the spied upon element.  Send an appropriate\n     * notification to the lifecycle service for subscribers to consume.\n     */\n    ngOnInit(): void {\n        const status: Lifecycle = this.lifecycleObject(\"init\");\n\n        this.lifecycleService.emitData(status);\n    }\n\n    /**\n     * The destroy lifecycle for the spied upon element.  Send an appropriate\n     * notification to the lifecycle service for subscribers to consume.\n     */\n    ngOnDestroy(): void {\n        const status: Lifecycle = this.lifecycleObject(\"destroy\");\n\n        this.lifecycleService.emitData(status);\n    }\n\n    lifecycleObject(event: string) : Lifecycle {\n        return {\n            id: this.el.nativeElement.id,\n            event: event,\n            value: this.el.nativeElement.value\n        };\n    }\n}\n",
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
                "value":"lifecycleService",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" allows for message passing between the spy directive and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PostComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". You can look at this service in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype/blob/\nmaster/web-app/src/app/shared/lifecycle.service.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"lifecycle.service.ts",
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
                "value":" Once again I think the message passing services are a messy approach for sharing data between components.  Maybe there is a better approach out there.  However, the fact you can monitor the lifecycle of any HTML element through a directive is really cool! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Unit Testing Angular"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Unit Testing Angular",
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
                "value":" I didn't do much unit testing with my Angular application.  However it is set up with TravisCI and a testing suite just like the server side Node.js code.  I did write unit tests for a few mock services in the project.  These mock services allowed me to work on the front-end code before the Node.js API was created.  Mock services were very helpful during early development! ",
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
                "value":" Here is an example of unit tests for one of my mock services: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { TestBed, inject } from '@angular/core/testing';\nimport {MockUserService} from \"./mock-user.service\";\nimport {User} from \"../models/user\";\n\ndescribe('MockUserService', () => {\n    beforeEach(() => {\n        TestBed.configureTestingModule({\n            providers: [MockUserService]\n        });\n    });\n\n    it('service should be created', inject([MockUserService], (service: MockUserService) => {\n        expect(service).toBeTruthy();\n    }));\n\n    it(\"getAll() should get two users\", inject([MockUserService],\n                                        (service: MockUserService) => {\n        service.getAll().subscribe(users => {\n            expect(users.length).toBe(2);\n        });\n    }));\n\n    it(\"get() should get user 'andy'\", inject([MockUserService],\n                                        (service: MockUserService) => {\n        service.get(\"andy\").subscribe(user => {\n            expect(user.username).toBe('andy');\n            expect(user.first).toBe('Andrew');\n            expect(user.last).toBe('Jarombek');\n        });\n    }));\n\n    it(\"post() should return new user\", inject([MockUserService],\n                                        (service: MockUserService) => {\n        service.post(new User(\"joe\", \"Joe\", \"Smith\")).subscribe(user => {\n            expect(user.username).toBe('joe');\n            expect(user.first).toBe('Joe');\n            expect(user.last).toBe('Smith');\n        });\n    }));\n\n    ...\n});\n",
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
                "value":" When Angular CLI sets up components and services, it also generates a spec file that contains unit testing code for the component or service.  It only contains one test by default.  This test makes sure that the component or service loads properly.  Although I wasn't adding any more tests to the spec files, I found it really helpful to maintain the default test for each component.  This helped ensure all my components followed the coding conventions of the Angular framework.  It even helped me to make design decisions.  For example, when the test code for a component became really difficult or impossible to maintain, I'd create a new module to hold the component.  This is exactly what happened when I separated out the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CatPictureComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" into its own module. ",
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
                "value":" However, in general writing unit tests for Angular was a big pain.  On many occasions the unit testing code for a component would fail without any obvious reason.  Also there is no official documentation, so you have to hope someone else ran into the same issue and asked about it online.  This was not always the case. An easy to use testing suite could give React.js a leg up on Angular. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Future Steps"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Future Steps",
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
                "value":" That concludes the discussion on my MEAN Stack prototype.  If you want to check out the frontend code it is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype"
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" As far as further steps are concerned, I might continue updating this prototype as Angular versions advance.  That would be a nice way to keep informed about the framework and always have a working prototype to look back on. ",
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
                "value":" I may also deploy it to AWS or another cloud service.  Then I could get experience pushing an Angular app all the way to production! ",
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
                "value":" While I liked the Angular framework, it did have some shortcomings.  Weak points include less than ideal cross component data transfer and complex unit testing.  These shortcomings give React some room to beat Angular when I pick the front end JavaScript framework/library for my website.  Angular also does a lot of things well.  I really enjoyed the forms API and the strict framework simplifies frontend development.  TypeScript also really grew on me!  I'm excited to work with Angular again in the future and look forward to learning React! ",
                "children":null
            }
        ]
    }
];

postName = "mar-17-2018-mean-stack-prototype";
postDate = new Date('2018-03-17T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Creating a MEAN Stack Prototype",
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
            name: "Express",
            picture: "https://asset.jarombek.com/logos/express.png",
            color: "express"
        },
        {
            name: "Angular",
            picture: "https://asset.jarombek.com/logos/angular.png",
            color: "angular"
        },
        {
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        },
        {
            name: "Sass",
            picture: "https://asset.jarombek.com/logos/sass.png",
            color: "sass"
        },
        {
            name: "HTML",
            picture: "https://asset.jarombek.com/logos/html.png",
            color: "html"
        },
        {
            name: "TypeScript",
            picture: "https://asset.jarombek.com/logos/ts.png",
            color: "typescript"
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
            name: "ECMAScript 2017",
            picture: "https://asset.jarombek.com/logos/es2017.png",
            color: "javascript"
        },
        {
            name: "Bootstrap",
            picture: "https://asset.jarombek.com/logos/bootstrap.png",
            color: "bootstrap"
        },
        {
            name: "Mongoose",
            picture: "https://asset.jarombek.com/logos/mongoose.png",
            color: "mongoose"
        },
        {
            name: "Webpack",
            picture: "https://asset.jarombek.com/logos/webpack.png",
            color: "webpack"
        },
        {
            name: "JWT",
            picture: "https://asset.jarombek.com/logos/jwt.png",
            color: "jwt"
        },
        {
            name: "TravisCI",
            picture: "https://asset.jarombek.com/logos/travisci.png",
            color: "travisci"
        },
        {
            name: "NoSQL"
        },
        {
            name: "Document Database"
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
            startName: "\"Introducing Mongoose 5.0.0-rc0\", ",
            endName: "",
            linkName: "http://thecodebarbarian.com/introducing-mongoose-5.html",
            link: "http://thecodebarbarian.com/introducing-mongoose-5.html"
        },
        {
            startName: "\"Helmet\", ",
            endName: "",
            linkName: "https://helmetjs.github.io/",
            link: "https://helmetjs.github.io/"
        },
        {
            startName: "Kyle Banker, Peter Bakkum, Shaun Verch, Douglas Garrett &amp; Tom Hawkins, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2016), 89",
            linkName: "MongoDB In Action",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "",
            endName: "., 90",
            linkName: "Banker",
            link: "https://www.manning.com/books/mongodb-in-action-second-edition"
        },
        {
            startName: "Juho Vepsäläinen, ",
            endName: ", (2017), xi",
            linkName: "SurviveJS: Webpack",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "",
            endName: "., 259",
            linkName: "Vepsäläinen",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "\"__dirname returns '/' when js file is built with webpack\", ",
            endName: "",
            linkName: "https://github.com/webpack/webpack/issues/1599",
            link: "https://github.com/webpack/webpack/issues/1599"
        },
        {
            startName: "\"A guide to mocha's describe(), it() and setup hooks\", ",
            endName: "",
            linkName: "https://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/",
            link: "https://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/"
        },
        {
            startName: "Yakov Fain &amp; Anton Moiseev, ",
            endName: " (Shelter Island, NY: Manning, 2017), 33",
            linkName: "Angular 2 Development with TypeScript",
            link: "https://www.manning.com/books/angular-2-development-with-typescript"
        },
        {
            startName: "\"Cards\", ",
            endName: "",
            linkName: "http://v4-alpha.getbootstrap.com/components/card/",
            link: "http://v4-alpha.getbootstrap.com/components/card/"
        },
        {
            startName: "\"Spying OnInit and OnDestroy\", ",
            endName: "",
            linkName: "https://angular.io/guide/lifecycle-hooks#spy",
            link: "https://angular.io/guide/lifecycle-hooks#spy"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});