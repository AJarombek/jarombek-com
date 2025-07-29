/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 5/23/2018
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
                "value":" The benefits of keeping data immutable while programming is well documented.  Immutable data is side effect free, predictable, and easy to test.   While immutability is a strict requirement in the functional paradigm, for other paradigms it is simply a recommendation.  In a language like JavaScript that supports multiple paradigms, some code does ",
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
                        "value":"not",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keep data immutable.  I am guilty of it too. ",
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
                "value":" All the code I write these days has immutability in mind.  This post goes over the basics of preventing object mutations in JavaScript and how ES6+ features simplify the task. ",
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
                "value":" The benefits of keeping data immutable while programming is well documented.  Immutable data is side effect free, predictable, and easy to test.   While immutability is a strict requirement in the functional paradigm, for other paradigms it is simply a recommendation.  In a language like JavaScript that supports multiple paradigms, some code does ",
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
                        "value":"not",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keep data immutable.  I am guilty of it too. ",
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
                "value":" All the code I write these days has immutability in mind.  This post goes over the basics of preventing object mutations in JavaScript and how ES6+ features simplify the task. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Immutable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Something that is immutable can't be changed.  In a programming language data is immutable when the value of an object or primitive can't be altered. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Constant vs Immutable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Constant vs. Immutable",
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
                "value":" One common confusion with immutability in JavaScript revolves around the new ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword introduced in ES6.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"const",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" declares a constant variable, one that can't change once its assigned.  The trick is that constant in JavaScript doesn't mean that the referenced object is immutable.  You can mutate the referenced object all you want. What you can't do is change the reference to point to a different object or primitive. ",
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
                "value":" In JavaScript a constant variable is bound to a primitive type or a reference to an object. All primitives in JavaScript are immutable, so a constant primitive is effectively immutable. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"/* Const can't be rebound to a new primitive or object */\nconst name = 'Andy';\n\n/* Throws TypeError: Assignment to constant variable. */\n// name = 'Joe';\n\n/* Let can be bound to a new object or primitive */\nlet othername = 'Andy';\nothername = 'Joe';\n\nconsole.info(othername);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Joe\n",
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
                "value":" Objects are not necessarily immutable.  More care must be taken to avoid mutating an object.  Here is an example of a constant variable referencing an array.  Note that the array can mutate: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const names = [\"Andrew\", \"Jarombek\"];\nnames[0] = \"Joe\";\n\nconsole.info(`Names After Modification: ${names}`);\n\n/* Throws TypeError: Assignment to constant variable. */\n// names = [\"Joe\", \"Jarombek\"];\n\n// Freezing the names array makes it read only\nObject.freeze(names);\n\nnames[0] = \"Tom\";\nconsole.info(`Names After Frozen: ${names}`);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Names After Modification: Joe,Jarombek\nNames After Frozen: Joe,Jarombek\n",
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
                "value":" More on that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.freeze()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function shortly.  For now simply note that it prevents the mutation of an object! ",
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
                "value":" Now that the difference between constant and immutable is clear, it is time to look at approaches for immutability in JavaScript.  There are two common approaches - making code explicitly immutable or just implicitly immutable. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Explicitly Immutable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Explicitly Immutable",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Explicitly Immutable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When a piece of data is clearly defined as being immutable.  When a variable is explicitly immutable it is impossible to mutate its value even if you try. ",
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
                "value":" In JavaScript all objects have internal attributes determining which actions can be performed on them",
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
                "value":". One of these internal attributes is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Extensible",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which determines whether an object can be modified.  Modifying an object entails removing or adding a property.  By default, objects in JavaScript are extensible, meaning programmers are free to modify them. ",
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
                "value":" One way to set the internal ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Extensible",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" attribute to false is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.seal()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Once an object is passed to this function it can no longer be modified.  Note that sealing is not the same as making an object immutable.  You can still mutate existing properties: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const cat = {\n    breed: \"Russian Blue\",\n    name: \"Lily\"\n};\n\nObject.seal(cat);\n\nconst isSealed = Object.isSealed(cat);\nconsole.info(`Is Cat Sealed: ${isSealed}`);\n\n/* Sealed objects allow for properties to be modified... */\ncat.name = \"Dotty\";\n\n/* ...But they do not allow for new properties to be added... */\ncat.owner = \"Andy\";\n\n/* ...or deleted */\ndelete cat.name;\n\nconsole.info(`Sealed Cat After Modification: ${JSON.stringify(cat)}`);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Is Cat Sealed: true\nSealed Cat After Modification: {\"breed\":\"Russian Blue\",\"name\":\"Dotty\"}\n",
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
                "value":" Sealing an object makes it explicitly un-modifiable.  This is nice, however we are looking for explicit immutability.  To achieve this goal, we can use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.freeze()",
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
        "value":"const person = {\n    name: \"Andy\",\n    hometown: {\n        city: \"Riverside\",\n        state: \"Connecticut\",\n        country: \"USA\"\n    }\n};\n\nObject.freeze(person);\n\nconst isFrozen = Object.isFrozen(person);\nconsole.info(`Is Person Frozen: ${isFrozen}`);\n\n// Object is frozen, this mutation has no effect\nperson.name = \"Joe\";\n\n// Freezing is shallow, so nested objects can be mutated!\nperson.hometown.country = \"Canada\";\n\nconsole.info(person);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Is Person Frozen: true\n{\n    name: 'Andy',\n    hometown: {\n        city: 'Riverside',\n        state: 'Connecticut',\n        country: 'Canada'\n    }\n}\n",
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
                "value":" Once an object is frozen none of its properties can be modified.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.freeze()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" explicitly states the object passed as an argument is immutable. ",
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
                "value":" There is a catch with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.freeze()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The freeze operation is shallow, meaning only direct properties on the object are restricted from mutating.  Nested objects properties are not frozen.  This is why in the above code the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"country",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property is able to mutate.  Code that performs a deep freeze is a bit more involved",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Implicitly Immutable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Implicitly Immutable",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Implicitly Immutable"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" When something is implicit it is not directly said or expressed.  Instead its implied and known to be true.  When data is implicitly immutable in a programming language it is never strictly declared as being immutable.  However, as a developer its implied that the data is immutable because other code doesn't mutate it.  Its known to be immutable. ",
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
                "value":" ES6 introduced two new ways to keep data implicitly immutable.  One is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.assign()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and the other is the spread operator (the recommended approach).  I demonstrate both on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"person",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const person = {\n    name: \"Andy\",\n    hometown: {\n        city: \"Riverside\",\n        state: \"Connecticut\",\n        country: \"USA\"\n    }\n};\n\nconst changedNamePerson = {\n    ...person,\n    name: \"Joe\"\n};\n\nconsole.info(`The Original Person: ${JSON.stringify(person)}`);\nconsole.info(`The New Person: ${JSON.stringify(changedNamePerson)}`);\n\nconst anotherNewPerson = Object.assign({}, changedNamePerson, {name: \"Tom\"});\n\nconsole.info(`The New Person: ${JSON.stringify(changedNamePerson)}`);\nconsole.info(`The New(er) Person: ${JSON.stringify(anotherNewPerson)}`);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"\nThe Original Person: {\"name\":\"Andy\",\"hometown\":{\"city\":\"Riverside\",\"state\":\"Connecticut\",\"country\":\"USA\"}}\nThe New Person: {\"name\":\"Joe\",\"hometown\":{\"city\":\"Riverside\",\"state\":\"Connecticut\",\"country\":\"USA\"}}\n\nThe New Person: {\"name\":\"Joe\",\"hometown\":{\"city\":\"Riverside\",\"state\":\"Connecticut\",\"country\":\"USA\"}}\nThe New(er) Person: {\"name\":\"Tom\",\"hometown\":{\"city\":\"Riverside\",\"state\":\"Connecticut\",\"country\":\"USA\"}}\n",
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
                "value":" The spread operator (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"...",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") makes a copy of every property on an original object (or array) and spreads them out into a new object (or array).  It performs the necessary copy to keep property data immutable.  Note that just like ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.freeze()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the spread operator makes a shallow copy.  If you wanted to make a deep copy the code is a bit more involved. ",
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
                "value":"Object.assign()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a bit more verbose.  It creates a copy of an object, where the first parameter is the target object upon which the new object is built.  The rest of the parameters are the sources objects, which are copied into the target object.  Although ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.assign()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" gets the job done, the spread operator is much more concise (and the recommended approach). ",
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
                "value":" One important note before moving on.  In the examples above the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"name",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property is defined twice in the target object.  In JavaScript this is okay.  In the case of a property name conflict the  second property value overwrites the first property value.  Property conflict resolution helps give a copied object's property a new value without mutating the existing property! ",
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
                "value":" The following two sections show some basic operations on objects and arrays to keep them immutable. These operations follow the \"implicitly immutable\" approach.  Note the extensive use of ES6+ features such as the spread operator, destructuring, and functional methods. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Immutable Objects"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Immutable Objects",
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
                "value":" The following code provides static methods for objects to keep them immutable: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"\n/* Class with static helper methods for immutably manipulating objects */\nclass Objects {\n\n    /* Add a new property to an object */\n    static add(item, object) {\n        return {\n            ...object,\n            ...item\n        };\n    };\n\n    /* Replace a property in an object */\n    static replace(newItem, object) {\n        return Objects.add(newItem, object);\n    };\n\n    /* Remove a property from an object */\n    static remove(item, object) {\n\n        // Destructure the original object.  Unpack the property whose key matches\n        // the string value of the 'item' parameter.  Then rename it to '_', which will\n        // be ignored.  Copy the rest of the properties into the newObject.\n        const {[item]: _, ...newObject} = object;\n        console.info(`Removing ${JSON.stringify(_)}`);\n\n        return newObject;\n    };\n}\n\n/* Object representing a software developer */\nconst object = {\n    name: \"Andrew Jarombek\",\n    skills: [\"Java\", \"JavaScript\", \"Etc\"],\n    job: {\n        position: \"Software Developer\",\n        company: \"Gartner\"\n    }\n};\n\nconst objectWithAge = Objects.add({age: 23}, object);\n\nconsole.info(object);\nconsole.info(objectWithAge);\n\nconst objectWithNewSkills = Objects.replace({skills: [\"Java\", \"JavaScript\"]}, object);\n\nconsole.info(object);\nconsole.info(objectWithNewSkills);\n\nconst objectNoSkills = Objects.remove('job', object);\n\nconsole.info(object);\nconsole.info(objectNoSkills);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"# Adding a property\n{ name: 'Andrew Jarombek',\nskills: [ 'Java', 'JavaScript', 'Etc' ],\njob: { position: 'Software Developer', company: 'Gartner' } }\n\n{ name: 'Andrew Jarombek',\nskills: [ 'Java', 'JavaScript', 'Etc' ],\njob: { position: 'Software Developer', company: 'Gartner' },\nage: 23 }\n\n# Replacing a property\n{ name: 'Andrew Jarombek',\nskills: [ 'Java', 'JavaScript', 'Etc' ],\njob: { position: 'Software Developer', company: 'Gartner' } }\n\n{ name: 'Andrew Jarombek',\nskills: [ 'Java', 'JavaScript' ],\njob: { position: 'Software Developer', company: 'Gartner' } }\n\n# Removing a property\nRemoving {\"position\":\"Software Developer\",\"company\":\"Gartner\"}\n\n{ name: 'Andrew Jarombek',\nskills: [ 'Java', 'JavaScript', 'Etc' ],\njob: { position: 'Software Developer', company: 'Gartner' } }\n\n{ name: 'Andrew Jarombek',\nskills: [ 'Java', 'JavaScript', 'Etc' ] }\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Immutable Arrays"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Immutable Arrays",
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
                "value":" The following code provides static methods for arrays to keep them immutable: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"\n/* Class with static helper methods for immutably manipulating arrays */\nclass Arrays {\n\n    /* Add a new element to an array */\n    static add(item, array) {\n        return [\n            ...array,\n            item\n        ];\n    };\n\n    /* Replace an element in an array */\n    static replace(item, newItem, array) {\n        return array.map((i) => {\n            return (i === item) ? newItem : i;\n        });\n    };\n\n    /* Remove an element from an array */\n    static remove(item, array) {\n        return array.filter((i) => i !== item);\n    };\n}\n\nconst array = [1, 2, 4, 8, 16];\n\nconst thirtyTwoArray = Arrays.add(32, array);\n\nconsole.info(array);\nconsole.info(thirtyTwoArray);\n\nconst zeroMiddleArray = Arrays.replace(4, 0, array);\n\nconsole.info(array);\nconsole.info(zeroMiddleArray);\n\nconst noEightArray = Arrays.remove(8, array);\n\nconsole.info(array);\nconsole.info(noEightArray);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"[ 1, 2, 4, 8, 16 ]\n[ 1, 2, 4, 8, 16, 32 ]\n\n[ 1, 2, 4, 8, 16 ]\n[ 1, 2, 0, 8, 16 ]\n\n[ 1, 2, 4, 8, 16 ]\n[ 1, 2, 4, 16 ]\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Explicit Immutability TypeScript"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Explicit Immutability TypeScript",
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
                "value":" I know this post is centered around JavaScript, but this year I also spent time working in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-8-2018-typescript"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"TypeScript",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/mar-17-2018-mean-stack-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Angular framework",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  TypeScript has a really cool way to define explicitly immutable properties and variables with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"readonly",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword. This keyword makes properties immutable",
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
                "value":"! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"type Time = {\n    readonly minutes: number;\n    readonly seconds: number;\n}\n\nclass Run {\n    readonly name: string;\n    readonly date = Date.now();\n    readonly miles: number;\n    readonly time: Time;\n\n    constructor(name: string, miles: number, time: Time) {\n        this.name = name;\n        this.miles = miles;\n        this.time = time;\n    }\n}\n\nconst todaysRun = new Run(\n        \"Beach Run\",\n        3.26,\n        {minutes: 25, seconds: 56}\n    );\n\nconsole.info(todaysRun);\n\n// You can't change the name property because it is read only\n// todaysRun.name = \"Trail Run\";\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Run {\n    date: 1527090916455,\n    name: 'Beach Run',\n    miles: 3.26,\n    time: { minutes: 25, seconds: 56 }\n}\n",
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
                "value":" Pretty cool right?  Too bad there isn't any similar syntax in JavaScript that can be defined on property definitions. ",
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
                "value":" We all know that mutability is bad and leads to fragile code.  I recently worked on an existing codebase in Java that contained mutable data and it was a nightmare.  A central data structure to the application was mutated by a function call on a variable that didn't even match the one the data structure was bound to!  It was confusing to say the least. ",
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
                "value":" One question that arises from this post is which is better - implicit or explicit immutability.  I would say it depends.  In JavaScript the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Object.freeze()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" approach to explicit immutability is not very safe.  Since the object is not frozen when it is initialized there are points in time before its frozen.  This is dangerous.  The TypeScript approach to explicit immutability is much better since it is applied to the property definitions. ",
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
                "value":" The upside to explicit immutability is that its obvious to other developers (and your future self) that properties can't be mutated.  The fact that attempts to mutate an object will fail is a very safe approach. ",
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
                "value":" However if you know what you're doing implicit immutability is good enough.  With implicit immutability code is dependable and side effect free! ",
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
                "value":" As always, the code for this discovery is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/\nmaster/2018/05-May/5-23-JavaScript-Immutable"
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

postName = "may-23-2018-javascript-immutable";
postDate = new Date('2018-05-23T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Keeping Data Immutable in JavaScript",
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
            name: "Immutability"
        },
        {
            name: "TypeScript",
            picture: "https://asset.jarombek.com/logos/ts.png",
            color: "typescript"
        },
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Nicholas Zakas, ",
            endName: " (San Francisco: No Starch Press, 2014), 14",
            linkName: "The Principles of Object-Oriented JavaScript",
            link: "https://nostarch.com/oojs"
        },
        {
            startName: "\"Object.freeze()\", ",
            endName: "",
            linkName: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
        },
        {
            startName: "\"readonly\", ",
            endName: "",
            linkName: "https://basarat.gitbooks.io/typescript/docs/types/readonly.html",
            link: "https://basarat.gitbooks.io/typescript/docs/types/readonly.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});