/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/1/2019
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
                    "href":"https://jarombek.com/blog/may-28-2019-haskell-pt6"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"last Haskell Article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I discussed functors, which provide a generic way to map functions over values.  In this article I'm exploring applicatives, which build on top of functors.  After discussing applicatives in Haskell, I'll try implementing them in Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Applicative Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Applicative Basics",
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
                    "href":"https://jarombek.com/blog/may-28-2019-haskell-pt6"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"last Haskell Article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I discussed functors, which provide a generic way to map functions over values.  In this article I'm exploring applicatives, which build on top of functors.  After discussing applicatives in Haskell, I'll try implementing them in Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Applicative Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Applicative Basics",
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
                "value":" As I mentioned, applicatives take the concepts of functors and builds upon them.  Applicatives are so closely related to functors that they are often referred to as applicative functors",
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
                "value":". Functors provide the ability to map a function across every value in a type.  Remember that the functor type class defines a single function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"class Functor f where\n  fmap :: (a -> b) -> f a -> f b\n",
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
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes a function of type ",
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
                "value":" and applies it to a value of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f a",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", resulting in a value of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f b",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  While ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has many use cases, it also has a limitation - its first argument is a function that can only have a single argument of its own (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"a",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  Applicatives alleviate this problem. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Applicative"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" An applicative (also known as an applicative functor) allows a function that takes any number of arguments to be mapped over the values in a type.  Applicatives in Haskell are defined by an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class, which extends the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Functor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class. ",
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
                "value":"Applicative",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class defines at least two functions - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pure",
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
                "value":"(<*>)",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"class Functor f => Applicative f where\n  pure :: a -> f a\n  (<*>) :: f (a -> b) -> f a -> f b\n",
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
                "value":"pure",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes a value of any type and transforms it into a value whose type is an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
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
                "value":"Applicative",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type is a container holding the original value.  For example, when making ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
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
                "value":"pure",
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
                "value":"pure x = Just x",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In this context ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pure",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" wraps any value inside a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Just",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" container value. ",
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
                "value":"(<*>)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (pronounced \"ap\" or \"apply\"",
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
                "value":") is a generalized function application where the function and arguments are functors.  Function application is simply applying a function to an argument, so ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(<*>)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" applies the function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f (a -> b)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to the argument ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f a",
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
                "value":" With these two building blocks, applicative functors are created which allow a function of variable argument length to be mapped over the values in a type.  The following code defines the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type as an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
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
        "value":"instance Applicative Maybe where\n  -- pure :: a -> Maybe a\n  pure x = Just x\n\n  -- (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b\n  Nothing <*> _ = Nothing\n  (Just g) <*> mx = fmap g mx\n",
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
                "value":"pure",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" wraps a value in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Just",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor function.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Just",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a constructor function for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type, which is an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
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
                "value":"Functor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Just",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents success in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type while ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Nothing",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents failure. ",
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
                "value":"<*>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (apply) maps a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" value to a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  If the function is equal to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Nothing",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the apply function propagates the failure by returning ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Nothing",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If the function is wrapped inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Just",
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
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is called with the function and value as arguments.  Here are some basic examples that utilize the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pure",
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
                "value":"(<*>)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"\n-- Testing the pure function defined in the Applicative type class\nprint $ (pure :: a -> Maybe a) 1 -- Just 1\nprint $ (pure :: a -> Maybe a) (Just 1 :: Maybe Int) -- Just (Just 1)\n\nlet pure_maybe = pure :: a -> Maybe a\nprint $ pure_maybe 1 -- Just 1\nprint $ pure_maybe 12.31 -- Just 12.31\nprint $ pure_maybe (Just 2) -- Just (Just 2)\n\n-- Testing pure combined with <*> for a Functor with a single argument\nprint $ pure (+1) <*> Just 1 -- Just 2\nprint $ pure (*3) <*> Just 2 -- Just 6\nprint $ pure (+1) <*> Nothing -- Nothing\n\n-- Testing pure combined with <*> for a Functor with two arguments\nprint $ pure (+) <*> Just 1 <*> Just 3 -- Just 4\nprint $ pure (+) <*> Nothing <*> Just 3 -- Nothing\nprint $ pure (+) <*> Just 3 <*> Nothing -- Nothing\n",
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
                "value":" Another cool implementation of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class involves lists. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"instance Applicative [] where\n  -- pure :: a -> [a]\n  pure x = [x]\n\n  -- (<*>) :: Maybe [a -> b] -> [a] -> [b]\n  fs <*> xs = [f x | f <- fs, x <- xs]\n\nmain :: IO ()\nmain = do\n  -- Testing Applicative List []\n  let pure_list = pure :: a -> [a]\n  print $ pure_list 1 -- [1]\n  print $ pure_list \"Andy\" -- [\"Andy\"]\n  print $ pure_list (Just 1) -- [Just 1]\n  print $ pure_list (+1) <*> [1,2,3] -- [2,3,4]\n  print $ [(+1), (*10)] <*> [1,2,3] -- [2,3,4,10,20,30]\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Why is the Applicative Type Class Needed"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Why is the Applicative Type Class Needed?",
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
                "value":" Applicatives are an enhancement on top of functors.  While ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions can perform the same tasks as applicatives, their implementation is cumbersome and doesn't scale",
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
                "value":" The two functions defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class can be used to create ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions with any number of arguments.  For example, I created the following functor type classes where ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" maps a function with zero, one, and two arguments to every value in a type: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"\n-- Type class for a functor with zero arguments.  Simply wraps a value in a type that is an instance of Functor.\nclass Functor0 f where\n  fmap0 :: a -> f a\n\n-- Type class for a functor with a single argument.  This is equivalent to the normal fmap function and Functor type.\nclass Functor1 f where\n  fmap1 :: (a -> b) -> f a -> f b\n\n-- Type class for a functor with two arguments.\nclass Functor2 f where\n  fmap2 :: (a -> b -> c) -> f a -> f b -> f c\n",
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
                "value":" I made the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Maybe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Functor0",
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
                "value":"Functor1",
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
                "value":"Functor2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pure",
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
                "value":"(<*>)",
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
        "value":"\n-- Make Maybe an instance of a functor that maps a function with zero arguments.\ninstance Functor0 Maybe where\n  -- fmap0 :: a -> f a\n  -- fmap0 x = Just x\n  fmap0 x = pure x\n\n-- Make Maybe an instance of a functor that maps a function with one argument.\ninstance Functor1 Maybe where\n  -- fmap1 :: (a -> b) -> f a -> f b\n  -- fmap1 f x = fmap f x\n  fmap1 f x = pure f <*> x\n\n-- Make Maybe an instance of a functor that maps a function with two arguments.\ninstance Functor2 Maybe where\n  -- fmap2 :: (a -> b -> c) -> f a -> f b -> f c\n  fmap2 f x y = pure f <*> x <*> y\n",
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
                "value":"fmap0",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is functionally equivalent to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pure",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", wrapping a value in a functor type.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is equivalent to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Functor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes two values and applies them to a function which takes two arguments.  The functionality of these three functions can be seen in the following examples: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"print $ (fmap0 :: a -> Maybe a) 1 -- Just 1\nprint $ fmap1 (+1) (Just 1) -- Just 2\nprint $ fmap1 (+1) Nothing -- Nothing\nprint $ fmap2 (+) (Just 2) (Just 2) -- Just 4\nprint $ fmap2 (+) Nothing (Just 2) -- Nothing\nprint $ fmap2 (+) (Just 2) Nothing -- Nothing\n",
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
                "value":" Instead of defining functor type classes for every number of arguments, we can simply chain any number of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(<*>)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions as seen in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  For this reason, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Applicative",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class is used instead of different versions of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Applicatives in Java"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Applicatives in Java",
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
                "value":" Unlike Functors, Applicatives can't be expressed in Java",
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
                "value":".  This is because Java types lack Higher-Kinded polymorphism while Haskell types have Higher-Kinded polymorphism.  In Haskell terms, Higher-Kinded types apply to type constructors",
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
        "el":"definition",
        "attributes":{
            "word":"Kind"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A Kind is the type of a type constructor",
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
                "value":".  Haskell is a language whose type system is made up of kinds.  The most basic kind is denoted as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This basic kind is called “type”",
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
                "value":".  A more complex kind that represents a type constructor with a single argument is represented as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"* -> *",
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
                "value":"data Maybe a  =  Nothing | Just a",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a single argument type constructor. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Higher-Kinded Types"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A Higher-Kinded Type is a type that takes another type as an argument and constructs a new type",
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
                "value":". In the same way a higher-order function takes functions as arguments and returns a function, higher-kinded types take type constructors as arguments and return a new type",
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
                "value":".  An example of a higher-kinded type is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(* -> *) -> * -> *",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In Haskell this could be represented as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data HKT f a = HKT (f a)",
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
                "value":" If you want to check out the kinds of type constructors in Haskell you can use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":k",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command in GHCI. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"ghci\n\n:k Maybe\n# Maybe :: * -> *\n\n:k []\n# [] :: * -> *\n\n:k Either\n# Either :: * -> * -> *\n\n:k Functor\n# Functor :: (* -> *) -> Constraint\n\n:k Applicative\n# Applicative :: (* -> *) -> Constraint\n",
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
                "value":" In my research I've seen evidence that Applicatives can be expressed in C#.  Perhaps that will be the topic of a future article. ",
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
                "value":" Applicatives are a complex topic in functional programming and I'm still trying to wrap my brain around all their intricacies.  If you are reading this article to assist your own understanding of applicatives, I recommend reading many different articles on the topic along with writing code samples yourself.  Each article will add a piece to the puzzle in understanding applicatives.  In my next Haskell article I'll discuss monads!  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2019/08-Aug/08-03-haskell-pt7"
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

postName = "aug-3-2019-haskell-pt7";
postDate = new Date('2019-08-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Haskell Part VII: Applicatives",
    description: `In this article I’m exploring applicatives, which build on top of functors.  
        After discussing applicatives in Haskell, I’ll try implementing them in other languages.`,
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
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Applicative functors\", ",
            endName: "",
            linkName: "https://bit.ly/2hoQPql",
            link: "https://bit.ly/2hoQPql"
        },
        {
            startName: "\"GHC.Base Applicative\", ",
            endName: "",
            linkName: "https://bit.ly/2Mxwv8F",
            link: "https://bit.ly/2Mxwv8F"
        },
        {
            startName: "\"Haskell: How is <*> pronounced?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/3242853",
            link: "https://stackoverflow.com/a/3242853"
        },
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 158",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Is it possible to implement Functor<T> in Java?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/22944776",
            link: "https://stackoverflow.com/a/22944776"
        },
        {
            startName: "\"Higher-kinded polymorphism\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Type_class#Higher-kinded_polymorphism",
            link: "https://en.wikipedia.org/wiki/Type_class#Higher-kinded_polymorphism"
        },
        {
            startName: "\"Kind (type theory)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Kind_(type_theory)",
            link: "https://en.wikipedia.org/wiki/Kind_(type_theory)"
        },
        {
            startName: "\"Kind (type theory): Examples\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Kind_(type_theory)#Examples",
            link: "https://en.wikipedia.org/wiki/Kind_(type_theory)#Examples"
        },
        {
            startName: "\"Higher-Kinded Types\", ",
            endName: "",
            linkName: "http://dev.stephendiehl.com/fun/001_basics.html#higher-kinded-types",
            link: "http://dev.stephendiehl.com/fun/001_basics.html#higher-kinded-types"
        },
        {
            startName: "\"Higher-rank and higher-kinded types\", ",
            endName: "",
            linkName: "https://www.stephanboyer.com/post/115/higher-rank-and-higher-kinded-types",
            link: "https://www.stephanboyer.com/post/115/higher-rank-and-higher-kinded-types"
        },
        {
            startName: "\"Kind (type theory): Kind Inference\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Kind_(type_theory)#Kind_inference",
            link: "https://en.wikipedia.org/wiki/Kind_(type_theory)#Kind_inference"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});