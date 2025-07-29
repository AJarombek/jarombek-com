/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/14/2019
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
                "value":" Over the past few months I've read a book about the ELK stack.  ",
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
                        "value":"ELK",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stands for ",
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
                        "value":"E",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"lasticsearch, ",
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
                        "value":"L",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"ogstash, and ",
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
                        "value":"K",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"ibana.  Together these three technologies provide the ability to search, stream, and visualize data.  In this article I discuss Elasticsearch, which is the core technology of ELK Stack.  First I'll define Elasticsearch and provide details about what its used for.  Second I'll create AWS infrastructure for Elasticsearch using Amazon Elasticsearch Service.  Third and finally I'll populate Elasticsearch with data and show some basic queries. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is Elasticsearch"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Elasticsearch?",
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
                "value":" Over the past few months I've read a book about the ELK stack.  ",
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
                        "value":"ELK",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stands for ",
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
                        "value":"E",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"lasticsearch, ",
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
                        "value":"L",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"ogstash, and ",
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
                        "value":"K",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"ibana.  Together these three technologies provide the ability to search, stream, and visualize data.  In this article I discuss Elasticsearch, which is the core technology of ELK Stack.  First I'll define Elasticsearch and provide details about what its used for.  Second I'll create AWS infrastructure for Elasticsearch using Amazon Elasticsearch Service.  Third and finally I'll populate Elasticsearch with data and show some basic queries. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Elasticsearch"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Elasticsearch?",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Elasticsearch"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Elasticsearch is a search and analytics engine",
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
                "value":".  It's also a document-oriented NoSQL database that holds data in schemaless JSON documents and provides the ability to query data using JSON syntax",
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
                "value":". Elasticsearch is very fast at querying data, especially when performing text searches",
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
                "value":".  It's the core technology of ELK stack, along with Logstash and Kibana.  Logstash is utilized as a pipeline for data into Elasticsearch and Kibana is used as a way to visualize the data in Elasticsearch. ",
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
                "value":" Elasticsearch is commonly used to perform quick text searches.  I've explored ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\ndec-30-2017-nodejs-mongodb-api-prototype#text-search"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"text searching",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" briefly in the past with MongoDB and Node.js.  However, text search isn't the main reason to use a document store like MongoDB.  If you want a data store built around text search, Elasticsearch is a great option. ",
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
                "value":" Elasticsearch is also used for analytics, which is the process of discovering patterns in a large data set. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Creating an Elasticsearch Server on AWS"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Creating an Elasticsearch Server on AWS",
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
                "value":" An Elasticsearch server can be run locally, on a virtual machine, on a container, or by other means.  AWS provides a service for Elasticsearch called Amazon Elasticsearch Service.  Behind the scenes Amazon Elasticsearch Service runs an Elasticsearch cluster on EC2 virtual machines.  Amazon takes care of these EC2 instances, allowing developers to focus on populating and querying data instead of infrastructure maintenance. ",
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
                "value":" I built the AWS infrastructure for Elasticsearch with Terraform.  The following code creates a new Elasticsearch domain: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"locals {\n  public_cidr = \"0.0.0.0/0\"\n  my_ip_address = var.ip_address\n  es_domain = \"sandbox-elasticsearch-demo\"\n}\n\n#-----------------------\n# Existing AWS Resources\n#-----------------------\n\ndata \"aws_region\" \"current\" {}\n\ndata \"aws_caller_identity\" \"current\" {}\n\ndata \"template_file\" \"elasticsearch-access-policy\" {\n  template = file(\"es-access-policy.json\")\n\n  vars = {\n    MY_IP = local.my_ip_address\n    REGION = data.aws_region.current.name\n    ACCOUNT_ID = data.aws_caller_identity.current.account_id\n    ES_DOMAIN = local.es_domain\n  }\n}\n\n#------------------\n# New AWS Resources\n#------------------\n\nresource \"aws_elasticsearch_domain\" \"elasticsearch\" {\n  domain_name = local.es_domain\n  elasticsearch_version = \"7.1\"\n\n  cluster_config {\n    instance_type = \"t2.small.elasticsearch\"\n    instance_count = 1\n  }\n\n  ebs_options {\n    ebs_enabled = true\n    volume_size = 10\n  }\n\n  snapshot_options {\n    automated_snapshot_start_hour = 23\n  }\n\n  tags = {\n    Name = \"sandbox-elasticsearch-demo-domain\"\n    Application = \"jarombek-com-sources\"\n    Environment = \"sandbox\"\n  }\n}\n\nresource \"aws_elasticsearch_domain_policy\" \"elasticsearch-policy\" {\n  domain_name = aws_elasticsearch_domain.elasticsearch.domain_name\n  access_policies = data.template_file.elasticsearch-access-policy.rendered\n}\n",
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
                "value":" The rest of the file is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/\n2019/09-Sep/09-15-elasticsearch/main.tf"
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
                "value":".  This Terraform infrastructure has a single input argument called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ip_address",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which specifies the IP address that has access to the ElasticSearch endpoints.  I set this IP address to my local computer.  The Terraform infrastructure is built with the following command: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"terraform apply -auto-approve -var 'ip_address=xxx.xxx.xxx.xxx'\n",
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
                "value":" Terraform creates two resources for Elasticsearch - the domain and the domain policy.  An Elasticsearch domain is the server managed by AWS.  The domain policy is an IAM policy which specifies what AWS resources Elasticsearch has access to along with who has access to the Elasticsearch domain.  In my case, the policy grants an IP address full access to the Elasticsearch domain.  To get the URL for Elasticsearch and Kibana, navigate to the Elasticsearch domain in the AWS Console: ",
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
                    "src":"https://asset.jarombek.com/posts/9-15-19-aws-console.png"
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
                "value":" Using the Kibana URL in a browser should navigate to the Elasticsearch server's Kibana UI.  If you get a DNS error instead, make sure you used the proper IP address in the Terraform module. ",
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
                    "src":"https://asset.jarombek.com/posts/9-15-19-kibana-ui.png"
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
                "value":" Now it's time to start working with Elasticsearch! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Elasticsearch Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Elasticsearch Basics",
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
                "value":" The three main constructs in Elasticsearch are indexes, types, and documents. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Elasticsearch Constructs"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Index ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" An index is a container for a type in Elasticsearch.  In RDBMS terms, an index is similar to a database schema (however in Elasticsearch an index can only hold a single type while in an RDBMS a schema can contain multiple tables).  In MongoDB terms, an index is similar to a database.  However, in MongoDB, a database can also hold multiple types (collections). ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Type ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" A type is a logical grouping of documents in Elasticsearch.  By default, types in  Elasticsearch are schemaless. This means documents within a type can contain different fields.  However, the data type used by a field in a type must be consistent across all documents.  Schemas for types can be created through mappings.  In RDBMS terms, a type is similar to a table (However in RDBMS a table has a strict schema).  In MongoDB terms, a type is the same construct as a collection. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Document ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" A document holds data in fields and conforms to a certain type in Elasticsearch.  Documents are represented as JSON.  In RDBMS terms, a document is similar to a row in a table (although a row in a relational database can't hold nested data while a JSON document in Elasticsearch can).  A document in MongoDB is the same construct as a document in Elasticsearch. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
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
                "value":" There are two simple ways to manipulate indexes, types, and documents.  The first is to use the Dev Tools Console in the Kibana UI and the second is to use cURL.  In the upcoming examples I'll utilize both. ",
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
                "value":" It's time to create some initial data in Elasticsearch representing license plates in my collection.  The first step is to create an index and a mapping for the type in the index.  The index defines the number of shards and replicas it uses.  The type mapping declares the data types of the fields in the document. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"settings\": {\n    \"index\": {\n      \"number_of_shards\": 5,\n      \"number_of_replicas\": 2\n    }\n  },\n  \"mappings\": {\n    \"properties\": {\n      \"name\": {\n        \"type\": \"text\"\n      },\n      \"description\": {\n        \"type\": \"keyword\",\n        \"ignore_above\": 256\n      },\n      \"user\": {\n        \"type\": \"text\"\n      },\n      \"issued\": {\n        \"type\": \"integer\"\n      },\n      \"number\": {\n        \"type\": \"text\"\n      },\n      \"state\": {\n        \"type\": \"text\"\n      },\n      \"state_code\": {\n        \"type\": \"text\"\n      },\n      \"country\": {\n        \"type\": \"text\"\n      },\n      \"resale\": {\n        \"type\": \"nested\",\n        \"properties\": {\n          \"top_range\": {\n            \"type\": \"double\"\n          },\n          \"bottom_range\": {\n            \"type\": \"double\"\n          }\n        }\n      }\n    }\n  }\n}\n",
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
                "value":" I built the index and mapping in Kibana with the following PUT (create) request: ",
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
                    "src":"https://asset.jarombek.com/posts/9-15-19-kibana-index-put.png"
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
                "value":" Let's first go over shards and replicas.  An Elasticsearch cluster is highly available across multiple machines. In the case of Amazon Elasticsearch Service, these machines are EC2 VMs.  The machines in an Elasticsearch cluster are called nodes.  Shards divide documents in an index across the nodes in a cluster",
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
                "value":".  My configuration defines five shards for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" index. These shards are evenly distributed across the nodes in the cluster.  Replicas (also known as replica shards) are copies of shards which exist for high-availability purposes",
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
                "value":".  If one of the nodes goes down, all the shards on that node are no longer available.  With replicas, a copy of those shards are stored on the other nodes. ",
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
                "value":" Now let's go over the type mapping.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"properties",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object in the JSON document defines all the fields in the type.  Each field has a data type defined by the ",
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
                "value":" property.  For example, the ",
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
                "value":" field has type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"text",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the ",
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
                "value":" field has type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"keyword",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The type mapping also demonstrates the ability for documents to contain nested fields.  The data type of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"resale",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nested",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", representing a nested object. ",
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
                "value":" Data types such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"integer",
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
                "value":"nested",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are fairly self-explanatory.  However, the difference between ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"text",
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
                "value":"keyword",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" requires further explanation.  While both handle string data, they behave differently when queried.  Querying a field of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"text",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" performs a full-text search.  Querying a field of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"keyword",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" performs a keyword search. ",
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
                "value":" Full-text searches are how search engines work.  When querying documents with a string, full-text searches don't just check for exact matches against a field, but also partial matches and close matches.  On the other hand, keyword searches always check for exact matches against a field",
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
                "value":" Let's populate the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"license_plate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" index and type with some documents.  One way to create documents is by writing a PUT request in Kibana: ",
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
                    "src":"https://asset.jarombek.com/posts/9-15-19-kibana-create-doc.png"
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
                "value":" Another way is to write cURL commands in Bash.  The following code creates a JSON document for a license plate and uses it in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"curl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command-line tool. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"name\": \"ct-passenger-default-1987\",\n  \"description\": \"A passenger license plate from Connecticut, USA in 1987.  Follows the default state scheme.\",\n  \"user\": \"passenger\",\n  \"issued\": 1987,\n  \"number\": \"BUSCH 5\",\n  \"state\": \"Connecticut\",\n  \"state_code\": \"CT\",\n  \"country\": \"USA\",\n  \"resale\": {}\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl -XPUT ${ES_ENDPOINT}/license_plate/_doc/2 -H 'Content-Type: application/json' \\\n  -d @data/license_plate/ct_1987_passenger.json\n",
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
                "value":" I created seven license plate documents in total, all of which can be viewed on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2019/09-Sep/09-15-elasticsearch/data/license_plate"
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2019/09-Sep/09-15-elasticsearch/\nes-curl-commands.sh"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"cURL",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands are also available in the same repository, along with commands to query and delete a document.  With all the documents in place, we can start performing text-search queries: ",
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
                    "src":"https://asset.jarombek.com/posts/9-15-19-kibana-search.png"
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
                "value":" I'll explore text-search querying in depth in my next Elasticsearch article. ",
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
                "value":" Elasticsearch is a very interesting technology that I'm excited to continue learning about.  Now that I have an Elasticsearch cluster up and running, I'm ready to explore some of the advanced Elasticsearch features.  You can view all the code from this article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\ntree/master/2019/09-Sep/09-15-elasticsearch"
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

postName = "sep-15-2019-elasticsearch";
postDate = new Date('2019-09-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Introduction to Elasticsearch",
    description: `In this article I discuss Elasticsearch, which is the core technology of ELK 
        Stack.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Elasticsearch",
            picture: "https://asset.jarombek.com/logos/elasticsearch.png",
            color: "elasticsearch"
        },
        {
            name: "Kibana",
            picture: "https://asset.jarombek.com/logos/kibana.png",
            color: "kibana"
        },
        {
            name: "ELK Stack",
            picture: "https://asset.jarombek.com/logos/elk.png",
            color: "elk"
        },
        {
            name: "Search Engine"
        },
        {
            name: "Text Search"
        },
        {
            name: "JSON",
            picture: "https://asset.jarombek.com/logos/json.png",
            color: "json"
        },
        {
            name: "Bash",
            picture: "https://asset.jarombek.com/logos/bash.png",
            color: "bash"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Pranav Shukla & Sharath Kumar M N, ",
            endName: " (Birmingham: Packt, 2017), 8",
            linkName: "Learning Elastic Stack 6.0",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 26",
            linkName: "Ibid.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 10-12",
            linkName: "Ibid.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 30",
            linkName: "Ibid.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 32",
            linkName: "Ibid.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "\"Difference between keyword and text in ElasticSearch\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/52845279",
            link: "https://stackoverflow.com/a/52845279"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});