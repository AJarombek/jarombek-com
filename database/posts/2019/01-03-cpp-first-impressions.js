/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/30/2018
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
                "value":" C++ is a language I've always wanted to learn.  So many modern languages are influenced by C++ and their designs are often predicated upon the strengths and weaknesses of C++.  For example, I recently wrote about how interfaces and the lack of multiple inheritance in Java is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/dec-22-2018-multiple-inheritance#c++"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"due to C++",
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
                "value":" C++ is a low level language closely related to the C programming language.  Originally called \"C with Classes,\" C++ added object oriented concepts on top of C",
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
                "value":".  In most cases C++ is still a true superset of C.  One of the main design philosophies of C++ was to make it so low level that no language would be needed below it",
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
                "value":".  Because of this philosophy, C++ is commonly used for low-level tasks such as system programming.  However, being low-level causes C++ to contain some complexities. ",
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
                "value":" C++ is a language I've always wanted to learn.  So many modern languages are influenced by C++ and their designs are often predicated upon the strengths and weaknesses of C++.  For example, I recently wrote about how interfaces and the lack of multiple inheritance in Java is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/dec-22-2018-multiple-inheritance#c++"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"due to C++",
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
                "value":" C++ is a low level language closely related to the C programming language.  Originally called \"C with Classes,\" C++ added object oriented concepts on top of C",
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
                "value":".  In most cases C++ is still a true superset of C.  One of the main design philosophies of C++ was to make it so low level that no language would be needed below it",
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
                "value":".  Because of this philosophy, C++ is commonly used for low-level tasks such as system programming.  However, being low-level causes C++ to contain some complexities. ",
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
                "value":" This post is my first impressions of C++.  I compare it to other languages such as C and Java, since C influenced C++ and Java was influenced by C++.  I also mention all the basic C++ features that I find interesting. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Interesting Basic Features"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Interesting Basic Features",
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
                "value":" When first writing C++, the similarities to C are immediately apparent.  However, C++ does add new syntax which can be used on top of the traditional C syntax.  For example, C++ adds a new variable initialization expression to complement the existing C expression. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// C++ initialization notations\nint age = 23;\ndouble programming_experience {2.5};\n",
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
                "value":" C++ has some modern syntax as well.  For example, types don't need to be explicitly declared with the help of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"auto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"auto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is similar to ",
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
                "value":" in Java and C# (note: all these languages are still ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jul-15-2018-groovy-optional-typing#dynamic-&-static-typing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" statically typed",
                        "children":null
                    }
                ]
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
            "language":"C++"
        },
        "value":"// 'auto' is used to not explicitly state the type of a variable (like 'var' in C# and Java)\nauto percentage_programming = programming_experience / age;\n",
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
                "value":" Just like C, you can define constant variables with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  C++ adds the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"constexpr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword, which defines an expression or function that is evaluated at compile time",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"constexpr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions must be pure functions that only handle immutable variables.  I created a compile time function that calculates the mile pace of a run. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// A 'constexpr' is evaluated at compile time.  The arguments to this function must be constant\n// (as defined with 'const')\nconstexpr double pace(double miles, int minutes, int seconds)\n{\n  return ((minutes * 60) + seconds) / miles;\n}\n\nint main()\n{\n  const auto miles = 2;\n  const auto minutes = 12;\n  const auto seconds = 31;\n\n  // Invoke a 'constexpr' function with 'const' arguments\n  auto run_pace = pace(miles, minutes, seconds);\n}\n",
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
                "value":"constexpr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in C++ was likely influenced by functional programming.  Creating compile time functions is also possible in Haskell, a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-6-2018-haskell-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"functional programming language",
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
                "value":".  You can check out the Haskell code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/tree/master/2019/01-Jan/01-03-cpp-first-impressions/haskell"
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Compile time functions are commonly used as a performance strategy.  We can prove ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pace()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" executes at compile time by using static assertions.  Static assertions are just like regular assertions except executed at compile time instead of runtime. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// This is valid because pace() is a 'constexpr' function, so it is evaluated at compile time\nstatic_assert(pace(miles, minutes, seconds) == 375.5);\n\nstatic_assert(sizeof(float) == 4);\nstatic_assert(sizeof(double) == 8);\n",
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
                "value":" Static assertions are a really cool language feature that I've never seen before.  The greatest thing about them is how IDEs check if they pass in the code itself. ",
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
                "value":" C++ also adds additional pointer functionality to the C model.  While you can still use pointers just like in C, there is an additional \"references to\" operator specified with the unary suffix ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"&",
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
            "language":"C++"
        },
        "value":"// Basic pointers are the same as C\nint minutes[] = {95, 85, 15, 110, 160, 105, -1};\nint* minp = &minutes[5];\n\nassert(*minp == 105);\n\n// C++ also supplies a unary suffix '&'.  It is similar to a pointer as it \"references to\" a memory location.\n// '&' differs from a pointer because it doesn't need to be prefixed with '*' to get its value.\nint& minr = minutes[6];\n\nassert(minr == -1);\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"C with Classes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"C with Classes",
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
                "value":" Anyone who's heard of C++ but never used it usually thinks its an object oriented version of C.  This assumption is true, as C++ provides an enhanced custom type system with classes. I decided to create an API for a running exercise in both C++ and C.  This example demonstrates some differences between the two languages. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"C++"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"C++",
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
                "value":" The C++ version uses a class to encapsulate the run information and available methods. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// Run.h\n\n#ifndef CPP_RUN_H\n#define CPP_RUN_H\n\nclass Run {\npublic:\n  Run(double distance, int minutes, int seconds);\n  double pace();\nprivate:\n  double distance;\n  int minutes;\n  int seconds;\n};\n\n#endif //CPP_RUN_H\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// Run.cpp\n\n#include \"Run.h\"\n#include <iostream>\n\nusing namespace std;\n\n// Run class constructor which takes in the distance of the run in miles\n// and the minutes:seconds that the run took to complete.\nRun::Run(const double distance, const int minutes, const int seconds)\n{\n  // Run class invariants\n  if (distance < 0) throw invalid_argument{\"Distance must be > 0\"};\n  if (minutes < 0) throw invalid_argument{\"Minutes must be > 0\"};\n  if (seconds < 0) throw invalid_argument{\"Seconds must be > 0\"};\n\n  this->distance = distance;\n  this->minutes = minutes;\n  this->seconds = seconds;\n}\n\n// Calculate the mile pace of the run.  The pace is returned in seconds.\ndouble Run::pace()\n{\n  return ((this->minutes * 60) + this->seconds) / this->distance;\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C++"
        },
        "value":"// main.cpp\n\n#include \"Run.h\"\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n  Run run {2.0, 12, 31};\n  double pace = run.pace();\n  cout << pace << endl;\n\n  auto minute_pace = (int) pace / 60;\n  auto second_pace = (int) pace % 60;\n\n  assert(minute_pace == 6);\n  assert(second_pace == 15);\n\n  return 0;\n}\n",
        "children":null
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The C version uses a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"struct",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to represent the run and maintains the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"pace()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function in the same header file. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"// Run.h\n\n#ifndef C_RUN_H\n#define C_RUN_H\n\nstruct run {\n  double distance;\n  int minutes;\n  int seconds;\n};\n\ndouble pace(struct run run);\n\n#endif //C_RUN_H\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"// run.c\n\n#include \"run.h\"\n\ndouble pace(struct run run)\n{\n  return ((run.minutes * 60) + run.seconds) / run.distance;\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"// main.c\n\n#include \"run.h\"\n#include <stdio.h>\n#include <assert.h>\n\nint main()\n{\n  struct run run1;\n  run1.distance = 2;\n  run1.minutes = 12;\n  run1.seconds = 31;\n\n  double run_pace = pace(run1);\n\n  printf(\"%f\", run_pace);\n  assert(run_pace == 375.5);\n}\n",
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
                "value":" I'm really excited to continue learning C++ and see how it influenced all the languages I use on a daily basis.  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-sources/tree/master/2019/01-Jan/01-03-cpp-first-impressions"
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

postName = "jan-3-2019-cpp-first-impressions";
postDate = new Date('2019-01-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "C++ First Impressions",
    description: `This post is my first impressions of C++.  I compare it to other languages such as 
        C and Java, which influenced and is influenced by C++, respectively.  I also mention all the 
        basic C++ features that I find interesting.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
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
            name: "Object Oriented Programming"
        },
        {
            name: "Imperative Programming"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Bjarne Stroustrup, ",
            endName: ", 4th ed (Upper Saddle River, NJ: Pearson Education, 2013), 23",
            linkName: "The C++ Programming Language",
            link: "http://www.stroustrup.com/4th.html"
        },
        {
            startName: "",
            endName: ", 10",
            linkName: "Stroustrup.",
            link: "http://www.stroustrup.com/4th.html"
        },
        {
            startName: "",
            endName: ", 42",
            linkName: "Stroustrup.",
            link: "http://www.stroustrup.com/4th.html"
        },
        {
            startName: "\"GHC Compile-time evaluation\", ",
            endName: "",
            linkName: "https://bit.ly/2LFSqYT",
            link: "https://bit.ly/2LFSqYT"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});