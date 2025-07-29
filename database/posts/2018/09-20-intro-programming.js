/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/20/2018
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
                "value":" Recently I talked to a friend who wanted me to teach him programming.  I said okay, but I wasn't sure where to begin.  At this point I’ve accumulated almost two and a half years experience in my software development career.  This article uses the knowledge I’ve gained and attempts to give a five minute introduction to programming (before writing any code). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Programming Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Programming Overview",
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
                "value":" Programming is all about giving computers instructions to execute.  Computers consume instructions in the form of binary numbers - which is a base two integer (0 or 1).  The reason why computers use a binary language is because the processors and memory inside computers are made up of many transistors (when I say many - the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/Apple_A11"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"iPhone X has 4 billion transistors",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in its processor).  Transistors handle electrical currents and can be in one of two states - on or off",
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
                "value":".  This makes them a perfect match for binary, which also has two states.  Each binary number is known as a binary digit, or bit for short. ",
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
                "value":" Recently I talked to a friend who wanted me to teach him programming.  I said okay, but I wasn't sure where to begin.  At this point I’ve accumulated almost two and a half years experience in my software development career.  This article uses the knowledge I’ve gained and attempts to give a five minute introduction to programming (before writing any code). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Programming Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Programming Overview",
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
                "value":" Programming is all about giving computers instructions to execute.  Computers consume instructions in the form of binary numbers - which is a base two integer (0 or 1).  The reason why computers use a binary language is because the processors and memory inside computers are made up of many transistors (when I say many - the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/Apple_A11"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"iPhone X has 4 billion transistors",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in its processor).  Transistors handle electrical currents and can be in one of two states - on or off",
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
                "value":".  This makes them a perfect match for binary, which also has two states.  Each binary number is known as a binary digit, or bit for short. ",
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
                "value":" While easy for a computer to understand, humans don’t naturally communicate in zeros and ones.  I do find it fun to play around with binary for academic purposes - for example the 3-bit binary digits from zero to four are 000, 001, 010, 011, 100. ",
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
                "value":" Obviously programmers do not spend their time working in binary (well, at least the sane ones don’t). We use different programming languages, and with those languages we create applications that people use on their computers every day.  However, all the code that controls applications is eventually converted into binary instructions for the computer’s processor to consume. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Programming Languages are Layers of Abstraction"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Programming Languages are Layers of Abstraction",
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
                "value":" The concept that allows developers to work in high-level programming languages instead of binary is known as abstraction. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Abstraction"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The process of hiding away implementation details at a lower level to create a simpler high-level framework.  In programming languages, abstraction is used to hide away the complexity of machine level instructions at a low level, while presenting a human readable language at a higher level ",
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
                "value":".  Inside a piece of software, certain complex components can be abstracted away and presented to future developers in a simpler form.  In a non-programming context, abstraction is classically used to describe how a car has simple high-level operations such as braking, moving forward, and moving backward.  At a low level, a car is made of many small pieces working together - however the driver does not need to understand how they work.  These low level operations are abstracted away. ",
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
                "value":" In programming languages there are multiple layers of abstraction.  The first layer of abstraction from binary is called assembly language.  Assembly consists of instructions that are written in a more human readable form than binary.  Instructions are processed by computers one at a time.  When assembly language is executed, it is converted into binary for the computer to read. ",
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
                "value":" Assembly language is still a very low-level abstraction above binary.  The following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikibooks.org/wiki/MIPS_Assembly"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MIPS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Assembly code adds two numbers (7 and 3) together and prints out the result: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Assembly"
        },
        "value":"addi $t0 $zero 3\naddi $t1 $zero 7\nadd $t2 $t0 $t1\n\nli $v0 1     # 1 is the code to print an integer\nmove $a0 $t2\nsyscall\n",
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
                "value":" If you aren't sure what is happening in this code that is completely okay.  The important takeaway is that assembly code is verbose and forces developers to think like a computer.  Because of these drawbacks, assembly code is rarely worked in. ",
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
                "value":" The second layer of abstraction from binary is high-level programming languages.  If you have no programming experience, high-level languages are likely the ones you've heard of before (Java, C, Python, JavaScript, PHP, etc.).  High-level languages enable the creation of concise programs that are read similarly to how humans think. ",
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
                "value":" The same six lines of assembly code above can be rewritten in one line with the high-level Python language. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"print(7 + 3)\n",
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
                "value":" Due to their ease of use, programmers usually work in high-level languages.  Just remember that when you execute high level code, it is converted to an assembly language and then binary for the computer processor to consume. ",
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
                "value":" Every day as a software developer I work atop many layers of abstraction to create complex applications.  All the thousands of lines of Java, JavaScript, Swift, etc. that I’ve written are built upon previous developers hard work in abstracting away from binary.  The challenge is to use all the high-level frameworks developed over the years to create applications, and once skilled enough to build upon or improve the layers of abstraction provided. ",
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
                "value":" As a beginner, the first challenge is to learn a high-level language and slowly explore into the unknown (the de facto standard language to teach beginners these days is Python).  It is never too early in your software development career to begin building your own applications.  Developing applications is the only true way to learn how the ever-growing programming ecosystem works. ",
                "children":null
            }
        ]
    }
];

postName = "sep-20-2018-intro-programming";
postDate = new Date('2018-09-20T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Introduction to Programming",
    description: `This article uses the knowledge I've gained and attempts to give a five minute 
        introduction to programming (before writing any code)`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Assembly",
            picture: "https://asset.jarombek.com/logos/assembly.png",
            color: "assembly"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "MIPS"
        },
        {
            name: "Abstraction"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "David A. Patterson & John L. Hennessy, ",
            endName: ", 5th ed (Waltham, MA: Elsevier, 2014), 25",
            linkName: "Computer Organization and Design: The Hardware/Software Interface",
            link: "https://bit.ly/2Dh0Xku"
        },
        {
            startName: "",
            endName: ", 11, 13",
            linkName: "Ibid.",
            link: "https://bit.ly/2Dh0Xku"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});