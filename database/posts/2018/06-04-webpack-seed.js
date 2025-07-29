/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/3/2018
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
                "value":" I think Webpack is intimidating.  There is so much configuration needed to bundle a web application that includes JavaScript, style sheets, images, fonts, non-JavaScript files, etc.  Maintenance work on my Webpack config is never a task I look forward to.  I have only used Webpack for a few months now, so hopefully some of the frustration eases over time. ",
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
                "value":" Nonetheless, Webpack is important to know in the current state of web programming.  I used Webpack for the first time to bundle my React prototype application (and went on to use it on the website you are currently viewing!).  My previous discovery post went over the ",
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
                        "value":"React portion",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of my prototype application.  This post looks at the Webpack portion and some of the interesting configuration pieces.  I'm not giving a tutorial on how to build a Webpack config - instead focusing on things I've learned about the bundler and my initial observations. ",
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
                "value":" I think Webpack is intimidating.  There is so much configuration needed to bundle a web application that includes JavaScript, style sheets, images, fonts, non-JavaScript files, etc.  Maintenance work on my Webpack config is never a task I look forward to.  I have only used Webpack for a few months now, so hopefully some of the frustration eases over time. ",
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
                "value":" Nonetheless, Webpack is important to know in the current state of web programming.  I used Webpack for the first time to bundle my React prototype application (and went on to use it on the website you are currently viewing!).  My previous discovery post went over the ",
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
                        "value":"React portion",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" of my prototype application.  This post looks at the Webpack portion and some of the interesting configuration pieces.  I'm not giving a tutorial on how to build a Webpack config - instead focusing on things I've learned about the bundler and my initial observations. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Webpack"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Webpack?",
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
                "value":" As I mentioned in my discovery post on the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-17-2018-mean-stack-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" MEAN stack",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", Webpack is a module bundler commonly used with JavaScript projects, especially those on the client side.  Webpack builds a dependency graph of a projects modules and bundles them into a few larger files (or just one file if you want).  The reason for bundling JavaScript files is that HTTP requests from the web browser to the server are expensive.  Bundling JavaScript modules into a few files reduces the number of HTTP requests, speeding up the web application. ",
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
                "value":" Because of plugins, Webpack has the ability to perform a wide range of tasks besides bundling.  Plugins in Webpack intercept events during the bundling process",
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
                "value":".  Examples of plugins I use in my configuration are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExtractTextPlugin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (which extracts CSS out of the bundled file created by Webpack) and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HotModuleReplacement",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (live swapping of modules during development",
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
                "value":").  How plugins actually work in the bundling pipeline is beyond the scope of this post, but is something worth learning to better understand Webpack. ",
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
                "value":" In order to work with Webpack you need to create a configuration file (although with Webpack 4 you don't necessarily need it for extremely simple applications).  Here is the basic layout: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const path = require(\"path\");\nconst HtmlWebPackPlugin = require(\"html-webpack-plugin\");\n\n// Define paths for the entry point of the app and the output directory\nconst PATHS = {\n    app: path.join(__dirname, 'src'),\n    build: path.join(__dirname, 'dist')\n};\n\nmodule.exports = {\n    entry: {\n        bundle: PATHS.app\n    },\n    output: {\n        path: PATHS.build,\n        filename: \"[name].js\"\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                exclude: /(node_modules)/,\n                loader: \"babel-loader\",\n                options: {\n                    cacheDirectory: true\n                }\n            },\n            {\n                test: /\\.html$/,\n                use: {\n                    loader: \"html-loader\"\n                }\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebPackPlugin({\n            template: \"./src/index.html\",\n            filename: \"./index.html\"\n        })\n    ]\n};\n",
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
                "value":" This configuration can be broken down into a few important concepts: entries, outputs, loaders, and plugins. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Webpack Entry"
        },
        "value":null,
        "children":[
            {
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" An entry point in a Webpack configuration is a path to a module.  This module is the root module in Webpack's internal dependency graph.  From this module Webpack will find all other referenced modules, adding them to the graph",
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
                "el":"p",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" In the configuration file the entry point is specified with the ",
                        "children":null
                    },
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"entry",
                        "children":null
                    },
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" property.  Configurations can have multiple entry points, and Webpack will create multiple dependency graphs in that case. ",
                        "children":null
                    }
                ]
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Webpack Output"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The output determines a location to write the bundle files created by Webpack.  You can also specify a filename to write the bundle to along with more advanced configurations.  The output point is specified with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"output",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Webpack Loader"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Loaders are used to transform files.  They are a preprocessing step before Webpack builds its final bundle.  While Webpack was built to work with JavaScript code, you can use loaders to include other languages in the dependency graph",
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
                "value":".  Loaders can also transform (or transpile) JavaScript code.  They are commonly configured in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"module.rules",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  Loaders can also be configured in JavaScript source code, however this technique is not recommended since it couples application code with Webpack",
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
                "value":".  These inline loaders break separation of concerns. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Webpack Plugin"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Plugins intercept events during the bundling process, and can do a wide range of tasks.  These tasks extend the capabilities of Webpack.  Plugins are configured in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"plugin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" array. ",
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
                "value":" With these definitions in mind, we can make some assumptions about the previously shown Webpack configuration.  The root of the dependency graph is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"src",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory as specified by the input.  The output directory is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"dist",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the output filename is specified as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[name].js",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These brackets specify a placeholder value.  When Webpack runs, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[name]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" placeholder is replaced with the property name specified in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"entry",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since the entry point is declared as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"bundle: PATHS.app",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the output file is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"dist/bundle.js",
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
                "value":" Two loaders are specified.  The first transpiles all JavaScript files from ES2017 to ES5 using Babel, allowing for greater cross browser compatibility (since some users still use old browsers that don't support the latest JavaScript features).  The second loader allows Webpack to handle HTML files. ",
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
                "value":" The only plugin in the configuration, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HtmlWebPackPlugin",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", creates a root HTML file for a client side project.  This HTML file includes ",
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
                "value":" elements for the JavaScript files that Webpack bundles.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HtmlWebPackPlugin()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor function specifies the name of the created HTML file (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index.html",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and a template file to base the created HTML file off of (located at ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"/src/index.html",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  The created index.html file is located in the output directory (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"dist",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") after Webpack runs. ",
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
                "value":" I find that many Webpack configurations look complex at first sight.  However, it gets easier to understand when I remember they simply boil down to entries, outputs, loaders, and plugins. ",
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
                "value":" Now let's analyze some cool things the Webpack configuration does in my prototype. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Handling CSS"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Handling CSS",
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
                "value":" Since stylesheets aren't JavaScript, Webpack needs the help of loaders and plugins to handle them.  The React prototype uses Sass for its stylesheets.  Sass is a CSS preprocessor that adds additional functionality on top of CSS. I used Sass in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-17-2018-mean-stack-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MEAN stack prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and dedicated a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-10-2018-sass"
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
                "value":" to it.  I really enjoy writing Sass, but using it includes the additional effort of converting Sass to CSS before using it on the web.  Luckily Webpack loaders make this process extremely simple. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"{\n    module: {\n        rules: [\n            {\n                test: /\\.scss$/,\n                use: [\"style-loader\", \"css-loader\", \"sass-loader\"]\n            }\n        ]\n    }\n}\n",
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
                "value":" This configuration specifies three loaders - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"style-loader",
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
                "value":"css-loader",
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
                "value":"sass-loader",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Confusingly Webpack executes loaders from right to left - so ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sass-loader",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is executed first.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sass-loader",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" compiles Sass to CSS, and then ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"css-loader",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a dependency graph of CSS files by linking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@import",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statements and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"url()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" blocks as dependencies",
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
                "value":".  These styles are then inlined in the projects HTML file inside a ",
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
                "value":" tag.  When viewing the website, elements appear styled according to the projects stylesheets. ",
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
                "value":" This setup is perfect for a development environment.  Unfortunately inline styles are not recommended in a production environment",
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
                "value":".  An alternative to inlining styles is to separate them out into their own bundle.  This can be done with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExtractTextPlugin",
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
        "value":"const plugin = new ExtractTextPlugin({\n    filename: '[name].css'\n});\n\nmodule.exports = {\n    ...\n    module: {\n        rules: [\n            {\n                test: /\\.scss$/,\n                use: plugin.extract({\n                    use: [\"css-loader\", \"sass-loader\"],\n                    fallback: \"style-loader\"\n                })\n            }\n        ]\n    },\n    plugins: [plugin]\n}\n",
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
                "value":" In this code snippet I extract the CSS styling into a bundle.  The bundle has a placeholder name ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[name].css",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Now the HTML file that Webpack produces will have a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<link>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element referencing the CSS stylesheet. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Handling Images"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Handling Images",
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
                "value":" To reduce the number of server calls a client makes to load a web page, Webpack helps inline images in the JavaScript bundle.  These images are represented as base64 encoded strings",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"8",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In a development environment it is fine to inline all of the images.  However, in an effort to keep Webpack's output bundle relatively small, images beyond a certain size are not inlined for production.  Here is the config to inline any images less than 15kB in size. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"{\n    module: {\n        rules: [\n            {\n                test: /\\.(png|jpg|svg)$/,\n                use: {\n                    loader: 'url-loader',\n                    options: {\n                        limit: 15000,\n                        name: '[name].[ext]'\n                    }\n                }\n            }\n\n        ]\n    }\n}\n",
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
                "value":" There are many cool things you can do with Webpack.  These configurations along with development servers and hot module replacement helped make development work and code deployment a breeze. ",
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
                "value":" Once Webpack is all set up and working it really is an amazing tool that goes far beyond bundling JavaScript.  I'll be using Webpack and learning more of its intricacies for the foreseeable future. ",
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
                "value":" You can check out my Webpack config and React prototype on ",
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

postName = "jun-4-2018-webpack-seed";
postDate = new Date('2018-06-04T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "React & Webpack Seed Project Part II: Bundling With Webpack",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Webpack",
            picture: "https://asset.jarombek.com/logos/webpack.png",
            color: "webpack"
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
            name: "ECMAScript 6",
            picture: "https://asset.jarombek.com/logos/es6.png",
            color: "javascript"
        },
        {
            name: "HTML",
            picture: "https://asset.jarombek.com/logos/html.png",
            color: "html"
        },
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
            startName: "Juho Vepsäläinen, ",
            endName: ", (2017), xiv",
            linkName: "SurviveJS: Webpack",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "",
            endName: "., 429",
            linkName: "Vepsäläinen",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "\"Entry\", ",
            endName: "",
            linkName: "https://webpack.js.org/concepts/#entry",
            link: "https://webpack.js.org/concepts/#entry"
        },
        {
            startName: "\"Loaders\", ",
            endName: "",
            linkName: "https://webpack.js.org/concepts/#loaders",
            link: "https://webpack.js.org/concepts/#loaders"
        },
        {
            startName: "",
            endName: "., 102",
            linkName: "Vepsäläinen",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "",
            endName: "., 53",
            linkName: "Vepsäläinen",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "",
            endName: "., 69",
            linkName: "Vepsäläinen",
            link: "https://survivejs.com/webpack/"
        },
        {
            startName: "",
            endName: "., 107",
            linkName: "Vepsäläinen",
            link: "https://survivejs.com/webpack/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});