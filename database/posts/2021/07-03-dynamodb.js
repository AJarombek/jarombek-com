/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/2/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" DynamoDB is a NoSQL database on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=AWS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specializing in key-value and document storage.  DynamoDB is fully managed by AWS, meaning users don't need to provision any servers for it to run on.  I often compare DynamoDB to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=MongoDB&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MongoDB",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", due to their similar functionality and JSON document/item structure. ",
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
                "value":" Recently, DynamoDB has come up quite a bit in engineering conversations I've had in relation to building cloud native applications.  I wrote ",
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
                        "value":"a",
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
                        "value":"series",
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
                        "value":"of",
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
                        "value":"articles",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on MongoDB in 2017 while I was prototyping with the database.  Recently I did the same with DynamoDB, creating a sample DynamoDB table with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Terraform&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and using AWS SDKs to modify and test its contents.  This article discusses what I've learned about DynamoDB and showcases my prototype code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is DynamoDB?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is DynamoDB?",
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
                "value":" DynamoDB is a managed NoSQL database that is hosted on AWS. DynamoDB is closed source and fully managed by AWS; No installation of DynamoDB on a server is required.  Engineers simply use the service and are charged based on the amount of data they store, along with read and write capacity",
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
                "value":".  DynamoDB is both a key-value store and a document database.  The main components of DynamoDB are tables, items, and attributes",
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
        "el":"definition",
        "attributes":{
            "word":"DynamoDB Table"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A DynamoDB table is a collection of items.  Tables define a schema for their items.  However, you don't need to define all the attributes that exist in an item within the schema.  This makes DynamoDB tables very flexible compared to SQL database tables, which have static schemas.  A DynamoDB table is roughly equivalent to a ",
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
                        "value":"MongoDB collection",
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
        "el":"definition",
        "attributes":{
            "word":"DynamoDB Item"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A DynamoDB item is an object with attributes.  Items are members of a table, and follow the schema of the table.  Items are stored in a “marshalled” JSON format",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"3,4",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". For example, the JSON data ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{\"name\": \"Andy\"}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is stored in DynamoDB as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{\"name\": {\"S\": \"Andy\"}}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This is slightly different from MongoDB, which stores data in BSON (Binary JSON) format.  A DynamoDB item is roughly equivalent to a ",
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
                        "value":"MongoDB document",
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
        "el":"definition",
        "attributes":{
            "word":"DynamoDB Attribute"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A DynamoDB attribute is a name-value pair that exists on an item.  Attributes are the most fundamental building block of data in DynamoDB.  The names of attributes are strings.  Attributes can have three types of values: scalar, document, and set",
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
                "value":". Scalar types include primitive data types such as strings, numbers, and booleans. Document types are JSON documents, containing objects and arrays. Set types are groups of scalar values.  A DynamoDB scalar is roughly equivalent to a ",
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
                        "value":"MongoDB field",
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
                "value":" DynamoDB tables are required to have a primary key, and can optionally have one or more secondary indexes.  There are two types of primary keys: ",
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
                        "value":"partition keys",
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
                        "value":"sort keys",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Partition keys and sort keys are assigned to attributes in a table.  If a table only has a partition key, each item in the table must have a unique value for that partition key attribute.  If a table has a partition key and a sort key, this is called a composite key.  In a composite key, the combination of the partition key attribute and sort key attribute must be unique for each item in the table.  Partition keys and sort keys also help DynamoDB with its internal storage of table data",
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
                "value":" In addition to primary keys, DynamoDB tables can have secondary indexes. One difference between DynamoDB and traditional SQL relational databases is that in DynamoDB, queries of tables can only be performed on attributes that are primary keys or secondary indexes. In contrast, relational database tables can be queried using any of their columns, no matter if they are a primary key, indexed or otherwise. This makes secondary indexes in DynamoDB very important. ",
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
                "value":" Secondary indexes allow for attributes other than the primary keys to be queried.  There are two types of secondary indexes: ",
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
                        "value":"global secondary indexes",
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
                        "value":"local secondary indexes",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A global secondary index creates an index with a partition key and sort key other than the ones assigned to the table, while a local secondary index creates an index with a partition key matching the one assigned to the table, but with a different sort key",
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
                "value":".  While global secondary indexes are extremely useful, they are not free.  To build a secondary index, DynamoDB must maintain an additional read-only projection of the table, which adds to service costs",
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
                "value":" My first impression of DynamoDB is that it's very easy to use, especially for those with MongoDB experience.  I have yet to see how well it scales up for large datasets, but for prototyping and small applications it seems like a really nice option. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"DynamoDB Prototype Architecture"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"DynamoDB Prototype Architecture",
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
                "value":" The DynamoDB prototype I created consists of a single table with a primary key and a global secondary index.  The table represents stuffed animals, and is appropriately named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stuffed-animals",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The basic table architecture is configured with Terraform, along with a few items.  The following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/samples/dynamodb/infra/main.tf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stuffed-animals",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" table. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_dynamodb_table\" \"table\" {\n  name = \"stuffed-animals\"\n  billing_mode = \"PROVISIONED\"\n  read_capacity = 20\n  write_capacity = 20\n\n  hash_key = \"id\"\n\n  attribute {\n    name = \"id\"\n    type = \"N\"\n  }\n\n  attribute {\n    name = \"name\"\n    type = \"S\"\n  }\n\n  attribute {\n    name = \"species\"\n    type = \"S\"\n  }\n\n  global_secondary_index {\n    name = \"NameIndex\"\n    hash_key = \"name\"\n    range_key = \"species\"\n    write_capacity = 10\n    read_capacity = 10\n    projection_type = \"INCLUDE\"\n    non_key_attributes = [\"description\"]\n  }\n\n  tags = {\n    Name = \"stuffed-animals-table\"\n    Application = \"dynamodb-sample\"\n    Environment = \"sandbox\"\n  }\n}\n",
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
                "value":" In the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_dynamodb_table",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"hash_key",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (partition key) argument sets the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attribute as the partition key for the table. The table schema defines three attributes inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"attribute",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code blocks: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"N",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (number), ",
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
                "value":" of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"S",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (string), and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"species",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"S",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (string). As mentioned earlier, items can have more attributes than those defined in the schema, but schemas do give a rough outline for the shape of items. The table also has one global secondary index named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NameIndex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"global_secondary_index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code block. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NameIndex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has a hash key (partition key) of ",
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
                "value":" and a range key (sort key) of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"species",
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
                "value":" After creating the DynamoDB table, the Terraform code creates two items with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_dynamodb_table_item",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_dynamodb_table_item\" \"dotty\" {\n  table_name = aws_dynamodb_table.table.name\n  hash_key = aws_dynamodb_table.table.hash_key\n  item = file(\"dotty.json\")\n}\n\nresource \"aws_dynamodb_table_item\" \"lily\" {\n  table_name = aws_dynamodb_table.table.name\n  hash_key = aws_dynamodb_table.table.hash_key\n  item = file(\"lily.json\")\n}\n",
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
                "value":" While this code is important for adding the items to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stuffed-animals",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" table, the most interesting details are in the JSON files which are values for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"item",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attributes. For example, here is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/samples/dynamodb/infra/dotty.json"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JSON file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the first item, a stuffed animal horse named Dotty. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"id\": {\"N\": \"1\"},\n  \"name\": {\"S\": \"Dotty\"},\n  \"species\": {\"S\": \"Horse\"},\n  \"description\": {\"S\": \"Small spotted horse who loves to cuddle.  She also has beautiful flappy ears.\"},\n  \"favorite_activity\": {\"S\": \"Sleeping under a blanket\"}\n}\n",
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
                "value":" Notice that the JSON is in the marshalled format discussed earlier, with data types specified for each attribute.  When this Terraform code is built, the table and items are created and viewable from the AWS console. ",
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
                    "src":"https://asset.jarombek.com/posts/7-3-21-dynamodb-aws-console.png"
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
                "value":" The remainder of the DynamoDB prototype consists of AWS Go SDK code for querying and creating items, and AWS Python SDK code for DynamoDB table and infrastructure tests. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"DynamoDB Coding with the Go AWS SDK"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"DynamoDB Coding with the Go AWS SDK",
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
                "value":" AWS provides software development kits (SDKs) in multiple programming languages, including Go and Python.  Recently I started working with Go, a programming language developed at Google and first released in 2009.  I've really enjoyed working with Go, and have tried to incorporate it into more and more projects.  In one sentence, the main reason I like Go is that it has all the benefits of a statically typed language, but still has a concise syntax that is easy to write. ",
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
                "value":" I decided to incorporate Go into my DynamoDB prototype through the use of the Go AWS SDK.  Using this SDK, I scan all items, add items, remove items, and more from the DynamoDB table.  My Go code is located in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/samples/dynamodb/app/main.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"main.go",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. The AWS SDK has ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://aws.github.io/aws-sdk-go-v2/docs/getting-started/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" online, although I've found it a bit incomplete. ",
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
                "value":" The Go code is just a script in a single ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"main()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  For starters, it scans the DynamoDB table and checks that the expected number of items are returned. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"cfg, err := config.LoadDefaultConfig(context.TODO())\n\nif err != nil {\n    panic(\"unable to load AWS SDK config, \" + err.Error())\n}\n\nclient := dynamodb.NewFromConfig(cfg)\n\ntableName := \"stuffed-animals\"\ninput := &dynamodb.ScanInput{\n    TableName: &tableName,\n}\n\nrecords, err := client.Scan(context.TODO(), input)\n\nif err != nil {\n    panic(\"Table scan failed, \" + err.Error())\n}\n\nif records.Count != 2 {\n    panic(\"Dotty and Lily were not found in DynamoDB!  They must be busy napping.\")\n}\n",
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
                "value":" DynamoDB has two main API methods for getting items: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Scan",
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
                "value":"Query",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  While a table scan retrieves all the items in a table, a query uses primary keys and secondary indexes to retrieve a subset of items.  The next piece of code updates an existing item in the table. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"teddy := map[string]types.AttributeValue{\n    \"id\": &types.AttributeValueMemberN{Value: \"3\"},\n    \"name\": &types.AttributeValueMemberS{Value: \"Teddy\"},\n    \"species\": &types.AttributeValueMemberS{Value: \"Bear\"},\n    \"description\": &types.AttributeValueMemberS{\n        Value: \"The OG and forever loyal, Teddy always gives and asks for nothing in return.\",\n    },\n}\n\nputInput := &dynamodb.PutItemInput{\n    TableName: &tableName,\n    Item: teddy,\n}\n\n_, err = client.PutItem(context.TODO(), putInput)\n\nif err != nil {\n    panic(\"Failed to create a new item in DynamoDB.\")\n}\n",
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
                "value":" The next piece of code bulk inserts three new items into the table. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"fluffy := map[string]types.AttributeValue{\n    \"id\": &types.AttributeValueMemberN{Value: \"4\"},\n    \"name\": &types.AttributeValueMemberS{Value: \"Fluffy\"},\n    \"species\": &types.AttributeValueMemberS{Value: \"Goat\"},\n    \"description\": &types.AttributeValueMemberS{\n        Value: \"Retired daredevil, Fluffy now enjoys relaxing under a warm blanket.\",\n    },\n}\n\nspiky := map[string]types.AttributeValue{\n    \"id\": &types.AttributeValueMemberN{Value: \"5\"},\n    \"name\": &types.AttributeValueMemberS{Value: \"Spiky\"},\n    \"species\": &types.AttributeValueMemberS{Value: \"Goat\"},\n    \"description\": &types.AttributeValueMemberS{\n        Value: \"Little brother of Fluffy.\",\n    },\n}\n\ngrandmasBlanket := map[string]types.AttributeValue{\n    \"id\": &types.AttributeValueMemberN{Value: \"6\"},\n    \"name\": &types.AttributeValueMemberS{Value: \"Grandma's Blanket\"},\n    \"species\": &types.AttributeValueMemberS{Value: \"Blanket\"},\n    \"description\": &types.AttributeValueMemberS{\n        Value: \"Does Grandma's blanket qualify as a stuffed animal?  The debate rages on.\",\n    },\n}\n\nfluffyPutRequest := types.PutRequest{\n    Item: fluffy,\n}\n\nspikyPutRequest := types.PutRequest{\n    Item: spiky,\n}\n\ngrandmasBlanketPutRequest := types.PutRequest{\n    Item: grandmasBlanket,\n}\n\nwriteRequest := map[string][]types.WriteRequest{\n    tableName: {\n        { PutRequest: &fluffyPutRequest },\n        { PutRequest: &spikyPutRequest },\n        { PutRequest: &grandmasBlanketPutRequest },\n    },\n}\n\nbatchWriteInput := &dynamodb.BatchWriteItemInput{\n    RequestItems: writeRequest,\n}\n\n_, err = client.BatchWriteItem(context.TODO(), batchWriteInput)\n\nif err != nil {\n    panic(\"Failed to create new items in DynamoDB (bulk insert).\")\n}\n",
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
                "value":" The final piece of code deletes one of the items I added. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"deleteKeyMap := map[string]types.AttributeValue{\n    \"id\": &types.AttributeValueMemberN{Value: \"6\"},\n}\n\ndeleteInput := &dynamodb.DeleteItemInput{\n    TableName: &tableName,\n    Key: deleteKeyMap,\n}\n\n_, err = client.DeleteItem(context.TODO(), deleteInput)\n",
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
                "value":" If there is one thing you should take away from this code, its that while DynamoDB operations are easy to work with, they aren't as simplistic as SQL.  The expressiveness of SQL is often an argument used for relational SQL databases over NoSQL databases, and that argument can be used against DynamoDB as well.  However, the setup ease of DynamoDB is often such a great benefit that the lack of a sophisticated SQL-like querying model is a sacrifice worth taking. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"DynamoDB Testing with the Python AWS SDK"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"DynamoDB Testing with the Python AWS SDK",
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
                "value":" I wrote tests for my DynamoDB table in Python using the AWS SDK.  This ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/samples/dynamodb/test/testTerraformInfra.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"test",
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
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/samples/dynamodb/test/testGoSdkInfra.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides more examples of how to scan and query a DynamoDB table. ",
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
                "value":" As previously shown in the Go code, scanning a DynamoDB table is the simplest way to get all its items.  In Python, scanning a table and checking its item count is achieved with the following code. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"table: Table = self.dynamodb_resource.Table('stuffed-animals')\nresponse = table.scan()\nitems: List[dict] = response.get('Items')\n\nself.assertEqual(2, len(items))\n",
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
                "value":" While I prefer the SQL equivalent of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SELECT COUNT(*) FROM tablename",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", scanning is very simple and easy.  Querying tables for items that match certain criteria is where things get a bit more complicated.  For example, let's compare two queries.  The first query uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" partition key on the table to retrieve an item with an id of ",
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
                        "value":"2",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The second query uses the ",
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
                "value":" partition key on the secondary index to retrieve an item with the name ",
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
                        "value":"dotty",
                        "children":null
                    }
                ]
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"table: Table = self.dynamodb_resource.Table('stuffed-animals')\nresponse = table.query(\n    KeyConditionExpression=Key('id').eq(2)\n)\nitems: List[dict] = response.get('Items')\n\nself.assertEqual(1, len(items))\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"response = table.query(\n    IndexName='NameIndex',\n    KeyConditionExpression=Key('name').eq('Dotty')\n)\nitems: List[dict] = response.get('Items')\n\nself.assertEqual(1, len(items))\n",
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
                "value":" The syntax is pretty simple and can be easily learned through use, but the important takeaway is that queries are written differently depending on whether you use a key on a table vs. a key on a secondary index. This is different from SQL which treats all attributes (columns) the same when querying.  In SQL, when querying with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WHERE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause there is no difference between filtering on a primary key column vs. a foreign key column vs. an indexed column. ",
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
                "value":" Advanced DynamoDB queries are beyond the scope of this article, but I plan to experiment with them in the future. However, just based off these simple queries I can tell that the querying mechanism is not as robust as SQL. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Tying the Pieces Together with Jenkins"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Tying the Pieces Together with Jenkins",
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
                "value":" The final piece of my DynamoDB prototype is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Jenkins&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jenkins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" job that  runs the full process of building the Terraform infrastructure, testing the state of the DynamoDB table, running the Go code, and then testing the table again. The code for this Jenkins job is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-jenkins-jobs/tree/master/prototypes/devops-prototypes/dynamodb-sample-test"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" GitHub",
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
                "value":" DynamoDB is a valuable NoSQL database for engineers who work with AWS to know, given how easy it is to set up and its ability to hold JSON structured data.  The query mechanism DynamoDB offers is inferior to SQL, but this is often an acceptable sacrifice for applications to take.  Compared to MongoDB, DynamoDB is easier to setup and manage, but MongoDB has more querying and data aggregation features that make it more suited for complex applications.  As I work with DynamoDB more, I'll better understand how it scales and know more of its pros and cons.  All the code for the DynamoDB prototype is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/tree/master/samples/dynamodb"
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

preview = content.slice(0, 2);

postName = "jun-3-2021-dynamodb";
postDate = new Date('2021-07-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring AWS DynamoDB",
    description: `DynamoDB is a valuable NoSQL database for engineers who work with AWS to know, given how easy it is 
        to set up and its ability to hold JSON structured data.  The query mechanism DynamoDB offers is inferior to 
        SQL, but this is often an acceptable sacrifice for applications to take.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "DynamoDB",
            picture: "https://asset.jarombek.com/logos/dynamodb.png",
            color: "dynamodb"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Go",
            picture: "https://asset.jarombek.com/logos/go.png",
            color: "go"
        },
        {
            name: "HCL"
        },
        {
            name: "MongoDB",
            picture: "https://asset.jarombek.com/logos/mongodb.png",
            color: "mongodb"
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
            startName: "Michael Wittig & Andreas Wittig, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2019), 350",
            linkName: "Amazon Web Services In Action",
            link: "https://www.manning.com/books/amazon-web-services-in-action-second-edition"
        },
        {
            startName: "\"Core Components of Amazon DynamoDB\", ",
            endName: "",
            linkName: "https://amzn.to/3jHq4Aq",
            link: "https://amzn.to/3jHq4Aq"
        },
        {
            startName: "\"DynamoDB Converter Tool\", ",
            endName: "",
            linkName: "https://dynobase.dev/dynamodb-json-converter-tool/",
            link: "https://dynobase.dev/dynamodb-json-converter-tool/"
        },
        {
            startName: "\"@aws-sdk/util-dynamodb: marshall\", ",
            endName: "",
            linkName: "https://amzn.to/3dDO5og",
            link: "https://amzn.to/3dDO5og"
        },
        {
            startName: "\"Naming Rules and Data Types: Data Types\", ",
            endName: "",
            linkName: "https://amzn.to/3qPXgav",
            link: "https://amzn.to/3qPXgav"
        },
        {
            startName: "\"Core Components of Amazon DynamoDB: Primary Key\", ",
            endName: "",
            linkName: "https://amzn.to/2ToJ7oE",
            link: "https://amzn.to/2ToJ7oE"
        },
        {
            startName: "\"Core Components of Amazon DynamoDB: Secondary Indexes\", ",
            endName: "",
            linkName: "https://amzn.to/3AnQVHA",
            link: "https://amzn.to/3AnQVHA"
        },
        {
            startName: "",
            endName: ", 368-369",
            linkName: "Wittig.",
            link: "https://www.manning.com/books/amazon-web-services-in-action-second-edition"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
