/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/1/2018
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
                "value":" Reflection in Java was always a technique clouded in mystery for me.  There aren't many practical applications for reflection, so my personal code never really needed to use it.  It also didn't help that people often describe reflection as \"hard to learn\" and only for \"experienced developers.\"  It turns out reflection isn't that complicated, although questions still remain of its usefulness in building applications. ",
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
                "value":" Reflection is the combination of inspecting runtime elements of an application and modifying its runtime structure",
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
                "value":".  The first piece of this definition is more specifically referred to as type introspection. ",
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
                "value":" Reflection in Java was always a technique clouded in mystery for me.  There aren't many practical applications for reflection, so my personal code never really needed to use it.  It also didn't help that people often describe reflection as \"hard to learn\" and only for \"experienced developers.\"  It turns out reflection isn't that complicated, although questions still remain of its usefulness in building applications. ",
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
                "value":" Reflection is the combination of inspecting runtime elements of an application and modifying its runtime structure",
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
                "value":".  The first piece of this definition is more specifically referred to as type introspection. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Type Introspection"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The ability of a programming language to examine its objects at runtime.  Type introspection gives developers the ability to look at multiple aspects of objects at runtime, including the type, methods, instance variables, modifiers and more",
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
                "value":".  Examples of type introspection in Java include the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instanceof",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Class",
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
                "value":" Basic usage of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"instanceof",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator is to see if an object was instantiated as a certain type.  For example, the following code was run in JShell (the new Java REPL) to see what two different ",
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
                "value":" declarations were instantiated as. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"Object obj1 = new Object();\nobj1 instanceof Object\nobj1 instanceof String\n\nObject obj2 = \"Hello\";\nobj2 instanceof Object\nobj2 instanceof String\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"java.lang.Object obj1 = java.lang.Object@42595112\njava.lang.Boolean res1 = true\njava.lang.Boolean res2 = false\n\njava.lang.Object obj2 = \"Hello\"\njava.lang.Boolean res1 = true\njava.lang.Boolean res2 = true\n",
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
                "value":" This is a very basic example of type introspection.  To use type introspection along with the reflection API in Java, we have to utilize the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.Class",
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
        "el":"definition",
        "attributes":{
            "word":"Reflection"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Reflection is a programming language implementation and technique for inspecting and modifying the runtime structure of an application.  In Java, this runtime structure is the objects that make up a program.  To perform reflection in Java, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.Class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to inspect objects.  Classes that make up the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.reflect",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" package are used to modify and interact with these objects at runtime. ",
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
                "value":" Now that type introspection and reflection are clearly defined, I will demonstrate the  basic building blocks of reflection in Java. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Java Reflection"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Java Reflection",
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
                "value":" Let's say we created the string ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"1995\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as an object in Java. For starters we can perform type introspection on this object with the help of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Class",
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
        "value":"var string = \"1995\";\nClass objectClass = string.getClass();\n\n// Get the modifiers on the class\nString modifier = Modifier.toString(objectClass.getModifiers());\n\nSystem.out.println(modifier);\n\n// Get the super class of this class\nClass superClass = objectClass.getSuperclass();\n\nSystem.out.println(superClass.toString());\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"public final\nclass java.lang.Object\n",
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
                "value":" This is a very simple example of type introspection, but you can see the power (yet relative simplicity) of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.Class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  First the method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is called on the object. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is defined on ",
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
                "value":", allowing access to the runtime class of any object.  It provides a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance, allowing for type introspection. ",
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
                "value":" Once I have an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Class",
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
                "value":"getModifiers()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is called on the class instance.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getModifiers()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides the modifiers defined on the class.  ",
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
                "value":" is defined as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"public",
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
                "value":"final",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as shown in the output above. ",
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
                "value":" I also get the superclass of ",
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
                "value":" by calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getSuperclass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The superclass of ",
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
                "value":" is simply ",
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
                "value":" What if I wanted to do something a bit more involved.  For example, let's say I want to perform type introspection on a method of ",
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
                "value":" and then reflectively invoke it.  This can be done through Java's reflective API.  The following code searches for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"length()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method on the ",
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
                "value":" class through type introspection and then invokes it reflectively: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/**\n* Get a method from a class with specific parameters\n* @param objectClass the class to look for a method on\n* @param name what the method is defined as\n* @param parameterTypes types of all the parameters for a method\n* @return an {code Optional} with a method if the object contains the method.\n* Otherwise an empty {@code Optional} is returned.\n*/\nprivate static Optional<Method> getMethod(Class<?> objectClass, String name,\n                                                Class<?>... parameterTypes) {\n  try {\n    Method method = objectClass.getMethod(name, parameterTypes);\n    return Optional.of(method);\n  } catch (NoSuchMethodException e) {\n    return Optional.empty();\n  }\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"var string = \"1995\";\nClass objectClass = string.getClass();\n\nOptional<Method> method = getMethod(objectClass, \"length\", null);\n\nmethod.ifPresent(m -> {\n  try {\n    System.out.println(\"Result of length() invocation: \" + m.invoke(object, null));\n  } catch (Exception e) {\n    System.out.println(\"Error Invoking Method: \" + e.getLocalizedMessage());\n  }\n});\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Result of length() invocation: 4\n",
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
                "value":"getMethod()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to get the method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"length()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" from the class ",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getMethod()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Method",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a class in Java's reflection API.  From the official Java documentation, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Method",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" \"provides information about, and access to, a single method on a class or interface ",
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
                "value":".\"  Per the documentation, a call to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"invoke()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.reflect.Method",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" calls the method reflectively.  In the code above ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"length()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked reflectively, returning the expected value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Another thing you can do with type introspection is list all the methods in a class.  Then you could call these ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.reflect.Method",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instances reflectively.  The following code lists all the methods in the ",
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
                "value":" class. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"private static void listMethods(Object object) {\n  Class objectClass = object.getClass();\n  Method[] methods = objectClass.getMethods();\n\n  Arrays.stream(methods).forEach(System.out::println);\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"var year = \"1995\";\nlistMethods(year);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"public boolean java.lang.String.equals(java.lang.Object)\npublic int java.lang.String.length()\npublic java.lang.String java.lang.String.toString()\npublic int java.lang.String.hashCode()\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Constructing an Object Reflectively"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Constructing an Object Reflectively",
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
                "value":" When given an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.lang.Class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" you can construct a new object reflectively.  The following code attempts to construct objects and primitives, returning an empty ",
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
                "value":" if construction failed or an ",
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
                "value":" containing the instance if construction succeeded. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/**\n * Attempt to construct a new object reflectively with just the {@code Class} object\n * @param objectClass a class that we wish to construct an instance of\n * @return an {code Optional} with a new instance of a class if the construction is successful.\n * Otherwise an empty {@code Optional} is returned.\n */\nprivate static <T> Optional<T> constructReflectively(Class<T> objectClass) {\n  String isPrimitive = objectClass.isPrimitive() ? \"Constructing a Primitive\" : \"Constructing an Object\";\n  System.out.println(isPrimitive);\n\n  var optionalConstructor = getConstructor(objectClass);\n\n  if (optionalConstructor.isPresent()) {\n    return getInstance(optionalConstructor.get());\n  } else {\n    return Optional.empty();\n  }\n}\n\n/**\n * Get a constructor from a {@code Class} object\n * @param objectClass the class to look for the constructor on\n * @return an {code Optional} with a constructor if the constructor is found.\n * Otherwise an empty {@code Optional} is returned.\n */\nprivate static <T> Optional<Constructor<T>> getConstructor(Class<T> objectClass) {\n  try {\n    Constructor<T> constructor = objectClass.getDeclaredConstructor();\n    return Optional.of(constructor);\n  } catch (NoSuchMethodException e) {\n    System.out.println(\"Error Getting Constructor with Reflection: \" + e.getLocalizedMessage());\n    return Optional.empty();\n  }\n}\n\n/**\n * Create a new object instance with a constructor\n * @param constructor a constructor object instance from the reflection API to create a new instance with\n * @return an {code Optional} with an object instance if the constructor is invoked successfully.\n * Otherwise an empty {@code Optional} is returned.\n */\nprivate static <T> Optional<T> getInstance(Constructor<T> constructor) {\n  try {\n    var instance = constructor.newInstance();\n    return Optional.of(instance);\n  } catch (Exception e) {\n    System.out.println(\"Error Getting Instance with Reflection: \" + e.getLocalizedMessage());\n    return Optional.empty();\n  }\n}\n",
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
                "value":" Invoking the constructor fails for primitives, since they are not objects and don't have constructors.  The following code calls the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"constructReflectively()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method for different objects and primitives.  The instance of ",
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
                "value":" shows that an object constructed reflectively is no different than one constructed normally. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/* Reflectively construct a instance of String */\nvar optionalString = constructReflectively(String.class);\n\noptionalString.ifPresent(str -> System.out.println(str.length()));\n\n/* Reflectively construct a instance of primitive int */\nvar optionalInteger = constructReflectively(int.class);\n\noptionalInteger.ifPresent(i -> System.out.println(i.intValue()));\n\n/* Reflectively construct a instance of ArrayList */\nvar optionalArrayList = constructReflectively(ArrayList.class);\n\nif (optionalArrayList.isPresent()) {\n  var arrayList = (ArrayList<String>) optionalArrayList.get();\n  arrayList.add(\"hi\");\n  arrayList.add(\"what is up\");\n  System.out.println(arrayList.toString());\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Constructing an Object\n0\n\nConstructing a Primitive\nError Getting Constructor with Reflection: int.<init>()\n\nConstructing an Object\n[hi, what is up]\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Why use Reflection"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Why use Reflection?",
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
                "value":" So what use case does reflection even have?  The truth is there are very few.  Some examples of programs that use reflection are unit testing frameworks like JUnit and dependency injection frameworks",
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
                "value":".  While its good to have reflection techniques at your disposal, reflection in Java has many drawbacks that make it an unnecessary and poor practice in most cases. ",
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
                "value":" Method invocation through reflection is much slower than methods handled normally.  This is because the JVM can't perform certain optimizations on types that are dynamically resolved like those from the reflection API",
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
                "value":".  Also reflection can break encapsulation (the protection of private abstracted data), giving access to fields that are private to a class. ",
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
                "value":" Perhaps in the future I will play around with creating a meaningful prototype with reflection. All the code from this discovery is up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/07-jul/7-1-java-reflection/reflection/Reflect.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Github",
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

postName = "jul-1-2018-java-reflection";
postDate = new Date('2018-07-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Reflection in Java",
    description: `People often describe reflection as "hard to learn" and only for "experienced
            developers."  It turns out reflection isn’t that complicated, although questions still 
            remain of its usefulness in building applications.`,
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
            name: "Reflection"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Reflection (computer programming)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
            link: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)"
        },
        {
            startName: "Herbert Schildt, ",
            endName: ", 9th ed (New York: McGraw-Hill Education, 2014), 1001-1004",
            linkName: "Java: The Complete Reference",
            link: "https://www.mhprofessional.com/9780071808552-usa-java-the-complete-reference-ninth-edition-group"
        },
        {
            startName: "\"Class Method\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/10/docs/api/java/lang/reflect/Method.html",
            link: "https://docs.oracle.com/javase/10/docs/api/java/lang/reflect/Method.html"
        },
        {
            startName: "Joshua Bloch, ",
            endName: ", 3rd ed (Boston, MA: Pearson, 2018), 282",
            linkName: "Effective Java",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"Trail: The Reflection API\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/tutorial/reflect/",
            link: "https://docs.oracle.com/javase/tutorial/reflect/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});