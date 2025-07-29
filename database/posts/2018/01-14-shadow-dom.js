/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/28/2018
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
                "value":" I was recently reading a book on Angular 2 and came across an HTML concept I had never heard of before - the shadow DOM.  Angular utilizes the shadow DOM to modularize HTML and CSS code, although you can also use the shadow DOM API in native JavaScript",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A shadow DOM results in modularization by removing its contents from the main Document Object Model. The shadow DOM is attached onto an existing HTML element using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Element.attachShadow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function",
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
                "value":".  You can then add new HTML code or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<style>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements containing CSS to the shadow DOM.  All of the styles and HTML specified in the shadow DOM are hidden from the outer HTML implementation.  Shadow DOM helps avoid CSS style conflicts, HTML ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" overlaps, and more! ",
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
                "value":" I was recently reading a book on Angular 2 and came across an HTML concept I had never heard of before - the shadow DOM.  Angular utilizes the shadow DOM to modularize HTML and CSS code, although you can also use the shadow DOM API in native JavaScript",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A shadow DOM results in modularization by removing its contents from the main Document Object Model. The shadow DOM is attached onto an existing HTML element using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Element.attachShadow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function",
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
                "value":".  You can then add new HTML code or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<style>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements containing CSS to the shadow DOM.  All of the styles and HTML specified in the shadow DOM are hidden from the outer HTML implementation.  Shadow DOM helps avoid CSS style conflicts, HTML ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"id",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" overlaps, and more! ",
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
                "value":" Here is an example of some HTML code that creates a shadow DOM (notice that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shadow",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable is a new shadow DOM element and I add elements to the shadow using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"innerHTML",
                "children":null
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
            "language":"HTML"
        },
        "value":"<!DOCTYPE html>\n<html>\n    <head>\n        <meta chartset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    </head>\n    <body>\n        <!-- This div will be the holder for the shadow dom -->\n        <div id=\"host\"></div>\n        <div>\n            <style>\n                p {color: red}\n            </style>\n        </div>\n        <p>I'm outside the shadow.</p>\n    </body>\n</html>\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// Attach the shadow dom\nconst shadow = document.querySelector(\"#host\").attachShadow({mode: 'open'});\n\n// Create the shadow dom's contents\nshadow.innerHTML = \"<p>I'm in a Shadow!</p>\";\nshadow.innerHTML += `<style>\n                        p {\n                            font-style: italic;\n                            color: #999;\n                            font-weight: bold;\n                        }\n                    </style>`\n",
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
        "attributes":{
            "id":"webresult-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/1-14-18-webresult.png"
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
                "value":" Upon inspecting the HTML in the browsers developer tools, you will notice that the shadow DOM is wrapped in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"#shadow-root",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" item, which simply specifies that a shadow DOM exists",
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
        "el":"figure",
        "attributes":{
            "id":"html-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/1-14-18-html.png",
                    "align":"middle"
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
                "value":" The ability to modularize a HTML document is awesome!  I will utilize the shadow DOM in my Angular code and look into other native HTML modularization techniques like reusable custom elements in the future! ",
                "children":null
            }
        ]
    }
];

postName = "jan-14-2018-shadow-dom";
postDate = new Date('2018-01-14T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "The Shadow Dom",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "DOM"
        },
        {
            name: "HTML",
            picture: "https://asset.jarombek.com/logos/html.png",
            color: "html"
        },
        {
            name: "CSS",
            picture: "https://asset.jarombek.com/logos/css.png",
            color: "css"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Yakov Fain &amp; Anton Moiseev, ",
            endName: " (Shelter Island, NY: Manning, 2017), 84",
            linkName: "Angular 2 Development with TypeScript",
            link: "https://www.manning.com/books/angular-2-development-with-typescript"
        },
        {
            startName: "\"Shadow DOM\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM",
            link: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM"
        },
        {
            startName: "\"What is shadow root\", ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/34119639/what-is-shadow-root",
            link: "https://stackoverflow.com/questions/34119639/what-is-shadow-root"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});