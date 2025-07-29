/**
 * Script for the MongoDB Shell.  In case I'm your one, don't worry.
 * I'm here once you know what to say.
 * @author Andrew Jarombek
 * @since 9/15/2019
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
                "value":" During free time at work, I've been reading a book called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://shop.oreilly.com/product/0636920083634.do"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" C# 7.0 In a Nutshell",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  When I get home, I write ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=c#&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C#",
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
                    "href":"https://github.com/AJarombek/misc-code-samples/tree/master/C%23/base"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"programs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" based on what I learned.  One of the really interesting topics I read about was LINQ (Language Integrated Query), which is the integration of query functions and keywords in the C# language",
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
                "value":".  LINQ can be used to query remote data sources such as an RDBMS or local data structures. ",
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
                "value":" LINQ reminds me of writing PL/SQL, which is a procedural language provided for the Oracle database. PL/SQL is a superset of SQL, allowing for looping, variable declarations, conditional logic, error handling, and more.  The best feature of PL/SQL is the integration of SQL queries directly into an imperative programming language.  Unfortunately, PL/SQL is strictly tied to the Oracle database and  has clunky syntax in my opinion.  LINQ on the other hand can be used with multiple different databases along with local data structures.  Also, in my opinion, C# has much nicer syntax. ",
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
                "value":" During free time at work, I've been reading a book called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://shop.oreilly.com/product/0636920083634.do"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" C# 7.0 In a Nutshell",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  When I get home, I write ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=c#&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C#",
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
                    "href":"https://github.com/AJarombek/misc-code-samples/tree/master/C%23/base"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"programs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" based on what I learned.  One of the really interesting topics I read about was LINQ (Language Integrated Query), which is the integration of query functions and keywords in the C# language",
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
                "value":".  LINQ can be used to query remote data sources such as an RDBMS or local data structures. ",
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
                "value":" LINQ reminds me of writing PL/SQL, which is a procedural language provided for the Oracle database. PL/SQL is a superset of SQL, allowing for looping, variable declarations, conditional logic, error handling, and more.  The best feature of PL/SQL is the integration of SQL queries directly into an imperative programming language.  Unfortunately, PL/SQL is strictly tied to the Oracle database and  has clunky syntax in my opinion.  LINQ on the other hand can be used with multiple different databases along with local data structures.  Also, in my opinion, C# has much nicer syntax. ",
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
                "value":" I'll save my exploration of integrating LINQ with a remote database for a future article.  Today, I'm focusing on LINQ basics with local data structures. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Introduction to LINQ"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Introduction to LINQ",
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
                "value":" LINQ is found in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"System.Linq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" namespace in C#.  LINQ  queries consume an input sequence and produce an output sequence.  They provide the ability to query  enumerable data in local data structures or remote data sources.  For example, LINQ is available for a locally defined dictionary. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"Dictionary<string, int> deerSpottedToday = new Dictionary<string, int>\n{\n  {\"Mianus River Park\", 2},\n  {\"Cognewaugh Road\", 1}\n};\n",
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
                "value":" This dictionary represents the number of deer I saw walking and driving.  There are two approaches for using LINQ with this dictionary.  The first approach is called fluent syntax, which utilizes chainable static extension methods defined on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"IEnumerable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface",
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
                "value":".  An extension method is a method added to an existing type without modifying the type definition.  The second approach is called query syntax, which uses native keywords to build queries. ",
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
                "value":" Below is a filtering query performed on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"deerSpottedToday",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" dictionary.  It uses fluent syntax and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Where()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" extension method. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"IEnumerable<KeyValuePair<string, int>> multipleDeer = Enumerable.Where(\n  deerSpottedToday,\n  spot => spot.Value > 1\n);\n\nAssert(multipleDeer.Count() == 1);\n",
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
                "value":"Where()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" accepts a delegate (lambda function) as an argument. It checks each element in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"deerSpottedToday",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to see if they match the delegate predicate.  Only ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"Mianus River Park\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" matches the predicate because it's the only dictionary element with a value greater than 1. ",
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
                "value":" In this code sample, I called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Where()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directly on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Enumerable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class.  However, it's also invokable directly on the dictionary instance.  This is because ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Dictionary",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" implements ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"IEnumerable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The code above can be shortened to use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"IEnumerable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" extension method. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"var multipleDeer = deerSpottedToday.Where(spot => spot.Value > 1);\nAssert(multipleDeer.Count() == 1);\n",
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
                "value":" Query syntax uses C# keywords instead of method calls.  This is my favorite aspect of LINQ.  Rewriting the fluent syntax method chain in query syntax results in the following statement: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"var multipleDeer =\n  from spottedDeer in deerSpottedToday\n  where spottedDeer.Value > 1\n  select spottedDeer;\n\nAssert(multipleDeer.Count() == 2);\n",
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
                "value":" Query syntax is more reminiscent of SQL, although LINQ and SQL have some major differences (as I'll  explore in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-29-2019-linq-sqlserver"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  Let's quickly run through the different pieces of this query. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"from {x} in {y}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the input sequence for the query (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"y",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and loops through its contents, which are assigned to a variable (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"x",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"). ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"where {condition}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a filter for the data, in my case a dictionary item must have a value greater than 1.  Finally, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"select {z}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines which items  (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"z",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to will be present in the output sequence of the query. ",
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
                "value":" Let's look at some other operators offered by LINQ.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"orderby",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides the ability to sort the output sequence of the query before returning it. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"\ndouble[] walksPastWeek = { 3.5, 2.48, 3.6, 3.98, 3.59, 1.74, 1.54 };\n\n// Linq query with additional OrderBy() and Select() query operator methods.\n// Select() is basically a map() function.\nvar greaterThanTwoMiles = walksPastWeek.Where(miles => miles > 2)\n  .OrderBy(miles => miles)\n  .Select(miles => Math.Round(miles));\n\nAssert(greaterThanTwoMiles.Count() == 5);\nAssert(greaterThanTwoMiles.First() == 2);\n\n// The fluent syntax query above can be rewritten in query syntax:\nvar greaterThanTwoMilesAgain =\n  from distance in walksPastWeek\n  where distance > 2\n  orderby distance\n  select Math.Round(distance);\n\nAssert(greaterThanTwoMilesAgain.Count() == 5);\nAssert(greaterThanTwoMilesAgain.First() == 2);\n",
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
                "value":"orderby {x} descending",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to sort in reverse order. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"\nvar greaterThanTwoMilesDesc = greaterThanTwoMiles.OrderByDescending(miles => miles);\n\nAssert(greaterThanTwoMilesDesc.First() == 4);\n\nvar greaterThanTwoMilesDescAgain =\n  from miles in greaterThanTwoMiles\n  orderby miles descending\n  select miles;\n\nAssert(greaterThanTwoMilesDescAgain.First() == 4);\n",
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
                "value":" One interesting aspect of LINQ queries is that they don't produce output sequences when defined. They exhibit deferred execution",
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
                "value":".  Deferred execution results in some interesting behavior. ",
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
                "value":" Deferred execution is proven by altering the input sequence after the LINQ query is declared.  In the following example, the result of the query changes when the input sequence is altered. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"var deerSpottedThisWeek = deerSpottedToday;\n\nvar deerQuery =\n  from deerSpotted in deerSpottedThisWeek\n  where deerSpotted.Value > 1\n  select deerSpotted;\n\n// Right now, there is only one location where more than one deer was spotted.\nAssert(deerQuery.Count() == 1);\n\n// I saw another deer on Cognewaugh Road today.\ndeerSpottedThisWeek[\"Cognewaugh Road\"] = 2;\n\n// Due to deferred execution, now there are two locations where more than one deer was spotted.\nAssert(deerQuery.Count() == 2);\n",
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
                "value":" Deferred execution makes LINQ queries reusable for a mutating data structure.  Deferred execution also allows LINQ queries to contain local variables that can change between executions.  For example, the following query has a configurable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"where",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"\n// If the values of lexical scope variables referenced in a query change before execution,\n// the query will honor that change.\nint numOfDeer = 2;\nvar sameDeerQuery =\n  from deerSpotting in deerSpottedThisWeek\n  where deerSpotting.Value >= numOfDeer\n  select deerSpotting;\n\n// When numOfDeer is 2, there are two locations that match the query.\nAssert(sameDeerQuery.Count() == 2);\n\nnumOfDeer = 3;\n\n// When numOfDeer is 3, there are no locations that match the query.\nAssert(sameDeerQuery.Count() == 0);\n",
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
                "value":" If you are curious to learn more about LINQ queries, check out the full code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/misc-code-samples/blob/master/C%23/base/linq_basics/Queries.cs"
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
                "value":".  I explore grouping, nested queries, combined queries, anonymous types in queries, and more. ",
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
                "value":" This article introduced LINQ, a framework that integrates queries into C#.  I decided to write about LINQ because it's a feature I believe more programming languages should consider adopting.  So much code is based around filtering, mapping, and reducing data.  The more options developers have to accomplish  these task the better.  Check out my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-29-2019-linq-sqlserver"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next LINQ article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" where I discuss integrated queries with LINQ and SQL Server. ",
                "children":null
            }
        ]
    }
];

postName = "sep-17-2019-linq";
postDate = new Date('2019-09-17T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Using LINQ in C#",
    description: `I'll save my exploration of integrating LINQ with a remote database for a future 
        article.  Today, I'm focusing on LINQ basics with local data structures.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "C#",
            picture: "https://asset.jarombek.com/logos/csharp.png",
            color: "csharp"
        },
        {
            name: ".NET Core",
            picture: "https://asset.jarombek.com/logos/dotnetcore.png",
            color: "dotnetcore"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Language Integrated Query (LINQ)\", ",
            endName: "",
            linkName: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/",
            link: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/"
        },
        {
            startName: "Joseph Albahari & Ben Albahari, ",
            endName: " (Sebastopol, CA: O'Reilly, 2018), 355",
            linkName: "C# 7.0 in a Nutshell",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "",
            endName: ", 364",
            linkName: "Ibid.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});