/**
 * Script for the MongoDB Shell.
 * ~meet me in the pouring rain~
 * As always, do what brings you joy and happiness :)
 * @author Andrew Jarombek
 * @since 4/5/2020
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-31-2020-numpy"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I walked through interesting aspects of numpy.  I first learned numpy back in college during a course on Artificial Intelligence.  With my daytime work becoming more Python based these past few months, I took numpy back up. ",
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
                "value":" Before this winter, I never used pandas.  Pandas is a data analysis library similar to numpy.  In fact, pandas uses numpy arrays in many of its exposed methods.  While numpy exposes an array data structure, pandas has two main data structures: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
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
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In general, pandas is commonly used for manipulating and analysing time series or table data (think SQL table or excel spreadsheet)",
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-31-2020-numpy"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"previous article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I walked through interesting aspects of numpy.  I first learned numpy back in college during a course on Artificial Intelligence.  With my daytime work becoming more Python based these past few months, I took numpy back up. ",
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
                "value":" Before this winter, I never used pandas.  Pandas is a data analysis library similar to numpy.  In fact, pandas uses numpy arrays in many of its exposed methods.  While numpy exposes an array data structure, pandas has two main data structures: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
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
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  In general, pandas is commonly used for manipulating and analysing time series or table data (think SQL table or excel spreadsheet)",
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
                "value":" Just like numpy, I wanted to write an article about the interesting aspects of pandas.  I read thoroughly about pandas and coded with it at my job, so I wanted to share some of my favorite features. This article isn't meant to teach pandas basics, instead highlighting what makes pandas unique and special compared to other libraries and languages. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Pandas"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Pandas?",
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
                "value":" Pandas is a Python library used for data analysis, commonly on table and time series data.  Pandas was originally built to work with financial data, however its modern use cases are vast in number",
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
                "value":". Software engineering fields that use pandas include machine learning, economics, stock picking algorithms, and big data",
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
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Pandas has two main data types - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  A series is a single-dimensional data structure containing an array of data and an array of labels",
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
                "value":".  Each label is associated with an element in the data array.  The array of labels is called the index, and is of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Listed below are two examples of  the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" data structure, along with ways to access their indexes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import pandas as pd\n\nseries = pd.Series([1, 2, 3, 4, 5])\nseries\n\n# Out[1]:\n#    0    1\n#    1    2\n#    2    3\n#    3    4\n#    4    5\n#\t   dtype: int64\n\nseries.index\n\n# Out[2]: RangeIndex(start=0, stop=5, step=1)\n\nseries = pd.Series([1, 2, 3], index=['c', 'b', 'a'])\nseries\n\n# Out[3]:\n#    c    1\n#    b    2\n#    a    3\n#    dtype: int64\n\nseries.index\n\n# Out[4]: Index(['c', 'b', 'a'], dtype='object')\n",
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
                "value":" The first series implicitly defines an index while the second series explicitly passes an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor.  The first series' ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"RangeIndex",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a subtype of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which holds a range of integers. ",
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
                "value":" A data frame contains columns and rows of data, just like a table",
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
                "value":".  Data frames have indexes for rows and names for columns.  There are many ways to create ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects, the most basic of which passes its constructor a dictionary.  The following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" represents some of my workouts in February. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"runs = {\n  'user': ['andy', 'andy', 'andy'],\n  'type': ['run', 'core', 'run'],\n  'date': ['02-19-2020', '02-19-2020', '02-18-2020'],\n  'time': ['20:15', '8:00', '16:00']\n}\nframe = pd.DataFrame(runs)\nframe\n\n# Out[5]:\n# |   | user | type | date       | time  |\n# +---+------+------+------------+-------+\n# | 0 | andy | run  | 02-19-2020 | 20:15 |\n# | 1 | andy | core | 02-19-2020 | 8:00  |\n# | 2 | andy | run  | 02-18-2020 | 16:00 |\n",
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
                "value":" The full pandas library builds upon the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
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
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects. The remainder of this article  discusses aspects of pandas that I found most interesting. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Similarities to R"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Similarities to R",
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
                "value":" Pandas has many similarities to the R programming language, most noticeably its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object.  In R, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"data.frame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a fundamental built-in object with similar functionality to pandas' ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"6,7",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following data frame in R is nearly identical to the one in pandas. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"R"
        },
        "value":"user <- c(\"andy\", \"andy\", \"andy\")\ntype <- c(\"run\", \"core\", \"run\")\ndate <- c(\"02-19-2020\", \"02-19-2020\", \"02-18-2020\")\ntime <- c(\"20:15\", \"8:00\", \"16:00\")\n\nexercises <- data.frame(user, type, date, time)\nprint(exercises)\n\n#   user type       date  time\n# 1 andy  run 02-19-2020 20:15\n# 2 andy core 02-19-2020  8:00\n# 3 andy  run 02-18-2020 16:00\n",
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
                "value":" R is a domain-specific programming language for data analysis and statistical computing.  Although not explicitly documented as true, the R programming language seems to have inspired the creation of pandas (and numpy).  For example, R has array vectorization and conditional indexing, features found in both pandas and numpy (although noticeably missing from the base Python language).  The following code sample demonstrates vectorization operations in R: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"R"
        },
        "value":"vec1 <- c(1, 2, 3)\nvec2 <- c(3, 2, 1)\n\n# Perform addition of two vectors.\nresult_vec <- vec1 + vec2\nresult_vec\n\n# [1] 4 4 4\n",
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
                "value":" Conditional indexing is shown below: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"R"
        },
        "value":"# Create a range vector\nvec3 <- c(1:10)\n\nonlygt2 <- vec3[vec3 > 2]\nprint(onlygt2)\n\n# [1]  3  4  5  6  7  8  9 10\n",
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
                "value":" I find it fascinating to compare languages and frameworks to see where features and ideas originated from. Although pandas and numpy were influenced heavily by prior tools and languages, their ease of use within the Python ecosystem is what makes them so valuable. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"DataFrame Creation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"DataFrame Creation",
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
                "value":" One of the great things about pandas is the multitude of ways to initialize a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
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
                "value":"Series",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". In software engineering, it's generally a good idea when building an API to not assume the existing format of a user's data.  For example, in Java, APIs that accept a data structure as an argument often declare their parameters as type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable<T>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  By using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable<T>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" interface, a user can pass whatever iterable structure their data already exists in, whether it be a list, set, queue, stack, tree, or something else",
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
                "value":".  All these data structures implement ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Iterable<T>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", so they work with the API. ",
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
                "value":" Pandas takes this concept to another level.  Not only does the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constructor and accompanying static factory methods accept multiple Python data structures as arguments, they also accept many different file formats. For example, CSV files can be turned into a data frame with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"read_csv()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and database tables can be turned into a data frame with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"read_sql_table()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Other file formats that are easily turned into a data frame include Excel spreadsheets, HTML, and JSON.  A full list of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" input formats is found in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://pandas.pydata.org/pandas-docs/stable/reference/io.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"pandas documentation",
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
            "title":"Indexing Slicing and Manipulation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Indexing, Slicing, and Manipulation",
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
                "value":" In my previous article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/mar-31-2020-numpy#enhanced-slicing"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"numpy",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I discussed its advanced slicing and indexing mechanics.  Pandas has similar functionality for its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
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
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects.  First, here are some indexing and slicing examples on ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Series",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" data structures. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"series = pd.Series([1, 2, 3], index=['c', 'b', 'a'])\nseries\n\n# Out[6]:\n#    c    1\n#    b    2\n#    a    3\n#    dtype: int64\n\nseries[1]\n\n# Out[7]: 2\n\nseries['b']\n\n# Out[8]: 2\n\nseries[['a', 'b']]\n\n# Out[9]:\n#    a    3\n#    b    2\n#    dtype: int64\n\nseries[['b', 'b']]\n\n# Out[10]:\n#    b    2\n#    b    2\n#    dtype: int64\n\n# Indexes can be checked for existence with 'in' ...\n'a' in series\n\n# Out[11]: True\n\n# ... values can not.\n1 in series\n\n# Out[12]: False\n",
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
                "value":" The same slicing and indexing functionality is available for ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects.  The following data frame contains running PR (personal record) information for some of my friends and I in college. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"data_xctf = {\n  '8K': ['24:20.80', '24:33.50', '24:58.80', None, '26:24.20'],\n  '6K': ['18:58.80', '19:10.20', '19:25.80', '20:54.00', '20:20.50'],\n  '5K': ['15:32.00', '15:39.00', '15:59.00', '17:31.60', '16:38.40'],\n  '10000m': [None, None, '31:51.73', '35:50.22', None],\n  '5000m': ['14:23.21', None, '15:27.01', '16:44.14', '15:27.64'],\n  '3000m': ['8:32.83', '8:52.60', '8:51.80', '9:47.70', '9:03.60'],\n  '1 Mile': ['4:20.59', '4:20.39', '4:40.34', '4:57.53', '4:40.76'],\n  '1500m': ['3:54.67', '3:57.78', None, '4:32.14', '4:08.17']\n}\nrun_dataframe = pd.DataFrame(data_xctf, index=['Thomas Caulfield', 'Joseph Smith', 'Ben Fishbein', 'Lisa Grohn', 'Andy Jarombek'])\nrun_dataframe\n\n# Out[13]:\n# |                  | 8K       | 6K       | 5K       | 10000m   | 5000m    | 3000m   | 1 Mile  | 1500m   |\n# +------------------+----------+----------+----------+----------+----------+---------+---------+---------+\n# | Thomas Caulfield | 24:20.80 | 18:58.80 | 15:32.00 | None     | 14:23.21 | 8:32.83 | 4:20.59 | 3:54.67 |\n# | Joseph Smith     | 24:33.50 | 19:10.20 | 15:39.00 | None     | None     | 8:52.60 | 4:20.39 | 3:57.78 |\n# | Ben Fishbein     | 24:58.80 | 19:25.80 | 15:59.00 | 31:51.73 | 15:27.01 | 8:51.80 | 4:40.34 | None    |\n# | Lisa Grohn       | None     | 20:54.00 | 17:31.60 | 35:50.22 | 16:44.14 | 9:47.70 | 4:57.53 | 4:32.14 |\n# | Andy Jarombek    | 26:24.20 | 20:20.50 | 16:38.40 | None     | 15:27.64 | 9:03.60 | 4:40.76 | 4:08.17 |\n",
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
                "value":" Now, here are some slicing and indexing operations on the data frame. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Rows can be sliced by index name...\nrun_dataframe['Joseph Smith':'Lisa Grohn']\n\n# Out[14]:\n# |                  | 8K       | 6K       | 5K       | 10000m   | 5000m    | 3000m   | 1 Mile  | 1500m   |\n# +------------------+----------+----------+----------+----------+----------+---------+---------+---------+\n# | Joseph Smith     | 24:33.50 | 19:10.20 | 15:39.00 | None     | None     | 8:52.60 | 4:20.39 | 3:57.78 |\n# | Ben Fishbein     | 24:58.80 | 19:25.80 | 15:59.00 | 31:51.73 | 15:27.01 | 8:51.80 | 4:40.34 | None    |\n# | Lisa Grohn       | None     | 20:54.00 | 17:31.60 | 35:50.22 | 16:44.14 | 9:47.70 | 4:57.53 | 4:32.14 |\n\n# ...or by index location.\nrun_dataframe[1:3]\n\n# Out[15]:\n# |                  | 8K       | 6K       | 5K       | 10000m   | 5000m    | 3000m   | 1 Mile  | 1500m   |\n# +------------------+----------+----------+----------+----------+----------+---------+---------+---------+\n# | Joseph Smith     | 24:33.50 | 19:10.20 | 15:39.00 | None     | None     | 8:52.60 | 4:20.39 | 3:57.78 |\n# | Ben Fishbein     | 24:58.80 | 19:25.80 | 15:59.00 | 31:51.73 | 15:27.01 | 8:51.80 | 4:40.34 | None    |\n\n# Columns can also be sliced by column name...\nrun_dataframe.loc[:, ['8K', '6K', '5K']]\n\n# Out[16]:\n# |                  | 8K       | 6K       | 5K       |\n# +------------------+----------+----------+----------+\n# | Thomas Caulfield | 24:20.80 | 18:58.80 | 15:32.00 |\n# | Joseph Smith     | 24:33.50 | 19:10.20 | 15:39.00 |\n# | Ben Fishbein     | 24:58.80 | 19:25.80 | 15:59.00 |\n# | Lisa Grohn       | None     | 20:54.00 | 17:31.60 |\n# | Andy Jarombek    | 26:24.20 | 20:20.50 | 16:38.40 |\n\n# ...or by column location.\nrun_dataframe.iloc[:, [0, 2]]\n\n# Out[17]:\n# |                  | 8K       | 5K       |\n# +------------------+----------+----------+\n# | Thomas Caulfield | 24:20.80 | 15:32.00 |\n# | Joseph Smith     | 24:33.50 | 15:39.00 |\n# | Ben Fishbein     | 24:58.80 | 15:59.00 |\n# | Lisa Grohn       | None     | 17:31.60 |\n# | Andy Jarombek    | 26:24.20 | 16:38.40 |\n\n# Slicing can be done on both rows and columns at the same time.\nrun_dataframe.iloc[3, [0, 1, 2]]\n\n# Out[18]:\n# 8K        None\n# 6K    20:54.00\n# 5K    17:31.60\n# Name: Lisa Grohn, dtype: object\n\n# Picking rows and columns for the resulting frame.  Results in Men's Track & Field PRs.\nrun_dataframe.iloc[np.array([0, 1, 2, 4]), np.arange(3, 8)]\n\n# Out[19]:\n# |                  | 10000m   | 5000m    | 3000m   | 1 Mile  | 1500m   |\n# +------------------+----------+----------+---------+---------+---------+\n# | Thomas Caulfield | None     | 14:23.21 | 8:32.83 | 4:20.59 | 3:54.67 |\n# | Joseph Smith     | None     | None     | 8:52.60 | 4:20.39 | 3:57.78 |\n# | Ben Fishbein     | 31:51.73 | 15:27.01 | 8:51.80 | 4:40.34 | None    |\n# | Andy Jarombek    | None     | 15:27.64 | 9:03.60 | 4:40.76 | 4:08.17 |\n\n# Indexing can also be performed with index and column names...\nrun_dataframe.at['Thomas Caulfield', '5000m']\n\n# Out[20]: '14:23.21'\n\n# ...or with index and column locations.\nrun_dataframe.iat[0, 4]\n\n# Out[21]: '14:23.21'\n",
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
                "value":" An important takeaway from these code samples is that indexing and slicing in pandas is just as powerful as numpy, with the added benefit of a tabular ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" data structure.  Pandas also exposes many ways to manipulate data, from simple vectorization operations to complex \"group by\" expressions (which I will explain later).  Some simple data manipulation examples are shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"data_xctf = {\n  '8K': [1460.80, 1473.50, 1498.80, np.nan, 1584.20],\n  '6K': [1138.80, 1150.20, 1165.80, 1254.00, 1220.50],\n  '5K': [932.00, 939.00, 959.00, 1051.60, 998.40]\n}\nrun_sec_dataframe = pd.DataFrame(data_xctf, index=['Thomas Caulfield', 'Joseph Smith', 'Ben Fishbein', 'Lisa Grohn', 'Andy Jarombek'])\nrun_sec_dataframe\n\n# Out[22]:\n# |                  | 8K       | 6K       | 5K       |\n# +------------------+----------+----------+----------+\n# | Thomas Caulfield | 1460.8   | 1138.8   | 932.0    |\n# | Joseph Smith     | 1473.5   | 1150.2   | 939.0    |\n# | Ben Fishbein     | 1498.8   | 1165.8   | 959.0    |\n# | Lisa Grohn       | None     | 1254.0   | 1051.6   |\n# | Andy Jarombek    | 1584.2   | 1220.5   | 998.4    |\n\n# Vectorization on two Series objects.  Computes Tom and Joe's combined seconds for races.\nrun_sec_dataframe.iloc[0] + run_sec_dataframe.iloc[1]\n\n# Out[23]:\n# 8K    2934.3\n# 6K    2289.0\n# 5K    1871.0\n# dtype: float64\n\n# Vectorization on a DataFrame object which is first sliced.  Computes everyones 400m pace for the 6K.\nrun_sec_dataframe.loc[:, ['6K']] / 15\n\n# Out[24]:\n# |                  | 6K      |\n# +------------------+---------+\n# | Thomas Caulfield | 75.92   |\n# | Joseph Smith     | 76.68   |\n# | Ben Fishbein     | 77.72   |\n# | Lisa Grohn       | 83.60   |\n# | Andy Jarombek    | 81.37   |\n\n# Vectorization on a DataFrame.  Pace per 400m for each race.\nrun_sec_dataframe / [20, 15, 12.5]\n\n# Out[25]:\n# |                  | 8K      | 6K      | 5K       |\n# +------------------+---------+---------+----------+\n# | Thomas Caulfield | 73.04   | 75.92   | 74.56    |\n# | Joseph Smith     | 73.67   | 76.68   | 75.12    |\n# | Ben Fishbein     | 74.94   | 77.72   | 76.72    |\n# | Lisa Grohn       | None    | 83.60   | 84.13    |\n# | Andy Jarombek    | 79.21   | 81.37   | 79.87    |\n\n# Transpose a DataFrame by swapping its rows and columns.\nrun_sec_dataframe.T\n\n# Out[26]:\n# |    | Thomas Caulfield | Joseph Smith | Ben Fishbein | Lisa Grohn | Andy Jarombek |\n# +----+------------------+--------------+--------------+------------+---------------+\n# | 8K | 1460.8           | 1473.5       | 1498.8       | None       | 1584.2        |\n# | 6K | 1138.8           | 1150.2       | 1165.8       | 1254.0     | 1220.5        |\n# | 5K | 932.0            | 939.0        | 959.0        | 1051.6     | 998.4         |\n\n# Series and DataFrame types have methods for each arithmetic operation.\n# These can be used instead of vectorization.\nrun_seconds_dataframe.loc['5K'].div(25)\n\n# Out[27]:\n# Thomas Caulfield    37.280\n# Joseph Smith        37.560\n# Ben Fishbein        38.360\n# Lisa Grohn          42.064\n# Andy Jarombek       39.936\n# Name: 5K, dtype: float64\n",
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
                "value":" There are so many examples of pandas ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" manipulation operations, but these are some basic ones.  By showing these code samples, I'm trying to demonstrate that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects aren't simply for holding data, but also transforming and analyzing data to suit an application's needs.  Pandas provides plenty of statistical operations as well, such as finding the sum or standard deviation of data.  Math isn't my strong suit so I won't go over any statistical functions, but they are readily available and easy to use. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Time Series Data"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Time Series Data",
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
                "value":" Along with tabular data, another common use case for pandas is holding time series data.  Pandas has the strongest time-series functionality I've ever seen in a language or library, which is quite exciting! ",
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
                "value":" Dealing with dates and times in programming languages is often a frustrating experience.  When creating a library that handles dates and times, it's crucial that the basic API is easy to use and intuitive. Otherwise, date and time complexities such as timezones and daylight savings time become a nightmare to deal with.  An example of a poorly made date API is the original Java ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Date",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9, 10",
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
                "value":" Luckily, the date and time API used in pandas is easy to understand and use.  To use dates in a pandas ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DataFrame",
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
                "value":"Series",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", native Python ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"datetime.datetime",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" objects are used. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import pandas as pd\nimport numpy as np\nfrom datetime import datetime\n\nmile_races = pd.Series(\n  np.array(['4:54', '4:47', '4:52', '4:48']),\n  [datetime(2019, 12, 20), datetime(2020, 2, 13), datetime(2020, 2, 27), datetime(2020, 3, 5)]\n)\nmile_races\n\n# Out[28]:\n# 2019-12-20    4:54\n# 2020-02-13    4:47\n# 2020-02-27    4:52\n# 2020-03-05    4:48\n# dtype: object\n",
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
                "value":" Filtering data with a time series index is very easy.  The following examples retrieve data from my ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mile_races",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" series at certain indexes or slices. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"mile_races['2/27/2020']\n\n# Out[29]: '4:52'\n\nmile_races['20200227']\n\n# Out[30]: '4:52'\n\nmile_races['2020']\n\n# Out[31]:\n# 2020-02-13    4:47\n# 2020-02-27    4:52\n# 2020-03-05    4:48\n# dtype: object\n\nmile_races['2020-02']\n\n# Out[32]:\n# 2020-02-13    4:47\n# 2020-02-27    4:52\n# dtype: object\n\nmile_races['12/1/2019':'2/29/2020']\n\n# Out[33]:\n# 2019-12-20    4:54\n# 2020-02-13    4:47\n# 2020-02-27    4:52\n# dtype: object\n",
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
                "value":" As you can see, indexing and slicing is very flexible and is achievable with many common date formats.  One of the  annoyances of most date libraries is their expectation of dates to be in certain formats.  These libraries  often fail and throw errors if formats don't meet expectations.  Pandas is much more lenient. ",
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
                "value":" Beyond the basics, the aspect I found most interesting about pandas time series functionality is resampling. Resampling is when the frequency of time series data is changed",
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
                "value":".  For example, daily time series data can be converted to weekly time series data. ",
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
                "value":" There are two forms of resampling - downsampling and upsampling.  Downsampling is when a higher frequency is converted to a lower frequency.  An example of downsampling is converting weekly time series data to monthly time series data.  Downsampling can be thought of as data compression",
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
                "value":".  Upsampling is when a lower frequency is converted to a higher frequency.  An example of upsampling is converting monthly time series data to weekly time series data.  Upsampling can be thought of as data expansion",
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
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" To demonstrate downsampling, I created a data frame with all my runs in the month of February.  Then, I resampled it to show weekly average run length and weekly mileage. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"feb_days = pd.date_range('2020-02-01', periods=29, freq='D')\nrun_lengths = np.array([\n  11.56, 12,\n  2.34, 3.63, 2.85, 3.06, 3.92, 7.87, 12.5,\n  2.81, 3.8, 2.65, 7.5, 2.63, 14, 13.21,\n  1.28, 1.88, 2.64, 5.20, 3.76, 7.87, 12.59,\n  2.81, 2.81, 3.45, 2.6, 2.91, 5.2\n])\nfeb_runs = pd.Series(run_lengths, feb_days)\n\n# Downsampling to find the average length of a run each week.\nfeb_runs.resample('W').mean()\n\n# Out[34]:\n# 2020-02-02    11.780000\n# 2020-02-09     5.167143\n# 2020-02-16     6.657143\n# 2020-02-23     5.031429\n# 2020-03-01     3.296667\n# Freq: W-SUN, dtype: float64\n\n# Downsampling to find the total running mileage each week.\nfeb_runs.resample('W', label='left').sum()\n\n# Out[35]:\n# 2020-01-26    23.56\n# 2020-02-02    36.17\n# 2020-02-09    46.60\n# 2020-02-16    35.22\n# 2020-02-23    19.78\n# Freq: W-SUN, dtype: float64\n",
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
                "value":" To demonstrate upsampling, I created a data frame with my mile times per quarter (example: Q3 2019). Then, I resampled it to display data for missing quarters. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"quarters = [pd.Period('2013Q1'), pd.Period('2014Q1'), pd.Period('2014Q4'), pd.Period('2015Q1'), pd.Period('2016Q1'), pd.Period('2016Q2'), pd.Period('2020Q1')]\ntimes_in_sec = [295, 280, 283, 280, 281, 267, 287]\nmile_progression = pd.Series(times_in_sec, quarters)\nmile_progression\n\n# Out[36]:\n# 2013Q1    295\n# 2014Q1    280\n# 2014Q4    283\n# 2015Q1    280\n# 2016Q1    281\n# 2016Q2    267\n# 2020Q1    287\n# Freq: Q-DEC, dtype: int64\n\nmile_progression.resample('Q').asfreq()\n\n# Out[37]:\n# 2013Q1    295.0\n# 2013Q2      NaN\n# 2013Q3      NaN\n# 2013Q4      NaN\n# 2014Q1    280.0\n# 2014Q2      NaN\n# 2014Q3      NaN\n# 2014Q4    283.0\n# 2015Q1    280.0\n# 2015Q2      NaN\n# 2015Q3      NaN\n# 2015Q4      NaN\n# 2016Q1    281.0\n# 2016Q2    267.0\n# 2016Q3      NaN\n# 2016Q4      NaN\n# 2017Q1      NaN\n# 2017Q2      NaN\n# 2017Q3      NaN\n# 2017Q4      NaN\n# 2018Q1      NaN\n# 2018Q2      NaN\n# 2018Q3      NaN\n# 2018Q4      NaN\n# 2019Q1      NaN\n# 2019Q2      NaN\n# 2019Q3      NaN\n# 2019Q4      NaN\n# 2020Q1    287.0\n# Freq: Q-DEC, dtype: float64\n",
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
                "value":" Missing data can be filled in with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ffill()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"mile_progression.resample('Q').ffill()\n\n# Out[38]:\n# 2013Q1    295\n# 2013Q2    295\n# 2013Q3    295\n# 2013Q4    295\n# 2014Q1    280\n# 2014Q2    280\n# 2014Q3    280\n# ...\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Advanced Data Manipulation with Group By"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Advanced Data Manipulation with Group By",
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
                "value":" The final aspect of pandas I'll talk about is its \"group by\" capabilities.  In a basic sense, pandas ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"groupby()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function is analogous to SQL's ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"GROUP BY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause.  In pandas, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"groupby()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" groups rows by given column(s) and performs aggregations on remaining columns.  I'll walk you through one example to give an idea of how it works, but to fully understand ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"groupby()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" you will have to experiment with it yourself. ",
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
                "value":" I started by creating a data frame which includes my programming language usage statistics (as of March 2020). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"lines_coded = pd.DataFrame({\n    '2014': [0, 4282, 0, 0, 0, 0, 0, 0, 0, 0],\n    '2015': [0, 1585, 931, 0, 0, 0, 0, 0, 325, 0],\n    '2016': [2008, 12962, 1122, 1413, 0, 5433, 0, 0, 942, 179],\n    '2017': [6663, 12113, 1288, 2289, 10726, 3670, 163, 0, 812, 113],\n    '2018': [16414, 4769, 1975, 10833, 698, 356, 4198, 3801, 1392, 2164],\n    '2019': [13354, 4439, 20192, 4855, 2208, 357, 4468, 4089, 2622, 2324],\n    '2020': [5022, 1664, 3666, 36, 0, 0, 727, 1332, 156, 652]\n  },\n  index=['JavaScript', 'Java', 'Python', 'HTML', 'Swift', 'PHP', 'Sass', 'HCL', 'SQL', 'Groovy']\n)\nlines_coded\n\n# Out[39]:\n# |            | 2014   | 2015   | 2016   | 2017   | 2018   | 2019   | 2020   |\n# +------------+--------+--------+--------+--------+--------+--------+--------+\n# | JavaScript | 0      | 0      | 2008   | 6663   | 16414  | 13354  | 5022   |\n# | Java       | 4282   | 1585   | 12962  | 12113  | 4769   | 4439   | 1664   |\n# | Python     | 0      | 931    | 1122   | 1288   | 1975   | 20192  | 3666   |\n# | HTML       | 0      | 0      | 1413   | 2289   | 10833  | 4855   | 36     |\n# | Swift      | 0      | 0      | 0      | 10726  | 698    | 2208   | 0      |\n# | PHP        | 0      | 0      | 5433   | 3670   | 356    | 357    | 0      |\n# | Sass       | 0      | 0      | 0      | 163    | 4198   | 4468   | 727    |\n# | HCL        | 0      | 0      | 0      | 0      | 3801   | 4089   | 1332   |\n# | SQL        | 0      | 325    | 942    | 812    | 1392   | 2622   | 156    |\n# | Groovy     | 0      | 0      | 179    | 113    | 2164   | 2324   | 652    |\n",
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
                "value":" Next, I reset the data frame's index.  This makes the programming language names their own column. In the final data transformation before using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"groupby()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I melted the data frame on the programming language names column.  Melting on this column results in a new data frame with a row for every language and year combination. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"lines_coded_v2 = lines_coded.reset_index()\nmelted = pd.melt(lines_coded_v2, ['index'])\nmelted\n\n# Out[40]:\n# |    | index      | var    | value  |\n# +----+------------+--------+--------+\n# | 0  | JavaScript | 2014   | 0      |\n# | 1  | Java       | 2014   | 4282   |\n# | 2  | Python     | 2014   | 0      |\n# | 3  | HTML       | 2014   | 0      |\n# | 4  | Swift      | 2014   | 0      |\n# | .. | ...        | ...    | ...    |\n# | 65 | PHP        | 2020   | 0      |\n# | 66 | Sass       | 2020   | 727    |\n# | 67 | HCL        | 2020   | 1332   |\n# | 68 | SQL        | 2020   | 156    |\n# | 69 | Groovy     | 2020   | 652    |\n",
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
                "value":" Finally, it's time to use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"groupby()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"!  In my examples, I group on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" column (which contains programming language names).  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"groupby()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" returns a grouping object which aggregation functions are performed upon.  My examples use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sum()",
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
                "value":"mean()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" aggregation functions to find the total lines coded all time and average lines coded per year, respectively. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"grouping = melted.groupby('index')\ngrouping.sum()\n\n# Out[41]:\n# | index      | value  |\n# +------------+--------+\n# | Groovy     | 5432   |\n# | HCL        | 9222   |\n# | HTML       | 19426  |\n# | Java       | 41814  |\n# | JavaScript | 43461  |\n# | PHP        | 9816   |\n# | Python     | 29174  |\n# | SQL        | 6249   |\n# | Sass       | 9556   |\n# | Swift      | 13632  |\n\ngrouping.mean()\n\n# Out[42]:\n# | index      | value  |\n# +------------+--------+\n# | Groovy     | 776.0  |\n# | HCL        | 1317.4 |\n# | HTML       | 2775.1 |\n# | Java       | 5973.4 |\n# | JavaScript | 6208.7 |\n# | PHP        | 1402.3 |\n# | Python     | 4167.7 |\n# | SQL        | 892.7  |\n# | Sass       | 1365.1 |\n# | Swift      | 1947.4 |\n",
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
                "value":" Pandas is a really great library for tabular data, and fits into the Python ecosystem nicely.  I use pandas all the time at work, especially when interacting with data coming from a relational database. I plan on incorporating pandas into my personal projects as well, which is a sign that pandas is both fun for personal use and powerful enough for use at the enterprise level.  You can find all my pandas code samples on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/data-analytics-prototypes/tree/master/Python/pandas"
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

postName = "apr-19-2020-pandas";
postDate = new Date('2020-04-19T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Interesting Aspects of Pandas",
    description: ``,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Pandas",
            picture: "https://asset.jarombek.com/logos/pandas.png",
            color: "pandas"
        },
        {
            name: "Numpy",
            picture: "https://asset.jarombek.com/logos/numpy.png",
            color: "numpy"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "R",
            picture: "https://asset.jarombek.com/logos/r.png",
            color: "r"
        },
        {
            name: "Data Analysis"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"pandas (software)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Pandas_(software)",
            link: "https://en.wikipedia.org/wiki/Pandas_(software)"
        },
        {
            startName: "\"pandas (software): History\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Pandas_(software)#History",
            link: "https://en.wikipedia.org/wiki/Pandas_(software)#History"
        },
        {
            startName: "\"Applications of Pandas\", ",
            endName: "",
            linkName: "https://data-flair.training/blogs/applications-of-pandas/",
            link: "https://data-flair.training/blogs/applications-of-pandas/"
        },
        {
            startName: "Wes McKinney, ",
            endName: ", 2nd ed (Sebastopol, CA: O'Reilly, 2017), 126",
            linkName: "Python for Data Analysis: ",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "",
            endName: ", 130",
            linkName: "McKinney.",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "",
            endName: ", 5",
            linkName: "McKinney.",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "\"data.frame function\", ",
            endName: "",
            linkName: "https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/data.frame",
            link: "https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/data.frame"
        },
        {
            startName: "\"Iterable\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html",
            link: "https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html"
        },
        {
            startName: "\"Date\", ",
            endName: "",
            linkName: "https://docs.oracle.com/javase/8/docs/api/java/util/Date.html",
            link: "https://docs.oracle.com/javase/8/docs/api/java/util/Date.html"
        },
        {
            startName: "\"Still using java.util.Date? Don’t!\", ",
            endName: "",
            linkName: "https://programminghints.com/2017/05/still-using-java-util-date-dont/",
            link: "https://programminghints.com/2017/05/still-using-java-util-date-dont/"
        },
        {
            startName: "",
            endName: ", 354",
            linkName: "McKinney.",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "\"Downsampling (signal processing)\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Downsampling_(signal_processing)",
            link: "https://en.wikipedia.org/wiki/Downsampling_(signal_processing)"
        },
        {
            startName: "\"Upsampling\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Upsampling",
            link: "https://en.wikipedia.org/wiki/Upsampling"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
