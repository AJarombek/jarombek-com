/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/13/2018
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
                "value":" Python provides many different techniques for declaring interfaces.  Some are informal such as protocols, while some are strict such as ABCs.  The lack of an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"interface",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword makes learning all the different techniques a bit more difficult.  This discovery post explores different options for creating interfaces in Python. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Protocols & Duck Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Protocols & Duck Typing",
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
                "value":" Python provides many different techniques for declaring interfaces.  Some are informal such as protocols, while some are strict such as ABCs.  The lack of an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"interface",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword makes learning all the different techniques a bit more difficult.  This discovery post explores different options for creating interfaces in Python. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Protocols & Duck Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Protocols & Duck Typing",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Protocol"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In Python a protocol is an informal interface.  Protocols are either known as an accepted truth or defined in documentation and not strictly in code",
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
                "value":".  For example, any class that implements the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__container__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" special method is said to follow the \"container protocol.\"  While this is an accepted truth, there is no syntax in the Python language that declares a class as following a protocol.  Python classes can also implement multiple protocols. ",
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
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing#duck-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Duck typing",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to determine if a class follows a protocol.  Duck typing is when you assume an object follows a certain protocol based on the existence of certain methods or properties. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# TrailMap.py\n\nclass TrailMap:\n\n  def __init__(self, trails):\n    \"\"\"\n    Construct a new TrailMap object which contains a list of all the trails in a park\n    :param trails: a list of trails, which should be represented as a tuple formatted\n    as: (trail_name, distance)\n    \"\"\"\n    self.__trails = trails\n\n  @property\n  def trails(self):\n    return self.__trails\n\n  def __len__(self):\n    \"\"\"\n    Special method to get the length of the object\n    :return: the length of the internal __trails list\n    \"\"\"\n    return len(self.__trails)\n\n  def __getitem__(self, item):\n    \"\"\"\n    Special method to get an item at a position in the object.  Since TrailMap implements\n    both __len__ and __getitem__, it follows the Sequence protocol.\n    :param item: A position to search for an item\n    :return: A trail in the trail map\n    \"\"\"\n    cls = type(self)\n    if isinstance(item, slice):\n      return cls(self.__trails[item])\n    elif isinstance(item, numbers.Integral):\n      return self.__trails[item]\n    else:\n      error_message = '{.__name__} indices must be integers'\n      raise TypeError(error_message.format(cls))\n\n\nif __name__ == '__main__':\n  mrp_trails = [('Main Road', 1.3), ('Swamp Trail', 2.2), ('Laurel Trail', 1.8)]\n  mrp_trail_map = TrailMap(mrp_trails)\n\n  # Since TrailMap implements the Sequence protocol, slicing now works.\n  # As expected, len() and index accesses work as well\n  assert len(mrp_trail_map) is 3\n  assert mrp_trail_map[0] == ('Main Road', 1.3)\n\n  last_two_trails = mrp_trail_map[1:]\n  first_and_last_trails = mrp_trail_map[0::2]\n\n  assert last_two_trails.trails == [('Swamp Trail', 2.2), ('Laurel Trail', 1.8)]\n  assert first_and_last_trails.trails == [('Main Road', 1.3), ('Laurel Trail', 1.8)]\n\n  # If no __iter__() special method exists, Python falls back to __getitem__()\n  for trail in mrp_trail_map:\n    assert type(trail) is tuple\n",
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-14-2018-python-class-features"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I mentioned how Python 3.5 added type hints to help enforce types in IDEs.  Type hints can also exist in separate files with the ",
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
                        "value":".pyi",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" extension.  I created one of these files for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TrailMap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class.  Its named ",
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
                        "value":"TrailMap.pyi",
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
            "language":"Python"
        },
        "value":"# TrailMap.pyi\n\nclass TrailMap:\n\n  # TrailMap constructor\n  def __init__(self, trails: list(tuple)) -> None:\n  self.__trails = trails\n\n  # Property getter method\n  def trails(self) -> tuple: ...\n\n  # Python special methods which implement the Sequence protocol\n  def __len__(self) -> int: ...\n  def __getitem__(self, item) -> TrailMap: ...\n",
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
                "value":" Take note that none of these methods contain bodies.  They simply declare the type hints for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TrailMap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class in ",
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
                        "value":"TrailMap.py",
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
            "title":"ABCs"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"ABCs",
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
                "value":" Abstract Base Classes (ABCs) are formal interfaces in Python.  ABCs can contain abstract and concrete methods.  In general its recommended for a class to inherit from an ABC instead of a concrete class",
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
                "value":". ABCs in Python are comparable to abstract classes in Java, although Python ABCs support multiple inheritance while Java abstract classes do not. ",
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
                "value":" It's recommended to only subclass ABCs defined in the Python standard library",
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
                "value":".  Using the existing Python ABCs follows the practice of using existing language features instead of creating your own.  For example, to find the length of an object you should simply invoke the built-in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"len()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function instead of a custom implementation. ",
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
                "value":" With this recommendation out of the way, I did create a custom ABC just to demonstrate how it works. My custom class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" only needs to subclass ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"abc.ABC",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in order to become an ABC. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import abc\n\n\nclass Exercise(abc.ABC):\n  ...\n",
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
                "value":" Inside an ABC, abstract methods are declared with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@abc.abstractmethod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" decorator.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ABC declares three abstract methods: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"miles()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the miles exercised, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"time",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the length of the exercise, and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"date",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for when the exercise occurred.  Abstract method bodies are implemented in classes that extend the ABC. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Exercise.py\n  \n@property\n@abc.abstractmethod\ndef miles(self) -> numbers.Real:\n  \"\"\"\n  Get the distance of the exercise in miles\n  \"\"\"\n\n@property\n@abc.abstractmethod\ndef time(self) -> tuple:\n  \"\"\"\n  Get the length of the exercise in minutes and seconds\n  \"\"\"\n\n@property\n@abc.abstractmethod\ndef date(self) -> date:\n  \"\"\"\n  Get the date that the exercise occurred\n  \"\"\"\n",
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
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also contains one concrete method which calculates the mile pace of the exercise. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Exercise.py\n  \ndef pace(self) -> tuple:\n  \"\"\"\n  Calculate the pace of the exercise in minutes and seconds\n  \"\"\"\n  minutes, seconds = self.time\n  total_seconds = (minutes * 60) + seconds\n  seconds_per_mile = total_seconds / self.miles\n  return seconds_per_mile / 60, seconds_per_mile % 60\n",
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
                "value":" I ran some assertion statements to confirm that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"abc.ABC",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"abc.ABC",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the second class in the method resolution order of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
            "language":"Python"
        },
        "value":"assert Exercise.__mro__ == (Exercise, abc.ABC, object)\nassert issubclass(Exercise, abc.ABC)\n",
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
                "value":" Subclassing an ABC is easy.  All you have to do is extend the ABC and implement all the abstract methods. The following ",
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
                "value":" concrete class extends the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ABC. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import numbers\nfrom datetime import date\nfrom Exercise import Exercise\n\n\nclass Run(Exercise):\n\n  def __init__(self, miles: numbers.Real, time: tuple, run_date: date, surface: str) -> None:\n    \"\"\"\n    Initialize a new Run object, which directly subclasses the Exercise ABC\n    :param miles: the number of miles run\n    :param time: the time taken to complete the run.  Should be of the form (minutes, seconds)\n    :param run_date: the day that the run took place\n    \"\"\"\n    self.__miles = miles\n    self.__time = time\n    self.__date = run_date\n    self.__surface = surface\n\n  @property\n  def miles(self) -> numbers.Real:\n    return self.__miles\n\n  @property\n  def time(self) -> tuple:\n    return self.__time\n\n  @property\n  def date(self) -> date:\n    return self.__date\n\n  @property\n  def surface(self) -> str:\n    \"\"\"\n    Get the surface that the run occurred on\n    :return: a string describing the running surface\n    \"\"\"\n    return self.__surface\n\n  def __str__(self) -> str:\n    \"\"\"\n    Create a string representation of the run\n    :return: a string\n    \"\"\"\n    return '(Ran {} miles in {}:{} on {} on {})'.format(self.miles, self.time[0], self.time[1],\n                                                        self.date, self.surface)\n",
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
                "value":" Looking at the metadata of ",
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
                "value":" confirms that it's a subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and its object instances are instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
            "language":"Python"
        },
        "value":"assert Run.__mro__ == (Run, Exercise, abc.ABC, object)\n\nrun = Run(1.14, (10, 12), date(2018, 11, 27), 'Sand')\nassert str(run) == '(Ran 1.14 miles in 10:12 on 2018-11-27 on Sand)'\n\nassert isinstance(run, Exercise)\nassert issubclass(Run, Exercise)\n",
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
                "value":" Directly subclassing an ABC like I did with ",
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
                "value":" is only one of the subclassing options that Python offers.  Python also allows for classes to be registered as virtual subclasses of an ABC",
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
                "value":".  Virtual subclasses don't need to implement the methods of the parent class.  Instead, Python trusts that the subclass maintains an is-a relationship with the parent class.  The following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Elliptical",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class is a virtual subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
            "language":"Python"
        },
        "value":"@Exercise.register\nclass Elliptical:\n\n  def __init__(self, time: tuple) -> None:\n    self.__time = time\n\n  @property\n  def time(self):\n    return self.__time\n",
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
                "value":" Virtual subclasses are registered with the ABCs ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"register()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class method.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"register()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is commonly used as a decorator on the subclass.  The above example used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@Exercise.register",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" decorator on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Elliptical",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class. ",
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
                "value":" It's important to note that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Elliptical",
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
                "value":"date()",
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
                "value":"miles()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" abstract methods in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ABC.  Despite this discrepancy, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Elliptical",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is still a subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Elliptical",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are still instances of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
            "language":"Python"
        },
        "value":"elliptical = Elliptical((60, 0))\n\nassert isinstance(elliptical, Exercise)\nassert issubclass(Elliptical, Exercise)\n",
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
                "value":" Virtual subclasses give ABCs more flexibility.  This flexibility further differentiates the strict abstract classes of Java from ABCs in Python. ",
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
                "value":" While more flexible than abstract classes in Java, ABCs in Python are still stricter than protocols  utilizing duck typing.  However, Python does allow for ABCs to use duck typing when determining subclasses as well.  ABCs implement duck typing with the special method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__subclasshook__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This method helps a class determine if another class is a subclass.  Behind the scenes, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__subclasshook__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is called when ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"isinstance()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked with an object or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"issubclass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked with a class. ",
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
                "value":" I added ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__subclasshook__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ABC.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__subclasshook__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares that if a method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"is_exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exists anywhere in a class or its parent hierarchy, it's considered a subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
            "language":"Python"
        },
        "value":"# Exercise.py\n\n@classmethod\ndef __subclasshook__(cls, c):\n  \"\"\"\n  Help determine if a class is a subclass.  Use duck typing to make any class with an\n  'is_exercise' method a subclass of Exercise\n  :param c: The class to check if it is a subclass\n  :return: True if the class is a subclass of Exercise, otherwise NotImplemented\n  \"\"\"\n  if cls is Exercise:\n    if any(\"is_exercise\" in b.__dict__ for b in c.__mro__):\n      return True\n  return NotImplemented\n",
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
                "value":" I then created a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ski",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class with an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"is_exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  With the help of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__subclasshook__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and duck typing, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Ski",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is considered a subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
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
            "language":"Python"
        },
        "value":"class Ski:\n\ndef __init__(self, time: tuple) -> None:\n  self.__time = time\n\n@property\ndef time(self) -> tuple:\n  return self.__time\n\ndef is_exercise(self) -> bool:\n  \"\"\"\n  Determine whether the skiing was an exercise or not.  With this method, 'Ski' is considered an 'Exercise'\n  through duck typing.\n  :return: True if the ski is an exercise, False otherwise\n  \"\"\"\n  minutes, seconds = self.time\n  return minutes + seconds > 0\n\n\nif __name__ == '__main__':\n  nordic_ski = Ski((30, 0))\n\n  # Instances and Subclasses of Exercise via __subclasshook__()\n  assert isinstance(nordic_ski, Exercise)\n  assert issubclass(Ski, Exercise)\n",
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
                "value":" Python provides very flexible ways to utilize inheritance in object oriented design.  Outside of concrete classes, ABCs are the most strict use of inheritance.  However, developers can make them less strict with the use of virtual subclassing and duck typing with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__subclasshook__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If you want an extremely informal inheritance design, protocols can be used for classes following common patterns. ",
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
                "value":" The code for this discovery post is up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://bit.ly/2PBRipv"
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

postName = "dec-15-2018-python-protocols-abcs";
postDate = new Date('2018-12-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "From Protocols to ABCs in Python",
    description: `This discovery post explores different options for creating interfaces in 
        Python.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Protocols"
        },
        {
            name: "Inheritance"
        },
        {
            name: "Object Oriented Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 289",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 328",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 329",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 344",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});