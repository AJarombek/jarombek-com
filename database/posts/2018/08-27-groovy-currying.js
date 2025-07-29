/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/27/2018
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
                "value":" Something I'm really interested in is incorporating functional programming practices into my code.  Despite not working in any purely functional languages (although I am starting to look at Haskell), most imperative and object oriented languages support certain functional  operations.  In my recent exploration of Groovy, I noticed that closures support the currying technique.  Currying in Groovy takes an existing function and creates a new specialized variant.  This post explains how to use currying to enhance Groovy closures. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Currying?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Currying?",
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
                "value":" My exploration of Groovy wasn't the first time I crossed paths with currying.  Currying was mentioned in my readings on Java 8 along with my brief research so far of Haskell (a functional programming language).  Currying is named after Haskell Curry, an American mathematician (the Haskell language is also named after Curry)",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1,2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The goal of currying in Groovy is to make specialized versions of a function.  To accomplish this, pieces of a function are put into a fixed state prior to invocation. ",
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
                "value":" Something I'm really interested in is incorporating functional programming practices into my code.  Despite not working in any purely functional languages (although I am starting to look at Haskell), most imperative and object oriented languages support certain functional  operations.  In my recent exploration of Groovy, I noticed that closures support the currying technique.  Currying in Groovy takes an existing function and creates a new specialized variant.  This post explains how to use currying to enhance Groovy closures. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Currying?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Currying?",
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
                "value":" My exploration of Groovy wasn't the first time I crossed paths with currying.  Currying was mentioned in my readings on Java 8 along with my brief research so far of Haskell (a functional programming language).  Currying is named after Haskell Curry, an American mathematician (the Haskell language is also named after Curry)",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1,2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The goal of currying in Groovy is to make specialized versions of a function.  To accomplish this, pieces of a function are put into a fixed state prior to invocation. ",
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
                "value":" Confusingly, Groovy's definition of currying does not match the purely functional definition of currying.  Currying in Groovy aligns closer to the definition of a partial application. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Currying"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Curried functions are those that take in their arguments one at a time instead of all at once",
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
                "value":".  A function takes in arguments one at a time by having a single argument and returning a function that also takes a single argument",
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
                "value":".  Returning a function makes a curried function a higher order function - one that either takes in a function as an argument or results in a function.  A basic example of a curried function is one that multiplies two numbers. Denoted as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mult :: Int -> (Int -> Int)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", this curried function is invoked with the statement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mult 2 3",
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
                "value":"6",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (note the syntax matches Haskell). ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mult",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes a single integer argument and returns a function that also takes a single integer argument.  Curried functions are commonly used  to create partial applications. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Partial Application"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A partial application is when some of a curried function's arguments are supplied a fixed value before invocation.  The resulting function is a specialized version of the curried function. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Haskell Currying and Partial Applications"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Haskell Currying and Partial Applications",
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
                "value":" In Haskell, a curried function that multiplies two numbers is straightforward. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"mult :: Int -> (Int -> Int)\nmult x y = x * y\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"> mult 2 3\n6\n",
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
                "value":" Now that a curried function exists, partial implementations are easily defined.  Note that the following partial implementations fix one of the curried functions arguments to a value.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"dub",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" fixes one of the integer arguments to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so all function invocations will multiply the functions argument by 2. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Haskell"
        },
        "value":"-- A partial implementation of the 'mult' function that doubles a number\ndub :: Int -> Int\ndub = mult 2\n\n-- Another partial implementation of the 'mult' function that multiplies a number by 10\nx10 :: Int -> Int\nx10 = mult 10\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"dub 3\n> 6\n\nx10 3\n> 30\n",
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
                "value":" Haskell isn't the focus of the remaining article, so no more code from the language is shown. However, I think it's important to see different ways a functional language handles currying.  Keeping the purely functional approach in the back of our minds will assist in understanding Groovy's approach. ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"November 3rd, 2018"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Curried functions and partial applications are also easy to make in JavaScript using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/08-Aug/8-27-groovy-currying/curry.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ES6 arrow functions",
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
            "title":"Currying Groovy Closures"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Currying Groovy Closures",
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
                "value":" The closure object in Groovy has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"curry()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method. Invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"curry()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a partial implementation of the closure.  It is important to remember that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"curry()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not create a curried function like those we defined in Haskell.  Currying in Groovy only creates specialized versions of a function (yes, this is confusing.  You may want to re-read this paragraph). ",
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
                "value":" The basic example of partial implementations in Groovy match the multiplication methods we defined in Haskell: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"def times = { x, y -> x * y }\n\nassert times(2, 2) == 4\n\ndef timesTwo = times.curry(2)\n\nassert timesTwo(5) == 10\n\ndef timesTen = times.curry(10)\n\nassert timesTen(10) == 100\n",
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
                "value":" The argument passed to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"curry()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is a value bound to one of the closures parameters. ",
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
                "value":" One solid use case of partial implementation is to take a generic function and create many specialized variants.  In the following code I have a generic closure for logging exercises.  The parameters of the closure ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"workout",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are the distance, time spent, and type of exercise.  Specialized workout closures are built with partial implementations: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"// Closure that prints out a workout\ndef workout = { type, miles, minutes, seconds ->\n\n  def min = minutes >= 10 ? minutes : \"0$minutes\"\n  def sec = seconds >= 10 ? seconds : \"0$seconds\"\n\n  return \"$type $miles miles in $min:$sec\"\n}\n\nassert workout(\"Ran\", 4.7, 32, 5) == \"Ran 4.7 miles in 32:05\"\n\n// Bind the 'type' argument to the value 'Ran'.  All exercises that use the new curried closure are runs\ndef run = workout.curry(\"Ran\")\n\nassert run(4.58, 29, 18) == \"Ran 4.58 miles in 29:18\"\n\n// Bind the 'type' argument to the value 'Ran' and the 'miles' argument to the 5K mile conversion\ndef run5K = workout.curry(\"Ran\", 3.106)\n\nassert run5K(15, 27) == \"Ran 3.106 miles in 15:27\"\n\n// Bind the second argument in the workout closure to the 5K mile conversion\ndef fiveK = workout.ncurry(1, 3.106)\n\nassert fiveK(\"Biked\", 15, 0) == \"Biked 3.106 miles in 15:00\"\n",
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
                "value":" Partial implementations get really interesting when closure parameters are also closures.  One example is a composition closure, which combines two other closures",
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
            "language":"Groovy"
        },
        "value":"def composition = { f, g, x -> f(g(x)) }\n",
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
                "value":" Compositions are used in advanced examples of partial implementations.  The following code snippet gives a taste of how to utilize compositions and partial implementations together. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"/**\n* Represents a running pace/time in minutes and seconds\n*/\nclass Time {\n  int minutes\n  int seconds\n\n  /**\n  * Calculate the mile pace for a run given a distance in miles and the time spent running\n  * @param miles - the mileage of the run\n  * @param time - the time it took to complete the run\n  * @return the pace of the run\n  */\n  static int milePace(double miles, Time time) {\n    def seconds = (time.minutes * 60) + time.seconds\n    return seconds / miles\n  }\n\n  @Override\n  String toString() {\n    return \"Time: $minutes:${seconds >= 10 ? seconds : \"0${seconds}\"}\"\n  }\n}\n\n// Closure to convert an integer representing seconds into a Time object\ndef toPace = {int seconds -> new Time(minutes: Math.floor(seconds / 60), seconds: seconds % 60)}\n\n// Use the milePace() static method as a closure.  This gives us access to the curry() method\ndef pace = Time.&milePace\n\n// Curry the pace closure to calculate paces for 5K races\ndef pacePer5K = pace.curry(3.106)\n\n// The purpose of a composition closure is to combine two other closures\ndef composition = { f, g, x -> f(g(x)) }\n\n// Create a composition of the pacePer5K closure and the toPace closure.  The resulting closure takes in a\n// 5K time and returns the pace of the 5K represented by a Time object.\ndef minutesPerMileFor5K = composition.curry(toPace, pacePer5K)\n\ndef pr = [minutes: 15, seconds: 27] as Time\n\nassert minutesPerMileFor5K(pr).toString() == \"Time: 4:58\"\n\ndef trackTT = [minutes: 16, seconds: 42] as Time\n\nassert minutesPerMileFor5K(trackTT).toString() == \"Time: 5:22\"\n",
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
                "value":" I'm still unsure about specific use cases for currying and partial implementations outside of a purely functional language like Haskell.  However, like any programming concept it is another skill added to the resume.  I'll keep you updated if I use currying or partial implementations in any of my production applications. ",
                "children":null
            }
        ]
    }
];

postName = "aug-27-2018-groovy-currying";
postDate = new Date('2018-08-27T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Currying Groovy Closures",
    description: `Currying in Groovy takes an existing function and creates a new specialized
        function based on the existing one.  This post explains how to use currying to enhance 
        Groovy closures.`,
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
            name: "Haskell",
            picture: "https://asset.jarombek.com/logos/haskell.png",
            color: "haskell"
        },
        {
            name: "Closures"
        },
        {
            name: "Currying"
        },
        {
            name: "Functional Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Dierk König & Paul King, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2015), 130",
            linkName: "Groovy In Action",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "\"Haskell Curry\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Haskell_Curry",
            link: "https://en.wikipedia.org/wiki/Haskell_Curry"
        },
        {
            startName: "Graham Hutton, ",
            endName: ", 2nd ed (Cambridge, UK: Cambridge University Press, 2016), 28",
            linkName: "Programming in Haskell",
            link: "https://bit.ly/2Nkpl5o"
        },
        {
            startName: "\"What is 'Currying'?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/36314/what-is-currying",
            link: "https://stackoverflow.com/questions/36314/what-is-currying"
        },
        {
            startName: "\"Practically Groovy: Functional programming with curried closures\", ",
            endName: "",
            linkName: "https://www.ibm.com/developerworks/library/j-pg08235/j-pg08235-pdf.pdf",
            link: "https://www.ibm.com/developerworks/library/j-pg08235/j-pg08235-pdf.pdf"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});