/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/6/2018
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
                "value":" I often think that processing strings of characters in an application is a simple process.  The reasoning behind this line of thought is that string APIs provided by programming languages are usually very simple.  However, processing characters is only straightforward when edge cases are avoided.  With the growth of Unicode and use of special characters (for localization, emojis, etc.), edge cases are increasingly common.  This post explores the complexities of Unicode and how programming languages support its edge cases. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is Unicode?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Unicode?",
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
                "value":" Unicode is a standard for creating character encodings and handling characters in a consistent manner",
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
                "value":".  Unicode was built upon older character encodings such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/ISO/IEC_8859"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ISO 8859",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and its subset ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/ASCII"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ASCII",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These old encodings have limited scope (ASCII has just 128 characters),  making them inapt for international applications.  While ASCII often works fine for applications used by English speakers in the United States (ASCII contains the characters A-Z, numbers 0-9, punctuation, and common symbols), anyone else is out of luck.  Unicode fixes these limitations, implementing characters from languages across the world, and even creating fun symbols and emojis.  As of Unicode 11.0 over ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/\nList_of_Unicode_characters"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"137,000 characters exist",
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

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" I often think that processing strings of characters in an application is a simple process.  The reasoning behind this line of thought is that string APIs provided by programming languages are usually very simple.  However, processing characters is only straightforward when edge cases are avoided.  With the growth of Unicode and use of special characters (for localization, emojis, etc.), edge cases are increasingly common.  This post explores the complexities of Unicode and how programming languages support its edge cases. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Unicode?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Unicode?",
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
                "value":" Unicode is a standard for creating character encodings and handling characters in a consistent manner",
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
                "value":".  Unicode was built upon older character encodings such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/ISO/IEC_8859"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ISO 8859",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and its subset ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/ASCII"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ASCII",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These old encodings have limited scope (ASCII has just 128 characters),  making them inapt for international applications.  While ASCII often works fine for applications used by English speakers in the United States (ASCII contains the characters A-Z, numbers 0-9, punctuation, and common symbols), anyone else is out of luck.  Unicode fixes these limitations, implementing characters from languages across the world, and even creating fun symbols and emojis.  As of Unicode 11.0 over ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://en.wikipedia.org/wiki/\nList_of_Unicode_characters"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"137,000 characters exist",
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
                "value":" Unicode is somewhat backwards compatible with ISO 8859 and ASCII.  For example, in some Unicode encodings the character 'A' is the same in Unicode and ASCII, and any valid ASCII encoding is valid Unicode. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Character Encodings"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Character Encodings",
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
                "value":" Unicode uses code points to identify each character.  Each code point is a four to six digit hexadecimal number",
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
                "value":".  Most languages allow unicode code points to be used in strings as escaped sequences.  For example, the following JavaScript statement creates a string containing the Unicode code point 0394. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const delta = '\\u0394';\n",
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
                "value":" The hexadecimal number 0394 represents a single Unicode character - the greek delta (Δ).  Unicode code points are often prefixed with the character 'U' like so: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"U+0394",
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
                "value":" Things get confusing when we consider which character encoding the string ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":" '\\u0394'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses.  A reasonable guess is that it uses the Unicode character encoding.  Unfortunately it's not that simple.  Unicode is a standard for how to create character encodings, and there are many different encoding formats that match the Unicode spec. ",
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
                "value":" A character encoding is a way to identify a character with some kind of code",
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
                "value":".  Unicode has many different encodings, the most common being UTF-8, UTF-16, UTF-32, and UCS-2. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Unicode Encodings"
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
                                "value":" UTF-8 ",
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
                                        "value":" A character encoding for Unicode that uses between 1 and 4 bytes.  Each unit in UTF-8 is 8 bits, or one byte.  The amount of bytes used to represent characters depends on the Unicode code point.  For code points less than ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"U+0074",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", the encoding uses a single byte",
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
                                        "value":".  This encompasses most european languages and all of ASCII.  Since ASCII is also encoded using one byte, the UTF-8 encoding is backwards compatible to ASCII for the first 128 characters",
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
                                        "value":".  Since each unit in UTF-8 is one byte, the encoding is endianless. ",
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
                                "value":" UTF-16 ",
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
                                        "value":" A character encoding for Unicode that uses either 2 or 4 bytes.  Each unit in UTF-16 is 16 bits, or two bytes",
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
                                        "value":".  Similar to UTF-8, the number of bytes used to represent characters depends on the Unicode code point.  Since each unit is two bytes long, the order in which these bytes are stored is important.  Bytes can be stored in a little endian or big endian manner.  The endianness of UTF-16 is dependent on the Byte Order Mark (BOM), which consists of two byes at the beginning of the encoding",
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
                                        "value":".  The BOM bytes ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"0xFF 0xFE",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are used to declare a little endian encoding, while the bytes ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"0xFE 0xFF",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are used to declare a big endian encoding",
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
                                        "value":".  Java uses UTF-16 to represent characters ",
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
                                        "value":" and most JavaScript engines use UTF-16 for character encoding",
                                        "children":null
                                    },
                                    {
                                        "el":"sup",
                                        "attributes":null,
                                        "value":"10, 11",
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
                                "value":" UTF-32 ",
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
                                        "value":" A character encoding for Unicode that always uses 4 bytes.  Each unit in UTF-32 is 32 bits, or four bytes.  Unlike UTF-8 and UTF-16, the number of bytes used to represent characters does not depend on the Unicode code point.  All code points use 4 bytes.  Bytes can be stored in a little endian or big endian manner.  The endianness of UTF-32 is dependent on the BOM, which consists of four byes at the beginning of the encoding",
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
                                        "value":".  The BOM bytes ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"0xFF 0xFE 0x00 0x00",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are used to declare a little endian encoding, while the bytes ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"0x00 0x00 0xFE 0xFF",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are used to declare a big endian encoding",
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
                                        "value":".  Since all code points in UTF-32 use 4 bytes, it is very easy to determine the length of a string using this encoding.  However, UTF-32 is memory intensive, since there are often many wasted bytes (as you can see in the BOM where some bytes are empty - ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"0x00",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":")",
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
                                        "value":". ",
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
                                "value":" UCS-2 ",
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
                                        "value":" A character encoding for Unicode that always uses 2 bytes.  Each unit in UCS-2 is 16 bits, or two bytes.  UTF-8, UTF-16, and UTF-32 all support the full Unicode standard.  On the other hand, UCS-2 only supports a subsection of Unicode called the Basic Multilingual Plane (BMP).  The BMP contains characters from most modern languages and symbols, however some common characters (such as certain emojis) reside outside the BMP",
                                        "children":null
                                    },
                                    {
                                        "el":"sup",
                                        "attributes":null,
                                        "value":"13",
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
                        ]
                    }
                ]
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Little Endian"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Describes a byte ordering where groups of bytes are ordered from the little end",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"14",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  With little endian,  the first byte in the group is the least significant byte.  For example, the character 'a' in the UTF-16 little endian encoding is represented as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0x61 0x00",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", where ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0x61",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the least significant byte in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"U+0061",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code point. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Big Endian"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Describes a byte ordering where groups of bytes are ordered from the big end.  With big endian, the first byte in the group is the most significant byte.  For example, the character 'a' in the UTF-16 big endian encoding is represented as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0x00 0x61",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", where ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"0x00",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the most significant byte in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"U+0061",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code point. ",
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
                "value":" Let's look at different Unicode encodings in Python code.  The following strings represent two different ways of writing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'beyoncé'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in Unicode. The escaped sequences (ex. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\\u0301",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") are Unicode code points. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Two different unicode representations of 'beyoncé'\nb = 'beyonce\\u0301'\nb2 = 'beyonc\\u00E9'\n\nprint(b)   # beyoncé\nprint(b2)  # beyoncé\n\n# While both representations appear the same, they are not considered equal\nassert not b == b2\n\n# The UTF-8 byte encodings.  \\xcc\\x81 is equivalent to (U+0301), the unicode code point for\n# a 'combining acute accent' (https://bit.ly/2OGrmwC)\nassert b.encode('utf8') == b'beyonce\\xcc\\x81'\n\n# \\xc3\\xa9 is equivalent to (U+00E9), the unicode code point for 'é'\nassert b2.encode('utf8') == b'beyonc\\xc3\\xa9'\n\n# The UTF-16 encoding for 'beyonce\\u0301'.  Each character is at least 2 bytes long, compared to\n# UTF-8 where characters that are compatible with ASCII are encoded with 1 byte.\nassert b.encode('utf-16') == b'\\xff\\xfeb\\x00e\\x00y\\x00o\\x00n\\x00c\\x00e\\x00\\x01\\x03'\n\n# The UTF-32 encoding for 'beyonce\\u0301'.\nassert b.encode('utf-32') == b'\\xff\\xfe\\x00\\x00b\\x00\\x00\\x00e\\x00\\x00\\x00y\\x00\\x00\\x00' \\\n                             b'o\\x00\\x00\\x00n\\x00\\x00\\x00c\\x00\\x00\\x00e\\x00\\x00\\x00\\x01\\x03\\x00\\x00'\n",
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
                "value":" Note the differences between encoding in UTF-8, UTF-16, and UTF-32.  For this simple string, UTF-8 is by far the most memory efficient. ",
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
                "value":" This code also reveals some complexities of the Unicode standard.  Strings can look the same, but use different code points under the hood.  Unicode complexities cause issues, especially when checking for equality between two strings.  Upon observing the strings in variables ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"b",
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
                "value":"b2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", you would expect them to be equal.  However, the first assertion statement reveals they are not.  If you checked the length of these two strings, the result may also be a surprise: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Both representations have different lengths.\n# 'beyoncé' appears to have length 7, however variable 'b' resolves to length 8\nassert len(b) == 8\nassert len(b2) == 7\n",
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
                "value":" Since variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"b",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" used two code points ( ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\\u0065\\u0301",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to represent 'é', Python says it has length 8, even though the human readable representation has 7 characters.  The 'e' code point ( ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\\u0065",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") is called a base character and the accent code point ( ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\\u0301",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") is called a combining character.  Code points are defined this way since combining characters are merged with base characters to create a single visible character",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"15",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". To solve the issue of length and equality disparity in Unicode strings (in large part thanks to combining and base characters), normalization is used. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Normalization"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Normalization",
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
                "value":" Normalization in Unicode is the process of transforming code points to match a certain standard.  Once a standard is matched, it is likely that our prior issues of mismatching string lengths and inequality will be fixed.  There are four Unicode normalized forms: NFC, NFD, NFKC, and NFKD. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Unicode Normalization Forms"
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
                                "value":" Normalization Form C (NFC) ",
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
                                        "value":" NFC first decomposes each code point, expanding each into all its possible base characters and combining characters (ex. 'é' can be decomposed into 'e' and the accent character).  Once all the characters are decomposed, NFC recomposes each one based on canonical equivalence",
                                        "children":null
                                    },
                                    {
                                        "el":"sup",
                                        "attributes":null,
                                        "value":"16",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":". With canonical equivalence, two characters are equivalent if they have the same appearance and meaning when written",
                                        "children":null
                                    },
                                    {
                                        "el":"sup",
                                        "attributes":null,
                                        "value":"17",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  In many languages, NFC is the default normalization implementation. NFC is ",
                                        "children":null
                                    },
                                    {
                                        "el":"a",
                                        "attributes":{
                                            "href":"https://jarombek.com/blog/aug-5-2018-graphql-pt1#idempotent"
                                        },
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"idempotent",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":", so normalizing a string multiple times has the same result as normalizing it once. ",
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
                                "value":" Normalization Form D (NFD) ",
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
                                        "value":" NFD decomposes each code point, expanding each into all its possible base characters and combining characters.  Decomposed characters are sorted in a standardized manner, and equivalence is determined by canonical equivalence.  Similar to NFC, NFD is idempotent. ",
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
                                "value":" Normalization Form KC (NFKC) ",
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
                                        "value":" NFKC is the same as NFC except it decomposes and recomposes based on compatibility instead of canonical equivalence.  With compatibility, characters can look completely different, but still be deemed equivalent in certain contexts.  NFKC is a stronger form of normalization and is lossy, unlike NFC which is lossless.  However, NFKC is still idempotent like NFC. ",
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
                                "value":" Normalization Form KD (NFKD) ",
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
                                        "value":" NFKD is the same as NFD except it decomposes based on compatibility instead of canonical equivalence.  Just like NFKC, NFKD is lossy.  It is also idempotent, making all four Unicode normalization forms safe to use multiple times without side effects. ",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The following code uses NFC to normalize the two 'beyoncé' strings in Python.  NFC can easily be replaced here with the other three normalization techniques: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Normalize both strings using the form NFC\nnormalized_b = normalize('NFC', b)\nnormalized_b2 = normalize('NFC', b2)\n\nassert len(normalized_b) == 7\nassert len(normalized_b2) == 7\n\nassert normalized_b == normalized_b2\n",
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
                "value":" After normalization, both 'beyoncé' strings have the same length and are deemed equivalent. ",
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
                "value":" Almost all languages support Unicode to some extent.  The following JavaScript code attempts the same operations I showed throughout this post (along with a bonus look at emojis!). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const b = 'beyonce\\u0301'; // beyoncé\nconst b2 = 'beyonc\\u00E9'; // beyoncé\n\n// Both appear to have 7 characters, yet variable 'b' which uses combining characters\n// (it combines 'e' and '\\u0301', the second of which is a diacritic) is listed\n// as having length 8.\nassert(b.length === 8);\nassert(b2.length === 7);\n\n// While the two strings appear the same, JavaScript does not recognize them as equal\nassert(b !== b2);\n\n// Normalize defaults to NFC normalization\nconst b_norm = b.normalize();\nassert(b_norm.length === 7);\n\n// Once normalized, the two strings are equal\nassert(b.normalize() === b2.normalize());\n\n// The length of emojis are also greater than one\nconst smiley = '😊';\nassert(smiley.length === 2);\n\n// Find the actual length of an emoji\nassert([...smiley].length === 1);\n\nconst emojis = '🦌\\u{1F98C}';\n\nassert(emojis.length === 4);\nassert([...emojis].length === 2);\n",
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
                "value":" And the following does the same in Java: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public static void main(String... args) {\n  String b = \"beyonce\\u0301\";\n  String b2 = \"beyonc\\u00E9\";\n\n  assert b.length() == 8;\n  assert b2.length() == 7;\n\n  assert !b.equals(b2);\n\n  // Normalize both strings using NFC\n  String normalized_b = Normalizer.normalize(b, Normalizer.Form.NFC);\n  String normalized_b2 = Normalizer.normalize(b, Normalizer.Form.NFC);\n\n  assert normalized_b.length() == 7;\n  assert normalized_b2.length() == 7;\n\n  assert normalized_b.equals(normalized_b2);\n\n  String smiley = \"😊\";\n  assert smiley.length() == 2;\n\n  // In order to get the proper length of unicode,\n  // length must be measured by unicode code point instead of character.\n  assert smiley.codePointCount(0, smiley.length()) == 1;\n}\n",
        "children":null
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"September 1st, 2019"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" I've also written Unicode code samples in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/misc-code-samples/blob/master/C%23/\nbase/basic-framework-types/BasicFrameworkTypes/Unicode.cs"
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
                "value":" Unicode is much more complex than I initially thought, with many edge cases that creep up when using non-English characters.  I only scratched the surface of Unicode, but I know this research will help me detect Unicode bugs quicker and write better software with Strings. ",
                "children":null
            }
        ]
    }
];

postName = "oct-9-2018-unicode";
postDate = new Date('2018-10-09T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "How Languages Handle Unicode",
    description: `This post explores the complexities of Unicode and how programming languages 
        support its edge cases.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Unicode",
            picture: "https://asset.jarombek.com/logos/unicode.png",
            color: "unicode"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "ASCII"
        },
        {
            name: "Character Encoding"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Unicode\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Unicode",
            link: "https://en.wikipedia.org/wiki/Unicode"
        },
        {
            startName: "\"Character encoding\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Character_encoding",
            link: "https://en.wikipedia.org/wiki/Character_encoding"
        },
        {
            startName: "Luciano Ramalho, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 102",
            linkName: "Fluent Python",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "\"UTF-8: Description\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/UTF-8#Description",
            link: "https://en.wikipedia.org/wiki/UTF-8#Description"
        },
        {
            startName: "\"UTF-8, UTF-16, and UTF-32\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/28886719",
            link: "https://stackoverflow.com/a/28886719"
        },
        {
            startName: "\"Unicode encodings: UCS-2, UCS-4, UTF-16 and UTF-32\", ",
            endName: "",
            linkName: "https://bit.ly/2PosJNi",
            link: "https://bit.ly/2PosJNi"
        },
        {
            startName: "\"Unicode encodings: Byte order marks (BOM)\", ",
            endName: "",
            linkName: "https://bit.ly/2E2h0TG",
            link: "https://bit.ly/2E2h0TG"
        },
        {
            startName: "",
            endName: ", 114",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "\"Character: unicode\", ",
            endName: "",
            linkName: "https://bit.ly/2Pisqnd",
            link: "https://bit.ly/2Pisqnd"
        },
        {
            startName: "\"How JavaScript Uses Unicode Internally\", ",
            endName: "",
            linkName: "https://bit.ly/2y43NUY",
            link: "https://bit.ly/2y43NUY"
        },
        {
            startName: "\"JavaScript’s internal character encoding: UCS-2 or UTF-16?\", ",
            endName: "",
            linkName: "https://bit.ly/2QwX24M",
            link: "https://bit.ly/2QwX24M"
        },
        {
            startName: "\"UTF-8, UTF-16, and UTF-32\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/496398",
            link: "https://stackoverflow.com/a/496398"
        },
        {
            startName: "\"Plane (Unicode): Basic Multilingual Plane\", ",
            endName: "",
            linkName: "https://bit.ly/2OIwcJD",
            link: "https://bit.ly/2OIwcJD"
        },
        {
            startName: "\"Endianness\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Endianness",
            link: "https://en.wikipedia.org/wiki/Endianness"
        },
        {
            startName: "",
            endName: ", 122",
            linkName: "Ramalho.",
            link: "http://shop.oreilly.com/product/0636920032519.do"
        },
        {
            startName: "\"Unicode equivalence: Normal forms\", ",
            endName: "",
            linkName: "https://bit.ly/2QB8zAb",
            link: "https://bit.ly/2QB8zAb"
        },
        {
            startName: "\"Unicode equivalence\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Unicode_equivalence",
            link: "https://en.wikipedia.org/wiki/Unicode_equivalence"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});