/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 11/8/2018
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
                "value":" My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-7-2018-react-d3-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" explored integrating D3 with a React.js project.  This post focuses on the D3 portion of the codebase, specifically how D3 builds a bar graph and updates it on data changes. ",
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
                "value":" D3 is a data visualization library built in JavaScript.  It binds text data to elements in the DOM",
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
                "value":". D3 provides methods that are easily chained to bind data to elements in the browser. ",
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
                "value":" My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-7-2018-react-d3-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" explored integrating D3 with a React.js project.  This post focuses on the D3 portion of the codebase, specifically how D3 builds a bar graph and updates it on data changes. ",
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
                "value":" D3 is a data visualization library built in JavaScript.  It binds text data to elements in the DOM",
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
                "value":". D3 provides methods that are easily chained to bind data to elements in the browser. ",
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
                "value":" Let's take a look at the code used to produce the D3 data visualization.  I created a bar chart representing the number of miles I ran each day.  The colors of the bars represent how I felt on each run. ",
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
                "value":" I created two methods to handle the data visualization.  The first generates the initial graph and the second updates the graph based on data changes.  These two methods are called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"generateGraph()",
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
                "value":"updateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" respectively. Here is an outline of the ",
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
                "value":" component which holds ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"generateGraph()",
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
                "value":"updateGraph()",
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
        "value":"class Graph extends React.Component {\n\n  constructor() {\n    ...\n  }\n\n  /**\n   * Called when the component first mounts.  At this point the initial graph is created.\n   */\n  componentDidMount() {\n    this.generateGraph(this.props);\n  }\n\n  /**\n   * Called when new props are passed to the component.\n   */\n  componentWillReceiveProps(nextProps) {\n    this.updateGraph(nextProps);\n  }\n\n  /**\n   * Use D3 to generate a Graph\n   * @param props - the React component props containing data to populate the graph with\n   */\n  generateGraph(props) {\n    ...\n  }\n\n  /**\n   * Use D3 to update the graph\n   * @param props - the React component props containing data to populate the graph with\n   */\n  updateGraph(props) {\n    ...\n  }\n\n  /**\n   * Render the JSX\n   */\n  render() {\n    ...\n  }\n}\n",
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
                "value":" Both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"generateGraph()",
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
                "value":"updateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" use component state variables.  State variables are created in the component constructor, holding information such as the height and width of the graph along with bar colors. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"constructor() {\n  super();\n\n  // Colors for the bars which are indexed based on the property 'feel'\n  const colors = [\n    'rgb(153, 0, 0)',\n    'rgba(204, 0, 0, .4)',\n    'rgba(255, 51, 0, .4)',\n    'rgba(204, 102, 0, .4)',\n    'rgba(255, 153, 0, .4)',\n    'rgba(255, 255, 51, .4)',\n    'rgba(187, 187, 187, .4)',\n    'rgba(115, 230, 0, .4)',\n    'rgba(0, 153, 0, .4)',\n    'rgba(0, 102, 0, .4)',\n    'rgba(26, 26, 255, .4)'\n  ];\n\n  this.state = {\n    colors,\n    graphWidth: 800,\n    graphHeight: 300,\n    graphPaddingBottom: 30\n  }\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"generateGraph()",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"generateGraph()",
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
                "value":"generateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked once the React component is mounted. It binds an  initial D3 graph to an HTML element in the DOM.  The D3 graph is populated with data from the React component props.  Since React.js uses a virtual DOM, I'm using a npm module called ",
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
                        "value":"react-faux-dom",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that tricks D3 into thinking its bound to the actual DOM.  In reality, it's bound to React's Virtual DOM.  I spoke more about react-faux-dom in my first ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-7-2018-react-d3-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"D3 and React",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" post. ",
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
                "value":" The first step of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"generateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"d3",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object to create a container for D3 on react-faux-dom's \"fake\" DOM.  This is accomplished with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"d3.select()",
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
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const svg = d3.select(faux)\n  .append(\"svg\")\n  .attr(\"width\", graphWidth)\n  .attr(\"height\", graphHeight + graphPaddingBottom);\n",
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
                "value":" Once D3 is connected to the \"fake\" DOM, all the standard D3 methods can be used.  After ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"select()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked, other D3 methods are chained onto its returned value, forming a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-6-2018-haskell-pt3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"function composition",
                        "children":null
                    }
                ]
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
                "value":"append(\"svg\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a new SVG DOM element and appends it to the \"fake\" DOM",
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
                "value":".  The last two ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"attr()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" methods set HTML attributes for the width and height of the SVG",
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
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"graphWidth",
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
                "value":"graphHeight",
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
                "value":"graphPaddingBottom",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are all defined in the component state. ",
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
                "value":" The SVG created in this code forms a canvas for the D3 visualization.  In fact, an SVG element in HTML is basically the same as the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<canvas>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element",
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
        "el":"definition",
        "attributes":{
            "word":"Scalable Vector Graphics (SVG)"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" SVG is a vector image format written in XML.  SVG's are two dimensional graphics that are often drawn in software such as Adobe Illustrator (although creating them with XML in a text editor is also possible). Vector images like SVG scale without loss of quality and are stored as 2D points, lines, and other shapes on an axis",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Inside the SVG canvas I added other shapes.  The first group of shapes represent rectangular bars used in the bar graph. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const graphData = props.data;\n\n// For each data point, create a rectangle bar in the graph\nsvg.selectAll(\"rect\")\n  .data(graphData)\n  .enter()\n  .append(\"rect\")\n  .attr(\"x\", (d, i) => widthScale(i))\n  .attr(\"y\", (d) => graphHeight - heightScale(d.miles))\n  .attr(\"width\", widthScale.bandwidth())\n  .attr(\"height\", (d) => heightScale(d.miles))\n  .attr(\"fill\", (d) => colors[d.feel])\n  .text((d) => `${d.miles}`);\n",
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
                "value":" This method chain starts with the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"svg",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which contains the SVG canvas.  Next I selected all the SVG ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<rect>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" elements that exist on the canvas with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"selectAll(\"rect\")",
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
                "value":".  These rectangles don't exist yet, but they will soon.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data(graphData)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes in the running mileage data, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"enter()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares that new elements are created for each piece of data, and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"append(\"rect\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" binds the data to rectangle elements. ",
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
                "value":" All the calls to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"attr()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" set the location, size, and color of the rectangles depending on the data passed in.  For example, here is a piece of data representing a week of running: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"[\n  { date: new Date('Sep 17, 2018'), miles: 3.2, feel: 6 },\n  { date: new Date('Sep 18, 2018'), miles: 2.17, feel: 5 },\n  { date: new Date('Sep 19, 2018'), miles: 2.2, feel: 6 },\n  { date: new Date('Sep 20, 2018'), miles: 2.16, feel: 5 },\n  { date: new Date('Sep 21, 2018'), miles: 4.72, feel: 9 },\n  { date: new Date('Sep 22, 2018'), miles: 4.79, feel: 7 },\n  { date: new Date('Sep 23, 2018'), miles: 0, feel: 0 }\n]\n",
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
                "value":" The arrow functions passed as arguments to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"attr()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" utilize D3 scales to help determine the size of the bar graph rectangles.  If you want to observe the scales in more detail you can check out the full ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/\nblob/master/2018/11-Nov/11-07-react-d3/d3-demo/src/Graph.js"
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
                "value":" code on GitHub. ",
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
                "value":" The next code chain places a SVG text element above every bar.  Text elements form a label displaying the number of miles run on a given day. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"svg.selectAll(\"text\")\n  .data(graphData)\n  .enter()\n  .append(\"text\")\n  .text((d) => d.miles)\n  .attr(\"x\", (d, i) => widthScale(i) + widthScale.bandwidth() / 2)\n  .attr(\"y\", (d) => graphHeight - heightScale(d.miles) + 18)\n  .attr(\"class\", \"graph-label\");\n",
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
                "value":" This method chain is extremely similar to the first one I showed.  In fact, the first four methods are exactly the same except replacing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\"rect\"",
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
                "value":"\"text\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The fifth method invocation ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"text((d) => d.miles)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" inserts a value into a newly created text element, specifically the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"miles",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"attr()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" methods set x and y coordinates for the text element and assign it a class attribute, which I reference in my CSS stylesheet. ",
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
                "value":" The final method chain generates a group of SVG elements that create an x-axis for the bar graph. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// The x-axis displayed under the graph\nconst xAxis = Graph.createXAxis(graphData, graphWidth);\n\nsvg.append(\"g\")\n  .attr(\"class\", \"x-axis\")\n  .attr(\"transform\", `translate(0,${graphHeight + 5})`)\n  .call(xAxis);\n",
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
                "value":" The SVG ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"g",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element is an invisible grouping object which holds other SVG elements.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"call()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"g",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and passes it to an x-axis.  The x-axis is created inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"g",
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
                "value":" Here is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createXAxis()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function which creates a new D3 axis: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"/**\n * Create a D3 X-Axis\n * @param data - all the data in the graph.  The length of the data is used in the x-axis\n * scale, and the dates in the data are displayed on the axis.\n * @param width - the width of the Graph\n * @return {*}\n */\nstatic createXAxis(data, width) {\n  // A D3 Scale for the width of the x-axis\n  const xAxisScale = d3.scaleTime()\n    .domain([\n      d3.min(data, (d) => d.date),\n      d3.max(data, (d) => d.date)\n    ])\n    .range([\n      (width / data.length) / 2,\n      width - (width / data.length) / 2\n    ]);\n\n  // A format for the date displayed on each x-axis tick mark\n  const dayOfWeek = d3.timeFormat(\"%a, %b. %d\");\n\n  return d3.axisBottom()\n    .scale(xAxisScale)\n    .ticks(7)\n    .tickFormat(dayOfWeek);\n}\n",
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
                "value":" The first operation in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createXAxis()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" builds a D3 scale.  In the previous method chains I referred you to the source code when encountering scales, but here I'll give more explanation.  A scale maps a range of possible input values to a range of possible output values",
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
                "value":".  Input values are called the domain and output values are called the range. ",
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
                "value":" For example, take a range of possible input values with 10 as the minimum and 40 as the maximum.  In other words, a domain of 10 to 40.  The list ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[10, 20, 40]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  fits into this domain.  This list is scaled to values between zero and one by creating a range of 0 to 1.  After the scale is executed over the data, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[10, 20, 40]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" becomes  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[0.25, 0.5, 1]",
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
                "value":" D3 offers a bunch of different scales.  For the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"xAxisScale",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I used a time scale called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"scaleTime()",
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
                "value":"scaleTime()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" maps time input values within ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"domain()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to output values within ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"range()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Both ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"domain()",
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
                "value":"range()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" specify maximum and minimum values. ",
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
                "value":" With the help of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"xAxisScale",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I created a D3 axis with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"d3.axisBottom()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The axis contains seven tick marks, one for each day of the week. ",
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
                "value":" The final operation inside ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"generateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" modifies the component state to include the SVG container element.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"svg",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is needed later on when updating the bar graph. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"this.setState({\n  svg\n})\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"updateGraph()",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"updateGraph()",
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
                "value":" Each time a user navigates between weeks, the bar graph must update.  When the user changes the week it wishes to view, the props sent to the ",
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
                "value":" component change.  In turn, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"updateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked and passed the new props containing new graph data.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"updateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also retrieves values from the component state and generates scales for the bar graph. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"updateGraph(props) {\n  const graphData = props.data;\n  const graphHeight = this.state.graphHeight;\n  const graphWidth = this.state.graphWidth;\n  const colors = this.state.colors;\n\n  const heightScale = Graph.createHeightScale(graphData, graphHeight);\n  const widthScale = Graph.createWidthScale(graphData, graphWidth);\n  const xAxis = Graph.createXAxis(graphData, graphWidth);\n\n  ...\n}\n",
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
                "value":" The rest of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"updateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function body is similar to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"generateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" except without certain initialization methods. The biggest addition to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"updateGraph()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"transition()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, which creates smooth transitions between different bar graphs! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"updateGraph(props) {\n  ...\n\n  this.state.svg\n    .selectAll(\"rect\")\n    .data(graphData)\n    .transition()\n    .attr(\"y\", (d) => graphHeight - heightScale(d.miles))\n    .attr(\"height\", (d) => heightScale(d.miles))\n    .attr(\"fill\", (d) => colors[d.feel]);\n\n  this.state.svg\n    .selectAll(\"text\")\n    .data(graphData)\n    .transition()\n    .text((d) => d.miles)\n    .attr(\"x\", (d, i) => widthScale(i) + widthScale.bandwidth() / 2)\n    .attr(\"y\", (d) => graphHeight - heightScale(d.miles) + 18);\n\n  this.state.svg\n    .select(\".x-axis\")\n    .call(xAxis);\n}\n",
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
                "value":" And just like that I have a fully functioning bar graph!  The full code with inline documentation is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/11-Nov/\n11-07-react-d3/d3-demo/src"
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
                "value":" D3 is a really interesting library to work with.  It greatly simplifies the creation of data visualizations. I wish I knew about it when creating my first website ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"!  I can't wait to use D3 on this website to showcase my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/stats"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" programming language statistics",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"! ",
                "children":null
            }
        ]
    }
];

postName = "nov-10-2018-react-d3-pt2";
postDate = new Date('2018-11-10T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Using D3 in React Part II - D3 Data Visualization",
    description: `This post focuses on how D3 builds a bar graph and updates it on data changes.`,
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
        },
        {
            name: "SVG",
            picture: "https://asset.jarombek.com/logos/svg.png",
            color: "svg"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Scott Murray, ",
            endName: ", 2nd ed (Sebastopol, CA: O'Reilly, 2017), 67",
            linkName: "Interactive Data Visualization for the Web",
            link: "http://shop.oreilly.com/product/0636920037316.do"
        },
        {
            startName: "",
            endName: ", 71",
            linkName: "Murray.",
            link: "http://shop.oreilly.com/product/0636920037316.do"
        },
        {
            startName: "",
            endName: ", 91",
            linkName: "Murray.",
            link: "http://shop.oreilly.com/product/0636920037316.do"
        },
        {
            startName: "",
            endName: ", 53",
            linkName: "Murray.",
            link: "http://shop.oreilly.com/product/0636920037316.do"
        },
        {
            startName: "\"Vector graphics\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Vector_graphics",
            link: "https://en.wikipedia.org/wiki/Vector_graphics"
        },
        {
            startName: "",
            endName: ", 80",
            linkName: "Murray.",
            link: "http://shop.oreilly.com/product/0636920037316.do"
        },
        {
            startName: "",
            endName: ", 117-118",
            linkName: "Murray.",
            link: "http://shop.oreilly.com/product/0636920037316.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});