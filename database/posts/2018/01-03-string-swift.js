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
                "value":" Yesterday I began to fix some bugs in my website ",
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
                        "value":"saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and its corresponding native iOS and Android apps (because as we know a codebase is never complete).  I was looking at the Swift code for my iOS app and found a bug where I incorrectly selected a substring from a base64 encoded image.  Luckily the fix was easy to implement, but viewing the code made me remember just how confusing the String structure is in Swift. ",
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
                "value":" You would think something as simple as a string would be straightforward, but in Swift there are a few quirks.  I wrote the code for my iOS app in Xcode 8 and Swift 3 this fall.  Since then Xcode 9 and Swift 4 were released, making ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" a bit less confusing.  I dive into strings in Swift 3 first and then look at what changed in Swift 4. ",
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
                "value":" Yesterday I began to fix some bugs in my website ",
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
                        "value":"saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and its corresponding native iOS and Android apps (because as we know a codebase is never complete).  I was looking at the Swift code for my iOS app and found a bug where I incorrectly selected a substring from a base64 encoded image.  Luckily the fix was easy to implement, but viewing the code made me remember just how confusing the String structure is in Swift. ",
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
                "value":" You would think something as simple as a string would be straightforward, but in Swift there are a few quirks.  I wrote the code for my iOS app in Xcode 8 and Swift 3 this fall.  Since then Xcode 9 and Swift 4 were released, making ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" a bit less confusing.  I dive into strings in Swift 3 first and then look at what changed in Swift 4. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Swift 3"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Swift 3",
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
                "value":" The first quirk of strings in Swift 3 is obvious when you try to get the length of a string.  There is no length or count variable on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structure.  Instead each ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"characters",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CharacterView",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is a collection of all the characters in the string",
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
                "value":".  You can use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"characters",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object to get the strings size or iterate over all the characters. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"var hello = \"hello my name is andy 😺\"\n\nhello.characters.count // 23\n\n// The characters struct is a collection of Character structs\nlet chars: String.CharacterView = hello.characters\n\n// You can peform operations on the characters collection just like any other collection\nchars.forEach {\n    char -> Void in\n\n    print(char)\n}\n",
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
                "value":" Like any other collection, you can perform functions such as filter, map, and sort on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"characters",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Array operations are also possible. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"// Filter out all 'a' characters\nvar filtered = chars.filter {$0 != \"a\"}\n\n// Remove and return the last character in collection\nlet catEmoji = filtered.popLast() // '😺'\n\n// Convert back to a string\nString(filtered)\n\nString(filtered[6...7]) // returns 'my'\n",
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
                "value":" One of the difficult operations to perform on strings in Swift is getting a substring.  In other languages its as simple as a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"substring()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function with two integer arguments specifying the start and end indices.  Swift also has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"substring()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function but it accepts a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Range<String.Index>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structure.  This struct is constructed with two ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structures used together with a half-open range operator ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"..<",
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
                "value":" Okay, that already sounds a bit complicated.  The question is how do we get these ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structures?  We can get them by calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index(String.Index, offsetBy: Int)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on a string",
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
                "value":". The following code sample gets two ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structs and then uses them to get a substring.  Since the first argument of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structure, I used the strings built in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"startIndex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" property, which is the zero index of a string. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"var runDescription = \"I ran 2.12 miles at 6:47 pace on January 3rd, 2018\"\n\nlet start: String.Index = runDescription.index(runDescription.startIndex, offsetBy: 6)\nlet end: String.Index = runDescription.index(runDescription.startIndex, offsetBy: 10)\n\nlet range: Range<String.Index> = start..<end\n\nrunDescription.substring(with: range) // 2.12\n",
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
                "value":" So why is this ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" madness even necessary?  The answer has to do with the way Swift characters are stored, and in particular the possible complexities of using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-9-2018-unicode"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Unicode",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" scalars.  Characters in Swift are Unicode scalars which are characters defined in Unicode",
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
                "value":".  The problem is that some of these scalars are complex and can be combined into one visible character.  The following code shows two equivalent characters, except one uses two unicode scalars and the other uses one",
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
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"let e1 = \"\\u{00EB}\" // \"ë\"\nlet e2 = \"\\u{0065}\\u{0308}\" // \"ë\"\n\nif e1 == e2 {\n    print(\"They are equal!\")\n}\n\nif e1.characters.count == e2.characters.count {\n    print(\"They both have a length of 1!\")\n}\n",
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
                "value":" The consequence of this is an index in the internal character structure may only hold a piece of a visible character",
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
                "value":".  Because of this, Swift makes this complexity obvious by implementing the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" struct.  Annoying sure, but it makes sense so that newcomers to Swift won't be tricked by the character implementation. ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"October 15th, 2018"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Many languages handle ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-9-2018-unicode"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Unicode characters",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a different way. Languages such as Python, JavaScript, Java, etc. have a simpler string implementation at the expense of string lengths potentially not matching the number of visible characters.  This problem is remedied with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/oct-9-2018-unicode#normalization"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"normalization",
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
            "title":"Swift 4"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Swift 4",
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
                "value":" In Swift 4 the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"characters",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" collection was deprecated and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" struct became a collection.  This makes strings easier since you can perform all collection operations directly on the string object. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"var hello = \"hello my name is andy 😺\"\n\nprint(hello.count) // 23\n\nhello.forEach {\n    char -> Void in\n\n    print(char)\n}\n\n// In Swift 4 since Strings are collections, we can filter directly on the String\nvar filtered = String(hello.filter { $0 != \"a\" })\n\nfiltered.removeLast() // '😺'\n",
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
                "value":" We still have to use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structure in Swift 4 (unfortunately for those who know the internal structure). However, we can avoid the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Range",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" structure since strings are collections! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"var runDescription = \"I ran 2.12 miles at 6:47 pace on January 3rd, 2018\"\n\nlet start: String.Index = runDescription.index(runDescription.startIndex, offsetBy: 6)\nlet end: String.Index = runDescription.index(runDescription.startIndex, offsetBy: 9)\n\nlet miles = runDescription[start...end] // 2.12\n",
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
                "value":" Swift 4 also joins other modern languages (including JavaScripts ES6 standard) by introducing multi-line strings in code",
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
                "value":"! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"let stats = \"\"\"\n    name: andy\n    date: 2018-01-03\n    miles: \\(miles)\n\"\"\"\n",
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
                "value":" Although the verbose ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" struct is still necessary in Swift 4, changing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" into a collection and supporting multi-line strings are major upgrades that make switching to Swift 4 worth it!  The code in this discovery is up on my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/01-Jan/\n1-3-Swift-String"
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

postName = "jan-3-2018-string-swift";
postDate = new Date('2018-01-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Strings in Swift 3 & 4",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "Swift 3",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "Swift 4",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"String.CharacterView\", ",
            endName: "",
            linkName: "https://developer.apple.com/documentation/swift/string.characterview",
            link: "https://developer.apple.com/documentation/swift/string.characterview"
        },
        {
            startName: "\"Range\", ",
            endName: "",
            linkName: "https://developer.apple.com/documentation/swift/range",
            link: "https://developer.apple.com/documentation/swift/range"
        },
        {
            startName: "\"index(_:offsetBy:)\", ",
            endName: "",
            linkName: "https://developer.apple.com/documentation/swift/string/1786175-index",
            link: "https://developer.apple.com/documentation/swift/string/1786175-index"
        },
        {
            startName: "Matthew Mathias & John Gallagher, ",
            endName: " (Atlanta, GA: Big Nerd Ranch, 2016), 63",
            linkName: "Swift Programming: The Big Nerd Ranch Guide",
            link: "https://www.bignerdranch.com/books/swift-programming/"
        },
        {
            startName: "\"Unicode Character Table\", ",
            endName: "",
            linkName: "https://unicode-table.com/en/#control-character",
            link: "https://unicode-table.com/en/#control-character"
        },
        {
            startName: "\"How does String.Index work in Swift\", ",
            endName: "",
            linkName: "https://stackoverflow.com/questions/39676939/how-does-string-index-work-in-swift",
            link: "https://stackoverflow.com/questions/39676939/how-does-string-index-work-in-swift"
        },
        {
            startName: "\"What’s New in Swift 4?\", ",
            endName: "",
            linkName: "https://www.raywenderlich.com/163857/whats-new-swift-4",
            link: "https://www.raywenderlich.com/163857/whats-new-swift-4"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});