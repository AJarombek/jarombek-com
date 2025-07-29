/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/2/2022
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Recently I read ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.gopl.io/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"The Go Programming Language",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in hopes to better understand Go and discover what makes it a unique language.  One Go feature that peaked my interest was goroutines.  Goroutines are a mechanism for achieving concurrency and parallelism in Go programs.  Many programming languages provide libraries that  use multiple threads or processes to achieve concurrency, but Go takes a more distinct approach. ",
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
                "value":" Go's use of Goroutines to achieve concurrent programming lead me to ask many questions, all of which I'll attempt to answer in this article.  The questions are as follows: ",
                "children":null
            }
        ]
    },
    {
        "el":"ul",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"#what-is-a-goroutine"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"What is a goroutine?",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"#what-is-the-difference-between-a-thread-and-a-goroutine"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"What is the difference between a thread and a goroutine?",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"#why-does-go-use-goroutines-instead-of-threads"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Why does Go use goroutines instead of threads?",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"#what-are-channels-and-how-do-they-relate-to-goroutines"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"What are channels and how do they relate to goroutines?",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"#what-is-the-difference-between-a-coroutine-and-a-goroutine"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"What is the difference between a coroutine and a goroutine?",
                                "children":null
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
            "title":"What is a goroutine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a goroutine?",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Goroutine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A goroutine is an activity within a Go program",
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
                "value":".  Using goroutines, engineers can write concurrent and parallel programs.  When a Go program starts and calls its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"main()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, it runs in a ",
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
                        "value":"main goroutine",
                        "children":null
                    }
                ]
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
                "value":".  This is similar conceptually to a ",
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
                        "value":"main thread",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in languages like Java and Python, although goroutines and threads are distinct entities.  A new goroutine is created in a Go program using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  In a program with multiple goroutines, each goroutine runs concurrently, and if the computer running the program has multiple CPUs or cores, potentially in parallel. ",
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
                "value":" As a basic example, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/main/goroutines/basic_example/\nbasic_example.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"following code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" starts a separate goroutine from the main goroutine of an application.  Both goroutines simply print text to standard output and exit. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"package main\n\nimport (\n\t\"fmt\"\n\t\"time\"\n)\n\nfunc otherGoroutine() {\n\tfmt.Println(\"Other Goroutine\")\n}\n\nfunc main() {\n\tgo otherGoroutine()\n\n\t// Wait a second in the main goroutine to make it more likely\n\t// for the other goroutine to run until completion\n\ttime.Sleep(1 * time.Second)\n\n\tfmt.Println(\"Main Goroutine\")\n}\n",
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
                "value":" One thing to note is when the main goroutine exists (the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"main()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function completes), all other goroutines are forced to exit as well",
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
                "value":".  Therefore, it is possible the child goroutine is forced to close before it can print \"Other Goroutine\".  In production code, there are ways to wait for other goroutines  to run until completion. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is the difference between a thread and a goroutine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" What is the difference between a thread and a goroutine? ",
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
                "value":" A ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-1-2020-python-concurrency#thread"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"thread",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", also known as a lightweight process, is the most basic unit of scheduling on most computers.  I wrote about threads, the difference between concurrency and parallelism, along with other multithreading concepts in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-1-2020-python-concurrency"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous article on Python",
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
                "value":" Threads come in two different forms: kernel threads and user threads. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Threads"
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
                                "value":" Kernel Thread ",
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
                                        "value":" Kernel threads, also known as OS threads, are threads that are managed by the operating system in kernel mode. Running in Kernel mode allows OS threads to have unrestricted access to the underlying hardware they run on",
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
                                        "value":".  Kernel threads contain a virtualized processor, stack space, and program state from the process they run within",
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
                                        "value":".  Although kernel threads require operating system support, all modern operating systems support them",
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
                                        "value":".  An example of a kernel thread library is ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://en.wikipedia.org/wiki/Pthreads"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":" Pthreads",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  You can find examples of pthreads in my ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://github.com/AJarombek/\nsystem-programming-prototypes/tree/main/pthreads"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"system-programming-prototypes",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" repository. ",
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
                                "value":" User Thread ",
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
                                        "value":" A user thread is similar to an OS thread, except it exists in user space and isn't managed by the operating system. Instead, user threads are written and managed in code, such as within the standard libraries for programming languages. While they require lots of user space code to implement, the benefits of user threads include fewer expenses from context switches and more application control",
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
                "value":" There are multiple threading models for mapping user threads to kernel threads.  In reality, all threads used in application code are user threads.  However, depending on the threading model, user threads can utilize kernel threads for their execution strategy (as is the case with the 1:1 threading model) or be dependent on user space code to handle threading (as is the case with n:1 and n:m threading models).  Knowing the differences between threading models along with kernel threads and user threads is critical for understanding goroutines. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Threading Models"
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
                                "value":" 1:1 (Kernel-Level Threading) ",
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
                                        "value":" The 1:1 threading model is where every user thread is mapped to a single kernel thread.  Different ways to think of this threading model are user threads implementing kernel threading functionality, or user threads existing as a wrapper around kernel threads.  1:1 Threading is also known as kernel-level threading",
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
                                        "value":".  Pthreads are an example of  the 1:1 threading model, which is why I previously described them as an example of a kernel thread. While their code isn't strictly in kernel space, every user thread created with pthreads maps directly to a single, unique kernel thread; user threads and kernel threads in pthreads form a one-to-one relationship. ",
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
                                        "value":" The benefit of 1:1 threading is that kernel threads can be scheduled and run on separate CPUs or cores.  This means that kernel threads can run in parallel on a multicore or multiprocessor machine.  The downside of 1:1 threading is that context switches between threads are expensive, and operating systems set a (configurable) limit to the number of kernel threads that can be created.  For example, on Linux, the maximum number of threads is viewable with the ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"cat /proc/sys/kernel/threads-max",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" command",
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
                                "value":" N:1 (User-Level Threading) ",
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
                                        "value":" The n:1 threading model is where multiple user threads are all mapped to a single kernel thread.  N:1 threading is also known as user-level threading.  Historically, the Java threading library used n:1 threading (known as green threads), although this system is no longer used",
                                        "children":null
                                    },
                                    {
                                        "el":"sup",
                                        "attributes":null,
                                        "value":"9,10",
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
                                        "value":" The benefits of n:1 threading are reduced performance costs related to context switching and more control in user space. However, on modern architectures, it is important for threads to take advantage of multiple cores and processors. Since the n:1 threading model maps user threads to a single kernel thread, all user-level threads are executed on a single core and a single processor.  The performance loss of not taking advantage of multiple cores or processors far outweighs any benefits gained from reducing context switches (on multicore/multiprocessor machines), making N:1 threading a seldomly used approach.  Also, the amount of complex user level code needed to maintain user-level threads is another detriment to n:1 threading. ",
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
                                "value":" N:M (Hybrid Threading) ",
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
                                        "value":" The n:m threading model is where ",
                                        "children":null
                                    },
                                    {
                                        "el":"i",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"m",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" user threads are mapped to ",
                                        "children":null
                                    },
                                    {
                                        "el":"i",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"n",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" kernel threads.  N:M threading is also known as hybrid threading. ",
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
                                        "value":" For example, take a program that implements hybrid threading and distributes 20 user threads to four kernel threads.  If the computer this program runs on has a four core processor, these four kernel threads can be distributed evenly across the processing cores, allowing kernel threads to run in parallel.  However, from the appearance of the application, 20 threads were created, not four. ",
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
                                        "value":" Hybrid threading attempts to benefit from both kernel-level threading and user-level threading.  By utilizing kernel threads, hybrid threads are able to achieve parallelism on multicore or multiprocessor machines.  By utilizing user threads, hybrid threads reduce the cost of context switches and provide more power to user-space code.  The downside of hybrid threads is they are complex to implement",
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
                "value":" Many programming languages utilize kernel-level threads (the 1:1 threading model).  Modern implementations of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java threads",
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
                    "href":"https://docs.python.org/3/library/threading.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python threads",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" utilize kernel threading under the hood (In Java, this is referred to as native threading)",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"12,13",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  One differentiating factor for goroutines compared to Java or Python threads is that Go maps ",
                "children":null
            },
            {
                "el":"i",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"m",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" goroutines to ",
                "children":null
            },
            {
                "el":"i",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"n",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" kernel threads, thus making it follow the hybrid threading (n:m) model",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"14",
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
            "title":"Why does Go use goroutines instead of threads"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Why does Go use goroutines instead of threads? ",
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
                "value":" After learning that Go uses hybrid threading instead of a more common kernel threading approach, the question I began to wonder was why?  Go is a much newer language than Java and Python, which were first released in 1996 and 1991, respectively.  Therefore, Go had the benefit of hindsight when it chose its threading model.  By using hybrid threading, goroutines (which exist in user space) are able to have custom functionality that makes concurrent code easier to use and write.  Hybrid threading also reduces the cost of context switching in a scenario where the number of goroutines is greater than the number of cores and processors in a machine.  This results in more efficient concurrent code while still leveraging a machine's architecture for parallelism. ",
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
                "value":" While reading Go documentation and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.gopl.io/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"The Go Programming Language",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", writers are quick to point out that goroutines are not threads.  In many ways, I find it easier to think of goroutines as user threads with some unique attributes.  One of the biggest differences between goroutines and typical threads is that threads have a fixed-sized stack space while goroutines have a dynamically-sized stack space",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"15",
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
                "value":" I believe dynamically-sized stack space is the best feature of goroutines.  Kernel threads have a fixed-size stack space where the size is architecture dependent, but is often large enough to prevent a stack overflow.  There is also a configurable limit to the number of kernel threads on a machine.  This leads to scalability issues when a program attempts to execute many operations concurrently. ",
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
                "value":" When goroutines are initialized, their stack space is small, often around 2KB according to the documentation",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"15",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The stack space of a thread is often 100 times as big, 2MB in the case of pthreads on a 64 bit x86 architecture",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"16",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In some cases, the stack size for a thread is even larger than 2MB.  The small (and scalable) stack space of goroutines allows magnitudes more of them to be created compared to threads",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"17",
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
                "value":" The scalable nature of goroutines has the same impact on concurrent code as scalable cloud resources has on infrastructure; goroutines make concurrent code easier to write and manage and allows for architectural designs impossible in more rigid systems.  As cloud platforms like AWS allow infrastructure to scale with consumer demand, goroutines are able to scale with growing concurrent workloads.  Concurrent processes that are difficult to create with threads in libraries like pthreads or languages like Java and Python may be easier in Go with goroutines. ",
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
                "value":" Goroutines also abstract away much of the complexity around concurrent code.  In my opinion, prefixing any Go function with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword is an elegant way to implement a concurrency library; in my experience, goroutines are easier to use and learn compared to other threading libraries. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What are channels and how do they relate to goroutines"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" What are channels and how do they relate to goroutines? ",
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
                "value":" In Go, channels are a way to communicate between goroutines.  Let's take a basic example where integer values are passed to a goroutine via a channel and returned from the same goroutine via another channel. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"package main\n\nimport (\n\t\"fmt\"\n)\n\nfunc double(out chan int, in chan int) {\n\tfor {\n\t\tvalue := <-in\n\t\tresult := value * 2\n\t\tout <- result\n\t}\n}\n\nfunc main() {\n\tout := make(chan int)\n\tin := make(chan int)\n\n\tgo double(out, in)\n\n\tin <- 2\n\tresult := <-out\n\tfmt.Printf(\"Double 2 = %d\\n\", result) // Double 2 = 4\n\n\tin <- 5\n\tresult = <-out\n\tfmt.Printf(\"Double 5 = %d\\n\", result) // Double 5 = 10\n\n\tclose(out)\n\tclose(in)\n}\n",
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
                "value":"make(chan int)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax creates a new integer channel.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, which is run as a goroutine with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"go double(out, in)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement, takes two channels as arguments.  Within ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the statement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"value := <-in",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" reads a value from the ",
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
                "value":" channel.  After doubling the value, the statement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"out <- result",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" writes the doubled value to the ",
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
                "value":" channel. ",
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
                "value":" In the main goroutine, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"in <- 2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement sends a value to the ",
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
                "value":" channel and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"result := <-out",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement reads a value from the ",
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
                "value":" channel and assigns it to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"result",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function can be refactored to use unidirectional channels,  which specify the directional flow of data through channels in their type definitions",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"18",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The directional  flow of data in a unidirectional channel must be obeyed. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"func double(out chan<- int, in <-chan int) {\n\tfor {\n\t\tvalue := <-in\n\t\tresult := value * 2\n\t\tout <- result\n\t}\n}\n",
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
                "value":" Type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"chan<- int",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a send-only integer channel and  type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<-chan int",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a receive only integer channel",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"18",
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
                "value":" Another way to refactor this example is to use buffered channels.  Buffered channels represent queues with a specified size, compared to a standard channel which holds a single element.  Here is a final version of the code  using buffered channels and unidirectional channels. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"package main\n\nimport (\n\t\"fmt\"\n)\n\nfunc double(out chan<- int, in <-chan int) {\n\tfor {\n\t\tvalue := <-in\n\t\tresult := value * 2\n\t\tout <- result\n\t}\n}\n\nfunc main() {\n\tout := make(chan int, 2)\n\tin := make(chan int, 2)\n\n\tgo double(out, in)\n\n\tin <- 2\n\tin <- 5\n\n\tresult := <-out\n\tfmt.Printf(\"Double 2 = %d\\n\", result) // Double 2 = 4\n\n\tresult = <-out\n\tfmt.Printf(\"Double 5 = %d\\n\", result) // Double 5 = 10\n\n\tclose(out)\n\tclose(in)\n}\n",
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
                "value":" Channels in Go remind me of multiple different technologies, ranging from message brokers like RabbitMQ to generators and coroutines in Python.  In Go, the syntax for channels is simple, making them easy to work with. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is the difference between a coroutine and a goroutine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" What is the difference between a coroutine and a goroutine? ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Coroutine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A coroutine is a function or subroutine that allows its execution to be suspended and resumed cooperatively",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"19",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In Python, coroutines are functions that yield their control flow; they are functions containing a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"yield",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword in their bodies",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"20",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Coroutines are similar to kernel threads because they enable concurrent execution, but unlike threads do not enable parallelism",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"21",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Coroutines also follow cooperative multitasking, unlike kernel threads which follow preemptive multitasking",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"22",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In other words, coroutines yield control of a program on their own terms whenever they wish, while kernel threads are forced to yield control by the operating system. ",
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
                "value":" Coroutines are a programming concept I first encountered while learning Python.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" goroutine used in the previous section is easily rewritten as a Python coroutine.  This code is available in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/python-programming/blob/\nv1.0.0/coroutines/coroutines.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"coroutines.py",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"def double():\n    \"\"\"\n    A coroutine that takes a number and multiples it by two.\n    The result is yielded back to the caller.\n    \"\"\"\n    while True:\n        value = yield\n        result = value * 2\n        yield result\n\n\nif __name__ == '__main__':\n    double_coroutine = double()\n\n    next(double_coroutine)\n    result = double_coroutine.send(2)\n    assert result == 4\n\n    next(double_coroutine)\n    result = double_coroutine.send(5)\n    assert result == 10\n",
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
                "value":" In many ways, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"double()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" implemented as a goroutine in Go and a coroutine in Python are functionally the same.  Both are unblocking calls that yield execution, waiting for a value.  In the Python coroutine, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"yield",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword is used to wait for a value to be passed by its caller.  In the goroutine, a channel is used to wait for a value to be passed by another goroutine.  Both the coroutine and the goroutine emit values as well.  The coroutine passes values back to its caller using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"yield",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword, while the goroutine passes values to other goroutines through a channel. ",
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
                "value":" While it's reasonable to guess that goroutines are simply coroutines, there are crucial differences.  Coroutines do not enable concurrency or parallelism on their own",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"23",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Meanwhile, goroutines implement hybrid threading and preemptive multitasking.  A library such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-1-2020-python-concurrency\n#concurrent-programming-with-asyncio"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"asyncio",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is built on top of coroutines in Python, has more in common with goroutines than coroutines.  I wrote about ",
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
                        "value":"asyncio",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" along with other ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-1-2020-python-concurrency"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python concurrent programming concepts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a prior article. ",
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
                "value":" Goroutines are a very interesting part of the Go programming language, and I'll likely leverage them next time I have a codebase with large amounts of concurrency and parallelism. Goroutines make concurrent programming easy, hiding a complex hybrid threading model behind simplistic language syntax and semantics.  Go code shown in this article along with other goroutine and channel examples are available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/\ntree/main/goroutines"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming repository on GitHub",
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

preview = content.slice(0, 2);

postName = "sep-10-2022-goroutines";
postDate = new Date('2022-09-10T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Answering Questions about Goroutines",
    description: `Recently I read The Go Programming Language in hopes to better understand Go and what makes it 
        unique as a language.  One feature of Go that peaked my interest was goroutines.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Go",
            picture: "https://asset.jarombek.com/logos/go.png",
            color: "go"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Threads"
        },
        {
            name: "Concurrency"
        },
        {
            name: "Parallelism"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Alan A. A. Donovan & Brian W. Kernighan, ",
            endName: " (New York, NY: Addison-Wesley, 2016), 217",
            linkName: "The Go Programming Language",
            link: "https://www.gopl.io/"
        },
        {
            startName: "",
            endName: ", 218",
            linkName: "Donovan.",
            link: "https://www.gopl.io/"
        },
        {
            startName: "",
            endName: ", 219",
            linkName: "Donovan.",
            link: "https://www.gopl.io/"
        },
        {
            startName: "\"CPU Modes\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/CPU_modes",
            link: "https://en.wikipedia.org/wiki/CPU_modes"
        },
        {
            startName: "Robert Love, ",
            endName: ", 2nd ed (Sebastopol, CA: O'Reilly, 2013), 211",
            linkName: "Linux System Programming",
            link: "https://www.oreilly.com/library/view/linux-system-programming/9781449341527/"
        },
        {
            startName: "\"Threads\", ",
            endName: "",
            linkName: "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html",
            link: "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html"
        },
        {
            startName: "",
            endName: ", 215",
            linkName: "Love.",
            link: "https://www.oreilly.com/library/view/linux-system-programming/9781449341527/"
        },
        {
            startName: "\"Get and Set Max Thread Count in Linux\", ",
            endName: "",
            linkName: "https://linuxhint.com/get-set-max-thread-count-linux/",
            link: "https://linuxhint.com/get-set-max-thread-count-linux/"
        },
        {
            startName: "\"Green thread\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Green_thread",
            link: "https://en.wikipedia.org/wiki/Green_thread"
        },
        {
            startName: "\"Threads: Green or Native\", ",
            endName: "",
            linkName: "http://www.sco.com/developers/java/j2sdk122-001/ReleaseNotes.html#THREADS",
            link: "http://www.sco.com/developers/java/j2sdk122-001/ReleaseNotes.html#THREADS"
        },
        {
            startName: "",
            endName: ", 216",
            linkName: "Love.",
            link: "https://www.oreilly.com/library/view/linux-system-programming/9781449341527/"
        },
        {
            startName: "\"Understanding java's native threads and the jvm\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/2653613",
            link: "https://stackoverflow.com/a/2653613"
        },
        {
            startName: "\"Python multithreading model\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/45188576",
            link: "https://stackoverflow.com/a/45188576"
        },
        {
            startName: "",
            endName: ", 281",
            linkName: "Donovan.",
            link: "https://www.gopl.io/"
        },
        {
            startName: "",
            endName: ", 280",
            linkName: "Donovan.",
            link: "https://www.gopl.io/"
        },
        {
            startName: "\"pthread_create(3) - Linux manual page\", ",
            endName: "",
            linkName: "https://man7.org/linux/man-pages/man3/pthread_create.3.html",
            link: "https://man7.org/linux/man-pages/man3/pthread_create.3.html"
        },
        {
            startName: "\"Why you can have millions of Goroutines but only thousands of Java Threads\", ",
            endName: "",
            linkName: "https://rcoh.me/posts/why-you-can-have-a-million-go-routines-but-only-1000-java-threads/",
            link: "https://rcoh.me/posts/why-you-can-have-a-million-go-routines-but-only-1000-java-threads/"
        },
        {
            startName: "",
            endName: ", 230",
            linkName: "Donovan.",
            link: "https://www.gopl.io/"
        },
        {
            startName: "\"Coroutine\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Coroutine",
            link: "https://en.wikipedia.org/wiki/Coroutine"
        },
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 481",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "\"Coroutine: Threads\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Coroutine#Threads",
            link: "https://en.wikipedia.org/wiki/Coroutine#Threads"
        },
        {
            startName: "\"Cooperative multitasking\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Cooperative_multitasking",
            link: "https://en.wikipedia.org/wiki/Cooperative_multitasking"
        },
        {
            startName: "\"Go Language Patterns: Coroutines\", ",
            endName: "",
            linkName: "http://www.golangpatterns.info/concurrency/coroutines",
            link: "http://www.golangpatterns.info/concurrency/coroutines"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
