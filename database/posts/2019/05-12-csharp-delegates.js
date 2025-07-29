/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/11/2019
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
                "value":" C# has an object called a delegate which is similar to lambda functions and functional interfaces in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=java&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A delegate object has a single role - calling a method.  This article explores delegates and compares them to similar language constructs in C# and Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Delegate Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Delegate Basics",
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
                "value":" C# has an object called a delegate which is similar to lambda functions and functional interfaces in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=java&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A delegate object has a single role - calling a method.  This article explores delegates and compares them to similar language constructs in C# and Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Delegate Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Delegate Basics",
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
                "value":" A delegate type defines the return type and parameters required for a function to be one of its instances",
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
                "value":".  For example, the following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Combiner",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" delegate must take in two integer arguments and return a single integer. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"delegate int Combiner(int x, int y);\n",
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
                "value":" The following two functions are compatible with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Combiner",
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
            "language":"C#"
        },
        "value":"static int Add(int x, int y) => x + y;\nstatic int Subtract(int x, int y) => x - y;\n",
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
                "value":" With the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Combiner",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" delegate and these basic functions, I created a basic gambling simulator.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Gamble",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method internally assigns the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Add",
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
                "value":"Subtract",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Combiner",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" delegate type. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"/// <summary>\n/// Method which uses the Combiner delegate internally.  Dynamically picks between the Add and Subtract methods\n/// at runtime, depending on a random number value.  This method simulates gambling money.\n/// </summary>\n/// <param name=\"balance\">Your total account balance.</param>\n/// <param name=\"risking\">The amount of money from your balance you are gambling.</param>\n/// <returns>Your new account balance.  Will either increase or decrease by the amount you gamble.</returns>\nstatic int Gamble(int balance, int risking)\n{\n  Random random = new Random();\n  int randomNumber = random.Next(0, 10);\n\n  Combiner combiner = (randomNumber >= 5) ? (Combiner) Add : Subtract;\n\n  return combiner(balance, risking);\n}\n\nstatic void Main(string[] args)\n{\n  /* Testing Program.cs */\n\n  int newBalance = Gamble(1000, 100);\n\n  // Gambling 100 dollars either increases or decreases your balance by 100 dollars\n  Assert(newBalance == 1100 || newBalance == 900);\n}\n",
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
                "value":" Delegates in C# and lambda functions in Java really shine when used with higher order functions. For example, the following code passes a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Transformer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" delegate as an argument to a ",
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
                "value":" function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"delegate int Transformer(int x);\n\n/// <summary>\n/// Performs a transformation on every element of the list.  Keeps the original list in-tact, returns a new\n/// list instance.\n/// </summary>\nstatic List<int> Map(List<int> list, Transformer transformer) => list.ConvertAll(x => transformer(x));\n\nstatic void Main(string[] args)\n{\n  // Create a function to assign to a delegate and a list of integers\n  int Doubler(int x) => x * 2;\n  var list = new List<int> {5, 10, 15, 20, 25, 31};\n\n  // Call the delegate function on every list item\n  var newList = Map(list, Doubler);\n\n  // Prove that the new list is mapped to new values\n  Assert(newList[0].Equals(10));\n  Assert(newList[5].Equals(62));\n\n  // Prove that the original list wasn't mutated\n  Assert(list[0].Equals(5));\n  Assert(list[5].Equals(31));\n}\n",
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
                "value":" So far, nothing I've shown you about delegates differentiates them from Java lambda functions and functional interfaces.  Both delegates and functional interfaces know how to call a function with a certain return value and parameter types.  For example, the following Java code maps values in a list with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Transformer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functional interface just like the last example. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"@FunctionalInterface\npublic interface Transformer {\n  Integer transform(Integer x);\n}\n\npublic class Delegates {\n\n  private static List<Integer> map(List<Integer> list, Transformer transformer) {\n    List<Integer> newList = new ArrayList<>(list);\n    newList.replaceAll(transformer::transform);\n    return newList;\n  }\n\n  public static void main(String ...args) {\n    Transformer transformer = x -> x * 2;\n    var list = List.of(5, 10, 15, 20, 25, 31);\n\n    var newList = map(list, transformer);\n\n    assert newList.get(0) == 10;\n    assert newList.get(5) == 62;\n\n    assert list.get(0) == 5;\n    assert list.get(5) == 31;\n  }\n}\n",
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
                "value":" If you weren't already aware, functional interfaces in Java are just interfaces with a single method. Java functional interfaces expose what the C# delegate pattern truly is - an interface that knows how to call a method.  Delegates are a shortened syntax for a single method interface.  You can easily write an interface in C# to perform the same logic as a delegate",
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
                "value":" Well… for the most part.  The similarities between delegates, functional interfaces, and interfaces breaks down in regards to multicasting. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Multicasting with Delegates"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Multicasting with Delegates",
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
                "value":" Multicasting is one of the most interesting aspects of Delegates in C#.  Multicasting is a form of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-6-2018-haskell-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"function composition",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" where the delegate invokes multiple functions.  Think of multicasting as a way of combining delegate instances together.  This pattern makes more sense with an example. ",
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
                "value":" The following code defines a delegate type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TransformerRef",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and two functions named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Increment",
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
                "value":"Triple",
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
            "language":"C#"
        },
        "value":"/// <summary>\n/// Same as the <code>Transformer</code> delegate except it uses ref returns and ref parameters.\n/// </summary>\ndelegate ref int TransformerRef(ref int x);\n\nstatic void Main(string[] args)\n{\n  // Create a function that increments an integer, using a single memory location\n  ref int Increment(ref int x)\n  {\n    x++;\n    return ref x;\n  }\n\n  // Create another function that triples an integer, using a single memory location\n  ref int Triple(ref int x)\n  {\n    x *= 3;\n    return ref x;\n  }\n}\n",
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
                "value":" These functions use ",
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
                "value":" return types and arguments so that the integer value is modified in place (at a single location in memory) instead of creating a new integer.  Both can be made instances of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TransformerRef",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"   delegate type. ",
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
                "value":" Now let's make a delegate instance with multicasting.  The following delegate instance combines ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Increment",
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
                "value":"Triple",
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
            "language":"C#"
        },
        "value":"// Create a delegate with two methods.  Increment is called first, Triple is called second\nTransformerRef transformer = Increment;\ntransformer += Triple;\n\n// Prove that integers are transformed in place\nvar i = 5;\ntransformer(ref i);\n\nAssert(i == 18);\n",
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
                "value":" The above code proved that the value ",
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
                        "value":"5",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is first increment and then tripled. ",
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
                "value":" Delegate instances with multicasting are easily modified after creation.  Let's say I want the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"transformer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" delegate instance to only triple the value.  To do this, I simply remove the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Increment",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// Remove the increment function from the delegate\ntransformer -= Increment;\n\n// Prove that the only transformation executed is Triple.\nvar j = 10;\ntransformer(ref j);\n\nAssert(j == 30);\n",
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
                "value":" Multicasting is a very powerful aspect of delegates in C#.  It helps separate them from patterns found in comparable languages like Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Built-In Delegate Types"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Built-In Delegate Types",
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
                "value":" Similar to how the Java standard library exposes multiple functional interfaces for use, C# provides delegate types in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"System",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" namespace.  These types can often be used instead of a custom type.  I recreated the commonly used ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Filter",
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
                "value":"Reduce",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions for the ",
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
                "value":" type using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"System.Func",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" delegate type.  That code is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2019/05-May/05-12-csharp-delegates/csharp/Util.cs"
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
            "title":"Similar C# Patterns"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Similar C# Patterns",
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
                "value":" One confusing thing about the C# language is the two arrow functions at a developers disposal. Without background knowledge, it's hard to decide which pattern to use in which context, and at worst it feels like feature bloat. Along with delegates, C# also offers lambda functions and local methods. It's important to understand the differences between these three options. ",
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
                "value":" As we've discussed, a delegate knows how to call one or many method(s).  It doesn't matter if this method is a standard function, lambda function, or local method.  They all work with delegates! ",
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
                "value":" A lambda function is a nameless function that uses the fat arrow syntax ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"args => result",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". It can take the place of a standard function in a delegate instance.  One of the limitations of lambda functions is that they must be assigned to a delegate type",
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
                "value":" With C# 7.0 (released in 2017), local methods were added.  Local methods are only visible in their ",
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
                        "value":"lexical scope",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Unlike lambda functions, local methods don't need to be assigned to a delegate type.  This gives them greater flexibility.  Otherwise, they use the same fat arrow syntax as lambda functions. ",
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
                "value":" In many cases local methods are the easiest approach since you don't have to define a delegate type.  However, in some cases delegate types are needed.  For example, only lambda functions can be passed as arguments to other functions. ",
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
                "value":" Delegates are a very interesting design pattern in C#.  I think they're an elegant simplification for the single method interface pattern.  I look forward to learning more about C# in the coming months.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\nblob/master/2019/05-May/05-12-csharp-delegates"
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

postName = "may-12-2019-csharp-delegates";
postDate = new Date('2019-05-12T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Delegate Objects in C#",
    description: `A delegate object has a single role - calling a method.  This article explores 
    delegates and compares them to similar language constructs in C# and Java.`,
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
            startName: "Joseph Albahari & Ben Albahari, ",
            endName: " (Sebastopol, CA: O'Reilly, 2018), 137",
            linkName: "C# 7.0 in a Nutshell",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "",
            endName: ", 142",
            linkName: "Albahari.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "",
            endName: ", 157",
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