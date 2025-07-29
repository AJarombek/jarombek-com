/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 2/4/2020
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
                "value":" In an article last fall I spoke about my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\noct-26-2019-unit-test-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"change in mindset towards unit testing",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In my early programming days I thought unit tests slowed down development to a fault.  Nowadays they are mandatory in all my applications.  Unit tests are assertions that a unit of code is working as expected in isolation of other components in the codebase.  They promote code review, help catch recurring bugs, and ease the burden of upgrading and switching technologies. ",
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
                "value":" For React applications, the de facto testing framework is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jestjs.io/en/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Jest was written by Facebook with React unit testing in mind, making it a natural fit.  Alongside Jest, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://airbnb.io/enzyme/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Enzyme",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to test React components.  Enzyme was created by AirBnB to render components for testing.  It provides an API to traverse the rendered DOM nodes in a component and hook into stateful component instances. ",
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
                "value":" In an article last fall I spoke about my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/\noct-26-2019-unit-test-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"change in mindset towards unit testing",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In my early programming days I thought unit tests slowed down development to a fault.  Nowadays they are mandatory in all my applications.  Unit tests are assertions that a unit of code is working as expected in isolation of other components in the codebase.  They promote code review, help catch recurring bugs, and ease the burden of upgrading and switching technologies. ",
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
                "value":" For React applications, the de facto testing framework is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jestjs.io/en/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Jest was written by Facebook with React unit testing in mind, making it a natural fit.  Alongside Jest, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://airbnb.io/enzyme/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Enzyme",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to test React components.  Enzyme was created by AirBnB to render components for testing.  It provides an API to traverse the rendered DOM nodes in a component and hook into stateful component instances. ",
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
                "value":" My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-31-2020-react-16-3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" consisted of a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" demo application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which showcasing the new features in React 16.3 with detailed descriptions and sample components.  The demo is a React application, so naturally I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/tree/master/app/test"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"testing suite",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with Jest and Enzyme. ",
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
                "value":" This article walks through the testing suite, providing insights about Jest and Enzyme in the process. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Configuring the Test Suite"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Configuring the Test Suite",
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
                "value":" Any npm project begins with a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/\npackage.json"
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
                "value":" file and application dependencies.  For the sake of brevity I only listed the dependencies needed for unit testing. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n  ...\n  \"dependencies\": {\n    ...\n    \"react\": \"16.12.0\",\n    \"react-dom\": \"16.12.0\",\n    \"react-router-dom\": \"^5.1.2\"\n    ...\n  },\n  \"devDependencies\": {\n    ...\n    \"enzyme\": \"^3.11.0\",\n    \"enzyme-adapter-react-16\": \"^1.15.1\",\n    \"jest\": \"^24.9.0\",\n    \"react-test-renderer\": \"^16.12.0\",\n    ...\n  },\n  ...\n}\n",
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
                "value":" React is a standard dependency while Jest and Enzyme are dev dependencies.  As its name suggests, dev dependencies are used for development purposes only.  When a repository is cloned and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"npm install",
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
                "value":"yarn",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked, both standard and dev dependencies are installed.  However, when a module is installed with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"npm install {module_name}",
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
                "value":"yarn add {module_name}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", only standard dependencies are installed.  We don't want unit testing frameworks to be installed for module end-users, so their dependency definitions always exist in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"devDependencies",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jest",
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
                "value":"enzyme",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" dev dependencies are the Jest testing framework and Enzyme testing utility, respectively. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"enzyme-adapter-react-16",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to configure Enzyme to work with React 16 code.  There are many Enzyme adapters, ranging from React versions 0.13 to 16",
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
                "value":".  I will configure the React 16 adapter soon. ",
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
                "value":"react-test-renderer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" renders React elements and components as JavaScript objects without needing the DOM",
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
                "value":".  It's used for component snapshot testing. ",
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
                "value":" With ",
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
                "value":" initialized, it's time to create the applications Jest configuration. The Jest configuration is located alongside ",
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
                "value":" in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/react-16-3-demo/blob/master/app/jest.config.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jest.config.js",
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
        "value":"module.exports = {\n  displayName: 'components',\n  testEnvironment: 'jsdom',\n  testMatch: ['**/test/**/*.test.js'],\n  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],\n  maxConcurrency: 5,\n  moduleNameMapper: {\n    '\\\\.(png)$': '../../test/mocks/fileMock.js'\n  },\n  transform: {\n    '^.+\\\\.js$': 'babel-jest'\n  },\n  collectCoverage: true,\n  collectCoverageFrom: ['src/**/*.js'],\n  coveragePathIgnorePatterns: ['src/index.js'],\n  coverageThreshold: {\n    'global': {\n      'branches': 100,\n      'functions': 100,\n      'lines': 100,\n      'statements': 100\n    }\n  }\n};\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jest.config.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configures the testing suite for the application.  Let's highlight some important aspects of the configuration.  Tests are executed in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jsdom",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" environment, a headless browser which provides rendered components access to the DOM and DOM API.  Any file in the ",
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
                        "value":"test",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" directory (or its subdirectories) with the ",
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
                        "value":".test.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file extension is executed in the test suite.  The Enzyme adapter is configured in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/test/setupTests.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" setupTests.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, which has a very simple body: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import {configure} from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nconfigure({ adapter: new Adapter() });\n",
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
                "value":" Before testing, all Javascript files are transpiled with Babel and non-JavaScript imports are mocked with a file named ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/test/mocks/fileMock.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" fileMock.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This file contains a single line: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"module.exports = 'test-file-stub';\n",
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
                "value":" All that remains in the Jest configuration file is code coverage setup.  All source code JavaScript files are tested for code coverage (except for ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/\napp/src/index.js"
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
                "value":" which consists of React and React Router bootstrapping).  In order for the test suite to pass, code coverage must be 100%. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Code Coverage"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Code coverage is the percentage of a program that executes in a test suite.  Code coverage is usually run alongside tests, and generates a text or html report.  While 100% code coverage is ideal, it isn't always practical or necessary.  Likewise, 100% code coverage doesn't mean that code is properly tested.  Poorly written tests count towards code coverage the same as properly written ones! ",
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
                "value":" At this point the test suite is fully configured!  In my experience Jest configuration is pretty easy to work with.  Without much work, I created a test suite that is executable with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command.  I often alias this command in my ",
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
        "value":"{\n  ...\n  \"scripts\": {\n    \"test\": \"jest\",\n    ...\n  },\n  ...\n}\n",
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
                "value":" I wrote three types of tests for my React 16.3 demo - unit tests, integration tests, and snapshots. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Testing Methods"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Unit Tests ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" A ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://jarombek.com/blog/oct-26-2019-unit-test-aws-infrastructure#unit-test"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"unit test",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" is an assertion that a unit of code is working as expected. Units of code can range from a single line or function to an entire class or application.  Unit tests are often run in isolation, without impact from external dependencies.  In React, units are often methods or shallow rendered components (components rendered without their child components). ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Integration Tests ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" In an integration test, units of code are combined and tested together as a group.  The grouping of code can range from two functions to an entire webpage or application.  In React, this grouping is often a module or a component rendered on the DOM with its child components. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Snapshot Tests ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
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
                                        "value":" A snapshot test takes a snapshot of the UI and saves it.  On subsequent snapshot tests, the saved snapshot is compared to the current UI.  If the UI changed since the snapshot was taken, the test fails.  Snapshot tests are very helpful for preventing unwanted UI changes",
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
                                        "value":".  In React, snapshots are created for components. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Unit Tests"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Unit Tests",
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
                "value":" Unit tests assert that a unit of code behaves as expected.  When writing unit tests, we use three main functions provided by Jest - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"describe()",
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
                "value":"it()",
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
                "value":"assert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". These functions aren't explicitly imported into test code, Jest injects them implicitly when the tests execute. ",
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
                "value":"describe()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a grouping of test cases (test suite) and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"it()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a single test case.  Test cases pass if all their assertions (created with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"assert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a corresponding ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jestjs.io/docs/en/expect"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"matcher",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") are true.  Test cases fail as soon as a single assertion fails.  Matchers are chained onto ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"assert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" global functions.  Some examples of matchers are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"toEqual()",
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
                "value":"toBeTruthy()",
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
                "value":"toContain()",
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
                "value":" A common \"Hello World\" unit test example adds two values together and asserts the result is a third value. I created this ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2020/02-Feb/\n02-05-react-jest-enzyme"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"\"Hello World\" test application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is easily executed with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"npm install",
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
                "value":"npm run test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Here is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/\nmaster/2020/02-Feb/02-05-react-jest-enzyme/test.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jest code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"describe('unit tests', () => {\n\n  it('adds two numbers', () => {\n    expect(1 + 1).toEqual(2);\n  });\n\n});\n",
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
                "value":" This code creates a single test case named \"adds two numbers\" in a single test suite named \"unit test.\" It also successfully proves that ",
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
                        "value":"1 + 1 = 2",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Running this code with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"npm run test",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" produces the following output: ",
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
                    "src":"https://asset.jarombek.com/posts/2-5-20-jest-output.png"
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
                "value":" The next piece needed for React unit tests is Enzyme.  I previously mentioned that React component unit tests are implemented with shallow rendering.  Shallow rendering only renders the React elements in a components render method (or return value for functional components), excluding any child components.  Enzyme provides shallow rendering with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shallow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shallow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes a component as an argument and returns a wrapper around the rendered component with helper methods used for testing",
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
                "value":".  The following unit test performs a shallow render, proving that the component successfully renders. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React from 'react';\nimport { shallow } from 'enzyme';\nimport App from '../src/App';\n\nit('renders', () => {\n  const wrapper = shallow(<App/>);\n  expect(wrapper.exists()).toBe(true);\n});\n",
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
                "value":" In this example the wrappers ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"exists()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is called, which returns ",
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
                "value":" if the wrapper's rendered component contains one or more elements (nodes)",
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
                "value":".  On the Jest side of things, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"wrapper.exists()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was expected to be ",
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
                "value":" The wrapper object returned from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shallow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://airbnb.io/enzyme/docs/api/shallow.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"extensive API",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" that satisfies most testing needs.  Shallow rendering often falls short of testing requirements when DOM API logic needs to be tested. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"shallow()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" doesn't simulate rendering on the DOM, so none of its APIs are accessible from the wrapper object.  Components must be fully rendered with Enzyme's  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function in order to be tested with the DOM. Full DOM rendering falls under integration tests, which I will cover in the next section. ",
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
                "value":" A common unit test for components is to assert that certain text or classes appear in the rendered elements. These tests can also be fulfilled by snapshots depending on your personal preference.  The following test traverses the rendered nodes in a component and asserts that the rendered text is as expected. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"it('renders message', () => {\nconst wrapper = shallow(<DerivedFromPropsRefactored show={true} />);\n  expect(wrapper.find('.secret-code')).toHaveLength(1);\n  expect(wrapper.find('.secret-code-classified')).toHaveLength(0);\n  expect(wrapper.find('.secret-code').childAt(0).text()).toEqual('You have a beautiful heart.');\n});\n",
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
                "value":" There are many other unit tests that can be performed on React components.  When I first started using Enzyme, familiarizing myself with the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://airbnb.io/enzyme/docs/api/shallow.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"shallow render wrapper functions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was crucial to writing quality unit tests. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Integration Tests"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Integration Tests",
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
                "value":" Integration tests occur when units of code are combined and tested together as a group.  Integration tests build upon the Jest and Enzyme fundamentals used for unit testing.  In this section, I'll show some interesting tests from my React 16.3 application.  I encourage you to check out and adjust my tests on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/tree/master/app/test"
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
                "value":" to meet your specific needs. ",
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
                "value":" Integration tests are performed on React components using Enzyme's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mount()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" simulates a full DOM rendering with access to the DOM API.  With that in mind, integration tests are useful for code that accesses the DOM API.  In React, Refs serve this purpose.  The following test checks if the CSS style attached to a DOM node changes after a button is clicked. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React from 'react';\nimport { shallow, mount } from 'enzyme';\nimport RefSamples from '../../src/createref/RefSamples';\n\nit('lights up a light bulb on focus', () => {\n  const wrapper = mount(<RefSamples />);\n\n  const button = wrapper.find('.aj-outlined-button');\n  const lightBulb = wrapper.find('.ref-sample');\n\n  // The initial filter value will be empty instead of 'brightness(4)' as defined in my CSS file\n  // because Jest/Enzyme don't load CSS stylesheets.\n  expect(lightBulb.getDOMNode().style.filter).toEqual('');\n\n  button.simulate('click');\n\n  expect(lightBulb.getDOMNode().style.filter).toEqual('brightness(5)');\n\n  // Alternative way to get the style value through the DOM API.\n  expect(lightBulb.getDOMNode().style.getPropertyValue('filter'))\n    .toEqual('brightness(5)');\n});\n",
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
                "value":" Enzyme provides access into a DOM node of a React element with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"getDOMNode()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"style.filter",
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
                "value":"style.getPropertyValue()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are part of the DOM API, not React or Enzyme. ",
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
                "value":" This example also demonstrates another important feature of React integration tests - event simulation. If React code handles or responds to DOM events like ",
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
                "value":", integration tests are needed.  I used Enzyme's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"simulate(event)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to simulate clicking a button. ",
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
                "value":" If you would like to learn more about React Refs and this integration test, you can view the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/src/createref/RefSamples.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"React source code",
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
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/test/createref/RefSamples.test.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"unit test code",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com/"
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
                "el":"#text",
                "attributes":null,
                "value":" demo which explains the use of Refs. ",
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
                "value":" A common practice in unit tests is mocking.  Mocking is when a function or external dependency is replaced with something that imitates its behavior.  Mocking helps isolate unit tests from the side effects of code dependencies.  For example, a function that makes an external REST API call can be mocked to simply return an object. ",
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
                "value":" In my React 16.3 application, I needed to mock the behavior of React Router navigation.  React Router navigates users to different web pages by placing a new value in the browser history.  For example, from a home page (",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") React Router can push a new value (",
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
                        "value":"jarombek.com/resume",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to the browser history, navigating the user to a page displaying my resume in the process.  My application uses React Router's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"useHistory()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" hook method to provide navigation.  The code which tests its behavior mocks ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"useHistory()",
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
                "value":"jest.mock()",
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
        "value":"import React from 'react';\nimport { shallow, mount } from 'enzyme';\nimport { useHistory } from 'react-router-dom';\nimport FeaturePage from '../src/FeaturePage';\n\n// Mock react router's useHistory() hook before the tests execute.\njest.mock('react-router-dom', () => {\n  const historyObj = {\n    push: jest.fn()\n  };\n\n  return {\n    ...jest.requireActual('react-router-dom'),\n    useHistory: () => historyObj\n  }\n});\n\ndescribe('integration tests', () => {\n\n  it('calls React Router push() when clicking the back button', () => {\n    const wrapper = mount(<FeaturePage/>);\n    const pushSpy = jest.spyOn(useHistory(), 'push').mockImplementation();\n\n    const navCircle = wrapper.find('.aj-nav-circle');\n\n    expect(pushSpy).not.toHaveBeenCalled();\n    expect(pushSpy).toHaveBeenCalledTimes(0);\n\n    navCircle.simulate('click');\n\n    expect(pushSpy).toHaveBeenCalled();\n    expect(pushSpy).toHaveBeenCalledTimes(1);\n    expect(pushSpy).toHaveBeenCalledWith('/');\n  });\n\n});\n",
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
                "value":" You can see this code mocked the entire ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"react-router-dom",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" module, and inside it also mocked ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"useHistory",
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
                "value":"jest.fn()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In the integration test, I spied on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"useHistory",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function, providing information such as the number of times its been called and with which arguments",
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
                "value":".  This test proves that clicking on a navigation button pushes the home page path (",
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
                        "value":"'/'",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") onto the browser history. ",
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
                "value":" I'm still learning how to use mocks and spies in Jest, so the code above can likely be improved upon! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Snapshot Tests"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Snapshot Tests",
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
                "value":" In my experience, snapshot tests are much simpler than unit tests and integration tests.  A  snapshot test passes if a rendered component matches an existing snapshot, and fails if a rendered component changed since an existing snapshot was taken. ",
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
                "value":" The first step when implementing snapshot tests is to create a test case.  The following is a snapshot test  for a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/test/forwardref/\nButtonWrapper.snap.test.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"button component",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" used in my React 16.3 demo. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"import React from 'react';\nimport ButtonWrapper from '../../src/ButtonWrapper';\nimport renderer from 'react-test-renderer';\n\nit('renders correctly', () => {\n  const tree = renderer.create(<ButtonWrapper>Snapshot Test</ButtonWrapper>).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n",
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
                "value":" When running the snapshot test for the first time, a snapshot file is created with the rendered elements as they would appear on the React virtual DOM.  For example, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nreact-16-3-demo/blob/master/app/src/forwardref/ButtonWrapper.js"
                },
                "value":null,
                "children":[
                    {
                        "el":"code",
                        "attributes":{
                            "className":"jarombek-inline-code"
                        },
                        "value":"ButtonWrapper",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a functional component: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const ButtonWrapper = (props) => {\n  const {children, onClick, ref} = props;\n\n  return (\n    <button className=\"button-wrapper\" type=\"button\" onClick={onClick} ref={ref}>\n      {children}\n    </button>\n  );\n};\n",
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
                "value":" When the snapshot test for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ButtonWrapper",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs, the following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/react-16-3-demo/blob/master/app/test/forwardref/__snapshots__/\nButtonWrapper.snap.test.js.snap"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"snapshot file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is generated: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// Jest Snapshot v1, https://goo.gl/fbAQLP\n\nexports[`renders correctly 1`] = `\n  <button\n    className=\"button-wrapper\"\n    type=\"button\"\n  >\n    Snapshot Test\n  </button>\n`;\n",
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
                "value":" All future tests don't overwrite the snapshot file, instead comparing the result of the snapshot test to it.  If the snapshots mismatch, the test fails. ",
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
                "value":" There are two main scenarios that cause a snapshot test to fail.  One scenario is when the component under test was incorrectly modified, causing the UI to change.  In this scenario, the course of action is to fix the component causing the failure.  Another scenario is when the component was intentionally modified and the UI is expected to change.  In this scenario, the snapshot files should be updated to match the new UI rendering.  This is achieved by executing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jest --updateSnapshot",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" from the command line. ",
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
                "value":" I've only found snapshots helpful when the developer or team makes it a point of emphasis to validate snapshots before releasing new code.  Otherwise, snapshot files will always be out of date and worthless for testing purposes. ",
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
                "value":" Used together, unit, integration, and snapshot tests help detect regressions and bugs in a React codebase. They ensure that all UI changes released are intentional, not due to an unwanted side effect.  I use Jest and Enzyme in all my React applications.  You can view my React 16.3 test suite on ",
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
    }
];

postName = "feb-5-2020-react-jest-enzyme";
postDate = new Date('2020-02-05T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Unit, Integration, and Snapshot Testing in React with Jest and Enzyme",
    description: `This article walks through a React testing suite, providing insights about Jest 
        and Enzyme in the process.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "Jest",
            picture: "https://asset.jarombek.com/logos/jest.svg",
            color: "jest"
        },
        {
            name: "Enzyme",
            picture: "https://asset.jarombek.com/logos/enzyme.png",
            color: "enzyme"
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
            name: "NPM",
            picture: "https://asset.jarombek.com/logos/npm.png",
            color: "npm"
        },
        {
            name: "Unit Test"
        },
        {
            name: "Integration Test"
        },
        {
            name: "Snapshot Test"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Configuring your Adapter\", ",
            endName: "",
            linkName: "https://github.com/airbnb/enzyme/blob/HEAD/docs/guides/migration-from-2-to-3.md#configuring-your-adapter",
            link: "https://github.com/airbnb/enzyme/blob/HEAD/docs/guides/migration-from-2-to-3.md#configuring-your-adapter"
        },
        {
            startName: "\"react-test-renderer\", ",
            endName: "",
            linkName: "https://www.npmjs.com/package/react-test-renderer",
            link: "https://www.npmjs.com/package/react-test-renderer"
        },
        {
            startName: "\"Snapshot Testing\", ",
            endName: "",
            linkName: "https://jestjs.io/docs/en/snapshot-testing",
            link: "https://jestjs.io/docs/en/snapshot-testing"
        },
        {
            startName: "\"shallow([options])\", ",
            endName: "",
            linkName: "https://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html",
            link: "https://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html"
        },
        {
            startName: "\"exists([selector])\", ",
            endName: "",
            linkName: "https://airbnb.io/enzyme/docs/api/ShallowWrapper/exists.html",
            link: "https://airbnb.io/enzyme/docs/api/ShallowWrapper/exists.html"
        },
        {
            startName: "\"getDOMNode()\", ",
            endName: "",
            linkName: "https://airbnb.io/enzyme/docs/api/ReactWrapper/getDOMNode.html",
            link: "https://airbnb.io/enzyme/docs/api/ReactWrapper/getDOMNode.html"
        },
        {
            startName: "\"jest.spyOn(object, methodName)\", ",
            endName: "",
            linkName: "https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname",
            link: "https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
