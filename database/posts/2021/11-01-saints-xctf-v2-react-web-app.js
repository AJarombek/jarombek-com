/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/24/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [
    {
        "el":"note",
        "attributes":{
            "type":"info"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" This is part of a series of articles on SaintsXCTF Version 2.0. The first article in the series provides an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"overview of the application",
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
                "value":" At its core, SaintsXCTF is a web application that allows users to log their running workouts, openly express how they felt while running, and encourage and support teammates.  From a user perspective, the website is the most important part of the SaintsXCTF technology stack, since it is what they interact with every day and depend on being operational. ",
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
                "value":" When I wrote the first version of the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" website, I was a senior in  college who just began learning web development.  I was also new to user interface (UI) design and user experience (UX)  design.  Over time, this inexperience became more and more apparent when viewing the first version of the website and  its underlying code.  While designing the second version of the website, I knew not only did I need to follow best  engineering practices, but I also had to make an elegant user interface. ",
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
                "value":" The next five articles in the SaintsXCTF series are devoted solely to the website and its React codebase.  This article gives an overview of the technologies used in the frontend code and a walkthrough of the pages on the website. ",
                "children":null
            }
        ]
    },
    {
        "el":"subtitle",
        "attributes":{
            "title":"SaintsXCTF Version 2.0 Articles"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"SaintsXCTF Version 2.0 Articles",
                "children":null
            }
        ]
    },
    {
        "el":"ul",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Architectural Overview",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jun-14-2021-saints-xctf-v2-overview"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"AWS Infrastructure",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/oct-25-2021-saints-xctf-v2-k8s-infrastructure"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Kubernetes Infrastructure",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
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
                                "value":"React Web Application Overview",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/nov-15-2021-react-typescript"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application React and TypeScript",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/dec-3-2021-redux-react"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application Redux State Configuration",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/aug-11-2021-cypress-typescript"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application Cypress E2E Tests",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jun-30-2021-react-jss"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Web Application JSS Modular Design",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/dec-24-2021-flask-python-api"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Flask Python API",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/jan-10-2022-flask-api-testing"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Flask API Testing",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/feb-5-2022-function-api"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Function API Using API Gateway & Lambda",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/feb-18-2022-auth-api"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Auth API Using API Gateway & Lambda",
                                "children":null
                            }
                        ]
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"a",
                        "attributes":{
                            "href":"https://jarombek.com/blog/mar-27-2022-mysql-client-kubernetes"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":"Database Client on Kubernetes",
                                "children":null
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
            "title":"Technology Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Technology Overview",
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
                "value":" Version 2.0 of the SaintsXCTF web application uses the ",
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
                        "value":"React.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" frontend library.  For stylesheets, it uses ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=jss&page=1"
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
                "value":" (CSS in JavaScript).  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=redux&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Redux",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is leveraged for state management within the application.  For testing, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=jest&page=1"
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
                "value":" is utilized for  unit, integration, and snapshot tests.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=cypress&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Cypress",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is utilized for end to end (E2E) tests. ",
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
                "value":" When I first started creating version 2.0 of the web application, I wrote all the React, Redux, and JSS code in JavaScript.  However, after further consideration, I decided to pivot towards writing all the frontend code in TypeScript.  TypeScript is a superset of JavaScript with static type checking and additional language features. Nowadays, I often use TypeScript instead of JavaScript to make my code safer and less prone to subtle bugs.  With SaintsXCTF, version 2.0 was a great opportunity to finally use TypeScript in a production application.  Alongside the application code, the Jest and Cypress test code is also written in TypeScript. ",
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
                "value":" The React application is bundled for distribution with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=webpack&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" Webpack",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Locally, the application is run either with Webpack Dev Server or Docker.  In production, the application runs on a Docker container.  The Docker container configures and runs an Nginx server, which routes requests to the React code bundle.  This Docker container is orchestrated using Kubernetes and is part of a larger AWS infrastructure. ",
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
                "value":" Upcoming articles look at the web application code in detail, but the codebase is also accessible on GitHub in a ",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Website Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Website Overview",
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
                "value":" There are two main sections of the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" website: when there is no user session and when a user is signed in.  When there is no user session, the landing page is the home page: ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-home.png",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" When there is a user session, the landing page is the dashboard page: ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-dashboard.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" User sessions are determined by a JWT in the browser's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"localStorage",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  JWT tokens are passed along with all API requests for authentication.  If the JWT is expired or an API call results in an unauthenticated error, the JWT is removed and the user is signed out. ",
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
                "value":" A signed out user has the option to sign in or register.  Both sign in and registration have their own pages. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-sign-in.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-register.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" As shown previously, signed in users are navigated to a dashboard page, which shows the latest exercise logs.   It also gives them multiple navigation options.  Since the main purpose of the website is to allow users to write exercise logs, there is a page with an exercise log form. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-log-1.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-log-2.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" Each user has a profile page.  A profile page consists of multiple tabs, each showing a different view to the user.  Tabs include exercise logs, statistics, a weekly chart, and a monthly calendar. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-profile-logs.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-profile-calendar.png",
            "paddingtop":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-profile-chart.png",
            "paddingtop":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-profile-stats.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" If the profile page corresponds to the signed in user, an additional administrative tab is viewable, allowing the user to edit their profile. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-profile-edit.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" Each user is a member of zero to many teams, and each team consists of one or many groups.  These groups also get their own pages with multiple tabs.  One way to navigate to a group page is by clicking on the ",
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
                        "value":"Teams",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" link in the navigation bar, which displays all the teams the user is a member of and the corresponding groups. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-teams.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" From here, group pages are accessible.  For example, the following screenshots show all the tabs on the ",
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
                        "value":"Alumni",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" group page within the team ",
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
                        "value":"St. Lawrence Cross Country and Track & Field",
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
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-group-logs.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-group-members.png",
            "paddingtop":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-group-leaderboard.png",
            "paddingtop":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-group-stats.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"> ",
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
                "value":" The website also has an admin feature, where certain users are designated as administrators for specific groups.  If a user is an administrator, they can access a separate section of the website.  The admin section starts with a page that lists all the groups for which the user is an administrator. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-admin.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"> ",
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
                "value":" From this page, group admin pages are selectable.  Group admin pages have multiple tabs, giving users different ways to alter the group, change memberships, and invite new users to the website. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-admin-users.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-admin-invite.png",
            "paddingtop":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"11-1-21-saintsxctf-admin-edit.png",
            "paddingtop":"true"
        },
        "value":null,
        "children":[

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
                "value":" I'm really proud to see all my hard work pay off with the new version of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://saintsxctf.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In the next couple articles, I'll look at the technical details of the website in more detail.  If you want a preview of the code, you can view the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nsaints-xctf-web"
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
                "value":" repository on GitHub. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(1, 3);

postName = "nov-1-2021-saints-xctf-v2-react-web-app";
postDate = new Date('2021-11-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "SaintsXCTF Version 2.0: React Web Application Overview",
    description: `This article gives an overview of the technologies used in the frontend code and a walkthrough of the 
        pages on the website.`,
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
            name: "Redux",
            picture: "https://asset.jarombek.com/logos/redux.png",
            color: "redux"
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
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: []
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
