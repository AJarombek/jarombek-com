/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/28/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

preview = [
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "a",
                "attributes": {
                    "href": "https://jarombek.com/blog/sep-15-2019-elasticsearch#elasticsearch"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "Elasticsearch",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " is a search and analytics engine.  It's also a NoSQL database that holds JSON documents.  These documents are stored in an ",
                "children": null
            },
            {
                "el": "a",
                "attributes": {
                    "href": "https://jarombek.com/blog/oct-18-2019-elasticsearch-analyzer#inverted-index"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": " inverted index",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and are queried with JSON syntax.  In my ",
                "children": null
            },
            {
                "el": "a",
                "attributes": {
                    "href": "https://jarombek.com/blog/\noct-18-2019-elasticsearch-analyzer"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "previous article",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " I explored analyzers and the process of storing documents in an inverted index.  This article focuses on querying documents with JSON. ",
                "children": null
            }
        ]
    },
    {
        "el": "h5",
        "attributes": {
            "title": "Components of Analyzers"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "Basic Queries",
                "children": null
            }
        ]
    }
];

content = [
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "a",
                "attributes": {
                    "href": "https://jarombek.com/blog/sep-15-2019-elasticsearch#elasticsearch"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "Elasticsearch",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " is a search and analytics engine.  It's also a NoSQL database that holds JSON documents.  These documents are stored in an ",
                "children": null
            },
            {
                "el": "a",
                "attributes": {
                    "href": "https://jarombek.com/blog/oct-18-2019-elasticsearch-analyzer#inverted-index"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": " inverted index",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and are queried with JSON syntax.  In my ",
                "children": null
            },
            {
                "el": "a",
                "attributes": {
                    "href": "https://jarombek.com/blog/\noct-18-2019-elasticsearch-analyzer"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "previous article",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " I explored analyzers and the process of storing documents in an inverted index.  This article focuses on querying documents with JSON. ",
                "children": null
            }
        ]
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Components of Analyzers"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "Basic Queries",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " I wrote twenty queries based on the knowledge I gained reading ",
                "children": null
            },
            {
                "el": "a",
                "attributes": {
                    "href": "https://www.packtpub.com/\nbig-data-and-business-intelligence/learning-elastic-stack-60"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "“Learning Elastic Stack 6.0\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " by Pranav Shukla.  All twenty queries search an index called ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "race",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ", which contains races I ran along with upcoming races I'm planning to run.  The documents in this index are listed below: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON",
            "scroll": "Y"
        },
        "value": "{\n  \"name\": \"NYRR Night at the Races #1\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"The Armory\",\n  \"date\": \"2019-12-19\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 1,\n  \"registered\": true,\n  \"result\": {\n    \"url\": \"https://results.armorytrack.com/meets/3985/athletes/2887619\",\n    \"position\": 28,\n    \"time\": \"4:54\",\n    \"pace\": \"4:54\"\n  }\n},\n{\n  \"name\": \"Ocean Breeze Miles Mania\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"Ocean Breeze Athletic Complex\",\n  \"date\": \"2020-01-02\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 2,\n  \"registered\": true,\n  \"result\": {}\n},\n{\n  \"name\": \"NYRR Night at the Races #2\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"The Armory\",\n  \"date\": \"2020-01-09\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 1.86,\n  \"meters\": 3000,\n  \"registered\": false,\n  \"result\": {}\n},\n{\n  \"name\": \"Boston Buildup\",\n  \"location\": \"Ridgefield, CT\",\n  \"facility\": \"Scotland Elementary School\",\n  \"date\": \"2020-01-19\",\n  \"exercise\": \"run\",\n  \"category\": \"Road\",\n  \"miles\": 9.32,\n  \"kilometers\": 15,\n  \"registered\": false,\n  \"result\": {}\n},\n{\n  \"name\": \"NYRR Night at the Races #3\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"The Armory\",\n  \"date\": \"2020-01-23\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 3.11,\n  \"meters\": 5000,\n  \"registered\": false,\n  \"result\": {}\n},\n{\n  \"name\": \"Freezer 5K\",\n  \"location\": \"Yorktown Heights, NY\",\n  \"facility\": \"Yorktown Heights\",\n  \"date\": \"2020-02-09\",\n  \"exercise\": \"run\",\n  \"category\": \"Road/Trail\",\n  \"miles\": 3.11,\n  \"kilometers\": 5,\n  \"registered\": false,\n  \"result\": {}\n},\n{\n  \"name\": \"Ocean Breeze Miles Mania\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"Ocean Breeze Athletic Complex\",\n  \"date\": \"2020-02-13\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 1,\n  \"registered\": false,\n  \"result\": {}\n},\n{\n  \"name\": \"Ocean Breeze Miles Mania\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"Ocean Breeze Athletic Complex\",\n  \"date\": \"2020-02-27\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 2,\n  \"registered\": false,\n  \"result\": {}\n},\n{\n  \"name\": \"NYRR Night at the Races #4\",\n  \"location\": \"New York, NY\",\n  \"facility\": \"The Armory\",\n  \"date\": \"2020-03-05\",\n  \"exercise\": \"run\",\n  \"category\": \"Indoor Track\",\n  \"miles\": 1,\n  \"registered\": true,\n  \"result\": {}\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " These documents follow the following field mapping: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"settings\": {\n    \"index\": {\n      \"number_of_shards\": 5,\n      \"number_of_replicas\": 2\n    }\n  },\n  \"mappings\": {\n    \"properties\": {\n      \"name\": {\n        \"type\": \"text\"\n      },\n      \"location\": {\n        \"type\": \"text\"\n      },\n      \"facility\": {\n        \"type\": \"text\"\n      },\n      \"date\": {\n        \"type\": \"date\",\n        \"format\": \"yyyy-MM-dd\"\n      },\n      \"exercise\": {\n        \"type\": \"keyword\",\n        \"ignore_above\": 256\n      },\n      \"category\": {\n        \"type\": \"text\",\n        \"fields\": {\n          \"raw\": {\n            \"type\": \"keyword\"\n          }\n        }\n      },\n      \"miles\": {\n        \"type\": \"double\"\n      },\n      \"meters\": {\n        \"type\": \"double\"\n      },\n      \"kilometers\": {\n        \"type\": \"double\"\n      },\n      \"registered\": {\n        \"type\": \"boolean\"\n      },\n      \"result\": {\n        \"type\": \"nested\",\n        \"properties\": {\n          \"url\": {\n            \"type\": \"keyword\",\n            \"ignore_above\": 256\n          },\n          \"position\": {\n            \"type\": \"integer\"\n          },\n          \"time\": {\n            \"type\": \"keyword\",\n            \"ignore_above\": 256\n          },\n          \"pace\": {\n            \"type\": \"keyword\",\n            \"ignore_above\": 256\n          }\n        }\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Let's begin working through some Elasticsearch queries! ",
                "children": null
            }
        ]
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Get All"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "1) Get All",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " The most basic query you can perform against an Elasticsearch index is one that matches all documents. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match_all\": {}\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result (Abbreviated for space): ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [{\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #1\",\n      ...\n    },\n    {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #2\",\n      ...\n    },\n    ...\n  }]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Range Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "2) Range Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Range queries narrow down the resulting documents.  In the following example, the length of the race must be between 1 and 2 miles. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"range\": {\n      \"miles\": {\n        \"gte\": 1,\n        \"lte\": 2\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [\n  {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #2\",\n      \"miles\" : 1.86,\n      ...\n    }\n  },\n  {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #4\",\n      \"miles\" : 1,\n      ...\n    }\n  },\n  {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"Ocean Breeze Miles Mania\",\n      \"miles\" : 1,\n      ...\n    }\n  },\n  {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"Ocean Breeze Miles Mania\",\n      \"miles\" : 2,\n      ...\n    }\n  },\n  {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"Ocean Breeze Miles Mania\",\n      \"miles\" : 2,\n      ...\n    }\n  },\n  {\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #1\",\n      \"miles\" : 1,\n      ...\n    }\n  }\n  ]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Date Range Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "3) Date Range Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Range queries can also work with date types.  Date types have a special keyword ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "now",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " that is used in range queries. ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "now",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " represents the current date, and time can be added or deleted from ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "now",
                "children": null
            },
            {
                "el": "sup",
                "attributes": null,
                "value": "1",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"range\": {\n      \"date\": {\n        \"gte\": \"now-15d\",\n        \"lte\": \"now+15d\"\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Exists Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "4) Exists Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " An exists query simply checks if a field exists in a JSON document. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"exists\": {\n      \"field\": \"meters\"\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Term Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "5) Term Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " A term query checks if a string exactly matches the value of a keyword field in a document.  The following query checks if the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "category",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " field has a value of ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"Road\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"term\": {\n      \"category.raw\": \"Road\"\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [{\n    \"_score\" : 0.2876821,\n    \"_source\" : {\n      \"name\" : \"Boston Buildup\",\n      \"category\" : \"Road\",\n      ...\n    }\n  }]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Term Query Constant Score"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "6) Term Query Constant Score",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " You may have noticed that the prior query result gave the resulting document a score.  This is helpful for text searches, since it determines which results are most relevant.  However, for term searches there  isn't much benefit, because every document contains the exact same term.  The following query is the same  as the last one, except it gives the documents returned a constant score. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"constant_score\": {\n      \"filter\": {\n        \"term\": {\n          \"category.raw\": \"Road\"\n        }\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [{\n    \"_score\" : 1.0,\n    \"_source\" : {\n      \"name\" : \"Boston Buildup\",\n      \"category\" : \"Road\",\n      ...\n    }\n  }]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Match Query Text Field"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "7) Match Query Text Field",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Match queries perform full text searches.  The following example performs a text search on the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "category",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " field, returning any document containing the word ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"Road\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " in that field. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"category\": \"Road\"\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [\n    {\n      \"_score\" : 0.6931472,\n      \"_source\" : {\n        \"name\" : \"Freezer 5K\",\n        \"category\" : \"Road/Trail\",\n        ...\n      }\n    },\n    {\n      \"_score\" : 0.2876821,\n      \"_source\" : {\n        \"name\" : \"Boston Buildup\",\n        \"category\" : \"Road\",\n        ...\n      }\n    }\n  ]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Match Query Keyword Field"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "8) Match Query Keyword Field",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " It's also possible to perform a full text search on a keyword field.  However, this is simply equivalent to a term query. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"category.raw\": \"Road\"\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n\"hits\" : [{\n  \"_score\" : 0.2876821,\n  \"_source\" : {\n    \"name\" : \"Boston Buildup\",\n    \"category\" : \"Road\",\n    ...\n  }\n}]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Match Query with Two Words"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "9) Match Query with Two Words",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " When a full text search is performed with multiple words in the query, resulting documents must contain at least one of the words.  You can imagine the query containing ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "OR",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " operators between each word. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"category\": \"Road Trail\"\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [\n    {\n      \"_score\" : 1.3862944,\n      \"_source\" : {\n        \"name\" : \"Freezer 5K\",\n        \"category\" : \"Road/Trail\",\n        ...\n      }\n    },\n    {\n      \"_score\" : 0.2876821,\n      \"_source\" : {\n        \"name\" : \"Boston Buildup\",\n        \"category\" : \"Road\",\n        ...\n      }\n    }\n  ]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Match Query with AND Operator"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "10) Match Query with AND Operator",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Match queries also support explicit ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "or",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "and",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " operators.  The following query uses an ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "and",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " operator: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"category\": {\n        \"query\": \"Road Trail\",\n        \"operator\": \"and\"\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Match Query with OR Operator"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "11) Match Query with OR Operator",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " The following query uses an ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "or",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " operator.  It's equivalent to query #9, which implicitly OR'd the words in the query. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"category\": {\n        \"query\": \"Road Trail\",\n        \"operator\": \"or\"\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Minimum Should Match Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "12) Minimum Should Match Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Text searches provide a ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "minimum_should_match",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " parameter that specifies the number of terms in the query that must match terms in a field.  The following query requires documents to have a ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "name",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " field containing two of the words in ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "[\"NYRR\", \"#1\", \"#2\", \"#3\"]",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"name\": {\n        \"query\": \"NYRR #1 #2 #3\",\n        \"minimum_should_match\": 2\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Fuzzy Match Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "13) Fuzzy Match Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Text searches also provide a ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "fuzziness",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " parameter which allows terms in queries to be near matches to terms in documents.  For example, the query term ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"NYCRR\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " can match the document term ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"NYRR\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " if the fuzziness is one or more.  It's important to note that fuzzy matches are an expensive operation in Elasticsearch",
                "children": null
            },
            {
                "el": "sup",
                "attributes": null,
                "value": "2",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match\": {\n      \"name\": {\n        \"query\": \"NYCRR\",\n        \"fuzziness\": 1\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Match Phrase Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "14) Match Phrase Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Match phrase queries require that an entire phrase exists in a document.  The following query  matches all documents with a ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "location",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " field whose value ends with ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"York, NY\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ".  It matches all races in New York, NY. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match_phrase\": {\n      \"location\": {\n        \"query\": \"York NY\"\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Slop Match Phrase Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "15) Slop Match Phrase Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " When using match phrase queries, leniency towards missing words is possible with the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "slop",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " parameter.  For example, the following query matches documents even if their ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "name",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " field contains two terms missing in the phrase query.  The missing terms are ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"at\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"the\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"match_phrase\": {\n      \"name\": {\n        \"query\": \"NYRR Night Races #4\",\n        \"slop\": 2\n      }\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "  {\n  \"hits\" : [{\n    \"_score\" : 0.6606808,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #4\",\n      ...\n    }\n  }]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Multiple Field Match Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "16) Multiple Field Match Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Match queries can be performed on more than one field.  The following query searches for the words ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"Freezer\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and ",
                "children": null
            },
            {
                "el": "strong",
                "attributes": null,
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "\"Ocean\"",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " in the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "name",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "facility",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " fields.  It also boosts the score of the document if the term is found in the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "name",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " field. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"multi_match\": {\n      \"query\": \"Freezer Ocean\",\n      \"fields\": [\"name^3\", \"facility\"]\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [\n    {\n      \"_score\" : 2.4077747,\n      \"_source\" : {\n        \"name\" : \"Freezer 5K\",\n        \"facility\" : \"Yorktown Heights\",\n        ...\n      }\n    },\n    {\n      \"_score\" : 1.8299087,\n      \"_source\" : {\n        \"name\" : \"Ocean Breeze Miles Mania\",\n        \"facility\" : \"Ocean Breeze Athletic Complex\",\n        ...\n      }\n    },\n    {\n      \"_score\" : 0.5469647,\n      \"_source\" : {\n        \"name\" : \"Ocean Breeze Miles Mania\",\n        \"facility\" : \"Ocean Breeze Athletic Complex\",\n        ...\n      }\n    },\n    {\n      \"_score\" : 0.5469647,\n      \"_source\" : {\n        \"name\" : \"Ocean Breeze Miles Mania\",\n        \"facility\" : \"Ocean Breeze Athletic Complex\",\n        ...\n      }\n    }\n  ]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Bool Must Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "17) Bool Must Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Bool queries allow for complex document querying.  They are the SQL equivalents of the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "WHERE",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " clause along with ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "AND",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " and ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "OR",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " operands",
                "children": null
            },
            {
                "el": "sup",
                "attributes": null,
                "value": "3",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ".  The following query uses a ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "must",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " clause, which contains a list of queries that a document must match to be returned. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"bool\": {\n      \"must\": [\n        {\n          \"term\": {\n            \"category.raw\": {\n              \"value\": \"Indoor Track\"\n            }\n          }\n        },\n        {\n          \"term\": {\n            \"miles\": {\n              \"value\": 1\n            }\n          }\n        },\n        {\n          \"match\": {\n            \"facility\": \"Armory\"\n          }\n        },\n        {\n          \"range\": {\n            \"date\": {\n              \"gte\": \"2020-03-01\",\n              \"lte\": \"2020-03-31\",\n              \"format\": \"yyyy-MM-dd\"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [{\n    \"_score\" : 2.2670627,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #4\",\n      \"facility\" : \"The Armory\",\n      \"date\" : \"2020-03-05\",\n      \"category\" : \"Indoor Track\",\n      \"miles\" : 1,\n      ...\n    }\n  }]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Bool Filter Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "18) Bool Filter Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " When using bool queries, the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "filter",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " clause is equivalent to  the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "must",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " clause except that it doesn't score the returned documents.  All documents are given a score of zero. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"bool\": {\n      \"filter\": [\n        {\n          \"term\": {\n            \"category.raw\": {\n              \"value\": \"Indoor Track\"\n            }\n          }\n        },\n        {\n          \"term\": {\n            \"miles\": {\n              \"value\": 1\n            }\n          }\n        },\n        {\n          \"match\": {\n            \"facility\": \"Armory\"\n          }\n        }\n      ]\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Result: ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": null,
        "value": "{\n  \"hits\" : [{\n    \"_score\" : 0.0,\n    \"_source\" : {\n      \"name\" : \"NYRR Night at the Races #4\",\n      \"facility\" : \"The Armory\",\n      \"date\" : \"2020-03-05\",\n      \"category\" : \"Indoor Track\",\n      \"miles\" : 1,\n      ...\n    }\n  }]\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Bool Must and Should Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "19) Bool Must and Should Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " While ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "must",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " is equivalent to a SQL ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "AND",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ", ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "should",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": "  is equivalent to a SQL ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "OR",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"bool\": {\n      \"must\": [\n        {\n          \"term\": {\n            \"miles\": {\n              \"value\": 1\n            }\n          }\n        }\n      ],\n      \"should\": [\n        {\n          \"match\": {\n            \"facility\": \"Armory\"\n          }\n        },\n        {\n          \"range\": {\n            \"date\": {\n              \"gte\": \"2020-01-01\",\n              \"lte\": \"2020-12-31\",\n              \"format\": \"yyyy-MM-dd\"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Bool Must and Must Not Query"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "20) Bool Must and Must Not Query",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " Bool queries can also contain subqueries that should not match a document in order for it to be returned. This is accomplished with the ",
                "children": null
            },
            {
                "el": "code",
                "attributes": {
                    "className": "jarombek-inline-code"
                },
                "value": "must_not",
                "children": null
            },
            {
                "el": "#text",
                "attributes": null,
                "value": " clause. ",
                "children": null
            }
        ]
    },
    {
        "el": "codesnippet",
        "attributes": {
            "language": "JSON"
        },
        "value": "{\n  \"query\": {\n    \"bool\": {\n      \"must\": [\n        {\n          \"match\": {\n            \"facility\": \"Armory\"\n          }\n        }\n      ],\n      \"must_not\": [\n        {\n          \"term\": {\n            \"miles\": {\n              \"value\": 1\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n",
        "children": null
    },
    {
        "el": "sectiontitle",
        "attributes": {
            "title": "Conclusions"
        },
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": "Conclusions",
                "children": null
            }
        ]
    },
    {
        "el": "p",
        "attributes": null,
        "value": null,
        "children": [
            {
                "el": "#text",
                "attributes": null,
                "value": " This article discussed some of the building blocks for querying Elasticsearch.  In my next Elasticsearch article, I'll wrap up the Elasticsearch portion of the ELK stack by discussing data aggregations.  All the code from this article is available on ",
                "children": null
            },
            {
                "el": "a",
                "attributes": {
                    "href": "https://github.com/AJarombek/\njarombek-com-sources/tree/master/2019/12-Dec/12-28-elasticsearch-queries"
                },
                "value": null,
                "children": [
                    {
                        "el": "#text",
                        "attributes": null,
                        "value": "GitHub",
                        "children": null
                    }
                ]
            },
            {
                "el": "#text",
                "attributes": null,
                "value": ". ",
                "children": null
            }
        ]
    }
];

postName = "dec-28-2019-elasticsearch-queries";
postDate = new Date('2019-12-28T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Basic Elasticsearch Queries",
    description: `This article focuses on querying Elasticsearch documents`,
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
            name: "JSON",
            picture: "https://asset.jarombek.com/logos/json.png",
            color: "json"
        },
        {
            name: "Search Engine"
        },
        {
            name: "Text Search"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Pranav Shukla & Sharath Kumar M N, ",
            endName: " (Birmingham: Packt, 2017), 75",
            linkName: "Learning Elastic Stack 6.0",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 84",
            linkName: "Shukla.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 90",
            linkName: "Shukla.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
