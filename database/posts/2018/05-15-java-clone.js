/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/14/2018
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
                "value":" A common problem when programming is performing a deep copy of an object or data structure.  In many languages this is a complex problem, especially when the object gets large.  In Java there are many different ways to perform a deep copy on an object.  The original language implementation for copying was the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface.  Since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was the first method for copying objects in Java, it is important to understand how it works along with all its shortcomings.  This is my journey to understand Java’s ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface in all its complexity. ",
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
                "value":" If you've ever heard or read about Java’s ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface you likely were told the following three words: ",
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
                        "value":"Don’t Use It",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This is good advice, as there are many simpler ways to implement deep copying.  Unfortunately there is a lot of code in existence that already uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  To understand how it works, first let’s look at the source code for the interface: ",
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
                "value":" A common problem when programming is performing a deep copy of an object or data structure.  In many languages this is a complex problem, especially when the object gets large.  In Java there are many different ways to perform a deep copy on an object.  The original language implementation for copying was the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface.  Since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was the first method for copying objects in Java, it is important to understand how it works along with all its shortcomings.  This is my journey to understand Java’s ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface in all its complexity. ",
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
                "value":" If you've ever heard or read about Java’s ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface you likely were told the following three words: ",
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
                        "value":"Don’t Use It",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This is good advice, as there are many simpler ways to implement deep copying.  Unfortunately there is a lot of code in existence that already uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  To understand how it works, first let’s look at the source code for the interface: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public interface Cloneable { }\n",
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
                "value":" Yes that is it.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an empty interface that defines no methods.  While it may seem based off the interface definition that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does nothing, it actually does quite a lot.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines the implementation details of one of the methods on the ",
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
                "value":" class.  This method I'm referring to is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
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
                "value":"protected",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method as shown below",
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
        "value":"@HotSpotIntrinsicCandidate\nprotected native Object clone() throws CloneNotSupportedException;\n",
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
                "value":" There are a couple of interesting things to note about ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". First off it has no method body and is defined with the keyword ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"native",
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
                "value":"native",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword means that the method is implemented using the Java Native Interface (JNI).  This means the method body is not written in Java, instead implemented in another language such as C, C++, or Assembly",
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
                "value":".  The reason for this is writing code in a low level, machine specific language increases performance. ",
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
                "value":" Another important piece of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@HotSpotIntrinsicCandidate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotation. This annotation allows the HotSpot VM (an implementation of the Java Virtual Machine) know that the method implementation may be an intrinsic function",
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
        "el":"definition",
        "attributes":{
            "word":"Intrinsic Function"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A function that a programming language uses which is handled by the compiler instead of the programming languages runtime environment",
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
                "value":".  In other words - an optimized method definition by the compiler is used, replacing the one in the programming languages library",
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
                "value":".  Intrinsic functions are used as an optimization technique. ",
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
                "value":" If there is one thing to take away from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"native",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@HotSpotIntrinsicCandidate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotation it's that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is not handled by the Java language itself.  As Joshua Bloch, creator of the Java Collections framework says, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is extralinguistic.  It does not follow Java’s rules. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Extralinguistic"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Outside the bounds of a language.  In Java something that is extralinguistic is outside the rules enforced by the language. ",
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
                "value":" An interface with no defined methods should not be able to change a method implementation in another class. However ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does just that.  If a class implements ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method performs a deep copy on the object.  If a class does not implement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
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
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" throws a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CloneNotSupportedException",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This should not be a legal Java operation and is downright confusing. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Implementing Cloneable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Implementing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Cloneable",
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
                "value":" Here is a simple class I made in Java representing a programming language.  It contains three fields - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name",
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
                "value":"inception",
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
                "value":"paradigms",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It also has getters and setters along with a method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"addParadigm()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which mutates the list of paradigms by adding a new paradigm. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public class Language implements Cloneable {\n\n    private String name;\n    private LocalDate inception;\n    private List<Paradigm> paradigms;\n\n    enum Paradigm {\n        Object_Oriented, Imperative, Functional, Declarative\n    }\n\n    public Language(String name, LocalDate inception, List<Paradigm> paradigms) {\n        this.name = name;\n        this.inception = inception;\n        this.paradigms = new ArrayList<>(paradigms);\n    }\n\n    @Override\n    public String toString() {\n        return \"[\" + name + \", \" + inception.toString() + \", \" + paradigms.toString() + \"]\";\n    }\n\n    /* Getters and Setters */\n\n    // Add a paradigm to the list if a non null value is passed in\n    public void addParadigm(Paradigm paradigm) {\n        Optional.ofNullable(paradigm).ifPresent(p -> this.paradigms.add(p));\n    }\n}\n",
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
                "value":" Here is my first attempt at overriding the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"@Override\nprotected Language clone() {\n    try {\n        return (Language) super.clone();\n    } catch(CloneNotSupportedException ex) {\n        throw new AssertionError();\n    }\n}\n",
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
                "value":" Interestingly, the cast to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(Language)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" always succeeds. On the other hand, the catch clause is never reached since we implemented ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", however it must be included since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" throws a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CloneNotSupportedException",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If you are thinking to yourself this doesn’t make much sense I agree wholeheartedly.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface does not follow the rules that the rest of Java enforces. ",
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
                "value":" I created a ",
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
                "value":" instance to try cloning. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"\nLanguage language = new Language(\"Java\", LocalDate.of(1995, Month.MAY, 23),\n                            List.of(Language.Paradigm.Object_Oriented,\n                                    Language.Paradigm.Imperative));\n\nLanguage language2 = language.clone();\n\nSystem.out.println(language);\nSystem.out.println(language2);\n\n// Name is immutable and Inception is a final singleton, so changing them\n// has no impact on the copied language\nlanguage.setName(\"Prolog\");\nlanguage.setInception(LocalDate.EPOCH);\n\n// This mutation will effect the copy\nlanguage.addParadigm(Language.Paradigm.Declarative);\n\nSystem.out.println(language);\nSystem.out.println(language2);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Before Mutation\n[Java, 1995-05-23, [Object_Oriented, Imperative]]\n[Java, 1995-05-23, [Object_Oriented, Imperative]]\n\n# After Mutation\n[Prolog, 1970-01-01, [Object_Oriented, Imperative, Declarative]]\n[Prolog, 1970-01-01, [Object_Oriented, Imperative, Declarative]]\n",
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
                "value":" Adding an item to the paradigm list in the first ",
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
                "value":" instance actually impacts the cloned instance.  This is because ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not make a deep copy of each field in an object.  It simply copies the value assigned to the field into the clone.  In the case of an object, the copied value is a reference to the object.  Altering the object the reference points to changes the value in both the original and cloned instances.  Of course this is never an issue if object fields are immutable objects (which both ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LocalDate",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are). ",
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
                "value":" To prevent mutations I added another line to the clone method.  This time a new instance of the ",
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
                "value":" is created in each clone. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"@Override\nprotected Language clone() {\n    try {\n        Language language = (Language) super.clone();\n        language.paradigms = new ArrayList<>(paradigms);\n        return language;\n    } catch(CloneNotSupportedException ex) {\n        throw new AssertionError();\n    }\n}\n",
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
                "value":" Now the clone is not modified: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Before Mutation\n[Java, 1995-05-23, [Object_Oriented, Imperative]]\n[Java, 1995-05-23, [Object_Oriented, Imperative]]\n\n# After Mutation\n[Prolog, 1970-01-01, [Object_Oriented, Imperative, Declarative]]\n[Java, 1995-05-23, [Object_Oriented, Imperative]]\n",
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
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface is very confusing and does not follow the rules of Java.  Therefore it is encouraged to avoid implementing it in your classes.  To make matters worse, if an extendable class implements ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" all its subclasses have to implement it as well",
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
                "value":".  If the extendable class is client facing, other developers may have to endure implementing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
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
            "title":"Alternatives to Cloneable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Alternatives to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Cloneable",
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
                "value":" Since we know that implementing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a bad idea, what are the alternatives?  The two best choices for copying an object are copy constructors and copy static factories.  Both take an existing object as an argument and return a copy of that object. They can be used together, as shown below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/* Copy Constructor */\npublic Language(Language language) {\n    this.name = language.name;\n    this.inception = language.inception;\n    this.paradigms = new ArrayList<>(language.paradigms);\n}\n\n/* Copy Static Factory Method */\npublic static Language create(Language language) {\n    return new Language(language);\n}\n",
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
                "value":" Copy constructors and copy static factories are within the bounds of the Java language, making them excellent alternatives.  Use them! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Valid uses of clone"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Valid uses of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"clone()",
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
                "value":" Because the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface has been in Java since version 1.0, you are likely to see code that uses it.  There are indeed some use cases of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that are quite useful.  One of the use cases is copying an array.  Using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is generally the fastest way to copy an array, and is the recommended approach",
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
        "value":"String[] strings = new String[2];\nstrings[0] = \"Whats\";\nstrings[1] = \"Up\";\n\nString[] stringsCopy = strings.clone();\n",
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
                "value":" Remember that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"clone()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does not perform a deep copy on objects within a class or array.  If you mutate an object within a class or array that was cloned, the mutation occurs in both the original and the copy. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"Language[] languages = new Language[2];\n\nlanguages[0] = new Language(\"Java\", LocalDate.of(1995, Month.MAY, 23),\n                    List.of(Language.Paradigm.Object_Oriented,\n                            Language.Paradigm.Imperative));\n\nlanguages[1] = new Language(\"JavaScript\", LocalDate.of(1995, Month.DECEMBER, 4),\n                    List.of(Language.Paradigm.Object_Oriented,\n                            Language.Paradigm.Imperative,\n                            Language.Paradigm.Functional));\n\n// Clone array of mutable languages\nLanguage[] languagesCopy = languages.clone();\n\nSystem.out.println(Arrays.toString(languages));\nSystem.out.println(Arrays.toString(languagesCopy));\n\n// Change the date Java was created to the epoch\nlanguagesCopy[0].setInception(LocalDate.EPOCH);\n\nSystem.out.println(Arrays.toString(languages));\nSystem.out.println(Arrays.toString(languagesCopy));\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Before Mutation\n[[Java, 1995-05-23, [Object_Oriented, Imperative]], ...]\n[[Java, 1995-05-23, [Object_Oriented, Imperative]], ...]\n\n# After Mutation - Both Arrays are Impacted\n[[Java, 1970-01-01, [Object_Oriented, Imperative]], ...]\n[[Java, 1970-01-01, [Object_Oriented, Imperative]], ...]\n",
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
                "value":" Yet another reason to use immutable objects! ",
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
                "value":" That is all I have to share on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Cloneable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface, its strange behavior, and the alternatives.  The code used for this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2018/05-May/5-15-Java-Clone/clone"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Github",
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

postName = "may-15-2018-java-clone";
postDate = new Date('2018-05-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "The Curious Case of Java's Clone Method",
    description: `The original language implementation for copying in Java was the Cloneable interface.  
                    This is my journey to understand Java’s Cloneable interface in all its complexity.`,
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
            name: "Inheritance"
        }
    ], 
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Joshua Bloch, ",
            endName: ", 3rd ed (Boston, MA: Pearson, 2018), 58",
            linkName: "Effective Java",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"JNI\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/6/docs/technotes/guides/jni/spec/intro.html#wp9502",
            link: "https://docs.oracle.com/javase/6/docs/technotes/guides/jni/spec/intro.html#wp9502"
        },
        {
            startName: "\"jdk9-dev\", ",
            endName: "",
            linkName: "https://github.com/netroby/jdk9-dev/blob/master/jdk/src/java.base/share/classes/jdk/internal/HotSpotIntrinsicCandidate.java",
            link: "https://github.com/netroby/jdk9-dev/blob/master/jdk/src/java.base/share/classes/jdk/internal/HotSpotIntrinsicCandidate.java"
        },
        {
            startName: "\"Intrinsic function\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Intrinsic_function",
            link: "https://en.wikipedia.org/wiki/Intrinsic_function"
        },
        {
            startName: "\"What are intrinsics?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/2268599",
            link: "https://stackoverflow.com/a/2268599"
        },
        {
            startName: "",
            endName: ", 65",
            linkName: "Bloch.",
            link: "https://www.safaribooksonline.com/library/view/effective-java-third/9780134686097/"
        },
        {
            startName: "\"Copy Constructor versus Cloning\", ",
            endName: "",
            linkName: "https://www.artima.com/intv/bloch13.html",
            link: "https://www.artima.com/intv/bloch13.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});