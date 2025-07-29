/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 2/1/2019
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
                "value":" Variance amongst generics in programming languages is a topic that interests me. ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Generics in Java",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are always ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java#invariant"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" invariant",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", however C# isn't as restrictive, making it fun to explore.  Since variance is an advanced topic, this article starts with the basic concepts of variance.  Once the basics are understood, I'll explain variance in C# generics. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Concepts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Concepts",
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
                "value":" Variance amongst generics in programming languages is a topic that interests me. ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Generics in Java",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are always ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java#invariant"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" invariant",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", however C# isn't as restrictive, making it fun to explore.  Since variance is an advanced topic, this article starts with the basic concepts of variance.  Once the basics are understood, I'll explain variance in C# generics. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Concepts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Concepts",
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
                "value":" Variance is a form of polymorphism.  Therefore, we need to understand the different forms of polymorphism to understand variance. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Polymorphism"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Something that is polymorphic can exist in many different forms.  In computer science, polymorphism is when an entity can take the form of multiple different types",
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
                "value":".  A type is a blueprint for a value, the same way a class is a blueprint for an object",
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
                "value":" Polymorphism comes in many different forms.  When Christopher Strachey first defined polymorphism in a Computer Science context, he said there were two main forms of polymorphism: ad-hoc and parametric",
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
                "value":".  Nowadays its agreed upon that the two main forms of polymorphism are ad-hoc and universal, with parametric falling under universal",
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
        "el":"comparisontable",
        "attributes":{
            "title":"Main Polymorphism Forms"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Ad-hoc Polymorphism",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Ad-hoc Polymorphism is when a function or method works with arguments of multiple different types. Therefore it can be said that the function arguments are polymorphic.  Depending on the argument types, the behavior of the function can be completely different",
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
                                        "value":".  The most common forms of Ad-hoc polymorphism are ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://jarombek.com/blog/jul-29-2018-overloading"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"function overloading",
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
                                                "value":"operator overloading",
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
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Universal Polymorphism",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Universal polymorphism consists of symbols that accept an infinite number of different types",
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
                                        "value":". Acceptable types can exist within a certain range or encompass the entire languages type system. The most common forms of universal polymorphism are ",
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
                                                "value":"inclusion polymorphism",
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
                                                "value":"parametric polymorphism",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  A synonym for inclusion polymorphism is ",
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
                                                "value":"variance ",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  An example of parametric polymorphism is ",
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
                                                "value":"generics",
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
                        ]
                    }
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
                "value":" When using generics, we deal with universal polymorphism.  While generics are an implementation of parametric polymorphism, variance means the same thing as inclusion polymorphism. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Universal Polymorphism Implementations"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Generics",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Generic types expose type parameters which are filled in by creators and consumers of the type instances.  Type parameters are symbols that accept a range of different types.  For example, in C# the syntax ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"<...>",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" is used next to the class identifier to define a generic type.  For example, the ",
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
                                        "value":" class is defined ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"List<T>",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", where ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"T",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" is the type parameter.  Instances of the type fill in the type parameter with any type argument, such as ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"new List<int>();",
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
                                        "value":"new List<string>();",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":". ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Variance",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" Variance describes the relationship between a compile time type and its assigned runtime type. Variance also limits the valid relationships between compile time and runtime types.  There are three forms of variance: ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java#covariant"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":" covariance",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java#contravariant"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":" contravariance",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", and ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java#invariant"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":" invariance",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  Types are covariant when the runtime type can be a subtype or the same type as the compile time type.  Types are contravariant when the runtime type can be a supertype or the same type as the compile time type.  Types are invariant when the compile time type and runtime type must be the same type.  When types are invariant, different types have no relationship to one another.  When types are contravariant or covariant, clear relationships between different types are declared. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
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
                "value":" In C#, non-generic types follow covariance.  Therefore, the assigned value of a variable declaration can be a subtype or the same type as the declared type.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"object myObj;",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be assigned to the same type (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"object()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") or a subtype (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"a string literal\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"object myObj1 = new object();\nobject myObj2 = \"a string literal\";\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Variance in C# Generics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Variance in C# Generics",
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
                "value":" By default, generics in C# are invariant.  Therefore the compile time and runtime type parameters must be the same. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// valid\nList<string> list1 = new List<string>();\n\n// ERROR: invalid\nList<object> list2 = new List<string>();\n",
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
                "value":" This behavior is the same as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Java",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  However, C# provides us with the flexibility to give generics variance. ",
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
                "value":" As of C# 4.0, generic type parameters can be made covariant or contravariant with interfaces",
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
                "value":". To make a type parameter covariant, it must be marked with the ",
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
                "value":" modifier.  To make a type parameter contravariant, it must be marked with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"in",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" modifier",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"8",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I defined an interface with one contravariant type parameter and one covariant type parameter. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"public interface ICovariant<in TK, out TV>\n{\n  TV Get(TK key);\n  TV Pop(TK key);\n}\n",
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
                "value":"TK",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type parameter is contravariant and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TV",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type parameter is covariant.  Contravariant types with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"in",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" modifier can only be passed in to a method and can't be returned by a method.  Covariant types with the ",
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
                "value":" modifier can only be returned by a method and can't be used as a method argument. ",
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
                "value":" With ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ICovariant",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defined, I created a class ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VariantMap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which implements ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ICovariant",
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
        "value":"public class VariantMap<TK, TV> : ICovariant<TK, TV> {}\n",
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
                "value":" Finally I proved that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TK",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is contravariant and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TV",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is covariant. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// Program.cs\n\n// Map that uses variance\nICovariant<string, object> variantMap = new VariantMap<object, string>((\"Andy\", \"Jarombek\"));\n\nAssert(variantMap.Get(\"Andy\").Equals(\"Jarombek\"));\nAssert(variantMap.Pop(\"Andy\").Equals(\"Jarombek\"));\n\nvar contents = new List<(object, int)> {(\"Andy\", 23), (0, 0)};\n\n// Another map that uses variance\nICovariant<object, Int32> variantMap2 = new VariantMap<object, int>(contents);\n\nAssert(variantMap2.Get(0).Equals(0));\nAssert(variantMap2.Get(\"Andy\").Equals(23));\n",
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
                "value":" You can check out the full ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VariantMap",
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
                "value":"ICovariant",
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
                "value":"Program",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/02-Feb/02-03-variance-csharp-generics"
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
                "value":". In my repository there is also an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"InvariantMap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class which uses invariant generic type parameters. ",
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
                "value":" Variance may seem like a complex topic, but it's a fundamental piece of the programming languages we interact with every day.  For more information on variance make sure to check out my article about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-13-2018-generics-arrays-complexities-java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Generics and Variance in Java",
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

postName = "feb-3-2019-variance-csharp-generics";
postDate = new Date('2019-02-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Variance with C# Generics",
    description: `Since variance is an advanced topic, this article starts with the basic concepts 
        to understand variance.  Once the basics are understood, I demonstrate variance in C# 
        generics.`,
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
        },
        {
            name: "Polymorphism"
        },
        {
            name: "Variance"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Polymorphism (computer_science)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)",
            link: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)"
        },
        {
            startName: "Joseph Albahari & Ben Albahari, ",
            endName: " (Sebastopol, CA: O'Reilly, 2018), 21",
            linkName: "C# 7.0 in a Nutshell",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "Christopher Strachey, \"Fundamental Concepts in Programming Languages,\" Higher-Order and Symbolic Computation (2000), 37, ",
            endName: "",
            linkName: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.332.3161&rep=rep1&type=pdf",
            link: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.332.3161&rep=rep1&type=pdf"
        },
        {
            startName: "\"Java Polymorphism\", ",
            endName: "",
            linkName: "https://javapapers.com/core-java/java-polymorphism/",
            link: "https://javapapers.com/core-java/java-polymorphism/"
        },
        {
            startName: "\"Ad hoc polymorphism\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Ad_hoc_polymorphism",
            link: "https://en.wikipedia.org/wiki/Ad_hoc_polymorphism"
        },
        {
            startName: "\"Universal Polymorphism\", ",
            endName: "",
            linkName: "https://en.wikibooks.org/wiki/Introduction_to_Programming_Languages/Universal_Polymorphism",
            link: "https://en.wikibooks.org/wiki/Introduction_to_Programming_Languages/Universal_Polymorphism"
        },
        {
            startName: "",
            endName: ", 132",
            linkName: "Albahari.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "",
            endName: ", 133",
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