/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/29/2018
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
                "value":" While working with the object oriented paradigm, methods often need to be overridden or overloaded.  These similar concepts are often confused by new developers - in my early days of software development it took a long time to remember the differences.  Both overriding and overloading consist of creating multiple methods of the same name.  The difference between the two is the scope and situation in which these methods are used. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Method Overloading vs. Overriding"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Overloading ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Overloading is creating multiple methods or functions in the same scope with the same name.  For overloaded methods the scope is a class definition.  The difference between overloaded methods is the number of parameters - or for a language with explicit type definitions the parameter types.  A programming language is tasked with choosing between the different overloaded methods when they are invoked.  Invocation processes differ across programming languages. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Overriding ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Overriding methods occurs in object oriented programming when a subclass implements a method already defined in the superclass.  Everything about the method signature stays the same - including the number of parameters and the return type of the method.  When the method is called from a subclass instance, the overridden method is invoked instead of the superclass method. ",
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
                                        "value":" Languages such as JavaScript use a similar technique to overriding with prototypal inheritance. The JavaScript technique is called shadowing, in which an object lower on the prototype chain has a method that shares the same name as a method higher up the chain.  Methods lower on the prototype chain will block - or shadow - methods with the same signature higher on the chain. Shadowing results in methods lower on the chain being invoked. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
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
                "value":" While working with the object oriented paradigm, methods often need to be overridden or overloaded.  These similar concepts are often confused by new developers - in my early days of software development it took a long time to remember the differences.  Both overriding and overloading consist of creating multiple methods of the same name.  The difference between the two is the scope and situation in which these methods are used. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Method Overloading vs. Overriding"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Overloading ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Overloading is creating multiple methods or functions in the same scope with the same name.  For overloaded methods the scope is a class definition.  The difference between overloaded methods is the number of parameters - or for a language with explicit type definitions the parameter types.  A programming language is tasked with choosing between the different overloaded methods when they are invoked.  Invocation processes differ across programming languages. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Overriding ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Overriding methods occurs in object oriented programming when a subclass implements a method already defined in the superclass.  Everything about the method signature stays the same - including the number of parameters and the return type of the method.  When the method is called from a subclass instance, the overridden method is invoked instead of the superclass method. ",
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
                                        "value":" Languages such as JavaScript use a similar technique to overriding with prototypal inheritance. The JavaScript technique is called shadowing, in which an object lower on the prototype chain has a method that shares the same name as a method higher up the chain.  Methods lower on the prototype chain will block - or shadow - methods with the same signature higher on the chain. Shadowing results in methods lower on the chain being invoked. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
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
                "value":" Method overriding is used strictly with inheritance while overloading can be used in any class structure (in languages that support it).  For the rest of this post I want to look at method overloading in particular.  The final sentence in the overloading definition is the most important - \"Invocation processes differ across programming languages.\"  I will walk through how to perform method overloading in Java, Groovy, JavaScript, Python, Swift, and PHP. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Code"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Code",
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
                "value":" I set up a few classes in each language to help demonstrate method overloading.  I built classes representing a garden I often do work in at Tod’s Point in Old Greenwich, CT.  The garden is filled with flowers and animals often stop by to eat.  Three classes were built to depict the scene - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Animal",
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
                "value":"Plant",
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
                "value":"Garden",
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
            "language":"Groovy"
        },
        "value":"class Animal {\n\n  enum Species {\n    DEER, GROUNDHOG, RABBIT, RACCOON, SQUIRREL, CHIPMUNK, CROW, CARDINAL\n  }\n\n  String name\n  Species species\n  def description\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"class Plant {\n\n  enum Species {\n    HOSTA, DAYLILY, IRIS, HIBISCUS, PEONY\n  }\n\n  Species species\n  boolean inBloom\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"class Garden {\n\n  List<Animal> animals\n  List<Plant> plants\n  List<Object> randomObjects\n\n  def inGarden(...) {\n    ...\n  }\n}\n",
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
                "value":" Tod’s Points garden is filled with animals, plants, and potentially other random objects - which correspond to the instance variables ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"animals",
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
                "value":"plants",
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
                "value":"randomObjects",
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
                "value":"Garden",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The method of interest is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" located in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Garden",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class.  This is the method that we wish to overload. ",
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
                "value":"   Garden.java ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public final class Garden {\n\n  private List<Animal> animals;\n  private List<Plant> plants;\n  private List<Object> randomObjects;\n\n  static Garden of(Iterable<Animal> animals, Iterable<Plant> plants) {\n    return new Garden(animals, plants, List.of());\n  }\n\n  boolean inGarden(Animal animal) {\n    System.out.println(\"Checking if Animal in Garden\");\n    return animals.contains(animal);\n  }\n\n  boolean inGarden(Plant plant) {\n    System.out.println(\"Checking if Plant in Garden\");\n    return plants.contains(plant);\n  }\n\n  boolean inGarden(Object object) {\n    System.out.println(\"Checking if Random Object in Garden\");\n    return randomObjects.contains(object);\n  }\n}\n",
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
                "value":"   Main.java ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"...\n\nAnimal doe = Animal.ofName(\"doe\", Animal.Species.DEER);\n\nGarden garden = Garden.of(List.of(msGroundhog, mrGroundhog, doe, bunny), List.of(hosta, lily, iris));\n\n/* The compile time type of 'doe' is Animal, so inGarden(Animal) is invoked */\nassert garden.inGarden(doe);\n\nObject objectDoe = doe;\n\n/* The compile time type of 'objectDoe' is Object, so inGarden(Object) is invoked */\nassert !garden.inGarden(objectDoe);\n",
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
                "value":" Java is a statically typed language with explicit type declarations.  Overloading methods in Java is unique in the sense that it chooses which overloaded method to invoke at compile time",
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
                "value":" Picking overloaded methods at compile time has some interesting consequences.  Remember that variables in Java have both compile time and runtime types.  Often the compile time and runtime types of variables are the same, such as the variable definition ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Animal doe = Animal.ofName(\"doe\", Animal.Species.DEER);",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Both compile and runtime types are of the class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Animal",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The overloaded method that gets invoked is equally predictable - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(Animal animal)",
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
                "value":" Things get more complicated when the compile time and runtime types are different.  Different compile time and runtime types are possible in object oriented programming thanks to polymorphism. Take the variable definition ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object objectDoe = doe;",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The compile time type of the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"objectDoe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  However, recall that the type of the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"doe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Animal",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Two different types for one variable! ",
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
                "value":" So the question becomes which overloaded method gets invoked when calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"garden.inGarden(objectDoe)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(Animal animal)",
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
                "value":"inGarden(Object object)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?  Java actually picks ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(Object object)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", as it only considers the compile time type for overloaded methods. ",
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
                "value":" If you want to add to this confusion, overridden methods in Java are picked amongst according to the arguments runtime type",
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
                "value":".  This is important, since we want a method to be picked from the class furthest down the inheritance hierarchy.  You just have to remember that overloaded methods are picked by compile time types and overridden methods are picked by runtime types. ",
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
                "value":" Overloaded methods work similarly in C#, which you can view on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2018/07-jul/7-29-overloading/csharp"
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
                "value":"   Garden.groovy ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"class Garden {\n\n  List<Animal> animals\n  List<Plant> plants\n  List<Object> randomObjects\n\n  def inGarden(Animal animal) {\n    return animals.contains(animal)\n  }\n\n  def inGarden(Plant plant) {\n    return plants.contains(plant)\n  }\n\n  def inGarden(Object object) {\n    return randomObjects.contains(object)\n  }\n}\n",
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
                "value":"   Main.groovy ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"...\n\ndef doe = [\"doe\", deer, \"from the tip of his wand burst the silver doe\"] as Animal\n\ndef garden = new Garden(animals: [msGroundhog, mrGroundhog, doe, bunny], plants: [hosta, lily, iris])\n\nassert garden.inGarden(doe)\n\nObject objectDoe = doe\nassert garden.inGarden(objectDoe)\n",
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
                "value":" Unlike Java, Groovy will determine which overloaded method to call based on the runtime types of the method arguments.  This is because Groovy is dynamically typed - it enforces Java’s type system only at runtime.  Calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"garden.inGarden(objectDoe)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Groovy will invoke ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(Animal animal)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instead of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(Object object)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Without going into much detail on dynamic programming languages, this behavior in Groovy is thanks to multimethods. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Multimethods"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When two methods are differentiated only by their argument types, languages using multimethods look up which method to invoke based on the runtime types of the arguments passed to them",
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
                "value":". Multimethods (also called Multiple Dispatch",
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
                "value":") is in contrast with picking between methods based on static, compile time types. ",
                "children":null
            }
        ]
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
                "value":"   Garden.js ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"class Garden {\n\n  constructor(animals=[], plants=[], randomObjects=[]) {\n    this.animals = animals;\n    this.plants = plants;\n    this.randomObjects = randomObjects;\n  }\n\n  inGarden(item) {\n    if (arguments.length === 0) {\n      return false;\n    }\n\n    if (typeof item === \"object\") {\n\n      // Check for the object type using duck typing\n      if (item.hasOwnProperty(\"name\") && item.hasOwnProperty(\"species\")\n          && item.hasOwnProperty(\"description\")) {\n        return this.animals.includes(item);\n      } else if (item.hasOwnProperty(\"species\") && item.hasOwnProperty(\"inBloom\")) {\n        return this.plants.includes(item);\n      } else {\n        return this.randomObjects.includes(item);\n      }\n\n    } else {\n      return false;\n    }\n  }\n}\n",
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
                "value":"   Main.js ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"...\n\nconst doe = new Animal(\"doe\", Animal.Species.DEER);\n\nconst garden = new Garden([msGroundhog, mrGroundhog, doe, bunny], [hosta, lily, iris]);\n\n// Both checks on animals and plants will succeed\nassert(garden.inGarden(doe));\nassert(garden.inGarden(lily));\n\nassert(!garden.inGarden(new Animal(\"momma rabbit\", Animal.Species.RABBIT)));\n",
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
                "value":" Classical forms of method overloading like in the Java and Groovy code are not possible in JavaScript.  An object can’t have two method declarations of the same name.  Instead, you can set up one method that handles all the different argument scenarios",
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
                "value":".  That is exactly what I did in the code above. ",
                "children":null
            }
        ]
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
                "value":" Garden.py ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"class Garden(object):\n\n  def __init__(self, animals=list(), plants=list(), random_objects=list()):\n    self.animals = animals\n    self.plants = plants\n    self.random_objects = random_objects\n\n  def in_garden(self, item):\n    if item is not None:\n      if type(item) is Animal:\n        return item in self.animals\n      if type(item) is Plant:\n        return item in self.plants\n      else:\n        return item in self.random_objects\n    else:\n      return False\n",
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
                "value":" Main.py ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"...\n\ndoe = Animal(\"doe\", AnimalSpecies.DEER)\n\ngarden = Garden(animals=[msGroundhog, mrGroundhog, doe, bunny],\nplants=[hosta, lily, iris])\n\nassert garden.in_garden(doe)\nassert garden.in_garden(lily)\nassert not garden.in_garden(Animal(\"momma rabbit\", AnimalSpecies.RABBIT))\n",
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
                "value":" Method overloading in Python is just like JavaScript",
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
                "value":".  All the logic to handle different method arguments is handled in one method definition. ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"November 27th, 2018"
        },
        "value":null,
        "children":[
            {
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" There are a few things incorrect about the above Python code and explanation.  Function overloading is possible in Python outside of a class with the ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"@singledispatch",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" decorator.  ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"@singledispatch",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" creates a generic function that has different bodies depending on the argument types",
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
                        "value":".  I refactored the garden example above to use ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"@singledispatch",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  That code exists in the ",
                        "children":null
                    },
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://bit.ly/2PaGVZK"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"garden2.py",
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
                            "href":"https://bit.ly/2DNzPrP"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"main2.py",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" files on GitHub. ",
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
                        "value":" The second problem is in the ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"Garden",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" constructor.  In Python default arguments for should never be mutable",
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
                        "value":".  The problem is default arguments are bound to the function object when the module is loaded",
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
                        "value":".  After that, if the value is mutated, it affects all further invocations of the function.  This exploit is shown in ",
                        "children":null
                    },
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://bit.ly/2KF93Ua"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"mainI.py",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  I fixed the ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"Garden",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" class in ",
                        "children":null
                    },
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://bit.ly/2KDWS9T"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"GardenII.py",
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
                            "href":"https://bit.ly/2SiQlV0"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"mainII.py",
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
        ]
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
                "value":"   Garden.swift ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"struct Garden {\n\n  let animals: [Animal]\n  let plants: [Plant]\n  let random_objects: [Any]?\n\n  func inGarden(_ animal: Animal) -> Bool {\n    return self.animals.contains { $0 == animal }\n  }\n\n  func inGarden(_ plant: Plant) -> Bool {\n    return self.plants.contains { $0 == plant }\n  }\n\n  func inGarden(_ object: Any) -> Bool {\n    let exists: Bool? = self.random_objects?.contains { $0 as? AnyObject === object as? AnyObject }\n    return exists ?? false\n  }\n}\n",
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
                "value":"   Main.swift ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"...\n\nlet doe = Animal(name: \"doe\", species: AnimalSpecies.Deer)\n\nlet garden = Garden(withAnimals: [msGroundhog, mrGroundhog, doe, bunny],\n                    plants: [hosta, lily, iris], andObjects: nil)\n\nassert(garden.inGarden(doe))\n\nlet otherDoe: Any = doe\nassert(!garden.inGarden(otherDoe))\n\nassert(garden.inGarden(lily))\nassert(!garden.inGarden(Animal(name: \"momma rabbit\", species: AnimalSpecies.Rabbit)))\nassert(!garden.inGarden(\"Squirrel\"))\n",
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
                "value":" Swift is interesting because it is a statically typed language with optional type annotations that can be applied to variables",
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
                "value":".  The most generic type in Swift is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Any",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" - meaning an instance of any type.  If you define a variable with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Any",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as the type annotation such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"let otherDoe: Any = doe",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the generic overloaded method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(_ object: Any)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will be called instead of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"inGarden(_ animal: Animal)",
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
                "value":"   Garden.php ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"class Garden\n{\n\n  private $animals;\n  private $plants;\n  private $randomObjects;\n\n  public function inGarden($item) {\n    if ($item != null) {\n\n      if ($item instanceof Animal) {\n        return in_array($item, $this->animals);\n      } else if ($item instanceof Plant) {\n        return in_array($item, $this->plants);\n      } else {\n        return in_array($item, $this->randomObjects);\n      }\n    } else {\n      return false;\n    }\n  }\n}\n",
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
                "value":"   Main.php ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"...\n\n$doe = new Animal(\"doe\", AnimalSpecies::DEER);\n\n$garden = new Garden([$msGroundhog, $mrGroundhog, $doe, $bunny], [$hosta, $lily, $iris]);\n\nassert($garden->inGarden($doe));\nassert($garden->inGarden($lily));\nassert(!$garden->inGarden(new Animal(\"momma rabbit\", AnimalSpecies::RABBIT)));\n",
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
                "value":" Just like JavaScript and Python, PHP does not allow for method overloading - the logic for handling different arguments must be handled in the function body. ",
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
                "value":" I had a blast playing around with these different languages I’ve used over the years and exploring them on a more technical level.  Looking at the code makes me realize how simple object oriented concepts like method overloading can be implemented in many different ways.  If you want to look at the code in more detail it is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2018/07-jul/7-29-overloading"
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

postName = "jul-29-2018-overloading";
postDate = new Date('2018-07-29T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Method Overloading Across Languages",
    description: `When working with the object oriented paradigm methods often need to be 
        overridden or overloaded.  These similar concepts are often confused by new developers`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "Method Overloading"
        },
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
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
        },
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "PHP",
            picture: "https://asset.jarombek.com/logos/php.svg",
            color: "php"
        },
        {
            name: "Object Oriented Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Joshua Bloch, ",
            endName: ", 3rd ed (Boston, MA: Pearson, 2018), 238",
            linkName: "Effective Java",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "",
            endName: ", 238-239",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"Multiple dispatch\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Multiple_dispatch",
            link: "https://en.wikipedia.org/wiki/Multiple_dispatch"
        },
        {
            startName: "\"How to overload functions in javascript?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/10855939",
            link: "https://stackoverflow.com/a/10855939"
        },
        {
            startName: "\"Method overloading\", ",
            endName: "",
            linkName: "https://pythonspot.com/method-overloading/",
            link: "https://pythonspot.com/method-overloading/"
        },
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 210",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 236-237",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 238",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "Matthew Mathias & John Gallagher, ",
            endName: " (Atlanta, GA: Big Nerd Ranch, 2016), 12",
            linkName: "Swift Programming: The Big Nerd Ranch Guide",
            link: "https://www.bignerdranch.com/books/swift-programming/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});