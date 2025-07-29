/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/19/2018
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
                "value":" I've learned a lot about Java over the past few months.  I've read books on it, built projects with it at work, and even posting on this website about it!  Its obvious when looking at some of my old Java code how far I've progressed (especially since my SaintsXCTF Android app).  I decided to pull a bunch of concepts I've learned together and build an API in Java.  This discovery goes through the API and my design decisions throughout. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The API"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The API",
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
                "value":" The API I built for this discovery post has two major pieces.  The first is a workout API.  It has an ",
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
                "value":" interface along with two concrete classes that implement it - ",
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
                "value":" and ",
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
                "value":".  I am an avid runner and have been experimenting with nordic skiing so I thought they would be appropriate. ",
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
                "value":" I've learned a lot about Java over the past few months.  I've read books on it, built projects with it at work, and even posting on this website about it!  Its obvious when looking at some of my old Java code how far I've progressed (especially since my SaintsXCTF Android app).  I decided to pull a bunch of concepts I've learned together and build an API in Java.  This discovery goes through the API and my design decisions throughout. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The API"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The API",
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
                "value":" The API I built for this discovery post has two major pieces.  The first is a workout API.  It has an ",
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
                "value":" interface along with two concrete classes that implement it - ",
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
                "value":" and ",
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
                "value":".  I am an avid runner and have been experimenting with nordic skiing so I thought they would be appropriate. ",
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
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/5-20-18-exercise.png"
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
                "value":" The second piece of the API holds a blockchain data structure.  I've started to read about blockchain in my free time so I thought it would be cool to implement a similar data structure in Java.  An important note - the blockchain data structure I built is extremely primitive.  In fact it is almost unrecognizable next to the structure used in modern day blockchain technologies.  All my Java code does is implement a chain of blocks that contain a list of transactions.  That is it. ",
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
                "value":" Here is the dependency graph for my blockchain API: ",
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
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/5-20-18-blockchain.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Workout API"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Workout API",
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
                "value":" The workout API is much simpler so lets start there.  At the top of the API is the ",
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
                "value":" interface, which both ",
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
                "value":" and ",
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
                "value":" implement.  This interface defines the methods that all exercises must have.  For three of these methods the implementing class must supply the method body. However one of the methods has a default implementation, which is used when the implementing class doesn't override it.  I made a whole discovery post on ",
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
                        "value":"default methods in Java",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface Exercise {\n\n    double getMiles();\n\n    Duration getTime();\n\n    LocalDate getDate();\n\n    default Duration pace() {\n        long secondsPerMile = getTime().toSeconds() / 60;\n        return Duration.ofSeconds(secondsPerMile);\n    }\n}\n",
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
                "value":" Now let's look at the first implementing class - ",
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
                "value":".  This class represents a running exercise.  The ",
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
                "value":" class implements one other interface besides for ",
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
                "value":" called ",
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
                "value":".  The ",
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
                "value":" interface has one method called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"compareTo()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which is used to compare two objects of the same type.  The ",
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
                "value":" interface gives objects a natural ordering, which allows them to be sorted in a logical way",
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
                "value":".  It also allows them to work properly with sorted collections such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TreeMap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and static methods such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Arrays.sort()",
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
                "value":". If you ever have a class with a logical ordering, definitely implement ",
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
                "value":"! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"import static java.util.Comparator.comparing;\n\npublic class Run implements Exercise, Comparable<Run> {\n\n    private static final Comparator<Run> COMPARATOR =\n        comparing(Run::getDate)\n        .thenComparingDouble(Run::getMiles)\n        .thenComparing(Run::getTime)\n        .thenComparing(run -> run.surface);\n\n    ...\n\n    @Override\n    public int compareTo(Run run) {\n        return COMPARATOR.compare(this, run);\n    }\n}\n",
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
                "value":" With Java 8's introduction of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Comparator",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" construction methods, overriding the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"compareTo()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is extremely easy",
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"comparing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" static method above takes in a lambda function, specifying a sorting key.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"comparing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be chained with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"thenComparing()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is used in case of a tie.  In my code, the first item compared is the date of the run, followed by the miles run, etc.  Note that I use a method reference instead of a lambda function. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Method Reference"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A method reference is a shorthand notation for a lambda function (also known as an arrow function).  A common use case of a lambda is to simply call a method on the input parameter.  Example: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(Car car) -> car.getModelYear()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In Java, simple lambdas that call an existing method can use a method reference",
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
                "value":".  The example above can be rewritten with a method reference as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Car::getModelYear()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Note that we use the class and not the instance itself in the method reference (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Car",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" not ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"car",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  This is because ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"car",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" isn't explicitly defined anywhere for use in the method reference.  The only case where you would use an instance in a method reference is when calling a method on an existing variable outside the lambdas scope",
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
                "value":" Another interesting aspect of the ",
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
                "value":" class is it doesn't have a public constructor method.  In order to create a new ",
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
                "value":" instance you have to call one of its many static factory methods, which internally make calls to a private constructor. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// enum representing the surface that the run was on.\npublic enum Surface {\n    GRASS, SAND, ROAD, TRACK, TRAIL, UNKNOWN\n}\n\n/* Instance Variables */\n\nprivate final double miles;\nprivate final Duration time;\nprivate final LocalDate date;\nprivate final Surface surface;\n\n/* Private Constructor */\n\nprivate Run(double miles, Duration time, LocalDate date, Surface surface) {\n    this.miles = Objects.requireNonNullElse(miles, 0.0);\n    this.time = Objects.requireNonNullElse(time, Duration.ZERO);\n    this.date = Objects.requireNonNullElse(date, LocalDate.now());\n    this.surface = surface;\n}\n\n/* Static Factory Methods */\n\npublic static Run create(double miles, Duration time, LocalDate date, Surface surface) {\n    return new Run(miles, time, date, surface);\n}\n\npublic static Run create(double miles, Duration time, LocalDate date) {\n    return new Run(miles, time, date, Surface.UNKNOWN);\n}\n\npublic static Run createNow(double miles, Duration time, Surface surface) {\n    return new Run(miles, time, LocalDate.now(), surface);\n}\n\npublic static Run createNow(double miles, Duration time) {\n    return new Run(miles, time, LocalDate.now(), Surface.UNKNOWN);\n}\n",
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
                "value":" Static factory methods have some benefits and some drawbacks.  You can use them to be more explicit about what type of object you are creating or even limit the ways in which constructors are called.  When I say you can be more explicit I mean you can uniquely name a static factory method.  Constructors on the other hand are always the name of the class.  A common problem with static factory methods is programmers often don't know they exist!  To find them they have to search through the JavaDocs, which for large objects can be a hassle. ",
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
                "value":" The reason I used static factory methods in the ",
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
                "value":" (and ",
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
                "value":") classes actually has no relation to the reasons I just stated. When you don't have a public constructor in a class, it is impossible for other classes to extend it ",
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
                "value":".  Therefore using static factory methods instead of a public constructor stops inheritance! ",
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
                "value":" Classes in Java such as ",
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
                "value":" stop inheritance in another way (by declaring the class as ",
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
                "value":").  But why stop inheritance? What is the benefit? ",
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
                "value":" One of the requirements for building immutable objects is prohibiting their class from being subclassed.  You may have created a perfect immutable class with no side effects, but that doesn't mean a subclass is required to stay immutable",
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
                "value":".  This can cause code to behave unexpectedly, since Java variables are ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"covariant",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Removing inheritance keeps my ",
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
                "value":" and ",
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
                "value":" classes immutable! ",
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
                "value":" The rest of the code in the ",
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
                "value":" class implements the methods defined in the ",
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
                "value":" interface along with overriding ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"toString()",
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
                "value":"equals()",
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
                "value":"hashCode()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" from ",
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
                "value":"Ski",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is written similarly to ",
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
                "value":". You can check out the code in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/\n2018/05-May/5-20-Java-Generics-API/exercise/Run.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Run",
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
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/05-May/5-20-Java-Generics-API/\nexercise/Ski.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Ski",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" classes and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/05-May/5-20-Java-Generics-API/\nexercise/Exercise.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Exercise",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Blockchain API"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Blockchain API",
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
                "value":" The blockchain API is a bit more complex.  At the top we have the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"BlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface, which is defined as follows: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface BlockChain<E> {\n\n    /**\n    * Add an element to the blockchain and return its transaction\n    * @param el - the element to be added\n    * @return an {@code Optional} value of the transaction added to the blockchain\n    */\n    Optional<Block.Transaction<E>> add(E el);\n\n    /**\n    * Find a transaction on the blockchain given its {@code id}\n    * @param id - the identifier of a transaction\n    * @return an {@code Optional} value of the transaction found on the blockchain\n    */\n    Optional<Block.Transaction<E>> find(long id);\n\n    /**\n    * Add a bunch of elements to the blockchain\n    * @param elements - a collection of elements to be added to the blockchain.  The parameter\n    *                 type is {@code Iterable}, so any class that implements the {@code Iterable}\n    *                 interface can be used as an argument.  This includes any class that extends\n    *                 {@code Collection}.  The generic type of the {@code Iterable} can be the\n    *                 generic type of the blockchain or any subclass.\n    */\n    void addAll(Iterable<? extends E> elements);\n}\n",
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
                "value":" These are the three key methods used in all blockchain implementations.  One design decision for the blockchain API was to not have concrete child classes directly implement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"BlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Instead I created a skeletal implementation of the interface, and had my concrete classes extend the skeletal implementation. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Skeletal Implementation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In Java a Skeletal Implementation is when interfaces and abstract classes are combined to create an enhanced blueprint for subclasses.  Interfaces are powerful in that they do not break encapsulation (unless you use Java 8's default methods) while defining the rules for a type.  Abstract classes are powerful because they make development quicker and are DRY by defining shared code for subclasses.  A problem with abstract classes is that     they break encapsulation, making subclasses dependent on the abstract class for implementation details",
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
                "value":". Interfaces, even with default methods, cant implement details such as instance variables and overridden methods from ",
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
                "value":".  Skeletal implementations are abstract classes that also implement an interface.  The user has two options - either implement the interface or extend the skeletal implementation - the second of which could save them time since they would write less code. ",
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
                "value":" In my case the reason for the skeletal implementation is to reuse the overridden methods from ",
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
                "value":".  This pattern works well for the blockchain API because in many cases checking whether two blockchains are equal does not depend on how the blockchain is implemented under the hood, just if it holds the same data.  The same can't be said for the exercise API.  While ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Bike",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" did share some fields, they also had unique ones for each implementation.  In that case a skeletal implementation would not have made sense to implement. ",
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
                "value":" As a side note, if a blockchain implementation didn't want to follow the rules enforced in the skeletal implementation, it could simply implement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"BlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"! ",
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
                "value":" Here is my skeletal implementation: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public abstract class AbstractBlockChain<E> implements BlockChain<E> {\n\n    // Cache the result of the hashCode() method\n    private int hashCode;\n\n    /* Pass along to the child classes */\n\n    @Override\n    public abstract Optional<Block.Transaction<E>> add(E el);\n\n    @Override\n    public abstract Optional<Block.Transaction<E>> find(long id);\n\n    @Override\n    public abstract void addAll(Iterable<? extends E> elements);\n\n    abstract List<Block<E>> getBlockList();\n\n    @Override\n    public int hashCode() {\n        var result = hashCode;\n\n        if (result == 0) {\n            result = getBlockList().hashCode();\n            hashCode = result;\n        }\n\n        return result;\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (obj == this)\n            return true;\n        if (!(obj instanceof AbstractBlockChain))\n            return false;\n        var blockChain = (AbstractBlockChain) obj;\n        return Objects.equals(blockChain.getBlockList(), getBlockList());\n    }\n\n    @Override\n    public String toString() {\n        return getBlockList().toString();\n    }\n}\n",
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
                "value":" Now it is time to look at the meat of the blockchain API - the concrete class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class extends the skeletal implementation, exposing three methods to interact with the blockchain.  It also holds a list of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instances.  This list is a primitive \"block chain.\"  Each block holds a list of transactions which occurred as well as a reference to the previous block.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is immutable - to add a new transaction to a block a whole new block instance must be created.  The reason ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is immutable is to make it reliable and easy to test! ",
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
                "value":" Here is a diagram of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
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
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" classes: ",
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
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/5-20-18-simpleblock.png"
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
                "value":" Let's start with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public final class SimpleBlockChain<E> extends AbstractBlockChain<E> {\n\n    // A list of the blocks in the blockchain.\n    private List<Block<E>> blockList;\n\n    // Set the max block size for the blockchain.  Once this limit is exceeded a\n    // new block will be initialized.\n    private int maxBlockSize = 5;\n\n    public SimpleBlockChain() {\n        blockList = new ArrayList<>(List.of(new Block<>(null)));\n    }\n\n    @Override\n    List<Block<E>> getBlockList() {\n        return blockList;\n    }\n}\n",
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
                "value":" Notice that the number of transactions per block is five and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getBlockList()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is package private, meaning that implementing code can't access it. ",
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
                "value":" Now let's look at the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"add()",
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
                "value":"find()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" methods. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public Optional<Block.Transaction<E>> add(E el) {\n\n    // Get the latest block in the blockList.  This is the block we will add to if it isn't full\n    var latestBlock = blockList.get(blockList.size() - 1);\n\n    // Reference to the previous block in the blockchain\n    var prevBlock = latestBlock.getPrevBlock();\n\n    // If the block isn't full, create a new block that replicates the old one except with\n    // the new transaction.  Replace the existing block with this new one.  Otherwise, create a\n    // brand new block and add it to the list.\n    if (latestBlock.length() < maxBlockSize) {\n        System.out.println(\"Concat with Existing Block\");\n        latestBlock = latestBlock.concatTransaction(el, prevBlock);\n\n        blockList.remove(blockList.size() - 1);\n        blockList.add(latestBlock);\n\n        return latestBlock.lastTransaction();\n    } else {\n        System.out.println(\"Creating a New Block\");\n        Block<E> block = Block.create(latestBlock);\n        block = block.concatTransaction(el, prevBlock);\n\n        blockList.add(block);\n\n        return block.lastTransaction();\n    }\n}\n\n@Override\npublic Optional<Block.Transaction<E>> find(long id) {\n\n    // First filter down the blockList to the block that contains the transaction\n    Optional<Block<E>> containingBlock = blockList.stream()\n        .filter(block -> block.containsTransaction(id)).findFirst();\n\n    // If a block containing the transaction is found, return the transaction.\n    // Otherwise return an empty optional.\n    if (containingBlock.isPresent()) {\n        return containingBlock.get().findTransaction(id);\n    } else {\n        return Optional.empty();\n    }\n}\n",
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
                "value":" Both of these methods return an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Optional",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance. I decided to go with this approach so I wouldn't have to throw a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NullPointerException",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or return ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" if the insert or search failed.  With optionals its explicitly clear to API users that inserting can fail or a transaction may not exist when searching.  I dedicated an entire discovery post to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-30-2018-java8-optionals"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Optionals in Java 8",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in case you want to learn more. ",
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
                "value":" The last method that needs to be implemented is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"addAll()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The parameter type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable<? extends E>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" may look a bit unfamiliar.  Let's break it down. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"@Override\npublic void addAll(Iterable<? extends E> elements) {\n    elements.forEach(this::add);\n}\n",
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
                "value":"addAll()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method takes in type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable",
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
                "value":"Iterable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an interface for an object that can be looped through.  For example, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Collection",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface extends the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface.  That means that all classes in the Java collections framework implement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", such as ",
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
                "value":" or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HashSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since the method parameter of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"addAll()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is so generic, a lot of flexibility is given to the API user in regards to argument passing! ",
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
                "value":"Iterable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" parameter also has a generic type of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<? extends E>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This gives the API user even more flexibility, since they can pass an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class with the generic type matching the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" generic type or subtyping the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" generic type. ",
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
                "value":" An example would be a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SimpleBlockChain",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance of generic type ",
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
                "value":".  When passing an argument to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"addAll()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" all four of the following are valid: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// Create a new blockchain\nBlockChain<Exercise> blockChain = new SimpleBlockChain<>();\n\n/* The following four method calls are all valid */\nHashSet<Ski> skis = new HashSet<>();\nblockChain.addAll(skis);\n\nHashSet<Exercise> exercisesSet = new HashSet<>();\nblockChain.addAll(exercisesSet);\n\nList<Run> runs = new ArrayList<>();\nblockChain.addAll(runs);\n\nList<Exercise> exercisesList = new ArrayList<>();\nblockChain.addAll(exercisesList);\n",
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
                "value":" Making the API as flexible as possible is very important and can make end users lives much easier!  Imagine the hassle of having all your data stored in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LinkedList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and then finding out the API only accepts ",
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
                "value":" instances! ",
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
                "value":" Time to go over the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class.  This class doesn't implement an interface, but adding one would be a good exercise!  The class has one package-private constructor and one private constructor.  You may initially think its possible to extend this class if you are in its package.  Although it does have a package-private constructor, the class is declared ",
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
                "value":", so subclassing is disallowed.  This is good since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is immutable. ",
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
                "value":" I'm not going to show the code for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class in this post but you can look at it on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/05-May/\n5-20-Java-Generics-API/bchain/Block.java"
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
                "value":".  It even has a nice static member class for transactions! ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Static Member Class"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In Java a static member class is a static class defined inside a class.  Another option in Java is to have a non-static member class inside a class.  The big difference is non-static member classes are part of the outer classes instance - therefore they hold a reference to the contents of the outer class.  Unless the member class needs access to items in its outer class, it should be defined as static.  This saves both the time and space required to keep a reference of the outer class instance",
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
                "value":" I've been working in Java four years now.  While the first two years were just for simple school assignments, the past two years I've made production level code in the language.  I am still looking to sharpen my knowledge on the language all the time.  This API pulled together a lot of concepts I've been working on lately, and I hope reading about my journey with the language has been helpful!  As always the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/05-May/5-20-Java-Generics-API"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" source code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for this discovery is up on GitHub. ",
                "children":null
            }
        ]
    }
];

postName = "may-20-2018-java-generics-api";
postDate = new Date('2018-05-20T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Building a Java API with Generics",
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
            name: "Java 8",
            picture: "https://asset.jarombek.com/logos/java8.png",
            color: "java"
        },
        {
            name: "Generics"
        },
        {
            name: "Inheritance"
        },
        {
            name: "Polymorphism"
        },
        {
            name: "Encapsulation"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Joshua Bloch, ",
            endName: ", 3rd ed (Boston, MA: Pearson, 2018), 66",
            linkName: "Effective Java",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "",
            endName: ", 67",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "",
            endName: ", 70",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"Method References\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html",
            link: "https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html"
        },
        {
            startName: "\"Instance method reference of an existing object\", ",
            endName: "",
            linkName: "https://www.codementor.io/eh3rrera/using-java-8-method-reference-du10866vx#instance-method-reference-of-an-existing-object",
            link: "https://www.codementor.io/eh3rrera/using-java-8-method-reference-du10866vx#instance-method-reference-of-an-existing-object"
        },
        {
            startName: "",
            endName: ", 97",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"Why would one declare an immutable class final in Java?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/12306696",
            link: "https://stackoverflow.com/a/12306696"
        },
        {
            startName: "",
            endName: ", 87",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "",
            endName: ", 112",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});