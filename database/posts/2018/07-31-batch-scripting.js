/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/31/2018
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
                "value":" Recently I worked on a project which required some basic command line scripting.  One of the VMs I worked on was a Windows box, and the scripts consisted of Batch files.  Although I'd seen a few Batch scripts before in my short software development career (~2.3 years), I never actually got a chance to write one myself.  I figured this was the perfect opportunity to take a look at the basics of Batch scripting.  With some knowledge of how to write a Batch script, I'll be capable of comparing Batch to scripts in PowerShell and Bash. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Batch Script?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Batch Script?",
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
                "value":" Batch scripts are pieces of code written in a command line interface (shell) on the Windows operating system.  For someone new to programming like myself, I always thought of Batch as the precursor to PowerShell.  This actually forms a pretty good one sentence comparison between Batch and PowerShell.  Although you will often hear developers advocating the switch from Batch to PowerShell, Batch scripting is far from extinct",
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
                "value":" Recently I worked on a project which required some basic command line scripting.  One of the VMs I worked on was a Windows box, and the scripts consisted of Batch files.  Although I'd seen a few Batch scripts before in my short software development career (~2.3 years), I never actually got a chance to write one myself.  I figured this was the perfect opportunity to take a look at the basics of Batch scripting.  With some knowledge of how to write a Batch script, I'll be capable of comparing Batch to scripts in PowerShell and Bash. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is a Batch Script?"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is a Batch Script?",
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
                "value":" Batch scripts are pieces of code written in a command line interface (shell) on the Windows operating system.  For someone new to programming like myself, I always thought of Batch as the precursor to PowerShell.  This actually forms a pretty good one sentence comparison between Batch and PowerShell.  Although you will often hear developers advocating the switch from Batch to PowerShell, Batch scripting is far from extinct",
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
                "value":" Batch scripts first appeared in the DOS family of operating systems and are still used in Microsoft operating systems today",
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
                "value":".  On today's Windows operating systems Batch scripts are executed in the cmd.exe CLI",
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
                "value":".  You can write commands on the command prompt or store a text file of commands in a Batch file.  Batch files allow for reusable command sequences. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Batch File Basics"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Batch File Basics",
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
                "value":" When running batch files, each line is executed in order.  A batch file is run by simply executing the file path in cmd.exe.  Arguments can be passed to the batch file.  For example, the following command executes the batch file test.bat with the argument \"Hello.\"  All the program does is print the argument to standard output. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Batch"
        },
        "value":"@echo off\n\necho The first command passed: %1\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"> test.bat Hello\nThe first command passed: Hello\n",
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
                "value":" Interestingly the default behavior of batch scripts is to print out all the commands that were executed.  Usually this isn't preferable (except for debugging circumstances) so suppressing print statements is accomplished with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"@echo off",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command ",
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
                "value":".  Arguments are accessed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%<arg-number>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command, and later on I will use this same syntax to access function arguments in Batch. ",
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
                "value":" Batch scripts also allow you to interact with strings and integer numbers.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"set",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command is used to assign a value to a variable. Variables can then be accessed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%variable-name%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Batch"
        },
        "value":"set name=Andrew Jarombek\necho %name%\n\n:: Extract a substring starting at character 0 and ending at character 6\nset firstName=%name:~0,6%\necho \"%firstName%\"\n\n:: Alternative way to get the first name with negative character indexing\nset firstName=%name:~0,-9%\necho \"%firstName%\"\n\n:: Extract a substring of all characters beyond position 7\nset lastName=%name:~7%\necho \"%lastName%\"\n\n:: String replacement with :substringToRemove=replacementString notation\nset fakeName=%name:Jarombek=Jarbek%\necho %fakeName%\n\n:: Use /a with numeric values\nset /a age=23\nset /a ten=10\n\nset /a ageInTenYears=%age% + %ten%\necho \"Age in 10 Years:\" %ageInTenYears%\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Andrew Jarombek\n\"Andrew\"\n\"Andrew\"\n\"Jarombek\"\nAndrew Jarbek\nAge in 10 Years: 33\n",
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
                "value":" Unfortunately, I quickly learned that working directly with floating point arithmetic in Batch is much more difficult.  I won't include any examples in this post, however it is an interesting topic to explore",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Batch also allows you to set inner scopes for a script.  Unfortunately the syntax isn't quite as concise as C-like curly brackets (Batch requires a more verbose ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setlocal",
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
                "value":"endlocal",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Batch"
        },
        "value":"set /a age=23\n\nsetlocal\nset age=24\necho Age within Local Scope: %age%\nendlocal\n\necho Age outside of Local Scope: %age%\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Age within Local Scope: 24\nAge outside of Local Scope: 23\n",
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
                "value":" You can see that any variables defined in the inner scope are not accessible to the outer scope and more importantly don't modify any of the existing outer scope variables. ",
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
                "value":" Bash also has support for array data structures.  This is also where I ran into the first major \"gotcha\" of Batch programming. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Batch"
        },
        "value":"set towns[0]=Greenwich\nset towns[1]=New Canaan\nset towns[2]=Darien\nset towns[3]=Wilton\nset towns[4]=Ridgefield\n\necho %towns[0]%\n\nset numberList=0 1 2 3 4\n\nsetlocal enableDelayedExpansion\n\nfor %%i in (%numberList%) do (\n  set allTowns=!allTowns! !towns[%%i]!\n)\n\necho %allTowns%\n\nfor %%i in (0 2 4) do (\n  set someTowns=!someTowns! !towns[%%i]!\n)\n\necho %someTowns%\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"Greenwich\nGreenwich New Canaan Darien Wilton Ridgefield\nGreenwich Darien Ridgefield\n",
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
                "value":" The code above creates an array of towns in my home state of Connecticut.  It first prints the town at index 0 in the array, and then goes on to loop through the array, creating a string of all the town names.  The first ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop uses an array defined elsewhere to loop through.  The second ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop is more concise and defines an array to loop through inside the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop syntax itself. ",
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
                "value":" The two points of interest in the code above are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setlocal enableDelayedExpansion",
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
                "value":"set allTowns=!allTowns!  !towns[%%i]!",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The exclamation point variable access syntax and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setlocal enableDelayedExpansion",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are related in an unexpected way. ",
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
                "value":" The code samples I've shown you so far access values of variables through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%variable-name%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax.  In Batch ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%variable-name%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines variable expansion.  Variable expansion is the act of replacing a variable reference with its actual value.  That means if you created a variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"set age=23",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and then accessed it with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%age%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the token ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%age%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" actually gets replaced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"23",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This replacement occurs when a line in a Batch script is parsed, not when it's finally executed. ",
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
                "value":" Variable expansion with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%variable-name%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax only happens once when the line it occurs on is parsed",
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
                "value":".  The value the variable is replaced with never changes. ",
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
                "value":" Obviously this causes issues in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loops.  With ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"%variable-name%",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax the value in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop will never change!  This breaks from the behavior you come to expect from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loops.  Variable expansion side effects is one of the most common beginner mistakes with Batch, and I fell victim to it",
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
                "value":" The solution is to use delayed variable expansion by executing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setlocal enableDelayedExpansion",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  With delayed variable expansion and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"!variable-name!",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" syntax, variables are expanded each time a line is executed.  In the case of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loops, this occurs on each loop iteration",
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
                "value":" Another interesting construct you can make in Batch scripts are functions. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Batch"
        },
        "value":":displayTime\necho The current time is %TIME%\nexit /b 0\n\ncall :displayTime\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"The current time is 15:45:28.41\n",
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
                "value":" The above function (beginning at ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":displayTime",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and ending at ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"exit /b 0",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") simply prints out the current time.  The interesting thing is that while the above construct can be treated as a function, it is actually a subprogram inside a Batch script. The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"call",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command invokes one Batch program from another ",
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
                "value":".  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"call",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command is like having a bunch of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"goto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statements in your code, jumping around to different labels.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":":displayTime",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" happens to be the label for my function.  This behavior in Batch reminds me of my time working with assembly, or if I really wanted very poorly designed Java code.  The following more complex function drives this point home.  You can follow the execution flow through the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"call",
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
                "value":"goto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands, jumping between labels. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Batch"
        },
        "value":"setlocal enableDelayedExpansion\n\ncall :stringTimes cat 3\necho %result%\ngoto :eof\n\n:stringTimes - 'A function to multiply a string a certain number of times and return the result'\n  setlocal\n\n  set string=%1\n  set /a count=%2\n  set finalString=%string%\n\n  :stringTimesLoop\n  if %count% gtr 1 (\n    set finalString=%finalString%%string%\n    set /a count=%count% - 1\n    goto :stringTimesLoop\n  )\n\n  endlocal & set result=%finalString%\n  goto :eof\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":null,
        "value":"catcatcat\n",
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
                "value":" Obviously we know that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"goto",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" commands are difficult to follow in our code.  This behavior in Batch makes me wonder how Bash and PowerShell handle functions and script traversal. ",
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
                "value":" I felt like I learned a lot about command line scripting the past few days, but obviously I have a long way to go.  I just scratched the surface of Batch files, and still seek a greater understanding of Bash and PowerShell.  I hope to research them further and compare their features in the future. ",
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
                "value":" The code is on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/07-jul/\n7-31-batch-scripting"
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
                "value":" with even more samples than the ones I covered in this post! ",
                "children":null
            }
        ]
    }
];

postName = "jul-31-2018-batch-scripting";
postDate = new Date('2018-07-31T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Exploring Batch Scripting",
    description: `I figured this was the perfect opportunity to take a look at the basics of Batch 
        scripting.  With some knowledge of how to write a Batch script, I can compare these scripts 
        to those in PowerShell and Bash.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Batch",
            picture: "https://asset.jarombek.com/logos/batch.png",
            color: "batch"
        },
        {
            name: "Command Line Scripting"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Break Your Batch Habit and Move to PowerShell\", ",
            endName: "",
            linkName: "https://www.itprotoday.com/management-mobility/break-your-batch-habit-and-move-powershell",
            link: "https://www.itprotoday.com/management-mobility/break-your-batch-habit-and-move-powershell"
        },
        {
            startName: "\"Batch file\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Batch_file",
            link: "https://en.wikipedia.org/wiki/Batch_file"
        },
        {
            startName: "\"cmd.exe\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Cmd.exe",
            link: "https://en.wikipedia.org/wiki/Cmd.exe"
        },
        {
            startName: "\"Batch Script – Syntax\", ",
            endName: "",
            linkName: "https://www.tutorialspoint.com/batch_script/batch_script_syntax.htm",
            link: "https://www.tutorialspoint.com/batch_script/batch_script_syntax.htm"
        },
        {
            startName: "\"Floating point division in a batch file\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/28790263",
            link: "https://stackoverflow.com/a/28790263"
        },
        {
            startName: "\"Windows Batch files: what is variable expansion, and what does EnableDelayedExpansion mean?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/25328044",
            link: "https://stackoverflow.com/a/25328044"
        },
        {
            startName: "\"DOS batch: Why are my set commands resulting in nothing getting stored?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/14347131",
            link: "https://stackoverflow.com/a/14347131"
        },
        {
            startName: "\"EnableDelayedExpansion\", ",
            endName: "",
            linkName: "https://ss64.com/nt/delayedexpansion.html",
            link: "https://ss64.com/nt/delayedexpansion.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});