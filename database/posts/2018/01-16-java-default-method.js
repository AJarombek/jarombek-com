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
                "value":" Java was not originally designed to support multiple inheritance of implemented methods.  Because of this, a class could only extend one other class.  However, multiple inheritance could be simulated by implementing multiple interfaces.  The only catch was the methods in the interface had no body and had to be created in the implementing class. ",
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
                "value":" This design helped avoid multiple inheritance issues, such as the diamond problem.  However, using interfaces for APIs is far from perfect. ",
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
                "value":" Java was not originally designed to support multiple inheritance of implemented methods.  Because of this, a class could only extend one other class.  However, multiple inheritance could be simulated by implementing multiple interfaces.  The only catch was the methods in the interface had no body and had to be created in the implementing class. ",
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
                "value":" This design helped avoid multiple inheritance issues, such as the diamond problem.  However, using interfaces for APIs is far from perfect. ",
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
                "value":" Let's say you need to change an API that uses an interface.  When adding a new method definition to an interface, all classes that implement this interface must also implement the new method.  If all the implementing classes of this interface belong to you its is an easy fix. Unfortunately in the case of public APIs its likely that someone else has a class that implements your interface.  Adding a new method to the interface breaks their code! ",
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
                "value":" Java 8 has a fix for this issue called default methods.  With default methods, interface methods with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword contain bodies.  If an interface method isn't implemented in the concrete class and a default method exists, the default method in the interface is invoked!  With default methods existing code doesn't break on interface changes. ",
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
                "value":" But wait!  What's the difference between an abstract class and an interface with default methods?  Although both can have method bodies now, there are still differences between the two.  First off a class can still only extend one abstract class but can implement multiple interfaces.  Second, abstract classes can have instance variables while interfaces can't",
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
                "value":" What about multiple inheritance now that you can inherit methods with implementations from different interfaces? With Java 8 new rules were added to deal with situations where a class has multiple method bodies to choose from. ",
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
                "value":" First off, if one method body comes from a class and the rest come from default methods, the classes implementation is picked.  Second, if multiple default methods exist on different levels of the inheritance chain, the implementation in the interface closest to the class is picked.  If neither of these conditions are met, the class has to explicitly select which method body to use",
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
                "value":" Lets observe an example of default methods and what occurs in a diamond problem scenario. The interface hierarchy below represents animals: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"diamond-uml-image"
        },
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
                    "src":"https://asset.jarombek.com/diamond-uml.png"
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
                "value":" Here is the code for each entity in the diagram (side note: you can also specify ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"static",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method implementations in interfaces with Java 8): ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface Animal {\n\n    String aboutMe();\n\n    /**\n    * Default method will be called if this method doesn't exist in the implemented class\n    * @return the age of the animal\n    */\n    default int age() {\n        return 0;\n    }\n\n    /**\n    * In Java 8 interfaces can have static methods\n    * @return a description of this animal\n    */\n    static String info() {\n        return \"I am an animal\";\n    }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface LivingAnimal extends Animal {\n    void run();\n    void walk();\n    void sleep();\n    void eat();\n\n    default String status() {\n        return \"I am a living animal!\";\n    }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface Pet extends Animal {\n    String owner();\n\n    default String status() {\n        return \"I am a pet!\";\n    }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Cat implements LivingAnimal, Pet {\n\n    private String name;\n    private String owner;\n\n    public Cat(String name) {\n        this.name = name;\n    }\n\n    public Cat(String name, String owner) {\n        this.name = name;\n        this.owner = owner;\n    }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Main {\n\n    public static void main(String... args) {\n        Cat snickers = new Cat(\"Snickers\", \"Caroline D\");\n\n        int age = snickers.age();\n        System.out.println(age);\n\n        String status = snickers.status();\n        System.out.println(status);\n    }\n}\n",
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
                "value":" When I tried running this code I got the following error: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":{
            "id":"error-message-image"
        },
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
                    "src":"https://asset.jarombek.com/error-message.png"
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
                "value":" This error occurred because I forgot to explicitly select which ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"status()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method body to implement in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cat",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class.  Let's fix this issue and explicitly call the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface implementation",
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
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"...\n\n@Override\npublic String status() {\n    return Pet.super.status();\n}\n",
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
                "value":" Now when I run the code ",
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
                "value":" equals ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"status",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" equals ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'I am a pet!'",
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
                "value":" For some of us this may be the expected result.  For others with diamond problem experience an error may be expected.  Although I don't really know C++ (yet...) I know that having diamond inheritance like this example will cause an error.  The reason why Java doesn't complain here has to do with the way Java is implemented.  Instead of both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LivingAnimal",
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
                "value":"Pet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" having a copy of the default method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"age()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defined in ",
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
                "value":" as they would in C++, Java knows there is only one default method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"age()",
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
                "value":"Animal",
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
                "value":". Therefore no conflict exists! ",
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
                "value":" Working with API's got a lot easier in Java 8.  You can check out all the code for this discovery on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/01-Jan/1-16-Java-Default-Method/defaultmethods"
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

postName = "jan-16-2018-java-default-method";
postDate = new Date('2018-01-16T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Java 8 Default Method",
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
            name: "Inheritance"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Raoul-Gabriel Urma, Mario Fusco &amp; Alan Mycroft, ",
            endName: " (Shelter Island, NY: Manning, 2015), 214",
            linkName: "Java 8 In Action",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 219",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 222",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 223",
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