/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/16/2018
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
                "value":" The thing that really intrigued me during my Groovy ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njul-2-2018-groovy-basics-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njul-4-2018-groovy-basics-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"impressions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" posts were closures.  Closures are Groovy objects with similarities to Java lambda functions and JavaScript arrow functions (among others).  While enclosed in an object, closures behave like a method which can be invoked and passed arguments. Closures can also be assigned to variables and passed as arguments (they are objects after all). In this post I will look at the basic behavior of closures and compare them to similar constructs in other languages (Java, JavaScript, & Swift). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Groovy Closure?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Groovy Closure?",
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
                "value":" Speaking about closures often causes confusion since its definition varies across languages.  For example, in JavaScript a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-9-2017-js-closure-modules"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"closure ",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" describes the ability of a function to remember its lexical scope (the scope in which it was defined in code) even when it’s invoked outside its lexical scope.  JavaScript’s closure definition is different than Groovy’s, although in Groovy closures remember their lexical scope as well",
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
                "value":".  To reduce confusion ",
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
                        "value":"birthday context",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the Groovy idiom for a JavaScript closure. ",
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
                "value":" The thing that really intrigued me during my Groovy ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njul-2-2018-groovy-basics-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njul-4-2018-groovy-basics-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"impressions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" posts were closures.  Closures are Groovy objects with similarities to Java lambda functions and JavaScript arrow functions (among others).  While enclosed in an object, closures behave like a method which can be invoked and passed arguments. Closures can also be assigned to variables and passed as arguments (they are objects after all). In this post I will look at the basic behavior of closures and compare them to similar constructs in other languages (Java, JavaScript, & Swift). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Groovy Closure?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Groovy Closure?",
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
                "value":" Speaking about closures often causes confusion since its definition varies across languages.  For example, in JavaScript a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-9-2017-js-closure-modules"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"closure ",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" describes the ability of a function to remember its lexical scope (the scope in which it was defined in code) even when it’s invoked outside its lexical scope.  JavaScript’s closure definition is different than Groovy’s, although in Groovy closures remember their lexical scope as well",
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
                "value":".  To reduce confusion ",
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
                        "value":"birthday context",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the Groovy idiom for a JavaScript closure. ",
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
                "value":" Closures in Groovy are objects containing code to be executed.  Their syntax starts with a curly brace and ends with a curly brace (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{ … }",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  Here is a very basic closure that prints out a list: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def list = [\"Tod's Point\", \"Waveny Park\", \"GHS\", \"Mianus River Park\", \"Rockefeller Park\"]\n\nlist.each { println it }\n",
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
                "value":"each()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is invoked on variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"list",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", looping through each list element. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"each()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes in one argument - a closure object which also has a single argument.  That single argument represents a list element.  Thanks to some shortened Groovy syntax, the parenthesis around the closure argument to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"each()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are omitted. ",
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
                "value":" You may be wondering about the seemingly magical ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"it",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable that is never explicitly defined.  If a closure takes in a single parameter, it does not need to be explicitly declared in the code.  Instead the default ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"it",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable is used to access the closure’s argument.  If you want to rewrite this closure with an explicit argument variable, you could write ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{ item -> println item }",
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
                "value":" When you see the closure ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{ … }",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax in Groovy code remember that this only defines the closure.  If you want to run the code inside the closure, it must be invoked later on.  Think of a closure definition like a method definition - it is a blueprint of what logic will occur when executed.  Closures are invoked like methods with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"closureName()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"int number = 1\n\ndef timesTen = { number *= 10 }\n\nassert number == 1\ntimesTen()\nassert number == 10\n",
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
                "value":" Look at the assertions before and after the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"timesTen",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" closure is invoked.  After the closure is defined the value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is still ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" because the code in the closure hasn't executed yet.  Once the closure is invoked, the value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" jumps to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"10",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as expected. ",
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
                "value":" It may not come as a surprise that closures can manipulate variables in the scope they are defined (lexical scope).  Closures in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/08-Aug/8-16-groovy-closures/swift/Closures.swift"
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
                "el":"#text",
                "attributes":null,
                "value":" and arrow functions in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/\n08-Aug/8-16-groovy-closures/javascript/arrow.js"
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
                "el":"#text",
                "attributes":null,
                "value":" can do the same thing.  However, since Groovy is a JVM language that works closely with Java you may have expected closures to act similarly to Java lambda functions. ",
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
                "value":" Lambda functions can access variables from their lexical scope, but can not manipulate them.  All variables used inside a lambda that are defined in the functions outer scope must be effectively final (meaning they can either be explicitly declared final with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"final",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword or be ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-23-2018-javascript-immutable"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"implicitly immutable",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"). If this rule is broken Java will not compile. ",
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
                "value":" For example this Java code will not compile: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"int listTotal = 0;\nlist.forEach(item -> {\n  listTotal += item;\n});\n",
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
                "value":" In Java I always felt this approach made sense, since lambda functions were introduced to facilitate functional programming which handles immutable data.  Groovy closures remove this restriction, which you can argue either gives developers more flexibility or enables development of fragile code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Birthday Context & Delegation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Birthday Context & Delegation",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Birthday Context"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A closures ability to remember the lexical scope in which it was defined, even when it is invoked in a different scope.  Closures hold a reference to all the items defined in their lexical scope throughout their lifetime. ",
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
                "value":" To demonstrate a closures birthday context here is a simple closure that prints out an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"age",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"class BirthdayContext {\n  def age = 0\n  def closure = { println age }\n}\n\ndef age = 23\ndef birthObject = new BirthdayContext()\n\nassert birthObject.closure.owner == birthObject\nassert birthObject.closure.thisObject == birthObject\nassert birthObject.closure.delegate == birthObject\n\n// Prints 0 for age instead of 23\nbirthObject.closure()\n",
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
                "value":" Note that the birthday context of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"closure",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"BirthdayContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since the birthday context is maintained by the closure throughout its lifetime, the only ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"age",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable it is aware of exists in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"BirthdayContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", equaling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0",
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
                "value":" I also accessed three different properties on the closure (remember closures are simply objects). The first two properties are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"owner",
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
                "value":"thisObject",
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
                "value":"thisObject",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is what the closure currently uses as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (which may change over the lifetime of the closure) and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"owner",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" always refers to the direct enclosing class or closure in which the closure was defined",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"2,3",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These two properties aren't very important to this posts discussion, just note that their values don’t change throughout the following examples. ",
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
                "value":"delegate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property is where things get very interesting.  Groovy allows the programmer to determine how outer scope variables are resolved inside a closure",
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
                "value":".  By default closures will resolve variables from the closures lexical scope (the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"owner",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property).  However, a user can create an object and assign it to the ",
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
                "value":" property to change this behavior",
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
                "value":" Changing the ",
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
                "value":" property will not yet have an effect on how variables are resolved (the code below will still print ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"class BirthdayContext {\n  def age = 0\n  def closure = { println age }\n}\n\ndef birthObject = new BirthdayContext()\n\nclass OtherContext {\n  def age = 21\n}\n\ndef otherObject = new OtherContext()\n\nbirthObject.closure.delegate = otherObject\n\nassert birthObject.closure.owner == birthObject\nassert birthObject.closure.thisObject == birthObject\nassert birthObject.closure.delegate == otherObject\n\n// Will print 0 for age instead of 21\nbirthObject.closure()\n",
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
                "value":" The reason ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"age",
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
                "value":"OtherContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was not used is because of the closures delegation strategy.  Delegation strategies determine how closures resolve variables.  By default the delegation strategy is set to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"OWNER_FIRST",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", meaning a variable will be searched on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"owner",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property before it checks the ",
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
                "value":" property.  If we change the delegation strategy to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DELEGATE_FIRST",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", invoking the closure will finally print ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"21",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (not that I really want to relive being 21). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"birthObject.closure.resolveStrategy = Closure.DELEGATE_FIRST\n\n// Will now print 21 instead of 0\nbirthObject.closure()\n",
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
                "value":" Delegation strategies further differentiate Groovy closures from Java lambda functions.  In Java variables in a lambda function will always access free variables from their lexical scope. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Free Variable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A variable that is not local to the current scope",
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
                "value":".  In the case of a method or function, a free variable is also not one of the function arguments.  An example of a free variable would be a classes instance variable accessed from inside a method. ",
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
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-11-2017-js-this"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"closest equivalent",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to Groovy’s delegation strategy I can think of is the ability to explicitly define ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a JavaScript function invocation with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"call()",
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
                "value":"apply()",
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
                "value":"bind()",
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
            "title":"Conclusions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Conclusion",
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
                "value":" I am always fascinated to compare features in a language I am learning to those in languages already in my arsenal.  My look at Groovy closures is not yet complete - in my next post I will look at using closures in functional programming. ",
                "children":null
            }
        ]
    }
];

postName = "aug-16-2018-groovy-closures";
postDate = new Date('2018-08-16T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Groovy Closures vs. Lambda & Arrow Functions",
    description: `The thing that really intrigued me during my Groovy first impressions posts was 
        closures.  Closures are Groovy objects with similarities to Java lambda functions and 
        JavaScript arrow functions (among others).`,
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
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "Lambda Functions"
        },
        {
            name: "Closures"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Dierk König & Paul King, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2015), 135",
            linkName: "Groovy In Action",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "",
            endName: ", 137",
            linkName: "König.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "\"Owner of a closure\", ",
            endName: "",
            linkName: "http://docs.groovy-lang.org/next/html/documentation/core-closures.html#_owner_of_a_closure",
            link: "http://docs.groovy-lang.org/next/html/documentation/core-closures.html#_owner_of_a_closure"
        },
        {
            startName: "",
            endName: ", 136",
            linkName: "König.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "\"Delegate of a closure\", ",
            endName: "",
            linkName: "http://docs.groovy-lang.org/next/html/documentation/core-closures.html#_delegate_of_a_closure",
            link: "http://docs.groovy-lang.org/next/html/documentation/core-closures.html#_delegate_of_a_closure"
        },
        {
            startName: "\"Free variables and bound variables\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Free_variables_and_bound_variables",
            link: "https://en.wikipedia.org/wiki/Free_variables_and_bound_variables"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});