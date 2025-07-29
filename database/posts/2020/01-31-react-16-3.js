/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

// I'm so happy that you are part of this world and with us all.

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
                "value":" When I was interviewing for jobs in the fall, one interviewer asked me if I had React 16 experience. I said \"yes\", figuring I must have worked on React 16 features during my year and a half experience.  I've worked with React since I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-webpack-seed"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" React and Webpack seed application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in March 2018.  Since then I wrote ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (the website you are currently viewing) in React along with contributing to a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/resume?page=5"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"client-facing React application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for seven months at my job. ",
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
                "value":" As the interview questions rolled on, it became obvious that I wasn't utilizing the latest React features. Luckily I aced the coding assignment and other technology questions, so the interview ended up going well. ",
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
                "value":" When I was interviewing for jobs in the fall, one interviewer asked me if I had React 16 experience. I said \"yes\", figuring I must have worked on React 16 features during my year and a half experience.  I've worked with React since I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-webpack-seed"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" React and Webpack seed application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in March 2018.  Since then I wrote ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (the website you are currently viewing) in React along with contributing to a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/resume?page=5"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"client-facing React application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for seven months at my job. ",
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
                "value":" As the interview questions rolled on, it became obvious that I wasn't utilizing the latest React features. Luckily I aced the coding assignment and other technology questions, so the interview ended up going well. ",
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
                "value":" One of the reasons I enjoy interviewing is that it gives me a new perspective of the code I'm writing and technologies I'm using.  I learn where the gaps are in my knowledge and can move forward, trying my best to fill them.  This article is the first of many where I'll fill my React 16 knowledge gap. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"React 16.3"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"React 16.3",
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
                "value":" For this article, I created a demo application showing off the new React 16.3 features.  React 16.3 was released on March 29th, 2018 (just around the same time I started learning React!).  In the demo,  each major feature has its own page with a walkthrough and some sample components.  All the code is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo"
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Click ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"here",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to view the demo application or click on the image below! ",
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
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"img",
                        "attributes":{
                            "className":"jarombek-blog-image",
                            "src":"https://asset.jarombek.com/posts/1-31-20-react-16-3.png"
                        },
                        "value":null,
                        "children":[

                        ]
                    }
                ]
            }
        ]
    }
];

postName = "jan-31-2020-react-16-3";
postDate = new Date('2020-01-31T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring New Features in React 16.3",
    description: ``,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "React",
            picture: "https://asset.jarombek.com/logos/react.png",
            color: "react"
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
            startName: "\"Context\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/context.html",
            link: "https://reactjs.org/docs/context.html"
        },
        {
            startName: "\"When to Use Context\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/context.html#when-to-use-context",
            link: "https://reactjs.org/docs/context.html#when-to-use-context"
        },
        {
            startName: "\"Using Context API in React (Hooks and Classes)\", ",
            endName: "",
            linkName: "https://www.taniarascia.com/using-context-api-in-react/",
            link: "https://www.taniarascia.com/using-context-api-in-react/"
        },
        {
            startName: "\"Context.Consumer\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/context.html#contextconsumer",
            link: "https://reactjs.org/docs/context.html#contextconsumer"
        },
        {
            startName: "\"Hooks API Reference: useContext\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/hooks-reference.html#usecontext",
            link: "https://reactjs.org/docs/hooks-reference.html#usecontext"
        },
        {
            startName: "\"createRef API\", ",
            endName: "",
            linkName: "https://reactjs.org/blog/2018/03/29/react-v-16-3.html#createref-api",
            link: "https://reactjs.org/blog/2018/03/29/react-v-16-3.html#createref-api"
        },
        {
            startName: "\"forwardRef API\", ",
            endName: "",
            linkName: "https://reactjs.org/blog/2018/03/29/react-v-16-3.html#forwardref-api",
            link: "https://reactjs.org/blog/2018/03/29/react-v-16-3.html#forwardref-api"
        },
        {
            startName: "\"Use componentWillMount or componentDidMount lifecycle functions for async request in React\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/47393005",
            link: "https://stackoverflow.com/a/47393005"
        },
        {
            startName: "\"Using Derived State in React: getDerivedStateFromProps\", ",
            endName: "",
            linkName: "https://alligator.io/react/get-derived-state/#getderivedstatefromprops",
            link: "https://alligator.io/react/get-derived-state/#getderivedstatefromprops"
        },
        {
            startName: "\"React.Component: static getDerivedStateFromProps()\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops",
            link: "https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops"
        },
        {
            startName: "\"getSnapshotBeforeUpdate() in ReactJS\", ",
            endName: "",
            linkName: "https://www.learnperday.com/react/course/getsnapshotbeforeupdate.php#defination",
            link: "https://www.learnperday.com/react/course/getsnapshotbeforeupdate.php#defination"
        },
        {
            startName: "\"React.Component: getSnapshotBeforeUpdate()\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate",
            link: "https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate"
        },
        {
            startName: "\"Strict Mode\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/strict-mode.html",
            link: "https://reactjs.org/docs/strict-mode.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
