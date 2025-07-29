/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/28/2018
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
                "value":" Recently I learned a few JavaScript technologies for building website backends.  I looked at ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-30-2017-nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Node.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the server layer and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-15-2017-mongodb-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MongoDB",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the database layer.  Now I'm switching gears and learning some front-end JavaScript technologies.  My top two picks for front-end frameworks are Angular and React.js.  Today I'm beginning my journey with Angular.  Through this research I will determine if its a suitable option for my website.  This post won't display much code, instead focusing on my initial reactions to the framework. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"Angular CLI"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Angular CLI",
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
                "value":" Recently I learned a few JavaScript technologies for building website backends.  I looked at ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-30-2017-nodejs-mongodb-api-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Node.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the server layer and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/dec-15-2017-mongodb-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MongoDB",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the database layer.  Now I'm switching gears and learning some front-end JavaScript technologies.  My top two picks for front-end frameworks are Angular and React.js.  Today I'm beginning my journey with Angular.  Through this research I will determine if its a suitable option for my website.  This post won't display much code, instead focusing on my initial reactions to the framework. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Angular CLI"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Angular CLI",
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
                "value":" Getting started, I struggled for a very long time setting up all my Angular dependencies.  I wanted to do it all manually in the beginning so I could get to know the framework better.  I tried and failed for a few hours and eventually gave up.  The problem was my Angular \"hello world\" code returned a blank screen with no error messages (which is quite hard to debug).  I decided that I was in over my head with this framework and had to choose an easier entry approach. ",
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
                "value":" Luckily there is an easier option - the Angular CLI.  Angular CLI automates many common tasks in the Angular framework.  It builds new Angular projects, creates new components, runs Angular code on a server and more",
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
                "value":".  The Angular CLI is also a wrapper around Webpack, performing all the module bundling for you",
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
                "value":".  I don't yet know the details of Webpack, so auto bundling makes Angular CLI really helpful.  Once I really understand the ins and outs of Angular, it may be nice to have more control over a project than Angular CLI gives me. ",
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
                "value":" The nicest thing about Angular CLI is how easy it is to setup a new project.  After Angular CLI is installed, creating and running a new Angular project is as easy as the following two Bash commands. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Create a new Angular project with name 'developer'\nng new developer\n\n# Start the Angular project on a server\nng serve\n",
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
                "value":" The one thing that annoyed me about Angular CLI is how much content they put into the base Angular project. The bloat included fully set up testing suites (multiple), a fully populated .gitignore file, and more.  For someone who likes to customize my own project, this was overkill.  I ended up deleting most of these files to get only the necessary components. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"TypeScript Language"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"TypeScript Language",
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
                "value":" The creators of Angular suggest that you use TypeScript, a superset of JavaScript that is statically typed. You can also use JavaScript, but I've decided to follow the advice and try TypeScript.  So far I've found it to be more detrimental than beneficial. ",
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
                "value":" Supposedly TypeScript is a true superset of JavaScript, meaning all JavaScript code is valid TypeScript code.  However, in my first hacks at the language I had trouble using JavaScript features in TypeScript. For example, when using a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RegExp",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in TypeScript I got errors saying that its JavaScript functions did not exist.  This may be simply user error, but so far TypeScript has not been the smooth transition it is advertised to be. ",
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
                "value":" Also, using TypeScript disrupts my full JavaScript web stack.  Although TypeScript is very similar to JavaScript, I still have to adjust to using two different languages when developing. As my TypeScript experience grows I will see if I start seeing some benefits of the language. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Modules Components"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Modules & Components",
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
                "value":" This post has been fairly negative, so I will take a break from that and look at some exciting things about Angular that I can't wait to get my hands on.  Angular at its core is made up of modules that contain components, directives, services, etc",
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
                "value":".  When working with AngularJS I always liked the modularized structure it gave my JavaScript code in comparison to my old JQuery spaghetti code. Angular 5 seems even more modularized then AngularJS, which appears beneficial at first glance. ",
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
                "value":" My \"hello world\" Angular project contains one module.  It is exported for use in other classes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\nimport { DeveloperComponent } from './app.component';\nimport { ValidDevDirective } from './valid-dev.directive';\n\n// Wrap a component and directive into a module.\n// Each file can be one module which can be exported.\n// You must import BrowserModule in the root module\n@NgModule({\n    imports: [BrowserModule],\n    declarations: [DeveloperComponent, ValidDevDirective],\n    bootstrap: [DeveloperComponent]\n})\nexport class AppModule { }\n",
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
                "value":"@NgModule",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotation specifies that this class is an Angular module.  Note that just like ES6 classes, TypeScript classes are not true classes.  They are transpiled into JavaScript prototypes and are simply syntactic sugar. ",
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
                "value":" The annotations object has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"declarations",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property that specifies all the members of the module",
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
                "value":". The first module member is a Component named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DeveloperComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Each component has a TypeScript class that defines model data and a view (which is usually HTML). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { Component } from '@angular/core';\n\n// Create a new Angular component which can be used in HTML with the 'developer' tag\n// Angular uses annotations as metadata\n@Component({\n    selector: 'developer',\n    templateUrl: 'app.component.html'\n})\nexport class DeveloperComponent {\n    dev: string;\n\n    constructor() {\n        this.dev = 'Andy';\n    }\n}\n",
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
                "value":" The awesome thing about components is they define a reusable HTML tag.  Each HTML tag is named after the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@Component",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotations ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"selector",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  The contents of a HTML tag are defined in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@Component",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" annotations ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"template",
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
                "value":"templateUrl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties.  The HTML contents render on a webpage at runtime, replacing the components HTML tag. ",
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
                "value":" For example my code has an index.html file like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<body>\n    <developer></developer>\n</body>\n",
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
                "value":" When rendered in the browser, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<developer>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tag is replaced with the markup defined in my component: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HTML"
        },
        "value":"<div>\n    <h1>\n        Hello {{ dev }}!\n    </h1>\n    <p>Enter a developer name:</p>\n    <div>\n        <input type=\"text\" name=\"devInput\" valid-dev>\n    </div>\n</div>\n",
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
                "value":" The characters ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"{{dev}}",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the HTML document are replaced with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"dev",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variables value in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DeveloperComponent",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class.  This binding between HTML and TypeScript creates many possibilities for dynamic webpages that I can't wait to explore! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Directives"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Directives",
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
                "value":" The second module member is a directive called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ValidDevDirective",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". A directive is like a component except it has no view and is placed on an existing HTML element ",
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
                "value":".  If you look at the HTML ",
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
                "value":" element in my component above you will see an attribute called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"valid-dev",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This attribute is defined in my directive, which right now changes the border color of the input field when a value is entered. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import { Directive, ElementRef, Renderer2 } from '@angular/core';\n\n@Directive({\n    selector: 'input[valid-dev]',\n    host: {\n        '(input)': 'onInput($event)'\n    }\n})\nexport class ValidDevDirective {\n    renderer: any;\n    element: any;\n\n    constructor(renderer: Renderer2, element: ElementRef) {\n        this.renderer = renderer;\n        this.element = element;\n\n        this.style('#ccc')\n    }\n\n    // When the value in the input field changes, check its contents\n    onInput(event) {\n        let value: string = event.target.value;\n\n        if (value === '') {\n            this.style('#ccc')\n        } else {\n            this.style('black')\n        }\n    }\n\n    style(color) {\n        this.renderer.setStyle(this.element.nativeElement, 'border-color', color)\n    }\n}\n",
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
                "value":" This is a very trivial implementation, but it is cool how directives extend the implementation of HTML elements.  Reusable directives and components save time and lines of code throughout a project.  Like components, I am excited to try out more complex directive implementations. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Wrapping Up"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Wrapping Up",
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
                "value":" This was a quick glance at my first attempts with Angular 5.  I am not convinced Angular is the solution for me yet, but there is still a lot of work and exploring to do.  Up next I will start building a ",
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
                        "value":"full Angular project",
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

postName = "jan-6-2018-angular-5-first-impressions";
postDate = new Date('2018-01-06T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Angular 5 First Impressions",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Angular",
            picture: "https://asset.jarombek.com/logos/angular.png",
            color: "angular"
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
        },
        {
            name: "HTML",
            picture: "https://asset.jarombek.com/logos/html.png",
            color: "html"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"The Ultimate Angular CLI Reference Guide\", ",
            endName: "",
            linkName: "https://www.sitepoint.com/ultimate-angular-cli-reference/",
            link: "https://www.sitepoint.com/ultimate-angular-cli-reference/"
        },
        {
            startName: "\"To use Angular CLI or not?\", ",
            endName: "",
            linkName: "https://medium.jonasbandi.net/to-use-angular-cli-or-not-187f87d0b550",
            link: "https://medium.jonasbandi.net/to-use-angular-cli-or-not-187f87d0b550"
        },
        {
            startName: "Yakov Fain &amp; Anton Moiseev, ",
            endName: " (Shelter Island, NY: Manning, 2017), 32",
            linkName: "Angular 2 Development with TypeScript",
            link: "https://www.manning.com/books/angular-2-development-with-typescript"
        },
        {
            startName: "",
            endName: ", 33",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/angular-2-development-with-typescript"
        },
        {
            startName: "",
            endName: ", 35",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/angular-2-development-with-typescript"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});