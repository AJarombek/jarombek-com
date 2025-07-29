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
                "value":" In this installment of my Oracle discoveries, I dig into analytic functions and some other advanced queries.  In the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-12-2018-oracle-start"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Oracle discovery I created a new database and set up basic tables. In the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-2-2018-oracle-queries"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" second",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" discovery I wrote intermediate level queries for the database.  I continue building my Oracle knowledge in this discovery post! ",
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
                "value":" The database I built contains books and programming languages. There is a relationship between books and languages, since all the books are about programming! ",
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
                "value":" In this installment of my Oracle discoveries, I dig into analytic functions and some other advanced queries.  In the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-12-2018-oracle-start"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"first",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Oracle discovery I created a new database and set up basic tables. In the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-2-2018-oracle-queries"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" second",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" discovery I wrote intermediate level queries for the database.  I continue building my Oracle knowledge in this discovery post! ",
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
                "value":" The database I built contains books and programming languages. There is a relationship between books and languages, since all the books are about programming! ",
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
                "value":" The first query that uses analytic functions ranks programming languages by the time spent reading about them.  There are two main functions used for ranking - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RANK()",
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
                "value":"DENSE_RANK()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The only difference between them is the way they handle ties in the rankings",
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
                "value":".  The difference in rankings is apparent in the following query: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n    l.name,\n    SUM(b.time_reading),\n    RANK() OVER (ORDER BY SUM(b.time_reading) DESC NULLS LAST) AS rank,\n    DENSE_RANK() OVER (ORDER BY SUM(b.time_reading) DESC NULLS LAST) AS dense_rank\nFROM books b\nINNER JOIN book_languages l ON b.isbn = l.isbn\nGROUP BY l.name\nORDER BY rank;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"NAME         SUM(B.TIME_READING) RANK      DENSE_RANK\n------------ ------------------- --------- ---------------\nJava         134                 1         1\nPL/SQL       26                  2         2\nSQL          26                  2         2\nJavaScript                       4         3\n",
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
                "value":" An interesting piece of this query is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NULLS LAST",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  When ordering items, ",
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
                "value":" values come first by default.  In this query ",
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
                "value":" is equivalent to zero time reading, so I want them to come last.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NULLS LAST",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause performs this switch. ",
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
                "value":" Ranks can also be partitioned into subgroups by specifying a ",
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
                "value":" column. Partitions are a bit too complex for my basic ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"book_languages",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" table, so I created a new table ",
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
                "value":" that is used for the remaining examples.  This table contains a year, language, and lines of code written in that language for the year (these are real statistics!): ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"CREATE TABLE code_written(\n    written_id INTEGER GENERATED BY DEFAULT AS IDENTITY (\n        START WITH 1 INCREMENT BY 1\n    ),\n    year INTEGER NOT NULL,\n    language VARCHAR2(63) NOT NULL,\n    lines INTEGER NOT NULL,\n    CONSTRAINT code_written_language_fk\n        FOREIGN KEY (language) REFERENCES languages(name) ON DELETE CASCADE\n);\n",
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
                "value":" With this new table I can partition rankings based on the year, creating a new yearly ranking! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n    year,\n    language,\n    lines,\n    RANK() OVER (PARTITION BY year ORDER BY lines DESC) AS yearly_rank,\n    RANK() OVER (ORDER BY lines DESC) AS all_time_rank\nFROM code_written\nORDER BY year, yearly_rank;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR    LANGUAGE       LINES           YEARLY_RANK     ALL_TIME_RANK\n------- -------------- --------------- --------------- ---------------\n2014\tJava           4282            1               7\n2015\tJava           1585            1               14\n2015\tPython         931             2               23\n2015\tC              630             3               27\n2015\tXML            42              4               40\n2015\tJSON           32              5               42\n2016\tJava           12962           1               1\n2016\tPHP            5433            2               6\n2016\tXML            2646            3               9\n2016\tJavaScript     2008            4               10\n2016\tHTML           1413            5               15\n....    ....           ....            .               ..\n",
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
                "value":" Other types of rankings are available such as percentile rankings.  With a percentile ranking I see that Java in 2015 was in the top 30% of performances all time. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n  year,\n  language,\n  lines,\n  ROUND(PERCENT_RANK() OVER (PARTITION BY year ORDER BY lines DESC), 2) AS yearly_distribution,\n  ROUND(PERCENT_RANK() OVER (ORDER BY lines DESC), 2) AS all_time_distribution\nFROM code_written\nORDER BY year, yearly_distribution;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR     LANGUAGE     LINES           YEARLY_DISTRIBUTION ALL_TIME_DISTRIBUTION\n-------- ------------ --------------- ------------------- ---------------------\n2014\t Java         4282            0                   0.14\n2015\t Java         1585            0                   0.3\n2015     Python       931             0.25                0.5\n2015     C            630             0.5                 0.59\n2015     XML          42              0.75                0.89\n2015     JSON         32              1                   0.93\n2016     Java         12962           0                   0\n2016     PHP          5433            0.1                 0.11\n2016     XML          2646            0.2                 0.18\n2016     JavaScript   2008            0.3                 0.2\n2016     HTML         1413            0.4                 0.32\n....     ....         ....            ...                 ....\n",
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
                "value":" The following query tries to find the median value for each language.  The implementation of this function goes a bit over my head",
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
                "value":"! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n    language,\n    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY lines DESC) AS median\nFROM code_written GROUP BY language;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"LANGUAGE              MEDIAN\n--------------------- ----------\nC                     325\nCSS                   1233\nHTML                  1413\nJSON                  466\nJava                  4282\nJavaScript            2008\nPHP                   3670\nPL/SQL                203\nPython                1026.5\nSQL                   812\nSass                  303\nSwift                 5414.5\nTypeScript            991.5\nXML                   1344\n",
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
                "value":" The next couple queries all utilize window functions.  Window functions apply an aggregate function such as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"AVG()",
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
                "value":"SUM()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to a subset of rows in a result set",
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
                "value":". This subset is known as the window.  Here's an example of a window function query that shows the cumulative sum of lines written: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n    year,\n    SUM(lines) AS total_lines,\n    SUM(SUM(lines)) OVER (ORDER BY year ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)\n        as cumulative_lines\nFROM code_written\nGROUP BY year;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR     TOTAL_LINES CUMULATIVE_LINES\n----- -------------- ----------------\n2014            4282             4282\n2015            3220             7502\n2016           29161            36663\n2017           47140            83803\n2018            5986            89789\n",
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
                "value":" The column aliased as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"cumulative_lines",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is really interesting.  Its SQL statement starts by saying \"compute the sum of all the rows in the window with the statement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SUM(SUM(lines))",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"\".  Next I defined what rows are in the window.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ORDER BY year",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" accumulates the sum in a yearly order.  This is enforced with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which says the window consists of this row and all rows prior. ",
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
                "value":" Other cool data analysis operations are possible with window functions such as moving averages and centered averages.  I show both of these examples below.  Look closely at how the window is defined in each query. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"-- Perform a moving average by specifying that the current row and two preceding rows\n-- will be included in the window calculation of AVG()\nSELECT\n    year,\n    SUM(lines) AS total_lines,\n    AVG(SUM(lines)) OVER (ORDER BY year ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)\n        as cumulative_lines\nFROM code_written\nGROUP BY year;\n\n-- Perform a centered average by specifying that the window consists of the current row,\n-- the previous row, and the next row.\nSELECT\n    year,\n    SUM(lines) AS total_lines,\n    AVG(SUM(lines)) OVER (ORDER BY year ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING)\n        as cumulative_lines\nFROM code_written\nGROUP BY year;\n",
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
                "value":" If you want to get a certain value in a window, use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FIRST_VALUE()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to get the first row in the window, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LAST_VALUE()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to get the last row, or ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"NTH_VALUE()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to get any other row.  When the first value in the window is predictable beforehand you can do really powerful things.  For example, in the following query I know that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"FIRST_VALUE()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns the previous years total lines written.   I can easily to perform comparisons between the row in the query and the first row in the window, such as the percentage change between the two: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n    year,\n    SUM(lines) AS total_lines,\n    FIRST_VALUE(SUM(lines))\n        OVER (ORDER BY year ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS last_year_total,\n    ROUND(SUM(lines) / FIRST_VALUE(SUM(lines))\n        OVER (ORDER BY year ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) * 100, 2)\n        || '%' AS percent_change\nFROM code_written\nGROUP BY year;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR       TOTAL_LINES LAST_YEAR_TOTAL PERCENT_CHANGE\n------ --------------- --------------- ---------------\n  2014            4282            4282 100%\n  2015            3220            4282 75.2%\n  2016           29161            3220 905.62%\n  2017           47140           29161 161.65%\n  2018            5986           47140 12.7%\n",
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
                "value":" The final query in this discovery lists all the languages used each year ordered from most used to least used.  You can combine column values across multiple rows with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LISTAGG()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function along with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WITHIN GROUP",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT\n    year,\n    LISTAGG(language, ', ') WITHIN GROUP (ORDER BY year, lines desc) AS languages_used,\n    SUM(lines) as total_lines\nFROM code_written\nGROUP BY year;\n",
        "children":null
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"YEAR  LANGUAGES_USED                                TOTAL_LINES\n----- --------------------------------------------- ------------\n2014  Java                                          4282\n2015  Java, Python, C, XML, JSON                    3220\n2016  Java, PHP, XML, JavaScript, HTML, ...         29161\n2017  Java, Swift, JavaScript, XML, PHP, ...        47140\n2018  TypeScript, JavaScript, Java, SQL, ...        5986\n",
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
                "value":" In my next ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-19-2018-oracle-adv-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"discovery",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I will look at the ",
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
                "value":" clause and the incredibly cool ",
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
                "value":" clause that pivots a table on a certain column! ",
                "children":null
            }
        ]
    }
];

postName = "mar-18-2018-oracle-adv-pt1";
postDate = new Date('2018-03-18T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Oracle: Advanced Queries Part I",
    description: `This is part I of my Oracle advanced query discovery.`,
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
            endName: " (New York: McGraw-Hill Education, 2013), 240",
            linkName: "Oracle Database 12c SQL",
            link: "https://www.amazon.com/Oracle-Database-12c-Jason-Price/dp/0071799354"
        },
        {
            startName: "\"PERCENTILE_CONT\", ",
            endName: "",
            linkName: "http://psoug.org/definition/PERCENTILE_CONT.htm",
            link: "http://psoug.org/definition/PERCENTILE_CONT.htm"
        },
        {
            startName: "",
            endName: ", 247",
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