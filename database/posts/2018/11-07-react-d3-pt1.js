/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 11/7/2018
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
                "value":" D3 (Data Driven Documents) is a JavaScript library for creating data visualizations on the web.  One of the challenges with D3 is integrating it with ",
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
                        "value":" React.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a front-end JavaScript library written by Facebook.  Complications occur because both React and D3 work by manipulating the DOM, and React manipulates the DOM through a layer of abstraction called the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-31-2018-react-seed#virtual-dom"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Virtual DOM",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Projects containing two libraries that manipulate the DOM through different philosophies can lead to conflicts",
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
                "value":" Luckily I'm not the first person to encounter the issue of integrating React and D3.  There are many solutions, and I chose to use a library called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/Olical/react-faux-dom"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" react-faux-dom",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  React-faux-dom creates a \"fake\" DOM implementation, tricking D3 into thinking its working with the real DOM",
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
                "value":".  In reality its delegating work to the Virtual DOM and React! ",
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
                "value":" D3 (Data Driven Documents) is a JavaScript library for creating data visualizations on the web.  One of the challenges with D3 is integrating it with ",
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
                        "value":" React.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a front-end JavaScript library written by Facebook.  Complications occur because both React and D3 work by manipulating the DOM, and React manipulates the DOM through a layer of abstraction called the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/may-31-2018-react-seed#virtual-dom"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Virtual DOM",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Projects containing two libraries that manipulate the DOM through different philosophies can lead to conflicts",
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
                "value":" Luckily I'm not the first person to encounter the issue of integrating React and D3.  There are many solutions, and I chose to use a library called ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/Olical/react-faux-dom"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" react-faux-dom",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  React-faux-dom creates a \"fake\" DOM implementation, tricking D3 into thinking its working with the real DOM",
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
                "value":".  In reality its delegating work to the Virtual DOM and React! ",
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
                "value":" I created a basic bar graph with D3, React.js, and react-faux-dom.  The bar graph displays mileage from runs I went on over a week span.  I have a similar bar chart in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek?utf8=%E2%9C%93&tab=repositories&q=Saints-XCTF&type=&language="
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF applications",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Here is the final product: ",
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
                    "src":"https://asset.jarombek.com/posts/11-7-18-bar-chart.gif"
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
                "value":" I used ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/facebook/create-react-app"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"create-react-app",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to reduce the startup time for my React project.  I built a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\nmay-31-2018-react-seed#react-component"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React Component",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" called ",
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
                "value":" which creates buttons for navigating between weeks in the bar graph. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import runData from './runData';\n\nclass App extends React.Component {\n\n  constructor() {\n    super();\n\n    // The running logs initially shown in the graph are from the latest week\n    this.state = {\n      dataIndex: runData.length - 1\n    };\n  }\n\n  /**\n   * View the previous week of running logs\n   */\n  onClickPrev() {\n    const newIndex = this.state.dataIndex - 1;\n\n    if (newIndex >= 0) {\n      console.info(`Click Previous to index: ${newIndex}`);\n      this.setState({dataIndex: newIndex});\n    }\n  }\n\n  /**\n   * View the next week of running logs\n   */\n  onClickNext() {\n    const newIndex = this.state.dataIndex + 1;\n\n    if (newIndex < runData.length) {\n      console.info(`Click Next to index: ${newIndex}`);\n      this.setState({dataIndex: newIndex});\n    }\n  }\n\n  /**\n   * Render the JSX\n   */\n  render() {\n    return (\n      <div className=\"app\">\n        <h1>Bar Graph</h1>\n        <button onClick={() => this.onClickPrev()}>Prev</button>\n        <button onClick={() => this.onClickNext()}>Next</button>\n        <div className=\"graph-container\">\n          <Graph data={runData[this.state.dataIndex]} />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default App;\n",
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
                "value":" The imported module ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"runData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains daily running mileage along with ratings of how each run felt from 0-9.  The daily statistics are grouped by week. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const runData = [\n  [\n    { date: new Date('Sep 17, 2018'), miles: 3.2, feel: 6 },\n    { date: new Date('Sep 18, 2018'), miles: 2.17, feel: 5 },\n    { date: new Date('Sep 19, 2018'), miles: 2.2, feel: 6 },\n    { date: new Date('Sep 20, 2018'), miles: 2.16, feel: 5 },\n    { date: new Date('Sep 21, 2018'), miles: 4.72, feel: 9 },\n    { date: new Date('Sep 22, 2018'), miles: 4.79, feel: 7 },\n    { date: new Date('Sep 23, 2018'), miles: 0, feel: 0 }\n  ],\n  ...\n]\n",
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
                "value":" The following code sets up the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Graph",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component with react-faux-dom. The full code for ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/11-Nov/\n11-07-react-d3/d3-demo/src/Graph.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Graph.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" including the D3 configuration is on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"class Graph extends React.Component {\n\n  constructor() {\n    super();\n\n    // Colors for the bars which are indexed based on the feel property\n    const colors = [\n      ...\n    ];\n\n    this.state = {\n      colors,\n      graphWidth: 800,\n      graphHeight: 300,\n      graphPaddingBottom: 30\n    }\n  }\n\n  static propTypes = {\n    data: PropTypes.array.isRequired\n  };\n\n  static defaultProps = {\n    data: [],\n    chart: 'loading'\n  };\n\n  /**\n   * Called when the component first mounts.  At this point the initial graph is created.\n   */\n  componentDidMount() {\n    this.generateGraph(this.props);\n  }\n\n  /**\n   * Called when new props are passed to the component.  Check to see if the new props contains\n   * new graph data.  If so, generate a new graph.  Otherwise ignore the new props.\n   * @param nextProps - the new props passed to the component.\n   */\n  componentWillReceiveProps(nextProps) {\n    if (this.props.data !== nextProps.data) {\n      console.info('Received New Props');\n      this.updateGraph(nextProps);\n    }\n  }\n\n  /**\n   * Use D3 to Generate a Graph\n   * @param props - the React component props containing data to populate the graph with\n   */\n  generateGraph(props) {\n    ...\n  }\n\n  /**\n   * Use D3 to update the graph\n   * @param props - the React component props containing data to populate the graph with\n   */\n  updateGraph(props) {\n    ...\n  }\n\n  /**\n   * Render the JSX\n   */\n  render() {\n    return (\n      <div className=\"graph\">\n        {this.props.chart}\n      </div>\n    );\n  }\n}\n\nexport default withFauxDOM(Graph);\n",
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
                "value":"withFauxDOM()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the export statement attaches the \"fake\" DOM onto the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Graph",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component.  With the addition of two style sheets ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/11-Nov/\n11-07-react-d3/d3-demo/src/Graph.css"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Graph.css",
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
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/11-Nov/11-07-react-d3/d3-demo/src/App.css"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"App.css",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", this React project produces the graph shown in the prior animation! ",
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
                "value":" This post laid the foundation for building D3 visualizations with React.  The ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/nov-10-2018-react-d3-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the series will explore how D3 generates the bar graph! ",
                "children":null
            }
        ]
    }
];

postName = "nov-7-2018-react-d3-pt1";
postDate = new Date('2018-11-07T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Using D3 in React Part I - Project Integration",
    description: `D3 (Data Driven Documents) is a JavaScript library for creating data 
        visualizations in the web.  One of the challenges with D3 is integrating it with the React 
        front-end JavaScript library.`,
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
            name: "D3",
            picture: "https://asset.jarombek.com/logos/d3.png",
            color: "d3"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Data Visualization"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"D3 within React the right way\", ",
            endName: "",
            linkName: "https://bit.ly/2QnU9na",
            link: "https://bit.ly/2QnU9na"
        },
        {
            startName: "\"Bringing Together React, D3, And Their Ecosystem: React Faux DOM\", ",
            endName: "",
            linkName: "https://bit.ly/2Ori03J",
            link: "https://bit.ly/2Ori03J"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});