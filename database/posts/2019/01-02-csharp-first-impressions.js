/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/30/2018
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
                "value":" I was recently told that my next project at work would be a .NET application using C# in the backend. C# has been on my radar for a while now, since it supports wide ranging applications such as .NET apps and Xamarin.  While C# supports multiple programming paradigms, its mostly used for object oriented programming.  C# is commonly referred to as a descendant of Java and C++",
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
                "value":", which is great for me since Java is my strongest language and I'm ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njan-3-2019-cpp-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"learning C++",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in parallel with C#. ",
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
                "value":" C# is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing#dynamic-&-static-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" statically typed",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with strict type rules (type coercion is rare)",
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
                "value":".  Programs in C# consist of executable and library files (with the ",
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
                        "value":".exe",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".dll",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file extensions, respectively).  C# is a compiled language, just like its ancestors C++ and Java. ",
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
                "value":" I was recently told that my next project at work would be a .NET application using C# in the backend. C# has been on my radar for a while now, since it supports wide ranging applications such as .NET apps and Xamarin.  While C# supports multiple programming paradigms, its mostly used for object oriented programming.  C# is commonly referred to as a descendant of Java and C++",
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
                "value":", which is great for me since Java is my strongest language and I'm ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\njan-3-2019-cpp-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"learning C++",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in parallel with C#. ",
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
                "value":" C# is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing#dynamic-&-static-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" statically typed",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with strict type rules (type coercion is rare)",
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
                "value":".  Programs in C# consist of executable and library files (with the ",
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
                        "value":".exe",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".dll",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file extensions, respectively).  C# is a compiled language, just like its ancestors C++ and Java. ",
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
                "value":" This article explores my initial reactions to the C# language after writing about 300 lines of code. Much of the article consists of language features I find cool and unique.  I also compare C# to other languages I use such as Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Similarities to Java"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Similarities to Java",
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
                "value":" The first thing I noticed when writing C# is how similar its syntax looks to Java.  For example, the first class I wrote represents a song. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"using System;\n\nnamespace Application\n{\n  internal class Song\n  {\n    private string artist;\n    private string name;\n    private DateTime releaseDate;\n    private string bestLyric;\n\n    public Song(string artist, string name, DateTime releaseDate, string bestLyric)\n    {\n      this.artist = artist;\n      this.name = name;\n      this.releaseDate = releaseDate;\n      this.bestLyric = bestLyric;\n    }\n\n    // Override object.ToString()\n    public override string ToString()\n    {\n      return base.ToString() + \": \" + artist + \" - \" + name;\n    }\n  }\n}\n",
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
                "value":" While namespaces are an influence of C++, the rest of the object looks like a Java POJO.  It even overrides the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ToString()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"object",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" superclass, which is the same as Java besides for some letter case differences. ",
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
                "value":" The main method also looks like Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"using System;\nusing System.Diagnostics;\n\nnamespace Application\n{\n  internal class Execute\n  {\n    // Same main method as Java\n    public static void Main(string[] args)\n    {\n      var bound2 = new Song(\"Kanye West\", \"Bound 2\", DateTime.Parse(\"08/28/2013\"), \"the entire song\");\n\n      Debug.Assert(bound2.ToString().Equals(\"ConsoleApplication.Song: Kanye West - Bound 2\"));\n    }\n  }\n}\n",
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
                "value":" While you can write C# code just like Java, there are a bunch of unique features to the language as well.  One of the differences I noticed early on was the shortened getter/setter syntax, which is much more elegant than Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"class Run\n{\n  public Run(string title, double? distance, Dictionary<string, int> time, DateTime date)\n  {\n    this.Title = title;\n    this.Distance = distance;\n    this.Time = time;\n    this.Date = date;\n  }\n\n  // Shorter property syntax\n  public string Title { get; private set; }\n  public double? Distance { get; private set; }\n  public Dictionary<string, int> Time { get; private set; }\n  public DateTime Date { get; private set; }\n}\n",
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
                "value":" The Java equivalent to this code includes a long list of getter and setter methods.  Java developers often use libraries such as Lombok to shorten getter/setter syntax, but a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/dec-7-2017-native-getter-setter"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"native solution",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is preferred. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Interesting Features"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Interesting Features",
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
                "value":" One of the newer features in C# is tuples, which are a great way to represent an arbitrary amount of data.  Tuples are one of my favorite Python features, so I'm glad to see other languages using them. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// C# has support for tuples\nvar name = (\"Andrew\", \"Jarombek\");\n\n// ...and tuples with named items\nvar info = (name: \"Andy\", age: 23);\n\n// While strings are reference types in C#, testing them for equality uses the value type '==' syntax\nAssert(name.Item1 == \"Andrew\" && name.Item2 == \"Jarombek\");\nAssert(info.name == \"Andy\" && info.age == 23);\n",
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
                "value":" In C# you can create variable identifiers with the same name as a reserved keyword.  I don't think any  other languages I use have this feature. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// You can create an identifier with a keyword if its prefixed with '@'\nvar @int = 5;\n\nAssert(@int == 5);\n",
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
                "value":"@",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token isn't part of the identifier, and can be removed if the name isn't a reserved keyword",
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
                "value":" C# also provides two different behaviors for numeric overflows.  Depending on whether the code block is checked or unchecked, numeric overflows throw an exception or wrap the value, respectively. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"\n// My C# execution config throws an OverflowException by default for number overflows.  Use an 'unchecked'\n// block to change this behavior.\nAssert(unchecked(int.MaxValue + 1) == int.MinValue);\n\n// Wrap the value around if a number overflows its max or min value.\nunchecked\n{\n  var minValue = int.MaxValue + 1;\n  var maxValue = int.MinValue - 1;\n\n  Assert(maxValue == int.MaxValue && minValue == int.MinValue);\n\n  // If you want an OverflowException to be thrown when a number overflows (or a compile time error),\n  // use a 'checked' block\n  Assert(checked(5 + 5 == 10));\n\n  // This code won't compile\n  // checked(int.MaxValue + 1);\n}\n",
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
                "value":" C# provides string interpolation syntax and multi-line strings, both of which are common in modern languages such as JavaScript, Swift, and Groovy.  These features are notably absent in Java and C++. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// Strings prefixed with '@' do not have escape sequences\nvar url1 = \"https:\\\\\\\\jarombek.com\";\nvar url2 = @\"https:\\\\jarombek.com\";\n\n// Strings prefixed with '$' are interpolated strings\nvar url3 = $\"https:\\\\\\\\{name.Item2.ToLower()}.com\";\nvar url4 = $@\"https:\\\\{name.Item2.ToLower()}.com\";\n\nforeach (var url in new string[] {url1, url2, url3, url4})\n{\n  Assert(url == @\"https:\\\\jarombek.com\");\n}\n\nvar multiLine = @\"\n  Hi there.\n  My name is Andy.\n\";\n",
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
                "value":" C# adds more features to arrays from C++ and Java.  For example, C# provides two types of multi-dimensional arrays: rectangular and jagged.  Rectangular arrays must be the same length in each dimension, while jagged arrays can be different lengths in the inner dimension.  While C# has explicit syntax to enforce rectangular arrays, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/01-Jan/\n01-02-csharp-first-impressions/basics/MultiArrays.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java has no such enforcement",
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
            "language":"C#"
        },
        "value":"// C# supports both rectangular multidimensional arrays ...\n// (rectangular arrays sizes are strictly enforced)\nint[,] rectangularArray =\n{\n  {1, 2},\n  {3, 4}\n};\n\n// and jagged multidimensional arrays\nint[][] jaggedArray =\n{\n  new int[] {1, 2},\n  new int[] {3, 4, 5},\n};\n\nAssert(!rectangularArray.Equals(jaggedArray));\nAssert(rectangularArray[1,1] == jaggedArray[1][1]);\nAssert(jaggedArray[1][2] == 5);\n",
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
                "value":" By default, variables are passed to functions by value in C# such that value-types are passed as a copy of the value and reference-types are passed as a copy of the reference.  Pass by value behavior can be changed to pass by reference with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ref",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  In C++ this behavior requires the use of pointers. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// Increment an integer (pass by value).\nstatic int Inc(int num)\n{\n  return num++;\n}\n\n// Increment an integer (pass by reference).\nstatic int IncRef(ref int num)\n{\n  return num++;\n}\n\npublic static void Main(params string[] args)\n{\n  var num = 26;\n\n  // Inc() doesn't mutate num, and returns the new value\n  var num2 = Inc(num);\n\n  Assert(num == 26);\n  Assert(num2 == 27);\n\n  // IncRef() mutates num\n  var num3 = IncRef(ref num);\n\n  Assert(num == 27);\n  Assert(num3 == 27);\n}\n",
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
                "value":" Function parameters can also use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"out",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword to declare an output parameter.  Output parameters are used to return multiple values from a function. Although I think tuples are a more elegant solution, output variables are also a viable option. The only other language I can think of that uses output parameters is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2019/01-Jan/01-02-csharp-first-impressions/basics/output-parameter.sql"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"PL/SQL",
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
            "language":"C#"
        },
        "value":"// Information about the class using output parameters\nstatic void Info(out string author, out DateTime date)\n{\n  author = \"Andrew Jarombek\";\n  date = DateTime.Parse(\"12/23/2018\");\n}\n\n// 'params' keyword allows for a variable number of arguments\npublic static void Main(params string[] args)\n{\n  // Call a method with output arguments.  Use a discard '_' to ignore certain output arguments.\n  Info(out string author, out _);\n\n  Assert(author == \"Andrew Jarombek\");\n}\n\n",
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
                "value":" C# also has operator level support for dealing with ",
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
                "value":" values. The null-coalescing and null-conditional operators present in C# are some of the most useful operators found in modern languages (",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/\n01-Jan/01-02-csharp-first-impressions/basics/null.swift"
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
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-sources/tree/master/2019/01-Jan/01-02-csharp-first-impressions/basics/null.php"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"PHP",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also have these operators). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"int? age = null;\n\n// Null coalescing operator\ndouble ageDouble = age ?? 0.0;\nAssert(ageDouble == 0.0);\n\n// Null conditional operator and null coalescing operator\nstring ageStr = age?.ToString() ?? \"Unknown\";\nAssert(ageStr == \"Unknown\");\n\nstring username = null;\n\n// Avoid NullReferenceException with null conditional operator\nvar upperUsername = username?.ToUpper();\n\nAssert(upperUsername == null);\n",
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
                "value":" While C# is influenced by Java and C++, it also includes many modern operations that I appreciate about languages such as Python, Swift, and Groovy.  I'm excited to learn more of what C# has to offer in the future.  All the code from this post is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/01-Jan/01-02-csharp-first-impressions"
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

postName = "jan-2-2019-csharp-first-impressions";
postDate = new Date('2019-01-02T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "C# First Impressions",
    description: `This article explores my initial reactions to the C# language after writing about 
        300 lines of code.  Much of the article consists of language features I find cool and unique.  I 
        also compare C# to other languages I use such as Java.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "C#",
            picture: "https://asset.jarombek.com/logos/csharp.png",
            color: "csharp"
        },
        {
            name: "Object Oriented Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"C Sharp (Programming Language) - cite note 6\", ",
            endName: "",
            linkName: "https://bit.ly/2Tjc3Zc",
            link: "https://bit.ly/2Tjc3Zc"
        },
        {
            startName: "Joseph Albahari & Ben Albahari, ",
            endName: " (Sebastopol, CA: O'Reilly, 2018), 2-3",
            linkName: "C# 7.0 in a Nutshell",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "",
            endName: ", 19",
            linkName: "Albahari.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});