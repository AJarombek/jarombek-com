/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/26/2021
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
                "value":" In my relatively short time as a software engineer, I've used many different approaches to writing stylesheets for web applications.  My initial naive approach was writing a single CSS stylesheet per application, such as the ",
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
                        "value":"styles.css",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file for my SaintsXCTF application that I wrote in college.  Although this was a common practice in the early days of web development, lumping an entire website's styles into a single file has many downsides.  First, a single stylesheet is difficult to read and gets very long.  Second, it doesn't follow programming principles like ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-17-2019-terraform-module#dry-principal"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"DRY (Don't Repeat Yourself)",
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
                    "href":"https://jarombek.com/blog/sep-20-2018-intro-programming#abstraction"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"abstraction",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and encapsulation. Third, CSS lacks many programming language features which enable scalable and reusable code, such as functions, conditional statements, and variables. ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"June 29th, 2021"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" While writing this article I learned that CSS recently added variables into its specification",
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
                "value":".  Variable support is a great new addition (although, unsurprisingly, it is not supported by Internet Explorer). If CSS continues to improve, I may consider its use in certain future applications. ",
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
                "value":" To help bring order to the chaos of CSS stylesheets, different CSS methodologies were introduced.  These ensured that CSS code followed certain conventions, thus making it easier to read. One common CSS methodology is BEM, which sets naming conventions for HTML element classes, which are used in CSS code",
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
                "value":".  I never used these conventions since I believed there was a better alternative: ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-10-2018-sass"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Sass",
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
                "value":" Sass is a CSS preprocessor that adds features such as mixins, conditionals, extensions, variables, and more on top of CSS. I've used Sass in both prototype code and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"production level code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". In fact, Sass is the stylesheet language used for this website! ",
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
                "value":" The Sass code for this website (which is written in React) is structured so that each React component has its own stylesheet file.  Reusable Sass code is achieved with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-10-2018-sass#mixins"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"mixins",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"; mixins are groups of styles that are “mixed in” with other styles. While Sass is nice to work with, it's not without its shortcomings. ",
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
                "value":" For starters, there is no easy way to dynamically change styles based on application state.  You can't pass JavaScript variables containing values to Sass to determine which styles to show.  Also, even though Sass code can be split into many files, it still creates styles in a global namespace, which can result in unexpected conflicts between stylesheets.  One way to remedy this is to give each stylesheet a unique root level CSS selector and make all other styles exist in child CSS selectors. ",
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
                "value":" For example, in a UI component called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Note",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with a  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com/blob/master/src/client/Note.scss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Note.scss",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stylesheet, I defined a root level ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".jarbek-note",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS selector and two child CSS selectors: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".jarbek-note-icon",
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
                "value":".jarbek-note-body",
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
            "language":"Sass"
        },
        "value":"@import \"./styles/mixins/elegantIcons\";\n@import \"./styles/mixins/sylexiads\";\n@import \"./styles/variables\";\n\n.jarbek-note {\n  display: flex;\n  background-color: lighten($color-warning, 10%);\n\n  .jarbek-note-icon {\n    @include elegantIcons;\n    font-size: 32px;\n    padding: 10px 30px 10px 10px;\n    color: #555;\n  }\n\n  .jarbek-note-body {\n    @include sylexiad;\n  }\n}\n",
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
                "value":" These Sass shortcomings are remedied in JSS, my new favorite stylesheet approach for React applications.  Although JSS isn't perfect, it has many great qualities which are worth discussing. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is JSS"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is JSS?",
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
                "value":" JSS, sometimes referred to as “CSS in JavaScript”, is a JavaScript library which allows stylesheets to be authored in JavaScript code.  These stylesheets take advantage of the JavaScript language and its ability to create reusable code.  JSS also creates unique class names from your stylesheet code, removing any worries of conflicting stylesheet selectors",
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
                "value":". As for all those fancy Sass features such as functions, conditional statements, and variables - JSS uses JavaScript, which has all these features and more.  In my opinion, JavaScript has a far superior syntax to Sass. ",
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
                "value":" The greatest advantage of JSS is its ability to conditionally change styles depending on application state. Application state for UI applications written in JavaScript is stored in variables, containing primitive or object data types. I'll demonstrate this ability in this article, along with my  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-30-2021-react-jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"followup article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on React JSS. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Writing JSS Stylesheets"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Writing JSS Stylesheets",
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
                "value":" JSS code is written with the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.npmjs.com/package/jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jss",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" npm module. JSS also supports plugins, although I utilize the default plugins provided by the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.npmjs.com/package/jss-preset-default"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" jss-preset-default",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" npm module",
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
                "value":" I created an npm project which uses JSS to style some basic HTML elements.  The code for this project, located on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss"
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
                "value":", consists of an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" index.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application entrypoint file, an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file which adds additional elements and styles them with JSS, and a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/server.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"server.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file which starts a server with Express to host the webpage. ",
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
                "value":" The JSS application displays a running exercise log, similar to those shown on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com"
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
                "value":" website. When viewed in the browser, the UI looks like the following screenshot: ",
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
                    "src":"https://asset.jarombek.com/posts/6-29-21-jss-demo.png"
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
                "value":" The JSS code in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will be our main focus going forward.  At the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js#L7-L10"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" top of the file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I install JSS and initialize it with the default plugin preset. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import jss from \"jss\";\nimport preset from \"jss-preset-default\";\n\njss.setup(preset());\n",
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
                "value":" Next, I ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js#L33-L99"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" create all the JSS styles",
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
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const styles = {\n    '@global': {\n        body: {\n            backgroundColor: '#000',\n            margin: 0\n        }\n    },\n    page: {\n        width: '100%',\n        height: '100vh',\n        minHeight: 500,\n        backgroundColor: '#222',\n        margin: 0,\n        paddingTop: 25\n    },\n    exerciseLog: {\n        width: '70%',\n        backgroundColor: FeelColors[currentFeel],\n        border: '2px solid rgb(136, 136, 136)',\n        margin: '0 auto',\n        padding: 7,\n        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',\n        borderRadius: 3\n    },\n    headerSection: {\n        display: 'flex'\n    },\n    titles: {\n        display: 'block'\n    },\n    titleLink: {\n        color: 'rgb(51, 51, 51)',\n        fontSize: 16,\n        textDecoration: 'none',\n        ...robotoSlabMixin\n    },\n    title: {\n        fontSize: 16,\n        margin: 0,\n        textDecoration: 'underline',\n        ...robotoSlabMixin\n    },\n    metadata: {\n        display: 'block',\n        margin: '0 0 0 auto',\n\n        '& > p': {\n            margin: 0,\n            fontSize: 14,\n            textAlign: 'right',\n            ...robotoSlabMixin\n        }\n    },\n    bodySection: {\n        marginTop: 20\n    },\n    dataField: {\n        margin: 0,\n        fontSize: 14,\n        ...robotoSlabMixin\n    },\n    description: {\n        marginTop: 10,\n        fontSize: 14,\n        ...robotoSlabMixin\n    },\n};\n",
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
                "value":" As you can see, JSS styles are simply a JavaScript object!  This object contains properties, most of which represent class names.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"page",
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
                "value":"exerciseLog",
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
                "value":"headerSection",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are classes that are attached to HTML elements. While most styles created with JSS are written with classes, you can also use CSS at-rules such as media queries (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@media",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and keyframes (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@keyframes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":")",
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
                "value":". JSS also allows you to nest CSS selectors within classes, enabling more fine-grained control.  JSS has some great examples of these approaches on their ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://cssinjs.org/jss-syntax?v=v10.6.0"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"website",
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
                "value":" As I previously mentioned, JSS creates unique class names for its stylesheets.  This means that those ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"page",
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
                "value":"exerciseLog",
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
                "value":"headerSection",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties in the JavaScript object aren't the exact class names when rendered in the browser. Instead, JSS creates custom names loosely based on the property names. This behavior is proven by opening the developer tab of our web page and viewing the classes assigned to HTML elements. ",
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
                    "src":"https://asset.jarombek.com/posts/6-29-21-jss-class-names.png"
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
                "value":" As you can see, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"page",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was replaced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"page-0-0-1",
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
                "value":"exerciseLog",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was replaced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"exerciseLog-0-0-2",
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
                "value":"headerSection",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was replaced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"headerSection-0-0-1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This name mangling prevents naming conflicts when writing multiple classes with the same name in a different JSS style objects. ",
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
                "value":" One thing you may have noticed in the JSS styles was a property called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@global",
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
        "value":"'@global': {\n  body: {\n    backgroundColor: '#000',\n    margin: 0\n  }\n}\n",
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
                "value":" This property allows you to define styles in the global namespace as you would in traditional CSS code.  In other words, it bypasses JSS' unique class naming, instead applying styles to all HTML elements that match certain CSS selectors. ",
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
                "value":" Another thing demonstrated in my JSS code is how to utilize JavaScript language features to create reusable code. For example, I use a separate object and the JavaScript spread operator to apply matching styles to multiple classes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const robotoSlabMixin = {\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    fontFamily: 'RobotoSlab-Regular, Helvetica, serif'\n}\n\nconst styles = {\n    ...\n    titleLink: {\n        color: 'rgb(51, 51, 51)',\n        fontSize: 16,\n        textDecoration: 'none',\n        ...robotoSlabMixin\n    },\n    title: {\n        fontSize: 16,\n        margin: 0,\n        textDecoration: 'underline',\n        ...robotoSlabMixin\n    },\n    ...\n}\n",
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
                "value":" This code applies the styles in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"robotoSlabMixin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to both the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"titleLink",
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
                "value":"title",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" classes. In another example, I create an array of hex color codes and a number corresponding to an index in the array.  Both the array and index are used in the JSS style object to determine the background color of an element. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const FeelColors = [\n    '#EA9999',\n    '#FFAD99',\n    '#EAC199',\n    '#FFD699',\n    '#FFFFAD',\n    '#E3E3E3',\n    '#C7F599',\n    '#99D699',\n    '#99C199',\n    '#A3A3FF'\n];\n\nconst currentFeel = 6;\n\nconst styles = {\n    ...\n    exerciseLog: {\n        backgroundColor: FeelColors[currentFeel],\n        ...\n    },\n    ...\n};\n",
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-30-2021-react-jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"upcoming article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on React JSS, I will show how  reusability and dynamic styling can be used in a production application. ",
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
                "value":" The final piece of the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js#L101"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" creates a stylesheet from the JavaScript object containing JSS styles",
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
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss/index.js#L103-L129"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" attaches them to HTML elements",
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
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const { classes } = jss.createStyleSheet(styles).attach();\n\ndocument.body.innerHTML = `\n    >div class=\"${classes.page}\">\n        >div class=\"${classes.exerciseLog}\">\n            >div class=\"${classes.headerSection}\">\n                >div class=\"${classes.titles}\">\n                    >a class=\"${classes.titleLink}\">Andrew Jarombek>/a>\n                    >h6 class=\"${classes.title}\">Long Run>/h6>\n                >/div>\n                >div class=\"${classes.metadata}\">\n                    >p>Apr. 11th, 2021>/p>\n                    >p>RUN>/p>\n                >/div>\n            >/div>\n            >div class=\"${classes.bodySection}\">\n                >div>\n                    >p class=\"${classes.dataField}\">Location: Riverside, CT>/p>\n                    >p class=\"${classes.dataField}\">14.01 miles>/p>\n                    >p class=\"${classes.dataField}\">1:39:03 (7:04/mi)>/p>\n                >/div>\n                >div class=\"${classes.description}\">\n                    Went home to CT for the weekend to use the track on Saturday.  Got a nice long run in this morning\n                    as well, longest since last summer.\n                >/div>\n            >/div>\n        >/div>\n    >/div>\n`;\n",
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
                "value":" In this article I discussed many positive qualities of the JSS library.  These include the use of JavaScript syntax, style reusability, dynamic styling, and naming conflict resolution.  Despite these great qualities, JSS is not perfect.  IDE support isn't great, meaning you won't get the same autocompletion as you would with CSS or Sass.  Styles also need to be wrapped in quotes since they are string values assigned to properties.  This isn't quite as elegant as CSS or Sass where values such as ",
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
                "value":" or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"flex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are built into the language itself.  Finally, you need to remember to use camel case instead of dash case for styles.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"font-size",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in CSS and Sass is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"fontSize",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in JSS.  Once you get accustomed to JSS that last point isn't much of an issue. ",
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
                "value":" Even with these downsides, JSS is a great library that I highly recommend for new frontend applications, especially those written in React. In my  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-30-2021-react-jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I will discuss React JSS, a library that integrates JSS with React components. I will also showcase how it is used in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com"
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
                "value":" application. All the code from this article is located on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2021/06-Jun/06-29-jss"
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

postName = "jun-29-2021-jss";
postDate = new Date('2021-06-29T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "JSS: The New Standard for Stylesheets",
    description: `In this article I discuss positive qualities of the JSS library.  These include the use of JavaScript 
        syntax, style reusability, dynamic styling, and naming conflict resolution.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "JSS",
            picture: "https://asset.jarombek.com/logos/jss.png",
            color: "jss"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "CSS",
            picture: "https://asset.jarombek.com/logos/css.png",
            color: "css"
        },
        {
            name: "Sass",
            picture: "https://asset.jarombek.com/logos/sass.png",
            color: "sass"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Using CSS custom properties (variables)\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
        },
        {
            startName: "\"What is BEM?\", ",
            endName: "",
            linkName: "https://www.sitepoint.com/bem-smacss-advice-from-developers/#what-is-bem",
            link: "https://www.sitepoint.com/bem-smacss-advice-from-developers/#what-is-bem"
        },
        {
            startName: "\"JSS: Features\", ",
            endName: "",
            linkName: "https://cssinjs.org/features?v=v10.6.0",
            link: "https://cssinjs.org/features?v=v10.6.0"
        },
        {
            startName: "\"Default preset for JSS with selected plugins\", ",
            endName: "",
            linkName: "https://cssinjs.org/jss-preset-default/?v=v10.6.0",
            link: "https://cssinjs.org/jss-preset-default/?v=v10.6.0"
        },
        {
            startName: "\"Objects based styles syntax for declaring Style Sheets\", ",
            endName: "",
            linkName: "https://cssinjs.org/jss-syntax?v=v10.6.0",
            link: "https://cssinjs.org/jss-syntax?v=v10.6.0"
        },
        {
            startName: "\"At-rules\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
