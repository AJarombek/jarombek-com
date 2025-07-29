/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/12/2018
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
                "value":" In this discovery post, I'm exploring some interesting features of Python classes.  Python fully supports the object oriented paradigm, and I wrote about object oriented features such as the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-24-2018-python-data-model"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" data model",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in past articles.  Learning all the object oriented features of a language assists in creating APIs.  Hopefully this knowledge helps me create better Python objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Investigating Python Methods"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Investigating Python Methods",
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
                "value":" In this discovery post, I'm exploring some interesting features of Python classes.  Python fully supports the object oriented paradigm, and I wrote about object oriented features such as the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-24-2018-python-data-model"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" data model",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in past articles.  Learning all the object oriented features of a language assists in creating APIs.  Hopefully this knowledge helps me create better Python objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Investigating Python Methods"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Investigating Python Methods",
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
                "value":" I created a class named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Meta",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to help explore different object oriented features.  It holds two pieces of information - the first and last name of whoever created the object instance.  Here is the class outline: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"class Meta:\n\n  def __init__(self, first_name: str, last_name: str) -> None:\n    \"\"\"\n    Construct a new Meta object which contains the first and last name of its creator\n    :param first_name: the first name of the objects creator\n    :param last_name: the last name of the objects creator\n    \"\"\"\n    self.__first_name = first_name\n    self.__last_name = last_name\n\n  ...\n",
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
                "value":" One thing you may notice about this Python code is there are type hints for argument types and method return types.  Introduced in 2015 with Python 3.5, type hints aren't strictly enforced, but they do help IDE's identify code that doesn't follow expected types",
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
                "value":".  The type hints in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Meta",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tell us that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"first_name",
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
                "value":"last_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are expected to be of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"str",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the special ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__init__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"None",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Perhaps I'll write a full article about type hints in the future! ",
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
                "value":" When writing Python classes, one way to create specialized methods is with decorators (annotations). Decorators wrap methods with additional functionality.  One of the basic decorators is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@property",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which creates a getter method.  In ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Meta",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I created getter methods for the internal ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__first_name",
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
                "value":"__last_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Meta.py\n\n@property\ndef first_name(self) -> str:\n  \"\"\"\n  @property marks this function as a getter method.  This method gets the internal\n  first_name property of Meta.\n  :return: A string representing the owners first name\n  \"\"\"\n  return self.__first_name\n\n@property\ndef last_name(self) -> str:\n  \"\"\"\n  This method gets the internal last_name property of Meta.\n  :return: A string representing the owners last name\n  \"\"\"\n  return self.__last_name\n",
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
                "value":" Now that these getter methods are created, the internal ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__first_name",
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
                "value":"__last_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties are accessible through ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"first_name",
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
                "value":"last_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If you try accessing the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__first_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__last_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties directly an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AttributeError",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is thrown. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Main.py\n\nmeta = Meta(\"Andy\", \"J\")\nassert meta.first_name == \"Andy\"\nassert meta.last_name == \"J\"\n\ntry:\n  assert meta.__first_name == \"Andy\"\nexcept AttributeError:\n  print('Unable to find property __first_name in class Meta')\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Unable to find property __first_name in class Meta\n",
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
                "value":" Classes also typically contain special methods defined in Python's data model. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Meta",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__format__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" special method which is invoked from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"format()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" built-in method.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"format()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns a string representation of an object. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Meta.py\n\ndef __format__(self, format_spec: str=''):\n  \"\"\"\n  Special method to format a string representation of the Meta object\n  :param format_spec: the formatting specifier\n  :return: a formatted string representing the instance\n  \"\"\"\n  components = (format(self.__dict__[prop], format_spec) for prop in self.__dict__)\n  return '({}, {})'.format(*components)\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Main.py\n\nmeta = Meta(\"Andrew\", \"Jarombek\")\nassert format(meta, '') == '(Andrew, Jarombek)'\n",
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
                "value":" My implementation of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__format__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is interesting because it uses the objects internal dictionary ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Each object instance has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property which contains all the objects instance attributes.  For ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Meta",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" these instance attributes are the first and last name.  In ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__format__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"components",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is assigned to a generator which loops through each item in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and formats them.  Finally, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"components",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is passed to a strings ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"format()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method and returned. ",
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
                "value":" You may be expecting ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to contain both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__first_name",
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
                "value":"__last_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  While this would make sense, Python actually name mangles any attributes that begin with two underscores",
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
                "value":".  Python adds the class name into the instance attribute, so ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__first_name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" becomes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"_Meta__first_name",
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
        "value":"# Main.py\n\nmeta = Meta(\"Andrew\", \"Jarombek\")\n\nassert meta.__dict__ == {'_Meta__first_name': 'Andrew', '_Meta__last_name': 'Jarombek'}\nassert meta.__dict__['_Meta__first_name'] == 'Andrew'\nassert meta.__dict__['_Meta__last_name'] == 'Jarombek'\n",
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
                "value":" Using the per instance ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" demonstrates a common approach in many programming languages - safety over security.  Although instance attributes beginning with double underscores are considered private attributes and are name mangled, they are still accessible through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property (and through default attribute access).  In a similar sense, private instance variables in Java are only about safety, since they are still accessible with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njul-1-2018-java-reflection"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"reflection",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Safety is about protecting developers from common mistakes and maintaining elegant code, not stopping them from performing certain actions. ",
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
                "value":" Methods in Python are given a special first argument commonly named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"self",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This name is not strictly enforced by Python, but it's convention and considered a best practice.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"self",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" refers to the object itself, and can be used like any other object reference. ",
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
                "value":" With the help of decorators, we can change the special first argument passed to methods.  There are two decorators up to the task, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@classmethod",
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
                "value":"@staticmethod",
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
                "value":"@classmethod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" changes the first argument from the object instance to the class itself",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@staticmethod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" completely removes the first special argument. ",
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
                "value":"@classmethod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is commonly used for alternative constructors (known as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-20-2018-java-generics-api"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"static factory methods",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Java).  I also created a class method that returns basic information about the class. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Meta.py\n\n@classmethod\ndef about(cls) -> None:\n  \"\"\"\n  @classmethod alters this method to belong to the class instead of an object instance.\n  Therefore the first argument to this method is the class itself instead of the object\n  instance.  This method prints out some important properties of the class.\n  :return: None\n  \"\"\"\n  print('Class Name: {}'.format(cls.__name__))\n  print('Class Dict: {}'.format(cls.__dict__))\n\n@classmethod\ndef create(cls):\n  \"\"\"\n  Alternative constructor using a class method.  In Java, this construct is known as a\n  'static factory method'\n  :return: An instance of Meta\n  \"\"\"\n  return cls(\"Andrew\", \"Jarombek\")\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Main.py\n\n# Construct using the class method\nmeta = Meta.create()\n\nassert meta.first_name == \"Andrew\"\nassert meta.last_name == \"Jarombek\"\n",
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
                "value":"@staticmethod",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not have many uses, however you can use it to logically group a function into a class.  I created a static method which simply calls ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Meta.create()",
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
        "value":"# Meta.py\n\n@staticmethod\ndef static_create():\n  \"\"\"\n  Alternative constructor using a static method.  Static methods receive no special\n  first method unlike class methods and plain methods.\n  :return: An instance of Meta\n  \"\"\"\n  return Meta.create()\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Altering an Object's Internal Storage Mechanism"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Altering an Object's Internal Storage Mechanism",
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
                "value":" I already went over how each object instance contains metadata in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__dict__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  While this approach works well most of the time, it can get expensive for each object instance to store an internal dictionary data structure",
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
                "value":" If you have millions of object instances derived from the same class, its less expensive to maintain a per-instance tuple rather than a per-instance dictionary.  Python provides this alternative metadata storage mechanism with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__slots__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__slots__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tuple maintains all the instance attributes of a class. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"class CodeWritten:\n\n  # The __slots__ tuple replaces the per-instance __dict__\n  __slots__ = ('__day', '__language', '__amount')\n\n  def __init__(self, day: date, language: str, amount: int) -> None:\n    \"\"\"\n    Construct a new CodeWritten instance which represents the number of lines coded\n    in a specific language on a certain day\n    :param day: The day the code was written\n    :param language: The language the code was written in\n    :param amount: The number of lines coded\n    \"\"\"\n    self.__day = day\n    self.__language = language\n    self.__amount = amount\n\n  @property\n  def day(self) -> date:\n    return self.__day\n\n  @property\n  def language(self) -> str:\n    return self.__language\n\n  @property\n  def amount(self) -> int:\n    return self.__amount\n\n\n  if __name__ == '__main__':\n    python_today = CodeWritten(date.today(), 'Python', 146)\n    groovy_today = CodeWritten(date.today(), 'Groovy', 50)\n    yaml_today = CodeWritten(date.today(), 'YAML', 12)\n\n    assert python_today.amount == 146\n    assert python_today.language == 'Python'\n    assert python_today.day == date.today()\n\n    # Using __slots__ removes the ability to add new instance attributes\n    try:\n      python_today.minutes_spent_working = 60\n    except AttributeError:\n      print('Unable to add an attribute not declared in __slots__')\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Unable to add an attribute not declared in __slots__\n",
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
                "value":" A side effect of using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__slots__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is that instance attributes aren't allowed in an object if they aren't defined in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__slots__",
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
                "value":"__slots__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be used as a way to prevent users from adding attributes to objects, this is considered a bad practice in the Python community",
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
                "value":".  Preventing users from adding attributes is not what ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__slots__",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was designed for. ",
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
                "value":" This post continues my journey through Python and its advanced features.  My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-15-2018-python-protocols-abcs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will look at Python protocols and ABCs. ",
                "children":null
            }
        ]
    }
];

postName = "dec-14-2018-python-class-features";
postDate = new Date('2018-12-14T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Features of Python Classes",
    description: `In this discovery post, I’m exploring some of the interesting features of 
        Python classes`,
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
            name: "Object Oriented Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"PEP 484 -- Type Hints: Rationale and Goals\", ",
            endName: "",
            linkName: "https://www.python.org/dev/peps/pep-0484/#rationale-and-goals",
            link: "https://www.python.org/dev/peps/pep-0484/#rationale-and-goals"
        },
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 272",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 260",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 274",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 276",
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