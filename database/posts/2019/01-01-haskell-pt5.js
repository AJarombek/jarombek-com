/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/29/2018
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
                "value":" In this article, I'm exploring classes in Haskell.  Coming from object oriented languages, the concept of Haskell classes was a bit confusing for me.  Haskell is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\noct-6-2018-haskell-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"functional programming language",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so its class functionality doesn't match classes in object oriented languages such as Java or Python.  The closest comparison for Haskell classes in the object oriented world is Java interfaces with default methods",
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
                "value":". This article clears the confusion of Haskell classes. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Type Classes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Type Classes",
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
                "value":" In this article, I'm exploring classes in Haskell.  Coming from object oriented languages, the concept of Haskell classes was a bit confusing for me.  Haskell is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\noct-6-2018-haskell-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"functional programming language",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so its class functionality doesn't match classes in object oriented languages such as Java or Python.  The closest comparison for Haskell classes in the object oriented world is Java interfaces with default methods",
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
                "value":". This article helps clear the confusion of Haskell classes. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Type Classes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Type Classes",
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
                "value":" My previous Haskell post looked at declaring custom types.  Custom types and existing types can become instances of classes, giving them functionality.  Type classes are created with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration and instances are created with an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration. ",
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
                "value":" As I mentioned earlier, a class is similar to a Java interface.  Therefore it provides operator and function declarations without bodies.  For example, the following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class matches the one in the ",
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
                "value":" module that checks for equality. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"class Eq a where\n  (==), (/=) :: a -> a -> Bool\n\n  x /= y = not (x == y)\n",
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
                "value":" The class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines two operators, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"==",
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
                "value":"/=",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It also creates a default definition for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/=",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator (which is simply the opposite of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"==",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  If an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not implement the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/=",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator, its functionality falls back to the default definition",
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
                "value":" A type is defined as an instance of a class using an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration.  The following code declares ",
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
                "value":" as an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
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
        "value":"instance Eq Int where\n  (==) = eqInt\n  (/=) = neInt\n",
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
                "value":" While I didn't have to implement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(/=)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" due to the default definition, there is no harm in implementing it anyway.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"eqInt",
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
                "value":"neInt",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are internal Haskell functions used to determine integer equality. ",
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
                "value":" Thanks to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class and corresponding instance declaration, any two ",
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
                "value":" types can be used with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"==",
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
                "value":"/=",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operators. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"main :: IO ()\nmain = do\n  print $ (1 :: Int) == (1 :: Int) -- True\n  print $ (2 :: Int) == (1 :: Int) -- False\n",
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
                "value":" Just like built-in types, instances can be created with custom types.  The following code creates a custom ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FirTree",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type and declares it as an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
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
        "value":"\n-- Create a type for fir trees of different species.  A tree needs to be provided a height in feet and inches\ndata FirTree = FrasierFir Int Int | BalsamFir Int Int | DouglasFir Int Int\n\n{-|\n - Make FirTree an instance of Eq.  In order to be equal, the species of tree must be the same\n - and the trees must have the same height.\n -}\ninstance Eq FirTree where\n  (FrasierFir f1 i1) == (FrasierFir f2 i2) = (f1 == f2) && (i1 == i2)\n  (BalsamFir f1 i1) == (BalsamFir f2 i2) = (f1 == f2) && (i1 == i2)\n  (DouglasFir f1 i1) == (DouglasFir f2 i2) = (f1 == f2) && (i1 == i2)\n  _ == _ = False\n",
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
                "value":" I tested the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"==",
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
                "value":"/=",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operators with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FirTree",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" types. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"main :: IO ()\nmain = do\n\n  let balsam1 = BalsamFir 6 2\n  let balsam2 = BalsamFir 7 4\n  let balsam3 = BalsamFir 6 2\n\n  print $ balsam1 == balsam2 -- False\n  print $ balsam1 == balsam3 -- True\n\n  let frasier1 = FrasierFir 6 2\n  let frasier2 = FrasierFir 7 4\n  let frasier3 = FrasierFir 6 2\n\n  print $ frasier1 == frasier2 -- False\n  print $ frasier1 == frasier3 -- True\n  print $ frasier1 == balsam1 -- False\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Class Extensions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Class Extensions",
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
                "value":" Type classes can extend one of many existing classes.  Class extensions are a form of class inheritance, and a class that extends multiple classes demonstrates multiple inheritance.  I do feel nervous speaking of Haskell classes in object oriented terms simply because there are many differences between the two. These differences become apparent when dealing with multiple inheritance and class extensions. ",
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
                "value":" A simple example of a class extension from the ",
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
                "value":" module is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ord",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class which extends ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
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
        "value":"class (Eq a) => Ord a where\n  (<), (<=), (>=), (>) :: a -> a -> Bool\n  max, min :: a -> a -> a\n\n  -- Default methods\n  min x y | x <= y = x\n          | otherwise = y\n\n  max x y | x <= y = y\n          | otherwise = x\n",
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
                "value":" One of the major misconceptions I had about class extensions was a result of my object oriented background.  I figured that instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ord",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" would inherit the operators and functions from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", but that is not the case.  What a class extension actually means is that for a type to be an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ord",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" it must also be an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Eq",
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
                "value":". This is much different than object oriented class inheritance. ",
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
                "value":" I created a full ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-16-2018-java-default-method"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"diamond problem",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of Haskell class extensions, similar to my object oriented ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-22-2018-multiple-inheritance"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"multiple inheritance",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" example. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"-- Types of fir trees\ndata FrasierFir = FrasierFir Int Int\n                  deriving Show\n\ndata BalsamFir = BalsamFir Int Int\n                 deriving Show\n\ndata DouglasFir = DouglasFir Int Int\n                  deriving Show\n\n-- Grades for different qualities of the fir trees\ndata Grade = Fair | Good | Excellent\n             deriving Show\n\n{-|\n - A class for a biological tree.  Each tree must be able to calculate its height\n -}\nclass Tree a where\n  -- Class operator\n  height :: a -> Int\n\n  -- Default definition\n  height _ = 0\n\n{-|\n - A class for a Christmas tree which is an extension of the biological tree class.\n -}\nclass (Tree a) => ChristmasTree a where\n  -- Class operator\n  holiday_tree :: a -> Bool\n\n  -- Default definition\n  holiday_tree _ = True\n\n{-|\n - A class for an evergreen tree which is an extension of the biological tree class.\n -}\nclass (Tree a) => EvergreenTree a where\n  -- Class operator\n  leaf_persistence :: a -> Bool\n\n  -- Default definition\n  leaf_persistence _ = True\n\n{-|\n - A class for a fir tree, which is an extension of both a Christmas tree and an evergreen tree.\n -}\nclass (ChristmasTree a, EvergreenTree a) => FirTree a where\n  -- Class operators\n  fragrance :: a -> Grade\n  ease_to_decorate :: a -> Grade\n  needle_retention :: a -> Grade\n",
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
                "value":" To make the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FrasierFir",
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
                "value":"BalsamFir",
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
                "value":"DouglasFir",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" types instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FirTree",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", they first must be instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Tree",
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
                "value":"ChristmasTree",
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
                "value":"EvergreenTree",
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
        "value":"{-|\n - FrasierFir is an instance of FirTree.  Since it is an instance of FirTree, it must also be an instance\n - of ChristmasTree, EvergreenTree, and Tree\n -}\ninstance FirTree FrasierFir where\n  fragrance a = Fair\n  ease_to_decorate a = Good\n  needle_retention a = Excellent\n\ninstance ChristmasTree FrasierFir\ninstance EvergreenTree FrasierFir\n\ninstance Tree FrasierFir where\n  height (FrasierFir x y) = (x * 12) + y\n\n{-|\n - DouglasFir is an instance of FirTree.  Since it is an instance of FirTree, it must also be an instance\n - of ChristmasTree, EvergreenTree, and Tree\n -}\ninstance FirTree DouglasFir where\n  fragrance a = Good\n  ease_to_decorate a = Fair\n  needle_retention a = Excellent\n\ninstance ChristmasTree DouglasFir\ninstance EvergreenTree DouglasFir\n\ninstance Tree DouglasFir where\n  height (DouglasFir x y) = (x * 12) + y\n\n{-|\n - BalsamFir is an instance of FirTree.  Since it is an instance of FirTree, it must also be an instance\n - of ChristmasTree, EvergreenTree, and Tree\n -}\ninstance FirTree BalsamFir where\n  fragrance a = Excellent\n  ease_to_decorate a = Excellent\n  needle_retention a = Fair\n\ninstance ChristmasTree BalsamFir\ninstance EvergreenTree BalsamFir\n\ninstance Tree BalsamFir where\n  height (BalsamFir x y) = (x * 12) + y\n",
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
                "value":" Next I tested the functionality provided by the type classes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"main :: IO ()\nmain = do\n  let frasier = FrasierFir 7 2\n\n  print $ frasier -- FrasierFir 7 2\n  print $ fragrance frasier -- Fair\n  print $ ease_to_decorate frasier -- Good\n  print $ needle_retention frasier -- Excellent\n  print $ leaf_persistence frasier -- True\n  print $ holiday_tree frasier -- True\n  print $ height frasier -- 86\n\n  let balsam = BalsamFir 5 6\n\n  print $ balsam -- BalsamFir 5 6\n  print $ fragrance balsam -- Excellent\n  print $ ease_to_decorate balsam -- Excellent\n  print $ needle_retention balsam -- Fair\n\n  let douglas = DouglasFir 10 2\n\n  print $ douglas -- DouglasFir 10 2\n  print $ fragrance douglas -- Good\n  print $ ease_to_decorate douglas -- Fair\n  print $ needle_retention douglas -- Excellent\n",
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
                "value":" As this example demonstrates, Haskell provides multiple inheritance of classes. However, Haskell classes are more like interfaces, and instances of subclasses must explicitly be instances of all parent classes in the inheritance hierarchy. ",
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
                "value":" Type classes in Haskell are much different than the ones found in object oriented languages.  I'm excited to learn how to use them in more complex Haskell programs. ",
                "children":null
            }
        ]
    }
];

postName = "jan-1-2019-haskell-pt5";
postDate = new Date('2019-01-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Haskell Part V: Classes",
    description: `The closest comparison for Haskell classes in the object oriented world is Java 
        interfaces with default methods.  This article helps clear the confusion of 
        Haskell classes.`,
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
            name: "Object Oriented Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Type Classes and Overloading\", ",
            endName: "",
            linkName: "https://www.haskell.org/tutorial/classes.html",
            link: "https://www.haskell.org/tutorial/classes.html"
        },
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 99",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "",
            endName: ", 100",
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