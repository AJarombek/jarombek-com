/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/3/2019
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
                "value":" One of the biggest strengths of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-15-2019-elasticsearch#elasticsearch"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Elasticsearch",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is text searching.  Elasticsearch holds strings for text searching in ",
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
                "value":" data types.  A document can contain one or more fields of type ",
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
                "value":" When strings are placed into a field of type ",
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
                "value":" they are processed by an analyzer.  Elasticsearch analyzers can be viewed as a pipeline that takes text as an input, breaks it into terms, and returns the terms as output",
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
                "value":".  These terms are placed in an inverted index which makes an index searchable. ",
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
                "value":" One of the biggest strengths of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-15-2019-elasticsearch#elasticsearch"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Elasticsearch",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is text searching.  Elasticsearch holds strings for text searching in ",
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
                "value":" data types.  A document can contain one or more fields of type ",
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
                "value":" When strings are placed into a field of type ",
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
                "value":" they are processed by an analyzer.  Elasticsearch analyzers can be viewed as a pipeline that takes text as an input, breaks it into terms, and returns the terms as output",
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
                "value":".  These terms are placed in an inverted index which makes an index searchable. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Inverted Index"
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
                        "value":" An inverted index is a data structure commonly used to perform quick text searching.  Each ",
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
                        "value":" field in Elasticsearch has a corresponding inverted index",
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
                        "value":".  The purpose of an inverted index is to map terms to the documents they appear in",
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
                        "value":". Terms are created from text with the help of an analyzer. ",
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
                        "value":" For example, let's take a field in a document with an ID of 1.  If the field contains the text \"Hello World\" and an analyzer creates a term for each word, the corresponding inverted index would contain two terms - \"Hello\" and \"World\".  Both these terms would be mapped to ID #1. ",
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
                        "value":" When fields are queried in a text search, document matches are determined by the terms in the inverted index.  For example, if the text search is \"Hello\", the document with ID #1 will be returned.  Importantly, text search matches aren't determined by the contents of a documents JSON, only by the terms in the inverted index. ",
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
                "value":" Analyzers are critical in determining whether a text search returns a document.  The remainder of this article explores the components of analyzers and the impact they have on the inverted index. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Components of Analyzers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Components of Analyzers",
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
                "value":" Each field of type ",
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
                "value":" is processed by an analyzer.  There are three main components of analyzers - character filters, tokenizers, and token filters. ",
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
                                "value":" Character Filter ",
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
                                        "value":" The first component of an analyzer is the character filter.  Character filters operate on text passed into the analyzer.  Analyzers have zero or more character filters.  The purpose of a character filter  is to transform text",
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
                                        "value":".  This transformed text is passed along to the next analyzer component, the tokenizer. ",
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
                                "value":" Tokenizer ",
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
                                        "value":" The second component of an analyzer is the tokenizer.  Tokenizers take the input text of the analyzer (or the transformed text from character filters) and creates tokens",
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
                                        "value":".  Each analyzer must have a single tokenizer.  Tokens created by the tokenizer are either returned from the analyzer or passed onto the token filter(s). ",
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
                                "value":" Token Filter ",
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
                                        "value":" The third and final component of an analyzer is the token filter.  Token filters add, delete, or modify the tokens created by the tokenizer",
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
                                        "value":".  Analyzers have zero or more token filters. ",
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
                "value":" When an analyzer executes, it sequentially runs the character filter(s), tokenizer, and token filter(s) in order, respectively.  Elasticsearch has many built-in character filters, tokenizers, and token filters for use.  Elasticsearch also allows developers to create their own components.  With the help of built-in and custom components, analyzers can be configured to suit most needs. ",
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
                "value":" If you don't want to spend time customizing an analyzer, Elasticsearch provides multiple built-in analyzers that work for most requirements. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Working with Analyzers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Working with Analyzers",
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
                "value":" Elasticsearch exposes the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/_analyze",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" endpoint to work directly with an analyzer.  This is great for testing the behavior of analyzers and exploring how they tokenize text.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/_analyze",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be called on an individual index or the entire Elasticsearch cluster. ",
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
                "value":" The most basic usage of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/_analyze",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is to run an analyzer on a string of text.  The following API call executes the build-it ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"standard",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" analyzer on the text ",
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
                        "value":"Hello my name is Andy.",
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
            "language":"Bash"
        },
        "value":"curl -XPOST ${ES_ENDPOINT}/_analyze?pretty=true -H 'Content-Type: application/json' -d '{\n  \"analyzer\": \"standard\",\n  \"text\": \"Hello my name is Andy.\"\n}'\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"{ \"tokens\": [\"hello\", \"my\", \"name\", \"is\", \"andy\"] }\n",
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
                "value":" I abbreviated the API response to include only the resulting tokens.  This same API call can be executed in the Kibana UI: ",
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
                    "src":"https://asset.jarombek.com/posts/10-18-19-kibana-analyzer.png"
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
                "value":" The standard analyzer consists of zero character filters, the standard tokenizer, and a lowercase token filter",
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
                "value":".  The standard tokenizer removes punctuation and places each word in a separate token",
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
                "value":".  After the standard tokenizer runs, the tokens are in the following form: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"{ \"tokens\": [\"Hello\", \"my\", \"name\", \"is\", \"Andy\"] }\n",
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
                "value":" Notice that the tokens above are different than the end result of the standard analyzer (the uppercase characters still exist).  This is where the standard analyzer's token filter comes into play.  As its name suggests, the lowercase token filter modifies tokens by converting uppercase characters to lowercase. After the lowercase token filter runs, the tokens become ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[\"hello\", \"my\", \"name\", \"is\", \"andy\"]",
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
                "value":" The standard analyzer is one of many built-in analyzers.  Another example of a built-in analyzer is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"whitespace",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" analyzer. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl -XPOST ${ES_ENDPOINT}/_analyze?pretty=true -H 'Content-Type: application/json' -d '{\n  \"analyzer\": \"whitespace\",\n  \"text\": \"Hello my name is Andy.\"\n}'\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"{ \"tokens\": [\"Hello\", \"my\", \"name\", \"is\", \"Andy.\"] }\n",
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
                "value":"/_analyze",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" endpoint also accepts character filters, token filters, and a tokenizer as input.  The following example uses the standard tokenizer and a character filter that strips HTML tags from text. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl -XPOST ${ES_ENDPOINT}/_analyze?pretty=true -H 'Content-Type: application/json' -d '{\n  \"tokenizer\": \"standard\",\n  \"char_filter\": [\"html_strip\"],\n  \"text\": \"<h1>Title</h1>\"\n}'\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"{ \"tokens\": [\"Title\"] }\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Indexes with Custom Analyzers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Indexes with Custom Analyzers",
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
                "value":" All the examples so far called the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/_analyze",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" endpoint on the entire cluster.  While this is beneficial for testing, its less useful in practice.  Custom analysers become especially advantageous once we start attaching them to indexes and fields on types within an index. ",
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
                "value":" Custom analyzers can be defined within the JSON configuration object of an index.  The following custom analyzer consists of the whitespace tokenizer and a custom ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"emoji_filter",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" character filter. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"settings\": {\n    \"index\": {\n      \"number_of_shards\": 5,\n      \"number_of_replicas\": 2\n    },\n    \"analysis\": {\n      \"analyzer\": {\n        \"emoji_analyzer\": {\n          \"tokenizer\": \"whitespace\",\n          \"char_filter\": [\n            \"emoji_filter\"\n          ]\n        }\n      },\n      \"char_filter\": {\n        \"emoji_filter\": {\n          \"type\": \"mapping\",\n          \"mappings\": [\n            \"🙂 => :)\",\n            \"🙁 => :(\",\n            \"😀 => :D\"\n          ]\n        }\n      }\n    }\n  }\n}\n",
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
                "value":" If this JSON configuration is saved in ",
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
                        "value":"index.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the following API call creates the   index and names it ",
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
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl -XPUT ${ES_ENDPOINT}/test -H 'Content-Type: application/json' -d @data/test/index.json\n",
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
                "value":" The whitespace tokenizer creates a new token each time it encounters whitespace.  The custom emoji character filter turns unicode emojis to ascii compliant emoticons.  The following API call demonstrates how to use the custom analyzer. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl -XPOST ${ES_ENDPOINT}/test/_analyze -H 'Content-Type: application/json' -d '{\n  \"analyzer\": \"emoji_analyzer\",\n  \"text\": \"😀\"\n}'\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"{ \"tokens\": [\":D\"] }\n",
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
                "value":" Here are three more examples of custom analyzers: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  \"settings\": {\n    \"index\": {\n      \"number_of_shards\": 5,\n      \"number_of_replicas\": 2\n    },\n    \"analysis\": {\n      \"analyzer\": {\n        \"email_analyzer\": {\n          \"tokenizer\": \"email\"\n        },\n        \"short_words_analyzer\": {\n          \"tokenizer\": \"short_words\"\n        },\n        \"long_words_analyzer\": {\n          \"tokenizer\": \"standard\",\n          \"filter\": [\"english_stop\"]\n        }\n      },\n      \"filter\": {\n        \"english_stop\": {\n          \"type\": \"stop\",\n          \"stopwords\": \"_english_\"\n        }\n      },\n      \"tokenizer\": {\n        \"email\": {\n          \"type\": \"pattern\",\n          \"pattern\": \"([a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\\\\.[a-zA-Z]{2,})\",\n          \"group\": 1\n        },\n        \"short_words\": {\n          \"type\": \"classic\",\n          \"max_token_length\": 2\n        }\n      }\n    }\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"\ncurl -XPOST ${ES_ENDPOINT}/test/_analyze -H 'Content-Type: application/json' -d '{\n  \"analyzer\": \"email_analyzer\",\n  \"text\": \"My emails are andrew@jarombek.com and ajarombek95@gmail.com.\"\n}'\n\ncurl -XPOST ${ES_ENDPOINT}/test/_analyze -H 'Content-Type: application/json' -d '{\n  \"analyzer\": \"short_words_analyzer\",\n  \"text\": \"Hi my name is Andy Jarombek.\"\n}'\n\ncurl -XPOST ${ES_ENDPOINT}/test/_analyze -H 'Content-Type: application/json' -d '{\n  \"analyzer\": \"long_words_analyzer\",\n  \"text\": \"Dotty is a good horse.\"\n}'\n",
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
                "value":" And here are the responses from the API calls: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"{ \"tokens\": [\"andrew@jarombek.com\", \"ajarombek95@gmail.com\"] }\n{ \"tokens\": [\"Hi\", \"my\", \"is\"] }\n{ \"tokens\": [\"Dotty\", \"good\", \"horse\"] }\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Fields with Custom Analyzers"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Fields with Custom Analyzers",
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
                "value":" It's time to demonstrate how analyzers work end-to-end.  Analyzers are executed on two occasions - when a document is created with a field of type ",
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
                "value":" and when a text field is queried. ",
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
                "value":" Before creating a document, an index is needed with a custom analyzer and a type mapping.  Notice that the type mapping contains a single field of type ",
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
                "value":" called ",
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
                "value":". This field has two additional properties - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"analyzer",
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
                "value":"search_analyzer",
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
            "language":"JSON"
        },
        "value":"{\n  \"settings\": {\n    \"index\": {\n      \"number_of_shards\": 5,\n      \"number_of_replicas\": 2,\n      \"max_ngram_diff\": 10\n    },\n    \"analysis\": {\n      \"analyzer\": {\n        \"tech_analyzer\": {\n          \"type\": \"custom\",\n          \"tokenizer\": \"standard\",\n          \"char_filter\": [],\n          \"filter\": [\"tech_ngram\"]\n        }\n      },\n      \"filter\": {\n        \"tech_ngram\": {\n          \"type\": \"ngram\",\n          \"min_gram\": 4,\n          \"max_gram\": 10\n        }\n      }\n    }\n  },\n  \"mappings\": {\n    \"properties\": {\n      \"name\": {\n        \"type\": \"text\",\n        \"analyzer\": \"tech_analyzer\",\n        \"search_analyzer\": \"standard\"\n      }\n    }\n  }\n}\n",
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
                "value":"analyzer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares the analyzer used when documents are indexed. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"search_analyzer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares the analyzer used when text searches  execute.  The ",
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
                "value":" field uses a custom analyzer with a n-gram tokenizer when indexed and the standard analyzer when queried.  The n-gram tokenizer creates tokens of length four through ten. ",
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
                "value":" With the index definition created, it's time to populate it with some documents: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl -XPOST ${ES_ENDPOINT}/tech/_doc/1 -H 'Content-Type: application/json' -d \\\n  '{\"name\": \"Elasticsearch\"}'\ncurl -XPOST ${ES_ENDPOINT}/tech/_doc/2 -H 'Content-Type: application/json' -d \\\n  '{\"name\": \"Logstash\"}'\ncurl -XPOST ${ES_ENDPOINT}/tech/_doc/3 -H 'Content-Type: application/json' -d \\\n  '{\"name\": \"Kibana\"}'\n",
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
                "value":" If we could view the inverted index for the ",
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
                "value":" field, it would look something like this",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"8,9",
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
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"| Term       | Appearances (Document, Frequency) |\n|------------|-----------------------------------|\n| Elas       | (1,1)                             |\n| Elast      | (1,1)                             |\n| Elasti     | (1,1)                             |\n| Elastic    | (1,1)                             |\n| Elastics   | (1,1)                             |\n| Elasticse  | (1,1)                             |\n| Elasticsea | (1,1)                             |\n| lasticsear | (1,1)                             |\n| asticsearc | (1,1)                             |\n| sticsearch | (1,1)                             |\n| last       | (1,1)                             |\n| lasti      | (1,1)                             |\n| lastic     | (1,1)                             |\n| Logs       | (2,1)                             |\n| Kiba       | (3,1)                             |\n| ...        | ...                               |\n|------------|-----------------------------------|\n",
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
                "value":" Viewing the inverted index is helpful since we can see the result of the n-gram tokenizer.  Since the standard analyzer is used on the ",
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
                "value":" field at query time, the following query returns the first document. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"curl ${ES_ENDPOINT}/tech/_doc/_search?pretty=true -H 'Content-Type: application/json' -d '{\n  \"query\": {\n    \"match\": {\n      \"name\": \"stic\"\n    }\n  }\n}'\n",
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
                "value":"This query would not have returned the first document if the entire ",
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
                        "value":"Elasticsearch",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" string was stored in the inverted index. ",
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
                "value":" Learning how analyzers and inverted indexes work helps explain some of the \"magic\" in Elasticsearch. In my next Elasticsearch adventure, I will explore querying documents.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/10-Oct/10-18-elasticsearch-query"
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

postName = "oct-18-2019-elasticsearch-analyzer";
postDate = new Date('2019-10-18T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Writing Elasticsearch Analyzers",
    description: `This article explores the components of analyzers and the impact they have on the 
        inverted index.`,
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
            name: "ELK Stack",
            picture: "https://asset.jarombek.com/logos/elk.png",
            color: "elk"
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
            endName: " (Birmingham: Packt, 2017), 56",
            linkName: "Learning Elastic Stack 6.0",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "\"Understanding the Inverted Index in Elasticsearch\", ",
            endName: "",
            linkName: "https://codingexplained.com/coding/elasticsearch/understanding-the-inverted-index-in-elasticsearch",
            link: "https://codingexplained.com/coding/elasticsearch/understanding-the-inverted-index-in-elasticsearch"
        },
        {
            startName: "\"Inverted index\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Inverted_index",
            link: "https://en.wikipedia.org/wiki/Inverted_index"
        },
        {
            startName: "",
            endName: ", 57",
            linkName: "Shukla.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 58",
            linkName: "Shukla.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "",
            endName: ", 60",
            linkName: "Shukla.",
            link: "https://www.packtpub.com/big-data-and-business-intelligence/learning-elastic-stack-60"
        },
        {
            startName: "\"Standard Analyzer\", ",
            endName: "",
            linkName: "https://bit.ly/2MndoxA",
            link: "https://bit.ly/2MndoxA"
        },
        {
            startName: "\"Inverted Index\", ",
            endName: "",
            linkName: "https://www.geeksforgeeks.org/inverted-index/",
            link: "https://www.geeksforgeeks.org/inverted-index/"
        },
        {
            startName: "\"Writing a simple Inverted Index in Python\", ",
            endName: "",
            linkName: "https://medium.com/@fro_g/writing-a-simple-inverted-index-in-python-3c8bcb52169a",
            link: "https://medium.com/@fro_g/writing-a-simple-inverted-index-in-python-3c8bcb52169a"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});