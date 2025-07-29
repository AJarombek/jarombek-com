/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 6/23/2018
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
                "value":" I was recently reading a book on Java and read through a chapter on how to use bit fields.  Bit Fields are a data structure that I never really understood completely (along with most of the bitwise operators), so I figured I would take some time to look at Bit Fields in detail. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Bit Field"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A data structure that consists of one or many memory locations (bits).  Each of these bits has a unique meaning defined by the programmer",
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
                "value":".  It is common practice to use an unsigned integer data type of a specified length for a bit field.  For example, in C you can define a bit field as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsigned int bitField : 2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This bit field consists of two bits which can be turned on or off - each of which has a unique meaning defined by the programmer. ",
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
                "value":" I was recently reading a book on Java and read through a chapter on how to use bit fields.  Bit Fields are a data structure that I never really understood completely (along with most of the bitwise operators), so I figured I would take some time to look at Bit Fields in detail. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Bit Field"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A data structure that consists of one or many memory locations (bits).  Each of these bits has a unique meaning defined by the programmer",
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
                "value":".  It is common practice to use an unsigned integer data type of a specified length for a bit field.  For example, in C you can define a bit field as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"unsigned int bitField : 2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This bit field consists of two bits which can be turned on or off - each of which has a unique meaning defined by the programmer. ",
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
                "value":" I decided to go back to C for my bit field implementation since the data structure is often used in situations where low memory consumption is imperative.  While I am no master at C, I really enjoy playing around with the language and hope to understand it to a greater capacity some day. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Bit Field C Implementation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Bit Field C Implementation",
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
                "value":" I started my implementation by defining some bit masks along with a type definition representing a user.  The last field in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"User",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" type definition - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"statusField",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" - is a 3-bit field. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"#define VALIDATED 01\n#define SUBSCRIBED 02\n#define ADMIN 04\n\ntypedef struct {\n  char first[31];\n  char last[31];\n  unsigned int statusField : 3;\n} User;\n",
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
                "value":" The preprocessor definitions for this code are three bit masks which can be applied to the bit field.  Every time a macro such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VALIDATED",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used in the code, its occurrence is replaced with the definitions replacement text (ex. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VALIDATED",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is replaced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"01",
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
        "el":"definition",
        "attributes":{
            "word":"Bit Mask"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A bit mask is a series of bits used to perform operations on another series of bits. A mask is commonly used to check for the existence of certain bits or remove/add certain bits to a value",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"3, 4",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  For example, let’s say we have a series of bits ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"010",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  If we wanted to toggle on the first bit in the previous sequence, we can use the bit mask ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"001",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and perform a bitwise OR operation.   The result of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"010 | 001",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"011",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so the first bit was successfully toggled on by the bit mask. ",
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
                "value":"typedef struct",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code defines a new data type that has multiple fields - a users first and last name along with a bit field containing their status",
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
                "value":".  The bit field represents a users privileges/status on an online website. ",
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
                "value":" Next I wrote some code to declare a new user type and set its bit field to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"000",
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
            "language":"C"
        },
        "value":"int main()\n{\n  User andy;\n  strcpy(andy.first, \"Andrew\");\n  strcpy(andy.last, \"Jarombek\");\n\n  // Set the status as 000\n  andy.statusField = 0;\n\n  ...\n}\n",
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
                "value":" Now comes the interesting part.  I set up some functions to alter bits in the bit field using bit masks. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"/**\n* Add a status to the bit field on a user type\n* @param user - a User type\n* @param mask - the status to add to the bit field\n*/\nvoid addStatus(User *user, unsigned int mask) {\n  user->statusField |= mask;\n}\n\n/**\n* Remove a status from the bit field on a user type\n* @param user - a User type\n* @param mask - the status to add to the bit field\n*/\nvoid removeStatus(User *user, unsigned int mask) {\n  user->statusField &= ~mask;\n}\n\n/**\n* Check to see if a status is in the bit field\n* @param bitField - a bit field to search through\n* @param mask - a bit mask to bitwise 'and' with the bit field\n* @return 0 if the mask doesn't exist in the bit field, an integer >= 1 otherwise\n*/\nint containsStatus(unsigned int bitField, unsigned int mask) {\n  return bitField & mask;\n}\n",
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
                "value":" To turn on bits in a bit field, the bitwise OR operation is performed between the bit field and the mask.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"000 | 010",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" results in the middle bit being turned on - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"010",
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
                "value":" To turn off bits in the bit field, the bitwise AND and NOT operators are used.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"011 & ~010",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" turns off the middle bit, resulting in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"001",
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
                "value":" To check if a bit is turned on in a bit field, a simple bitwise AND is used between the bit field and the mask.  If the value resulting from the bitwise AND is greater than 0, the bit is turned on in the field.  Otherwise, its turned off.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"011 & 010",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" checks if the middle bit is turned on. Since the result is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"010",
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
                "value":"2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", we know that the bit is turned on in the bit field. ",
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
                "value":" The bit masks are the preprocessor macros ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"VALIDATED",
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
                "value":"SUBSCRIBED",
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
                "value":"ADMIN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  They are used in the following code to turn on bits, turn off bits, and check for existence of bits in the bit field. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C"
        },
        "value":"...\n\n// Set the status as 000\nandy.statusField = 0;\n\nprintUser(andy);\n\n// Validate the user, change the status from 000 to 001\naddStatus(&andy, VALIDATED);\nprintUser(andy);\n\n// Give the user admin rights, change the status from 001 to 101\naddStatus(&andy, ADMIN);\nprintUser(andy);\n\n// Take away the admin rights to the user, change the status from 101 to 001\nremoveStatus(&andy, ADMIN);\nprintUser(andy);\n\n// Give the subscribed status, change the status from 001 to 011\naddStatus(&andy, SUBSCRIBED);\nprintUser(andy);\n\nif (containsStatus(andy.statusField, VALIDATED)) {\n  printf(\"The User IS Validated \\n\");\n} else {\n  printf(\"The User IS NOT Validated \\n\");\n}\n\nif (containsStatus(andy.statusField, SUBSCRIBED)) {\n  printf(\"The User IS Subscribed \\n\");\n} else {\n  printf(\"The User IS NOT Subscribed \\n\");\n}\n\nif (containsStatus(andy.statusField, ADMIN)) {\n  printf(\"The User IS an Admin \\n\");\n} else {\n  printf(\"The User IS NOT an Admin \\n\");\n}\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Andrew, Jarombek, 0\nAndrew, Jarombek, 1\nAndrew, Jarombek, 5\nAndrew, Jarombek, 1\nAndrew, Jarombek, 3\nThe User IS Validated\nThe User IS Subscribed\nThe User IS NOT an Admin\n",
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
                "value":" The full code for the C implementation can be found ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/06-Jun/6-23-Bit-Field/C/bitfield.c"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"here",
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
            "title":"Bit Field Java Implementation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Bit Field Java Implementation",
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
                "value":" Bit fields can also be used in Java.  The following code for a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"User",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class defines static final variables for the bit masks.  Note that in Java all integers are signed and 32 bits long, so you have 31 bits to play with in a bit field data structure. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public final class User {\n\n  /* Flags for different statuses */\n  static final int VALIDATED = 1;\n  static final int SUBSCRIBED = 2;\n  static final int ADMIN = 4;\n\n  private int statusBitField;\n  private String first;\n  private String last;\n\n  // Package-private constructor for the user.  The bit field is defaulted to a value of 0.\n  User(String first, String last) {\n    statusBitField = 0;\n    this.first = first;\n    this.last = last;\n  }\n\n  // private constructor that takes in a bit field.\n  private User(String first, String last, int bitField) {\n    this.statusBitField = bitField;\n    this.first = first;\n    this.last = last;\n  }\n\n  // Add a status to the users bit field\n  static User addStatus(User user, int status) {\n    int updatedStatusBitField = user.statusBitField | status;\n\n    return new User(user.first, user.last, updatedStatusBitField);\n  }\n\n  // Remove a status from the users bit field\n  static User removeStatus(User user, int status) {\n    int updatedStatusBitField = user.statusBitField & ~status;\n\n    return new User(user.first, user.last, updatedStatusBitField);\n  }\n\n  // Perform an action (supplied by the second argument) when given a boolean\n  // representing the existence of a status for the user.\n  void containsStatus(int mask, Consumer<Boolean> action) {\n    action.accept(containsStatus(mask));\n  }\n\n  // Check for the existance of a status in a bit field\n  boolean containsStatus(int mask) {\n    return (statusBitField & mask) > 0;\n  }\n}\n",
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
                "value":" The following code performs operations on the user class, similar to the C implementation. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"// Base user has a bit field of value 000\nUser user = new User(\"Andy\", \"Jarombek\");\n\n// Add the validated flag to the bit field: 000 -> 001\nUser validatedUser = User.addStatus(user, User.VALIDATED);\n\n// Add the admin flag to the bit field: 001 -> 101\nUser adminUser = User.addStatus(validatedUser, User.ADMIN);\n\n// Remove the admin flag from the bit field: 101 -> 001\nUser revokedAdminUser = User.removeStatus(adminUser, User.ADMIN);\n\n// Add the subscribed flag to the bit field: 001 -> 011\nUser subscribedUser = User.addStatus(revokedAdminUser, User.SUBSCRIBED);\n\nSystem.out.println(user);\nSystem.out.println(validatedUser);\nSystem.out.println(adminUser);\nSystem.out.println(revokedAdminUser);\nSystem.out.println(subscribedUser);\n\n// Check to see if the user has different statuses based on the bit field\nsubscribedUser.containsStatus(User.VALIDATED,\n    (bool) -> System.out.println(\"User is Validated: \" + bool));\n\nsubscribedUser.containsStatus(User.SUBSCRIBED,\n    (bool) -> System.out.println(\"User is Subscribed: \" + bool));\n\nsubscribedUser.containsStatus(User.ADMIN,\n    (bool) -> System.out.println(\"User is Admin: \" + bool));\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Andy, Jarombek, 0\nAndy, Jarombek, 1\nAndy, Jarombek, 5\nAndy, Jarombek, 1\nAndy, Jarombek, 3\nUser is Validated: true\nUser is Subscribed: true\nUser is Admin: false\n",
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
                "value":" The full code for the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/\n2018/06-Jun/6-23-Bit-Field/Java/User.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"User",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-sources/blob/master/2018/06-Jun/6-23-Bit-Field/Java/Main.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Main",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class utilizing bit fields is on GitHub. ",
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
                "value":" While you can use bit fields in Java like the previous implementation, using primitive ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"int",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" variables for bit fields goes against some of Java’s core principles.  Using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"int",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" primitives for bit fields is not type safe - which is often a crucial requirement for a Java data structure",
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
                "value":". Luckily there is a type safe approach for bit fields in Java.  This approach uses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"EnumSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" collection to store the fields.  The fields themselves are represented as enums.  This approach is not only type safe and more readable, but also has the same performance as the non-safe integer approach. ",
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
                "value":" The code for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"EnumSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" approach is on GitHub in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/06-Jun/\n6-23-Bit-Field/Java/EnumSetUser.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"EnumSetUser",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/06-Jun/\n6-23-Bit-Field/Java/EnumSetMain.java"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"EnumSetMain",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" classes. ",
                "children":null
            }
        ]
    },
    {
        "el":"updateinfo",
        "attributes":{
            "date":"January 31st, 2019"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" It's also easy to create bit fields with enums in C#.  You can check out the C# code on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/06-Jun/6-23-Bit-Field/CSharp"
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
                "value":" Researching bit fields was a really valuable exercise to gain further knowledge of bitwise operations and low level data structures.  Expect more discoveries on Java and C in the future. ",
                "children":null
            }
        ]
    }
];

postName = "jun-23-2018-bit-field";
postDate = new Date('2018-06-23T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Working with Bit Fields",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Data Structures"
        },
        {
            name: "C",
            picture: "https://asset.jarombek.com/logos/c.png",
            color: "c"
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
            startName: "\"Bit field\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Bit_field",
            link: "https://en.wikipedia.org/wiki/Bit_field"
        },
        {
            startName: "Brian W. Kernighan & Dennis M. Ritchie, ",
            endName: ", 2nd ed (Upper Saddle River, NJ: Prentice Hall, 1988), 89",
            linkName: "The C Programming Language",
            link: "https://www.pearson.com/us/higher-education/program/Kernighan-C-Programming-Language-2nd-Edition/PGM54487.html"
        },
        {
            startName: "\"What is Bit Masking?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/10493604",
            link: "https://stackoverflow.com/a/10493604"
        },
        {
            startName: "\"What is a bitmask and a mask?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/31576303",
            link: "https://stackoverflow.com/a/31576303"
        },
        {
            startName: "",
            endName: ", 146",
            linkName: "Kernighan.",
            link: "https://www.pearson.com/us/higher-education/program/Kernighan-C-Programming-Language-2nd-Edition/PGM54487.html"
        },
        {
            startName: "\"Using Bit Flags and EnumSets in Java\", ",
            endName: "",
            linkName: "https://eddmann.com/posts/using-bit-flags-and-enumsets-in-java/",
            link: "https://eddmann.com/posts/using-bit-flags-and-enumsets-in-java/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});