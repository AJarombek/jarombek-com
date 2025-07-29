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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-5-2018-graphql-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous post on GraphQL",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I gave a high level overview on the GraphQL ecosystem and how it compares to a traditional REST API. Now it is time to discuss the language features of GraphQL and how it can be used to create an API in JavaScript. ",
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
                "value":" There are two distinct pieces of GraphQL to remember.  First its a language to create queries for an API.  Second its a runtime library on the server to handle queries directed at the API.  The GraphQL language is what I will look at first. ",
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-5-2018-graphql-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous post on GraphQL",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I gave a high level overview on the GraphQL ecosystem and how it compares to a traditional REST API. Now it is time to discuss the language features of GraphQL and how it can be used to create an API in JavaScript. ",
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
                "value":" There are two distinct pieces of GraphQL to remember.  First its a language to create queries for an API.  Second its a runtime library on the server to handle queries directed at the API.  The GraphQL language is what I will look at first. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The GraphQL Language"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The GraphQL Language",
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
                "value":" The GraphQL language revolves around setting up an API schema (a model representation of the methods the API exposes).  GraphQL also has syntax to query the API schema. ",
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
                "value":" Let’s start by creating the API schema.  A GraphQL schema consists of different object types and scalar types.  Object types represent an object that can have multiple fields",
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
                "value":". Scalar types represent concrete data of the schema",
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
                "value":" Every GraphQL schema starts with one or two special root types - the mandatory ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"query",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type and the optional ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mutation",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type",
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
                "value":".  Every query that you write in GraphQL goes through the fields defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"query",
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
                "value":"mutation",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" types.  These fields are the equivalents of URL endpoints in a REST API model. ",
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
                "value":" The following code defines the entry point to the API in the GraphQL language: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"schema {\n  query: Query\n  mutation: Mutation\n}\n",
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
                "value":"schema",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an object type that holds two other object types as fields.  Queries fetch data from the API (like a ",
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
                "value":" request) and mutations manipulate data in the API (like ",
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
                "value":" requests). ",
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
                "value":" In my application, I created an API which handles exercise logging.  There are two different types of exercises that the API works with - cardio exercises (such as running or biking) and strength exercises (such as core or weight lifting).  Here is the API expressed in the GraphQL language: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"# Define all the root level queries for the GraphQL server\ntype Query {\n  # Test query just to make sure that GraphQL is working\n  test: String\n\n  # Queries for the Exercise interface.  Note that certain fields existing on concrete\n  # types implementing Exercise will not be accessible\n  getAllExercises: [Exercise]\n  getExercise(id: ID!): Exercise\n  getExercises(name: String!): [Exercise]\n  getExercisesByUser(user: String!): [Exercise]\n\n  # Queries for cardio specific exercises (ex. runs, bike rides, swims, etc.)\n  getAllCardioExercises: [Cardio]\n  getCardioExercise(id: ID!): Cardio\n  getCardioExercises(name: String!): [Cardio]\n  getCardioExercisesByUser(user: String!): [Cardio]\n\n  # Queries for strength specific exercises (ex. core, weight lifting)\n  getAllStrengthExercises: [Strength]\n  getStrengthExercise(id: ID!): Strength\n  getStrengthExercises(name: String!): [Strength]\n  getStrengthExercisesByUser(user: String!): [Strength]\n}\n\n# Define all the root level mutations for the GraphQL server\ntype Mutation {\n  createCardioExercise(cardio: CardioInput!): Cardio\n  createStrengthExercise(strength: StrengthInput!): Strength\n}\n",
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
                "value":" Types are defined with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  Each type contains fields, which can be passed a parameter.  For example, the field ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getExercises",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes in the parameter ",
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
                "value":".  The ",
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
                "value":" parameter is of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String!",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In GraphQL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a built-in scalar type, which is easiest to think of as a primitive type without any fields.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"!",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token means that the parameter can’t be null.  When queried, the field ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getExercises",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns an array of exercises, denoted as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[Exercise]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since there isn’t a non-null identifier on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[Exercise]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", it is possible no value gets returned. Putting all these concepts together, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getExercises",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field on type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Query",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is defined as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getExercises(name: String!): [Exercise]",
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
                "value":" Most of the API handles simple queries of existing data.  However, there are two fields defined as mutations, both of which will create new exercise objects on the server. ",
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
                "value":" If you read the comment above the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getAllExercises",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field, you may be wondering about these GraphQL interfaces.  Just like in any object oriented language, interfaces in GraphQL define fields that must be used in concrete types that implement the interface.  For my API model, I created an interface called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that concrete types ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cardio",
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
                "value":"Strength",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" implement. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"interface Exercise {\n  id: ID!\n  name: String!\n  user: String!\n  description: String\n  date: Date!\n}\n\ntype Cardio implements Exercise {\n  id: ID!\n  name: String!\n  user: String!\n  description: String\n  date: Date!\n  distance: Float\n  minutes: Int\n  seconds: Int\n  type: CardioType!\n}\n\ntype Strength implements Exercise {\n  id: ID!\n  name: String!\n  user: String!\n  description: String\n  date: Date!\n  workouts: [String]!\n  type: StrengthType!\n}\n",
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
                "value":" Interfaces are defined with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"interface",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword and implementing types use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"implements",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  While many of the fields in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are built-in scalar types (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
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
                "value":"Int",
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
                "value":"Float",
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
                "value":"ID",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), some of the types I defined myself. ",
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
                "value":"CardioType",
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
                "value":"StrengthType",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are enums, which represent a strict set of values.  Enums are defined with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"enum",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"enum CardioType {\n  RUN\n  BIKE\n  SWIM\n  SKI\n  HIKE\n}\n\nenum StrengthType {\n  CORE\n  LIFT\n  OTHER\n}\n",
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
                "value":"Date",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a custom scalar type.  It is defined in GraphQL as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"scalar Date",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", however the logic for how to handle custom scalars lives in the application code.  In my case that application code is JavaScript.  I will look at the JavaScript code in just a bit. ",
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
                "value":" One final group of types I created in GraphQL was inputs.  Input types allow complex objects to be passed as arguments for a mutation.  For example, one of my mutation fields was ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createCardioExercise(cardio: CardioInput!): Cardio",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", in which ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CardioInput",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an input type. Input types are defined with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"input",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"input ExerciseInput {\n  name: String!\n  user: String!\n  description: String\n  date: Date!\n}\n\ninput CardioInput {\n  name: String!\n  user: String!\n  description: String\n  date: Date!\n  distance: Float\n  minutes: Int\n  seconds: Int\n  type: CardioType\n}\n\ninput StrengthInput {\n  name: String!\n  user: String!\n  description: String\n  date: Date!\n  workouts: [String]!\n  type: StrengthType\n}\n",
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
                "value":" Unfortunately input types can’t implement interfaces, so there is a good bit of code duplication here.  Maybe that is something GraphQL can address later in its lifespan. ",
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
                "value":" Every code sample I just went over defined the API schema in the GraphQL language.  There are two other pieces that need to be put in place before we have a functioning GraphQL API.  First is the server API code, which in my case is JavaScript running in a NodeJS environment.  JavaScript will connect the GraphQL schema to actual data.  Finally I will query the GraphQL API using the GraphQL language. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"GraphQL.js"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"GraphQL.js",
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
                "value":" I set up a NodeJS environment to run an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://graphql.github.io/graphql-js/\nrunning-an-express-graphql-server/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Express GraphQL",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" server.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://expressjs.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Express",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a web application framework built in JavaScript.  The npm packages ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.npmjs.com/package/express-graphql"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"express-graphql",
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
                    "href":"https://www.npmjs.com/package/graphql-tools"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"graphql-tools",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" allow us to work with GraphQL in an Express web application. ",
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
                "value":" The main JavaScript file sets up a HTTP route for a web server.  When run locally the following code starts a GraphQL API server at ",
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
                        "value":"localhost:4000/",
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
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const express = require('express');\nconst graphqlHTTP = require('express-graphql');\n\nconst GraphQLSchema = require('./graphQLSchema');\nconst GraphQLRoot = require('./graphQLRoot');\n\nconst app = express();\napp.use('/', graphqlHTTP({\n  schema: GraphQLSchema,\n  rootValue: GraphQLRoot,\n  graphiql: true\n}));\n\nconst port = 4000;\napp.listen(port, () => {\n  console.info(`GraphQL Server Running on Port ${port}`);\n});\n",
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
                "value":" The method call ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app.use('/', graphqlHTTP({...}))",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" connects GraphQL to the route ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"graphqlHTTP()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method three things happen. ",
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
                "value":" First, I define the GraphQL schema.  This code, which you can view in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-sources/blob/master/2018/08-Aug/8-5-graphql/graphQLSchema.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" GraphQLSchema.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", pulls in all the GraphQL language files that define the schema.  This includes all the types such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
                "value":"Cardio",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" along with all the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"query",
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
                "value":"mutation",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" entry points.  I also perform additional logic that can’t be handled by GraphQL alone.  This includes defining custom scalar types (such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Date",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and resolving concrete types from an interface reference (do calls to the interface ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" return ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cardio",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Strength",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?). ",
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
                "value":" Second I define a root object for the GraphQL schema.  Each field in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"query",
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
                "value":"mutation",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" types represents a function that returns or manipulates data.  While the field is declared in GraphQL, its implementation must exist in the JavaScript code.  The query and mutation implementation functions are placed in an object called root.  I created two JavaScript files - one with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"root",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/08-Aug/8-5-graphql/\ngraphQLRoot.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"graphQLRoot.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and another with all the API data called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/08-Aug/8-5-graphql/\nexerciseData.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"exerciseData.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I won’t show all the content of these files here as they are quite long.  However, as an example here are the root JavaScript functions that correspond to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getAllExercises",
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
                "value":"getExercises",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" query fields in GraphQL: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const root = {\n\n  /**\n  * Get all the exercises in the data store\n  * @return {*} an array of exercises\n  */\n  getAllExercises: () => data.exercises,\n\n  /**\n  * Get all the exercises with a given name.  Name is not a unique field.\n  * @param arg - arguments passed through the getExercises() field.\n  * @return all the exercises that match a name.\n  */\n  getExercises: (arg) => {\n    return data.exercises.filter((exercise) => exercise.name === arg.name);\n  }\n}\n\nconst data = {\n  exercises: [\n    {\n      id: uuid(),\n      name: \"Early Morning Beach Run\",\n      user: \"Andy\",\n      description: \"Morning run on the beach with a few strides\",\n      date: Date.parse(\"Aug 3, 2018\"),\n      distance: 3.12,\n      minutes: 23,\n      seconds: 46,\n      type: \"RUN\"\n    },\n    {\n      id: uuid(),\n      name: \"Track Workout at High School\",\n      user: \"Andy\",\n      description: `Was drizzling during the warmup and raining for the workout.\n      6x1000m at a much slower pace than in college (3:12-3:20)`,\n      date: Date.parse(\"Aug 4, 2018\"),\n      distance: 8.75,\n      type: \"RUN\"\n    },\n    {\n      id: uuid(),\n      name: \"Push-Ups at Home\",\n      user: \"Andy\",\n      description: \"It was exhausting\",\n      date: Date.parse(\"Aug 4, 2018\"),\n      workouts: [\"Push-Ups\", \"Sit-Ups\"],\n      type: \"CORE\"\n    }\n  ]\n}\n",
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
                "value":" Now I have the GraphQL schema set up along with functions corresponding to query and mutation endpoints.  The final field in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"graphqlHTTP()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method allows us to use GraphiQL, which is a debugging GUI for GraphQL in the browser.  It is almost like having ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.getpostman.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Postman",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" inside your browser to test a GraphQL API. GraphiQL is a really powerful tool to test GraphQL APIs.  I wish I had something similar for testing REST endpoints! ",
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
                "value":" This section was an extremely quick look at the JavaScript portion of the GraphQL API server, but I encourage you to explore the full inline documented code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2018/08-Aug/8-5-graphql"
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Querying the GraphQL API"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Querying the GraphQL API",
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
                "value":" Luckily, since I enabled the GraphiQL GUI debugger, all I have to do is run ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"node index.js",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and open my browser to start testing the GraphQL API.  GraphiQL has a really nice UI for writing queries and even has full documentation of the queries and mutations defined by the API. ",
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
                    "src":"https://asset.jarombek.com/posts/8-8-18-graphiql.png"
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
                "value":" Queries are written in the GraphQL language.  They are written with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"query",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword (although there is also a shorthand query syntax where the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"query",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword can be omitted).  If you name your queries, GraphiQL will help by providing a dropdown to pick what query to execute. ",
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
                "value":" The simplest query I made simply tests if GraphQL is running properly: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"query Test {\n  test\n}\n",
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
                "value":" GraphQLs response: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"data\": {\n    \"test\": \"Hello From GraphQL!\"\n  }\n}\n",
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
                "value":" Remember that GraphQL allows clients of the API to explicitly ask for the fields they want in the response body.  The following query calls the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getExercisesByUser",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" endpoint, asking only for the ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"description",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" fields.  There are other fields in the type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", but we only want these two. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"query AndyExercises {\n  getExercisesByUser(user: \"Andy\") {\n    name\n    description\n  }\n}\n",
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
                "value":" Response: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"data\": {\n    \"getExercisesByUser\": [\n      {\n        \"name\": \"Early Morning Beach Run\",\n        \"description\": \"Morning run on the beach with a few strides\"\n      },\n      {\n        \"name\": \"Track Workout at High School\",\n        \"description\": \"Was drizzling during the warmup and raining for the workout.  6x1000m at a much slower pace than in college (3:12-3:20)\"\n      },\n      {\n        \"name\": \"Push-Ups at Home\",\n        \"description\": \"It was exhausting\"\n      }\n    ]\n  }\n}\n",
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
                "value":" Mutations are also easy to execute.  The following mutation creates a new running exercise.  After it is created, I ask for all the newly created fields back from the API. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"GraphQL"
        },
        "value":"mutation AddNewRun {\n  createCardioExercise(cardio: {\n    name: \"Beautiful Sunday Long Run\"\n    user: \"Andy\"\n    date: \"Aug 5, 2018\"\n    distance: 12.31\n    type: RUN\n  }) {\n    id\n    name\n    user\n    date\n    distance\n    type\n  }\n}\n",
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
                "value":" Response: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"data\": {\n    \"createCardioExercise\": {\n      \"id\": \"813423fe-5954-4137-93e4-fe5bf7a23c68\",\n      \"name\": \"Beautiful Sunday Long Run\",\n      \"user\": \"Andy\",\n      \"date\": \"2018-08-05T04:00:00.000Z\",\n      \"distance\": 12.31,\n      \"type\": \"RUN\"\n    }\n  }\n}\n",
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
                "value":" I created querys and mutations for all the defined endpoints, which you can check out in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/08-Aug/8-5-graphql/\nqueries.graphql"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"queries.graphql",
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
            "title":"Wrapping Up"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Wrapping Up",
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
                "value":" After working with GraphQL for the first time, I am really intrigued by this new way of creating an API.  Sometime in the future I will create a full GraphQL API prototype with a front-end and database.  At that point I can make a conclusion about GraphQLs use in a production application. Maybe someday GraphQL will even replace the REST APIs I enjoy working with so much! ",
                "children":null
            }
        ]
    }
];

postName = "aug-9-2018-graphql-pt2";
postDate = new Date('2018-08-09T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "GraphQL Part II - A JavaScript Implementation",
    description: `It is time to discuss the language features of GraphQL and how it can be used 
        to create an API in JavaScript.`,
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
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
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
            startName: "\"Object types and fields\", ",
            endName: "",
            linkName: "http://graphql.github.io/learn/schema/#object-types-and-fields",
            link: "http://graphql.github.io/learn/schema/#object-types-and-fields"
        },
        {
            startName: "\"Scalar types\", ",
            endName: "",
            linkName: "http://graphql.github.io/learn/schema/#scalar-types",
            link: "http://graphql.github.io/learn/schema/#scalar-types"
        },
        {
            startName: "\"The Query and Mutation types\", ",
            endName: "",
            linkName: "http://graphql.github.io/learn/schema/#the-query-and-mutation-types",
            link: "http://graphql.github.io/learn/schema/#the-query-and-mutation-types"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});