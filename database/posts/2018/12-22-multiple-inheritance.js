/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/20/2018
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
                "value":" I recently read a book discussing multiple inheritance in Python.  Python is one of the few object oriented languages that permits multiple inheritance of classes.  Many other languages include workarounds for multiple inheritance.  For example, Java allows for classes to implement multiple interfaces.  On the other hand, PHP allows for classes to use multiple traits.  This article looks at programming languages I use and how they enforce multiple inheritance or available workarounds. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is Multiple Inheritance?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Multiple Inheritance?",
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
                "value":" I recently read a book discussing multiple inheritance in Python.  Python is one of the few object oriented languages that permits multiple inheritance of classes.  Many other languages include workarounds for multiple inheritance.  For example, Java allows for classes to implement multiple interfaces.  On the other hand, PHP allows for classes to use multiple traits.  This article looks at programming languages I use and how they enforce multiple inheritance or available workarounds. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Multiple Inheritance?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Multiple Inheritance?",
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
                "value":" In object oriented programming, inheritance is when a class takes properties and methods from another existing class.  With inheritance, hierarchies of class relationships are formed.  For example, class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which inherits properties and methods from class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" forms an is-a relationship, such that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  All the properties and methods from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are passed along to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If another class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" inherits class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", its concluded that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"B",
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
                "value":"C",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Therefore the following class hierarchy is formed: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/12-22-18-hierarchy1.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Multiple Inheritance"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When a class takes properties and methods from more than one existing class.  For example, class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" might inherit from classes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
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
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This is known as 'extending multiple classes.' Most languages have specialized syntax to extend (inherit) a class. Multiple inheritance is unavailable in many languages due to its complexity and ambiguity, although certain languages such as C++ and Python enable it. ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/12-22-18-hierarchy2.png"
                },
                "value":null,
                "children":[

                ]
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
                "value":" To understand the pitfalls of multiple inheritance, take the case where classes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
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
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" both have a method named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"execute()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  When an instance of class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" invokes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"execute()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is the method in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"A",
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
                "value":"B",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" called? This is an ambiguous situation, and determining which one is invoked often comes down to documented rules. ",
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
                "value":" Some object-oriented languages I use (such as Python) permit multiple inheritance.  Many others prohibit multiple inheritance but provide safer workarounds.  The rest of this post looks at how different languages handle multiple inheritance, in particular the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njan-16-2018-java-default-method"
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"C++"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"C++",
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
                "value":" Although I don't really use C++, it's the language I always think of when hearing about multiple inheritance.  C++ is one of the earliest languages I know of that implements multiple inheritance. In fact, the troubles that multiple inheritance gave developers in C++ is what influenced James Gosling (the creator of Java) to omit multiple inheritance from Java",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" I'm not very good at C++, but I wrote an example of the diamond problem.  The following class hierarchy relates to biological trees. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// Defines a generic tree\nclass Tree {\nprotected:\n  int feet;\n  int inches;\npublic:\n  Tree(int feet, int inches) {\n    cout << \"Tree()\" << endl;\n    this->feet = feet;\n    this->inches = inches;\n  }\n\n  // Calculates the height of the tree in inches\n  int height() {\n    return (this->feet * 12) + this->inches;\n  }\n};\n\n// Defines a Christmas tree\nclass ChristmasTree: virtual public Tree {\npublic:\n  ChristmasTree(int feet, int inches): Tree(feet, inches) {\n    cout << \"ChristmasTree()\" << endl;\n  }\n\n  string type() {\n    return \"Christmas\";\n  }\n};\n\n// Defines an evergreen tree\nclass EvergreenTree: virtual public Tree {\npublic:\n  EvergreenTree(int feet, int inches): Tree(feet, inches) {\n    cout << \"EvergreenTree()\" << endl;\n  }\n\n  string type() {\n    return \"Evergreen\";\n  }\n};\n\n// Defines a balsam fir, which is a christmas tree and an evergreen tree\nclass BalsamFir: public ChristmasTree, public EvergreenTree {\npublic:\n  BalsamFir(int feet, int inches): ChristmasTree(feet, inches), EvergreenTree(feet, inches), Tree(feet, inches) {\n    cout << \"BalsamFir()\" << endl;\n  }\n\n  bool leafPeristence() {\n    return EvergreenTree::type() == \"Evergreen\";\n  }\n};\n",
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
                "value":" At the top is a generic ",
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
                "value":" class, which is extended by the ",
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
                "value":" and ",
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
                "value":" classes.  Finally the ",
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
                "value":" class extends both ",
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
                "value":" and ",
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
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/12-22-18-hierarchy3.png"
                },
                "value":null,
                "children":[

                ]
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
                "value":" This code works fine except for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method defined in ",
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
                "value":" and ",
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
                "value":".  Invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on an instance of ",
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
                "value":" is ambiguous since it could come from either ",
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
                "value":" or ",
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
                "value":".  If you try to, the code won't compile. ",
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
                "value":" The following is printed to stdout when invoking the ",
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
                "value":" constructor. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"int main() {\n  BalsamFir balsamFir(7, 2);\n\n  assert(balsamFir.height() == 86);\n  assert(balsamFir.leafPeristence());\n\n  return 0;\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Tree()\nChristmasTree()\nEvergreenTree()\nBalsamFir()\n",
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
                "value":" Notice that each class constructor is called once.  This isn't actually the default behavior of the diamond problem in C++.  It's the result of virtual inheritance, which is implemented using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"virtual",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword on the ",
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
                "value":" and ",
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
                "value":" class definitions where ",
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
                "value":" is extended. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"class ChristmasTree: virtual public Tree {...}\n\n…\n\nclass EvergreenTree: virtual public Tree {...}\n",
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
                "value":" If the virtual keyword is removed from these class definitions, the code doesn't even compile.  What impact does the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"virtual",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword have? ",
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
                "value":" When a class inherits another class in C++, the subclass retains a copy of all the properties and methods in the parent class",
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
                "value":".  The subclass also contains a copy of all the properties and methods from inherited classes of the parent class.  This process of copying properties and methods continues all the way up the class hierarchy. ",
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
                "value":" As a result of these copies, an interesting issue forms in the diamond problem.  Subclass ",
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
                "value":" stores copies of the properties and methods in ",
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
                "value":" and its parent class ",
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
                "value":". ",
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
                "value":" also stores copies of the properties and methods in ",
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
                "value":" and its parent class ",
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
                "value":".  Notice that ",
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
                "value":" receives copies from ",
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
                "value":" twice - once from ",
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
                "value":" and once from ",
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
                "value":".  This is a source of conflict that causes errors. ",
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
                "value":" The fix to this issue is virtual inheritance, which is implemented using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"virtual",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  With virtual inheritance, ",
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
                "value":" only receives one copy of ",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Java"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Java",
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
                "value":" When writing Java, James Gosling thought the benefits of multiple inheritance were not worth the risks and complexities.  Java does not support multiple inheritance of classes, instead using an interface construct to simulate multiple inheritance.  When Java was first released, all methods defined in interfaces had no bodies.  Instead, construction of method bodies were delegated to implementing classes. ",
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
                "value":" As of Java 8, methods in interfaces can have bodies.  These methods are called \"default methods,\" and are mostly used for API backwards compatibility.  I wrote an article about ",
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
                        "value":"default methods and the diamond problem",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" back in January.  While I'll let you read that post for more insight, here is the biological tree hierarchy implemented in Java: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface Tree {\n\n  String type();\n\n  default String height() {\n    return \"(0, 0)\";\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface ChristmasTree extends Tree {\n\n  default String type() {\n    return \"Christmas\";\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface EvergreenTree extends Tree {\n\n  default String type() {\n    return \"Evergreen\";\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class BalsamFir implements EvergreenTree, ChristmasTree {\n\n  private List<Integer> height;\n\n  public BalsamFir(int feet, int inches) {\n    this.height = List.of(feet, inches);\n  }\n\n  @Override\n  public String type() {\n    return EvergreenTree.super.type();\n  }\n\n  @Override\n  public String height() {\n    return \"(\" + height.get(0) + \", \" + height.get(1) + \")\";\n  }\n\n  /**\n   * Determine if the leaves persist in winter or not.\n   * @return {@code true}\n   */\n  public boolean leafPersistence() {\n    return EvergreenTree.super.type().equals(\"Evergreen\");\n  }\n\n  /**\n   * Determine if the tree is a christmas tree.\n   * @return {@code true}\n   */\n  public boolean isChristmasTree() {\n    return ChristmasTree.super.type().equals(\"Christmas\");\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Main {\n  public static void main(String... args) {\n    var balsam = new BalsamFir(7, 2);\n\n    assert balsam.isChristmasTree();\n    assert balsam.leafPersistence();\n    assert balsam.height().equals(\"(7, 2)\");\n  }\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Groovy"
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In Groovy you can simulate multiple inheritance just like in Java.  However, Groovy introduces an additional construct called a trait, which is designed with composition in mind",
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
                "value":". Classes implement traits, which give them additional functionality.  Classes can implement multiple traits, simulating a multiple inheritance model just like Java interfaces with default methods. In the case of naming conflicts for methods in traits, the method from the last trait declared after the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"implements",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword is used in the class",
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
                "value":". You can see this rule at work in the ",
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
                "value":" class. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"trait Tree {\n  int height_feet\n  int height_inches\n\n  /**\n   * The height of the tree in feet and inches\n   * @return A string of the form ('feet', 'inches')\n   */\n  def height() {\n    return \"(${this.height_feet}, ${this.height_inches})\"\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"trait ChristmasTree implements Tree {\n  private String tree_type = \"Christmas\"\n\n  def type() {\n    return this.tree_type\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"trait EvergreenTree implements Tree {\n  private String tree_type = \"Evergreen\"\n\n  def type() {\n    return this.tree_type\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"class BalsamFir implements ChristmasTree, EvergreenTree {\n\n  BalsamFir(heightMap) {\n    this.height_feet = heightMap.feet\n    this.height_inches = heightMap.inches\n  }\n\n  /**\n   * Determine if the leaves persist in winter or not.  Method {@code type()} on the {@link EvergreenTree} trait\n   * is used here because it is declared after {@link ChristmasTree} in the {@code implements} clause.\n   * @return {@code true}\n   */\n  def leafPersistence() {\n    return this.type() == \"Evergreen\"\n  }\n\n  /**\n   * Determine if the tree is a christmas tree.  Explicitly use the {@code type()} method from\n   * the implemented {@link ChristmasTree} trait.\n   * @return {@code true}\n   */\n  def isChristmasTree() {\n    return ChristmasTree.super.type() == \"Christmas\"\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def heightMap = [feet: 7, inches: 2]\ndef balsam = new BalsamFir(heightMap)\n\nassert balsam.leafPersistence()\nassert balsam.height() == '(7, 2)'\n\nassert balsam.isChristmasTree()\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"PHP"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"PHP",
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
                "value":" PHP does not allow for multiple inheritance.  However, just like Groovy it has traits which can be used to simulate multiple inheritance.  The biggest difference between traits in Groovy and PHP is the way naming conflicts are resolved.  While Groovy picks the method from the last implemented trait in the case of a conflict, PHP throws an error.  When a class uses multiple traits in PHP, method names must be unique across all traits.  While this is stricter than Groovy, PHP classes that inherit multiple traits are very predictable because of this enforcement. ",
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
                "value":" I commented out the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method in ",
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
                "value":" in order for the example to work. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"interface Tree\n{\n  public function height();\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"trait EvergreenTree\n{\n  public function type() {\n    return \"Evergreen\";\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"trait ChristmasTree\n{\n\n  public $holidayTree = true;\n\n  // PHP Fatal error:  Trait method type has not been applied, because there are collisions with other trait methods\n  // Methods from traits used in a class must be unique.  If multiple traits have methods of the same name,\n  // a conflict occurs.\n\n  // public function type() {return \"Christmas\";}\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"class BalsamFir implements Tree\n{\n  // Add traits to the class\n  use EvergreenTree;\n  use ChristmasTree;\n\n  private $height_feet;\n  private $height_inches;\n\n  public function __construct($height)\n  {\n    $this->height_feet = $height[\"feet\"];\n    $this->height_inches = $height[\"inches\"];\n  }\n\n  public function height()\n  {\n    return sprintf(\"%d' %d\\\"\", $this->height_feet, $this->height_inches);\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"include 'Tree.php';\ninclude 'ChristmasTree.php';\ninclude 'EvergreenTree.php';\ninclude 'BalsamFir.php';\n\n$tree_height = [\"feet\" => 7, \"inches\" => 2];\n\n$balsam = new BalsamFir($tree_height);\n\nprint_r($balsam);\n\nassert($balsam->type() == \"Evergreen\");\nassert($balsam->height() == \"7' 2\\\"\");\nassert($balsam->holidayTree);\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Swift"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Swift",
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
                "value":" The Swift implementation is quite unique.  Swift does not support multiple inheritance, but does support protocols (equivalent to interfaces in Java, Groovy, and PHP).  Swift also has extensions, which allow you to add functionality to an existing class or protocol.  One restriction enforced by extensions is that names of variables and methods must be unique across all extensions for a class or protocol. Therefore I couldn't create two extensions for the ",
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
                "value":" protocol called ",
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
                "value":" and ",
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
                "value":" that both contain a variable named ",
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
                "value":".  Here is my attempt at simulating multiple inheritance: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"/**\n Create a protocol for a generic tree.  Protocols are similar to interfaces from Java\n */\nprotocol Tree {\n\n  /**\n   Get the height of the tree\n   */\n  func height() -> [String:Int]\n}\n\ntypealias ChristmasTree = Tree\n\n/**\n Add an extension to the Tree protocol for Christmas trees\n */\nextension ChristmasTree {\n\n  var type: String {\n    return \"Christmas\"\n  }\n}\n\ntypealias EvergreenTree = Tree\n\n/**\n Add an extension to the Tree protocol for Evergreen trees\n */\nextension EvergreenTree {\n  // Can't redeclare var 'type', since it already exists in ChristmasTree\n\n  var leaf_persistence: String {\n    return \"Evergreen\"\n  }\n}\n\n/**\n Implement the Tree protocol with the ChristmasTree and EvergreenTree extensions\n */\nclass BalsamFir: Tree {\n\n  let feet: Int\n  let inches: Int\n\n  init(height: [String:Int]) {\n    self.feet = height[\"feet\"] ?? 0\n    self.inches = height[\"inches\"] ?? 0\n  }\n\n  /**\n   Implement the height() method defined in the Tree protocol.\n   */\n  func height() -> [String:Int] {\n    return [\"feet\": self.feet, \"inches\": self.inches]\n  }\n\n  /**\n   Determine whether or not the leaves on the tree persist through winter\n   */\n  func leafPersistence() -> Bool {\n    return self.leaf_persistence == \"Evergreen\"\n  }\n}\n\n// Test scripts\n\nlet balsam = BalsamFir(height: [\"feet\": 7, \"inches\": 2])\n\nassert(balsam.type == \"Christmas\")\nassert(balsam.height() == [\"feet\": 7, \"inches\": 2])\nassert(balsam.leafPersistence())\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"JavaScript"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"JavaScript",
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
                "value":" JavaScript is unique amongst object oriented languages because it uses prototypes and prototype chains for object hierarchies.  I wrote an entire post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njun-9-2018-js-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"prototypes in JavaScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" if you want to learn more. ",
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
                "value":" An object in JavaScript can only have a single prototype, so multiple inheritance is not allowed. However, you can still use composition or mixins instead of inheritance.  After all, many say that composition should be used over inheritance, as famously coined from the Gang of Four Design Patterns book",
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
                "value":" While slightly different than ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-6-2018-haskell-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"function compositions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", object compositions are when an object contains other objects as properties.  These other objects are used to give the enclosing object additional functionality.  For example, a method invoked on the enclosing object can delegate that call to an object it contains as a property. This is a way to inherit methods and properties from objects without dealing with the languages inheritance mechanism.  Here is the function composition approach: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"/**\n * Base tree functionality - every tree should have a height\n * @type {{getHeight: function(): *}}\n */\nconst tree = {\n  getHeight: () => this._height\n};\n\n/**\n * Evergreen tree functionality\n * @type {{type: function(): string, leafPersistence: boolean}}\n */\nconst evergreenTree = {\n  type: () => \"Evergreen\",\n  leafPersistence: true\n};\n\n/**\n * Christmas tree functionality\n * @type {{type: function(): string}}\n */\nconst christmasTree = {\n  type: () => \"Christmas\"\n};\n\n/**\n * A balsam fir tree.  Use object composition with the tree, evergreen tree,\n * and christmas tree objects\n * @param height - how tall the tree is\n * @return {*}\n */\nconst balsamFir = (height) => {\n\n  // Object composition\n  this.tree = tree;\n  this.evergreenTree = evergreenTree;\n  this.christmasTree = christmasTree;\n\n  this._height = height;\n\n  // Delegate functions and properties to composed objects\n  this.type = christmasTree.type;\n  this.leafPersistence = evergreenTree.leafPersistence;\n  this.getHeight = tree.getHeight;\n\n  return this;\n};\n\nconst balsam = balsamFir(7);\n\nassert(balsam.getHeight() === 7);\nassert(balsam.type() === \"Christmas\");\nassert(balsam.leafPersistence);\n",
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
                "value":" Another option is to use mixins.  Mixins pass their contents to another object.  Here is the mixin approach (everything stays the same except for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"balsamFir",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object): ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"/**\n * A balsam fir tree.  Mix-in the tree, evergreen tree, and christmas tree objects\n * @param height - how tall the tree is\n * @return {*}\n */\nconst balsamFir = (height) => {\n  this._height = height;\n\n  // Combine 'this', the tree, evergreenTree, and christmasTree mixins.\n  // Properties from the last mixed in object replace duplicates from prior objects\n  return Object.assign(this, { ...tree, ...evergreenTree, ...christmasTree });\n};\n\nconst balsam = balsamFir(7);\n\nassert(balsam.getHeight() === 7);\nassert(balsam.type() === \"Christmas\");\nassert(balsam.leafPersistence);\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Python"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Python",
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
                "value":" Python shares the most similarities with C++ in regards to multiple inheritance.  Like C++, Python enables multiple inheritance for classes, although it does not require virtual inheritance to function.  Unlike C++, the method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" works fine in Python.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" didn't work in C++ because it was defined in two different inherited classes.  Python objects maintain a method resolution order that moves through the inherited classes in the order they are defined.  As soon as it encounters the first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method in an inherited class, it gets invoked from that class.  In the following example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in class ",
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
                "value":" always delegates to ",
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
                "value":" because its declared as the first superclass of ",
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
        "value":"class Tree:\n  \"\"\" Class representing a generic tree \"\"\"\n\n  def __init__(self, height: tuple) -> None:\n    self.__height = height\n\n  @property\n  def height(self) -> tuple:\n    \"\"\"\n    The height of the tree in feet and inches\n    :return: A tuple of form ('feet', 'inches')\n    \"\"\"\n    return self.__height\n\n\nclass ChristmasTree(Tree):\n  \"\"\" Class representing a tree used for Christmas \"\"\"\n\n  def __init__(self, height: tuple) -> None:\n    super().__init__(height)\n    self.__type = 'Christmas'\n\n  def type(self) -> str:\n    \"\"\"\n    The type of tree\n    :return: 'Christmas'\n    \"\"\"\n    return self.__type\n\n\nclass EvergreenTree(Tree):\n  \"\"\" Class representing a tree that keeps its foliage year round \"\"\"\n\n  def __init__(self, height: tuple) -> None:\n    super().__init__(height)\n    self.__type = 'Evergreen'\n\n  def type(self) -> str:\n    \"\"\"\n    The type of tree\n    :return: 'Evergreen'\n    \"\"\"\n    return self.__type\n\n\nclass BalsamFir(ChristmasTree, EvergreenTree):\n  \"\"\" Class representing a balsam fir Christmas tree \"\"\"\n\n  def __init__(self, height: tuple) -> None:\n    super().__init__(height)\n\n  def leaf_persistence(self) -> str:\n    \"\"\"\n    Determine if the leaves persist or not\n    :return: either 'Evergreen' or 'Deciduous'\n    \"\"\"\n    return EvergreenTree.type(self)\n\n\nif __name__ == '__main__':\n  balsam = BalsamFir((7, 2))\n\n  assert balsam.height == (7, 2)\n  assert balsam.type() == 'Christmas'\n  assert balsam.leaf_persistence() == 'Evergreen'\n\n  # The method resolution order shows that the class 'ChristmasTree' comes before 'EvergreenTree'\n  assert BalsamFir.__mro__ == (BalsamFir, ChristmasTree, EvergreenTree, Tree, object)\n",
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
                "value":" This post explored how different languages use multiple inheritance or comparable workarounds. I'll add more languages to this list as I continue to explore!  All the code from this post is available  on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/12-Dec/\n12-22-multiple-inheritance"
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
        "el":"updateinfo",
        "attributes":{
            "date":"January 31st, 2019"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" C# does not support multiple inheritance in its current version (7.0).  The inheritance features provided by C# are comparable to those in Java prior to Java 8.  Therefore, object composition is needed to create a multiple inheritance model in C#.  I demonstrate composing multiple objects on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/12-Dec/12-22-multiple-inheritance/\ncsharp"
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
                "value":".  There are proposals to implement default interface methods in C# for a future release (similar to Java's ",
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
                        "value":" default methods",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":")",
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
    }
];

postName = "dec-22-2018-multiple-inheritance";
postDate = new Date('2018-12-22T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "How Languages Enforce Multiple Inheritance",
    description: `This article looks at how different languages I use enforce multiple inheritance 
        and explores the available workarounds.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Inheritance"
        },
        {
            name: "Object Oriented Programming"
        },
        {
            name: "C++",
            picture: "https://asset.jarombek.com/logos/cpp.png",
            color: "cpp"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
        },
        {
            name: "PHP",
            picture: "https://asset.jarombek.com/logos/php.svg",
            color: "php"
        },
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "James Gosling, 1995, \"Java: an Overview,\" Sun Microsystems, February 1995. ",
            endName: "",
            linkName: "https://www.cs.dartmouth.edu/~mckeeman/cs118/references/OriginalJavaWhitepaper.pdf",
            link: "https://www.cs.dartmouth.edu/~mckeeman/cs118/references/OriginalJavaWhitepaper.pdf"
        },
        {
            startName: "\"Virtual inheritance\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Virtual_inheritance",
            link: "https://en.wikipedia.org/wiki/Virtual_inheritance"
        },
        {
            startName: "Dierk König & Paul King, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2015), 185",
            linkName: "Groovy In Action",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "\"Traits: Multiple inheritance conflicts\", ",
            endName: "",
            linkName: "https://bit.ly/2rM8C1w",
            link: "https://bit.ly/2rM8C1w"
        },
        {
            startName: "\"Composition over inheritance\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Composition_over_inheritance",
            link: "https://en.wikipedia.org/wiki/Composition_over_inheritance"
        },
        {
            startName: "\"default interface methods\", ",
            endName: "",
            linkName: "https://bit.ly/2S4KmYh",
            link: "https://bit.ly/2S4KmYh"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});