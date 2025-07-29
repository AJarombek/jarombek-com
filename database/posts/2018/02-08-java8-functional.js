/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/28/2018
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
                "value":" With all the functional additions in Java 8, I think its important to define what it means for a program to be 'functional.'  The book ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.manning.com/books/java-8-in-action"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java 8 In Action",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tries to supply this definition. ",
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
                "value":" It is hard to explain functional programming with Java since it doesn't follow a pure functional style.  Instead Java 8 takes pieces of functional programming and incorporates them into Java's existing imperative and object oriented paradigm. ",
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
                "value":" With all the functional additions in Java 8, I think its important to define what it means for a program to be 'functional.'  The book ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.manning.com/books/java-8-in-action"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java 8 In Action",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tries to supply this definition. ",
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
                "value":" It is hard to explain functional programming with Java since it doesn't follow a pure functional style.  Instead Java 8 takes pieces of functional programming and incorporates them into Java's existing imperative and object oriented paradigm. ",
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
                "value":" My experience with functional programming is extremely limited.  The only true functional programming language I've used is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/Racket_(programming_language)"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Racket",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" during my Junior year of college (a few months before I really got invested in programming and software development).  So I don't remember much! ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"October 20th, 2018"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In recent months I've spent more time with functional programming.  I've written about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-27-2018-groovy-currying"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"currying",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and worked with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-6-2018-haskell-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Haskell",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a functional programming language. ",
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
                "value":" Functional programming, like mathematics, is focused around the function.  Functions take a variable number of arguments and return a result.  Most importantly, a 'pure' function has zero side effects",
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
                "value":".  This means each time a function is called with the same arguments, the same result occurs.  A pure function also can't output to a log file or throw exceptions",
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
                "value":". In a functional program variables can't mutate.  They must be effectively final. I've listed a lot of things you can't do in functional programming, but these rules result in functions that don't cause unexpected errors and are very predictable. ",
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
                "value":" Functional style programming in Java is not quite this strict.  However, reducing the number of variables a function mutates and removing unnecessary exceptions is beneficial.  Predictable functions are nice to work with and help future developers who look at your code! ",
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
                "value":" As an example, eliminating null errors is simple with Java 8's ",
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
                "value":" class!  I described optionals in a prior ",
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
                        "value":"article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", but invalid conditions are easily expressed in functions with optionals.  For example, the book I read discusses a divide by zero scenario: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Functional {\n\n    public static Optional<Double> divide(Double numerator, Double denominator) {\n\n        // Wrap arguments into optionals\n        Optional<Double> num = Optional.ofNullable(numerator);\n        Optional<Double> den = Optional.ofNullable(denominator);\n\n        // Return division result if arguments exist and the denominator isn't zero,\n        // otherwise return empty optional\n        return (!num.isPresent() || !den.isPresent()) ?\n                Optional.empty() : (den.get() == 0) ?\n                Optional.empty() : Optional.of(num.get() / den.get());\n    }\n\n    public static void main(String... args) {\n        Optional<Double> success = divide(5.0, 2.0);\n        Optional<Double> fail = divide(5.0, 0.0);\n        Optional<Double> failBecauseNull = divide(null, 6.5);\n\n        success.ifPresent(System.out::println);\n\n        // Both of these Optionals will be empty\n        if (!fail.isPresent()) {\n            System.out.println(\"Can't Divide By Zero\");\n        }\n\n        if (!failBecauseNull.isPresent()) {\n            System.out.println(\"Can't Pass an Empty Value\");\n        }\n    }\n}\n",
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
                "value":" First I tried dividing 5 by 2, then 5 by 0, and finally the dreaded ",
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
                "value":" by 6.5.  With optionals, none of these divisions throw an error. Instead I simply check the resulting ",
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
                "value":" for a value.  The first valid division contains a result while the other two return ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Optional.empty",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The output of this program is as follows: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"2.5\n\"Can't Divide By Zero\"\n\"Can't Pass an Empty Value\"\n",
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
                "value":" Functional programming often utilizes recursion to avoid mutating variables.  The only issue with recursion in Java is each time a recursive function is called, a new stack frame is created ",
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
                "value":".  This causes overflows for large operations.  Java also doesn't have tail recursion optimization, so there is no way to avoid stack frame creation",
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
        "el":"updateinfo",
        "attributes":{
            "date":"October 20th, 2018"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In a recent article I wrote about my experience working with higher order functions in Haskell.  In particular I discussed ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-20-2018-haskell-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"fold functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which are recursively implemented.  Fold functions share similar issues of overflowing the program stack. ",
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
                "value":" There are other functional operations available in Java that I won't describe here, but I'm interested to try them out in the future.  While Java 8 doesn't introduce pure functional programming, it does give you more tools to create code without unwanted side effects! ",
                "children":null
            }
        ]
    }
];

postName = "feb-8-2018-java8-functional";
postDate = new Date('2018-02-08T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "What Is Functional Programming in Java 8?",
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
            name: "Functional Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Raoul-Gabriel Urma, Mario Fusco &amp; Alan Mycroft, ",
            endName: " (Shelter Island, NY: Manning, 2015), 295",
            linkName: "Java 8 In Action",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 296",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 302",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 303",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/java-8-in-action"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});