/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 1/23/2019
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
                "value":" When I created my personal website, I wanted to use all the latest technologies.  I created a modern front-end with React.js, Webpack, Sass, and the latest JavaScript.  When it came to stylesheets, I used the latest features that ease website layout creation.  One of these features is CSS Grid.  I wrote an article about ",
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
                "value":" over the summer, explaining how it simplifies complex CSS layouts.  As with all new web technologies, an issue with CSS Grid is that older browsers don't support it.  This article looks at some of the workarounds to make CSS Grid backwards compatible to older browsers. ",
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
                "value":" I took three components from my website and simplified them to show how they work on older browsers. All modern browsers (Chrome, Edge, Firefox, Opera, Safari) implement feature queries, which check if certain stylesheet features are available in the browser environment",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1,2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Feature queries are created with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@supports",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS rule. ",
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
                "value":" When I created my personal website, I wanted to use all the latest technologies.  I created a modern front-end with React.js, Webpack, Sass, and the latest JavaScript.  When it came to stylesheets, I used the latest features that ease website layout creation.  One of these features is CSS Grid.  I wrote an article about ",
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
                "value":" over the summer, explaining how it simplifies complex CSS layouts.  As with all new web technologies, an issue with CSS Grid is that older browsers don't support it.  This article looks at some of the workarounds to make CSS Grid backwards compatible to older browsers. ",
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
                "value":" I took three components from my website and simplified them to show how they work on older browsers. All modern browsers (Chrome, Edge, Firefox, Opera, Safari) implement feature queries, which check if certain stylesheet features are available in the browser environment",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1,2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Feature queries are created with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@supports",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS rule. ",
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
                "value":" One of the big issues with my website was CSS Grid didn't work properly in Microsoft Edge.  This was due to Edge implementing an older spec of CSS Grid.  I used feature queries in my stylesheets to provide an equal viewing experience between Edge and the rest of the modern browsers. ",
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
                "value":" Unfortunately, Internet Explorer does not support feature queries.  If you are looking for IE support and also want to leverage new CSS features, you can use feature detection libraries such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://modernizr.com/docs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Modernizr",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The rest of this article uses my three components to explain feature queries and creating backwards compatible CSS Grid stylesheets. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Article Component"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Example 1: Article Component",
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
                "value":" The first layout example is similar to the one used in my software development articles (like the one you are currently viewing). ",
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
                    "src":"https://asset.jarombek.com/posts/1-24-19-example-1.png"
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
                "value":" Here is the HTML and relevant CSS styles for this layout: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<body>\n<header class=\"header\">\n  <p>Software Discovery</p>\n  <p>January 10th, 2019</p>\n</header>\n<div>\n  <h1>CSS Grid Backwards Compatibility</h1>\n  <div>\n    <p>\n      This article discusses how to make CSS Grid web pages backwards compatible\n      to older browsers.\n    </p>\n  </div>\n  <div>\n    <p>\n      <strong>[1]</strong> CSS Grid\n    </p>\n  </div>\n</div>\n<footer>\n  <figure>\n    <img src=\"https://asset.jarombek.com/jarombek.png\">\n  </figure>\n</footer>\n</body>\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":"/* Layout for CSS Grid supporting browsers */\n@supports (grid-area: auto) {\n  body {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-areas:\n              \"header header header\"\n              \".       body  .     \"\n              \".      footer .     \";\n  }\n\n  header {\n    grid-area: header;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-areas: \"type  .  date\";\n  }\n\n  header > p:nth-child(1) {\n    grid-area: type;\n    justify-self: start;\n    align-self: center;\n    padding-left: 20px;\n  }\n\n  header > p:nth-child(2) {\n    grid-area: date;\n    justify-self: end;\n    align-self: center;\n    padding-right: 20px;\n  }\n\n  body > div {\n    grid-area: body;\n    justify-self: center;\n    align-self: center;\n  }\n\n  footer {\n    grid-area: footer;\n    justify-self: center;\n    align-self: center;\n  }\n}\n\n/* Layout for legacy browsers */\n@supports not (grid-area: auto) {\n  header {\n    display: table;\n    height: 45px;\n    width: 100%;\n  }\n\n  header p {\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n    width: 50%;\n  }\n\n  header:nth-child(1) {\n    text-align: left;\n    padding-left: 20px;\n  }\n\n  header:nth-child(2) {\n    text-align: right;\n    padding-right: 20px;\n  }\n}\n",
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
                "value":" In this layout, browsers supporting ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-area: auto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" use styles within the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@supports (grid-area: auto) {...}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule block.  Browsers unsupportive of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid-area: auto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" use styles within the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@supports not (grid-area: auto) {...}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule block. ",
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
                "value":" For browsers not supporting CSS Grid, I replaced ",
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
                "value":" with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display: table",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property is used to determine the display type of an HTML element.  Both the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"grid",
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
                "value":"table",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" values for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" alter how child elements are laid out",
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
                "value":".  While ",
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
                "value":" defines a CSS Grid container, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display: table",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a table layout with rows and columns containing cells.  Table layout is just like an HTML table where the element ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<tr>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents a table row and the element ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<td>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents a table cell.  The corresponding ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" values are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"table-row",
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
                "value":"table-cell",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", respectively",
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
                "value":" With the table layout I created a similar view to the one built with CSS Grid.  I gave both article headers the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display: table-cell",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" definition.  Table cells can be vertically positioned just like grid areas in CSS Grid",
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
                "value":".  While CSS Grid uses ",
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
                "value":" to position elements vertically inside their grid area, table cells use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"vertical-align",
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
                "value":"vertical-align: middle",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" positions the contents of a table cell in the middle of the cell",
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
                "value":" The rest of the HTML component doesn't need a grid layout, making it easy to convert for older browsers. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Tag Component"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Example 2: Tag Component",
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
                "value":" The second layout example is a technology tag that I use at the top of my software development articles.  This article has CSS, CSS Grid, and HTML tags. ",
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
                    "src":"https://asset.jarombek.com/posts/1-24-19-example-2.png"
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
                "value":" Here is the HTML and relevant CSS styles for this layout: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<body>\n<div>\n  <figure>\n    <img src=\"https://asset.jarombek.com/jarombek.png\" />\n  </figure>\n  <p>CSS Grid</p>\n</div>\n</body>\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":"/* Layout for CSS Grid supporting browsers */\n@supports (grid-area: auto) {\n  body {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    height: calc(100vh - 16px);\n  }\n\n  div {\n    display: grid;\n    grid-template-rows: [top] 100% [bottom];\n    grid-template-columns: [image] 40px [label] calc(100% - 39px) [end];\n  }\n\n  figure {\n    grid-area: top / image / bottom / label;\n    justify-self: center;\n    align-self: center;\n  }\n\n  p {\n    grid-area: top / label / bottom / end;\n    justify-self: center;\n    align-self: center;\n  }\n}\n\n/* Layout for legacy browsers */\n@supports not (grid-area: auto) {\n  body {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  div {\n    display: table;\n  }\n\n  figure {\n    display: table-cell;\n    vertical-align: middle;\n  }\n\n  p {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n",
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
                "value":" Once again I'm using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"display: table",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as a replacement for ",
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
                "value":".  This time around I'm also centering the tag component in the middle of the the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element.  In CSS Grid, I'm using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"align-items: center",
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
                "value":"justify-items: center",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to align children elements in the middle of the page vertically and horizontally, respectively. ",
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
                "value":" For older browsers, things get a bit more complex.  First I use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"position: absolute",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" definition, which positions ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" relative to its nearest positioned relative.  A positioned element is an HTML element with a ",
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
                "value":" property of value ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"relative",
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
                "value":"fixed",
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
                "value":"absolute",
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
                "value":"sticky",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has no positioned ancestor, its positioned relative to the webpage document",
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" With absolute positioning, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"top: 50%",
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
                "value":"left: 50%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" definitions place ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the middle of the webpage document.  The only issue with these two definitions is they place the top left corner of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the middle of the webpage.  Therefore the tag component appears misaligned from the center.  To fix this I use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"transform",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"transform: translate(-50%, -50%)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" feels like a hack to get the central positioning perfect, but sometimes with legacy CSS hacks are required",
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
                "value":"! ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"translate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repositions an element along the x-axis and y-axis of the webpage.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"translate(-50%, -50%)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" moves ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" 50% of its height upwards along the y-axis and 50% of its width leftwards along the x-axis.  Now the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<body>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element is centered! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Feature Component"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Example 3: Feature Component",
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
                "value":" The third layout example displays a feature for the website. My website ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" home page",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has three feature components. ",
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
                    "src":"https://asset.jarombek.com/posts/1-24-19-example-3.png"
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
                "value":" Here is the HTML and relevant CSS styles for this layout: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<body>\n<div class=\"feature\">\n  <div>\n    <div class=\"feature-text\">\n      <h5>Articles</h5>\n      <p>Read software development articles I've written and follow my progress as a programmer.</p>\n    </div>\n    <div class=\"feature-picture\">\n      <figure>\n        <img src=\"https://asset.jarombek.com/tech_logos_white.svg\"/>\n      </figure>\n    </div>\n  </div>\n</div>\n</body>\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"CSS"
        },
        "value":"/* Layout for CSS Grid supporting browsers */\n@supports (grid-area: auto) {\n  body {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    height: 100vh;\n    margin: 0;\n  }\n\n  .feature > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"content picture\";\n    grid-gap: 20px;\n  }\n\n  .feature-text, .feature-picture {\n    justify-self: center;\n    align-self: center;\n  }\n\n  .feature-text {\n    grid-area: content;\n  }\n\n  .feature-picture {\n    grid-area: picture;\n  }\n}\n\n/* Layout for legacy browsers */\n@supports not (grid-area: auto) {\n  body {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .feature > div {\n    display: table;\n    height: 100%;\n    width: 100%;\n    float: left;\n  }\n\n  .feature-text {\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n    width: 50%;\n  }\n\n  .feature-picture {\n    float: left;\n    margin-top: 15vh;\n  }\n}\n",
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
                "value":" The concepts covered in my first two layouts will help you understand the code for my website features. ",
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
                "value":" While it's fun to work with the latest browser technologies, we still need to support users that aren't as bleeding edge.  Feature queries with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@supports",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS rule will soon be all that's needed to support legacy browsers as Internet Explorer usage continues to dwindle.  All the code from this discovery post is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\ntree/master/2019/01-Jan/01-24-css-grid-backwards-compatibility"
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

postName = "jan-24-2019-css-grid-backwards-compatibility";
postDate = new Date('2019-01-24T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "CSS Grid Backwards Compatibility",
    description: `This article looks at some of the workarounds to make CSS Grid backwards 
        compatible with older browsers.`,
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
        },
        {
            name: "HTML",
            picture: "https://asset.jarombek.com/logos/html.png",
            color: "html"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Rachel Andrew, ",
            endName: " (New York: A Book Apart, 2017), 102",
            linkName: "The New CSS Layout",
            link: "https://abookapart.com/products/the-new-css-layout"
        },
        {
            startName: "\"CSS Feature Queries\", ",
            endName: "",
            linkName: "https://caniuse.com/#feat=css-featurequeries",
            link: "https://caniuse.com/#feat=css-featurequeries"
        },
        {
            startName: "\"display\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
        },
        {
            startName: "",
            endName: ", 8",
            linkName: "Andrew.",
            link: "https://abookapart.com/products/the-new-css-layout"
        },
        {
            startName: "\"Centering Vertically\", ",
            endName: "",
            linkName: "https://www.w3.org/Style/Examples/007/center.en.html#vertical",
            link: "https://www.w3.org/Style/Examples/007/center.en.html#vertical"
        },
        {
            startName: "\"align-self\", ",
            endName: "",
            linkName: "https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self",
            link: "https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self"
        },
        {
            startName: "\"CSS Layout - The position Property\", ",
            endName: "",
            linkName: "https://www.w3schools.com/css/css_positioning.asp",
            link: "https://www.w3schools.com/css/css_positioning.asp"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});