/**
 * Script for the MongoDB Shell.
 * You are amazing and deserve all the best.
 * @author Andrew Jarombek
 * @since 11/2/2020
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
                "value":" Front-end applications, specifically those created with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=React&page=1"
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
                "value":", are built with small reusable JavaScript functions called ",
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
                        "value":" components",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Each component renders and handles the business logic for a small chunk of the application.  Components have props, state, and elements that render on the screen. ",
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
                "value":" For developers working on multiple React applications or working for an organization that uses React, there are benefits to using reusable component libraries.  Component libraries are shared amongst applications and contain generic components such as buttons, accordions, and form elements.  Besides the obvious benefit of code reuse, component libraries help enforce organizational style guides and allow developers to easily iterate on components used in all their applications.  Component library setup is easy and can save a lot of front-end development time in the long run. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Library Structure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Library Structure",
                "children":null
            }
        ]
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"jarombek-react-components\n|-- .storybook\n|-- components\n|    |-- src\n|    |-- stories\n|    +-- test\n+-- dist\n",
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
                "value":" The directory structure shown above matches my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" reusable component library",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  There are three top level directories.  ",
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
                        "value":".storybook",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" holds configuration for ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://storybook.js.org/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"storybook",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a visualization tool for components.  I use storybook to both view and test the functionality of my reusable components.  ",
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
                        "value":"components",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" holds React component source code, tests, and storybook stories.  Storybook stories display and serve as documentation for a component.  ",
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
                        "value":"dist",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the bundled and minimized code of the reusable component library.  This code is used by applications that utilize the component library. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Reusable Component Example"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Reusable Component Example",
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
                "value":" Inside the ",
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
                        "value":"components",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory of my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" reusable component library",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an ",
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
                        "value":"index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file which exports all the components in the ",
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
                        "value":"src",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory.  ",
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
                        "value":"index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the entry point for the library. ",
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
                "value":" Inside the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/tree/master/components/src"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"src",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory, each component has its own directory.  Components are split into multiple files: ",
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
                        "value":"<ComponentName>.js",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"styles.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
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
                        "value":"index.js",
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
                "value":" For example, I have a reusable component called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  All my reusable components are prefixed with ",
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
                        "value":"AJ",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" so that they are easy to recognize in application code.  A switch is a toggle with an on and off state, just like a typical light switch in a home. ",
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
                    "src":"https://asset.jarombek.com/posts/11-5-20-aj-switch.gif"
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has three source code files: ",
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
                        "value":"AJSwitch.js",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"styles.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
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
                        "value":"index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/\nblob/master/components/src/AJSwitch/AJSwitch.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AJSwitch.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component function.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/blob/master/components/src/AJSwitch/\nstyles.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"styles.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines the styles for the component written in JSS.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-react-components/blob/master/components/src/AJSwitch/index.js"
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
                "value":" exports the component function to the rest of the library. ",
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
                "value":" Below is an abbreviated code snippet of the component function declared in ",
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
                        "value":"AJSwitch.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Most of the omitted code determines which styles and classes are applied to the switch (depending on whether it's toggled on/off). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React, {useState} from 'react';\nimport PropTypes from 'prop-types';\nimport {createUseStyles} from 'react-jss';\n\nimport styles from './styles';\n\nconst useStyles = createUseStyles(styles);\n\n/**\n * Component representing an off and on switch.  The user can plug in custom logic which will occur\n * when the off/on state changes.\n * @param onChange Function that is called when the switch is toggled.  The function takes a single\n * boolean argument, whose value is {@code true} if the switch is on and {@code false} if the\n * switch is off.\n * @param initialState The initial on/off state of the switch.\n * @param disabled Whether clicking on the switch changes its state.\n * @param className Custom class attribute(s) attached to the component.\n * @return {*} React elements representing a toggleable switch.\n */\nconst AJSwitch = ({onChange, initialState=false, disabled=false, className}) => {\n  const classes = useStyles();\n  const [state, setState] = useState(initialState);\n\n  const onClick = () => {\n    if (!disabled) {\n      const newState = !state;\n      setState(newState);\n\n      if (typeof onChange === 'function') {\n        onChange(newState);\n      }\n    }\n  };\n\n  return (\n    <div className={mainClass} onClick={onClick}>\n      <div className={headClass}> </div>\n      <div className={tailClass}> </div>\n    </div>\n  );\n};\n\nAJSwitch.propTypes = {\n  onChange: PropTypes.func.isRequired,\n  initialState: PropTypes.bool,\n  disabled: PropTypes.bool,\n  className: PropTypes.string\n};\n\nexport default AJSwitch;\n",
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
                "value":" The JSS styles for the component are imported from ",
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
                        "value":"styles.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and created with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createUseStyles()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"useStyles()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" React hook",
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
                "value":".  Below is the stylesheet for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
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
        "value":"export default {\n  ajSwitch: {\n    display: 'flex',\n    height: '20px',\n    width: '36px',\n    cursor: 'pointer'\n  },\n  ajSwitchDisabled: {\n    cursor: 'default'\n  },\n  ajSwitchActive: {\n    flexDirection: 'row-reverse'\n  },\n  ajSwitchInactive: {\n    flexDirection: 'row'\n  },\n  ajSwitchHead: {\n    position: 'absolute',\n    height: '20px',\n    width: '20px',\n    borderRadius: '50%',\n    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24)'\n  },\n  ajSwitchHeadActive: {\n    backgroundColor: '#4b6cc9'\n  },\n  ajSwitchHeadInactive: {\n    backgroundColor: '#f5f5f5'\n  },\n  ajSwitchTail: {\n    height: '100%',\n    width: '100%',\n    borderRadius: '10px'\n  },\n  ajSwitchTailActive: {\n    backgroundColor: 'rgba(75, 108, 201, 0.5)'\n  },\n  ajSwitchTailInactive: {\n    backgroundColor: '#ccc'\n  }\n};\n",
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
                "value":" JSS is a library for writing CSS styles in JavaScript code.  I've found JSS to be a very flexible framework, with its greatest strength being the ability to adjust styles dynamically.  With JSS, any JavaScript value or object can be passed to the stylesheet object.  This process is further simplified with the React-JSS library; state, props, or other variables can be passed to the JSS object, allowing the styles to change as the React component updates",
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
                "value":". I plan to dedicate a future article to JSS where I will discuss its benefits and drawbacks compared to more traditional approaches like CSS or a CSS preprocessor. ",
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
                "value":" The final file, ",
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
                        "value":"index.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", simply exports the component using ES6 modules. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import AJSwitch from './AJSwitch';\n\nexport default AJSwitch;\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Viewing Components with Storybook"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Viewing Components with Storybook",
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
                "el":"a",
                "attributes":{
                    "href":"https://storybook.js.org/docs/react/get-started/introduction"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Storybook",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a visualization tool which allows components to be tested, viewed, and documented in isolation from the rest of an application.  It can be customized and re-styled to match your company brand or personal taste. ",
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
                "value":" I use Storybook for a couple of reasons.  First, Storybook is helpful during a components development process for debugging and testing out styles.  Second, it is useful for trying all the different props that a component can take in.  Third, it serves as helpful documentation and allows users to search for components  they want to use in their applications. ",
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
                "value":" Storybook contains multiple stories, with each story visualizing different configurations of a single component.  For example, I have a story for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component defined in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/tree/master/components/stories"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"stories",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/blob/master/components/stories/storiesAJSwitch.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" storiesAJSwitch.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  It shows two different ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component configurations. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React, {useState} from 'react';\nimport {storiesOf} from '@storybook/react';\nimport {AJSwitch} from '../src';\n\nstoriesOf('AJSwitch', module)\n  .add('default', () =>\n    <AJSwitch\n      onChange={state => console.info(`AJSwitch state: ${state}`)}\n      disabled={false}\n    />\n  )\n  .add('disabled', () =>\n    <AJSwitch\n      onChange={state => console.info(`Disabled AJSwitch state: ${state}`)}\n      initialState={true}\n      disabled={true}\n    />\n  );\n",
        "children":null
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
                    "src":"https://asset.jarombek.com/posts/11-5-20-aj-switch.png"
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
                "value":" Storybook is easily started locally on its own server with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"start-storybook -p 6006",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command (the port can be changed to your liking). ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"TypeScript/IDE Support"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"TypeScript/IDE Support",
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
                "value":" Although I decided to write my React component library in JavaScript, many of the applications that use it are written in TypeScript.  To avoid any type errors when using the component library in a TypeScript application, I created an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/blob/master/index.d.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"index.d.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
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
                        "value":"*.d.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" files are used by TypeScript to provide type information for JavaScript files",
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
                "value":".  They also help IDEs to properly autocomplete component imports and props when used in applications. ",
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
                "value":" For example, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component has the following type information defined in ",
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
                        "value":"index.d.ts",
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
            "language":"TypeScript"
        },
        "value":"import {FunctionComponent} from \"react\";\n\n// AJSwitch component\n\nexport interface AJSwitchProps {\n    onChange: Function;\n    initialState?: boolean;\n    disabled?: boolean;\n    className?: string;\n}\n\nexport const AJSwitch: FunctionComponent<AJSwitchProps>;\n",
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
                "value":"AJSwitchProps",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface provides type information for the props passed to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AJSwitch",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Finally, component typing information must be made available to applications that utilize the library.  This is accomplished by adding a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"typings",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"types",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") field to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-react-components/blob/master/package.json"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"package.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"typings",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" points to the type declaration file, which in my case is ",
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
                        "value":"index.d.ts",
                        "children":null
                    }
                ]
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
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n    ...\n    \"typings\": \"./index.d.ts\"\n}\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Handling Releases"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Handling Releases",
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
                "value":" When I release a new version of the component library, I add a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-react-components/\ntags"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"tag",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to its GitHub repository.  This tag is then referenced in an applications ",
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
                        "value":"package.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file.  For example, my SaintsXCTF web application’s ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/\npackage.json"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"package.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file has a dependency listed for my component library with a specific tag.  Here is how that dependency definition looks: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n    ...\n    \"dependencies\": {\n        \"jarombek-react-components\": \"git://github.com/ajarombek/jarombek-react-components.git#v0.3.7\",\n        ...\n    }\n}\n",
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
                "value":" Reusable component libraries reduce a developers workload when they are programming multiple UI applications. My reusable React components have allowed me to quickly create both full production frontend applications and small  prototypes.  You can find my component library code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-react-components"
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

postName = "nov-05-2020-react-component-library";
postDate = new Date('2020-11-05T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Building a Reusable React Component Library",
    description: `Besides the obvious benefit of code reuse, component libraries help to enforce organizational style 
        guides and allow developers to easily iterate on components used in all their applications.  Setup of a 
        component library is easy and can save a lot of front-end development time in the long run.`,
    date: postDate,
    type: "Retrospective",
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
        },
        {
            name: "JSS",
            picture: "https://asset.jarombek.com/logos/jss.png",
            color: "jss"
        },
        {
            name: "TypeScript",
            picture: "https://asset.jarombek.com/logos/ts.png",
            color: "typescript"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"JSS integration with React\", ",
            endName: "",
            linkName: "https://cssinjs.org/react-jss/?v=v10.4.0",
            link: "https://cssinjs.org/react-jss/?v=v10.4.0"
        },
        {
            startName: "\"What is the main usage of index.d.ts in Typescript?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/51517448",
            link: "https://stackoverflow.com/a/51517448"
        },
        {
            startName: "\"Publishing: Including declarations in your npm package\", ",
            endName: "",
            linkName: "https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package",
            link: "https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
