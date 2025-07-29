/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/24/2019
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
                "value":" Last summer, I wrote an article about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-18-2018-css-grid"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CSS Grid",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". CSS Grid is a new web page layout module introduced in 2017.  Today I'm writing about Flexbox, another new web page layout module released to new browsers in 2017",
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
                "value":".  While CSS Grid is a two-dimensional system used to create rigid layouts, Flexbox is a one-dimensional system used to create flexible layouts with dynamic resizing of elements.  Let's go over the basics! ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is Flexbox"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Flexbox?",
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
                "value":" Last summer, I wrote an article about ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-18-2018-css-grid"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CSS Grid",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". CSS Grid is a new web page layout module introduced in 2017.  Today I'm writing about Flexbox, another new web page layout module released to new browsers in 2017",
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
                "value":".  While CSS Grid is a two-dimensional system used to create rigid layouts, Flexbox is a one-dimensional system used to create flexible layouts with dynamic resizing of elements.  Let's go over the basics! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Flexbox"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Flexbox?",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Flexbox"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Flexbox is a one-dimensional layout system that allows a container element's children to dynamically resize and order themselves based on their parents size",
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
                "value":".  Flexbox can be used to create vertical and horizontal layouts with one or many rows.  While CSS Grid is better at creating rigid grids, Flexbox excels when items need to be dynamically resized.  Along with CSS Grid, Flexbox was introduced in 2017. ",
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
                "value":" Flexbox is currently supported by all major desktop and mobile browsers, covering 98.6% of online traffic (as of August 2019)",
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
                "value":".  It's browser integration is further along than CSS Grid, which covers 93.2% of online traffic. ",
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
                "value":" Flexbox layouts consist of a flex container and one or more flex items.  The parent element in a Flexbox layout is called a flex container.  Flex containers contain the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display: flex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS declaration.  Direct children of flex containers are called flex items.  The next section walks through some simple Flexbox layouts. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Flexbox Layout Examples"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Flexbox Layout Examples",
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
                "value":" I created a simple HTML blueprint called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/\n2019/08-Aug/8-24-flexbox/flex.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"flex.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to help demonstrate Flexbox layouts.  It displays a list of the top ten programming languages based on the number of lines I've coded in 2019.  Here is the first Flexbox layout: ",
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
                    "src":"https://asset.jarombek.com/posts/8-24-19-flexbox-1.png"
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
                "value":" To create this layout, I used the following styles.  I omitted all the styles for colors, backgrounds, and fonts. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":".flex-container {\n  // Define a flex container which contains direct children which are flex items.\n  display: flex;\n  // Define the main axis of the flex container.  Column defines the y-axis (vertical) as the main axis.\n  flex-direction: column;\n  // Defines the flex items alignment along the cross axis of the flex container.  Since the main axis\n  // is the y-axis, this defines the horizontal positioning of items along the x-axis.\n  align-items: center;\n\n  // IE 10-11 flexbox prefixes\n  display: -ms-flexbox;\n  -ms-flex-direction: column;\n\n  .flex-item {\n    // My flex item is also a flex container for the ranking, programming language name, and number of\n    // lines coded.\n    display: flex;\n    // Define the main axis of the flex-container as the x-axis (horizontal).\n    flex-direction: row;\n    // Defines the flex items alignment along the cross axis of the flex container.  Since the main axis\n    // is the x-axis, this defines the vertical positioning of items along the y-axis.\n    align-items: center;\n\n    // IE 10-11 flexbox prefixes\n    display: -ms-flexbox;\n    -ms-flex-direction: row;\n  }\n}\n",
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
                "value":" I'm using Sass for my stylesheets to better represent the hierarchy of flex containers and flex items, along with the help of mixins and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loops.  I also included CSS declarations with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"-ms-",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefixes so that Flexbox can work with Internet Explorer",
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
                "value":".  IE versions 10 and 11 support an older spec of Flexbox which is specified with these prefixes. ",
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
                "value":" The outer flex container specifies the y-axis as the main axis, so the languages are displayed vertically. Notice that you can align the flex items along the x-axis with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"align-items",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attribute.  Here is another layout which uses the x-axis as the main axis: ",
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
                    "src":"https://asset.jarombek.com/posts/8-24-19-flexbox-2.gif"
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
                "value":" Here are the new styles for this layout: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":".flex-container {\n  display: flex;\n  align-items: center;\n\n  // Define the main axis of the flex-container as the x-axis (horizontal).\n  flex-direction: row;\n  // Ensure that all the flex items try to fit onto one line.\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n\n  // IE 10-11 flexbox prefixes\n  display: -ms-flexbox;\n  -ms-flex-direction: row;\n  -ms-flex-wrap: nowrap;\n\n  .flex-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    height: 60px;\n    width: 100%;\n\n    // Defines the ability of a flex item to grow if there is extra room in the flex container.\n    // Since I assigned a flex-grow of 1 to each flex item, any extra room will be evenly distributed\n    // amongst every flex item.\n    flex-grow: 1;\n    // Defines the ability of a flex item to shrink if needed.  Since I assigned a flex-shrink of 0 to\n    // each flex item, they won't shrink.\n    flex-shrink: 0;\n    // Determines the original size of the flex item before flex-grow and flex-shrink add or remove\n    // from the size.  Auto just means to look at the size of the items content.\n    flex-basis: auto;\n\n    // IE 10-11 flexbox prefixes\n    display: -ms-flexbox;\n    -ms-flex-direction: row;\n\n    // In the finalized grid spec, the 'flex' attribute is shorthand\n    // for flex-grow, flex-shrink, and flex-basis.\n    -ms-flex: 1 0 auto;\n  }\n}\n",
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
                "value":"flex-direction",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was altered from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"column",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"row",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in order to display the items horizontally.  I made sure that the flex items went off the screen instead of moving onto the next line with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"flex-wrap: nowrap",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration.  In the flex item, I added new flex attributes which determine the size of the flex item. The next layout simply allows flex items to move onto the next line inside the flex container. ",
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
                    "src":"https://asset.jarombek.com/posts/8-24-19-flexbox-3.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":".flex-container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n\n  // Allow flex items to wrap onto multiple lines when they run out of room in the flex container.\n  flex-wrap: wrap;\n  // Could also use 'overflow-x: initial' here, but it doesn't work in IE.\n  overflow-x: hidden;\n\n  // IE 10-11 flexbox prefixes\n  display: -ms-flexbox;\n  -ms-flex-direction: row;\n  -ms-flex-wrap: wrap;\n\n  .flex-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    height: auto;\n    width: auto;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: auto;\n\n    // IE 10-11 flexbox prefixes\n    display: -ms-flexbox;\n    -ms-flex-direction: row;\n    -ms-flex: 1 0 auto;\n  }\n}\n",
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
                "value":" If you change the screen size with these styles applied, you will notice how the flex items move around and resize to find room.  The following layout changes the way spacing is distributed around flex items and prohibits flex items from growing in size above their natural width: ",
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
                    "src":"https://asset.jarombek.com/posts/8-24-19-flexbox-4.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":".flex-container {\n  display: flex;\n  align-items: center;\n  overflow-x: hidden;\n\n  // The attribute 'flex-flow' is shorthand for flex-direction and flex-wrap.  Define the main axis\n  // as the x-axis and allow flex items to wrap onto multiple lines.\n  flex-flow: row wrap;\n  // Define the flex items alignment along the main axis, in this case the x-axis.  space-around\n  // specifies that items are evenly distributed in the line they appear on.\n  justify-content: space-around;\n\n  // IE 10-11 flexbox prefixes\n  display: -ms-flexbox;\n  -ms-flex-direction: row;\n  -ms-flex-wrap: wrap;\n\n  .flex-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    height: auto;\n    width: auto;\n\n    // Since I assigned a flex-grow of 0 to each flex item, they can't grow.\n    flex-grow: 0;\n    // Since I assigned a flex-shrink of 1 to each flex item, they will shink in size evenly\n    // (if necessary).\n    flex-shrink: 1;\n    flex-basis: auto;\n\n\n    // IE 10-11 flexbox prefixes\n    display: -ms-flexbox;\n    -ms-flex-direction: row;\n    -ms-flex: 0 1 auto;\n  }\n}\n",
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
                "value":" In the final flex layout, I changed the ordering of the flex items so the languages are listed in reverse. I accomplished this with a Sass ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop.  It loops over the flex items and gives them an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"order",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attribute.  Otherwise the styles are the same as the previous layout. ",
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
                    "src":"https://asset.jarombek.com/posts/8-24-19-flexbox-5.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":".flex-item {\n  @for $i from 0 through 9 {\n    &:nth-child(#{$i}) {\n      order: 10 - $i;\n    }\n  }\n}\n",
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
                "value":" Just like CSS Grid, Flexbox is a great new way to design website layouts.  Since its available on all the major browsers nowadays, there is no excuse not to try it out!  All the code from this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/08-Aug/8-24-flexbox"
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

postName = "aug-24-2019-flexbox";
postDate = new Date('2019-08-24T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Introducing Flexbox",
    description: `While CSS Grid is a two-dimensional system used to create rigid layouts, Flexbox 
        is a one-dimensional system used to create flexible layouts with dynamic resizing of 
        elements.  Let’s go over the basics!`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Sass",
            picture: "https://asset.jarombek.com/logos/sass.png",
            color: "sass"
        },
        {
            name: "CSS",
            picture: "https://asset.jarombek.com/logos/css.png",
            color: "css"
        },
        {
            name: "Flexbox"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Flexbox Background\", ",
            endName: "",
            linkName: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background",
            link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"
        },
        {
            startName: "Rachel Andrew, ",
            endName: " (New York: A Book Apart, 2017), 37",
            linkName: "The New CSS Layout",
            link: "https://abookapart.com/products/the-new-css-layout"
        },
        {
            startName: "\"Can I Use Flexbox?\", ",
            endName: "",
            linkName: "https://caniuse.com/#feat=flexbox",
            link: "https://caniuse.com/#feat=flexbox"
        },
        {
            startName: "\"Backwards Compatibility of Flexbox: Status in Browsers\", ",
            endName: "",
            linkName: "https://mzl.la/2HiQJj9",
            link: "https://mzl.la/2HiQJj9"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});