/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 1/15/2019
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
                "value":" In a previous article I looked at ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-24-2018-angular-lifecycles"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" lifecycles in the Angular framework",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This post looks at lifecycles in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=react&page=1"
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
                "value":", a front-end library first released in 2013 by Facebook (after AngularJS and before ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=angular&page=1"
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
                "value":"). If you want to learn more about React, I've written multiple posts about it in the past (including an ",
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
                        "value":"introduction to the basics",
                        "children":null
                    }
                ]
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" I enjoy working in React more than Angular nowadays.  React feels simpler for developing website components.  As this post reveals, the lifecycles of React components are equally simple. ",
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
                "value":" In a previous article I looked at ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-24-2018-angular-lifecycles"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" lifecycles in the Angular framework",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This post looks at lifecycles in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=react&page=1"
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
                "value":", a front-end library first released in 2013 by Facebook (after AngularJS and before ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=angular&page=1"
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
                "value":"). If you want to learn more about React, I've written multiple posts about it in the past (including an ",
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
                        "value":"introduction to the basics",
                        "children":null
                    }
                ]
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" I enjoy working in React more than Angular nowadays.  React feels simpler for developing website components.  As this post reveals, the lifecycles of React components are equally simple. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Differences between React and Angular Lifecycles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Differences between React and Angular Lifecycles",
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
                "value":" While Angular has ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-6-2018-angular-5-first-impressions#directives"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" directives",
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
                    "href":"https://jarombek.com/blog/jan-6-2018-angular-5-first-impressions#modules-components"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" components",
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
                    "href":"https://jarombek.com/blog/may-31-2018-react-seed#react-component"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React only has components",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Therefore you don't have to worry about directive lifecycles in React. ",
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
                "value":" React and Angular handle state differently.  The state of a React application is usually held in a single root component.  State lives in a property called ",
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
                "value":" and is updated from the components ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  Many components are called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-31-2018-react-seed#technologylist-component"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" functional components",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" because they don't hold state.  If functional components need to change application state, they delegate the task to the root component.  Functional components don't have lifecycles, so lifecycle methods are only used in root components holding application state. ",
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
                "value":" The state in an Angular application is often distributed amongst many components.  This is due to different mechanisms of change management and data binding in Angular.  While React uses one-way data binding, Angular uses two-way data binding. ",
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
                "value":" One-way data binding is when changes to application state only occur in a components code.  Application state does not change when DOM events occur, however DOM events can trigger code that changes application state.  In React, functional components can be provided callback functions to change state in the root component. These functions often respond to DOM events such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"onInput",
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
                "value":"onClick",
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
                "value":" Two-way data binding is when both component code and DOM events cause application state to change. In Angular, DOM events often change state in the component, causing more than one component to hold application state.  Despite differences with two-way data binding, its possible to write stateless components in Angular as well",
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
                "value":". Writing stateless Angular components sounds like a fun thing to try out in the future.  I'll also cover more differences between one and two way data binding in a future article. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"React Lifecycles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"React Lifecycles",
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
                "value":" React lifecycles are grouped into two distinct categories.  Some lifecycles are invoked during the component mounting process, while others are invoked as the component updates.  These groupings of lifecycles are also present in Angular, although the change detection mechanism is different for Angular updating lifecycles. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Mounting Lifecycles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Mounting Lifecycles",
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
                "value":" The mounting process is when a React component is added to the DOM.  As we make changes to the virtual DOM held in memory, React makes sure that the real DOM reflects those changes.  The mounting lifecycles provide hook methods that occur while React alters the DOM. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"constructor",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"constructor(props)",
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
                "value":" The ES6 class constructor for a React component isn't a lifecycle hook method.  However, I included it in this discussion because it's the first method invoked while a component is mounted",
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
                "value":". The main uses of the constructor are to interact with props provided by the parent component and set the initial component state.  The constructor is the only time a components ",
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
                "value":" property should be modified directly.  All other mutations should go through the components ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method. ",
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
                "value":" When using server-side rendering, the ",
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
                "value":" property may already be initialized when the components constructor is invoked on the client side.  This is due to the components ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" lifecycle hook already executing on the server.  For my website, I simply wrapped my ",
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
                "value":" initializer in a conditional.  This makes sure any state populated during server-side rendering isn't wiped out by the client. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"class Blog extends React.Component {\n\n  constructor(props) {\n    super(props);\n\n    // Only set the state to an empty object if the state doesn't already exist -\n    // it may have been set on the server side render\n    if (!this.state) {\n      this.state = {};\n    }\n  }\n\n  ...\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"getDefaultProps and getInitialState"
        },
        "value":null,
        "children":[
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-header-code"
                },
                "value":"getDefaultProps()",
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
                    "className":"jarombek-header-code"
                },
                "value":"getInitialState()",
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
                "value":" While React components using ES6 classes have constructors, pre-ES6 code can't utilize this syntax feature. The alternative to an ES6 class is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createReactClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"create-react-class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" npm module.  Prior to React 15.5.0, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"React.createClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" served the same purpose as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createReactClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Nowadays ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"React.createClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is deprecated and pending removal. ",
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
                "value":" Since ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createReactClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can't contain a constructor, the methods ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getDefaultProps()",
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
                "value":"getInitialState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are used as replacements.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getDefaultProps()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the default property values for the component (if properties aren't passed in). ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getInitialState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" serves the main purpose of the constructor - setting the components initial state. ",
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
                "value":" The following code snippet demonstrates ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getDefaultProps()",
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
                "value":"getInitialState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createReactClass()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The full component code is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\nblob/master/2019/01-Jan/01-19-react-lifecycles/react/lifecycle-demo/src/Lifecycle2.js"
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
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const Lifecycle = createReactClass({\n  getDefaultProps() {\n    return {\n      component: 'Unknown'\n    };\n  },\n  getInitialState() {\n    return {};\n  },\n  ...\n});\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"componentWillMount",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"componentWillMount()",
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
                "value":" Once the constructor finishes executing, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked.  This occurs when the component is about to mount onto the DOM.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a good place to perform additional setup for the component (such as background tasks).  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is also invoked on the server when using server-side rendering. Therefore any component state initialized in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on the server is passed to the client when the webpage loads. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"render",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"render()",
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
                "value":"render()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the most important method of a React component. In fact, functional components are basically a single ",
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
                "value":" method.  The purpose of ",
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
                "value":" is to render React elements that make up a component onto the DOM.  In most cases React elements are represented with JSX. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"componentDidMount",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"componentDidMount()",
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
                "value":"componentDidMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked right after the component is rendered on the DOM.  This is a good place to make API calls or interact with JavaScript global objects specific to the webpage (such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"window",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  It's also an ideal location to use third-party libraries that need access to the DOM, such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/nov-7-2018-react-d3-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"D3 for data visualizations",
                        "children":null
                    }
                ]
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
                "value":"componentDidMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" occurs after the component exists in the DOM, it can't be invoked on the server with server-side rendering.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentDidMount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a safe location to hold client specific code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"componentWillUnmount",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"componentWillUnmount()",
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
                "value":" When a React component is about to be removed from the DOM, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillUnmount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked.  This is a good place to perform necessary cleanup work for the component. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Updating Lifecycles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Updating Lifecycles",
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
                "value":" The component update process occurs when the change detection mechanism determines the component needs to be altered.  Components are updated whenever the state changes or the properties passed from the parent component change",
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
                "value":".  State changes occur when the components ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is invoked. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"componentWillReceiveProps",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"componentWillReceiveProps(nextProps)",
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
                "value":" Invoked if new properties are passed to a component.  Its okay to call ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"componentWillReceiveProps()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", making it unique amongst updating lifecycle methods.  Invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setState()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the other updating lifecycles results in an infinite loop. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"shouldComponentUpdate",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"shouldComponentUpdate(nextProps, nextState)",
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
                "value":"shouldComponentUpdate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" determines whether a component update should occur.  When it returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"true",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" the component updates in the DOM.  When it returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"false",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" the update is called off, avoiding an expensive DOM alteration.  This makes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shouldComponentUpdate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" a good optimization technique to avoid unnecessary component updates. ",
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
                "value":" While Angular has no direct equivalent to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shouldComponentUpdate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", you can change its change detection mechanism.  By default, Angular checks if any DOM events occur or values used in the component template are mutated",
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
                "value":".  This behavior is changed with the ",
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
                "value":" change detection mechanism. ",
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
                "value":" checks if object references to template values are changed (among other differences), resulting in simple mutations not triggering the change detection mechanism",
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
                "value":". You can learn more about the differences between Angulars two change detection mechanisms in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-12-2019-angular-onpush"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"discovery post",
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
            "title":"componentWillUpdate",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"componentWillUpdate(nextProps, nextState)",
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
                "value":" Invoked right before the component updates.  This is a good location to compare the incoming properties and state to the ones currently in the component. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"componentDidUpdate",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"componentDidUpdate(prevProps, prevState)",
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
                "value":" Invoked right after the component updates.  This is a good location to compare the old properties and state to the ones currently in the component. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Lifecycle Project"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Lifecycle Project",
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
                "value":" I created a project in React which displays a new component each time an App lifecycle is invoked. It also demonstrates how ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shouldComponentUpdate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can avoid unnecessary DOM alterations.  The code is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\ntree/master/2019/01-Jan/01-19-react-lifecycles/react"
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
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/1-19-19-react-lifecycles.gif"
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
                "value":" I really enjoy comparing React and Angular.  While most of my development these days is in React, comparing it to other major front-end libraries/frameworks is a good practice!   Understanding how lifecycle events work in Angular and React is important for developing good applications. ",
                "children":null
            }
        ]
    }
];

postName = "jan-19-2019-react-lifecycles";
postDate = new Date('2019-01-19T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "React Lifecycles",
    description: `In general I enjoy working in React more than Angular nowadays.  React feels 
        simpler to me for developing website components.  As this post reveals, the lifecycles of 
        React components are equally simple.`,
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
            name: "Angular",
            picture: "https://asset.jarombek.com/logos/angular.png",
            color: "angular"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
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
            startName: "\"Stateless components\", ",
            endName: "",
            linkName: "https://toddmotto.com/stateful-stateless-components#stateless-components",
            link: "https://toddmotto.com/stateful-stateless-components#stateless-components"
        },
        {
            startName: "Alex Banks & Eve Porcello, ",
            endName: " (Sebastopol, CA: O'Reilly, 2017), 142",
            linkName: "Learning React",
            link: "http://shop.oreilly.com/product/0636920049579.do"
        },
        {
            startName: "",
            endName: ", 146",
            linkName: "Banks.",
            link: "http://shop.oreilly.com/product/0636920049579.do"
        },
        {
            startName: "\"How does the default change detection mechanism work?\", ",
            endName: "",
            linkName: "https://bit.ly/2QTqKRl",
            link: "https://bit.ly/2QTqKRl"
        },
        {
            startName: "\"The OnPush change detection mode\", ",
            endName: "",
            linkName: "https://bit.ly/2Rve9sx",
            link: "https://bit.ly/2Rve9sx"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});