/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/29/2018
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
                "value":" In the client side code for my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" MEAN stack prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I used Sass for stylesheets instead of CSS.  I experimented with Sass before, but this was my first time using it in a full project.  Until native CSS adds the features that Sass provides, I will continue using Sass for stylesheets in the future. ",
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
                "value":" Sass is a CSS preprocessor with Ruby style syntax.  Its a superset of CSS, so any CSS document is valid Sass",
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
                "value":".  Sass adds lots of new features including variable definitions, mixins, and other syntax to help create reusable components in stylesheets.  The biggest problem I had with CSS is that it ends up looking like a jumbled mess with many repeated styles.  With Sass, I can create reusable styles! ",
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
                "value":" In the client side code for my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" MEAN stack prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I used Sass for stylesheets instead of CSS.  I experimented with Sass before, but this was my first time using it in a full project.  Until native CSS adds the features that Sass provides, I will continue using Sass for stylesheets in the future. ",
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
                "value":" Sass is a CSS preprocessor with Ruby style syntax.  Its a superset of CSS, so any CSS document is valid Sass",
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
                "value":".  Sass adds lots of new features including variable definitions, mixins, and other syntax to help create reusable components in stylesheets.  The biggest problem I had with CSS is that it ends up looking like a jumbled mess with many repeated styles.  With Sass, I can create reusable styles! ",
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
                "value":" In the past I played around with basic Sass features like inline comments and variables.  For example, a variable can be defined for a color used throughout the application. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"$baby-blue: #8bb3f4;\n$baby-blue-light: #ccdfff;\n$light-gray: #aaa;\n$off-white: #eee;\n",
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
                "value":" Variables can be referenced inside a CSS declaration: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"button {\n    border-color: $baby-blue;\n}\n",
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
                "value":" This time around I experimented with more complex Sass features.  I will discuss these exciting features next! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Mixins"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Mixins",
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
                "value":" Mixins are an extremely powerful Sass property that create reusable style blocks. Mixins are created with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@mixin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive and are used in a style declaration with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@include",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directive",
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
                "value":".  For example, in my application I created a mixin for each of my fonts: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"@mixin dyslexie {\n    background-color: transparent !important;\n    font-family: 'Dyslexie', Helvetica, sans-serif !important;\n    font-weight: normal;\n    font-style: normal;\n}\n",
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
                "value":" Then I included the mixin in a declaration: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"body {\n    @include dyslexie;\n}\n",
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
                "value":" Every element in the website that needed a specific font used its mixin!  I also used mixins to perform more complex operations like transformations.  Another powerful feature of mixins is the ability to pass in arguments.  These arguments can also have default values!  Here is a mixin that I created to apply a transition to a property: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"/**\n* a mixin that simplifies transition generation\n* @param $property - the property of the element that transitions\n* @param $result - the resulting style of the transition\n* @param $time - the time the transition takes to complete (optional)\n*/\n@mixin transition($property, $result, $time: .3s) {\n    transition: #{$property} $time ease;\n\n    // #{} syntax compiles the contents as a property name or selector\n    &:hover {\n        #{$property}: $result;\n    }\n}\n",
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
                "value":" This mixin creates a transition style for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$property",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" parameter.  If no ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$time",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument is passed to the mixin, the default 0.3 seconds is used. ",
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
                "value":" Another cool piece of this code is the ampersand (",
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
                "value":") placeholder.  This placeholder is a reference to the parent selector",
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":hover",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" pseudo-class is applied to the parent selector that the mixin is included in! ",
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
                "value":" Here is some code where I include the transition mixin: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"#login-button {\n    @include transition(\"background-color\", $light-gray);\n}\n",
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
                "value":" Mixins allow for reduced code and less repetition in Sass files! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Extends"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Extends",
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
                "value":" When there are multiple selectors that use the same styles, each selector can extend a single class. Here is an example: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Sass"
        },
        "value":"// Define a general style to be extended for <span> elements\n.span-style {\n    @include sylexiad;\n    color: #990000;\n}\n\nspan {\n    @extend .span-style;\n}\n",
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
                "value":" Now all the styles in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".span-style",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class are used in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"span",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element.  The best part is that this class can be extended into other CSS selectors as well!  It is yet another great way to create reusable styling. ",
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
                "value":" I'm having a ton of fun exploring Sass and all the exciting possibilities it offers.  While I hope these features eventually make it into the native CSS spec, for now Sass is a nice alternative.  I'm sure this won't be my last discovery on the matter! ",
                "children":null
            }
        ]
    }
];

postName = "mar-10-2018-sass";
postDate = new Date('2018-03-10T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "What I Learned About Sass",
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
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Dan Cederholm, ",
            endName: " (New York: A Book Apart, 2013), 14",
            linkName: "Sass for Web Designers",
            link: "https://abookapart.com/products/sass-for-web-designers"
        },
        {
            startName: "",
            endName: ", 44",
            linkName: "Ibid.",
            link: "https://abookapart.com/products/sass-for-web-designers"
        },
        {
            startName: "",
            endName: ", 36",
            linkName: "Ibid.",
            link: "https://abookapart.com/products/sass-for-web-designers"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});