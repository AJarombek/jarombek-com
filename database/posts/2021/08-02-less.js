/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/1/2021
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
                "value":" When it comes to CSS preprocessors (stylesheet languages that add features on top of CSS and transpile to CSS), in the past I've often used Sass.  When I first started learning about CSS preprocessors, the two main choices were Sass and Less.  The reason I decided to learn Sass instead of Less was due to its greater popularity and me trying to follow industry trends.  At the time, Bootstrap had just released version 4, which switched its stylesheet language from Less to Sass",
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
                "value":".  In my mind, it didn't make sense for me to learn a preprocessor language that was being left in the dust. ",
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
                "value":" Over time, I increasingly wished to learn the difference between Sass and Less.  It was hard for me to tell if there were differences in the functionality of Sass or Less, or if Sass was picked as the favorite due to syntactical preferences and third-party library support.  Last year I wrote two front-end application prototypes, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/graphql-react-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"graphql-react-prototype",
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
                    "href":"https://github.com/AJarombek/apollo-client-server-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"apollo-client-server-prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Instead of using a stylesheet technology I already knew such as Sass or JSS, I decided to learn Less and use it as the stylesheet language for these prototypes. ",
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
                "value":" Although I hoped to find interesting differences between the functionality of Less and Sass, in reality I found that both languages are very similar.  While I'm sure engineers who work with both technologies extensively can find subtle differences between the two, from a high level they provide the same capabilities on top of CSS.  Similar to Sass, Less has variables, mixins, conditionals, and loops.  The main difference between the two is the syntax. ",
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
                "value":" In some cases, Sass has superior syntax.  As an example, ",
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
                "value":"  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://sass-lang.com/documentation/at-rules/control/for"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"loops in Sass",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" have better syntax than ",
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
                "value":" ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://sass-lang.com/documentation/at-rules/control/for"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" loops in Less",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", with Sass having a built-in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" rule and Less requiring you to use a mixin",
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
                "value":".  In other cases, syntactical preferences are more subjective.  For example, a variable with the name ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"myVariable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is written as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$myVariable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Sass and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@myVariable",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Less.  Neither is superior, it just comes down to personal taste. ",
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
                "value":" So why did Sass gain more traction in the software engineering world than Less?  Since both languages have similar functionality, to some extent I believe it is because most engineers prefer the syntax of Sass",
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
                "value":".  I also think third-party Sass libraries and frameworks, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://compass-style.org/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Compass",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", swayed engineers who enjoyed their out-of-the-box functionality.  In my opinion, Sass does have slightly cleaner syntax, so I am more inclined to use it instead of Less in my projects. ",
                "children":null
            }
        ]
    },
    {
        "el":"note",
        "attributes":{
            "type":"info"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Currently, my favorite approach for authoring stylesheets is JSS, a \"CSS in JavaScript\" library.  You can read about it in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-29-2021-jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JSS",
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
                    "href":"https://jarombek.com/blog/jun-30-2021-react-jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JSS in React",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" articles. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Improving Stylesheet Code With Less"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Improving Stylesheet Code With Less",
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
                "value":" Let's look at a few Less code samples from the prototype applications I've written.  First, much like Sass, Less supports nested CSS rules.  Here is an example from one of my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ngraphql-react-prototype/blob/master/src/components/items/RepositoryCount.less"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React component stylesheets",
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
            "language":"Less"
        },
        "value":"@import \"../../vars\";\n\n.repository-count {\n  grid-area: repoCount;\n  height: 125px;\n\n  h3, h2 {\n    text-align: center;\n  }\n\n  h3 {\n    font-size: 14px;\n  }\n\n  h2 {\n    font-size: 42px;\n    .hoverPurple()\n  }\n\n  .error {\n    height: 100%;\n  }\n}\n",
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
                "value":" Notice how ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"h3",
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
                "value":"h2",
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
                "value":".error",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are nested inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".repository-count",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This code snippet also shows how Less supports stylesheet imports. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@import \"../../vars\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" imports a ",
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
                        "value":"var.less",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, making all its variables and mixins available to the CSS rules.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ngraphql-react-prototype/blob/master/src/vars.less"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"vars.less",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file has the following content: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Less"
        },
        "value":"@darkTheme: #454443;\n@darkerTheme: darken(@darkTheme, 10%);\n@defaultFontColor: #e9eaed;\n@contrastPurple: #8a4cff;\n\n.hoverPurple() {\n  color: lighten(@contrastPurple, 20%);\n  transition: color ease 0.4s;\n\n  &:hover {\n    color: @contrastPurple;\n  }\n}\n",
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
                "value":" The first four lines define four variables, each representing a color.  These variables are used in CSS declarations elsewhere in the stylesheet code.  For example, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@defaultFontColor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable is assigned to a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"color",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"color: @defaultFontColor;",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declaration.  The second color variable, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@darkerTheme: darken(@darkTheme, 10%)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", showcases one of the functions provided by Less called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"darken()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Similar to Sass, Less provides ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://lesscss.org/functions/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"built-in functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which make it easier to write styles",
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
                "value":".  While CSS has some ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.w3schools.com/cssref/css_functions.asp"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"built-in functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", Sass and Less greatly improve the function offering",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"vars.less",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also defines a mixin named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".hoverPurple",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Mixins are a group of CSS declarations and nested CSS selectors which are \"mixed in\" with other CSS rules.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".hoverPurple",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is \"mixed in\" with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"h2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CSS selector in the first code sample shown in this article. ",
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
                "value":" Less has more features than those shown in this article.  However, in my experience, variables, nested CSS rules, functions, and mixins are the ones most commonly used.  Less has pretty good documentation online, so you can learn more on their ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://lesscss.org/features/#features-overview-feature"
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
                "value":" As far as CSS preprocessors are concerned, Less is a formidable option.  Although I prefer the syntax of Sass, Less has nearly identical features, and configuring it with an application is easy.  All the Less code I've written exists in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/graphql-react-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"graphql-react-prototype",
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
                    "href":"https://github.com/AJarombek/apollo-client-server-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"apollo-client-server-prototype",
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

postName = "aug-2-2021-less";
postDate = new Date('2021-08-02T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Writing Less Stylesheets",
    description: `As far as CSS preprocessors are concerned, Less is a formidable option.  Although I prefer the 
        syntax of Sass, Less has nearly identical features, and configuring it with an application is easy.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Less",
            picture: "https://asset.jarombek.com/logos/less.png",
            color: "less"
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
            startName: "\"Theming Bootstrap: Introduction\", ",
            endName: "",
            linkName: "https://getbootstrap.com/docs/4.0/getting-started/theming/#introduction",
            link: "https://getbootstrap.com/docs/4.0/getting-started/theming/#introduction"
        },
        {
            startName: "\"@for\", ",
            endName: "",
            linkName: "https://sass-lang.com/documentation/at-rules/control/for",
            link: "https://sass-lang.com/documentation/at-rules/control/for"
        },
        {
            startName: "\"Recursive Mixins\", ",
            endName: "",
            linkName: "https://lesscss.org/features/#mixins-feature-loops-feature",
            link: "https://lesscss.org/features/#mixins-feature-loops-feature"
        },
        {
            startName: "\"Differences between SCSS and LESS\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/52003564",
            link: "https://stackoverflow.com/a/52003564"
        },
        {
            startName: "\"Functions\", ",
            endName: "",
            linkName: "https://lesscss.org/functions/",
            link: "https://lesscss.org/functions/"
        },
        {
            startName: "\"CSS Functions Reference\", ",
            endName: "",
            linkName: "https://www.w3schools.com/cssref/css_functions.asp",
            link: "https://www.w3schools.com/cssref/css_functions.asp"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
