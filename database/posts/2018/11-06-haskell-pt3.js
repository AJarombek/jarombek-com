/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 11/4/2018
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
                "value":" I often use function compositions which pass the result of one function to the argument of another function.  In many modern languages function compositions appear as method chains. In ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=haskell&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Haskell",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", function compositions are given their own language operator!  The composition of two functions ",
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
                        "value":"f(x)",
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
                        "value":"g(x)",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is easily defined using mathematical notation: ",
                "children":null
            }
        ]
    },
    {
        "el":"mathnotation",
        "attributes":{
            "tex":`(f \\circ g)(x)`
        },
        "value":null,
        "children":[

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
                "value":" I often use function compositions which pass the result of one function to the argument of another function.  In many modern languages function compositions appear as method chains. In ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=haskell&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Haskell",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", function compositions are given their own language operator!  The composition of two functions ",
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
                        "value":"f(x)",
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
                        "value":"g(x)",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is easily defined using mathematical notation: ",
                "children":null
            }
        ]
    },
    {
        "el":"mathnotation",
        "attributes":{
            "tex":`(f \\circ g)(x)`
        },
        "value":null,
        "children":[

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
                "value":" In mathematical notation, function compositions are represented by a circle.  In Haskell, function compositions use a dot (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") notation.  The following function redefines the function composition operator",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"(.) :: (b -> c) -> (a -> b) -> (a -> c)\nf . g = \\x -> f (g x)\n",
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
                "value":" The function composition operator is implemented as expected.  It takes in two functions (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f",
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
                "value":"g",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and composes them together to create a third function (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f . g",
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
                "value":"f . g",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is then passed an argument ",
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
                "value":".  Note that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"g",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(a -> b)",
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
                "value":"f",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(b -> c)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The return type of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"g",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" matches the parameter type of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and composed together their type is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(a -> c)",
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
                "value":" Function compositions make functions more readable and concise.  Here are two simple examples: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Function that performs a Map-Reduce operation on an integer list.\n  Each item is first incremented and then the sum of this list is returned.\n-}\ninc_sum :: [Int] -> Int\ninc_sum = sum . map (+1)\n\n{-|\n  Take a list where each item is of class Show.  First convert each item into a string\n  and add a space between each item.  Then concat the list of strings, making one string.\n  Finally print out the string.\n-}\nlist_str :: Show a => [a] -> IO ()\nlist_str = print . concat . intersperse \" \" . map show\n\nmain :: IO ()\nmain = do\n  print $ inc_sum [0,1] -- 3\n\n  list_str [True, False] -- \"True False\"\n  list_str [2, 26, 1995] -- \"2 26 1995\"\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"3\n\"True False\"\n\"2 26 1995\"\n",
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
                "value":"list_str",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" demonstrates that any number of functions can be composed together.  For more complex examples, you can look on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/11-Nov/11-06-haskell-pt3/composition.hs"
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
            "title":"JavaScript Function Compositions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"JavaScript Function Compositions",
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
                "value":" In the beginning of this article I mentioned that function compositions are represented as method chains in most languages.  While true for JavaScript, its also possible to use a dot syntax similar to Haskell.  Dot syntax is available since JavaScript is flexible about the amount of space around the member operator",
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
                "value":".  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"array.map()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be rewritten as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"array . map()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and JavaScript won't complain. ",
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
                "value":" Here are the two Haskell functions from before rewritten in JavaScript: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"/**\n* Using composition (method chaining), first increment each item in the list\n* and then add all the items together.\n* @param _ A list of numbers\n* @returns {*}\n*/\nconst inc_sum = _ => _.map(x => x + 1) . reduce((acc, val) => acc + val);\n\nconst list = [1,2];\nassert(inc_sum(list) === 5);\n\n/**\n* Using composition, add an empty space after each string in a list.  Then accumulate the list\n* and trim off the final empty space from the list.  There are much better ways to accomplish this task,\n* however this is another easy example of function compositions.\n* @param _ A list of strings\n* @returns {string}\n*/\nconst list_str = _ => _.map(str => `${str} `) . reduce((acc, val) => acc + val) . trim();\n\nconst list2 = ['My', 'name', 'is', 'Andy'];\nassert(list_str(list2) === 'My name is Andy');\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Java Function Compositions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Java Function Compositions",
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
                "value":" With Java 8, function compositions got a major overhaul.  The functional interface ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Function",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains two methods for creating function compositions: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"compose()",
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
                "value":"andThen()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The only difference between them is the ordering in which the composition operates. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// Create lambda functions to increment an integer and square an integer\nFunction<Integer, Integer> inc = x -> x + 1;\nFunction<Integer, Integer> sq = x -> x * x;\n\n// First increment an integer and then square it\nvar res1 = inc.andThen(sq).apply(2);\n\n// Fist square an integer and then increment it\nvar res2 = inc.compose(sq).apply(2);\n\nassert res1 == 9;\nassert res2 == 5;\n",
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
                "value":" With Java 8's Stream API it's also easy to perform compositions on lists by chaining methods: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"var list = List.of(1, 2);\n\n// Perform a function composition on a list using streams and the map reduce methods\nOptional<Integer> res3 = list.stream().map(x -> x + 1).reduce((x, y) -> x + y);\n\nassert res3.get() == 5;\n",
        "children":null
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
                "value":" This post was a brief look at function compositions across multiple different programming languages.   Haskell's composition operator is another cool aspect of the language.  The full code from this discovery  is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/11-Nov/11-06-haskell-pt3"
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

postName = "nov-6-2018-haskell-pt3";
postDate = new Date('2018-11-06T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Haskell Part III: Function Compositions",
    description: `I often use function compositions which pass the result of one function to the
        argument of another function.  In Haskell function compositions are given their own 
        language operator!`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Haskell",
            picture: "https://asset.jarombek.com/logos/haskell.png",
            color: "haskell"
        },
        {
            name: "Functional Programming"
        },
        {
            name: "Higher Order Functions"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "Java 8",
            picture: "https://asset.jarombek.com/logos/java8.png",
            color: "java"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 81",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Implementing the function composition operator in JavaScript: The member operator\", ",
            endName: "",
            linkName: "https://bit.ly/2CXK2lf",
            link: "https://bit.ly/2CXK2lf"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});