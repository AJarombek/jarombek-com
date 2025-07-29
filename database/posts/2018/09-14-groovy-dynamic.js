/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/10/2018
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
                "value":" In the past, I always associated dynamic programming languages to those with dynamic typing. In my discovery post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Groovy's type system",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I learned that dynamic typing and dynamic programming are two completely different concepts.  Dynamic typing specifies a language that enforces types at runtime.  Dynamic programming languages allow attributes of a program to change at runtime that are typically kept static.  This post is my introduction to the features of a dynamic programming language and their use cases in Groovy applications. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Groovy as a Dynamic Language"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Groovy as a Dynamic Language",
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
                "value":" Groovy builds upon Java which is statically typed and does not have dynamic language features.  While Groovy does use Java's type system, it enforces types at runtime only, making Groovy dynamically typed.  Groovy also has dynamic language capabilities that Java does not. ",
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
                "value":" In the past, I always associated dynamic programming languages to those with dynamic typing. In my discovery post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Groovy's type system",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I learned that dynamic typing and dynamic programming are two completely different concepts.  Dynamic typing specifies a language that enforces types at runtime.  Dynamic programming languages allow attributes of a program to change at runtime that are typically kept static.  This post is my introduction to the features of a dynamic programming language and their use cases in Groovy applications. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Groovy as a Dynamic Language"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Groovy as a Dynamic Language",
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
                "value":" Groovy builds upon Java which is statically typed and does not have dynamic language features.  While Groovy does use Java's type system, it enforces types at runtime only, making Groovy dynamically typed.  Groovy also has dynamic language capabilities that Java does not. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Dynamic Vs. Static Programming Language"
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
                                "value":" Dynamic Programming Language ",
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
                                        "value":" Dynamic languages enable certain attributes of a program to be changed at runtime.  In an object oriented language, these attributes include class fields and methods",
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
                                        "value":".  For example, new fields can be added to the ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"String",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" class at runtime or an existing methods behavior can be altered at runtime.  These manipulations don't effect the original class definition and can be applied per instance or across all instances",
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
                                        "value":" Another powerful feature of a dynamic programming language is dynamic method dispatch",
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
                                        "value":". This allows methods that don't exist to be invoked.  As a developer you can implement certain logic that will occur when a method is invoked but not found. ",
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
                                "value":" Static Programming Language ",
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
                                        "value":" Static languages disallow certain attributes of a program from changing at runtime that dynamic languages are flexible with.  In the object oriented paradigm, a classes fields and methods are static and their definitions can't be changed at runtime (they are finalized at compile time).  For example, the number of methods and fields on ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"String",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" can't change once a program compiles.  If a method is invoked that does not exist, the program will not even compile. ",
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
                "value":" One of the challenges Groovy faced was allowing dynamic features for code that is compiled to Java byte code.  Java class definitions are immutable once compiled to byte code, so Groovy had to implement a layer of indirection to get dynamic language features to work",
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
                "value":".  This layer of indirection occurs between the method or field lookup and the method invocation/field access. ",
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
                "value":" Groovy calls the layer of indirection the Meta Object Protocol (MOP).  One piece of the MOP is funneling method invocations and field accesses through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MetaClass",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MetaClass",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" holds all relevant information about a class, including the methods and fields in the class definition. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"MetaClass mc = List.metaClass\n\n// The number of methods in the List object\nassert mc.methods.size() == 9\n\n// The number of fields in the List object\nassert mc.properties.size() == 1\n",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MetaClass",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object is used to invoke methods on the object it describes.  If you are familiar with Java, the technique will remind you of ",
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
                        "value":"Java's Reflection API",
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
            "language":"Groovy"
        },
        "value":"assert mc.invokeMethod([1,2,3], \"toListString\", new Object[0]) == \"[1, 2, 3]\"\nassert mc.invokeMethod([1,2,3], \"get\", [2]) == 3\n",
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
                "value":" Whenever you invoke a method on a Groovy object, behind the scenes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"invokeMethod()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is called on the Groovy object's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MetaClass",
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
                "value":" Another piece of the MOP is handling calls for methods that don't exist.  Groovy has special hook methods for the MOP to invoke whenever a non-existent method is called.  As developers we can overwrite hook methods and add our own logic! ",
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
                "value":" The hook method that the MOP uses when a method is missing is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"methodMissing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Similarly, the hook method for missing properties is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"propertyMissing()",
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
                "value":"methodMissing()",
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
                "value":"propertyMissing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are implemented in a class definition.  Below is a sample class representing my programming language use in the past few weeks.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageUse",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"methodMissing()",
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
                "value":"propertyMissing()",
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
            "language":"Groovy"
        },
        "value":"class LanguageUse {\n\n  static def lastMonth = [\n    \"javascript\": 1656,\n    \"html\": 658,\n    \"groovy\": 484,\n    \"sass\": 387,\n    \"hcl\": 366,\n    \"haskell\": 138,\n    \"bash\": 90,\n    \"java\": 30,\n    \"swift\": 30,\n    \"velocity\": 29,\n    \"json\": 8\n  ]\n\n  /**\n  * If the method call does not match any on the LanguageUse class, this method is invoked.  In that case,\n  * check to see if the method name (minus the 'get' prefix) matches a key in the {@code lastMonth} map.  If so,\n  * return the value corresponding to the key.\n  * @param name - the name of the invoked method\n  * @param args - arguments passed to the invoked method\n  * @return A value in the {@code lastMonth} map matching the method name (minus the 'get' prefix)\n  */\n  def methodMissing(String name, Object args) {\n    def language = name - \"get\"\n    return lastMonth[language.toLowerCase()]\n  }\n\n  /**\n  * If a property accessed on an instance of {@code LanguageUse} does not exist, this method is invoked.\n  * In that case, look for a key in the {@code lastMonth} map that matches the property name.\n  * @param name - the name of the property accessed\n  * @return A value in the {@code lastMonth} map matching the property name\n  */\n  def propertyMissing(String name) {\n    return lastMonth[name]\n  }\n}\n",
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
                "value":"LanguageUse",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"methodMissing()",
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
                "value":"propertyMissing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to access values from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lastMonth",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" map.  Now I can make method calls and access fields without any corresponding method or field definitions! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def languageUse = new LanguageUse()\n\n// Call methods that go through the MOP and methodMissing()\nassert languageUse.getJavaScript() == 1656\nassert languageUse.getGroovy() == 484\nassert languageUse.getJava() == 30\n\n// Access properties that go through the MOP and propertyMissing()\nassert languageUse.javascript == 1656\nassert languageUse.groovy == 484\nassert languageUse.java == 30\n",
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
                "value":" MOP hook methods enable APIs in a dynamic programming language to be extremely flexible.  Even if the encapsulated ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lastMonth",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" map mutates, the new key->value entries are still accessible through the dynamic  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"methodMissing()",
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
                "value":"propertyMissing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" methods! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Dynamic Programming in a Real-World Application?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Dynamic Programming in a Real-World Application?",
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
                "value":" The hook methods just shown have a lot of potential in a production application.  In ",
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
                        "value":" Groovy In Action",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I saw another great use of dynamic programming that could help improve one of my existing applications.  I have a web, iOS, and Android application called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek?utf8=%E2%9C%93&tab=repositories&q=Saints-XCTF&type=&language="
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which my college cross country and track & field teams use for exercise logging. Groovy In Action presents sample code that extends the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" metaclass, adding additional functionality to convert between different metrics",
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
                "value":". I decided to build upon this sample code in a way that would fit the needs of SaintsXCTF.  The following code dynamically adds new methods to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class that assists conversions between miles, kilometers, and meters. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"Number.metaClass {\n  getMiles = { delegate }\n  getKilometers = { delegate / 1.60934.miles }\n  getMeters = { delegate / 1000.kilometers }\n\n  getToMiles = { delegate }\n  getToKilometers = { delegate * 1.60934.toMiles }\n  getToMeters = { delegate * 1000.toKilometers }\n}\n\n// Distance I ran yesterday\ndef run = 10.6.miles\nassert run.toKilometers.round(2) == 17.06\nassert run.toMeters.round(2) == 17059.00\n\n// My favorite track event\ndef run5k = 5.kilometers\nassert run5k.toMiles.round(2) == 3.11\nassert run5k.toMeters.round(2) == 5000\n",
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
                "value":" This code creates six getter methods, each of which correspond to a field on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Each method defines what happens when its corresponding field is accessed. ",
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
                "value":" If you read my post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-16-2018-groovy-closures"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Groovy closures",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" you will remember that each closure has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"delegate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"delegate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines how outer scope variables are resolved in a closure.  By default, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"delegate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is set to the owner of a closure, which is the closures lexical scope.  In the code above, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"delegate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will resolve to the instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Therefore, accessing the field ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"5.kilometers",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" results in the calculation ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"5 / 1.60934.miles",
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
                "value":" Manipulating classes in a languages standard library to accommodate an application is the greatest power of dynamic programming languages.  It removes restrictions that language developers set for the core APIs! ",
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
                "value":" While I still haven't used any dynamic programming language techniques in any of my production applications, my research for this post has opened my eyes to their potential.  You can find all the code for this discovery post on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/\nmaster/2018/09-Sep/9-14-groovy-dynamic"
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

postName = "sep-14-2018-groovy-dynamic";
postDate = new Date('2018-09-14T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Groovy's Dynamic Language Features",
    description: `This post is my introduction to the features of a dynamic
        programming language and their use cases in Groovy applications.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "Dynamic Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Dierk König & Paul King, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2015), 202",
            linkName: "Groovy In Action",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "",
            endName: ", 207",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "",
            endName: ", 51",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "",
            endName: ", 202-203",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "",
            endName: ", 227",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});