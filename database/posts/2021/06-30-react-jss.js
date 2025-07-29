/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/27/2021
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
                "value":" In my ",
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
                        "value":"previous article on JSS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I discussed the improvements  JSS makes over traditional ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=CSS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CSS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stylesheets and CSS preprocessors such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=Sass&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Sass",
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
                    "href":"https://jarombek.com/blog?query=JSS&page=1"
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
                "value":" utilizes the highly expressive ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=JavaScript&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"JavaScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" language, enables style reusability, dynamic styling, and provides name conflict resolution.  Although JSS works with any front-end framework or library, it really shines when paired with React. In this article, I begin by discussing the basics of JSS in React applications. Then, I show sample code from my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application, which is running in production and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" utilizes JSS for its stylesheets",
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
            "title":"React JSS Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"React JSS Basics",
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
                "value":" To use JSS in React applications, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.npmjs.com/package/react-jss/v/10.6.0"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"react-jss",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" npm module is used instead of the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.npmjs.com/package/jss"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jss",
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
                    "href":"https://www.npmjs.com/package/jss-preset-default"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jss-preset-default",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" modules used in my prior article. Behind the scenes, React JSS uses both these modules, but exposes a React hook API for application code to use",
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
                "value":" The main exported method of the React JSS library is ",
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
                "value":", which takes a JavaScript object representing JSS styles as an argument and returns a React hook for use in components. This React hook, commonly named ",
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
                "value":", returns a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"classes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object which can be attached to JSX/HTML elements as their class attribute. ",
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
                "value":" For example, my SaintsXCTF application has a basic ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/src/components/shared/CheckBox/CheckBox.tsx"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"CheckBox",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component represented by the following function: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import React from 'react';\nimport { createUseStyles } from 'react-jss';\nimport styles from './styles';\n\nconst useStyles = createUseStyles(styles);\n\nconst CheckBox: React.FunctionComponent<Props> = ({ id, checked, onChange, className }) => {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.checkBox} onClick={onChange}>\n      <input type=\"checkbox\" id={id} className={classes.input} checked={checked} />\n      <span>{checked && <p>N</p>}</span>\n    </div>\n  );\n};\n\nexport default CheckBox;\n",
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
                "value":" I simplified this code a bit to focus on the parts that utilize JSS.  The code starts by importing the ",
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
                "value":" function from the React JSS library with the line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"import { createUseStyles } from 'react-jss'",
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
                "value":"createUseStyles()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used outside of the component function, taking a JSS styles object as an argument and returning a React hook definition, in my case named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"useStyles",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The first line of the component function, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const classes = useStyles()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", invokes the React hook to retrieve all the stylesheet classes. The JSS classes are properties on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"classes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object. In the components return statement, JSS classes are passed to JSX elements via the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"className",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prop. For example, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<div>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"className",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prop is passed the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"checkBox",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" JSS class. ",
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
                "value":" In this code sample, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"styles",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object passed as an argument to ",
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
                "value":" is imported from a separate file. I generally follow this practice to logically separate component code from stylesheet code. The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"styles",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object, located in a  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/src/components/shared/CheckBox/styles.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"styles.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, has the following code: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import Colors from '../../../styles/colors';\nimport { FontMixins } from '../../../styles/mixins';\n\nexport default {\n  checkBox: {\n    display: 'flex',\n    cursor: 'pointer'\n  },\n  input: {\n    display: 'none',\n\n    '& + span': {\n      ...FontMixins.elegantIcons(),\n      display: 'inline-block',\n      border: '2px solid #999',\n      borderRadius: 2,\n      width: 16,\n      height: 16,\n      position: 'relative',\n\n      '& > p': {\n        color: '#FFF',\n        position: 'absolute',\n        margin: 0,\n        top: -1,\n        left: -3\n      }\n    },\n\n    '&:checked + span': {\n      backgroundColor: Colors.sxctfRed,\n      border: `2px solid ${Colors.sxctfRed}`\n    }\n  }\n};\n",
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
                "value":" At a basic level, this object has two properties representing two classes: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"checkBox",
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
                "value":"input",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These properties are objects themselves, containing CSS styles as properties.  I'm also importing additional code for reusability purposes, which I will discuss next. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"React JSS Production Code Examples"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"React JSS Production Code Examples",
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
                "value":" In this section, I discuss different approaches for creating reusable and dynamic stylesheet code with JSS.  All of the code examples shown come from my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application, with the front-end source code maintained in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints-xctf-web",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Variables for Colors"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Variables for Colors",
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
                "value":" In web applications, the same color schemes are often used throughout the UI components.  In traditional CSS (before variables were added to the specification), these colors were copy-pasted throughout the stylesheets whenever they were needed.  Maintaining colors in a singular location and referencing them in stylesheets is a better approach for writing clean code and easing future refactoring. ",
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
                "value":" In my application, I maintain a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/src/styles/colors.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"colors.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file which contains all the commonly reused colors. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"const Colors = {\n  sxctfRed: '#990000',\n  spotPaletteBrown: '#a96a5b',\n  spotPaletteCream: '#ffe6d9',\n  spotPaletteBlue: '#58b7d2',\n  statusSuccess: '#28a745',\n  statusWarning: '#ffc107',\n  statusFailure: '#dc3545',\n  lightestBackground: '#fdfdfd',\n  lightBackground: '#f5f5f5'\n};\n\nexport const FeelColors = [\n  '#EA9999',\n  '#FFAD99',\n  '#EAC199',\n  '#FFD699',\n  '#FFFFAD',\n  '#E3E3E3',\n  '#C7F599',\n  '#99D699',\n  '#99C199',\n  '#A3A3FF'\n];\n\nexport default Colors;\n",
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
                "value":" By default this file exports the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Colors",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object, which contains properties with hex color codes.  There is also a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FeelColors",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" list, which is used for application specific logic dealing with how user's felt on their exercises. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FeelColors",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will look familiar if you read my ",
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
                        "value":"prior article on JSS",
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
                "value":" In component stylesheets, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Colors",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object is simply ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/src/components/shared/NotFound/styles.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" imported and its properties are referenced",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A simplified example is shown below, with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"container",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class holding a single  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"backgroundColor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" style. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import Colors from '../../../styles/colors';\n\nexport default {\n  container: {\n    backgroundColor: Colors.lightBackground\n  }\n};\n",
        "children":null
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Mixins for Reusable Styles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Mixins for Reusable Styles",
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
                "value":" In some cases, there are groups of styles that are reused in multiple stylesheets.  In Sass these groups of styles are called mixins, since they can be “mixed in” with other styles.  In my JSS code, I followed the same naming convention. My application has a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/src/styles/mixins.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"mixins.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file with all the style mixins.  Mixins are simply JavaScript functions that return an object with CSS styles as properties. ",
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
                "value":" For example, one of my mixins ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"blueLink()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is reused for many of the text links on the website. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"class Mixins {\n  static blueLink = (): object => ({\n    ...FontMixins.robotoBold(),\n    fontSize: 14,\n    textDecoration: 'none',\n    color: Colors.spotPaletteBlue,\n    cursor: 'pointer',\n\n    '&:hover': {\n      textDecoration: 'underline'\n    }\n  });\n}\n",
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
                "value":" These mixins are “mixed in” to JSS classes by importing the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Mixin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class  and using the spread notation on the mixin function.  The following code mixes in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"blueLink()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"link",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" JSS class. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import Mixins from './styles/mixins';\n\nexport default {\n  link: {\n    ...Mixins.blueLink(),\n    marginTop: 15\n  }\n}\n",
        "children":null
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Modules for Reusable Classes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Modules for Reusable Classes",
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
                "value":" Sometimes multiple components contain matching groups of classes.  In terms of reusability, this pattern goes above the scope of mixins.  In my code I call this pattern “modules”.  While mixins return an object with styles in them, modules return an object with JSS classes.  All the modules in my application exist in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/blob/master/src/styles/modules.ts"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"modules.ts",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file. ",
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
                "value":" One of the modules is for exercise type filters in my application.  I noticed that some of my components had identical classes  and styles, but the logic these components held was different.  Because of this, I kept the components separate but made a reusable module for the styles.  The module is a function that returns a JSS styles object. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { FontMixins } from './mixins';\nimport { Styles } from 'react-jss';\n\nexport class Modules {\n  static filters = (): Styles<\n    'filters' | 'filterTitle' | '@media screen and (max-width: 900px)' | '@media screen and (max-width: 450px)'\n  > => ({\n    filters: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    filterTitle: {\n      ...FontMixins.robotoSlab(),\n      margin: '30px 40px 30px 0'\n    },\n    '@media screen and (max-width: 900px)': {\n      filterTitle: {\n        margin: '20px 20px 20px 0'\n      }\n    },\n    '@media screen and (max-width: 450px)': {\n      filterTitle: {\n        display: 'none'\n      }\n    }\n  });\n}\n",
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
                "value":" This module is used with the JavaScript spread notation, similar to the mixins. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { Modules } from '../../../styles/modules';\n\nexport default {\n  ...Modules.membershipModal()\n};\n",
        "children":null
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"Dynamic Styling with React State and Props"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Dynamic Styling with React State and Props",
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
                "value":" The greatest thing about JSS is the ability to pass application state to stylesheets.  This allows for dynamic styles that can change along with the application state.  As a basic example, let's look at my applications ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Alert",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component. ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/tree/master/src/components/shared/Alert"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Alert",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" displays messages designed to get the users attention. Alert messages can exist in four different states: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"error",
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
                "value":"warning",
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
                "value":"info",
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
                "value":"success",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The alert message shown below is in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"success",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" state. ",
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
                    "src":"https://asset.jarombek.com/posts/6-30-21-react-jss-alert-component.png"
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Alert",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" component picks its state depending on a  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prop. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import React, { ReactNode } from 'react';\nimport { createUseStyles } from 'react-jss';\nimport styles from './styles';\n\nexport type AlertType = 'error' | 'warning' | 'info' | 'success';\n\ninterface Props {\n  message: ReactNode;\n  type: AlertType;\n  closeable: boolean;\n  onClose?: () => void;\n}\n\nconst useStyles = createUseStyles(styles);\n\nconst Alert: React.FunctionComponent<Props> = ({ message, type, closeable, onClose }) => {\n  const classes = useStyles({ type });\n\n  let alertIcon;\n  switch (type) {\n    case 'error':\n      alertIcon = '\\ue062';\n      break;\n    case 'info':\n      alertIcon = '\\ue064';\n      break;\n    case 'warning':\n      alertIcon = '\\ue063';\n      break;\n    case 'success':\n      alertIcon = '\\ue052';\n      break;\n    default:\n      alertIcon = '\\ue062';\n  }\n\n  return (\n    <div className={classes.alert} data-cypress=\"alert\">\n      <p className={classes.alertIcon}>{alertIcon}</p>\n      <div className={classes.message}>{message}</div>\n      {closeable && (\n        <p className={classes.closeIcon} data-cypress=\"alertCloseIcon\" onClick={onClose}>\n          M\n        </p>\n      )}\n    </div>\n  );\n};\n\nexport default Alert;\n",
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
                "value":" Notice that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prop is passed into the ",
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
                "value":" React hook with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const classes = useStyles({ type })",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". One or more props or state variables  can be passed to ",
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
                "value":" this way.  In the stylesheet object for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Alert",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prop is accessible to CSS styles using the arrow function syntax. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { AlertType } from './Alert';\nimport color from 'color';\nimport Colors from '../../../styles/colors';\nimport { FontMixins } from '../../../styles/mixins';\n\nexport default {\n  alert: {\n    display: 'flex',\n    alignItems: 'center',\n    padding: '10px 0',\n    borderRadius: 3,\n    backgroundColor: ({ type }: { type: AlertType }): string =>\n      type === 'warning'\n        ? color(Colors.statusWarning).lighten(0.65).hex()\n        : type === 'info'\n        ? color(Colors.spotPaletteBlue).lighten(0.65).hex()\n        : type === 'success'\n        ? color(Colors.statusSuccess).lighten(1.1).hex()\n        : color(Colors.statusFailure).lighten(0.65).hex()\n  },\n  alertIcon: {\n    ...FontMixins.elegantIcons(),\n    fontSize: 28,\n    margin: '10px 25px',\n    color: ({ type }: { type: AlertType }): string =>\n      type === 'warning'\n        ? Colors.statusWarning\n        : type === 'info'\n        ? Colors.spotPaletteBlue\n        : type === 'success'\n        ? Colors.statusSuccess\n        : Colors.statusFailure\n  },\n  message: {\n    ...FontMixins.roboto(),\n    fontSize: 16,\n    margin: '5px 10px 5px 0'\n  },\n  closeIcon: {\n    ...FontMixins.elegantIcons(),\n    fontSize: 24,\n    margin: '0 10px 0 auto',\n    cursor: 'pointer'\n  }\n};\n",
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
                "value":"backgroundColor",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alert",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class and ",
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
                "value":" in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alertIcon",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class utilize ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"type",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for dynamic styling. ",
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
                "value":" For more examples of components using dynamic styling in JSS, check out ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/tree/master/src/components/shared/ExerciseLog"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ExerciseLog",
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
                    "href":"https://github.com/AJarombek/saints-xctf-web/tree/master/src/components/shared/ProgressBar"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ProgressBar",
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
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web/tree/master/src/components/shared/StepSlider"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"StepSlider",
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
                "value":" JSS shines brightest when used with React, enabling dynamic styling for components, reusability, and modularization. In this article I demonstrated some approaches I took while creating reusable JSS code.  However, your approach to JSS can be as wide as the JavaScript language itself.  All the JSS code shown in this article and more is available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-web"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints-xctf-web",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "jun-30-2021-react-jss";
postDate = new Date('2021-06-30T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Styling React Components With JSS",
    description: `In this article, I begin by discussing the basics of using JSS in a React application. Then, I show 
        sample code from my SaintsXCTF application, which is running in production and utilizes JSS for its 
        stylesheets`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "JSS",
            picture: "https://asset.jarombek.com/logos/jss.png",
            color: "jss"
        },
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
            startName: "\"JSS integration with React\", ",
            endName: "",
            linkName: "https://cssinjs.org/react-jss/?v=v10.6.0",
            link: "https://cssinjs.org/react-jss/?v=v10.6.0"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
