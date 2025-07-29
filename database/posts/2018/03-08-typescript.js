/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/29/2018
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-6-2018-angular-5-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"First Reactions to Angular",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" discovery post, I was quite critical of TypeScript.  I questioned whether it truly was a pure superset of JavaScript and didn't like how it forced the MEAN stack to use multiple languages. ",
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
                "value":" I did finish my TypeScript discussion saying I'd give it a chance and continue working with it.  So is TypeScript going to replace my JavaScript now that I built a full Angular 5 app with it?  Not quite, but it is a really cool language that brings a lot to the JavaScript ecosystem! ",
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-6-2018-angular-5-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"First Reactions to Angular",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" discovery post, I was quite critical of TypeScript.  I questioned whether it truly was a pure superset of JavaScript and didn't like how it forced the MEAN stack to use multiple languages. ",
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
                "value":" I did finish my TypeScript discussion saying I'd give it a chance and continue working with it.  So is TypeScript going to replace my JavaScript now that I built a full Angular 5 app with it?  Not quite, but it is a really cool language that brings a lot to the JavaScript ecosystem! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Static Typing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Static Typing",
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
                "value":" The biggest argument for TypeScript over JavaScript is that its statically typed.  This can result in quicker development and for bugs that stem from type incompatibilities to never appear in the first place.  TypeScript does a great job of this!  Its also really nice that TypeScript doesn't force type definitions. If you don't explicitly give a variable a type it uses the default ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"any",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type. All types in TypeScript are subtypes of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"any",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Variables of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"any",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be assigned any value just like JavaScript",
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
                "value":"!  This allows developers to slowly incorporate TypeScript specific features into their code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Constructor Shortcuts"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Constructor Shortcuts",
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
                "value":" There were many cool features of TypeScript that assisted my Angular development.  One of these features was access modifiers and constructors.  TypeScript allows you to use access modifiers on constructor arguments and then automatically adds these arguments as properties of the object. This reduces code and the use of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"this",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the constructor body. In fact almost none of my constructors even needed bodies! ",
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
                "value":" Here is an example of a TypeScript class using the constructor shortcut: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"class User {\n\n    // Access modifiers (public, private, protected in TS) on constructor variables\n    // automatically make them instance variables\n    constructor(private username: string, private first: string, private last: string) { }\n\n    public getUsername() {\n\n        // Access the automatically created instance variable\n        return this.username;\n    }\n}\n\nconst newUser: User = new User(\"andy\", \"Andrew\", \"Jarombek\");\nconsole.info(newUser.getUsername()); // andy\n",
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
                "value":" In JavaScript this shortcut doesn't exist and properties must be explicitly assigned to an object. Here is the JavaScript equivalent**: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"class User {\n\n    constructor(username, first, last) {\n        this.username = username;\n        this.first = first;\n        this.last = last;\n    }\n\n    getUsername() {\n        return this.username;\n    }\n}\n\nconst user = new User('andy', 'Andrew', 'Jarombek');\nconsole.info(user.getUsername()); // andy\n",
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
                "value":" **Well, kinda.  The object properties in this class are accessible to outside code.  To make them private requires additional complexity.  If you want to see exactly how TypeScript converts to JavaScript, you can paste this code into the online ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.typescriptlang.org/play/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" TypeScript playground",
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
                "value":" Its also important to remember that both TypeScript and JavaScript classes are syntactic sugar on top of Prototypes. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Interfaces"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Interfaces",
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
                "value":" While JavaScript doesn't have interfaces, TypeScript gives developers an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"interface",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword to work with. Interestingly TypeScript interfaces don't transpile into JavaScript code.  Instead they are used to enforce types among classes",
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
                "value":" In my Angular project I had multiple classes interacting with my backend API.  Since each class had a similar structure, each implemented an interface: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"interface HttpService {\n\n    getAll(): Observable<[any]>;\n    get(name: any): Observable<any>;\n    post(item: any): Observable<any>;\n    put(item: any): Observable<any>;\n    patch?(name: string, data: {[key: string]: any}): Observable<any>;\n    delete(name: any): Observable<any>;\n}\n",
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
                "value":"patch()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function defined in the interface is optional for classes to implement (as defined with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"?",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" token).  This allows my classes to still be flexible even with an interface! ",
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
                "value":" These were a few TypeScript features that really stood out to me.  I really missed static typing amongst other features when switching back to JavaScript.  While I don't think TypeScript will replace my use of JavaScript, I do hope JavaScript implements some of these features in the future (in fact, there is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/michaelficarra/proposal-first-class-protocols"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"proposal",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to add interfaces to JavaScript, so there is hope!). ",
                "children":null
            }
        ]
    }
];

postName = "mar-8-2018-typescript";
postDate = new Date('2018-03-08T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "What I Learned About TypeScript",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
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
    sources: [
        {
            startName: "Yakov Fain &amp; Anton Moiseev, ",
            endName: " (Shelter Island, NY: Manning, 2017), 395",
            linkName: "Angular 2 Development with TypeScript",
            link: "https://www.manning.com/books/angular-2-development-with-typescript"
        },
        {
            startName: "",
            endName: ", 410",
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