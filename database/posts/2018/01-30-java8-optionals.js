/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/29/2018
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
                "value":" Everyone who has written code in Java (or most imperative and object oriented languages) knows the pain of dealing with ",
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
                "value":" values. ",
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
                "value":" values are especially painful in Java since they throw a ",
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
                "value":" whenever operations are performed on them.  When a ",
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
                "value":" is encountered, the usual fix is to perform a null check similar to the following code snippet: ",
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
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has other issues besides littering code with null checks. As explained in a book I read on Java 8, ",
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
                "value":" doesn't follow the statically typed system that Java uses",
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
                "value":".  It is an incorrect way to represent the absence of a value. ",
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
                "value":" Everyone who has written code in Java (or most imperative and object oriented languages) knows the pain of dealing with ",
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
                "value":" values. ",
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
                "value":" values are especially painful in Java since they throw a ",
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
                "value":" whenever operations are performed on them.  When a ",
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
                "value":" is encountered, the usual fix is to perform a null check similar to the following code snippet: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"String str = \"Hello\";\n\nif (str != null) {\n    hello.toUpperCase();\n}\n",
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
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has other issues besides littering code with null checks. As explained in a book I read on Java 8, ",
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
                "value":" doesn't follow the statically typed system that Java uses",
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
                "value":".  It is an incorrect way to represent the absence of a value. ",
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
                "value":" Java 8 added the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Optional<T>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class, which implements missing values in a statically typed manner. The ",
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
                "value":" object wraps a value, which can either be present or absent (an absent value is simply ",
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
                "value":").  Instead of using null checks, methods are invoked on the ",
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
                "value":" class. ",
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
                "value":" For this discovery I built an API in Java which utilizes optionals.  There are a couple methods in the ",
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
                "value":" class to go over before getting started: ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"empty",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"static Optional<T> empty()",
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
                "value":" Returns an empty ",
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
                "value":" instance.  Equivalent to a ",
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
                "value":" value in a statically typed setting. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// Represent an Optional with an absent value\nOptional<String> empty = Optional.empty();\nSystem.out.println(empty); // Optional.empty\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"of",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"static Optional<T> of(T value)",
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
                "value":" Wraps the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"value",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument in an ",
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
                "value":" object.  However, if ",
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
                "value":" is passed as an argument to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"of()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a ",
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
                "value":" is thrown.  Only use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"of()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" if the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"value",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument is guaranteed to exist. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// If the Optional value is present, perform the Consumer method reference\nOptional<String> present = Optional.of(\"I am not null!\");\npresent.ifPresent(System.out::println); // I am not null!\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"ofNullable",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"static Optional<T> ofNullable(T value)",
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
                "value":" Performs the same operation as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"of()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" except no error is thrown on an empty ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"value",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument.  In that case an empty ",
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
                "value":" object is returned. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"ifPresent",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"void ifPresent(Consumer<T> consumer)",
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
                "value":" If an optional's value is present, perform the actions specified by the consumer argument. The consumer argument can be a lambda function or method reference. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"isPresent",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"boolean isPresent()",
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
                "value":" Returns whether the optional's value exists. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"orElse",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"T orElse(T other)",
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
                "value":" If the optional's value exists, its value is returned.  Otherwise, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"other",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument is returned. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"athlete api"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Athlete API",
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
                "value":" Now let's take a quick look at the API I built.  The full code is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/01-Jan/1-30-Java8-Optionals/\noptionals"
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
            "title":"Required class"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Required",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class",
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
                "value":" The first thing I created was a helper class for handling values that should never be ",
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
                "value":".  When calling a getter or setter on a POJO, there is nothing stopping users from entering an empty value by default.  Validation logic can easily be added to ensure argument values exist.  If arguments are equal to ",
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
                "value":", an error can be thrown or a default value can be used.  Prior to Java 8 validation logic would likely contain null checks.  I don't want to litter the API with those! ",
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
                "value":" Instead I used optionals to check for existence.  The following helper class is used by my POJOs getters and setters.  These helper functions take input values as an argument.  If the input value is ",
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
                "value":" an error is thrown using a variation of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"orElse()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"orElseThrow()",
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
        "value":"public class Required<T> {\n\n    /**\n    * Validate that a value exists otherwise throw an error\n    * @param input - the value to check for existence\n    * @return The input value if it exists\n    */\n    public T error(T input) {\n        return Optional.ofNullable(input)\n            .orElseThrow(() -> new Error(\"Unable to Set Required Field to null\"));\n    }\n\n    /**\n    * Validate that a value exists otherwise throw an error\n    * @param input - the value to check for existence\n    * @param name - the name of the value for error messaging purposes\n    * @return The input value if it exists\n    */\n    public T error(T input, String name) {\n        return Optional.ofNullable(input)\n            .orElseThrow(() -> new Error(\"Unable to Set Required Field '\" + name + \"' to null\"));\n    }\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Athlete class"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Athlete",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class",
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
                "value":" The athlete class is the heart of the API.  It holds information such as an athletes name, age, team, personal records, and exercise history.  All of this information is contained in instance variables, some of which are optional. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Athlete {\n\n    // Instance variables exposed via getters and setters for the API\n    private String firstName;\n    private String lastName;\n    private Optional<Integer> age;\n    private Optional<String> team;\n\n    private ArrayList<Log> logs = new ArrayList<>();\n    private HashMap<String, String> prs = new HashMap<>();\n\n    ...\n}\n",
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
                "value":" My Intellij IDE complains about using ",
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
                "value":" for instance variables. This is because ",
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
                "value":" was not designed to be used as a field type. ",
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
                "value":" also does not implement the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Serializable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface, which could cause issues in some applications",
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
                "value":".  However, I fall among the group of developers that think using ",
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
                "value":"  with instance variables can greatly increase the readability of an API.  Just be aware of its limitations! ",
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
                "value":" Next I have two athlete constructors: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public Athlete(String firstName, String lastName) {\n    this.firstName = Optional.ofNullable(firstName).orElse(\"Foo\");\n    this.lastName = Optional.ofNullable(lastName).orElse(\"Bar\");\n}\n\npublic Athlete(String firstName, String lastName, Integer age) {\n    this.firstName = Optional.ofNullable(firstName).orElse(\"Foo\");\n    this.lastName = Optional.ofNullable(lastName).orElse(\"Bar\");\n    this.age = Optional.ofNullable(age);\n}\n",
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
                "value":" I wrapped the ",
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
                "value":" parameter in an ",
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
                "value":" because it's instance variable is of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Optional<Integer>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I assigned the other two parameters to concrete types.  First I checked if their values were empty, and if so provided default values.  This is where the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"orElse()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is utilized. ",
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
                "value":" After the constructors I have getters and setters for the instance variables.  Most of them are boring, but there are a few that utilize the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Required",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class I showed off earlier.  These setters check for argument value existence and throw an error if no value is found. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"private Required<String> requiredString = new Required<>();\nprivate Required<ArrayList<Log>> requiredArrayList = new Required<>();\nprivate Required<HashMap<String, String>> requiredHashMap = new Required<>();\n\npublic void setFirstName(String firstName) {\n    this.firstName = requiredString.error(firstName, \"firstName\");\n}\n\npublic void setLastName(String lastName) {\n    this.firstName = requiredString.error(lastName, \"lastName\");\n}\n\npublic void setLogs(ArrayList<Log> logs) {\n    this.logs = requiredArrayList.error(logs, \"logs\");\n}\n\npublic void setPrs(HashMap<String, String> prs) {\n    this.prs = requiredHashMap.error(prs, \"prs\");\n}\n",
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
                "value":" I also have a method for adding a personal record to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"prs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" hash map.  It utilizes short circuiting and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"isPresent()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method to add the a PR if both the arguments exist.  Finally it returns a boolean indicating if the value was added successfully. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/**\n* Add a new PR to the hash map for this athlete\n* @param event - the event name\n* @param time - the time of the PR\n* @return whether or not the PR was added\n*/\npublic boolean addPr(String event, String time) {\n\n    // Last get() is necessary because put() returns null if the keys previous value was null\n    return (Optional.ofNullable(event).isPresent() && Optional.ofNullable(time).isPresent() &&\n            (Optional.ofNullable(this.prs.put(event, time)).isPresent() ||\n             Optional.ofNullable(this.prs.get(event)).isPresent()));\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Main Class"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Main",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class",
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
                "value":" The main class executes the API.  I used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ifPresent()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method to print out the athletes 5000m PR if it exists. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public static void main(String... args) {\n    Athlete athlete = new Athlete(\"andy\", \"jarombek\");\n\n    athlete.setAge(Optional.of(22));\n\n    // athlete.setFirstName(null); - Unable to Set Required Field 'firstName' to null\n    athlete.setFirstName(\"andrew\");\n\n    // Check to see if adding PR's are successful\n    boolean validPR = athlete.addPr(\"5000m\", \"15:27\");\n    boolean invalidPR = athlete.addPr(null, \"15:27\");\n\n    System.out.println(\"Valid PR Succeeded: \" + validPR);\n    System.out.println(\"Invalid PR Succeeded: \" + invalidPR);\n\n    // Safely try and get a value from a map with Optionals\n    Optional<String> value = Optional.ofNullable(athlete.getPrs().get(\"5000m\"));\n    value.ifPresent(System.out::println);\n\n    System.out.println(athlete);\n\n    Athlete noNameAthlete = new Athlete(null, null);\n    System.out.println(noNameAthlete);\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Valid PR Succeeded: true\nInvalid PR Succeeded: false\n15:27\nAthlete(firstName=andrew, lastName=jarombek, age=Optional[22], prs={5000m=15:27} ...)\nAthlete(firstName=Foo, lastName=Bar, age=null, prs={}, ...)\n",
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
                "value":" I really like the new ",
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
                "value":" class in Java.  I'm already using it in some of my Java code! ",
                "children":null
            }
        ]
    }
];

postName = "jan-30-2018-java8-optionals";
postDate = new Date('2018-01-30T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Java 8 Optionals",
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
            endName: " (Shelter Island, NY: Manning, 2015), 228",
            linkName: "Java 8 In Action",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 240",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/java-8-in-action"
        },
        {
            startName: "",
            endName: ", 236",
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