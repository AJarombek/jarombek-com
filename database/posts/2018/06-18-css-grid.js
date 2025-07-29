/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/17/2018
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
                "value":" I'll be honest - most of the time when I write CSS I just hack away at things until they work. Building layouts in CSS never seemed intuitive to me.  Other methods such as Androids XML layout system always seems more beginner friendly and powerful.  Luckily creating web layouts in CSS gets easier every year.  New features are added to CSS, and in the past year a new layout method called CSS Grid was added to the language specification.  Now instead of using a library such as Bootstrap to manage page layouts, CSS has native support for easy grid layout management.  I used CSS Grid in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-31-2018-react-seed"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"/ ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-4-2018-webpack-seed"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Webpack",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prototype back in March and applied it to every page on this website so far!  I think CSS Grid is a major enhancement to the CSS specification, providing an easier entry point to new developers.  This post looks into the basics of CSS Grid and acts as a stepping stone for further CSS discoveries down the line. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Before CSS Grid"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Before CSS Grid",
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
                "value":" I'll be honest - most of the time when I write CSS I just hack away at things until they work. Building layouts in CSS never seemed intuitive to me.  Other methods such as Androids XML layout system always seems more beginner friendly and powerful.  Luckily creating web layouts in CSS gets easier every year.  New features are added to CSS, and in the past year a new layout method called CSS Grid was added to the language specification.  Now instead of using a library such as Bootstrap to manage page layouts, CSS has native support for easy grid layout management.  I used CSS Grid in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-31-2018-react-seed"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"/ ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-4-2018-webpack-seed"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Webpack",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prototype back in March and applied it to every page on this website so far!  I think CSS Grid is a major enhancement to the CSS specification, providing an easier entry point to new developers.  This post looks into the basics of CSS Grid and acts as a stepping stone for further CSS discoveries down the line. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Before CSS Grid"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Before CSS Grid",
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
                "value":" My software development journey began just two years ago in 2016 - so for the first 20 years of the CSS lifespan I was not around.  Recently however I had to write some HTML and CSS for an email template.  The HTML email I created is sent from this website when someone subscribes.   When I first began development on the email I thought it would be an easy task - create a few ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<div>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements, write some CSS Grid styling, and call it a day.  Little did I know that creating an HTML and CSS email is like building a website in 1999. ",
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
                "value":" In order to get the email layout to work on all clients, the HTML had to be formatted using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<table>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements",
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
                "value":".  None of the layout could be handled in CSS.  The worst offender of all email clients was Outlook, which didn't even support the CSS ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"width",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property",
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
                "value":"!  You can checkout the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://gist.github.com/AJarombek/5e8df26bcb3ca8f8f6b4d66640381141"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"gnarly HTML and CSS code for my email",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in all its beauty. ",
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
                "value":" Luckily in recent years we didn't have to create layouts with HTML tables or define element widths as HTML attributes.  We did it all in CSS!  Before CSS Grid (and after the 90's) creating layouts consisted of either playing around with the CSS ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"position",
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
                "value":"float",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declarations or giving up and using a library such as Bootstrap to handle layout creation for you. ",
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
                "value":" When I started developing my first website ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.saintsxctf.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the fall of 2016, CSS Grid did not yet exist.  At that point I was a beginner and didn't know bootstrap existed.  If you look at most of the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf/blob/master/views/style.css"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"websites code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" all the layouts are created by floating ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<div>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements around the page and manipulating the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"position",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attribute.  I won't go in detail of how to use this technique here, but it's safe to say it was challenging and confusing.  Clearly the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"float",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attribute wasn't meant for designing layouts",
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Luckily CSS has evolved and introduced two new ways to create layouts natively - flexbox and grid. This post is about CSS Grid and the power it gives developers and designers. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"CSS Grid"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Grid is a two-dimensional layout system that uses rows and columns to format HTML",
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
                "value":". CSS Grid replaces hacks such as CSS floats for creating layouts.  It also is more powerful at creating grid layouts than Flexbox, which is a one-dimensional layout system.  CSS Grid was first introduced in 2017 and is currently supported on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://caniuse.com/#feat=css-grid"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"most major browsers",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (as of June 2018). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Designing CSS Grid Layouts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Designing CSS Grid Layouts",
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
                "value":" To demonstrate how CSS grid works I designed a UI which displays different runs I went on this past week.  Before using CSS Grid, here is what the UI looked like: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/6-18-18-grid-0.png"
                },
                "value":null,
                "children":[

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
                "value":" Now let's start working with CSS Grid.  In order to create a grid, a container HTML element must be given the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display: grid",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS definition.  The columns in the grid are defined with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-template-columns",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declarations and the rows are defined with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-template-rows",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declarations. ",
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
                "value":" The following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".container",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class holds all the runs I went on: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<body>\n  <div className=\"container\">\n    ...\n  </div>\n</body>\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n}\n",
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
                "value":" Two additional things to note about the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".container",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class. You will notice that I use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fr",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" unit, which represents a fraction of the space in a CSS Grid container.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-template-columns",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration specifies two columns with equal widths.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-gap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration specifies the space between grid items. ",
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
                "value":" Inside the container there are seven HTML ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<div>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements for the running logs. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<div class=\"container\">\n  <div class=\"run run-6-17-0 run-6\">...</div>\n  <div class=\"run run-6-16-0 run-7\">...</div>\n  <div class=\"run run-6-15-2 run-5\">...</div>\n  <div class=\"run run-6-15-1 run-6\">...</div>\n  <div class=\"run run-6-15-0 run-5\">...</div>\n  <div class=\"run run-6-14-0 run-8\">...</div>\n  <div class=\"run run-6-13-0 run-4\">...</div>\n</div>\n",
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
                "value":" In the initial CSS Grid layout I designed, the columns and rows are specified in each running log: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":".run-6-17-0 {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.run-6-16-0 {\n  grid-column: 2;\n  grid-row: 1 / 3;\n}\n\n.run-6-15-2 {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.run-6-15-1 {\n  grid-column: 1;\n  grid-row: 3 / 5;\n}\n\n.run-6-15-0 {\n  grid-column: 2;\n  grid-row: 3;\n}\n\n.run-6-14-0 {\n  grid-column: 1;\n  grid-row: 5;\n}\n\n.run-6-13-0 {\n  grid-column: 2;\n  grid-row: 5;\n}\n",
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
                "value":" The result: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/6-18-18-grid-1.png"
                },
                "value":null,
                "children":[

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
                "value":" Notice that nothing is filling the grid space with column #2 and row #4.  CSS Grid allows for easy declarations of whitespace in a layout. ",
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
                "value":" One issue with the above code is it's quite lengthy for such a simple layout.  To make a grid definition less verbose, the CSS properties ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-area",
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
                "value":"grid-template-areas",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are used.  The following code creates the same exact layout as the previous one: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n\n  grid-template-areas:\n        \"a b\"\n        \"c b\"\n        \"d e\"\n        \"d .\"\n        \"f g\";\n}\n\n.run-6-17-0 { grid-area: a; }\n.run-6-16-0 { grid-area: b; }\n.run-6-15-2 { grid-area: c; }\n.run-6-15-1 { grid-area: d; }\n.run-6-15-0 { grid-area: e; }\n.run-6-14-0 { grid-area: f; }\n.run-6-13-0 { grid-area: g; }\n",
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
                "value":"grid-area",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" gives each grid item a unique identifier and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-template-areas",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the pattern for the grid. Note that the grid area with column #2 and row #4 is declared with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token, denoting an empty grid space. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-template-columns",
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
                "value":"grid-template-rows",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are powerful because you can give unique identifiers to each line in between grid items.  These unique identifiers are used within the grid items CSS declaration block for placement in the grid. Here are unique grid edge identifiers in action: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":".container {\n  display: grid;\n  grid-template-columns: [left] 1fr [middle-start] 2fr [middle-end] 1fr [right];\n  grid-template-rows: [row-1] 1fr [row-2] 1fr [row-3] 1fr [bottom];\n  grid-gap: 10px;\n}\n\n.run-6-17-0 {\n  /* Specify the items location within the grid */\n  grid-column-start: left;\n  grid-column-end: middle-start;\n  grid-row-start: row-1;\n  grid-row-end: row-3;\n}\n\n.run-6-16-0 {\n  /*\n  Shorthand for specifying each column and rows start and end\n  Goes in this order: row-start, column-start, row-end, column-end\n  */\n  grid-area: row-3 / middle-start / bottom / middle-end;\n}\n\n.run-6-15-2 {\n  grid-area: row-1 / middle-end / row-2 / right;\n}\n\n.run-6-15-1 {\n  grid-area: row-1 / middle-start / row-3 / middle-end;\n}\n\n.run-6-15-0 {\n  grid-area: row-3 / left / bottom / middle-start;\n}\n\n.run-6-14-0 {\n  grid-area: row-2 / middle-end / row-3 / right;\n}\n\n.run-6-13-0 {\n  grid-area: row-3 / middle-end / bottom / right;\n}\n",
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
                "value":" The result: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/6-18-18-grid-2.png"
                },
                "value":null,
                "children":[

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
                "value":" From all these examples, you may have noticed that each grid item stretches to fit its grid position.  This behavior comes from each items ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"align-self",
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
                "value":"justify-self",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties, which default to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stretch",
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
                "value":".  You can declare these properties with different values to change their behavior",
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
                "value":" (I often use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"center",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which retains the shape of the original HTML element). ",
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
                "value":" This concludes my brief introduction to CSS Grid.  Hopefully you have seen why I am so excited about this new specification and the power it gives developers and designers to create layouts on the web.  It has never been easier to design webpages with native CSS, and I am excited to continue growing my stylesheet knowledge. ",
                "children":null
            }
        ]
    }
];

postName = "jun-18-2018-css-grid";
postDate = new Date('2018-06-18T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Introducing CSS Grid",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "CSS",
            picture: "https://asset.jarombek.com/logos/css.png",
            color: "css"
        },
        {
            name: "CSS Grid"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Creating a Simple Responsive HTML Email\", ",
            endName: "",
            linkName: "https://webdesign.tutsplus.com/articles/creating-a-simple-responsive-html-email--webdesign-12978",
            link: "https://webdesign.tutsplus.com/articles/creating-a-simple-responsive-html-email--webdesign-12978"
        },
        {
            startName: "\"Cannot get css width working for MS outlook\", ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/14486081/cannot-get-css-width-working-for-ms-outlook",
            link: "https://stackoverflow.com/questions/14486081/cannot-get-css-width-working-for-ms-outlook"
        },
        {
            startName: "Rachel Andrew, ",
            endName: " (New York: A Book Apart, 2017), 2",
            linkName: "The New CSS Layout",
            link: "https://abookapart.com/products/the-new-css-layout"
        },
        {
            startName: "",
            endName: ", 38",
            linkName: "Andrew.",
            link: "https://abookapart.com/products/the-new-css-layout"
        },
        {
            startName: "",
            endName: ", 53-57",
            linkName: "Andrew.",
            link: "https://abookapart.com/products/the-new-css-layout"
        },
        {
            startName: "\"justify-self\", ",
            endName: "",
            linkName: "https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-30",
            link: "https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-30"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});