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
                "value":" This post reviews Java 8's new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class, which builds upon the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Future",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class introduced in Java 5",
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
                "value":".  A ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents an operation in progress that  will contain a value when completed",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" helps create asynchronous code that doesn't block during long running tasks.  It is basically Java's version of JavaScript's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Promise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object. ",
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
                "value":" I created a simple API to test it out.  The API contains a list of programming languages and information about them.  Getting a language from the API takes a long time to complete (simulating a long running network call) so I used ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to deal with the language information once it arrives.  In the meantime I can perform other operations. ",
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
                "value":" This post reviews Java 8's new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class, which builds upon the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Future",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class introduced in Java 5",
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
                "value":".  A ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents an operation in progress that  will contain a value when completed",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" helps create asynchronous code that doesn't block during long running tasks.  It is basically Java's version of JavaScript's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Promise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object. ",
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
                "value":" I created a simple API to test it out.  The API contains a list of programming languages and information about them.  Getting a language from the API takes a long time to complete (simulating a long running network call) so I used ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to deal with the language information once it arrives.  In the meantime I can perform other operations. ",
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
                "value":" Here is the API: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class LanguageAPI {\n\n    private static Random random =  new Random();\n    private Map<String, Language> languages;\n\n    public LanguageAPI() {\n\n        // Populate the languages map\n        languages = Stream.of(\n            new Language(\"Java\", LocalDate.of(1995, Month.MAY, 23), \"9.0\", \"Object Oriented\"),\n            new Language(\"JavaScript\", LocalDate.of(1995, Month.DECEMBER, 4), \"9.0\", \"Prototype Based\"))\n            .collect(toMap(Language::getName, e -> e));\n    }\n\n    /**\n    * Get one of the languages stored in the API with a delay\n    * @param name - the name of the language\n    * @return - the language object\n    */\n    public Language getLanguage(String name) {\n        randomDelay();\n        return languages.get(name);\n    }\n\n    /**\n    * Create a random delay between 0-3 seconds\n    */\n    private void randomDelay() {\n        double delay = random.nextDouble() * 3_000;\n        System.out.println(\"The delay will be \" + delay + \" ms\");\n        try {\n            Thread.sleep((long) delay);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n",
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
                "value":" I initialized the language values in the constructor.  I also used Java 8's Date and Time API to specify each languages creation date.  Here is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Language",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" POJO. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Language {\n\n    private String name;\n    private LocalDate created;\n    private String version;\n    private String paradigm;\n}\n",
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
                "value":" Finally I invoked the API: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class APIClient {\n\n    private static LanguageAPI languageAPI = new LanguageAPI();\n\n    /**\n    * Get a language asynchronously.\n    * When the language object is finally received, print it.\n    * @param name - the language name\n    * @return the CompletableFuture\n    */\n    public static CompletableFuture<Void> getLanguageAsync(String name) {\n\n        // Start up a new thread and perform the language APIs getLanguage()\n        // method asynchronously\n        CompletableFuture<Language> futureLanguage =\n            CompletableFuture.supplyAsync(() -> languageAPI.getLanguage(name));\n\n        // Print out the Language once the futures value is supplied\n        return futureLanguage.thenAccept(System.out::println);\n    }\n\n    public static void main(String... args) {\n\n        // Get the Java language asynchronously\n        CompletableFuture<Void> future = getLanguageAsync(\"Java\");\n        System.out.println(\"Finding Java...\");\n\n        // Wait for the future to complete before ending the Java process\n        future.join();\n    }\n}\n",
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
                "value":" Since the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getLanguage()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method takes a long time to complete, I wrapped it in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  To do this I used ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"'s ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"supplyAsync()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  This method accepts a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Supplier",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which is asynchronously executed.  I put the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getLanguage()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Supplier",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument.  Once the value is resolved I print it using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"thenAccept()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The contents of this method are executed once the value exists, in my case the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"System.out::println",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method reference. ",
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
                "value":" Running this code prints 'Finding Java...' before the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Langauge",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object is resolved.  Asynchronous code at work! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Finding Java...\n# The delay will be 2083.7637884812107 ms\n# Language(name=Java, created=1995-05-23, version=9.0, paradigm=Object Oriented)\n",
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
                "value":" I haven't tried more complex examples, but ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" seems like a nice new addition to Java.  In the past when performing asynchronous code in Java I used Android libraries or the Spring framework, but I can see myself using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CompletableFuture",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the future!  The code for this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/02-Feb/2-7-Java-Completable-Future"
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

postName = "feb-7-2018-java8-completable-future";
postDate = new Date('2018-02-07T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Java 8 Completable Future",
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
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Raoul-Gabriel Urma, Mario Fusco &amp; Alan Mycroft, ",
            endName: " (Shelter Island, NY: Manning, 2015), 251",
            linkName: "Java 8 In Action",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 252",
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