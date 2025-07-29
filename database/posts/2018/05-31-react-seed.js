/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/28/2018
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
                "value":" Since mid March a lot of my free time work has been dedicated to building React.js apps.  In fact, I built this website in the past month and a half with the MERN stack - MongoDB, Express, React and Node.js. Before I started building this website I built a sample prototype application using two key technologies - React and Webpack.  The knowledge I learned from this prototype helped jump start my work on the website. This discovery looks at the first technology used in the prototype application - React.  I will look at the Webpack portion of the prototype in my ",
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
                        "value":"next discovery post",
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
                "value":" React is a library for generating views.  A view is the UI of an application, and for a web application it is rendered HTML.  In a traditional web application, the client side JavaScript code manipulates the HTML view through the Document Object Model (DOM) API.  When using React on the client side, views are interacted with through a construct called the \"Virtual DOM.\" ",
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
                "value":" Since mid March a lot of my free time work has been dedicated to building React.js apps.  In fact, I built this website in the past month and a half with the MERN stack - MongoDB, Express, React and Node.js. Before I started building this website I built a sample prototype application using two key technologies - React and Webpack.  The knowledge I learned from this prototype helped jump start my work on the website. This discovery looks at the first technology used in the prototype application - React.  I will look at the Webpack portion of the prototype in my ",
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
                        "value":"next discovery post",
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
                "value":" React is a library for generating views.  A view is the UI of an application, and for a web application it is rendered HTML.  In a traditional web application, the client side JavaScript code manipulates the HTML view through the Document Object Model (DOM) API.  When using React on the client side, views are interacted with through a construct called the \"Virtual DOM.\" ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Virtual DOM"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The Virtual DOM is a layer of abstraction used over the Document Object Model (DOM) in React.  The Virtual DOM is kept in memory and is altered using the React library.  A React developer never interacts with the DOM API itself.  They only communicate with the Virtual DOM to change the UI.  Behind the scenes, React makes sure the Virtual DOM's virtual representation of the UI matches the state of the DOM",
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
                "value":" The biggest difference between the Virtual DOM and the DOM is that the Virtual DOM implements a declarative API while the DOM's API is imperative.  In other words, one programmer tells the DOM API how the view needs to change while another programmer tells the Virtual DOM what needs to change about the view.  Imperative is how something needs to be done to accomplish a task.  Declarative is what task should be accomplished. ",
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
                "value":" A more in depth analysis of imperative and declarative paradigms is beyond the scope of this discovery post, but in the context of the Virtual DOM a developer doesn't need to know how the DOM API works in order to update views.  All a React developer needs to tell the Virtual DOM is what they want the view to be.  React is declarative - it asks the developer for what needs to be accomplished and internally it takes care of how its done. ",
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
                "value":" Reacts declarative approach makes it easy and quick to create views without the learning curve of the DOM API. However, the Virtual DOM does have some drawbacks.  First off its memory intensive since the UI is kept in memory throughout the applications lifecycle",
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
                "value":".  With the DOM API you do not have this additional overhead.  Also you don't have the expressiveness and speed of the DOM API with the Virtual DOM (A major misconception is that React is faster than the traditional DOM - this is false",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"3,4",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  With the DOM API you know based on your code exactly how the DOM will respond, while with React you have to hope the Virtual DOM makes the correct choice for you. ",
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
                "value":" Despite the drawbacks using a declarative approach makes creating views a breeze for JavaScript developers.   React allows developers to think of view elements as a simple construct - the JavaScript object!  Views in React are made up of many building blocks called React Elements. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"React Element"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A JavaScript object that represents the smallest building block of the UI.  In a web environment a React element represents an HTML element (also referred to as a DOM node).  It can also represent a React component. While a React element can be created directly as a JavaScript object with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"React.createElement()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", doing this for an entire UI is very verbose.  Often React elements are created in JSX, which uses an HTML style syntax. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"React Component"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Components in React are a form of encapsulation over React elements.  Components promote code reuse, containing a piece of the UI that can be used multiple times throughout an application.  Components also have lifecycles and can contain ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"props",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (values passed to the component from other components) and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"state",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (data specific to the component instance). ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"props",
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
                "value":"state",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are what allow components to be dynamic, living entities. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"JSX"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" JSX is an extension of the JavaScript language created by Facebook for React.  It follows HTML-like syntax to create hierarchies of React elements.  For example, a React element in JavaScript is created like so: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"React.createElement(\"p\", null, \"Hi There!\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The same element is created in JSX with the following syntax: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<p>Hi There!</p>",
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
                "value":" With these concepts in mind, let's go over the React seed project I built!  Here is what the final product looks like: ",
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
                    "src":"https://asset.jarombek.com/posts/5-31-18-seed.png"
                },
                "value":null,
                "children":[

                ]
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Building the Application"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Building the Application",
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
                "value":" The first step of a React application is to build an HTML template for React.js to latch onto. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"utf-8\">\n    <title>React.js Webpack Seed</title>\n</head>\n<body>\n    <div id=\"react-container\"></div>\n</body>\n</html>\n",
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
                "value":" This HTML document contains a body with a single ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"div",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element.  React will begin rendering further HTML elements dynamically inside this element. ",
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
                "value":" You may be wondering where the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<script>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tag is for the JavaScript.  Webpack actually handles bundling the JavaScript and including it in the HTML document, so we don't have to worry about it!  I will discuss the Webpack aspects of this project in my next discovery post. ",
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
                "value":" To hook up React with this HTML element the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"render()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is called. The following code sample sets up the entire React application. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React from 'react';\nimport {render} from 'react-dom';\nimport App from './App';\n\nwindow.React = React;\n\nrender(\n    <App />,\n    document.getElementById('react-container')\n);\n",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"render()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function takes two parameters.  The first is the React element that will be rendered - which in this case is a React component I created called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"App",
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
                "value":"App",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component holds the UI and state for the entire application. ",
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
                "value":" The second parameter is the container in which the React element is rendered.  This is the only DOM API call made in the application.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"document.getElementById('react-container')",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" finds the HTML element with the given id in the previously shown HTML file. ",
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
                "value":" Once the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"render()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is called, the React application is successfully initialized.  It is time to build the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"App",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"App Component"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"App",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Component",
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
                "value":" There are a couple of different ways to build a component in React.  For the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"App",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component I used a class based approach.  Later you will see the other two components in the application using a functional approach. ",
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
                "value":" Why did I choose the class based approach over the functional one?  A class based component has access to lifecycle methods and component state.  On the other hand a functional component is stateless and only has one function - therefore there is no way to redefine the lifecycle methods. ",
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
                "value":" Since the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"App",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component needs to hold the state of my entire application, I need to use a class based component.   A class based component extends the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"React.Component",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class using ES6 class syntax. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"class App extends React.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            technologies: [\n            {\n                id: \"375e6c2b-d799-47ef-848d-84b42bef7a29\",\n                name: \"JavaScript\",\n                picture: \"./assets/js.png\",\n                release_date: moment('1995-12-04')\n            },\n            {\n                id: \"75bb50f5-9067-4a30-964f-a3f0d42b5ca4\",\n                name: \"Webpack\",\n                picture: \"./assets/webpack.png\",\n                release_date: moment('2012-03-10')\n            },\n            {\n                id: \"ed13c757-27cd-4cc1-b4ac-de449ee9cbae\",\n                name: \"React\",\n                picture: \"./assets/react.png\",\n                release_date: moment('2013-03-01')\n            },\n            {\n                id: \"d9f08c13-f59f-45bb-b8e9-0bd0114b0adf\",\n                name: \"Sass\",\n                picture: \"./assets/sass.png\",\n                release_date: moment('2006-11-28')\n            }\n            ]\n        }\n    }\n\n    render() {\n        const {technologies} = this.state;\n        return (\n            <div>\n                <div className=\"title-container\">\n                    <p className=\"title\">React Webpack Seed</p>\n                </div>\n                <p className=\"sub-title\">Technologies used</p>\n                <TechnologyList techList={technologies} />\n            </div>\n        );\n    }\n}\n",
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
                "value":" The application displays a list of different technologies.  In the code above these technologies are assigned to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this.state",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This variable holds the state for the component. ",
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
                "value":" Another major piece of this component is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"render()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  The return value of this function is what is rendered in the HTML.  The returned value is a hierarchy of React Elements in the form of JSX.  I also deconstructed the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"technologies",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" array from the state and passed it as a prop to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TechnologyList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component. Remember that props are simply values passed from one component to another.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TechnologyList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component orchestrates the UI display for all the technologies.  Let's look at that now. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"TechnologyList Component"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"TechnologyList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Component",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React from 'react';\nimport Technology from './Technology';\nimport PropTypes from 'prop-types';\n\nconst TechnologyList = ({ techList=[] }) =>\n    <div className=\"technology-list\">\n        { (techList.length === 0) ?\n            <p>No Data</p> :\n            techList.map(technology =>\n                <Technology key={technology.id} {...technology} />\n            )\n        }\n    </div>;\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"TechnologyList.propTypes = {\n    techList: PropTypes.array\n};\n\nexport default TechnologyList;\n",
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
                "value":" Unlike the main application component which holds state, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TechnologyList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a stateless functional component.  Keeping only one component stateful makes an application easier to manage since no child components will cause unexpected changes to the application state. ",
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
                "value":" An easy way to reason about stateless functional components is that the entire function is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"render()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  Whatever the function returns will be rendered to HTML. ",
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
                "value":" The functional component takes one parameter - the props passed to the component.  I destructured the props in the function parameter definition itself.  The syntax ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"techList=[]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines a prop called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"techList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with an empty array default value. ",
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
                "value":" In the JSX for this component I incorporated some JavaScript code to check if the technology list is populated. Depending on whether or not its populated, different React elements are rendered.  If there are objects in the list, a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Technology",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component is rendered for each one.  This shows the dynamic nature of React and JSX - depending on the state and props passed into a component different UIs are displayed. ",
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
                "value":" Finally I defined the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"propTypes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variable on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TechnologyList",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component.  This is used for property validation.  If a prop type is passed in to the component that doesn't match the type defined in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"propTypes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a warning is issued.  This is extremely helpful for catching bugs early and unit testing",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Technology Component"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"Technology",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Component",
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
                "value":" The last component displays information about the technology.  It is a functional stateless component.  You can use all the concepts I went over in this discovery post to understand what is happening here. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport moment from 'moment';\n\nconst Technology = ({ name, release_date, picture }) =>\n    <div className=\"technology\">\n        <figure>\n            <img src={ require(`${picture}`) } />\n        </figure>\n        <p className=\"tech-name\">{name}</p>\n        <p className=\"tech-release-date\">\n            {moment(release_date).format('MMMM Do, YYYY')}\n        </p>\n    </div>;\n\nTechnology.propTypes = {\n    name: PropTypes.string.isRequired,\n    release_date: PropTypes.instanceOf(Date).isRequired,\n    picture: PropTypes.string.isRequired\n};\n\nexport default Technology;\n",
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
                "value":" That is all the JavaScript React code needed to create the UI for my seed project.  I have enjoyed working in React so far.  Using functional techniques and pure JavaScript to create modular front-end code definitely makes React stand out.  I am still early on in the React discovery process, but considering I have a website in production written with the library I will continue to learn! ",
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
                "value":" You can find all the code along with Sass styling & Jest unit testing on  ",
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
                        "value":"Github",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Next time I will go over the ",
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
                "value":" portion of the project! ",
                "children":null
            }
        ]
    }
];

postName = "may-31-2018-react-seed";
postDate = new Date('2018-05-31T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "React & Webpack Seed Project Part I: Building With React",
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
            name: "JSX"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "ECMAScript 6",
            picture: "https://asset.jarombek.com/logos/es6.png",
            color: "javascript"
        },
        {
            name: "Webpack",
            picture: "https://asset.jarombek.com/logos/webpack.png",
            color: "webpack"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"What is the Virtual DOM?\", ",
            endName: "",
            linkName: "https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom",
            link: "https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"
        },
        {
            startName: "\"React (JavaScript library)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
            link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        },
        {
            startName: "\"Why Virtual DOM is slower\", ",
            endName: "",
            linkName: "https://medium.com/@hayavuk/why-virtual-dom-is-slower-2d9b964b4c9e",
            link: "https://medium.com/@hayavuk/why-virtual-dom-is-slower-2d9b964b4c9e"
        },
        {
            startName: "\"Myth: React is 'faster than DOM'\", ",
            endName: "",
            linkName: "https://twitter.com/dan_abramov/status/842329893044146176",
            link: "https://twitter.com/dan_abramov/status/842329893044146176"
        },
        {
            startName: "Alex Banks & Eve Porcello, ",
            endName: " (Sebastopol, CA: O'Reilly, 2017), 109",
            linkName: "Learning React",
            link: "http://shop.oreilly.com/product/0636920049579.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});