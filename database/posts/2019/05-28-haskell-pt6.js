/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/26/2019
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
                "value":" Right now I'm learning ",
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
                "value":", a functional programming language.  In my last few Haskell articles I've discussed basic aspects of the language.  Now I've begun digging into advanced functional programming concepts.  This article discusses functors, a generic way to map functions over objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Functor Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Functor Basics",
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
                "value":" A common pattern in programming is looping through a collection of values and applying a transformation to each.  For example, a programmer might loop through a list of integers and increment each value.  The imperative approach to this transformation sets up a for loop and iterates over each list index.  The functional approach uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" higher-order function.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" accepts two arguments - a collection to iterate over and a function.  The function is applied to each item in the collection. ",
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
                "value":" Right now I'm learning ",
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
                "value":", a functional programming language.  In my last few Haskell articles I've discussed basic aspects of the language.  Now I've begun digging into advanced functional programming concepts.  This article discusses functors, a generic way to map functions over objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Functor Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Functor Basics",
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
                "value":" A common pattern in programming is looping through a collection of values and applying a transformation to each.  For example, a programmer might loop through a list of integers and increment each value.  The imperative approach to this transformation sets up a for loop and iterates over each list index.  The functional approach uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" higher-order function.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" accepts two arguments - a collection to iterate over and a function.  The function is applied to each item in the collection. ",
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
                "value":" Haskell has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function defined in the GHC Prelude module",
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
                "value":".  It accepts a list and a function as arguments. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"map :: (a -> b) -> [a] -> [b]\nmap _ []     = []\nmap f (x:xs) = f x : map f xs\n",
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
                "value":" With the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, list items can be transformed.  A basic example is incrementing each item in the list. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"main :: IO ()\nmain = do\n  print $ map (+1) [1,2,3] -- [2,3,4]\n",
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
                "value":" Haskell's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is useful, however its restricted to just a list data structure.  The concept of applying a function across all items in a data structure can be generalized even more than the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  This is where functors come into play. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Functor"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In Haskell (and functional programming in general), a functor provides the ability to map a function across all the items in a data structure or object",
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
                "value":".  Functors in Haskell are defined by a ",
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
                "value":" type class.  Types that are instances of ",
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
                "value":" implement a function called ",
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
                "value":", which provides mapping functionality. ",
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
                "value":"Functor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type class definition is simple: ",
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
                "value":" is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\naug-27-2018-groovy-currying#currying"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"curried function",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that takes in another function [",
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
                "value":"] and a value whose type is an instance of ",
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
                "value":" [",
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
                "value":"] as arguments.  ",
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
                "value":" passes ",
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
                "value":" to the function ",
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
                "value":", resulting in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"b",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Functor Examples"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Functor Examples",
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
                "value":" The most basic functor instance is for the list type",
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
        "value":"instance Functor [] where\n  -- fmap :: (a -> b) -> [a] -> [b]\n  fmap = map\n",
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
                "value":" For lists, ",
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
                "value":" is implemented the same as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Therefore, it behaves as expected. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"main :: IO ()\nmain = do\n  print $ fmap (+1) [1,2,3] -- [2,3,4]\n  print $ fmap (*2) [1,2,3] -- [2,4,6]\n  print $ fmap show [1,2,3] -- [\"1\",\"2\",\"3\"]\n",
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
                "value":" The great thing about functors is any parameterized type in Haskell can be made an instance of ",
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
                "value":".  For example, the ",
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
                "value":" type which defines a potentially non-existant value can become a functor. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"data Maybe a = Nothing | Just a\n\ninstance Functor Maybe where\n  -- fmap :: (a -> b) -> Maybe a -> Maybe b\n  fmap _ Nothing = Nothing\n  fmap g (Just x) = Just (g x)\n\nmain :: IO ()\nmain = do\n  print $ fmap (+1) (Just 5) -- Just 6\n  print $ fmap (+1) Nothing -- Nothing\n  print $ fmap (*3) (Just 5) -- Just 15\n  print $ fmap (*3) Nothing -- Nothing\n",
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
                "value":" Custom types can also become functors.  For example, my custom ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Distance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type is easily made an instance of ",
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
        "value":"data Distance a = Miles a | Kilometers a | Meters a\n                  deriving (Show, Read)\n\n-- Make the 'Distance' type into a Functor\ninstance Functor Distance where\n  -- fmap :: (a -> b) -> Distance a -> Distance b\n  fmap f (Miles x) = Miles (f x)\n  fmap f (Kilometers x) = Kilometers (f x)\n  fmap f (Meters x) = Meters (f x)\n\nmain :: IO ()\nmain = do\n  print $ fmap (+1) (Miles 4.38) -- Miles 5.38\n  print $ fmap (+1) (Kilometers 7.05) -- Kilometers 8.05\n  print $ fmap (+1) (Meters 7005) -- Meters 7006\n  print $ fmap (*3) (Miles 1) -- Miles 3\n",
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
                "value":"Distance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a valid functor instance because its data definition is parameterized and it has a type constructor.  You can think of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Distance",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as a container type, since it holds a value such as a floating point number.  Lists and the ",
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
                "value":" type have similar structures.  Types without a parameterized data definition are not valid functors because they don't contain another type",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Working with Functors"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Working with Functors",
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
                "value":" Functors are useful for mapping functions across all items contained in an object.  They become even more useful in regards to Applicatives and Monads, which I will discuss in upcoming articles. ",
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
                "value":" For now, one last useful functor implementation is a generic function for all instances of ",
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
                "value":" to utilize.  With the help of a ",
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
                "value":" class constant, a function is easily created to increment the items in any ",
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
                "value":" instance",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"inc :: Functor f => f Int -> f Int\ninc x = fmap (+1) x\n\nmain :: IO ()\nmain = do\n  print $ inc [1,2,3] -- [2,3,4]\n  print $ inc (Just 5) -- Just 6\n  print $ inc Nothing -- Nothing\n  print $ inc (Miles 3) -- Miles 4\n",
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
                "value":" Any type that is an instance of ",
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
                "value":" can utilize the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inc",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function!  This is a really powerful design pattern for function reuse. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Functors in Java"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Functors in Java",
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
                "value":" The concept of functors isn't limited to Haskell or functional programming.  In Java, the ",
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
                "value":" type class is represented as an interface",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface Functor<T> {\n\n  /**\n   * Map a function to values wrapped inside the Functor instance\n   * @param f A function that is applied to the Functor\n   * @param <R> The generic type that will be wrapped in the Functor return value\n   * @return A new instance of Functor\n   */\n  <R> Functor<R> fmap(Function<T, R> f);\n}\n",
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
                "value":" Classes can implement the ",
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
                "value":" interface. This is comparable to creating an instance of the ",
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
                "value":" type class in Haskell.  The following class creates a list that is also a functor. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class FList<T> implements Functor<T> {\n\n  // The FList class uses composition to hold an instance of a List object\n  private List<T> list;\n\n  /**\n   * Construct an FList object with any iterable collection.  Converts the Iterable to a List.\n   * @param iterable - Iterable collection used as the contents of the FList\n   */\n  public FList(Iterable<T> iterable) {\n    list = new ArrayList<>();\n    iterable.forEach(list::add);\n  }\n\n  /**\n   * {@inheritDoc}\n   */\n  @Override\n  public <R> FList<R> fmap(Function<T, R> f) {\n    List<R> newList = list.stream().map(f).collect(toList());\n    return new FList<>(newList);\n  }\n\n  /**\n   * Retrieve the internal list object\n   * @return The Generic list\n   */\n  public List<T> getList() {\n    return list;\n  }\n}\n",
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
                "value":" Class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has a concrete implementation of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as required by the ",
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
                "value":" interface.  For the sake of another example, the following class defines a functor for a pair of values. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class FPair<T> implements Functor<T> {\n\n  // The FPair object contains two values of matching types\n  private T item1;\n  private T item2;\n\n  /**\n   * Construct a pair based on two values of the same type.\n   * @param item1 The first value\n   * @param item2 The second value\n   */\n  public FPair(T item1, T item2) {\n    this.item1 = item1;\n    this.item2 = item2;\n  }\n\n  /**\n   * {@inheritDoc}\n   */\n  @Override\n  public <R> FPair<R> fmap(Function<T, R> f) {\n    return new FPair<>(f.apply(item1), f.apply(item2));\n  }\n\n  /**\n   * Get the internal objects and return them as a list\n   * @return A list containing two objects\n   */\n  public List<T> getPair() {\n    return List.of(item1, item2);\n  }\n}\n",
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
                "value":" The following code confirms that the functors behave as expected when invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fmap()",
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
            "language":"Java"
        },
        "value":"public static void main(String... args) {\n  // Testing the Functor implementation of a List\n  FList<Integer> fList = new FList<>(List.of(1,2,3,4));\n\n  fList = fList.fmap(x -> x * 2)\n               .fmap(x -> x + 1);\n\n  List<Integer> list = fList.getList();\n  assert list.size() == 4;\n  assert list.toString().equals(\"[3, 5, 7, 9]\");\n\n  // Testing the Functor implementation of a Pair\n  FPair<Double> fPair = new FPair<>(0.1, 0.2);\n\n  fPair = fPair.fmap(x -> x + 1)\n               .fmap(x -> x * 2)\n               .fmap(x -> x / 2);\n\n  List<Double> pairList = fPair.getPair();\n  assert pairList.size() == 2;\n  assert pairList.toString().equals(\"[1.1, 1.2]\");\n}\n",
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
                "value":" For completeness, here is the generic ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inc()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function for functors in Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"static Functor<Integer> inc(Functor<Integer> functor) {\n  return functor.fmap(x -> x + 1);\n}\n\npublic static void main(String... args) {\n  // inc() works on lists...\n  FList<Integer> fList2 = new FList<>(List.of(5,6,7,8));\n  fList2 = (FList<Integer>) inc(fList2);\n\n  List<Integer> list2 = fList2.getList();\n  assert list2.size() == 4;\n  assert list2.toString().equals(\"[6, 7, 8, 9]\");\n\n  // ...and on pairs of objects\n  FPair<Integer> fPair2 = new FPair<>(1,2);\n  fPair2 = (FPair<Integer>) inc(fPair2);\n\n  List<Integer> pairList2 = fPair2.getPair();\n  assert pairList2.size() == 2;\n  assert pairList2.toString().equals(\"[2, 3]\");\n}\n",
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
                "value":" The same functor pattern works in many different languages! ",
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
                "value":" Working with a functional programming language forces the brain to think about common problems differently. While initially difficult to reason about, functors simply provide a mechanism for mapping a function across different items.  Functors also promote the creation of generic code which works for many different types.  In my next article I'll build on this knowledge and explore applicatives.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/05-May/\n05-28-haskell-pt6"
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

postName = "may-28-2019-haskell-pt6";
postDate = new Date('2019-05-28T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Haskell Part VI: Functors",
    description: `This article discusses functors, a generic way to map functions over objects.`,
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
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "Functional Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"GHC.Base map\", ",
            endName: "",
            linkName: "https://bit.ly/2YO30Cq",
            link: "https://bit.ly/2YO30Cq"
        },
        {
            startName: "\"In Functional Programming, what is a functor?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/2031421",
            link: "https://stackoverflow.com/a/2031421"
        },
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 154",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Custom Functor instance: Expected kind...\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/45235908",
            link: "https://stackoverflow.com/a/45235908"
        },
        {
            startName: "",
            endName: ", 156",
            linkName: "Hutton.",
            link: "https://bit.ly/2QofI6x"
        },
        {
            startName: "\"Functional Programming in Pure Java: Functor and Monad Examples\", ",
            endName: "",
            linkName: "https://dzone.com/articles/functor-and-monad-examples-in-plain-java",
            link: "https://dzone.com/articles/functor-and-monad-examples-in-plain-java"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});