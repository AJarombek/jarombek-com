/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/1/2018
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
                "value":" In my time spent researching ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-24-2018-python-data-model"
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
                "value":" this week I stumbled across some really interesting data structures.  Python has a vast standard library, with many data structures that specialize in certain tasks.  It reminds me of Java’s standard library, except that Python data structures either have their own literal syntax or a built-in function for construction!  This discovery post looks at three data structures that I found especially interesting. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Tuples"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Tuples",
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
                "value":" Tuples are a commonly used data structure in Python.  They hold immutable records, and are often used as immutable lists.  One thing I didn't know is that tuples support 'tuple unpacking', which spreads their contents across multiple variables. ",
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
                "value":" In my time spent researching ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-24-2018-python-data-model"
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
                "value":" this week I stumbled across some really interesting data structures.  Python has a vast standard library, with many data structures that specialize in certain tasks.  It reminds me of Java’s standard library, except that Python data structures either have their own literal syntax or a built-in function for construction!  This discovery post looks at three data structures that I found especially interesting. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Tuples"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Tuples",
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
                "value":" Tuples are a commonly used data structure in Python.  They hold immutable records, and are often used as immutable lists.  One thing I didn't know is that tuples support 'tuple unpacking', which spreads their contents across multiple variables. ",
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
                "value":" For example, take the following tuple: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"items = (\"My\", \"name\", \"is\", \"Andy\")\n",
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
                "value":" Each string record in this tuple is easily assigned to a variable using tuple unpacking: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"_my, _name, _is, _andy = items\n\nassert _my == \"My\" and _name == \"name\" and _is == \"is\" and _andy == \"Andy\"\n",
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
                "value":" Tuple unpacking also has a special operator (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), which behaves in different ways depending on the context.  One such context is using a tuple as a functions argument.  In this case, the tuple records are spread out as separate arguments to the function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"print(items)   # ('My', 'name', 'is', 'Andy')\nprint(*items)  # My name is Andy\n",
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
                "value":" The call ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"print(*items)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is equivalent to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"print(items[0], items[1], items[2], items[3])",
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
                "value":"*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator is also powerful when used to grab excess items from an unpacked tuple",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"run_info = (4.32, 31, 25, 'Riverside, CT', date(2018, 9, 27))\n\n# Tuple unpacking can also be used to grab excess items.\n# Records can be grabbed from the end of a tuple...\nmiles, minutes, seconds, *rest = run_info\n\nassert miles == 4.32 and minutes == 31 and seconds == 25\nassert rest == ['Riverside, CT', date(2018, 9, 27)]\n\n# ...or the start of a tuple...\n*stats, location, run_date = run_info\n\nassert stats == [4.32, 31, 25]\nassert location == 'Riverside, CT' and run_date == date(2018, 9, 27)\n\n# ...or the middle of a tuple\nmiles, *others, run_date = run_info\n\nassert others == [31, 25, 'Riverside, CT']\n",
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
                "value":" While Python tuple unpacking likely influenced the ES6 JavaScript destructuring syntax and spread operator, tuple unpacking doesn’t pack the punch of its JavaScript counterpart.  In JavaScript destructuring and spread operators are used on both objects and arrays, and are commonly utilized to keep ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-23-2018-javascript-immutable#implicitly-immutable"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" data immutable",
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
            "title":"Memory Views"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Memory Views",
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
                "value":" The Python memory view data structure is unlike any I’ve seen in other languages.  The closest equivalent I can think of is using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-14-2017-sorting-lists#c"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" pointers in C",
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
                "value":" Memory views observe a chunk of memory that holds a data structure.  You can think of memory views as pointers to certain memory locations of Python data structures such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bytes",
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
                "value":"bytearray",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". It is important to note that memory views do not hold any of the underlying data they observe",
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
                "value":".  They simply know memory locations.  Because the creation of a memory view does not copy any of a data structures content, it is very efficient for dealing with binary data. ",
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
                "value":" Memory views are only used with data structures that expose the buffer protocol.  In Python, the buffer protocol is a way to observe the internal structure of an object",
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
                "value":".  Both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bytes",
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
                "value":"bytearray",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" expose the buffer protocol.  The built-in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"memoryview()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is used to create a memory view. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# A byte array is a mutable binary sequence.\nname_byte_array = bytearray('Andy', 'utf-8')\n\n# Memory views take in an object that exposes the buffer protocol\nmemv = memoryview(name_byte_array)\n",
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
                "value":" Upon observing the contents of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"memv",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I noticed each index in the memory view is mapped to a byte in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name_byte_array",
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
            "language":"Python"
        },
        "value":"# Analyze each byte in the memory view\nassert memv[0] == 65 and memv[1] == 110 and memv[2] == 100 and memv[3] == 121\nassert chr(memv[0]) == 'A' and chr(memv[1]) == 'n' and chr(memv[2]) == 'd' and chr(memv[3]) == 'y'\n",
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
                "value":" Although it may appear that the memory view copied and holds the contents of the byte array, we know that it simply has a pointer to the existing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name_byte_array",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". This is proven through a few simple tests.  First, altering data at an index in the memory view also alters ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name_byte_array",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following code changes the first letter to a lowercase 'a': ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"assert name_byte_array == bytearray(b'Andy')\n\n# Convert the first byte in the memory view from capital 'A' to lowercase 'a'\nmemv[0] = 97\n\n# Confirm the change to the memory view impacts the original array\nassert name_byte_array == bytearray(b'andy')\n",
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
                "value":" Memory views can also be sliced without copying any bytes",
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
                "value":".  If the sliced memory view is altered, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name_byte_array",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will still be impacted. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Split the memory view, creating a new memory view that holds only the last two bytes\nlast_two_letters_memv = memv[2:]\n\nassert bytes(last_two_letters_memv) == b'dy'\n\n# From the split memory view, change the last letter to 'i'\nlast_two_letters_memv[1] = ord('i')\n\n# Since the split memory view didn't copy any bytes, the original byte array is still impacted\nassert name_byte_array == bytearray(b'andi')\n",
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
                "value":" I’m not sure when I would use a memory view in my own code, but it is a really cool data structure that enables fast, low-level data manipulation in Python. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Sets"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Sets",
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
                "value":" Sets in Python are really cool, and allow you to perform all the basic set theory operations using native Pythons operators (thanks to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-24-2018-python-data-model"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Python's MOP",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  Sets have their own literal syntax which matches the syntax from set theory. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"s1 = {1, 2, 3}\ns2 = {3, 4, 5}\n\n# Bitwise AND is used to get the Set intersection\nassert s1 & s2 == {3}\n\n# Bitwise OR is used to get the Set union\nassert s1 | s2 == {1, 2, 3, 4, 5}\n\n# The subtraction sign is used to get the Set difference\nassert s1 - s2 == {1, 2}\nassert s2 - s1 == {4, 5}\n\n# Bitwise NOT is used to get the complement of the Set intersection\nassert s1 ^ s2 == {1, 2, 4, 5}\n\ns3 = {22, 44, 66}\ns4 = {22}\n\n# Determine whether a set is a subset or superset of another set with the comparison operators\n\nassert not s3 <= s4  # s3 is not a subset of s4\nassert not s3 < s4   # s3 is not a proper subset (subset but not matching set) of s4\nassert s3 >= s4      # s3 is a superset of s4\nassert s3 > s4       # s3 is a proper superset (superset but not matching set) of s4\n",
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
                "value":" Python has the best ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"set",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" implementation I’ve seen in a language so far. ",
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
                "value":" This concludes my look at interesting Python data structures.  There are many structures I haven't observed yet, but I already love Pythons use of built-in functions, literal syntax, and the MOP to simplify the use of commonly leveraged data structures. ",
                "children":null
            }
        ]
    }
];

postName = "oct-4-2018-python-data-structures";
postDate = new Date('2018-10-04T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Cool Python Data Structures",
    description: `I love Pythons use of built-in functions, literal syntax, and the MOP to simplify 
        the use of commonly used data structures.`,
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
            name: "Data Structures"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 31",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "",
            endName: ", 54",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "\"memoryview() in Python\", ",
            endName: "",
            linkName: "https://www.geeksforgeeks.org/memoryview-in-python/",
            link: "https://www.geeksforgeeks.org/memoryview-in-python/"
        },
        {
            startName: "",
            endName: ", 106-107",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});