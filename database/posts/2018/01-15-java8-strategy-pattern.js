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
                "value":" Since I started learning Java 8, much of my lambda code is from the stream API or the new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable.forEach()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  While both are great, I've been looking for ways to integrate Java 8 lambdas with other programming patterns.  While reading a book on Java 8 today I saw one pattern with a lot of potential: the strategy pattern",
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
                "value":" The strategy design pattern defines a group of algorithms.  One of the algorithms in this group is selected for use at runtime",
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
                "value":".  With a functional interface, a lambda function (algorithm) is passed to the strategy pattern.  The functional interface specifies the general algorithm structure while the lambda function implements the details at runtime. ",
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
                "value":" Since I started learning Java 8, much of my lambda code is from the stream API or the new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable.forEach()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  While both are great, I've been looking for ways to integrate Java 8 lambdas with other programming patterns.  While reading a book on Java 8 today I saw one pattern with a lot of potential: the strategy pattern",
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
                "value":" The strategy design pattern defines a group of algorithms.  One of the algorithms in this group is selected for use at runtime",
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
                "value":".  With a functional interface, a lambda function (algorithm) is passed to the strategy pattern.  The functional interface specifies the general algorithm structure while the lambda function implements the details at runtime. ",
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
                "value":" First I created a functional interface that takes a variable number of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double[]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" arrays and returns a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double",
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
            "language":"Java"
        },
        "value":"@FunctionalInterface\npublic interface CalculateStrategy {\n    double execute(double[]... arrs);\n}\n",
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
                "value":" Next I implemented the strategy pattern",
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
                "value":".  The constructor takes a lambda expression that specifies the algorithm strategy.  Then the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"exec()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function executes the strategy with given inputs. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Calculate {\n    private CalculateStrategy strategy;\n\n    // On object creation specify which strategy (functional interface) to use\n    public Calculate(CalculateStrategy strategy) {\n        this.strategy = strategy;\n    }\n\n    // Execute the functional interfaces lambda expression implementation\n    public double exec(double[]... arrs) {\n        return strategy.execute(arrs);\n    }\n}\n",
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
                "value":" Finally I executed the strategy pattern with multiple different lambda expressions.  If I ever need to execute a strategy on multiple data sets, this pattern will help a lot with code reuse! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public static void main(String[] args) {\n    double[] miles = {2.12, 3.05, 3.05, 2.2, 6.3, 6.5};\n    double[] feel = {7,7,6,6,6,6};\n\n    // Calculate the total number of miles run\n    Calculate totalMilesCalculator = new Calculate((double[]... array) ->\n                                            DoubleStream.of(array[0]).sum());\n    System.out.println(totalMilesCalculator.exec(miles)); // 23.22\n\n    // Calculate the avg feel\n    Calculate avgFeelCalculator = new Calculate((double[]... array) ->\n                                        DoubleStream.of(array[0]).average().getAsDouble());\n    System.out.println(avgFeelCalculator.exec(feel)); // 6.33\n\n    // Calculate the avg feel for each mile run\n    Calculate avgFeelByMilesCalculator = new Calculate((double[]... array) -> {\n        double totalMiles = DoubleStream.of(array[0]).sum();\n        double milesXfeel = IntStream.range(0, array[0].length)\n                                .asDoubleStream()\n                                .map(i -> array[0][(int) i] * array[1][(int) i])\n                                .sum();\n        return milesXfeel / totalMiles;\n    });\n    System.out.println(avgFeelByMilesCalculator.exec(miles, feel)); // 6.22\n}\n",
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
                "value":" You can check out the full code for this example on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/01-Jan/1-15-Java8-Strategy-Pattern"
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

postName = "jan-15-2018-java8-strategy-pattern";
postDate = new Date('2018-01-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Java 8 Strategy Design Pattern",
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
            name: "Design Pattern"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Raoul-Gabriel Urma, Mario Fusco &amp; Alan Mycroft, ",
            endName: " (Shelter Island, NY: Manning, 2015), 192",
            linkName: "Java 8 In Action",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "\"Strategy pattern\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Strategy_pattern",
            link: "https://en.wikipedia.org/wiki/Strategy_pattern"
        },
        {
            startName: "",
            endName: ", 193",
            linkName: "Urma.",
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