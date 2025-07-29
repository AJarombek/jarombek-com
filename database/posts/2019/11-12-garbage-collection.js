/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 11/6/2019
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
                "value":" While reading a book on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=c#&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C#",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I came across a section about garbage collection.  I always knew that programming languages such as Java performed garbage  collection, but I never researched how garbage collectors (GCs) worked.  The book mentioned that C# uses a tracing GC with generations and marking.  These were foreign concepts to me, so I decided to conduct additional research on the topic.  This article gives a high-level overview of garbage collectors and the APIs available to interact with them in ",
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
                "value":" and C#. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Overview",
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
                "value":" While reading a book on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=c#&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C#",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I came across a section about garbage collection.  I always knew that programming languages such as Java performed garbage  collection, but I never researched how garbage collectors (GCs) worked.  The book mentioned that C# uses a tracing GC with generations and marking.  These were foreign concepts to me, so I decided to conduct additional research on the topic.  This article gives a high-level overview of garbage collectors and the APIs available to interact with them in ",
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
                "value":" and C#. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Overview",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Garbage Collector"
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
                        "value":" A Garbage Collector (GC) is a task that deletes occupied memory allocated by a program",
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
                        "value":".  GCs look for memory that is no longer referenced anywhere in the program.  When found, data occupying this memory space is deleted and the region is reclaimed for future use. ",
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
                        "value":" Since GCs are run implicitly as a program executes, garbage collection is a form of automatic memory management.  The opposite of automatic memory management is manual memory management, where memory is allocated and deallocated by the programmer.  Many modern programming languages use garbage collection, including Java, ",
                        "children":null
                    },
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog?query=python&page=1"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Python",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":", and C#.  Some older  programming languages use manual memory management instead, with ",
                        "children":null
                    },
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog?query=c&page=1"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"C",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" as a notable example. ",
                        "children":null
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
                "value":" While GCs are commonly associated with object oriented programming languages, the first GC appeared in Lisp, a functional programming language.  Other functional programming languages such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=haskell&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Haskell",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" utilize garbage collection. ",
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
                "value":" There are two main approaches for garbage collection - reference counting and tracing. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Garbage Collection Approaches"
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
                                "value":" Reference Counting ",
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
                                        "value":" Reference counting in the context of garbage collection is when each object or data maintains a counter. This counter represents the number of other objects or pieces of data that maintain a reference to it. For example, for objects ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A",
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
                                        "value":"B",
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
                                        "value":"C",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" if object ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"B",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" contains a reference to ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" and object ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"C",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" contains a reference to ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", the reference count of ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" is two. ",
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
                                        "value":" When a GC uses reference counting, it removes objects that have a reference count of zero",
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
                                        "value":". Since these objects are no longer accessible anywhere in the code, they are safely deleted.  In practice, reference counting has a number of drawbacks which make it a naive approach to garbage collection",
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
                                        "value":".  There is a significant speed and memory overhead to maintaining a reference counter for each object on the heap.  Also, reference counters run into issues when dealing with cycles. If an object exists that references itself, it will never be deleted by the garbage collector.  Because of these shortcomings, tracing is usually used in modern GCs. ",
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
                                "value":" Tracing ",
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
                                        "value":" When a GC uses tracing, it defines root objects or data and checks their reference chains.  If an object is referrable directly or indirectly from a root object, the GC keeps it alive",
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
                                        "value":".  If an object doesn't appear anywhere on the reference chain, it is deleted.  This process is referred to as 'tracing the reference chain",
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
                                        "value":".' ",
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
                                        "value":" For example, for objects ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A",
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
                                        "value":"B",
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
                                        "value":"C",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" if root object ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" contains a reference to ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"B",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" and object ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"B",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" contains a reference to ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"C",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", then the reference chain is traced as ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"A -> B -> C",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  In this scenario, all three objects are kept alive.  Languages such as C# and Java use tracing garbage collectors. ",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Garbage Collection Steps"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Garbage Collection Steps",
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
                "value":" Both Java and C# utilize mark and compact garbage collectors",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"6,7",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Marking is when each object or piece of data that will be removed by the GC is marked for deletion.  This occurs right before the GC deletes objects.  Compacting occurs after objects marked for deletion are removed from memory. Compacting moves all remaining objects to the first open memory addresses reserved for objects (the heap).  This helps prevent memory fragmentation, which is when small pockets of unused memory exist in-between used memory segments.  This memory often goes to waste if newly created objects can't fit in the space. ",
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
                "value":" The GCs used by Java and C# are also generational.  Generational garbage collectors stem from the observation that most objects are either short lived or persistently maintained",
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
                "value":".  Implementations of generational garbage collection vary, however the basic concepts are constant.  Newer objects are members of newer generations, while older objects are members of older generations.  Newer generations are marked and compacted on every garbage collection run, while older generations are only marked and compacted  occasionally.  This is an optimization technique, since garbage collection algorithms have a time and space complexity that is detrimental towards application performance.  This is especially true for garbage collection cycles that are \"Stop the World\" events, where the normal program execution is halted to run the garbage collector",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Some GCs also have special generations or memory space for large objects which are expensive to garbage collect",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"10",
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
                "value":" To summarize, when a garbage collection cycle begins the GC marks objects for deletion using reference counting or tracing.  Marking occurs for newer generations on every garbage collection cycle and for older generations on a less regular basis.  After marking is completed, the marked objects are deleted from memory.  Finally, the memory allocated for objects (the heap) is compressed. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Garbage Collection APIs"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Garbage Collection APIs",
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
                "value":" Programming languages often provide APIs to configure and interact with the garbage collector.  These can be either CLI arguments or modules developers can import into their code.  Java provides multiple CLI options for configuring the GC, including which garbage collection approach to use",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"11",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  For example, developers can choose between the older CMS garbage collector and newer ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.oracle.com/\ntechnetwork/tutorials/tutorials-1876574.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"G1 GC",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" From an API perspective, Java only exposes a single method that ties into the garbage collector. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"System.gc();\n",
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
                "value":"gc()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sends a recommendation to the JVM to run a garbage collection cycle",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"12",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It's important to note that this is just a recommendation, there is a chance that the GC will not run after invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"gc()",
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
                "value":" C# exposes a much more robust API for the garbage collector.  Some of the available methods and properties are shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// The C# garbage collector has three heap divisions - gen0, gen1, and gen2.  Newly allocated objects are\n// in gen0.  Objects which survived a single garbage collection are in gen1.  All other objects are in gen2.\nAssert(GC.MaxGeneration == 2);\n\n// You can force the CLR to run a garbage collection cycle by calling Collect().\nGC.Collect();\n\n// You can specify which generation is collected by passing an argument to Collect().\nGC.Collect(0);\nGC.Collect(1);\nGC.Collect(2);\n\n// Finalizers delay garbage collection of objects.  You can force these objects to be collected by calling\n// Collect() after WaitForPendingFinalizers().\nGC.WaitForPendingFinalizers();\nGC.Collect();\n\n// GC uses a separate heap for large objects.  The large heap's memory isn't compacted on\n// garbage collection by default ...\nAssert(GCSettings.LargeObjectHeapCompactionMode == GCLargeObjectHeapCompactionMode.Default);\n\n// However it can be enabled.  NOTE:  Moving large objects in memory is a slow operation.\nGCSettings.LargeObjectHeapCompactionMode = GCLargeObjectHeapCompactionMode.CompactOnce;\n\n// For diagnosis purposes, we can check how much memory is used by the C# process\nConsole.WriteLine(GC.GetTotalMemory(true));\n",
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
                "value":" This article only scratches the surface of garbage collectors and the APIs they expose in programming languages.  I now understand a bit more about what happens when garbage collection cycles occur in my programs. I'm excited to continue learning more and maybe one day implement a garbage collector of my own! ",
                "children":null
            }
        ]
    }
];

postName = "nov-10-2019-garbage-collection";
postDate = new Date('2019-11-10T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "The Basics of Programming Language Garbage Collection",
    description: `This article gives a high-level overview of garbage collectors and the APIs 
        available to interact with them in Java and C#.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Garbage Collection"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "C#",
            picture: "https://asset.jarombek.com/logos/csharp.png",
            color: "csharp"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Garbage collection (computer science)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)",
            link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
        },
        {
            startName: "\"Reference counting: Garbage collection\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Reference_counting#Garbage_collection",
            link: "https://en.wikipedia.org/wiki/Reference_counting#Garbage_collection"
        },
        {
            startName: "\"Garbage collection (computer science): Reference counting\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)#Reference_counting",
            link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)#Reference_counting"
        },
        {
            startName: "Joseph Albahari & Ben Albahari, ",
            endName: " (Sebastopol, CA: O'Reilly, 2018), 520",
            linkName: "C# 7.0 in a Nutshell",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "\"Tracing garbage collection\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Tracing_garbage_collection",
            link: "https://en.wikipedia.org/wiki/Tracing_garbage_collection"
        },
        {
            startName: "",
            endName: ", 526",
            linkName: "Albahari.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "\"Java Garbage Collection Basics\", ",
            endName: "",
            linkName: "https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html",
            link: "https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html"
        },
        {
            startName: "",
            endName: ", 527",
            linkName: "Albahari.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "\"Stop the world vs. incremental vs, concurrent\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Tracing_garbage_collection#Stop-the-world_vs._incremental_vs._concurrent",
            link: "https://en.wikipedia.org/wiki/Tracing_garbage_collection#Stop-the-world_vs._incremental_vs._concurrent"
        },
        {
            startName: "",
            endName: ", 528",
            linkName: "Albahari.",
            link: "http://shop.oreilly.com/product/0636920083634.do"
        },
        {
            startName: "\"Advanced Garbage Collection Options\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html#BABFAFAE",
            link: "https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html#BABFAFAE"
        },
        {
            startName: "\"System: gc\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/9/docs/api/java/lang/System.html#gc--",
            link: "https://docs.oracle.com/javase/9/docs/api/java/lang/System.html#gc--"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
