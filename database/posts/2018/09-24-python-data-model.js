/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/21/2018
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
                "value":" This summer I started a trend of picking a different programming language each season to explore. The language of the summer was ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-2-2018-groovy-basics-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Groovy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which was selected because I used Groovy at work.  For the fall I’ve decided to deep dive into Python.  Python was the first language I learned, beginning with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/resume"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CS101",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" my freshman year of college. ",
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
                "value":" Python is well documented as a beginner friendly language.  It is taught at most colleges to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-20-2018-intro-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"introduce programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The ease of learning Python does come at a price.  Very few master the language since they feel there is no need to",
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
                "value":".  The goal of dissecting Python this fall is to truly understand everything the core language has to offer.  To begin, I will explore Python’s data model. ",
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
                "value":" This summer I started a trend of picking a different programming language each season to explore. The language of the summer was ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-2-2018-groovy-basics-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Groovy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which was selected because I used Groovy at work.  For the fall I’ve decided to deep dive into Python.  Python was the first language I learned, beginning with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/resume"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CS101",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" my freshman year of college. ",
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
                "value":" Python is well documented as a beginner friendly language.  It is taught at most colleges to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-20-2018-intro-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"introduce programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The ease of learning Python does come at a price.  Very few master the language since they feel there is no need to",
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
                "value":".  The goal of dissecting Python this fall is to truly understand everything the core language has to offer.  To begin, I will explore Python’s data model. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Data Model for Objects"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Data Model for Objects",
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
                "value":" The Python data model is a meta-object protocol.  I previously discussed meta-object protocols in relation to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-14-2018-groovy-dynamic"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Groovy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Another example of a meta-object protocol is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-1-2018-java-reflection"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Java’s reflection API",
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
        "el":"definition",
        "attributes":{
            "word":"Meta-Object Protocol"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A meta-object protocol (MOP) is an API for a programming languages object system",
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
                "value":".  Functions of a MOP include ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-1-2018-java-reflection#type-introspection"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"type introspection",
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
                    "href":"https://jarombek.com/blog/jul-1-2018-java-reflection#reflection"
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
                "value":" of objects at runtime.  This means you can observe and modify aspects of an object or program at runtime through the MOP.  A MOP is also used for method dispatch, sometimes as an internal function and other times exposed in the protocols API.  Languages often expose MOP methods for use in class definitions. ",
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
                "value":" Python exposes many MOP methods for use on objects.  The MOP API allows developers to create objects that interact with existing language features such as object construction, built-in functions, and operators",
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
                "value":".  Python refers to these methods as \"special methods\".  You have likely seen them in Python code on a regular basis - they begin and end with two underscores (ex. ",
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
                "value":"). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Using Special Methods"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Using Special Methods",
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
                "value":" I used Python's special methods in the past, but never knew they were part of the Python data model (aka the MOP).  I decided to test out some special methods in two classes. ",
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
                "value":" The first class represents a town with a name, population, date founded, and list of districts: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"class Town:\n\n    def __init__(self, name, founded, population=0, districts=list()):\n        self.name = name\n        self.founded = founded\n        self.population = population\n        self.districts = districts\n\n    def __repr__(self):\n        return 'Town of %s: Founded in %r with a Population of %r' % \\\n            (self.name, self.founded, self.population)\n\n    def __len__(self):\n        return datetime.now().year - self.founded\n\n    def __getitem__(self, item):\n        return self.districts[item]\n\n    def __eq__(self, other):\n        return self.name == other.name \\\n            and self.founded == other.founded \\\n            and self.population == other.population \\\n            and self.districts == other.districts\n",
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
                "value":" I use five special methods in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Town",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class definition - ",
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
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__repr__()",
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
                "value":"__len__()",
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
                "value":"__getitem__()",
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
                "value":"__eq__()",
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
                "value":"__init__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is pretty self explanatory, it initializes a new object.  When an object constructor is called, ",
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
                "value":" is invoked behind the scenes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"\ngreenwich = Town('Greenwich', 1640, 62396, ['Riverside', 'Cos Cob', 'Old Greenwich', 'Greenwich'])\n",
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
                "value":"__repr__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to return a string representation of an object, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__len__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to get the length of an object, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__getitem__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to get an item at an index in an object, and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__eq__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to determine equality between two objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Calls to len() invoke the __len__() special method\nassert len(greenwich) == 378\n\n# Indexing an object invokes the __getitem__() special method\nassert greenwich[0] == 'Riverside'\nassert greenwich[-2] == 'Old Greenwich'\n\n# Implementing __getitem__() also allows for iteration over an object\nfor district in greenwich:\n    assert district in ['Riverside', 'Cos Cob', 'Old Greenwich', 'Greenwich']\n\n# Create a second town of Rye\nrye = Town('Rye', 1660, 45928, ['Port Chester', 'Rye'])\n\n# Test out the __eq__() special method\nassert (greenwich == rye) is False\n\ngreenwich_clone = deepcopy(greenwich)\nassert (greenwich == greenwich_clone) is True\n",
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
                "value":" Its important to note that none of the special methods I defined are invoked directly.  All of them are indirectly invoked through language operators or built-in functions.  For example, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__len__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" special method is indirectly invoked when the built-in ",
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
                "value":" function is called. ",
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
                "value":" The Python data model creates a standard API across all objects",
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
                "value":".  Any object that implements ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"__getitem__()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can use the languages indexing syntax.  To get the length of any object in Python, developers know they need to use the built-in ",
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
                "value":" function.  This is a vast improvement over Java, where arrays use a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"length",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ArrayList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"size()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method, and strings use a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"length()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  I had to search through the Java documentation just to make sure I correctly remembered all these methods (and Java is the language I’ve used the most!). ",
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
                "value":" Now I am beginning to appreciate Python’s MOP and how predictable it makes the language.  If you are interested, below is another class that uses special methods.  All the code from this article is also on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/09-Sep/\n9-24-python-data-model"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"class Run:\n\n    def __init__(self, miles=0, minutes=0, seconds=0):\n        \"\"\"\n        Construct a Run instance\n        :param miles: the miles run.  This parameter defaults to 0 if no argument is passed\n        :param minutes: the minutes spent running. This parameter defaults to 0 if no argument\n        is passed\n        :param seconds: the seconds spent running. This parameter defaults to 0 if no argument\n        is passed\n        \"\"\"\n        miles = miles if miles >= 0 else 0\n        minutes = minutes if minutes >= 0 else 0\n        seconds = seconds if seconds >= 0 else 0\n\n        self.miles = miles\n        self.minutes = minutes\n        self.minutes += seconds // 60\n        self.seconds = seconds % 60\n\n    def __repr__(self):\n        \"\"\"\n        Special method used to get the string representation of an object.  It is invoked by\n        both print() and str() among others.  This method is also a fallback from the __str__()\n        special method\n        :return: a String representation of the Run object\n        \"\"\"\n        seconds = str(self.seconds) if self.seconds >= 10 else '0%r' % self.seconds\n        return '%r miles in %r:%s' % (self.miles, self.minutes, seconds)\n\n    def __bool__(self):\n        \"\"\"\n        A special method used to check if the object is truthy or falsy.  An object is falsy if\n        all the miles, minutes, and seconds properties equal 0.  Otherwise, it is truthy.\n        :return: True if the object is truthy, False otherwise\n        \"\"\"\n        return self.miles > 0 or self.minutes > 0 or self.seconds > 0\n\n    def __add__(self, other):\n        \"\"\"\n        A special method used with the addition operator (+).  This method is invoked if two\n        Run objects are added together.\n        :param other: another object to add to this object\n        :return: a new Run object with the two previous Run objects properties added together\n        \"\"\"\n        miles = self.miles + other.miles\n        seconds = self.seconds + other.seconds\n        minutes = seconds // 60\n        seconds = seconds % 60\n        minutes += self.minutes + other.minutes\n\n        return Run(miles, minutes, seconds)\n\n    def __lshift__(self, other):\n        \"\"\"\n        A special method used with the left shift operator (<<).  This method is invoked if a\n        Run object is left shifted with another object.  NOTE: This method breaks the convention\n        of using the left shift operator for a bitwise operation.\n        :param other: another object to left shift with this object (should be a number)\n        :return: a new Run object with the other object added to the miles run of the current\n        Run object.\n        \"\"\"\n        new_mileage = self.miles + other\n        new_mileage = new_mileage if new_mileage > 0 else 0\n\n        return Run(new_mileage, self.minutes, self.seconds)\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"shaker = Run(2.3, 16, 13)\n\n# Calls to print() and str() invoke the __repr__() special method\nprint('Shaker: %s' % shaker)\nassert str(shaker) == '2.3 miles in 16:13'\n\npalmer_hill_run = Run(4.3, 30, 12)\n\n# Calls to bool() invoke the __bool__() special method\nassert bool(shaker)\nassert bool(palmer_hill_run)\n\nempty_run = Run()\nassert not bool(empty_run)\n\nextra_mile = Run(1, 6, 55)\n\n# Adding two Run objects together invokes the __add__() special method\nlong_shaker = shaker + extra_mile\nassert str(long_shaker) == '3.3 miles in 23:08'\n\ninvalid_run = Run(-10, -6, 109)\nassert str(invalid_run) == '0 miles in 1:49'\n\n# Applying the left shift operator to a Run invokes the __lshift__() special method\nvalid_run = invalid_run << 0.15\nassert str(valid_run) == '0.15 miles in 1:49'\n",
        "children":null
    }
];

postName = "sep-24-2018-python-data-model";
postDate = new Date('2018-09-24T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Python's Data Model",
    description: `The goal of dissecting Python this fall is to truly understand everything the 
        core language has to offer.  To begin, I will explore Python’s data model.`,
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
            name: "Meta-Object Protocol"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), xv",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "\"What is a Meta Object Protocol?\", ",
            endName: "",
            linkName: "https://goo.gl/smzWgK",
            link: "https://goo.gl/smzWgK"
        },
        {
            startName: "",
            endName: ", 3",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 6",
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