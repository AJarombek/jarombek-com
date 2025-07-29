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
                "value":" Using regular expressions for pattern matching is a task software developers perform on a regular basis.  Although regular expressions still differ a bit across languages, they are standardized to the point where they are language agnostic.  However, interacting with these regular expressions differs greatly across different programming languages.  In my recent ventures into Groovy, I saw a very unique approach to handling regular expressions.  I decided to compare the approach in Groovy to approaches in other languages I often use.  This article shares my findings. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Language Agnostic"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A concept that is independent from any single programming language implementation.  Skills that are language agnostic can be applied throughout the software development ecosystem. ",
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
                "value":" Using regular expressions for pattern matching is a task software developers perform on a regular basis.  Although regular expressions still differ a bit across languages, they are standardized to the point where they are language agnostic.  However, interacting with these regular expressions differs greatly across different programming languages.  In my recent ventures into Groovy, I saw a very unique approach to handling regular expressions.  I decided to compare the approach in Groovy to approaches in other languages I often use.  This article shares my findings. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Language Agnostic"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A concept that is independent from any single programming language implementation.  Skills that are language agnostic can be applied throughout the software development ecosystem. ",
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
                "value":" Java is the natural language comparison to Groovy, so I explored Java's regular expression libraries in this article.  I also included snippets from JavaScript since it is my most used language this year. ",
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
                "value":" On ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/07-jul/\n7-11-groovy-regex"
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
                "value":" there are matching examples from Python, Swift, and PHP. After working through examples in all the languages above, the most difficult one to implement regular expression matching in was Swift.  This may not come as much of a surprise considering the convoluted ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-3-2018-string-swift"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"nature of strings in Swift",
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
                "value":" I was thinking of including C in the list of languages to test regular expressions.  However, ANSI C does not have regular expressions with the syntax we expect in the modern day",
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
                "value":". Instead if you want to use the regular expressions we are accustomed to an external library must be used.  For this reason I decided not to use C. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"The Anatomy of a Regular Expression"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"The Anatomy of a Regular Expression",
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
                "value":" Regular expressions are used in two stages - compilation and execution (also referred to as matching).  The compilation stage parses the ",
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
                "value":" representation of a regular expression",
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
                "value":".  The structure of a regular expression after it is parsed takes the form of a single state in a finite-state machine",
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
                "value":".  The process of compiling a regular expression can take a long time - much longer than executing it. This execution stage is what looks for matches on a string. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Finite-State Machine"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A data structure or machine that is always in one state out of a finite number",
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
                "value":".  The state of the machine is only affected by a series of input values.  If the machine is deterministic (which the regular expression finite-machine likely is), a given input will always produce the same output",
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
                "value":".  For the example of a regular expression, a given string pattern will always result in the same state of the regular expressions finite-state machine. ",
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
                "value":" Because of the huge contrast between the execution time of compilation and execution, these two operations are often separated for optimization.  With the two stages split, the result of a regular expression compilation can be reused for all pattern matches.  This saves time since the pattern matches themselves are quick. ",
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
                "value":" Many languages separate out compilation and execution by default (such as JavaScript).  Others let you choose if you want to split the two steps or keep them together (Java and Groovy).  Next I will Introduce the basic concepts for compiling and executing regular expressions in Java, Groovy, and JavaScript. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Exact and Existence Matches"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Exact and Existence Matches",
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
                "value":" In Java the package ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.util.regex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used for handling regular expressions.  The two key classes are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern",
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
                "value":"Matcher",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the result of a regular expressions compilation and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Matcher",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" executes (or performs matching operations) on a string with a pattern. ",
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
                "value":" Let's look at an example and explore these two classes in more detail.  The following code creates a regular expression that represents a date and then tries to perform an exact match on four different strings: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"String dateRegex = \"\\\\d{1,2}/\\\\d{1,2}/\\\\d{4}\";\n\nString today = \"7/11/2018\";\nString tomorrow = \"Tomorrow is 7/12/2018.\";\nString endOfYear = \"12/31/2018\";\nString myBirthday = \"Feb. 26, 2018\";\n\n// Test strings for exact matches\nassert today.matches(dateRegex);\nassert !tomorrow.matches(dateRegex);\nassert Pattern.matches(dateRegex, endOfYear);\nassert !Pattern.matches(dateRegex, myBirthday);\n",
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
                "value":" Two different methods are used to match the string to the regular expression. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.matches(regex)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked on the string instance. Alternatively the static method ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.matches(regex, string)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" can be invoked to the same result.  If you look at the Java source code for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String.matches(regex)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", its method body simply contains ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"return Pattern.matches(regex, this);",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  Both return a ",
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
                "value":" value detailing whether the entire string matched the regular expression. ",
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
                "value":" What's more interesting is the method body for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.match(regex, string)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Here is a peek at the Java source code in Pattern.java. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"public static boolean matches(String regex, CharSequence input) {\n  Pattern p = Pattern.compile(regex);\n  Matcher m = p.matcher(input);\n  return m.matches();\n}\n",
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
                "value":"Pattern.matches(regex, string)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is composed of multiple steps.  First the compile step of the regular expression is invoked with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.compile()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Once the regular expression is compiled into a state in the finite-state machine, an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Matcher",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is created by invoking ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.matcher()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Finally the entire string can be matched to the regular expression with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Matcher.matches()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". At this point both compilation and execution (matching) steps are complete and a ",
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
                "value":" value of whether or not the string matched the regular expression is returned. ",
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
                "value":" The important thing to note about this code is that both compilation and execution steps are combined into one function.  In the previous code, this means the compilation step is run four times and the execution step is run four times.  Running the compilation steps multiple times is a waste since it returns the same state in the finite-state machine each time.  Also remember that the compile step is very slow compared to the execution step.  A better approach would be to separate out the compile step from the execution step - effectively caching the state of the finite-state machine for multiple usages.  The following code which searches for existence of a regular expression match does just that. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"String dateRegex = \"\\\\d{1,2}/\\\\d{1,2}/\\\\d{4}\";\n\nString today = \"7/11/2018\";\nString tomorrow = \"Tomorrow is 7/12/2018.\";\nString endOfYear = \"12/31/2018\";\nString myBirthday = \"Feb. 26, 2018\";\n\nPattern datePattern = Pattern.compile(dateRegex);\n\nMatcher todayMatcher = datePattern.matcher(today);\nMatcher tomorrowMatcher = datePattern.matcher(tomorrow);\nMatcher endOfYearMatcher = datePattern.matcher(endOfYear);\nMatcher myBirthdayMatcher = datePattern.matcher(myBirthday);\n\nassert todayMatcher.find();\nassert tomorrowMatcher.find();\nassert endOfYearMatcher.find();\nassert !myBirthdayMatcher.find();\n",
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
                "value":" Invocations to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.compile()",
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
                "value":"Pattern.matcher()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are now separated out into two steps. The result of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.compile()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is reused for all pattern matches.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Matcher.find()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the method which attempts to find a subsequence that matches the regular expression pattern. ",
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
                "value":" It is important to remember that Java gives you the option to combine the compilation and execution steps into a single method or separate them. Java expects the developer to know how regular expressions work under the hood, and optimize based on their knowledge of the compilation and execution phases. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Groovy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Groovy",
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
                "value":" Groovy does its best to simplify the usage of regular expressions, although under the hood it uses Java's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern",
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
                "value":"Matcher",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" classes.  Groovy is actually unique in my experience with programming languages in regards to regular expressions.  Groovy uses three operators to help with building regular expression patterns, matching a pattern to a string, and finding all pattern matches in a string. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Regular Expression Operators"
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
                                "value":" Find Operator ",
                                "children":null
                            },
                            {
                                "el":"code",
                                "attributes":{
                                    "className":"jarombek-header-code"
                                },
                                "value":"=~",
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
                                        "value":" Checks to see if a pattern matches any substring within a string.  The value before the operand is the string to look for a match on.  The value after the operand is the regular expression to match against a substring.  For example, both ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"\"02-26\" =~ /[0-9]{2}-[0-9]{2}/",
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
                                        "value":"\"02-26-2018\" =~ /[0-9]{2}-[0-9]{2}/",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" will return ",
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
                                        "value":" while ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"\"Andy\" =~ /[0-9]{2}-[0-9]{2}/",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" will return ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"false",
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
                                        "value":" The find operator is equivalent to invoking ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Pattern.compile(regex).matcher(string)",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" to get an instance of ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Matcher",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" and then calling ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Matcher.find()",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" on the ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Matcher",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" instance.  Since all these operations are combined into one step, the compilation of the regex is not cached for future use.  The find operator should be used if the regular expression is only compiled once in the project.  Otherwise, the compilation step should be separated out with the pattern operator for reuse. ",
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
                                "value":" Match Operator ",
                                "children":null
                            },
                            {
                                "el":"code",
                                "attributes":{
                                    "className":"jarombek-header-code"
                                },
                                "value":"==~",
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
                                        "value":" Checks to see if a pattern matches an entire string.  The value before the operand is the string to look for a match on.  The value after the operand is the regular expression to match against the entire string.  For example, ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"\"02-26\" ==~ /[0-9]{2}-[0-9]{2}/",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" will return ",
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
                                        "value":" while ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"\"02-26-2018\" ==~ /[0-9]{2}-[0-9]{2}/",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" will return ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"false",
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
                                        "value":" Note that the match operator is equivalent to calling ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Pattern.matches(regex, string)",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" in Java.  Therefore, this operator combines compilation and execution into a single step.  A match operator should be used if a regular expression is only compiled once in the project.  Otherwise, the compilation step should be separated out with the pattern operator for reuse. ",
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
                                "value":" Pattern Operator ",
                                "children":null
                            },
                            {
                                "el":"code",
                                "attributes":{
                                    "className":"jarombek-header-code"
                                },
                                "value":"~string",
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
                                        "value":" The pattern operator transforms a string it is applied to into an instance of ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Pattern",
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
                                        "value":".  Patterns are a result of the compilation stage of a regular expression.  Therefore, a pattern is a state in the regular expressions finite-state machine.  The benefit of separating the compiling phase into its own operand is to cache the pattern for multiple uses, since determining the state of a regular expression based off its string representation is a slow task. ",
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
                                        "value":" An example of the pattern operator is ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"~/([a-zA-Z]{5-10})/",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":".  The result is a ",
                                        "children":null
                                    },
                                    {
                                        "el":"code",
                                        "attributes":{
                                            "className":"jarombek-inline-code"
                                        },
                                        "value":"Pattern",
                                        "children":null
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" object of the regular expression. ",
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
                "value":" The following code displays how to use the find, match, and pattern operators in Groovy.  The functionality matches the Java regular expression code. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"/* Basic Regex pattern matching and finding for existence */\n\ndef datePattern = /\\d{1,2}\\/\\d{1,2}\\/\\d{4}/\n\ndef today = '7/11/2018'\ndef tomorrow = 'Tomorrow is 7/12/2018.'\ndef endOfYear = '12/31/2018'\ndef myBirthday = 'Feb. 26, 2018'\n\n// Test if the entire string matches the pattern\nassert today ==~ datePattern\nassert !(tomorrow ==~ datePattern)\nassert endOfYear ==~ datePattern\nassert !(myBirthday ==~ datePattern)\n\n// Test if the pattern exists in the string\nassert today =~ datePattern\nassert tomorrow =~ datePattern\nassert endOfYear =~ datePattern\nassert !(myBirthday =~ datePattern)\n\n/* Optimization to split pattern creation time and pattern matching time */\n\ndef pattern = ~datePattern\n\nassert pattern.matcher(today).matches()\nassert !(tomorrow in pattern)\nassert pattern.isCase(endOfYear)\nassert !pattern.matcher(myBirthday).matches()\n",
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
                "value":" Under the optimization section that uses the pattern operator, multiple different approaches are used to check for matches.  The typical implementation is to chain calls to the Java methods ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Pattern.matcher(string)",
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
                "value":"Matcher.matches()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", although alternatives are also available. ",
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
                "value":" Groovy takes Java's approach to regular expressions and simplifies the syntax with the use of operators.  Groovy developers simply use the find, match, and pattern operators instead of learning the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"java.util.regex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" API. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"JavaScript"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"JavaScript",
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
                "value":" JavaScript takes a different approach to the compilation and execution phases of regular expressions.  The compilation phase of regular expressions occurs when the ",
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
                "value":" object is first created",
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
                "value":".  This can occur at different points in time depending on whether a regular expression literal or constructor function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RegExp(string)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to declare the ",
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
                "value":" object. ",
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
                "value":" Regular expression literals are the preferred approach because the JavaScript engine precompiles them into a state and caches the state before the code is run",
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
                "value":".  The alternative compiles the regular expression at runtime. ",
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
                "value":" The following code matches the functionality of the Java and Groovy examples.  Regular expression literals are used to take advantage of cached regular expression patterns. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const assert = (assertion) => {\n  console.assert(assertion, `Assertion failed!`);\n};\n\nconst datePattern = /\\d{1,2}\\/\\d{1,2}\\/\\d{4}/;\nconst exactDatePattern = /^\\d{1,2}\\/\\d{1,2}\\/\\d{4}$/;\n\nconst today = '7/11/2018';\nconst tomorrow = 'Tomorrow is 7/12/2018.';\nconst endOfYear = '12/31/2018';\nconst myBirthday = 'Feb. 26, 2018';\n\n/* Exact matches */\nassert(exactDatePattern.test(today));\nassert(!exactDatePattern.test(tomorrow));\nassert(exactDatePattern.test(endOfYear));\nassert(!exactDatePattern.test(myBirthday));\n\n/* Pattern existence match */\nassert(datePattern.test(today));\nassert(datePattern.test(tomorrow));\nassert(datePattern.test(endOfYear));\nassert(!datePattern.test(myBirthday));\n",
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
                "value":" One thing to note about the JavaScript implementation is that exact matches vs existence matches are handled in the regular expression string instead of the JavaScript regex API.  Both exact and existence matches use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RegExp.test(string)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Looping Through Matches"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Looping Through Matches",
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
                "value":" I decided to put together some examples of looping through regular expression matches.  Code samples from Java, Groovy, and JavaScript are shown below.  Examples for Python, Swift, and PHP are on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/07-jul/\n7-11-groovy-regex"
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
        "el":"codesnippet",
        "attributes":{
            "language":"Java"
        },
        "value":"/* Looping through RegEx matches */\n\nString catStatements = \"I really like cats.  Cats, cats, CATS!  \\n\" +\n  \"I wish I had a cat, I would name it Cat.\";\n\nString catRegex = \"[Cc][Aa][Tt][Ss]?\";\n\nPattern catPattern = Pattern.compile(catRegex);\nMatcher catMatcher = catPattern.matcher(catStatements);\n\nList<String> catList = new ArrayList<>();\n\n// Search for matches of the regex until all are found\nwhile (catMatcher.find()) {\n  // matcher.group() returns the string of the previous match\n  catList.add(catMatcher.group());\n}\n\nassert catList.size() == 6;\nassert catList.get(0).equals(\"cats\");\nassert catList.get(3).equals(\"CATS\");\nassert catList.get(5).equals(\"Cat\");\n\n/* Looping through Regex Grouping Captures */\n\nString topLanguages = \"Top 5 Favorite Programming Languages (as of 7/11/2018) \\n\" +\n  \"1. Java 2. JavaScript 3. Python 4. Swift 5. PHP\";\n\nString languageRegex = \"(\\\\d)\\\\. (\\\\w*)\";\n\nPattern languagePattern = Pattern.compile(languageRegex);\nMatcher languageMatcher = languagePattern.matcher(topLanguages);\n\nMap<String, String> languageMap = new HashMap<>();\n\nwhile (languageMatcher.find()) {\n  languageMap.put(languageMatcher.group(1), languageMatcher.group(2));\n}\n\nassert languageMap.size() == 5;\nassert languageMap.get(\"1\").equals(\"Java\");\nassert languageMap.get(\"2\").equals(\"JavaScript\");\nassert languageMap.get(\"3\").equals(\"Python\");\nassert languageMap.get(\"4\").equals(\"Swift\");\nassert languageMap.get(\"5\").equals(\"PHP\");\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Groovy"
        },
        "value":"/* Looping through RegEx matches */\n\ndef catStatements = '''\n  I really like cats.  Cats, cats, CATS!\n  I wish I had a cat, I would name it Cat.\n'''\n\ndef catRegex = /[Cc][Aa][Tt][Ss]?/\n\ndef catAppearances = []\n\ncatStatements.eachMatch(catRegex) { match ->\n  catAppearances << match\n}\n\nassert catAppearances == ['cats', 'Cats', 'cats', 'CATS', 'cat', 'Cat']\n\n/* Looping through Regex Grouping Captures */\n\ndef topLanguages = '''\n  Top 5 Favorite Programming Languages (as of 7/11/2018)\n    1. Java\n    2. JavaScript\n    3. Python\n    4. Swift\n    5. PHP\n'''\n\ndef languagesRegex = /(\\w*)/\ndef numberingRegex = /(\\d)\\./\ndef listingRegex = /$numberingRegex $languagesRegex/\n\n// Get all the matches of the regex in the languages string\nMatcher languageMatcher = topLanguages =~ listingRegex\n\ndef languageMap = [:]\n\n// Loop through each match - the list of regex grouping captures is distributed\n// over the parameters\nlanguageMatcher.each { match, num, language ->\n  languageMap << [(num):language]\n}\n\nassert languageMap == ['1':'Java', '2':'JavaScript', '3':'Python', '4':'Swift', '5':'PHP']\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"/* Looping through RegEx matches */\n\nconst catStatements = `\n  I really like cats.  Cats, cats, CATS!\n  I wish I had a cat, I would name it Cat.`;\n\n// The 'g' flag matches all instances of the pattern\nconst catRegex = /[Cc][Aa][Tt][Ss]?/g;\nconst catAppearances = catStatements.match(catRegex);\n\ncatAppearances.forEach(value => {\n  assert(value.toLowerCase().substring(0, 3) === 'cat');\n});\n\nassert(catAppearances.toString() === \"cats,Cats,cats,CATS,cat,Cat\");\n\n/* Looping through Regex Grouping Captures */\n\nconst topLanguages = ` Top 5 Favorite Programming Languages (as of 7/11/2018)\n  1. Java 2. JavaScript 3. Python 4. Swift 5. PHP`;\n\nconst languageRegex = /(\\d)\\. (\\w*)/g;\n\nconst languages = {};\n\nlet match;\nwhile (match = languageRegex.exec(topLanguages)) {\n  languages[`${match[1]}`] = match[2];\n}\n\nassert(languages['1'] = \"Java\");\nassert(languages['2'] = \"JavaScript\");\nassert(languages['3'] = \"Python\");\nassert(languages['4'] = \"Swift\");\nassert(languages['5'] = \"PHP\");\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"How Does Groovy Stack Up?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"How Does Groovy Stack Up?",
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
                "value":" So how does Groovy stack up against other languages I have used in regards to regular expressions? Groovy simplifies Java's regular expression functionality - which itself it very flexible albeit a bit verbose.  Groovy's use of operators for regular expression compilation and execution phases puts the language in a very unique position.  The inclusion of regular expressions in Groovy's operators - the most basic actions of the language - sets the tone for Groovy's intentions for simplifying regular expressions. ",
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
                "value":" Since regular expressions are often a pain point for software developers (I've admittedly spent countless hours testing different regex implementations for often simple tasks), anything that makes their use easier is a welcome addition.  I look forward to using regular expressions and other Groovy features in the future. ",
                "children":null
            }
        ]
    }
];

postName = "jul-11-2018-groovy-regex";
postDate = new Date('2018-07-11T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "How Do Regular Expressions in Groovy Stack Up?",
    description: `In my recent ventures into Groovy, I saw a very unique approach to handling 
        regular expressions.  I decided to compare the approach in Groovy to approaches in other 
        languages I often use.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Groovy",
            picture: "https://asset.jarombek.com/logos/groovy.png",
            color: "groovy"
        },
        {
            name: "Java",
            picture: "https://asset.jarombek.com/logos/java.png",
            color: "java"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "Regular Expression"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "PHP",
            picture: "https://asset.jarombek.com/logos/php.svg",
            color: "php"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Regular expressions in C: examples?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/1085120",
            link: "https://stackoverflow.com/a/1085120"
        },
        {
            startName: "John Resig, Bear Bibeault, & Josip Maras, ",
            endName: " (Shelter Island, NY: Manning, 2016), 267",
            linkName: "Secrets of the JavaScript Ninja",
            link: "https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
        },
        {
            startName: "Dierk König & Paul King, ",
            endName: ", 2nd ed (Shelter Island, NY: Manning, 2015), 83",
            linkName: "Groovy In Action",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "\"Determinism\"",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Finite-state_machine#Determinism",
            link: "https://en.wikipedia.org/wiki/Finite-state_machine#Determinism"
        },
        {
            startName: "\"Deterministic system\"",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Deterministic_system",
            link: "https://en.wikipedia.org/wiki/Deterministic_system"
        },
        {
            startName: "",
            endName: ", 76",
            linkName: "König.",
            link: "https://www.manning.com/books/groovy-in-action-second-edition?"
        },
        {
            startName: "Kyle Simpson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2015), 49",
            linkName: "You Don't Know JavaScript: Types & Grammar",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});