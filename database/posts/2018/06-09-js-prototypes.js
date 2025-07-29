/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/9/2018
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
                "value":" For developers new to JavaScript understanding how prototypes work is quite confusing (myself included).  The construct itself is quite simple, however those of us accustomed to class based object oriented programming have difficulty grasping JavaScripts object model.  This discovery post attempts to clear up some confusing pieces of JavaScript prototypes and inheritance. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Prototype"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Prototype",
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
                "value":" For developers new to JavaScript understanding how prototypes work is quite confusing (myself included).  The construct itself is quite simple, however those of us accustomed to class based object oriented programming have difficulty grasping JavaScripts object model.  This discovery post attempts to clear up some confusing pieces of JavaScript prototypes and inheritance. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Prototype"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Prototype",
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
                "value":" Most of the building blocks in JavaScript are objects.  Besides for the primitives ( ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"string",
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
                "value":"number",
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
                "value":"boolean",
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
                "value":"null",
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
                "value":"undefined",
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
                "value":"symbol",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") everything in JavaScript is an object",
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
                "value":" JavaScript has basic object types which we interact with every day in our code.  Lesser known is that functions and arrays are also types of objects.  This makes sense if you think about it - functions and arrays can be passed just like objects and have methods and properties just like objects.  Functions in JavaScript are first class citizens as it relates to other objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"First Class Citizen"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In programming terms an entity is a first class citizen when it has all the abilities of another entity",
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
                "value":". For example, in JavaScript functions are first class citizens because they are treated just like any other object (in fact they are objects).  Functions can be instantiated, assigned to a variable, and passed as an argument just like any other object.  They can also have properties and methods like any object.  Functions have all the rights of other citizens in the programming language. ",
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
                "value":" Almost everything in JavaScript is an object with first class abilities.  Every object in JavaScript has an internal property called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[[Prototype]]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  While the prototype property seemed mysterious when I first learned JavaScript it is actually very simple.  A prototype is a reference to another object. ",
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
                "value":" So why would you want a JavaScript object to reference a different object?  Linking objects through prototypes allows for a natural form of inheritance.  Inheritance in JavaScript is known as prototypal inheritance. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Prototypal Inheritance"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In JavaScript objects can be linked together through prototypes.  When an object is linked to a prototype, all the exposed methods and properties on the prototype object are exposed to the base object.  Importantly the prototype object is not copied into the base objects instance.  Instead, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[[Prototype]]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property on the base object holds a reference to the prototype object.  You can think of a prototype chain as a singly linked list of objects.  Each object has a reference to the next object (prototype object) in the chain. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Prototype Chain"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The method by which prototypal inheritance occurs.  In JavaScript objects are linked together via the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[[Prototype]]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  These linkages create a chain of objects, held together by the prototype reference.  This chain is known as the prototype chain. ",
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
                "value":" Lets look at some examples of natural prototype chains to get a better feel for these concepts. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Prototype Chains"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Prototype Chains",
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
                "value":" For starters lets check out what prototype chain is linked to an object literal.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.getPrototypeOf(obj)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is a simple way to find the prototype of an object.  This function can be used successively to traverse the prototype chain. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const person = {\n    name: \"Andrew Jarombek\",\n    age: 23\n};\n\n// Traverse the prototype chain of an object\n// person{name, age} -> Object.prototype -> null\nconst objPrototype = Object.getPrototypeOf(person);\nconst objProtoPrototype = Object.getPrototypeOf(objPrototype);\n\nconsole.info(objPrototype);\nconsole.info(objProtoPrototype);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Object.prototype\n{constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, ...}\n\n# The prototype of Object.prototype is null\nnull\n",
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
                "value":" This code reveals what prototype is linked to an object literal - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  All objects have this prototype somewhere in their chain unless explicitly defined not to.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines important functions such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"toString()",
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
                "value":"valueOf()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so in most cases you wouldn't want to explicitly tell an object not to have ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in its chain.  I will show you how to define an object without ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" later on. ",
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
                "value":" The object above ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the prototype chain is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The reason for having ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in the prototype chain is to define the top of the chain.  There should be no prototype objects for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.prototype",
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
                "value":" Here is a visual representation of the prototype chain for an object literal: ",
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
                    "src":"https://asset.jarombek.com/posts/6-9-18-object-chain.png"
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
                "value":" Arrays in JavaScript are simply objects with extra functionality.  The extra functions supplied to arrays can be found in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Array.prototype",
                "children":null
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
        "value":"const array = [1,2,3,4];\n\n// Traverse the prototype chain of an array\n// [1,2,3,4] -> Array.prototype -> Object.prototype -> null\nconst arrayPrototype = Object.getPrototypeOf(array);\nconst arrayProtoPrototype = Object.getPrototypeOf(arrayPrototype);\n\nconsole.info(arrayPrototype);\nconsole.info(arrayProtoPrototype);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Array.prototype\n[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, ...]\n\n# Object.prototype\n{constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, ...}\n",
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
                "value":" Here is a visual representation of the prototype chain for an array: ",
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
                    "src":"https://asset.jarombek.com/posts/6-9-18-array-chain.png"
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
                "value":" A function in JavaScript is a callable object.  Because of its object structure, functions also have prototype chains: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const addition = (x, y) => x + y;\n\n// Traverse the prototype chain of a function\n// {f(x, y)} -> Function.prototype -> Object.prototype -> null\nconst funcPrototype = Object.getPrototypeOf(addition);\nconst funcProtoPrototype = Object.getPrototypeOf(funcPrototype);\n\nconsole.info(funcPrototype);\nconsole.info(funcProtoPrototype);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Function.prototype\nƒ () { [native code] }\n\n# Object.prototype\n{constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, ...}\n",
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
                "value":" Here is a visual representation of the prototype chain for a function: ",
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
                    "src":"https://asset.jarombek.com/posts/6-9-18-function-chain.png"
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
                "value":" Whether you knew it or not, all the objects used in JavaScript have a prototype chain.  There are a few different ways you can use prototype chains to define prototypal inheritance between objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Prototypal Inheritance"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Prototypal Inheritance",
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
                "value":" A more traditional way to define prototypes and prototypal inheritance is through functions and the ES6 ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.setPrototypeOf()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  Here is the first object in my prototype chain: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function Exercise(type) {\n    this.type = type;\n    this.date = Date.now();\n}\n\nconst newExercise = new Exercise('Run');\n\n// Add properties to the Exercise prototype\n// All objects created with the Exercise constructor function will have these prototype elements\nExercise.prototype.distance = 3.39;\nExercise.prototype.minutes = 25;\nExercise.prototype.seconds = 46;\n\n// Able to access items on the prototype\nconsole.info(`${newExercise.minutes}:${newExercise.seconds}`);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"25:46\n",
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
                "value":" All ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does is bind some properties to ",
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
                "value":".  I wrote an entire ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/nov-11-2017-js-this"
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
                "value":" on ",
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
                "value":" in JavaScript since it can get quite confusing.  Calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" without a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"new",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword does nothing, since it binds ",
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
                "value":" to the function scope which no longer exists after the call is completed.  However, when ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"new Exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked an object is created as a side effect.  This object contains all elements in the function scope, so the object created from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"new Exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" contains the properties ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"date",
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
                "value":" Every object has a prototype which is often modifiable (you could always freeze a prototype - remember it is just an object).  One way to access the prototype for modification is through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property.  In the code above the prototypes ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"distance",
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
                "value":"minutes",
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
                "value":"seconds",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties are defined. ",
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
                "value":" The final line of the code accesses two properties on the prototype - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"minutes",
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
                "value":"seconds",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" - and prints them out.  The notation for accessing a prototype property is the same as accessing a base object property.  What is JavaScript doing behind the scenes to resolve variables on the prototype that are searched for on the base object instance? ",
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
                "value":" When searching for a property or method in a JavaScript object, the first thing JavaScript does is search through the base object.  If the method or property is not found on the base object, the search continues up the prototype chain.  The following diagram demonstrates a search JavaScript performs for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"minutes",
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
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/6-9-18-prototype-traverse.png"
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
                "value":" Now that the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object is understood, how can we extend this object in a prototype chain?  Traditionally you could create another object and call the previous objects constructor function within it.  Here is an example of a specialized exercise object that defines a running workout: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"function Run(surface) {\n    Exercise.call(this, 'Run');\n    this.surface = surface;\n}\n\nconst firstRun = new Run('Grass');\n\nconsole.info(firstRun);\n\n// Cant find minutes and seconds - the prototype is not yet hooked up\nconsole.info(`${firstRun.minutes}:${firstRun.seconds} on ${firstRun.surface}`);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Run {type: \"Run\", date: 1528548053295, surface: \"Grass\"}\nundefined:undefined on Grass\n",
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
                "value":"call()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is used in this example to explicitly bind ",
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
                "value":" to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Run()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions scope.  Binding ",
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
                "value":" gives ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Run()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" access to the ",
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
                "value":" and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"date",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function.  Right now the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor function is set as the prototype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"firstRun",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  However there is still an issue which becomes apparent in the last call to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"console.info()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The prototype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is still not in the prototype chain of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"firstRun",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"!  Because of this the properties ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"minutes",
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
                "value":"seconds",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are not found. ",
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
                "value":" To fix the problem I called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.setPrototypeOf()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to add ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" into the prototype chain.  The following code sets the prototype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Run.prototype",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (the constructor function of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise.prototype",
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
        "value":"Object.setPrototypeOf(Run.prototype, Exercise.prototype);\n",
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
                "value":" Now the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"minutes",
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
                "value":"seconds",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variables are in the prototype chain. ",
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
                "value":" In the examples so far every property was defined once in the prototype chain.  What would happen if a property or method was defined in multiple levels of the prototype chain?  Looking back at the diagram that searched for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"minutes",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property, the search began at the base object and worked its way up the prototype chain.  If there are multiple instances of a property on a chain, the first time the search finds that property it returns its value, ignoring any properties further up the chain.  This process is known as shadowing, since any properties further up the prototype chain are covered up by matching properties lower on the chain",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Object.create()",
            "iscode":"true"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Object.create()",
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
                "value":" In ES5 a cleaner way to define the prototype of an object was introduced that doesn’t depend on the object creation side effects of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"new",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operator. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.create()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" creates a new object whose prototype is passed in as the first argument.  This function also has an optional second parameter which sets some properties on the newly created object.  This approach is displayed below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const Exercise = {\n    print: function() {\n        console.info(`${this.type} ${this.miles} Miles in ${this.minutes}:${this.seconds}`)\n    }\n};\n\n// Create a new object with Exercise as its prototype\n// Note that using this version of Object.create() means that objects are not immutable\n// if you want them to have properties\nlet run = Object.create(Exercise);\n\n// Add new properties to the run object.\nrun.type = 'Run';\nrun.miles = 3.46;\nrun.minutes = 20;\nrun.seconds = 33;\n\nrun.print();\n\nconsole.info(Object.getPrototypeOf(run));\n\n// Longer more verbose implementation of Object.create(prototype, object)\n// Now at least the object can be implicitly immutable\nlet secondRun = Object.create(Exercise, {\n    type: {value: 'Run'},\n    miles: {value: 4.11},\n    minutes: {value: 29},\n    seconds: {value: 57}\n});\n\nsecondRun.print();\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Run 3.46 Miles in 20:33\n{print: ƒ}\nRun 4.11 Miles in 29:57\n",
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
                "value":" Another way to use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.create()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is to create an object without a prototype.  This can be done by passing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as the only argument to the function like so - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.create(null)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The newly created object from this function invocation has an internal ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[[Prototype]]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property that points to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"null",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  While this allows developers to easily create an object without a prototype chain, note the drawbacks of this approach mentioned earlier. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"ES6 Class"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"ES6 Class",
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
                "value":" ES6 introduced the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"class",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax for creating objects, which confusingly is built on top of prototypal inheritance.  The following code defines the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Exercise",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class and its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Run",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" subclass. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"class Exercise {\n    constructor(type, miles, minutes, seconds) {\n        this.type = type;\n        this.miles = miles;\n        this.minutes = minutes;\n        this.seconds = seconds;\n    }\n\n    print() {\n        console.info(`${this.type} ${this.miles} Miles in ${this.minutes}:${this.seconds}`);\n    }\n}\n\nclass Run extends Exercise {\n    constructor(miles, minutes, seconds, surface) {\n        super('Run', miles, minutes, seconds);\n        this.surface = surface;\n    }\n}\n\nconst run = new Run(1, 5, 31, 'Track');\n\nrun.print();\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"Run 1 Miles in 5:31\n",
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
                "value":" To make it explicitly clear that classes in JavaScript are simply syntactic sugar on top of prototypes, the following code traverses the prototype chain of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"run",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and prints its members out. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// Go through the prototype chain of Run\nconst runPrototype = Object.getPrototypeOf(run);\nconst runProtoPrototype = Object.getPrototypeOf(runPrototype);\nconst runProtoProtoPrototype = Object.getPrototypeOf(runProtoPrototype);\n\nconsole.info(runPrototype);\nconsole.info(runProtoPrototype);\nconsole.info(runProtoProtoPrototype);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Run\nExercise {constructor: ƒ}\n\n# Exercise\n{constructor: ƒ, print: ƒ}\n\n# Object.prototype\n{constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, ...}\n",
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
                "value":" Understanding prototype chains and prototypal inheritance is important when utilizing JavaScripts object oriented features.  Often I use a more functional approach with JavaScript, so I rarely run into problems with prototypes. However, understanding prototypes is crucial for being a well rounded JavaScript dev. ",
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
                "value":" All the code from this discovery is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/\nmaster/2018/06-Jun/6-9-Prototype-Inheritance"
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

postName = "jun-9-2018-js-prototype";
postDate = new Date('2018-06-09T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "JavaScript Prototypes & Inheritance",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
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
            name: "Inheritance"
        },
        {
            name: "Object Oriented"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Kyle Simpson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2014), 36",
            linkName: "You Don't Know JavaScript: this & Object Prototypes",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes"
        },
        {
            startName: "\"First-class citizen\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/First-class_citizen",
            link: "https://en.wikipedia.org/wiki/First-class_citizen"
        },
        {
            startName: "",
            endName: ", 88",
            linkName: "Simpson.",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});