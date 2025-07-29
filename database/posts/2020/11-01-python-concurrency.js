/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/28/2020
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
                "value":" Parallelism, multithreading, multi-process programming, and asynchronous programming; Concepts dealing with concurrency are often the most difficult to learn when learning a new programming language.  There are often many different approaches available and it’s hard to know the best approach (look no further than ",
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
                        "value":"Java: Concurrency in Practice",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a 350 page book on writing proper concurrency code in Java).  Python is no different, with multiple evolving libraries, and, for added confusion, a global interpreter lock (GIL) which restricts Python code to a single thread when running on its default CPython interpreter.  In this article, I attempt to demystify concurrent programming in Python and work with libraries such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"concurrent.futures",
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
                "value":"asyncio",
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
                "value":"aiohttp",
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
            "title":"A Non-Concurrent Example"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"A Non-Concurrent Example",
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
                "value":" Ironically, the best place to start learning how concurrency works is to analyze non-concurrent, sequential code. Sequential code executes one task (instruction) after another.  Each sequential program runs as a single process, which is an instance of a computer program.  In theory, a process running sequential code executes in its entirety on a single core of a CPU without giving up control and allowing other processes to run concurrently (during the same time period).  In reality, the operating system managing computer processes will likely perform context switches during a program's execution, allowing other processes to use the CPU concurrently",
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
                "value":".  For the purposes of this article I won’t focus on the operating system level concurrency of our processes, just the code written in our program. ",
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
                "value":" The following Python code performs API requests that are executed sequentially.  It makes an HTTP call to the API, waits for a response, processes the response, and then makes the next API call. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import time\n\nimport requests\n\ndomain = 'https://jsonplaceholder.typicode.com/'\nendpoints = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']\n\n\ndef make_requests():\n    for endpoint in endpoints:\n        url = f'{domain}{endpoint}'\n        print(url)\n        response = requests.get(url)\n        print(response.status_code)\n\n\ndef main():\n    start = time.time()\n    make_requests()\n    end = time.time()\n    print(f'API calls made in: {end - start}')\n\n\nif __name__ == '__main__':\n    main()\n",
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
                "value":" There are a few issues with this approach.  The most glaring problem being that time is wasted while the program awaits a response from the API.  Since the API call is a network I/O task to a remote server (potentially located thousands of miles away), the response could take anywhere from milliseconds to minutes.  Either way, that is a lot of time that could be spent executing other tasks, such as another API call. ",
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
                "value":" A better approach is to utilize concurrency, which Python provides multiple ways to achieve. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Python Concurrency"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Python Concurrency",
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
                "value":" Concurrent programming is when multiple computations are executed during the same time period",
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
                "value":".  Programs running concurrently are sometimes also running in parallel, but not always.  Programs running in parallel are executing at the same time, either on separate CPUs or on different cores of a single CPU.  Programs written to utilize parallelism can also be described as running concurrently (just not necessarily vice-versa). ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Concurrency vs. Parallelism"
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
                                "value":" Concurrency ",
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
                                        "value":" In programming, concurrency is when two or more programs are executing during the same time period.  In a single CPU architecture these programs share the CPU, so their executions are interleaved.  For example, program A runs for one second, then gives up the CPU to program B, which runs for two seconds.  In a multiprocessor or multi-core architecture, these processes can run in parallel. ",
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
                                        "value":" It’s important to note that concurrency does not imply parallelism.  Computers are able to give the illusion that multiple programs are running simultaneously (in parallel) on the CPU without actually doing so.  This is achieved with time sharing and context switching.  On architectures with a single CPU and single core it is simply impossible to perform tasks in parallel. ",
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
                                "value":" Parallelism ",
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
                                        "value":" In programming, parallel computing is when two or more programs are executing simultaneously.  For example, program A and program B start at the same time on different processors, with program A completing in one second and program B completing in two seconds.  Computer programs can spawn additional processes or threads which can run in parallel on a separate processor from the main process/thread. ",
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
                                        "value":" By definition, computations which run in parallel are also run concurrently.  Parallel processing is hardware dependent. Therefore, software with separate threads or processes designed to run on separate processors don't necessarily do so.  If a computer's hardware is limited to a single CPU or core, these threads and processes will simply run concurrently on the same processor. ",
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
                "value":" With the concepts of concurrency and parallelism in mind, I began refactoring the Python code which makes API calls. Python provides a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"concurrency.futures",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" library, which allows computations to be executed asynchronously using either threads or processes. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Asynchronous Programming"
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
                        "value":" Asynchronous programming is a form of concurrent programming that awaits events in a non-blocking fashion.  In other words, asynchronous code allows other pieces of code to execute concurrently (and potentially in parallel) while it awaits external events to occur (such as API calls, filesystem I/O events, mouse clicks, long mathematical computations, etc.).  Many high-level programming languages have built-in support for asynchronous programming. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"concurrency.futures",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ThreadPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class which can run asynchronous tasks in separate threads (although with limitations - because of CPython’s Global Interpreter Lock [GIL] - which I will explain in a second).  Using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ThreadPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can significantly speed up the sequential API calls I wrote previously. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import time\nimport os\nfrom concurrent import futures\n\nimport requests\n\ndomain = 'https://jsonplaceholder.typicode.com/'\nendpoints = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']\n\ndef make_request(endpoint: str) -> requests.Response:\n    \"\"\"\n    Make an API request to and endpoint on the globally defined domain name.  Throws an exception if the response has an\n    error status code.\n    :param endpoint: The endpoint on the API to make a GET request to.\n    :return: The response object of the API call.\n    \"\"\"\n    url = f'{domain}{endpoint}'\n    response: requests.Response = requests.get(url)\n    print(response)\n\n    # Raise an error if the HTTP code is 4XX or 500.\n    response.raise_for_status()\n    return response\n\n\ndef make_requests() -> int:\n    \"\"\"\n    Make requests to the API from a pool of threads running concurrently (although with limitations, because Python's\n    Global Interpreter Lock [GIL] only allows Python code to run in a single thread at a time.  However, I/O bound tasks\n    release the GIL while they wait, allowing ThreadPoolExecutor to be faster than making the API calls synchronously).\n    On my machine, this is approximately 2.5x faster than using requests to make API calls sequentially.\n    \"\"\"\n    workers = 5\n    with futures.ThreadPoolExecutor(workers) as executor:\n        # make_request() calls will be made concurrently.\n        res = executor.map(make_request, endpoints)\n\n    return len(list(res))\n\ndef main() -> None:\n    start = time.time()\n    make_requests()\n    end = time.time()\n    print(f'API calls from worker threads made in: {end - start}')\n\n\nif __name__ == '__main__':\n    main()\n",
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
                "value":" This code creates a thread pool with five workers, so that five API calls can be made concurrently. ",
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
                "value":" As I mentioned, the CPython interpreter has a Global Interpreter Lock (GIL).  The GIL allows only a single thread to run Python bytecode at a time, meaning that Python code is able to create multiple threads, but not run them in parallel",
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
                "value":".  A thread will acquire the lock when it wants to run Python code, and release it once it completes. Therefore, when using the default CPython interpreter, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ThreadPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class can be a bit misleading.  Due to the GIL, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ThreadPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" example runs concurrently but not in parallel. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Thread"
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
                        "value":" A thread, also known as a lightweight process, is the most basic unit of scheduling in most computers",
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
                        "value":".  A computer process is initially created with a single thread of execution, known as the main thread.  Main threads have the ability to split and create one or more additional threads.  A thread can be thought of as a subset of a process",
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
                        "value":".  Threads share the memory space of their parent process, which is both beneficial and dangerous when writing multithreaded programs.  The benefit is that variables which are global to the process can be utilized by all threads. The danger is there can be race conditions when multiple threads are accessing and modifying values in their shared memory space. ",
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
                "value":" For I/O bound tasks like making API calls, using asynchronous programming approaches like ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ThreadPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can still speed up the code",
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
                "value":".  This is because while the asynchronous call is awaiting an event, it releases the GIL.  Therefore other threads can run Python code by acquiring the GIL.  This allows API calls made with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ThreadPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to run faster than sequential code.  Unfortunately for CPU-bound programs, using multiple threads does not speed up execution times. ",
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
                "value":" Python does provide a way to optimize CPU-bound tasks.  Instead of creating multiple threads and running tasks in each, multiple processes can be created.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"concurrency.futures",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ProcessPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class which provides this functionality.  The API code can be rewritten again to use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ProcessPoolExecutor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (note: using processes instead of threads is less useful for I/O-bound tasks like API calls). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import time\nimport os\nfrom concurrent import futures\n\nimport requests\n\ndomain = 'https://jsonplaceholder.typicode.com/'\nendpoints = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']\n\ndef make_request(endpoint: str) -> requests.Response:\n    url = f'{domain}{endpoint}'\n    response: requests.Response = requests.get(url)\n    print(response)\n\n    # Raise an error if the HTTP code is 4XX or 500.\n    response.raise_for_status()\n    return response\n\n\ndef make_requests_processes() -> int:\n    cpu_cores = os.cpu_count()\n    print(f'Number of CPU cores: {cpu_cores}')\n\n    with futures.ProcessPoolExecutor() as executor:\n        res = executor.map(make_request, endpoints)\n\n    return len(list(res))\n\ndef main() -> None:\n    start = time.time()\n    make_requests_processes()\n    end = time.time()\n    print(f'API calls from worker processes made in: {end - start}')\n\n\nif __name__ == '__main__':\n    main()\n",
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
                "value":" Python provides many libraries for asynchronous programming, but one of the newer and more significant libraries is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"asyncio",
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
            "title":"Concurrent Programming with asyncio"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Concurrent Programming with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"asyncio",
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
                "value":", the keywords ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async",
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
                "value":"await",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be used.  ",
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
                "value":" is a high-level library, abstracting away implementation details (such as its usage of coroutines).  This design decision makes it easy to use and a preferred way to implement asynchronous programs. ",
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
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" A Python coroutine is a function defined with the ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"async def",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" keywords. Coroutines can be suspended and restarted many times throughout their lifecycle, making them ideal for asynchronous programming",
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
                        "value":".  They can also receive data and return data throughout their lifecycle. ",
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
                "value":" is a massive library and deserves its own article, but the following code snippet demonstrates the basics. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import asyncio\nimport time\nfrom typing import Tuple, List, Any\n\n\nasync def predicted_sunday_run_length() -> float:\n    \"\"\"\n    Simulate a long running operation that predicts the length of my Sunday long run.\n    \"\"\"\n    await asyncio.sleep(1)\n    return 12.31\n\n\nasync def predicted_weekly_mileage() -> float:\n    \"\"\"\n    Simulate a long running operation that predicts my weekly running mileage.\n    \"\"\"\n    await asyncio.sleep(2)\n    return 44\n\n\nasync def running_predictions() -> Tuple[float, float]:\n    \"\"\"\n    Using async/await, call both the simulated functions.\n    \"\"\"\n    sunday_run = await predicted_sunday_run_length()\n    weekly_mileage = await predicted_weekly_mileage()\n    return sunday_run, weekly_mileage\n\n\nasync def running_predictions_concurrent() -> List[float]:\n    \"\"\"\n    The same as running_predictions() above, except it uses asyncio.gather() instead of two await statements.\n    \"\"\"\n    return await asyncio.gather(predicted_weekly_mileage(), predicted_sunday_run_length())\n\n\ndef main() -> None:\n    start = time.time()\n    sunday_run, weekly_mileage = asyncio.run(running_predictions())\n    end = time.time()\n    print(sunday_run)\n    print(weekly_mileage)\n\n    # Two awaits completes in 3 seconds.\n    print(f'two awaits completes in: {end - start}')\n\n    start = time.time()\n    predictions = asyncio.run(running_predictions_concurrent())\n    end = time.time()\n    print(predictions[0])\n    print(predictions[1])\n\n    # await asyncio.gather completes in 2 seconds.\n    print(f'await asyncio.gather() completes in: {end - start}')\n",
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
                "value":" This code demonstrates how asynchronous tasks created with ",
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
                "value":" can be run sequentially (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"running_predictions()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") or concurrently (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"running_predictions_concurrent()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  Coroutines defined with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"async def",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be executed by passing them to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"asyncio.run()",
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
            "title":"Building on asyncio with aiohttp"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Building on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"asyncio",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"aiohttp",
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
                "value":" Beyond the base Python language and standard libraries, third-party modules are freely available for use.  There are many great third-party libraries which build upon ",
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
                "value":".  One such library is ",
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
                        "value":"aiohttp",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", an asynchronous library for making HTTP requests",
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
                "value":".  With ",
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
                        "value":"aiohttp",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the Python API code I’ve shown throughout this article can receive one final refactoring. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import asyncio\nimport time\nfrom typing import Tuple\n\nimport aiohttp\n\n\nasync def make_request(session: aiohttp.ClientSession, endpoint: str) -> Tuple[str, int]:\n    \"\"\"\n    Make an API request to and endpoint on a mocked REST API.\n    :param session: An aiohttp session interface for making HTTP requests.\n    :param endpoint: The endpoint on the API to make a GET request to.\n    :return: The response JSON of the API call and the HTTP status code.\n    \"\"\"\n    url = f'https://jsonplaceholder.typicode.com/{endpoint}'\n    async with session.get(url) as response:\n        return await response.json(), response.status\n\n\nasync def make_requests() -> int:\n    \"\"\"\n    Make HTTP requests using aiohttp.\n    :return: The number of successful API calls made (with 200 HTTP codes).\n    \"\"\"\n    endpoints = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']\n    success_count = 0\n\n    async with aiohttp.ClientSession() as session:\n        for endpoint in endpoints:\n            response: Tuple[str, int] = await make_request(session, endpoint)\n            print(response[1])\n\n            if response[1] == 200:\n                success_count += 1\n\n    return success_count\n\n\ndef main() -> None:\n    start = time.time()\n    loop = asyncio.get_event_loop()\n    success_count = loop.run_until_complete(make_requests())\n    end = time.time()\n    print(f'API calls completed in: {end - start}')\n    print(f'Success count: {success_count}')\n\n\nif __name__ == '__main__':\n    main()\n",
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
                "value":" There are a vast number of libraries available in Python to help with concurrency and parallelism.  Many of the lower-level classes that Python provides (including ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Thread",
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
                "value":"Task",
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
                "value":"Semaphore",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") were omitted from this article in favor of higher-level libraries.  While going over everything related to concurrency in Python  requires a multi-hundred page book, in this article I explored how certain concurrent programming terminologies can translate into Python code.  The full code for this article is available on  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2020/11-Nov/11-01-python-concurrency"
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

preview = content.slice(0, 2);

postName = "nov-1-2020-python-concurrency";
postDate = new Date('2020-11-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Concurrency and Parallelism Concepts Translated into Python",
    description: `In this article I will attempt to demystify concurrent programming in Python and work with libraries 
        such as concurrent.futures, asyncio, and aiohttp`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
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
            startName: "\"Context switch\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Context_switch",
            link: "https://en.wikipedia.org/wiki/Context_switch"
        },
        {
            startName: "\"Concurrent computing\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Concurrent_computing",
            link: "https://en.wikipedia.org/wiki/Concurrent_computing"
        },
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 533",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "Brian Goetz, ",
            endName: " (Upper Saddle River, NJ: Addison-Wesley Professional, 2006), 3",
            linkName: "Java Concurrency in Practice",
            link: "https://jcip.net"
        },
        {
            startName: "\"Thread (computing): Threads vs. processes\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Thread_(computing)#Threads_vs._processes",
            link: "https://en.wikipedia.org/wiki/Thread_(computing)#Threads_vs._processes"
        },
        {
            startName: "\"The Impact on Multi-Threaded Python Programs\", ",
            endName: "",
            linkName: "https://realpython.com/python-gil/#the-impact-on-multi-threaded-python-programs",
            link: "https://realpython.com/python-gil/#the-impact-on-multi-threaded-python-programs"
        },
        {
            startName: "\"Glossary: coroutine\", ",
            endName: "",
            linkName: "https://docs.python.org/3/glossary.html#term-coroutine",
            link: "https://docs.python.org/3/glossary.html#term-coroutine"
        },
        {
            startName: "\"Welcome to AIOHTTP\", ",
            endName: "",
            linkName: "https://docs.aiohttp.org/en/stable/",
            link: "https://docs.aiohttp.org/en/stable/"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
