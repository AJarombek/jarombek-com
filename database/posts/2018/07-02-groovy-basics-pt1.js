/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/2/2018
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
                "value":" Starting this summer I'll be picking a programming language to look at in-depth every season.  The language may be one I want more knowledge on or it may be a completely new language I've never explored.  For this summer, the language of choice is Groovy.  Groovy is a programming language run on the JVM that can be used alongside Java code",
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
                "value":".  It supports static and dynamic typing, along with a host of features in hopes to shorten the verbose Java syntax.  Groovy is used in a number of different projects such as Grails, Gradle, and Jenkins. ",
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
                "value":" One of the main reasons I want to look at Groovy is my work on a project involving Jenkins at work.  I also always had an interest in the language as an alternative to Java.  This post looks at some basic features of Groovy that caught my eye after an hour or two of exploring.  This post and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-4-2018-groovy-basics-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Part II",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" serve as my first impressions of Groovy.  After these two posts I'll dig deeper into Groovy features and use it in Jenkins programs.  Now its time to start exploring! ",
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
                "value":" Starting this summer I'll be picking a programming language to look at in-depth every season.  The language may be one I want more knowledge on or it may be a completely new language I've never explored.  For this summer, the language of choice is Groovy.  Groovy is a programming language run on the JVM that can be used alongside Java code",
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
                "value":".  It supports static and dynamic typing, along with a host of features in hopes to shorten the verbose Java syntax.  Groovy is used in a number of different projects such as Grails, Gradle, and Jenkins. ",
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
                "value":" One of the main reasons I want to look at Groovy is my work on a project involving Jenkins at work.  I also always had an interest in the language as an alternative to Java.  This post looks at some basic features of Groovy that caught my eye after an hour or two of exploring.  This post and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-4-2018-groovy-basics-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Part II",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" serve as my first impressions of Groovy.  After these two posts I'll dig deeper into Groovy features and use it in Jenkins programs.  Now its time to start exploring! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Some Groovy Code"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Some Groovy Code",
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
                "value":" The first thing you will notice about Groovy is its shortened syntax and dynamic typing.  No semicolons are needed after statements, and in some cases parenthesis around method invocations can be omitted.  The following code displays both dynamic typing and methods being called without parenthesis: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def hello = \"Hello\"\n\n// Groovy allows you to omit parenthesis for method calls if it has at least one argument\nprintln hello\n\n// Dynamic typing at work - hello is now a list\nhello = [\"Hello\", \"World\"]\n\n// String templating in Groovy\nprintln \"${hello[0]} ${hello[1]}\"\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Hello\nHello World\n",
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
                "value":" No parenthesis are needed for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"println()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method invocation.  Also the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"hello",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was defined with the keyword ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In Groovy ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is simply a Java ",
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
                "value":", so anything that is an object can also be defined with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"def",
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
                "value":" In the third line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"hello",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is redefined as a list.  Notice how concise the syntax is for creating a list in Groovy (although Java 9 did make list creation much shorter with the static factory method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List.of()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  The last line shows off a language feature I miss a lot when coding in Java. Groovy supports string templating and even allows for simpler syntax than the line shown here (you can omit the outer curly braces in most cases). ",
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
                "value":" Now that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"hello",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I'll demonstrate some cool operations Groovy adds for list manipulation.  One of the most interesting is the spread-dot operator (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*.",
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
        "value":"def helloLengths = hello*.length()\n\nprintln helloLengths\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"[5, 5]\n",
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
                "value":" The spread dot operator performs an operation on every element of a list, creating a brand new list in the process",
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
                "value":".  The code above creates a new list where each element is the length of the corresponding element from the old list.  With this operator keeping data structures immutable is extremely easy!  I am really excited to use this operator in my own code. ",
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
                "value":" Groovy also supplies an easy way to iterate over collections with the ",
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
                "value":" method. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def list = [1, 2, 3, 4, 5]\n\nlist.each {\n  println it * it\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"1\n4\n9\n16\n25\n",
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
                "value":" method takes one argument which at first glance looks kinda funky.  The argument passed to ",
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
                "value":" is called a closure.  ",
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
                        "value":"Closures in Groovy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are not to be confused with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/nov-9-2017-js-closure-modules"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"closures in JavaScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or similar languages.  Groovy's closures are similar to those in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-14-2017-sorting-lists"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Swift",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A closure in Groovy is an anonymous block of code that can take in arguments and return a value",
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
                "value":".  The syntax of Groovy closures may have you believe they are simply lambda functions from Java.  While the object type of a Java lambda expression is an object that implements a functional interface, in Groovy closures are an object of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Closure",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"5, 6",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This allows Groovy closures, like Java lambda functions and Swift closures, to be passed as arguments to methods.  The syntax for closures is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{ [ params -> ] statements}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", where the parameters can be explicitly or implicitly declared (an implicit parameter resolves to the ",
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
                "value":" variable)",
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
                "value":".  This is where the ",
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
                "value":" variable in the closure passed to ",
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
                "value":" comes from. ",
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
                "value":" Closures can also be bound to a variable.  In the following example, a closure is assigned  to a variable of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Closure",
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
        "value":"Closure squared = { println it * it }\n\n// These parenthesis can be omitted\nlist.each(squared)\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"1\n4\n9\n16\n25\n",
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
                "value":" This awesome ",
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
                "value":" method can even be called on a data structure declaration! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"[\"Joe\", \"Tom\", \"Ben\"].each { name ->\n  // Brackets are not mandatory with string templating\n  println \"A Great Friend: $name\"\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"A Great Friend: Joe\nA Great Friend: Tom\nA Great Friend: Ben\n",
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
                "value":" Groovy exposes a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"collect()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method for collections which transforms each entry in the collection and produces a new list with the transformed values",
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
                "value":". The transformation is passed to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"collect()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the form of a closure.  Like the spread-dot operator, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"collect()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method does not mutate the original collection, enabling immutable data structures. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def squaredList = list.collect { item -> item * item }\nprintln squaredList\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"[1, 4, 9, 16, 25]\n",
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
                "value":" Groovy even has a really nice shorthand operator for appending an item to a collection (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<<",
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
        "value":"// Long version and Groovy shorthand for appending to a data structure\nsquaredList.add(36)\nsquaredList << 49\nsquaredList << 64\nprintln squaredList\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"[1, 4, 9, 16, 25, 36, 49, 64]\n",
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
                "value":" Along with string templating, I really miss the ability to create multi-line strings in Java. Groovy is nice enough to give us that ability.  You can still use all the Java ",
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
                "value":" methods as well - such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"trim()",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def paragraph = '''\nHello everyone, this is my first in depth look at the\nGroovy programming language.  I have written a little\nbit of Groovy in the past but never a significant amount.\n'''\n\nprintln paragraph.trim()\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Hello everyone, this is my first in depth look at the\nGroovy programming language.  I have written a little\nbit of Groovy in the past but never a significant amount.\n",
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
                "value":" I already showed off how awesome the short ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax is in Groovy.  The syntax for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Map",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" data structure is equally short and sweet! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def map = [\n  first: \"Andrew\",\n  last: \"Jarombek\",\n  age: 23,\n  country: \"United States\",\n  state: \"Connecticut\",\n  job: \"Software Developer\"\n]\n\n// Groovy maps are actually just a Java LinkedHashMap\nLinkedHashMap otherMap = [\n  first: \"Joe\",\n  last: \"Smith\"\n]\n\n// Easily append to a map as well\notherMap << [age:22, country: \"United States\"]\n\nprintln otherMap\n\n// Print out each entry in the map\nmap.each { entry ->\n  println entry\n}\n\n// Accessing elements in a map is easy, and can be done in many different ways\ndef state = 'state'\nprintln \"${map['first']} ${map['last']} is ${map.age} years old and lives in ${map[state]}\"\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"[first:Joe, last:Smith, age:22, country:United States]\n\nfirst=Andrew\nlast=Jarombek\nage=23\ncountry=United States\nstate=Connecticut\njob=Software Developer\n\nAndrew Jarombek is 23 years old and lives in Connecticut\n",
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
                "value":" The following code shows off Groovy's concise ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loops.  Groovy also allows for number ranges both in loops and during data structure creation",
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
        "value":"def newList = []\n\n// Looping through ten times\nfor (i in 0..9) {\n  newList.add i + 1\n}\n\n// Loop through each item in the list\nfor (item in newList) {\n  println item * 10\n}\n\n// You can also make an array easily\ndef array = (1..10).toArray()\nprintln array\n\n// Another easy loop is the times loop\n5.times { i ->\n  println \"Iteration of the loop: $i\"\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"10\n20\n30\n40\n50\n60\n70\n80\n90\n100\n\n[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nIteration of the loop: 0\nIteration of the loop: 1\nIteration of the loop: 2\nIteration of the loop: 3\nIteration of the loop: 4\n",
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
                "value":" Groovy introduces the spaceship operator, declared with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<=>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax.  Spaceship operators are shorthand for Java's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompareTo()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Comparable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface",
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
                "value":".  I discussed the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Comparable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface briefly in my discussion of building a ",
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
                        "value":"Java API with Generics",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Basically comparison is used to define a logical ordering of objects, so the spaceship operator compares objects based on an ordering written in the class definition.  Even better the spaceship operator performs these comparisons in a null-safe manner. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"// The spaceship operator will return 1 when the first value is larger\nprintln 6 <=> 5\n\n// Now it returns -1 when it is the other way around\nprintln 6 <=> 10\n\n// And it returns 0 if they are equal\nprintln 1 <=> 1\n\n// It is also null safe\nprintln \"Hello\" <=> null\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"1\n-1\n0\n1\n",
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
                "value":" The final really cool operator I want to discuss in Groovy is the elvis operator, which is declared with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"?:",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax.  Elvis operators are shorthand for a full ternary operator which checks if a value is truthy in the condition block ",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"11",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If its truthy, that value is returned - otherwise a default value is returned. Basically you can use the elvis operator as a check if a variable is false and assign it a default value if that is the case. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def name = \"Andrew\"\ndef result = name ?: \"No Name was supplied!\"\nprintln result\n\n// We can then use the elvis operator in a closure\ndef nameNotNull = { n -> n ?: \"No Name was supplied!\" }\nprintln nameNotNull(\"Andrew\")\nprintln nameNotNull(null)\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Andrew\n\nAndrew\nNo Name was supplied!\n",
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
                "value":" These cool Groovy features are just the tip of the iceberg for my exploration of the language.  My next post on Groovy basics will look at features surrounding the languages object oriented paradigm. You can find all the code from this discovery and more up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/07-jul/7-2-groovy-basics-pt1/Test.groovy"
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

postName = "jul-2-2018-groovy-basics-pt1";
postDate = new Date('2018-07-02T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Groovy Basics Part I: Concise Syntax",
    description: `This post will look at some of the basic syntax and features of Groovy that
      really caught my eye after an hour or two of exploring.`,
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
            name: "Java 8",
            picture: "https://asset.jarombek.com/logos/java8.png",
            color: "java"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Apache Groovy\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Apache_Groovy",
            link: "https://en.wikipedia.org/wiki/Apache_Groovy"
        },
        {
            startName: "\"Def and type\", ",
            endName: "",
            linkName: "http://groovy-lang.org/style-guide.html#_def_and_type",
            link: "http://groovy-lang.org/style-guide.html#_def_and_type"
        },
        {
            startName: "\"Groovy Goodness: The Spread-Dot Operator\", ",
            endName: "",
            linkName: "http://mrhaki.blogspot.com/2009/08/groovy-goodness-spread-dot-operator.html",
            link: "http://mrhaki.blogspot.com/2009/08/groovy-goodness-spread-dot-operator.html"
        },
        {
            startName: "\"Closures\", ",
            endName: "",
            linkName: "http://groovy-lang.org/closures.html",
            link: "http://groovy-lang.org/closures.html"
        },
        {
            startName: "\"Are lambda expressions objects?\", ",
            endName: "",
            linkName: "http://www.lambdafaq.org/are-lambda-expressions-objects/",
            link: "http://www.lambdafaq.org/are-lambda-expressions-objects/"
        },
        {
            startName: "\"Delegation strategy\", ",
            endName: "",
            linkName: "http://groovy-lang.org/closures.html#_delegation_strategy",
            link: "http://groovy-lang.org/closures.html#_delegation_strategy"
        },
        {
            startName: "\"Syntax\", ",
            endName: "",
            linkName: "http://groovy-lang.org/closures.html#_syntax",
            link: "http://groovy-lang.org/closures.html#_syntax"
        },
        {
            startName: "\"public List collect()\", ",
            endName: "",
            linkName: "http://docs.groovy-lang.org/2.4.3/html/groovy-jdk/java/util/Collection.html#collect()",
            link: "http://docs.groovy-lang.org/2.4.3/html/groovy-jdk/java/util/Collection.html#collect()"
        },
        {
            startName: "\"Grails Tutorial for Beginners - Playing with Groovy Language\", ",
            endName: "",
            linkName: "http://grails.asia/grails-tutorial-for-beginners-playing-with-groovy-language",
            link: "http://grails.asia/grails-tutorial-for-beginners-playing-with-groovy-language"
        },
        {
            startName: "\"Groovy Goodness: the Spaceship Operator\", ",
            endName: "",
            linkName: "http://mrhaki.blogspot.com/2009/08/groovy-goodness-spaceship-operator.html",
            link: "http://mrhaki.blogspot.com/2009/08/groovy-goodness-spaceship-operator.html"
        },
        {
            startName: "\"Groovy Goodness: the Elvis Operator ?:\", ",
            endName: "",
            linkName: "http://mrhaki.blogspot.com/2009/08/groovy-goodness-elvis-operator.html",
            link: "http://mrhaki.blogspot.com/2009/08/groovy-goodness-elvis-operator.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});