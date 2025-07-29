/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/1/2018
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
                "value":" In my recent programming adventures, I’ve run into a lot of code that follows a functional style. Many object-oriented and imperative programming languages added basic functional programming features to their specs, including ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-8-2018-java8-functional"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java 8",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in 2014.  I’ve spent time looking at functional programming features in these languages, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-27-2018-groovy-currying#what-is-currying?"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"currying",
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
                    "href":"https://jarombek.com/blog/aug-16-2018-groovy-closures"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"lambda functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Learning the functional programming style through a traditional object-oriented language is fine, but I really wanted to apply functional concepts in a language built upon the functional programming paradigm.  Over the past few weeks, I’ve spent some of my free time reading about Haskell, a functional programming language.  This post covers some of the functional concepts I explored in my first 200 lines of Haskell code. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Guarded Equations"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Guarded Equations",
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
                "value":" In my recent programming adventures, I’ve run into a lot of code that follows a functional style. Many object-oriented and imperative programming languages added basic functional programming features to their specs, including ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-8-2018-java8-functional"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java 8",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in 2014.  I’ve spent time looking at functional programming features in these languages, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-27-2018-groovy-currying#what-is-currying?"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"currying",
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
                    "href":"https://jarombek.com/blog/aug-16-2018-groovy-closures"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"lambda functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Learning the functional programming style through a traditional object-oriented language is fine, but I really wanted to apply functional concepts in a language built upon the functional programming paradigm.  Over the past few weeks, I’ve spent some of my free time reading about Haskell, a functional programming language.  This post covers some of the functional concepts I explored in my first 200 lines of Haskell code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Guarded Equations"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Guarded Equations",
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
                "value":" Often when writing a program with branching outcomes, a conditional expression is used.  Haskell also supports ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"if...else",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" conditional expressions, which are used like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Determine if a number is higher (older), equal to, or lower (younger)\n  than my age using conditional expressions\n-}\nolder :: Int -> Int\nolder n = if n > 23 then 1\n          else if n == 23 then 0\n          else -1\n",
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
                "value":" Invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"older 24",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" while ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"older 22",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Another way to perform the same logic is to use a guarded equation. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Determine if a number is higher (older), equal to, or lower (younger)\n  than my age using guarded equations\n-}\nolder' :: Int -> Int\nolder' n | n > 23 = 1\n         | n == 23 = 0\n         | otherwise = -1\n",
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
                "value":" Guarded equations follow a more mathematical design, using a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"| condition = outcome",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax which is read \"Such that a condition is met, return an outcome",
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
                "value":".\"  Guarded equations are easily translated into mathematical equations",
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
                "value":".  The following equation represents the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"older'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function: ",
                "children":null
            }
        ]
    },
    {
        "el":"mathnotation",
        "attributes":{
            "tex":`﻿older'(x) = \\begin{cases} 1 & x > 23 \\\\ 0 & x = 23 \\\\ -1 & otherwise \\end{cases}`
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
                "value":" The following function demonstrates a more advanced example of guarded equations.  It returns a sub-list from a list using recursion and the cons operator (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), which constructs a list. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"subList :: Int -> Int -> [a] -> [a]\nsubList _ _ [] = []\nsubList _ 0 _ = []\nsubList s e (x:xs) | s <= 0 && e > 0 = x : subList s (e - 1) xs\n                   | s <= 0 && e <= 0 = []\n                   | otherwise = subList (s - 1) (e - 1) xs\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Lambda Expressions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Lambda Expressions",
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
                "value":" I use lambda functions (also known as arrow functions in some languages) all the time in my code. In many languages, lambda functions are tacked on features, but in Haskell they are an integral part of the language.  The following two functions demonstrate lambda expressions in Haskell. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Multiply two numbers together.  Curried functions are easier to understand\n  when the lambda function syntax is used.\n-}\nmult :: Int -> (Int -> Int)\nmult = \\x -> (\\y -> x * y)\n\n{-|\n  An age function which returns a constant value of my age.  Written to utilize lambda functions.\n-}\nage' :: a -> Int\nage' = \\_ -> 23\n",
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
                "value":" If you are curious about curried functions, I devoted an entire article to them with a sub-section applying strictly to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-27-2018-groovy-currying#currying"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" currying in Haskell",
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
            "title":"List Comprehensions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"List Comprehensions",
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
                "value":" In mathematics, set comprehensions (also known as set-builder notation) are used to construct a set that abides by certain rules",
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
                "value":".  A set comprehension often takes an existing set and filters or maps it to match certain criteria, resulting in a new set. ",
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
                "value":" In Haskell, comprehensions are used to construct lists from existing lists",
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
                "value":".  The following function uses a list comprehension to square all items in a list and then calculate the sum of the new list. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"sumListSq :: Num a => [a] -> a\nsumListSq xs = sum [x^2 | x <- xs]\n",
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
                "value":" The list comprehension notation ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[x^2 | x <- xs]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is read as \"item ",
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
                "value":" drawn from list ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"xs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" such that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"x^2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"\". When ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sumListSq [2,3,4]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked, the list is mapped to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[4,9,16]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" first.  Then the sum of the list is calculated, which is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"29",
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
                "value":" Like many constructs in Haskell, list comprehensions are easily translated into mathematical notation: ",
                "children":null
            }
        ]
    },
    {
        "el":"mathnotation",
        "attributes":{
            "tex":`\\{x^2 \\: | \\: x \\in xs\\}`
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
                "value":" More advanced list comprehensions can work with multiple lists: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Create a list of grid indices for a grid of a certain length and height\n-}\ngrid :: Int -> Int -> [(Int, Int)]\ngrid x y = [(a, b) | a <- [0..x], b <- [0..y]]\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"> grid 2 3\n[(0,0),(0,1),(0,2),(0,3),(1,0),(1,1),(1,2),(1,3),(2,0),(2,1),(2,2),(2,3)]\n> grid 0 0\n[(0,0)]\n",
        "children":null
    },
    {
        "el":"mathnotation",
        "attributes":{
            "tex":`﻿﻿\\{(x', y') \\: | \\: x' \\in \\{0..x\\}, \\: y' \\in \\{0..y\\}\\}`
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
                "value":" These list comprehensions mapped each item in a list to a new value.  List comprehensions can also use filters to only operate on and return certain items from a list.  A list comprehension filter is called a guard, and is placed in a list comprehension following the source list and a comma. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Get the grid coordinates for the perimeter of a square.\n-}\nsquare :: Int -> [(Int, Int)]\nsquare x = [(a, b) | (a, b) <- grid x x, a == 0 || b == 0 || a == x || b == x]\n\n{-|\n  Extract the vowels from a String.  Uses a guard in the list comprehension which filters the generator\n-}\nvowels :: String -> String\nvowels str = [s | s <- str, elem s \"aeiouAEIOU\"]\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"> square 1\n[(0,0),(0,1),(1,0),(1,1)]\n> square 2\n[(0,0),(0,1),(0,2),(1,0),(1,2),(2,0),(2,1),(2,2)]\n\n> vowels \"Andy Jarombek\"\n\"Aaoe\"\n> vowels \"Greenwich,CT\"\n\"eei\"\n",
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
                "value":" Haskell is a challenging language to get accustomed to, but I am really enjoying it.  I'm also learning many new functional programming concepts and how they closely relate to mathematical concepts.  All the Haskell code from this discovery and more is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2018/10-Oct/10-06-haskell-pt1"
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

postName = "oct-6-2018-haskell-pt1";
postDate = new Date('2018-10-06T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Functional Programming in Haskell: Part I",
    description: `This post covers some of the functional concepts I explored in my first 200 lines 
        of Haskell code.`,
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
            name: "Lambda Functions"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 39",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Guarded Equations in Haskell\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/2225404\n",
            link: "https://stackoverflow.com/a/2225404\n"
        },
        {
            startName: "\"Set-builder notation\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Set-builder_notation",
            link: "https://en.wikipedia.org/wiki/Set-builder_notation"
        },
        {
            startName: "",
            endName: ", 47",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});