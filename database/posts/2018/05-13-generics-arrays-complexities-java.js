/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/12/2018
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
                "value":" Usually when I work in Java generics are easy to reason about.  They enforce types on a collection or a class I created.  When declaring a class with a generic, an instance of that class can be parameterized with one (or more) element types.  A simple example is an ",
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
                "value":", which is implemented with a generic parameter like so: ",
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
                "value":" Note that ",
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
                "value":" extends ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AbstractList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and implements ",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AbstractList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" actually implements ",
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
                "value":" itself, so the definition of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"implements <List>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not needed.  It is only there for clarity and readability. ",
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
                "value":" Usually when I work in Java generics are easy to reason about.  They enforce types on a collection or a class I created.  When declaring a class with a generic, an instance of that class can be parameterized with one (or more) element types.  A simple example is an ",
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
                "value":", which is implemented with a generic parameter like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"\npublic class ArrayList<E> extends AbstractList<E> implements List<E> {\n    ...\n}\n",
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
                "value":" Note that ",
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
                "value":" extends ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AbstractList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and implements ",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AbstractList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" actually implements ",
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
                "value":" itself, so the definition of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"implements <List>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not needed.  It is only there for clarity and readability. ",
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
                "value":" You can create an instance of an ",
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
                "value":" with a type: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"List<Number> numberList = new ArrayList<Number>();\n\n// Java 7 introduced the diamond operator, allowing the\n// compiler to infer the type based on the definition\nList<Number> numberList2 = new ArrayList<>();\n",
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
                "value":" Easy right?  But what happens if I change the generic assignment to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?  My first thought was it should work, since  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a subclass of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
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
        "value":"List<Number> n2 = new ArrayList<Integer>(); // Incompatible Types\n",
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
                "value":" This code actually fails, saying that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
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
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are incompatible types.  This is because of a unique implementation detail of generics.  Generics are invariant, meaning that two generic type parameters are neither supertypes or subtypes of one another.  That means ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List<Integer>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not a subtype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List<Number>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", they are simply not equal.  Therefore, the above assignment statement is invalid. ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"February 3rd, 2019"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" While generics are invariant by default in C#, they can also be covariant and contravariant.  I wrote an article about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-3-2019-variance-csharp-generics"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Variance with C# Generics",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" It is important to note that object assignments still enable polymorphism when using generics.  In the example above an ",
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
                "value":" was still assigned to a ",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Covariant"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When a programming language type system allows variables to be assigned any type less than (subtype) or equal to the variables declared type",
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
                "value":".  In Java, obviously a type ",
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
                "value":" can be assigned to a variable defined as type ",
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
                "value":" such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List<Object> list = new List<>();",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This follows the second part of the rule when the types are equal. You can also assign any subtype of ",
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
                "value":".  This follows the first part of the rule.  Arrays in Java are also covariant such that the following assignment is legal: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number[] array = new Integer[1];",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Contravariant"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When a programming language type system allows variables to be assigned any type greater than (supertype) or equal to the variables declared type.  Java is not contravariant and the compiler throws an error when a supertype is assigned to a declaration. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Invariant"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When a type in a programming language is neither a supertype or subtype of any other type.  In Java generics follow invariance, so a generic type assignment can only correspond to a generic type declaration of the same type. For example the following assignment is valid: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List<Number> numberList = new ArrayList<Number>();",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The work around for generics invariance is generic wildcards. ",
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
                "value":" Unlike generics, arrays are covariant.  This sounds nice but can lead to issues around type safety. Let's look at one of the issues with covariant arrays in Java: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// Will Compile and Run, but throws a java.lang.ArrayStoreException\nNumber[] array = new Integer[1];\narray[0] = 1.6;\n",
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
                "value":" What happens here is you can assign an array a value of any subtype.  However, when the array was initialized it was given the type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  While ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1.6",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a valid number, it is not a valid integer.  Therefore we get an unfortunate exception at runtime.  Note that the code above compiles cleanly - the error is only noticeable when running the program.  At that point its too late! ",
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
                "value":" Generics were designed (unlike arrays) to spot errors at compile time.  Therefore type safety is ensured before running a program.  The big difference between generics and arrays is that generics implement erasure and are non-reifiable while arrays are reified.  Because of these differences arrays and generics do not mix well.  In fact, if you try to mix them it will not work. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/* You can't mix generics and arrays - the following are illegal */\nList<Number>[] arr1 = new ArrayList<>()[10];\nList<?>[] array = new ArrayList<String>[10];\n",
        "children":null
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Reified"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Something abstract that is made more concrete or real.  In terms of programming languages a reified variable is one that knows its type at runtime and doesn't lose any type information at runtime.  The type is 'real' while the program is executing.  In Java, variables that are reified know their type and also enforce it at runtime. Arrays are reified - they enforce their type at runtime and don't complain at compile time. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Non-Reifiable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The opposite of reified - something abstract which is not made concrete.  In a programming language a non-reifiable variable is one that does not know or enforce its type at runtime (its type is abstract, not concrete)",
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
                "value":".  It only knows it's type at compile time.  Therefore, it looses information about itself when it is compiled.  Although we don't know a generics type at runtime, we know its type safe because it passed a compile time check. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Erasure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The process of removing type constraints when code is compiled.  When a variable is implemented with erasure, its type is checked at compile time and not at runtime",
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
                "value":".  At runtime it does not know what type it is.  This is how generics are implemented in Java. ",
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
                "value":" The fact that generics are non-reifiable means only type safe code can compile.  It is impossible to check the type safety of generics at runtime!  The sooner a developer knows something is wrong with their code the better. Generics follow this philosophy elegantly. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Wildcards"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Wildcards",
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
                "value":" When dealing with generic wildcards a lot of interesting behavior occurs.  There are two types of wildcards -  unbounded and bounded.  Unbounded wildcards are of any type, while bounded wildcards are of any type within a specified class hierarchy. ",
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
                "value":" The problem with assigning generic instances to an unbounded wildcard type is its impossible to know the type at runtime (it could be an instance of any class!).  This uncertainty means a lot of operations are not allowed since they are not type safe.  Luckily errors for these scenarios occur at compile time.  Take an example of unbounded wildcard lists: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"List<?> uwList = new ArrayList<>();\nList<?> uwList2 = new ArrayList<Integer>();\n\n/* Invalid operation */\nuwList.add(\"hi\");\n\n/* Invalid operation */\nuwList2.add(1);\n\nList<?> uwList3 = new ArrayList<String>(List.of(\"hi\", \"there\"));\n\n/* Invalid operation */\nString hi = uwList3.get(0);\n\n/* Valid operations */\nvar hi = uwList3.get(0);\nObject there = uwList3.get(1);\n",
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
                "value":" In the previous code both adding to lists and assigning a list element to a type variable are disallowed.  Adding to an unbounded generic list is illegal because its impossible to know if a value of the correct type is added.  Similarly there is no guarantee that a declared variable type is equal to the type of an unbounded generic list.  Therefore both these operations are disallowed. ",
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
                "value":" However you can assign a list element to a variable of type ",
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
                "value":" or use Java 10's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"var",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. ",
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
                "value":" Interestingly unbounded wildcards are reified (unlike all other generics) in the sense that they don't lose any type information at runtime.  However this does not mean they know their type at runtime.  The truth is unbounded wildcards never know their type (even at compile time), so there is no type information to lose in the first place!",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"4",
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
                "value":" Interesting behavior spills over into bounded wildcards: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"List<? extends Number> n4 = new ArrayList<Number>();\nList<? extends Number> n5 = new ArrayList<Integer>();\nList<? extends Number> n6 = new ArrayList<Object>(); // ERROR: Incompatible Types\n\nList<? extends Number> numbers = new ArrayList<>(List.of(1,4,6));\n\n/* Invalid operation */\nnumbers.add(1);\n\n/* Valid operation */\nNumber number = numbers.get(1);\n",
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
                "value":" The syntax ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List<? extends Number>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a generic type of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or any subtype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
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
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In the code above assigning the subtype ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is valid but assigning the supertype ",
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
                "value":" is not. ",
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
                "value":" The confusing part is what comes next.  Adding another integer to the list fails.  This is because its impossible to guarantee that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"numbers",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is actually a list of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", even though it was assigned ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" values.  If you think about it this makes sense.  The list can be a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or any subclass.  This means that is could be an integer, but it also could be a double, float, or some other complex number type.  There is simply no way of guaranteeing type safety, and once the code is compiled all type information is lost. ",
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
                "value":" However, it is known that the value of a list element is of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or any of its subtypes.  Therefore it is valid to assign a list element to type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
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
                "value":" Another kind of unbounded wildcard works with supertypes: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"List<? super Number> n7 = new ArrayList<Number>();\nList<? super Number> n8 = new ArrayList<Integer>(); // ERROR: Incompatible Types\nList<? super Number> n8 = new ArrayList<Object>();\n\nList<? super Number> nums = new ArrayList<>(List.of(5, 6, 7));\n\n/* Valid operation */\nnums.add(8);\n\n/* Invalid operation */\nNumber num = nums.get(1);\n",
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
                "value":" The syntax ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"List<? super Number>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a generic type of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or any supertype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
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
                "value":"Object",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". In the code above using the supertype ",
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
                "value":" for the assignment is valid but using the subtype ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not. ",
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
                "value":" Adding to the list works without error because an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is always a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" or any of its supertypes (such as ",
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
                "value":").  Thanks to polymorphism, an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Integer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and an ",
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
                "el":"#text",
                "attributes":null,
                "value":" The type in the list still isn't guaranteed, and for that reason a list item can't be assigned to type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  For example, if the list contains ",
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
                "value":" values the assignment statement is invalid - an ",
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
                "value":" is not a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Number",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Wrapping Up"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Wrapping Up",
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
                "value":" There are a lot of different complexities with generics and how they differ from arrays. I never fully understood these quirks with generics, so I am happy I did a deep dive on the topic.  All the code from this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\nblob/master/2018/05-May/5-13-Generics-Arrays-Complexities-Java/Main.java"
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

postName = "may-13-2018-generics-arrays-complexities-java";
postDate = new Date('2018-05-13T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Complexities of Generics and Arrays in Java",
    description: `There are a lot of different complexities with generics and how they differ from arrays.  
                    This is my journey to understand Java’s Generics in depth.`,
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
            name: "Generics"
        },
        {
            name: "Inheritance"
        },
        {
            name: "Polymorphism"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Covariance and contravariance (computer science)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)",
            link: "https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)"
        },
        {
            startName: "Joshua Bloch, ",
            endName: ", 3rd ed (Boston, MA: Pearson, 2018), 127",
            linkName: "Effective Java",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "",
            endName: ", 126",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"Java Generics - What's really in a unbounded wildcard?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/7796793",
            link: "https://stackoverflow.com/a/7796793"
        },
        {
            startName: "\"How can I add to List<? extends Number> data structures?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/2777297",
            link: "https://stackoverflow.com/a/2777297"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});