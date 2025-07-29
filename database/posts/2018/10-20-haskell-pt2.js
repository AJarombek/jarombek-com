/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/17/2018
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
                "value":" A common higher-order function in functional programming is a fold (also referred to as reduce or inject depending on the language).  The goal of a fold is to take a list and reduce it into a single value.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-6-2018-haskell-pt1"
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
                "value":" implements multiple fold functions, each of which has a different implementation.  This article clears up the differences between each fold function and introduces some simple use cases. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"foldl and foldr"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"foldl",
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
                    "className":"jarombek-header-code"
                },
                "value":"foldr",
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
                "value":" A common higher-order function in functional programming is a fold (also referred to as reduce or inject depending on the language).  The goal of a fold is to take a list and reduce it into a single value.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-6-2018-haskell-pt1"
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
                "value":" implements multiple fold functions, each of which has a different implementation.  This article clears up the differences between each fold function and introduces some simple use cases. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"foldl and foldr"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"foldl",
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
                    "className":"jarombek-header-code"
                },
                "value":"foldr",
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
                "value":" The two main fold functions in Haskell are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", both of which are found in the standard ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Prelude",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" take three arguments.  The first argument is a list (",
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
                "value":") from which the single returned value is reduced. The second argument is a base value (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"v",
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
                "value":"v",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the result of a fold function with an empty list argument. If a populated list is passed as an argument, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"v",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" assists in building a reduced value.  How a reduced value is created depends on the third argument which is a function. ",
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
                "value":" This function (",
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
                "value":") takes in two arguments - the base value ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"v",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and an item from the list ",
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
                "value":". ",
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
                "value":" performs an operation on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"v",
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
                "value":"x",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", returning a single value.  Fold is a recursive function, so each item in the list ",
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
                "value":" passes through ",
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
                "value":", resulting in a single value after the list is exhausted. ",
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
                "value":" The difference between ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is how the recursion is applied to list items.  The following function is a recreation of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
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
            "language":"Haskell"
        },
        "value":"{-|\n  Redefining the fold-right recursive function for reference\n  (a -> b -> b) - a function that takes a list item 'a' and an accumulator 'b' and performs an operation\n                    on 'a' that combines it with 'b'\n              b - the starting value for the accumulator\n            [a] - a list to operate on\n-}\nfoldr :: (a -> b -> b) -> b -> [a] -> b\nfoldr f v [] = v\nfoldr f v (x:xs) = f x (foldr f v xs)\n",
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
                "value":" The following code uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to add up all the items in a list. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"foldr (+) 0 [1..10] -- 55\n",
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
                "value":" To begin, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" invokes function ",
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
                "value":" on the first list item ",
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
                "value":" and the recursive case ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(foldr f v xs)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Finally once ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is recursively called enough times to exhaust the list, the base case is returned. This type of fold function is known as a 'right fold' since the computed result folds over from the right",
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
                "value":".  Visually this is hard to picture so I'll show you an example in a bit. ",
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
                "value":" The other type of fold is a ‘left fold' which Haskell implements with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  I recreated ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Redefining the fold-left recursive function for reference\n  (a -> b -> a) - a function that takes an accumulator 'a' and a list item 'b' and performs an operation\n                    on 'b' that combines it with 'a'\n              a - a starting value for the accumulator\n            [b] - a list to operate on\n-}\nfoldl :: (a -> b -> a) -> a -> [b] -> a\nfoldl f v [] = v\nfoldl f v (x:xs) = foldl f (f v x) xs\n",
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
                "value":" The following code uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to add up all the items in a list. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"foldl (+) 0 [1..10] -- 55\n",
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
                "value":" The only difference between ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
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
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the recursive case.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" immediately invokes function ",
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
                "value":" on the first list item ",
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
                "value":" and the base value ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"v",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The result of this invocation (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f v x",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") is passed as the new base value to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This type of fold function is known as a 'left fold' since the computed result folds over from the left. ",
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
                "value":" The concepts of folding left and right are quite confusing at first.  Using the fold functions to create a string representation of their execution pattern is a helpful way to visualize the differences between ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
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
                "value":"foldr",
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
                "value":" The following two functions are used to debug ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
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
                "value":"foldr",
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
        "value":"{-|\n  Visualize the execution of the foldr function.\n  Inspiration from: https://wiki.haskell.org/Fold#Examples\n-}\ndebug_foldr :: [String] -> String -> String\ndebug_foldr xs s = foldr (\\x y -> \"(\" ++ x ++ \"+\" ++ y ++ \")\") s xs\n\n{-|\n  Visualize the execution of the foldl function\n-}\ndebug_foldl :: [String] -> String -> String\ndebug_foldl xs s = foldl (\\x y -> \"(\" ++ x ++ \"+\" ++ y ++ \")\") s xs\n",
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
                "value":" Invoking these two functions on a list ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[1..10]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" reveals how recursion constructs the final result. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"main :: IO ()\nmain = do\n  print( debug_foldr (map show [1..10]) \"0\" )\n  print( debug_foldl (map show [1..10]) \"0\" )\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"\"(1+(2+(3+(4+(5+(6+(7+(8+(9+(10+0))))))))))\"\n\"((((((((((0+1)+2)+3)+4)+5)+6)+7)+8)+9)+10)\"\n",
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
                "value":"foldr",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" result in nested addition operations.  Since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" folds over from the right, the right most operation ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"10+0",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is computed first, then ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"9+10",
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
                "value":"8+19",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", etc. Since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" folds over from the left, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0+1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is computed first, then ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1+2",
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
                "value":"3+3",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", etc. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Issues with Large Lists"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Issues with Large Lists",
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
                "value":" Using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on small lists is no problem.  However, once lists get extremely large they start to cause issues. ",
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
                "value":" First I attempted invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with a list of 100 million elements on my MacBook.  Unfortunately it resulted in a stack overflow error. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"print( foldr (+) 0 [0..100000000] )\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"*** Exception: stack overflow\n",
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
                "value":" What happens is each time a recursive call is made, a new item is pushed onto the programs call stack. The reason why the recursive function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" grows the call stack is because it lacks a reducible expression until the list is exhausted",
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
                "value":".  Because of this the call stack grows until a reducible expression is encountered. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Reducible Expression"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In programming languages any expression that can be reduced or altered into a simpler or different value.  For example, a function invocation that requires work to be done is a reducible expression, while a constant value that doesn't change is not",
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
                "value":".    Reducible expressions are commonly referred to as 'redexes",
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
                "value":".' ",
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
                "value":" The execution of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr (+) 0 [0..100000000]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" doesn't encounter a reducible expression until ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"100000000+0",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and before the recursion reaches that point the stack is already out of memory on my machine. ",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is different because it has a reducible expression in each recursive case.  Unfortunately ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also runs into a memory issue. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"print( foldl (+) 0 [0..100000000] )\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"*** Exception:\n",
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
                "value":" When I ran this code no further exception information was given, but according to the Haskell documentation this code runs out of heap space.  Every reduction in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is executed lazily, so instead of immediately storing the result of a reducible expression, Haskell stores the reducible expression on the heap.  This lazy behavior is expensive in terms of heap space, and operating on a large list can overflow the allocated heap memory. ",
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
                "value":" Luckily there is a fold function implementation that works with large lists. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"foldl and foldr"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"foldl'",
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
                "value":"foldl'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a left folding function located in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Data.List",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module.  Its implemented using a native ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"seq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to remove the lazy behavior of redexes",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"6,7",
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
        "value":"{-|\n  Implement a custom version of foldl'\n-}\nfoldl'' :: (a -> b -> a) -> a -> [b] -> a\nfoldl'' f v [] = v\nfoldl'' f v (x:xs) = seq v' (foldl'' f v' xs)\n                      where\n                        v' = f v x\n",
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
                "value":" When using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldl'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" no overflow exceptions occur! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"import Data.List\n\nmain :: IO ()\nmain = do\n  print( foldl (+) 0 [0..100000000] )\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"5000000050000000\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Use Cases"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Use Cases",
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
                "value":" In the example code so far I've used ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foldr",
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
                "value":"foldl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to add up the contents of a list.  The following two use cases count the odd numbers in a list and divide the items in a list.  I wrote these examples using standard recursion first and then altered them to use fold functions. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Count the number of odd numbers in a list using recursion\n-}\nodds :: Integral a => [a] -> a\nodds [] = 0\nodds (x:xs) = x `mod` 2 + odds xs\n\n{-|\n  Count the number of odd numbers using the foldr function\n-}\nodds' :: Integral a => [a] -> a\nodds' xs = foldr (+) 0 [x `mod` 2 | x <- xs]\n\n{-|\n  Count the number of odd numbers in a list using recursion that is associated to the left\n-}\nodds'' :: Integral a => [a] -> a\nodds'' list = calc_odds 0 list\n              where\n                calc_odds v [] = v\n                calc_odds v (x:xs) = calc_odds (v + (x `mod` 2)) xs\n\n{-|\n  Count the number of odd numbers using the foldl function\n-}\nodds''' :: Integral a => [a] -> a\nodds''' xs = foldl (+) 0 [x `mod` 2 | x <- xs]\n\n{-|\n  Divide the items in a list, basically creating a fraction out of the list\n-}\nfrac :: Integral a => [a] -> a\nfrac [] = 1\nfrac (x:xs) = x `div` frac(xs)\n\n{-|\n  Divide the items in a list using the foldr function\n-}\nfrac' :: Integral a => [a] -> a\nfrac' = foldr div 1\n\n{-|\n  Divide the items in a list using left associated recursion\n-}\nfrac'' :: Integral a => [a] -> a\nfrac'' (x:xs) = calc_frac x xs\n                where\n                  calc_frac v [] = v\n                  calc_frac v (x:xs) = calc_frac (v `div` x) xs\n\n{-|\n  Divide the items in a list using the foldl function\n-}\nfrac''' :: Integral a => [a] -> a\nfrac''' (x:xs) = foldl div x xs\n\nmain :: IO ()\nmain = do\n  print( odds [1,2,3] ) -- 2\n  print( odds [1,3,5,7,11,12] ) -- 5\n\n  print( odds'' [1,2,3] ) -- 2\n  print( odds'' [1,3,5,7,11,12] ) -- 5\n\n  print( frac [12, 3] ) -- 4\n  print( frac [20, 4, 2] ) -- 10 - first divide 4 by 2 = 2, then divide 20 by 2 = 10\n\n  print( frac'' [12, 3] ) -- 4\n  print( frac'' [20, 4, 2] ) -- 2\n",
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
                "value":" Working with fold functions in Haskell showed me the origins of higher-order reduction functions found in many mainstream languages today.  The full code from this discovery post is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/10-Oct/10-20-haskell-pt2"
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

postName = "oct-20-2018-haskell-pt2";
postDate = new Date('2018-10-20T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Haskell Part II: Folds",
    description: `This article clears up the differences between each fold function and introduces 
        some simple use cases.`,
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
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Fold: Overview\", ",
            endName: "",
            linkName: "https://wiki.haskell.org/Fold#Overview",
            link: "https://wiki.haskell.org/Fold#Overview"
        },
        {
            startName: "\"Fold: Examples\", ",
            endName: "",
            linkName: "https://wiki.haskell.org/Fold#Examples",
            link: "https://wiki.haskell.org/Fold#Examples"
        },
        {
            startName: "\"Foldr Foldl Foldl': Foldr\", ",
            endName: "",
            linkName: "https://bit.ly/2pWSgCn",
            link: "https://bit.ly/2pWSgCn"
        },
        {
            startName: "\"Reducible expression\", ",
            endName: "",
            linkName: "https://wiki.haskell.org/Reducible_expression",
            link: "https://wiki.haskell.org/Reducible_expression"
        },
        {
            startName: "\"Foldr Foldl Foldl': Foldl\", ",
            endName: "",
            linkName: "https://bit.ly/2RV0WWA",
            link: "https://bit.ly/2RV0WWA"
        },
        {
            startName: "\"Foldr Foldl Foldl': Foldl'\", ",
            endName: "",
            linkName: "https://bit.ly/2J3cxif",
            link: "https://bit.ly/2J3cxif"
        },
        {
            startName: "\"Prelude: seq\", ",
            endName: "",
            linkName: "https://bit.ly/2COdsmx",
            link: "https://bit.ly/2COdsmx"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});