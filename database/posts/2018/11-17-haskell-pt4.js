/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 11/15/2018
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
                "value":" provides multiple ways to declare types.  Some types are simply aliases for existing types, while some are completely new.  This post explains the differences between the three mechanisms for creating types in Haskell. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"type",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"type",
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
                "value":" The first keyword for declaring types in Haskell is ",
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
                "value":". ",
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
                "value":" creates an alias for an existing type (also commonly called a type synonym)",
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
                "value":".  For example, the following code creates a type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Song",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which is an alias for a tuple containing a string and a list of strings. ",
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
                "value":" provides multiple ways to declare types.  Some types are simply aliases for existing types, while some are completely new.  This post explains the differences between the three mechanisms for creating types in Haskell. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"type",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"type",
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
                "value":" The first keyword for declaring types in Haskell is ",
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
                "value":". ",
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
                "value":" creates an alias for an existing type (also commonly called a type synonym)",
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
                "value":".  For example, the following code creates a type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Song",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which is an alias for a tuple containing a string and a list of strings. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"type Song = (String, [String])\n\n{-|\n  Retrieve the title from a Song type.\n-}\ntitle :: Song -> String\ntitle (t,as) = t\n\n{-|\n  Retrieve the list of artists from a Song type.\n-}\nartists :: Song -> [String]\nartists (t,as) = as\n\n{- Main Function -}\nmain :: IO ()\nmain = do\n  let ech_ts = (\"Enchanted\", [\"Taylor Swift\"])\n\n  -- Print out the full song\n  print $ ech_ts\n\n  -- Print out the song title\n  print $ title ech_ts\n\n  -- Print out the songs artists\n  print $ artists ech_ts\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"(\"Enchanted\",[\"Taylor Swift\"])\n\"Enchanted\"\n[\"Taylor Swift\"]\n",
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
                "value":" Type aliases can also include type variables.  Type variables are represented by a lowercase letter or word and declare a type to be polymorphic",
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
                "value":".  A polymorphic type can take many different forms.  The following type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Week",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates an alias for a polymorphic tuple containing seven elements. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"type Week a = (a,a,a,a,a,a,a)\n",
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
                "value":" Any seven element tuple is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Week",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as long as all the elements are of the same type.  The next code sample's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"main",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function contains three tuples.  The first two are valid ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Week",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" types, while the third is not.  When invoking a function that takes in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Week",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as an argument, the final tuple fails. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"{-|\n  Retrieve the item in the fourth element of the tuple (which represents Wednesday).\n-}\nwednesday :: Week a -> a\nwednesday (_,_,_,w,_,_,_) = w\n\n{- Main Function -}\nmain :: IO ()\nmain = do\n  -- milesWalked is a tuple of length seven, so its also a 'Week'\n  let milesWalked = (1.2,4.0,6.7,2.0,0.0,0.0,7.0)\n  print $ wednesday milesWalked -- 2.0\n\n  let daysOfWeek = (\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\")\n  print $ wednesday daysOfWeek -- \"Wednesday\"\n\n  let notAWeek = (\"1\",\"2\",\"3\",4,\"5\",6,\"7\")\n  print $ notAWeek\n  -- print $ wednesday notAWeek -- Fails because the tuple notAWeek does not match the 'Week' type\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"data",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"data",
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
                "value":" The second keyword for declaring types in Haskell is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data",
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
                "value":"data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares a completely new type, unlike ",
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
                "value":" which creates an alias for an existing type.  For example, the following data type represents different exercises: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"data ExerciseType = Run | Swim | Bike\n",
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
                "value":"ExerciseType",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is read as \"ExerciseType equals Run or Swim or Bike.\"  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Run",
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
                "value":"Swim",
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
                "value":"Bike",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are called constructors.  Constructor names must be unique across all types, so the following code is illegal",
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
        "value":"data Pets = Cat | Dog\n\n{- Error: Multiple Declarations of 'Cat' -}\ndata Animal = Cat | Deer\n",
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
                "value":" Constructors have no meaning when declared.  However, as developers we give them meaning through the way they interact with existing types. ",
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
                "value":" Constructors can also have arguments.  The type of the arguments can be concrete types or type aliases.  When creating a value that matches a type, the arguments are mandatory.  Constructors that take arguments are known as constructor functions, which are the same as regular functions except with no body",
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
                "value":".  Constructor functions simply collect data and enforce the data type. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"data Distance = Miles Float | Kilometers Float | Meters Float\n\ndata Maybe a = Nothing | Just a\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"ghci\n\n:type Just\n# Just :: a -> Maybe a\n\n:type Miles\n# Miles :: Float -> Distance\n\n:type Kilometers\n# Kilometers :: Float -> Distance\n",
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
                "value":" Types created with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword can become instances of multiple classes.  Each class contains operations for use on instances, such as checking for equality between two values or converting a value to a string",
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
                "value":" Haskell classes are beyond the scope of this post, but there is a shortcut for making instances of common classes in the ",
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
                "value":" module.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"deriving",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword makes a type an instance of common classes such as ",
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
                "value":", ",
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
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Show",
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
                "value":"Read",
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
                "value":" I revised ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExerciseType",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" so that its an instance of both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Show",
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
                "value":"Read",
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
                "value":"Show",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" allows ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExerciseType",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to be converted into a string while ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Read",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" allows strings to be converted into an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExerciseType",
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
        "value":"data ExerciseType = Run | Swim | Bike\n                    deriving (Show, Read)\n",
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
                "value":" Bringing all these concepts together, I built a function that creates an optional exercise type of a given distance. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"import Prelude hiding (Maybe, Just, Nothing)\n\ndata Maybe a = Nothing | Just a\n               deriving (Show, Read)\n\ndata ExerciseType = Run | Swim | Bike\n                    deriving (Show, Read)\n\ndata Distance = Miles Float | Kilometers Float | Meters Float\n                deriving (Show, Read)\n\n{-|\n  Create an exercise if a valid distance is provided.  If an invalid distance is provided, return Nothing.\n-}\nexercise :: ExerciseType -> Distance -> Maybe (ExerciseType, Distance)\nexercise e (Miles x) | x > 0 = Just (e, Miles x)\n                     | otherwise = Nothing\nexercise e (Kilometers x) | x > 0 = Just (e, Kilometers x)\n                          | otherwise = Nothing\nexercise e (Meters x) | x > 0 = Just (e, Meters x)\n                      | otherwise = Nothing\n\n{- Main Function -}\nmain :: IO ()\nmain = do\n  print $ exercise Run (Miles 1.05)\n  print $ exercise Bike (Kilometers 3)\n  print $ exercise Swim (Meters 120)\n\n  print $ exercise Run (Miles 0)\n  print $ exercise Run (Miles (-2.1))\n  print $ exercise Bike (Kilometers (-2.1))\n  print $ exercise Swim (Meters (-2.1))\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Just (Run,Miles 1.05)\nJust (Bike,Kilometers 3.0)\nJust (Swim,Meters 120.0)\nNothing\nNothing\nNothing\nNothing\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"newtype",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"newtype",
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
                "value":" The third and final keyword for declaring types in Haskell is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"newtype",
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
                "value":"newtype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a new type similar to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It’s used in replacement for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" when the type has a single constructor function.  Replacing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"newtype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is simply a performance optimization",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"newtype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can also create a type based on an existing type similar to ",
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
                "value":".  The difference is that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"newtype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a separate entity in the type system while ",
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
                "value":" is simply an alias (synonym) of an existing type",
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
                "value":" Here is some sample code using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"newtype",
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
        "value":"newtype Miles = Miles Float\n                deriving (Show, Read)\n\nnewtype Kilometers = Kilometers Float\n                     deriving (Show, Read)\n\nnewtype Meters = Meters Float\n                 deriving (Show, Read)\n\n{- Main Function -}\nmain :: IO ()\nmain = do\n  print $ Miles 3.11\n  print $ Kilometers 5\n  print $ Meters 5000\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Miles 3.11\nKilometers 5.0\nMeters 5000.0\n",
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
                "value":" Haskell has a very unique system for declaring types.  I’m excited to learn more about using types in Haskell and how to give them functionality with classes!  All the code from this post is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/11-Nov/11-17-haskell-pt4"
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

postName = "nov-17-2018-haskell-pt4";
postDate = new Date('2018-11-17T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Haskell Part IV: Types",
    description: `This post explains the difference between the three mechanisms for creating types 
        in Haskell.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Haskell",
            picture: "https://asset.jarombek.com/logos/haskell.png",
            color: "haskell"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 92",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "",
            endName: ", 29",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "",
            endName: ", 93",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "",
            endName: ", 94",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Type Classes and Overloading\", ",
            endName: "",
            linkName: "https://www.haskell.org/tutorial/classes.html",
            link: "https://www.haskell.org/tutorial/classes.html"
        },
        {
            startName: "",
            endName: ", 100",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "",
            endName: ", 96",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Types, Again\", ",
            endName: "",
            linkName: "https://www.haskell.org/tutorial/moretypes.html",
            link: "https://www.haskell.org/tutorial/moretypes.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});