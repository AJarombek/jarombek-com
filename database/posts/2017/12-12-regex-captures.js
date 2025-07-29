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
                "value":" Regular expressions are commonly used in my code.  However, there are still certain aspects of them that remain a mystery to me.  Today I'm exploring one new aspect of regular expressions - captures.  Although JavaScript is used in this post, the following concepts apply to many languages with regex capabilities (including my main language Java).  Let's dig in. ",
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
                "value":" Captures help save pieces of a regular expression for later use.  For example, if a regex matches emails, I can capture the two main pieces of an email - the local-part and the domain.  The following code saves the day, month, and year from a date. ",
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
                "value":" Regular expressions are commonly used in my code.  However, there are still certain aspects of them that remain a mystery to me.  Today I'm exploring one new aspect of regular expressions - captures.  Although JavaScript is used in this post, the following concepts apply to many languages with regex capabilities (including my main language Java).  Let's dig in. ",
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
                "value":" Captures help save pieces of a regular expression for later use.  For example, if a regex matches emails, I can capture the two main pieces of an email - the local-part and the domain.  The following code saves the day, month, and year from a date. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"let date = \"02/26/1995\";\n\nlet pattern = /(\\d{1,2})\\/(\\d{2})\\/(\\d{4})/;\nlet captures = date.match(pattern);\n\nconsole.info(captures); // [\"02/26/1995\", \"02\", \"26\", \"1995\"]\n\n// The captures are accessed from the array produced by match()\nconsole.info(`Month: ${captures[1]}, Day: ${captures[2]}, Year: ${captures[3]}`);\n",
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
                "value":" The grouping syntax ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(...)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to define a capture.  The value matched to a capture is saved to an array when the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"match()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is called. ",
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
                "value":" If I want to use grouping but don't need to capture pieces of a regular expression, the syntax ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(?: ...)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specifies that a group shouldn't create a capture. This results in less work for the languages engine to perform",
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
            "language":"JavaScript"
        },
        "value":"let pattern2 = /(?:\\d{1,2})\\/(?:\\d{2})\\/(?:\\d{4})/;\nlet captures2 = date.match(pattern2);\nconsole.info(captures2); // [\"02/26/1995\"]\n",
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
                "value":" One final thing to explore with captures is backreferences.  Backreferences refer to previous captures created in the same regular expression",
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
                "value":".  In the following code I used backreferences to check if the month and day in a date are equal.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\\1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token refers to the contents of the first capture (the month).  The contents of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\\1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is defined at runtime.  Backreferences make regular expressions even more dynamic! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"let date = \"02/26/1995\";\nlet date2 = \"02/02/2017\";\n\nlet sameDayMonthPattern = /(\\d{1,2})\\/\\1\\/\\d{4}/;\n\nlet fails = sameDayMonthPattern.test(date);\nlet succeeds = sameDayMonthPattern.test(date2);\n\nconsole.info(fails); // false\nconsole.info(succeeds); // true\n",
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
                "value":" You can find the full code from this discovery on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2017/12-Dec/\n12-12-Regex-Captures/captures.js"
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

postName = "dec-12-2017-regex-captures";
postDate = new Date('2017-12-12T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Regular Expression Captures",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Regular Expression"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "John Resig, Bear Bibeault, & Josip Maras, ",
            endName: " (Shelter Island, NY: Manning, 2016), 274",
            linkName: "Secrets of the JavaScript Ninja",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "",
            endName: "., 266",
            linkName: "Ibid",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});