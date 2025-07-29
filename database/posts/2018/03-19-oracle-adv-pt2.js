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
                "value":" This is part II of my Oracle advanced query discovery.  You can check out ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-18-2018-oracle-adv-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"part I",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as well!  The two clauses I'm analyzing in this discovery are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
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
                "value":"PIVOT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The table I'm running queries against is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"code_written",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which stores how many lines of code I wrote in each language over the years. The data is real too! ",
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
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause allows you to access columns in a multidimensional array.  The calculations performed on this array are similar to those seen in a spreadsheet application",
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
                "value":". The reason Oracle included the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause is users often copied SQL query results and pasted them into spreadsheets, manipulating the data from there.  With ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", similar manipulations are performed in native SQL. ",
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
                "value":" This is part II of my Oracle advanced query discovery.  You can check out ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-18-2018-oracle-adv-pt1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"part I",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" as well!  The two clauses I'm analyzing in this discovery are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
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
                "value":"PIVOT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The table I'm running queries against is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"code_written",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which stores how many lines of code I wrote in each language over the years. The data is real too! ",
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
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause allows you to access columns in a multidimensional array.  The calculations performed on this array are similar to those seen in a spreadsheet application",
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
                "value":". The reason Oracle included the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause is users often copied SQL query results and pasted them into spreadsheets, manipulating the data from there.  With ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", similar manipulations are performed in native SQL. ",
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
                "value":" The following query is a basic example of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  I don't think my lines written statistics are an accurate representation of time spent in each language.  For example, Java is a very verbose language. Meanwhile, Python has very concise syntax and I often make complex programs in very little code.  I used the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause to adjust the lines written for Java and Python based on their verbosity. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT year, language, lines_written\n  FROM code_written\nMODEL\nPARTITION BY (year)\nDIMENSION BY (language)\nMEASURES (lines lines_written) (\n    lines_written['Java'] = ROUND(lines_written['Java'] * 0.8),\n    lines_written['Python'] = ROUND(lines_written['Python'] * 1.25)\n)\nORDER BY lines_written DESC NULLS LAST;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR  LANGUAGE      LINES_WRITTEN\n----- ------------- ---------------\n2017  Swift         10726\n2016  Java          10370\n2017  Java          9690\n2017  JavaScript    6663\n2017  XML           5815\n2016  PHP           5433\n2017  PHP           3670\n....  ...           ....\n",
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
                "value":" In the results, Swift is now listed as the language with the most lines written in 2017. ",
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
                "value":" Besides for the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause, the three other important clauses in this query are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PARTITION BY",
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
                "value":"DIMENSION BY",
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
                "value":"MEASURES",
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
                "value":"PARTITION BY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines groupings in a result set. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" performs operations on each of these groupings",
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
                "value":".  In my query I partition by year, so rules defined later are applied to each year. ",
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
                "value":"DIMENSION BY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" identifies each cell in the partition. Each cell makes up one element in a multidimensional array.  In the query above, I dimension by language so each cell is a language.  I selected a cell with the strings ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"'Java'",
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
                "value":"'Python'",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The array created from the partition in the query above only has one dimension, but that doesn't have to be the case. ",
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
                "value":"MEASURES",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defines what type is located in each cell along with the name of the array",
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
                "value":".  In the previous query, I declared that each cell contains a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lines",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" element and the array is named ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"lines_written",
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
                "value":" Another cool thing about the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"MODEL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause is its possible to loop through the array of cells with a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FOR",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop",
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
                "value":".  You can get the current value within the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FOR",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CURRENTV()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following queries get the monthly line totals for each language.  Although the queries all return the same result, you can follow the comments to see how each optimizes the previous query. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT year, language, total_lines\nFROM code_written\nMODEL\nPARTITION BY (language)\nDIMENSION BY (year)\nMEASURES (lines total_lines) (\n    total_lines[FOR year FROM 2014 TO 2018 INCREMENT 1] =\n      CASE WHEN total_lines[CURRENTV()] IS PRESENT THEN\n          ROUND(total_lines[CURRENTV()] / 12, 0)\n      ELSE\n          0\n      END\n)\nORDER BY total_lines DESC;\n\n-- You can shorten the above code by using PRESENTNNV() instead of a case statement\n-- This function takes a column and if it existed prior to the MODEL clause and isn't\n-- null, the second argument is returned.  Otherwise, the third argument is returned\nSELECT year, language, total_lines\n  FROM code_written\nMODEL\nPARTITION BY (language)\nDIMENSION BY (year)\n  MEASURES (lines total_lines) (\n    total_lines[FOR year FROM 2014 TO 2018 INCREMENT 1] =\n      PRESENTNNV(total_lines[CURRENTV()], ROUND(total_lines[CURRENTV()] / 12, 0), 0)\n  )\nORDER BY total_lines DESC;\n\n-- You can shorten the query even further by using the IGNORE NAV clause with th MODEL.\n-- This specifies that any null values should return a default value.  For numbers that\n-- default is 0, which is the behavior we wanted\nSELECT year, language, total_lines\n  FROM code_written\nMODEL IGNORE NAV\nPARTITION BY (language)\nDIMENSION BY (year)\n  MEASURES (lines total_lines) (\n    total_lines[FOR year FROM 2014 TO 2018 INCREMENT 1] =\n        ROUND(total_lines[CURRENTV()] / 12, 0)\n  )\nORDER BY total_lines DESC;\n\n-- By default when using the MODEL clause if a row doesn't exist for an array entry, a\n-- new row is created.  We can change that behavior so that no new row is created by using\n-- the RULES UPDATE clause.  Now no new rows are created that were not in the base table\nSELECT year, language, total_lines\n  FROM code_written\nMODEL\nPARTITION BY (language)\nDIMENSION BY (year)\n  MEASURES (lines total_lines)\n  RULES UPDATE (\n    total_lines[FOR year FROM 2014 TO 2018 INCREMENT 1] =\n        ROUND(total_lines[CURRENTV()] / 12, 0)\n  )\nORDER BY total_lines DESC;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR  LANGUAGE      TOTAL_LINES\n----- ------------- --------------\n2016  Java          1080\n2017  Java          1009\n2017  Swift         894\n2017  JavaScript    555\n2017  XML           485\n2016  PHP           453\n....  ...           ...\n",
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
                "value":" Now onto probably the coolest thing I've seen in Oracle so far: the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PIVOT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause!  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PIVOT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used to rotate rows into columns!  An aggregate function must be used with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PIVOT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  The following query rotates the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"year",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" row into multiple columns: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT * FROM (\n  SELECT\n    year,\n    language,\n    lines\n  FROM code_written\n)\nPIVOT (\n    SUM(lines) FOR year IN (2014, 2015, 2016, 2017, 2018)\n);\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"LANGUAGE       2014   2015   2016   2017   2018\n-------------- ------ ------ ------ ------ ------\nJavaScript                   2008   6663   1120\nXML                   42     2646   5815   0\nPHP                          5433   3670   0\nSass                                163    443\nTypeScript                          133    1850\nPL/SQL                       203    844    121\nSQL                          942    812    585\nC                     630    379    271    0\nJava           4282   1585   12962  12113  979\nPython                931    1122   1288   242\nHTML                         1413   1969   397\nCSS                          1233   1654   34\nJSON                  32     820    1019   112\nSwift                               10726  103\n",
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
                "value":" Now that is awesome!  This is the exact layout I'd use for this data in an Excel spreadsheet.  I can improve this query by displaying the total number of lines for each language using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GROUP BY ROLLUP",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GROUPING()",
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
            "language":"SQL"
        },
        "value":"CREATE TABLE code_written_pivot AS\nSELECT * FROM (\n    SELECT\n      CASE GROUPING(year)\n      WHEN 1\n        THEN 'Total'\n      ELSE TO_CHAR(year)\n      END AS year,\n    language,\n    SUM(lines) AS lines\n    FROM code_written\n    GROUP BY ROLLUP (language, year)\n)\nPIVOT (\n    SUM(lines)\nFOR year IN (2014, 2015, 2016, 2017, 2018, 'Total' AS Total)\n)\nORDER BY \"2018\" DESC NULLS LAST;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"LANGUAGE       2014   2015   2016   2017   2018   TOTAL\n-------------- ------ ------ ------ ------ ------ ------\nTypeScript                          133    1850   1983\nJavaScript                   2008   6663   1120   9791\nJava           4282   1585   12962  12113  979    31921\nSQL                          942    812    585    2339\nSass                                163    443    606\nHTML                         1413   1969   397    3779\nPython                931    1122   1288   242    3583\nPL/SQL                       203    844    121    1168\nJSON                  32     820    1019   112    1983\nSwift                               10726  103    10829\nCSS                          1233   1654   34     2921\nC                     630    379    271    0      1280\nXML                   42     2646   5815   0      8503\nPHP                          5433   3670   0      9103\n                                                  89789\n",
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
                "value":" Notice that I created a table from the result of this query.  I did this to demonstrate the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UNPIVOT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" query, which performs the opposite operation of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"PIVOT",
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
            "language":"SQL"
        },
        "value":"SELECT * FROM code_written_pivot\nUNPIVOT (\n    lines FOR year IN (Total, \"2018\", \"2017\", \"2016\", \"2015\", \"2014\")\n);\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"LANGUAGE       YEAR            LINES\n-------------- ----- ---------------\nTypeScript     TOTAL            1983\nTypeScript     2018             1850\nTypeScript     2017              133\nJavaScript     TOTAL            9791\nJavaScript     2018             1120\nJavaScript     2017             6663\nJavaScript     2016             2008\nJava           TOTAL           31921\nJava           2018              979\nJava           2017            12113\nJava           2016            12962\nJava           2015             1585\nJava           2014             4282\n",
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
                "value":" My next Oracle discovery will be on PL/SQL!  I'm sure I will come back to these discoveries when I use similar SQL queries in the future!  All the code is up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/03-Mar/3-19-Oracle-Adv-II"
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

postName = "mar-19-2018-oracle-adv-pt2";
postDate = new Date('2018-03-19T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Oracle: Advanced Queries Part II",
    description: `This is part II of my Oracle advanced query discovery.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "SQL",
            picture: "https://asset.jarombek.com/logos/sql.png",
            color: "sql"
        },
        {
            name: "Relational Database"
        },
        {
            name: "Oracle Database",
            picture: "https://asset.jarombek.com/logos/oracle.png",
            color: "oracle"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Jason Price, ",
            endName: " (New York: McGraw-Hill Education, 2013), 260",
            linkName: "Oracle Database 12c SQL",
            link: "https://www.amazon.com/Oracle-Database-12c-Jason-Price/dp/0071799354"
        },
        {
            startName: "\"Using the SQL MODEL Clause to Define Inter-Row Calculation\", ",
            endName: "",
            linkName: "http://www.oracle.com/webfolder/technetwork/tutorials/obe/db/10g/r2/prod/bidw/sqlmodel/sqlmodel_otn.htm",
            link: "http://www.oracle.com/webfolder/technetwork/tutorials/obe/db/10g/r2/prod/bidw/sqlmodel/sqlmodel_otn.htm"
        },
        {
            startName: "",
            endName: ", 261",
            linkName: "Ibid.",
            link: "https://www.amazon.com/Oracle-Database-12c-Jason-Price/dp/0071799354"
        },
        {
            startName: "",
            endName: ", 264",
            linkName: "Ibid.",
            link: "https://www.amazon.com/Oracle-Database-12c-Jason-Price/dp/0071799354"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content, 
    contentString: JSON.stringify(content) 
});