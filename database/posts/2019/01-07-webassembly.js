/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 1/5/2019
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
                "value":" Low-level languages such as C, C++, and Assembly have always interested me.  However, the lack of use cases for these languages in my personal projects causes them to be left to the side.  I do believe proficiency in these languages helps developers write better high-level code, so I occasionally work with them in my free time.  This article introduces a new low-level language called WebAssembly. ",
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
                "value":" Ever since I first heard about WebAssembly, I've wanted to play around with it.  WebAssembly was released as a minimum viable product (MVP) in March 2017",
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
                "value":".  It's designed to work in the web alongside JavaScript. WebAssembly allows programming languages other than JavaScript to run in the browser.  Despite its name, WebAssembly is not an assembly language since its not hardware specific",
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
                "value":".  Instead, WebAssembly runs in the same browser virtual machine that executes JavaScript",
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
                "value":".  In the past this VM was only able to run JavaScript, however as of November 2017 it can also execute WebAssembly across all major browsers",
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
                "value":". ",
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
                "value":" Low-level languages such as C, C++, and Assembly have always interested me.  However, the lack of use cases for these languages in my personal projects causes them to be left to the side.  I do believe proficiency in these languages helps developers write better high-level code, so I occasionally work with them in my free time.  This article introduces a new low-level language called WebAssembly. ",
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
                "value":" Ever since I first heard about WebAssembly, I've wanted to play around with it.  WebAssembly was released as a minimum viable product (MVP) in March 2017",
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
                "value":".  It's designed to work in the web alongside JavaScript. WebAssembly allows programming languages other than JavaScript to run in the browser.  Despite its name, WebAssembly is not an assembly language since its not hardware specific",
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
                "value":".  Instead, WebAssembly runs in the same browser virtual machine that executes JavaScript",
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
                "value":".  In the past this VM was only able to run JavaScript, however as of November 2017 it can also execute WebAssembly across all major browsers",
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
                "value":" In its current state, WebAssembly enables ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=C&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C",
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
                    "href":"https://jarombek.com/blog/jan-3-2019-cpp-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C++",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and Rust to run in a web browser.  One future goal of WebAssembly is to allow garbage collected languages to run in the browser as well (these include ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=java&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Java",
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
                    "href":"https://jarombek.com/blog?query=python&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python",
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
                    "href":"https://jarombek.com/blog/jan-2-2019-csharp-first-impressions"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"C#",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", etc.). ",
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
                "value":" WebAssembly has two formats - a human readable text format and a binary format.  Text based WebAssembly is called WAT (WebAssembly Text Format) and binary based WebAssembly is called WASM.  When writing WebAssembly code, development is completed in the WAT format. ",
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
                "value":" While you can develop WebAssembly directly, its meant to be used as an intermediate representation. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Intermediate Representation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" An intermediate representation is code used by a compiler to represent source code",
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
                "value":".  For example, WebAssembly is used by compilers as an intermediate representation for higher-level languages. ",
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
                "value":" In this article, I'm going to write code in WebAssembly and execute it in JavaScript.  I think it's a great educational opportunity to see how this new intermediate representation for the web works. For real applications, only compilers will need to understand WebAssembly.  Application developers will simply write code in higher-level languages such as C or C++ and compile them to WebAssembly to be run in the browser. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"WebAssembly First Steps"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"WebAssembly First Steps",
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
                "value":" WebAssembly is a software implemented stack machine where programs push and pop values off the execution stack.  Other examples of languages that are stack machines include JVM bytecode",
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
                "value":".  Similar to assembly, lines of WebAssembly code perform single instructions.  However, while assembly code interacts with CPU registers, WebAssembly code interacts with the virtual stack machine. ",
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
                "value":" As mentioned previously, WebAssembly development is done in the text format WAT.  The following code is a basic WebAssembly module containing a function that adds two integers together. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"WebAssembly"
        },
        "value":";; test.wat\n\n(module\n  (func $add (param $n0 i32) (param $n1 i32) (result i32)\n    get_local $n0\n    get_local $n1\n    i32.add\n  )\n\n  (export \"add\" (func $add))\n)\n",
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
                "value":" WebAssembly programs consist of modules which can communicate with one another.  The functionality of modules is concentrated in functions, which are specified with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"func",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" keyword.  WebAssembly code can be written in a linear format or with s-expressions",
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
                "value":". S-expressions are tree-like structures which are nested in WebAssembly with parenthesis. ",
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
                "value":" WebAssembly has four basic types, 32-bit integers (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"i32",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), 64-bit integers (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"i64",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), 32-bit floating point numbers (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f32",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), and 64-bit floating point numbers (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f64",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  With these basic types any complex type can be created.  Each function has a set number of local variables accessed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"get_local",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" operation",
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
                "value":".  Each of the function parameters (specified with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(param ${param_name} {param-type})",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") is a local variable of the function. ",
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
                "value":" In the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$add",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function body, the first instruction ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"get_local $n0",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes the first parameter and places it on the execution stack.  The second instruction ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"get_local $n1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes the second parameter and places it on the execution stack.  The final instruction ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"i32.add",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" pops both integers off the execution stack, adds them together, and places the result back on the stack.  Finally, the result is returned from the function. ",
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
                "value":" The final line of the WebAssembly module exports the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$add",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function for use outside the module.  In my case, I use this function in JavaScript code. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Running WebAssembly in JavaScript"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Running WebAssembly in JavaScript",
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
                "value":" JavaScript has a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WebAssembly",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" global object that is used for all WebAssembly related functionality",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WebAssembly",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" global object to compile WebAssembly byte code (WASM) and instantiate it in JavaScript. Compiling and instantiating Webassembly byte code is accomplished with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WebAssembly.compile()",
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
                "value":"WebAssembly.instantiate()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" functions, respectively. ",
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
                "value":" In order to work with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WebAssembly",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" global object, the WAT files I coded need to be converted to binary WASM files.  This is accomplished with the WebAssembly Tool Kit (WABT).  Although WABT is implemented in C++, there is a JavaScript port in the npm registry",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"10",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following code uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WebAssembly",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" global object and WABT module to execute the WebAssembly ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$add",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"$add",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exists in a file called ",
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
                        "value":"test.wat",
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
        "value":"// wat-wasm.js\n\nconst wabt = require(\"wabt\")();\nconst fs = require(\"fs\");\n\n/**\n* Convert a web assembly text file (.wat) to a web assembly binary file (.wasm)\n* @param inputWat - the name of the existing .wat file\n* @param outputWasm - the name of the produced .wasm file\n*/\nconst watToBinary = (inputWat, outputWasm) => {\n  const wasmModule = wabt.parseWat(inputWat, fs.readFileSync(inputWat, \"utf8\"));\n  const {buffer} = wasmModule.toBinary({});\n\n  fs.writeFileSync(outputWasm, new Buffer(buffer));\n};\n\n/**\n* Compile and run a web assembly binary\n* @param wasm - the name of the .wasm file\n* @param exec - a function that executes with an instance of the compiled web assembly program\n* @return {Promise<void>}\n*/\nconst runWasm = async (wasm, exec) => {\n  const buffer = fs.readFileSync(wasm);\n  const module = await WebAssembly.compile(buffer);\n  const instance = await WebAssembly.instantiate(module);\n\n  exec(instance);\n};\n\n/**\n* Execute a web assembly text file.  Internally this function calls watToBinary() to convert the\n* .wat file to .wasm, and then calls runWasm() to compile and run the .wasm binary file.\n* @param wat - the name of the existing .wat file\n* @param exec - a function that executes with an instance of the compiled web assembly program\n*/\nexports.execWat = (wat, exec) => {\n  const outputWasm = `${wat.substr(0, wat.indexOf('.'))}.wasm`;\n  watToBinary(wat, outputWasm);\n  runWasm(outputWasm, exec);\n};\n\nmodule.exports = exports;\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"// main.js\n\nconst {execWat} = require('./wat-wasm');\n\n// Basic addition operation in Web Assembly\nexecWat(\"wa/test.wat\", (instance) => console.info(instance.exports.add(2, 2)));\n",
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
                "value":"instance.exports.add(2, 2)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" accesses the exported WebAssembly function and invokes it.  As expected, the code returns ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"4",
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
            "title":"WebAssembly Next Steps"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"WebAssembly Next Steps",
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
                "value":" WebAssembly modules are often broken down into multiple sections.  These include the function types, global variables, memory declarations, export definitions, and function bodies",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"11",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Here's an example with all these sections: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"WebAssembly"
        },
        "value":";; basics.wat\n\n(module\n  ;; Function Type section\n  (type $calcPace1a (func (param i32 i32 i32) (result i32)))\n  (type $calcPace1b (func (param i32 i32 i32) (result i32)))\n  (type $calcPace2 (func (param f32 i32 i32) (result f32)))\n  (type $setInt (func (param i32 i32)))\n  (type $setIntInverse (func (param i32 i32)))\n  (type $getInt (func (param i32) (result i32)))\n  (type $inc (func (result i32)))\n  (type $div (func (param i32 i32 i32) (result i32)))\n\n  ;; Global section\n  (global $stored_location i32 (i32.const 26))\n\n  ;; Memory section\n  ;; This module requires one page of memory (64 KiB)\n  (memory 1)\n\n  ;; Export section\n  (export \"calcPace1a\" (func $calcPace1a))\n  (export \"calcPace1b\" (func $calcPace1b))\n  (export \"calcPace2\" (func $calcPace2))\n  (export \"setInt\" (func $setInt))\n  (export \"setIntInverse\" (func $setInt))\n  (export \"getInt\" (func $getInt))\n  (export \"inc\" (func $inc))\n  (export \"div\" (func $div))\n\n  ;; Function Bodies section\n  ...\n)\n",
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
                "value":" I mentioned earlier that WebAssembly can be written in a linear format or with s-expressions.  The following two functions calculate the mile pace of a run.  The first follows a linear format and the second uses s-expressions. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"WebAssembly"
        },
        "value":";; Calculate the mile pace of an exercise.  The number of miles exercised must\n;; be an integer.\n(func $calcPace1a (param $miles i32) (param $minutes i32)\n                  (param $seconds i32) (result i32)\n  get_local $minutes\n  i32.const 60\n  i32.mul\n  get_local $seconds\n  i32.add\n  get_local $miles\n  i32.div_s\n)\n\n;; Rewritten with a nested s-expression form.\n(func $calcPace1b (param $miles i32) (param $minutes i32)\n                  (param $seconds i32) (result i32)\n  (i32.div_s\n    (i32.add\n      (i32.mul\n        (get_local $minutes)\n        (i32.const 60)\n      )\n      (get_local $seconds)\n    )\n    (get_local $miles)\n  )\n)\n",
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
                "value":" This code reveals some of the 32-bit integer operators that WebAssembly provides.  Also, inline integer values are created with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"i32.const",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instruction. Changing these functions to handle floating point distances requires type conversions and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"f32",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"WebAssembly"
        },
        "value":"(func $calcPace2 (param $miles f32) (param $minutes i32)\n                 (param $seconds i32) (result f32)\n  (f32.div\n    ;; Convert the 32-bit integer into a 32-bit floating point number\n    (f32.convert_s/i32\n      (i32.add\n        (i32.mul\n          (get_local $minutes)\n          (i32.const 60)\n        )\n        (get_local $seconds)\n      )\n    )\n    (get_local $miles)\n  )\n)\n",
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
                "value":" WebAssembly provides linear memory for use in modules.  In the memory section of my module I declared ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"(memory 1)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", meaning that the module needs access to a single page (64 KiB) of memory",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"12",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Memory is read and written to using operators.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"i32.load",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to read an integer from memory and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"i32.store",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to write an integer to memory.  Memory is indexed starting at zero, with integers used to read/write data. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"WebAssembly"
        },
        "value":"(func $setInt (param $key i32) (param $value i32)\n  (i32.store\n    (get_local $key)\n    (get_local $value)\n  )\n)\n\n;; Retrieve an integer stored at a given location in memory.\n(func $getInt (param $key i32) (result i32)\n  (i32.load\n    (get_local $key)\n  )\n)\n",
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
                "value":" Memory helps create functions that persist data between invocations, such as a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/01-Jan/01-07-webassembly/\nwa/basics.wat"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"function invocation counter",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  WebAssembly also supports more complex program flow, such as loops and conditionals.  The following function demonstrates ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"if",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statements in WebAssembly. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"WebAssembly"
        },
        "value":";; Perform division on two integers.  If the type parameter is 0, an integer\n;; division is performed.  Otherwise a floating point division is performed.\n(func $div (param $num i32) (param $den i32) (param $type i32) (result i32)\n  (if (result i32)\n    (i32.eqz\n      (get_local $type)\n    )\n    (then\n      (i32.div_s\n        (get_local $num)\n        (get_local $den)\n      )\n    )\n    (else\n      (i32.trunc_s/f32\n        (f32.div\n          (f32.convert_s/i32\n            (get_local $num)\n          )\n          (f32.convert_s/i32\n            (get_local $den)\n          )\n        )\n      )\n    )\n  )\n)\n",
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
                "value":" I had a lot of fun experimenting with WebAssembly.  Since its still so early in WebAssembly's life cycle, it's hard to find a lot of material about it online.  I'm excited to follow its development progress and continue prototyping with it in the future.  The code for this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2019/01-Jan/01-07-webassembly"
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

postName = "jan-7-2019-web-assembly";
postDate = new Date('2019-01-07T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Decoding WebAssembly",
    description: `This article looks at a low-level language called WebAssembly.  WebAssembly allows 
        programming languages other than JavaScript to run in the browser.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "WebAssembly",
            picture: "https://asset.jarombek.com/logos/webassembly.png",
            color: "webassembly"
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
            startName: "\"WebAssembly\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/WebAssembly",
            link: "https://en.wikipedia.org/wiki/WebAssembly"
        },
        {
            startName: "\"WebAssembly: How and why\", ",
            endName: "",
            linkName: "https://blog.logrocket.com/webassembly-how-and-why-559b7f96cd71",
            link: "https://blog.logrocket.com/webassembly-how-and-why-559b7f96cd71"
        },
        {
            startName: "\"How does WebAssembly fit into the web platform?\", ",
            endName: "",
            linkName: "https://mzl.la/2SCAzVq",
            link: "https://mzl.la/2SCAzVq"
        },
        {
            startName: "\"WebAssembly: Support\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/WebAssembly#Support",
            link: "https://en.wikipedia.org/wiki/WebAssembly#Support"
        },
        {
            startName: "\"Intermediate representation\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Intermediate_representation",
            link: "https://en.wikipedia.org/wiki/Intermediate_representation"
        },
        {
            startName: "\"Stack machine: Virtual stack machines\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Stack_machine#Virtual_stack_machines",
            link: "https://en.wikipedia.org/wiki/Stack_machine#Virtual_stack_machines"
        },
        {
            startName: "\"S-expression\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/S-expression",
            link: "https://en.wikipedia.org/wiki/S-expression"
        },
        {
            startName: "\"Semantics: Local variables\", ",
            endName: "",
            linkName: "https://github.com/WebAssembly/design/blob/master/Semantics.md#local-variables",
            link: "https://github.com/WebAssembly/design/blob/master/Semantics.md#local-variables"
        },
        {
            startName: "\"WebAssembly\", ",
            endName: "",
            linkName: "https://mzl.la/2SFDrRe",
            link: "https://mzl.la/2SFDrRe"
        },
        {
            startName: "\"wabt\", ",
            endName: "",
            linkName: "https://www.npmjs.com/package/wabt",
            link: "https://www.npmjs.com/package/wabt"
        },
        {
            startName: "\"Introduction to WebAssembly: Anatomy of a WebAssembly program\", ",
            endName: "",
            linkName: "https://rsms.me/wasm-intro#anatomy-of-a-webassembly-program",
            link: "https://rsms.me/wasm-intro#anatomy-of-a-webassembly-program"
        },
        {
            startName: "\"Writing WebAssembly By Hand\", ",
            endName: "",
            linkName: "https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html",
            link: "https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});