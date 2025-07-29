/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/26/2018
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
                "value":" In this discovery I look at sorting lists in different programming languages for non-trivial objects.  The languages I use are my core languages: Java, JavaScript, Swift, Python, PHP, and C.  I've used all these languages in larger projects and wish to stay proficient in them.  Throughout this article I show snippets of code in each language, but you can also check out the full code ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/\nmaster/2017/11-Nov/11-14-Sorting-Lists"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"on GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Let's get started! ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Java"
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
                "value":" In this discovery I look at sorting lists in different programming languages for non-trivial objects.  The languages I use are my core languages: Java, JavaScript, Swift, Python, PHP, and C.  I've used all these languages in larger projects and wish to stay proficient in them.  Throughout this article I show snippets of code in each language, but you can also check out the full code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/\nmaster/2017/11-Nov/11-14-Sorting-Lists"
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
                "value":". Let's get started! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Java"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"List<Person> list = Arrays.asList(new Person(\"Andrew\", \"Jar.\"),\n                                    new Person(\"Thomas\", \"Cau.\"),\n                                    new Person(\"Joe\", \"Smi.\"),\n                                    new Person(\"Ben\", \"Fis.\"));\n\nlist = list.stream()\n    .sorted(Comparator.comparing(Person::getLast))\n    .collect(toList());\n",
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
                "value":" You may have expected the Java code to be messy and verbose with iterators and complex comparison functions.  With Java 8 it is short and concise thanks to streams and the comparator API. Also using the short-hand lambda syntax (method reference) I was able to write ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Person::getLast",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instead of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(p) -> p.getLast()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Most of the code in the full example is for creating the Person POJO. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"JavaScript"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"JavaScript",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"let people = [\n    {first: \"Andrew\", last: \"Jar.\"},\n    {first: \"Thomas\", last: \"Cau.\"},\n    {first: \"Joe\", last: \"Smi.\"},\n    {first: \"Ben\", last: \"Fis.\"}\n];\n\nconsole.info(people);\n\npeople.sort(function(a, b) {\n    return a.last > b.last ? 1 : 0;\n});\n\nconsole.info(people);\n",
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
                "value":" The JavaScript version is even simpler.  I just passed a call back function to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and it uses the callback when making comparisons. ",
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
                "value":" One thing that was strange when executing this code is that both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console.info()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" invocations produced the sorted array even though the first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console.info()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" occurs before people is sorted.  This is because console functions are asynchronous in some environments. Therefore we may not get the results at the time we expect.  You can't always trust ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Swift"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Swift",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"struct Person {\n    let first: String\n    let last: String\n}\n\nvar list = [\n    Person(first: \"Andrew\", last: \"Jar.\"), Person(first: \"Thomas\", last: \"Cau.\"),\n    Person(first: \"Joe\", last: \"Smi.\"), Person(first: \"Ben\", last: \"Fis.\")\n]\n\nlist.sort {\n    $0.last < $1.last\n}\n",
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
                "value":" I really like the Swift implementation for sorting.  In general I prefer using classes over structs in Swift (just a personal preference!), but in a simple case like this one a struct makes perfect sense. ",
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
                "value":" If you don't know much Swift the sorting operation may look a bit confusing.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method on the Array type is passed a Swift closure (not to be confused with a ",
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
                        "value":" closure in JavaScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), which is basically a callback function.  Since the Swift compiler knows that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function takes a closure you can use parameter shorthands which are represented as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$1",
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
                "value":"$2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" being the first parameter, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" being the second, etc.)",
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
                "value":".  I also utilized trailing closure syntax which can be used when the closure is the last parameter of a function. Trailing closure syntax enables the removal of a function invocations parenthesis, and you can see ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses no parenthesis",
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
                "value":"!  All these tricks are fun to look into and allow for very concise Swift code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"PHP"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"PHP",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"PHP"
        },
        "value":"$array = array(new Person('Andrew', 'Jar.'), new Person(\"Thomas\", \"Cau.\"),\n                new Person(\"Joe\", \"Smi.\"), new Person(\"Ben\", \"Fis.\"));\n\nfunction comparator($a, $b) {\n    return $a->last < $b->last ? -1 : 1;\n}\n\nuasort($array, 'comparator');\n",
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
                "value":" The PHP solution may be my least favorite.  I created the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"People",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object and an array of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"People",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"uasort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used for user defined comparisons where argument one is the array and argument two is the string name of the comparison function.  Why can't I treat the comparison function as a first class citizen and pass it as the second ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"uasort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument?  This code feels ugly. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Python"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"people = [{\"first\":\"Andrew\", \"last\":\"Jar.\"},\n    {\"first\":\"Thomas\", \"last\":\"Cau.\"},\n    {\"first\":\"Joe\", \"last\":\"Smi.\"},\n    {\"first\":\"Ben\", \"last\":\"Fis.\"}]\n\ndef last(item):\n    return item[\"last\"]\n\n# reverse optional argument can be removed\npeople.sort(key=last, reverse=False)\n",
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
                "value":" As you probably guessed, the winner for most concise comparison sort goes to Python.  Thanks to optional arguments, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is really sleek! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"C"
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
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"typedef struct {\n    char first[20];\n    char last[20];\n} person;\n\nint main() {\n    person andrew;\n    strcpy(andrew.first, \"Andrew\");\n    strcpy(andrew.last, \"Jar.\");\n\n    person thomas;\n    strcpy(thomas.first, \"Thomas\");\n    strcpy(thomas.last, \"Cau.\");\n\n    person joe;\n    strcpy(joe.first, \"Joe\");\n    strcpy(joe.last, \"Smi.\");\n\n    person ben;\n    strcpy(ben.first, \"Ben\");\n    strcpy(ben.last, \"Fis.\");\n\n    person people[] = {andrew, thomas, joe, ben};\n\n    // Get the length of the people array\n    int size = sizeof(people) / sizeof(people[0]);\n\n    for (int i = 0; i < size; i++) {\n        printf(\"%d - %s %s \\n\", i + 1, people[i].first, people[i].last);\n    }\n    printf(\"\\n\");\n\n    qsort(people, size, sizeof(people[0]), compare);\n\n    for (int i = 0; i < size; i++) {\n        printf(\"%d - %s %s \\n\", i + 1, people[i].first, people[i].last);\n    }\n}\n\nstatic int compare(const void *a, const void *b) {\n    person *pA = (person *) a;\n    person *pB = (person *) b;\n\n    return strcmp(pA->last, pB->last);\n}\n",
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
                "value":" As you also likely guessed, the C code is by far the most involved.  The structs do make the sorting easier (I originally tried sorting lists of lists of lists, but the pointers got out of control and I couldn't figure it out!).  I utilized the standard libraries ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"qsort()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function and passed in a comparison function",
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
    }
];

postName = "nov-14-2017-sorting-lists";
postDate = new Date('2017-11-14T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Sorting Lists with Comparison Functions",
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
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "PHP",
            picture: "https://asset.jarombek.com/logos/php.svg",
            color: "php"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "C",
            picture: "https://asset.jarombek.com/logos/c.png",
            color: "c"
        },
        {
            name: "Sorting"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Matthew Mathias & John Gallagher, ",
            endName: " (Atlanta, GA: Big Nerd Ranch, 2016), 130",
            linkName: "Swift Programming: The Big Nerd Ranch Guide",
            link: "https://www.bignerdranch.com/books/swift-programming/"
        },
        {
            startName: "",
            endName: "., 131",
            linkName: "Ibid",
            link: "https://www.bignerdranch.com/books/swift-programming/"
        },
        {
            startName: "\"C Program to Sort an array of names or strings\", ",
            endName: "",
            linkName: "http://www.geeksforgeeks.org/c-program-sort-array-names-strings/",
            link: "http://www.geeksforgeeks.org/c-program-sort-array-names-strings/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});