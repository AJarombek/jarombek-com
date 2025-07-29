/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/20/2022
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
                "value":" Data alignment in operating systems is something I’ve been aware of throughout my young career, mostly thanks to my love for reading software engineering books.  However, it’s not a concept that I’ve explored in depth.  In this article, I’ll discuss the basics of data alignment and how it applies to programming languages like Go. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Data Alignment"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Data Alignment?",
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
                "value":" Data alignment feels like an intimidating topic since alignments differ depending on machine architectures and operating systems.  However, data alignment is conceptually equivalent across these different architectures. High-level programming languages like Go abstract away much of the complexity as well, making data alignment something an application engineer rarely needs to worry about. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Data Alignment"
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
                        "value":" Data alignment refers to how data is arranged in computer memory.  Computer memory is a device used to store data for immediate use.  Computer memory most likely refers to main memory, which in modern computers is Random Access Memory (RAM)",
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
                        "value":".  CPUs perform optimally when data in memory is properly aligned",
                        "children":null
                    },
                    {
                        "el":"sup",
                        "attributes":null,
                        "value":"2,3",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  In fact, many processors have requirements that force data in memory to be properly aligned, or so-called ",
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
                                "value":"naturally aligned",
                                "children":null
                            }
                        ]
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
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" For example, in a processor with a 32-bit architecture (a CPU with a 4 byte word size), data is naturally aligned if it  exists at a location in memory that is a multiple of 32",
                        "children":null
                    },
                    {
                        "el":"sup",
                        "attributes":null,
                        "value":"5,6",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  For example, if an integer is stored at the 96th bit in memory within a 32-bit architecture, it is properly aligned because ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"96 / 32 == 3",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":".  Similarly, in a processor with a 64-bit architecture (a CPU with an 8 byte word size), data is naturally aligned if it exists at a location in memory that is a multiple of 64. ",
                        "children":null
                    }
                ]
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Naturally Aligned"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Data is considered naturally aligned when it is stored at a memory address that is a multiple of its size.  With  regards to processors, word size is used to determine natural data alignment.  However, in regards to programming language variables, the size of a data type is often used to determine the alignment of data.  For example, in Go, a 16-bit integer (of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"int16",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") should be aligned in memory at a location that is a multiple of 16 to be naturally aligned. ",
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
                "value":" In languages with manual memory management, for example, C and C++, functions to allocate memory such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"malloc()",
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
                "value":"calloc()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are guaranteed to properly align the memory space that they return",
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
                "value":".  Manual memory management is when memory needs to be explicitly managed by a programmer throughout its lifecycle, from creation to garbage collection",
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
                "value":".  Since Go is a programming language with automatic memory management (it automatically allocates memory using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"new()",
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
                "value":"make()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and automatically garbage collects unused memory), instances where data alignment is top of mind for engineers are infrequent. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Data Alignment in Go"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Data Alignment in Go",
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
                "value":" Go has three functions for finding the size and alignment of data: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Sizeof()",
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
                "value":"unsafe.Alignof()",
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
                "value":"unsafe.Offsetof()",
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
                "value":"unsafe.Sizeof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns the size of a variable's data type and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Alignof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns the proper alignment of a variable’s data type.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Offsetof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used specifically for struct fields to determine the offset of a field's memory location within a struct. ",
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
                "value":" The value returned by ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Sizeof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be machine dependent.  For types such as booleans, the return value is always ",
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
                        "value":"1",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", representing one byte",
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
                "value":".  However, for other data types, such as integers, strings, arrays, etc., the return value is dependent on the word size of a computer's CPU architecture. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"// Bool\n// Return value: 1\nunsafe.Sizeof(false)\n\n// int (on a 64-bit processor)\n// Return value: 8\nunsafe.Sizeof(1)\n\n// string (on a 64-bit processor)\n// Return value: 16\nunsafe.Sizeof(\"Andy\")\n\n// []T (array) (on a 64-bit processor)\n// Return value: 24\nunsafe.Sizeof([]string{})\n",
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
                "value":" On a 64-bit architecture, the word size is 8 bytes.  That means that integers, strings, and arrays have sizes of 1 word, 2 words, and 3 words, respectively.  Sizes represent the fixed size of a data type, so the return value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Sizeof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is consistent no matter how long a string is or how many elements an array contains.  For basic types like ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bool",
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
                "value":"int",
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
                "value":"unsafe.Alignof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns the same value as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Sizeof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  For more complex types like ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"string",
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
                "value":"[]T",
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
                "value":"unsafe.Alignof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns the CPU word size in bytes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"// Bool\n// Return value: 1\nunsafe.Alignof(false)\n\n// int (on a 64-bit processor)\n// Return value: 8\nunsafe.Alignof(1)\n\n// string (on a 64-bit processor)\n// Return value: 8\nunsafe.Alignof(\"Andy\")\n\n// []T (array) (on a 64-bit processor)\n// Return value: 8\nunsafe.Alignof([]string{})\n",
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
                "value":"unsafe.Alignof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns the necessary data alignment for its argument’s type.  Therefore, it makes sense that larger types return the word size of the computer processor, which is equal to the natural alignment in memory. ",
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
                "value":" Things get a bit more interesting for data types whose size is less than the word size of a computer’s architecture. Data types such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bool",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", whose size is one byte, still must be naturally aligned in memory (its location in memory must be a multiple of the word size, such as 8-bytes on a 64-bit architecture).  To achieve this, padding is added after the data type in memory to keep it aligned",
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
                "value":".  In the case of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bool",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on a 64-bit machine, one byte is used to store the data and the next seven bytes are padding. ",
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
                "value":" If a boolean actually takes up a full word size in memory, why do ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Sizeof()",
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
                "value":"unsafe.Alignof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" return ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"?  The answer is because within a struct, it is possible to \"pack\" data such that multiple pieces of data are stored within a single word size worth of memory",
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
                "value":".  Data packing is commonly used to save space in a data structure.  The side effect of data structure packing is the order in which struct fields are defined can alter the amount of memory a struct requires. ",
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
                "value":" Let’s look at an example.  The following two structs appear to be equivalent, since they have the same fields defined in a different order. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"type Sample1 struct {\n\ta bool\n\tb bool\n\tc float64\n}\n\ntype Sample2 struct {\n\ta bool\n\tc float64\n\tb bool\n}\n",
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
                "value":" However, calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsafe.Sizeof()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on these structs reveals their sizes are different in memory. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Go"
        },
        "value":"one := Sample1{a: true, b: true, c: 1.0}\ntwo := Sample2{a: true, b: true, c: 1.0}\n\n// Return value (on a 64-bit processor): 16\nunsafe.Sizeof(one)\n\n// Return value (on a 64-bit processor): 24\nunsafe.Sizeof(two)\n",
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
                "value":" While ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a struct the size of two words (16 bytes), ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a struct the size of three words (24 bytes).  This is the result of extra padding needed in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" due to the field order in the struct definition. ",
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
                "value":" The first two fields in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample1",
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
                "value":"a",
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
                "value":"b",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", are type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bool",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since the size and alignment of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bool",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is one, both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"a",
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
                "value":"b",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be packed together into a single word in memory.  This means the first eight bytes of memory for a struct of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" consists of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"a",
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
                "value":"b",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the first two bytes followed by six bytes of padding.  The third field in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample1",
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
                "value":"c",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"float64",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which takes up a full eight bytes on a 64-bit machine.  In total, the struct takes up 16 bytes (2 words). ",
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
                "value":" Next, let's take the case of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The first field in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample2",
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
                "value":"a",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bool",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that is placed in the first byte of memory for the struct.  Since the second field is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"c",
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
                "value":"float64",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that takes up a full eight bytes, seven bytes of padding are added after ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"a",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The third field is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"b",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which takes up one byte followed by another seven bytes of padding.  In total, the struct takes up 24 bytes (3 words). ",
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
                "value":" Luckily for application engineers, outside of field packing in structs, data alignment in memory is not a concern that arises when writing Go programs.  The code examples I showed above can be viewed in more detail in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, specifically within ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.0/low-level-programming/sizeof_test.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"sizeof_test.go",
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
                    "href":"https://github.com/AJarombek/go-programming/blob/v1.1.0/low-level-programming/alignment_offset_test.go"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" alignment_offset_test.go",
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
            "title":"Data Alignment in C and C++"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Data Alignment in C and C++",
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
                "value":" As I mentioned previously, C and C++ are programming languages with manual memory management, and standard library functions such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"malloc()",
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
                "value":"calloc()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are guaranteed to properly align allocated memory.  Similar to Go, structs are a common instance where data alignment impacts application code.  The struct example I showed in Go with two structs, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample1",
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
                "value":"Sample2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is implemented in C and C++ below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"#include <stdbool.h>\n#include <assert.h>\n#include <stdio.h>\n\nstruct Sample1 {\n    bool a;\n    bool b;\n    double c;\n};\n\nstruct Sample2 {\n    bool a;\n    double c;\n    bool b;\n};\n\nint main() {\n    struct Sample1 first = {true, false, 1.0};\n    struct Sample2 second = {true, 1.0, false};\n\n\t// Return value (on a 64-bit processor): 16\n\tsizeof(first);\n\n\t// Return value (on a 64-bit processor): 24\n\tsizeof(second);\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"#include <cassert>\n#include <iostream>\n\nusing namespace std;\n\nstruct Sample1 {\n    bool a;\n    bool b;\n    double c;\n};\n\nstruct Sample2 {\n    bool a;\n    double c;\n    bool b;\n};\n\nint main() {\n    auto first = Sample1{true, false, 1.0};\n    auto second = Sample2{true, 1.0, false};\n\n    // Return value (on a 64-bit processor): 16\n    sizeof(first);\n\n    // Return value (on a 64-bit processor): 24\n    sizeof(second);\n}\n",
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
                "value":" Just like Go, an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes up two word sizes of memory while ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Sample2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes up three word sizes of memory.  These code samples are available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/cpp-c-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"cpp-c-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, within ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/cpp-c-programming/blob/main/c/data-alignment/data_alignment.c"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"data_alignment.c",
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
                    "href":"https://github.com/AJarombek/cpp-c-programming/blob/main/cpp/data-alignment/data_alignment.cpp"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" data_alignment.cpp",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files, respectively. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Linux System Programming"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Linux System Programming",
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
                "value":" While writing system programs, specifically in Linux, an engineer has a bit more control over how allocated memory is aligned.  POSIX defines a function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"posix_memalign()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which allocates memory and aligns it at a multiple of its second argument",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"11,12",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The first argument of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"posix_memalign()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a pointer that will point to the allocated memory and the third (and final) argument is the number of bytes to allocate in memory.  The example below allocates 1024 bytes of memory and aligns it at a multiple of eight.  It frees the newly allocated memory before using it by invoking  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"free(buf)",
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
            "language":"C"
        },
        "value":"char *buf;\n\n// Allocate 1024 bytes of memory aligned at a multiple of 8.\nint ret = posix_memalign(&buf, 8, 1024);\n\nif (ret) {\n\tperror(\"posix_memalign\");\n\treturn -1;\n}\n\nfree(buf);\n",
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
                "value":" Although I aligned the allocated memory on the 64-bit architecture page size (8 bytes) above, any value that is a multiple of two and a multiple of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sizeof(void *)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be used.  On a 64-bit architecture, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sizeof(void *)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" likely returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"8",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (the page size).  The full code example is available in an  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/system-programming-prototypes/blob/main/memory_management/alignment.c"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" alignment.c",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file and is based on my reading of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.oreilly.com/library/view/\nlinux-system-programming/9781449341527/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Linux System Programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" by Robert Love. ",
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
                "value":" Although data alignment may not be top of mind for application engineers, it is important to understand how it works and its impact on high-level programming languages.  In general, knowing low-level operating system functionality helps engineers write better programs in high-level languages, just as knowing data structures and algorithms helps write faster and less memory intensive code.  All the code discussed in this article is available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/go-programming/tree/v1.1.0/low-level-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"go-programming",
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
                    "href":"https://github.com/AJarombek/system-programming-prototypes/tree/main/memory_management"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" system-programming-prototypes",
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
                    "href":"https://github.com/AJarombek/cpp-c-programming"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"cpp-c-programming",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repositories. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "sep-24-2022-data-alignment";
postDate = new Date('2022-09-24T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Understanding Data Alignment in Go",
    description: ` In this article, I’ll discuss the basics of data alignment and how it applies to languages like Go.`,
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
            name: "C++",
            picture: "https://asset.jarombek.com/logos/cpp.png",
            color: "cpp"
        },
        {
            name: "C",
            picture: "https://asset.jarombek.com/logos/c.png",
            color: "c"
        },
        {
            name: "System Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Computer memory\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Computer_memory",
            link: "https://en.wikipedia.org/wiki/Computer_memory"
        },
        {
            startName: "\"Data structure alignment\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Data_structure_alignment",
            link: "https://en.wikipedia.org/wiki/Data_structure_alignment"
        },
        {
            startName: "Alan A. A. Donovan & Brian W. Kernighan, ",
            endName: " (New York, NY: Addison-Wesley, 2016), 354",
            linkName: "The Go Programming Language",
            link: "https://www.gopl.io/"
        },
        {
            startName: "Robert Love, ",
            endName: ", 2nd ed (Sebastopol, CA: O'Reilly, 2013), 303",
            linkName: "Linux System Programming",
            link: "https://www.oreilly.com/library/view/linux-system-programming/9781449341527/"
        },
        {
            startName: "\"Words in Computer Architecture\", ",
            endName: "",
            linkName: "https://learn.saylor.org/mod/page/view.php?id=18960",
            link: "https://learn.saylor.org/mod/page/view.php?id=18960"
        },
        {
            startName: "\"Data Alignment\", ",
            endName: "",
            linkName: "http://books.gigatux.nl/mirror/kerneldevelopment/0672327201/ch19lev1sec3.html",
            link: "http://books.gigatux.nl/mirror/kerneldevelopment/0672327201/ch19lev1sec3.html"
        },
        {
            startName: "\"Manual memory management\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Manual_memory_management",
            link: "https://en.wikipedia.org/wiki/Manual_memory_management"
        },
        {
            startName: "",
            endName: ", 355",
            linkName: "Donovan.",
            link: "https://www.gopl.io/"
        },
        {
            startName: "\"Why does a bool appear to take up as much memory as an int? C++\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/20116948",
            link: "https://stackoverflow.com/a/20116948"
        },
        {
            startName: "\"Data structure alignment: Data structure padding\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Data_structure_alignment#Data_structure_padding",
            link: "https://en.wikipedia.org/wiki/Data_structure_alignment#Data_structure_padding"
        },
        {
            startName: "",
            endName: ", 304",
            linkName: "Love.",
            link: "https://www.oreilly.com/library/view/linux-system-programming/9781449341527/"
        },
        {
            startName: "\"posix_memalign(3) — Linux manual page\", ",
            endName: "",
            linkName: "https://man7.org/linux/man-pages/man3/posix_memalign.3.html",
            link: "https://man7.org/linux/man-pages/man3/posix_memalign.3.html"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
