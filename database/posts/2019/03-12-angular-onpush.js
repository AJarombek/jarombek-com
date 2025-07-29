/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 3/11/2019
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
                "value":" In the last few months I've written articles about lifecyles in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/jan-18-2019-react-lifecycles"
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
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nnov-24-2018-angular-lifecycles"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Angular",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Certain lifecycles in React and Angular are triggered by their respective change detection mechanisms.  In React the change detection mechanism is triggered whenever a components state changes or the properties passed from a parent component change.  In Angular the change detection mechanism is triggered whenever a DOM event occurs or values used in the component template are mutated (along with async code returning, timeouts completing, etc.). ",
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
                "value":" Angular also allows developers to change the change detection strategy on a per-component basis.  This post explores the two change detection strategies - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
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
                "value":"OnPush",
                "children":null
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

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In the last few months I've written articles about lifecyles in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/jan-18-2019-react-lifecycles"
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
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nnov-24-2018-angular-lifecycles"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Angular",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Certain lifecycles in React and Angular are triggered by their respective change detection mechanisms.  In React the change detection mechanism is triggered whenever a components state changes or the properties passed from a parent component change.  In Angular the change detection mechanism is triggered whenever a DOM event occurs or values used in the component template are mutated (along with async code returning, timeouts completing, etc.). ",
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
                "value":" Angular also allows developers to change the change detection strategy on a per-component basis.  This post explores the two change detection strategies - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
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
                "value":"OnPush",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"How Default change detection works"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"How ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Change Detection Works",
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
                "value":" By default, Angular uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ChangeDetectionStrategy.Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" change detection strategy.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tracks alterations to Angular's two-way data binding system.  One thing this strategy checks for is changes to variables in the component templates",
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
                "value":".  Variable alterations include both value and reference changes. ",
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
                "value":" Another thing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" checks for is DOM events.  At a low level Angular monkey patches functions in the DOM API such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"addEventListener()",
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
                "value":".  This allows Angular to perform its own logic whenever the DOM is altered or interacted with. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Monkey Patch"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Alterations to a function or other program components at runtime.  The patch is only visible to the current programs execution context.  Monkey patching occurs in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nsep-14-2018-groovy-dynamic"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"dynamic programming languages",
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
                "value":" Other things ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" change detection checks for includes asynchronous callbacks and timeout completions",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"How OnPush change detection works"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"How ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Change Detection Works",
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
                "value":"ChangeDetectionStrategy.OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" change detection is used as an optimization technique.  For DOM events ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" works similarly to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The DOM API is monkey patched and change detection runs when a DOM event occurs. ",
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
                "value":" Differences arise when handling variable changes in component templates.  By using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", we tell Angular that the component uses immutable objects in its template",
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
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will only trigger change detection when a template variable reference changes.  Change detection will ",
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
                        "value":"not",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" trigger when a template variable is mutated. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Change Detection Project"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Change Detection Project",
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
                "value":" To help visualize the differences between ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
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
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I created an Angular application with two nearly identical components.  One uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the other uses ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Default",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" change detection.  I log every time a change detection cycle occurs to make things clearer. ",
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
                    "src":"https://asset.jarombek.com/posts/3-12-19-cd-project.gif"
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
                "value":" The major takeaway from this project is that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"OnPush",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" results in fewer change detection cycles.  However, be careful and make sure all objects are immutable. If variables mutate, unexpected UI changes (or lack thereof) are likely to occur. ",
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
                "value":" I find it very interesting how Angular handles its change detection mechanism.  I look forward to learn more about the topic in the future.  You can check out the code for my change detection project on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/03-Mar/03-12-angular-onpush"
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

postName = "mar-12-2019-angular-onpush";
postDate = new Date('2019-03-12T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Angular: Default vs. OnPush Change Detection",
    description: `Angular allows us to change the change detection strategy on a per-component 
      basis.  This post explores the two change detection strategies - Default and OnPush.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Angular",
            picture: "https://asset.jarombek.com/logos/angular.png",
            color: "angular"
        },
        {
            name: "React",
            picture: "https://asset.jarombek.com/logos/react.png",
            color: "react"
        },
        {
            name: "TypeScript",
            picture: "https://asset.jarombek.com/logos/ts.png",
            color: "typescript"
        },
        {
            name: "DOM"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Angular Change Detection - How Does It Really Work?\", ",
            endName: "",
            linkName: "https://bit.ly/2Uw6HuV",
            link: "https://bit.ly/2Uw6HuV"
        },
        {
            startName: "\"Overriding browser default mechanisms\", ",
            endName: "",
            linkName: "https://bit.ly/2NW0nub",
            link: "https://bit.ly/2NW0nub"
        },
        {
            startName: "\"Angular 2, 4 — Visualizing Change Detection (Default vs OnPush)\", ",
            endName: "",
            linkName: "https://bit.ly/2HeXh3E",
            link: "https://bit.ly/2HeXh3E"
        },
        {
            startName: "\"A Comprehensive Guide to Angular onPush Change Detection Strategy\", ",
            endName: "",
            linkName: "https://bit.ly/2NYIevI",
            link: "https://bit.ly/2NYIevI"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});