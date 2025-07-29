/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/29/2019
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
                "value":" My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-15-2019-linq"
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
                "value":" explored LINQ,  a module that brings query syntax to C#.  All the examples in that article queried local data structures.  While using LINQ on local data is valuable in itself, LINQ can do much more.  LINQ really shines when used to query remote data sources.  Queries on remote data sources such as relational databases are known as integrated queries.  In this article, I explore integrated queries with a SQL Server database.  First I create the SQL Server database instance with Docker and then query it using LINQ. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"SQL Server with Docker"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"SQL Server with Docker",
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
                "value":" My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-15-2019-linq"
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
                "value":" explored LINQ,  a module that brings query syntax to C#.  All the examples in that article queried local data structures.  While using LINQ on local data is valuable in itself, LINQ can do much more.  LINQ really shines when used to query remote data sources.  Queries on remote data sources such as relational databases are known as integrated queries.  In this article, I explore integrated queries with a SQL Server database.  First I create the SQL Server database instance with Docker and then query it using LINQ. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"SQL Server with Docker"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"SQL Server with Docker",
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
                "value":" SQL Server is a relational database created and maintained by Microsoft.  It's an enterprise centric database comparable to the Oracle database.  In order to work with integrated queries, I set up a SQL Server database instance on a Docker container.  This Docker container runs on my local machine and is  queried from my C# code. ",
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
                "value":" Microsoft provides SQL Server Docker container images on their DockerHub repository",
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
                "value":". Their ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mcr.microsoft.com/mssql/server",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image creates an empty SQL Server database with exposed environment variables that configure passwords, accept license agreements, and more. ",
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
                "value":" While this Docker image provides most of the functionality I need, I also want to pre-populate SQL Server  with some data.  I found a Microsoft employee's GitHub repository that  builds a similar Docker image with pre-populated data",
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
                "value":".  With this repository and the official SQL Server Docker image as my base, I created the following ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/misc-code-samples/blob/master/C%23/base/linq_basics/database/Dockerfile"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Dockerfile",
                        "children":null
                    }
                ]
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
            "language":"Dockerfile"
        },
        "value":"FROM mcr.microsoft.com/mssql/server:2017-latest-ubuntu\n\nLABEL maintainer=\"andrew@jarombek.com\" \\\n      version=\"0.0.1\" \\\n      description=\"Dockerfile running SQL Server with pre-populated tables and data\"\n\nENV ACCEPT_EULA Y\nENV SA_PASSWORD LinqDemo1\n\nCOPY . /src\nWORKDIR /src\n\nEXPOSE 1433\nCMD [\"bash\", \"setup-db.sh\"]\n",
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
                "value":" Since this SQL Server database is only used for demo purposes, I have the database password hard-coded in the Dockerfile.  Most of the heavy lifting is done in the base ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"mcr.microsoft.com/mssql/server:2017-latest-ubuntu",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" image and the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/misc-code-samples/blob/master/C%23/base/linq_basics/\ndatabase/setup-db.sh"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"setup-db.sh",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Bash script.  The Bash script starts the database and populates it with data. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"#!/usr/bin/env bash\n\n# Turn on monitor mode for job control.\nset -m\n\n# Start Microsoft SQL Server and put its task in the background.\n/opt/mssql/bin/sqlservr &\njobs\n\n# Wait for the database to start and then populate it with data.\nsleep 60s\n/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P LinqDemo1 -d master -i createDB.sql\n\n# Bring the Microsoft SQL Server task back to the foreground.  This prevents the bash script from exiting,\n# killing the Docker container in the process.\nfg %1\n",
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
                "value":" The final piece is ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/misc-code-samples/blob/master/C%23/base/linq_basics/\ndatabase/createDB.sql"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"createDB.sql",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" which creates database tables and populates them with data.  For this demo, I'm using programming language statistics for my data.  There are two tables in the database - one describing programming languages and another containing the number of lines coded in a language over the course of a year.  Here is an abbreviated version of the SQL script: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"USE master;\n\nDROP DATABASE IF EXISTS LinqDemo;\nGO\n\nCREATE DATABASE LinqDemo;\nGO\n\nUSE LinqDemo;\n\nDROP TABLE IF EXISTS Language;\nDROP TABLE IF EXISTS CodeWritten;\n\nCREATE TABLE Language (\n  Name VARCHAR(31) NOT NULL PRIMARY KEY,\n  ReleaseYear INT NOT NULL\n);\n\nCREATE TABLE CodeWritten (\n  ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,\n  Language VARCHAR(31) NOT NULL,\n  Year INT NOT NULL,\n  LinesWritten INT NOT NULL,\n  CONSTRAINT CodeWrittenLanguageFK\n    FOREIGN KEY (Language) REFERENCES Language(Name) ON DELETE CASCADE\n);\n\nINSERT INTO Language (Name, ReleaseYear) VALUES ('Python', 1991);\nINSERT INTO Language (Name, ReleaseYear) VALUES ('JavaScript', 1995);\n...\n\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('Python', 2014, 0);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('Python', 2015, 931);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('Python', 2016, 1122);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('Python', 2017, 1288);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('Python', 2018, 1975);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('Python', 2019, 8316);\n\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('JavaScript', 2014, 0);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('JavaScript', 2015, 0);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('JavaScript', 2016, 2008);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('JavaScript', 2017, 6663);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('JavaScript', 2018, 16414);\nINSERT INTO CodeWritten (Language, Year, LinesWritten) VALUES ('JavaScript', 2019, 5617);\n\n...\n",
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
                "value":" The SQL Server Docker image is built and run with the following two commands: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker image build -t misc-code-samples-sqlserver:latest .\ndocker container run -p 1433:1433 --name misc-code-samples-sqlserver misc-code-samples-sqlserver:latest\n",
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
                "value":" Now that the Docker image is up and running, let's explore how to connect LINQ queries to the SQL Server database instance. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Establishing a Connection Between SQL Server and C#"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Establishing a Connection Between SQL Server and C#",
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
                "value":" To work with SQL Server in C#, we first need to open a connection to the database.  For .NET Core, the package used to establish this connection is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Microsoft.EntityFrameworkCore.SqlServer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". You can easily install this package with nuget.  The class in this package used to create a database session and query the tables is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DbContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I created a custom ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class which extends ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DbContext",
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
            "language":"C#"
        },
        "value":"/// <summary>\n/// Class used to connect to SQLServer and allow for queries to be made against the tables.\n/// </summary>\npublic class LanguageContext : DbContext\n{\n  public DbSet<Language> LanguageSet { get; set; }\n  public DbSet<CodeWritten> CodeWrittenSet { get; set; }\n\n  /// <inheritdoc cref=\"DbContext.OnConfiguring\"/>\n  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n  {\n    optionsBuilder.UseSqlServer(\n      @\"Server=localhost;Database=LinqDemo;User Id=sa;Password=LinqDemo1\"\n    );\n  }\n}\n",
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
                "value":"OnConfiguring",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked upon construction of each ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance.  It establishes a connection to the database with the supplied connection string.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" also defines two ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DbSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" properties which represent tables in the database.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Language",
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
                "value":"CodeWritten",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are custom model objects containing all the columns and attributes of my tables. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"/// <summary>\n/// Model object for the <code>Language</code> table in SQLServer.\n/// </summary>\n[Table(\"Language\")]\npublic class Language\n{\n  [Key]\n  [Required]\n  [Column(\"Name\", TypeName = \"VARCHAR(31)\")]\n  public string Name { get; set; }\n\n  [Required]\n  [Column(\"ReleaseYear\", TypeName = \"INT\")]\n  public int ReleaseYear { get; set; }\n\n  public List<CodeWritten> CodeWrittenReferences { get; set; }\n}\n\n/// <summary>\n/// Model object for the <code>CodeWritten</code> table in SQLServer.\n/// </summary>\n[Table(\"CodeWritten\")]\npublic class CodeWritten\n{\n  [Key]\n  [Required]\n  [Column(\"ID\", TypeName = \"INT\")]\n  public int Id { get; set; }\n\n  [Required]\n  [Column(\"Year\", TypeName = \"INT\")]\n  public int Year { get; set; }\n\n  [Required]\n  [Column(\"LinesWritten\", TypeName = \"INT\")]\n  public int LinesWritten { get; set; }\n\n  [Required]\n  [Column(\"Language\", TypeName = \"VARCHAR(31)\")]\n  public string Language { get; set; }\n\n  [ForeignKey(\"Language\")]\n  public Language LanguageReference { get; set; }\n}\n",
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
                "value":" Model objects are relatively simple, holding the columns in their respective tables.  However, they also hold their tables relationships such as foreign keys.  This allows for table join operations to be performed in C#. ",
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
                "value":" One potential source of confusion is that ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DbSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" caches a tables contents after performing a query.  This means that querying ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"DbSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" may not reflect changes made to the database during the lifetime of a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance. I won't be inserting, updating, or deleting any data in SQL Server during the following examples, so we don't need to worry about this scenario. ",
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
                "value":" Now that SQL Server and C# are connected, let's perform some integrated queries with LINQ! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"LINQ Integrated Queries"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"LINQ Integrated Queries",
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
                "value":" To work with integrated queries, we need an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageContext",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". All of the LINQ examples in this article are enclosed in the following ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"using",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" code block",
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
                "value":": ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"using (var context = new LanguageContext())\n{\n  ...\n}\n",
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
                "value":"using",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" will properly instantiate and tear down the database context.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LanguageSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CodeWrittenSet",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are accessible from ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"context",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following code confirms that both contain the expected data counts (each language has lines written statistics for six years). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"var languages = context.LanguageSet.ToList();\nvar codeWritten = context.CodeWrittenSet.ToList();\n\nAssert(languages.Count == 18);\nAssert(codeWritten.Count == 18 * 6);\n",
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
                "value":" Now let's begin using LINQ.  The following queries get the newest and oldest languages in the  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Language",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" table. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"\nvar oldestLanguage = context.LanguageSet.OrderBy(language => language.ReleaseYear).First();\nAssert(oldestLanguage.Name == \"SQL\");\n\nvar newestLanguage = context.LanguageSet.OrderByDescending(language => language.ReleaseYear).First();\nAssert(newestLanguage.Name == \"HCL\");\n",
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
                "value":" Here are the equivalent SQL queries: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT TOP 1 Name\nFROM Language\nORDER BY ReleaseYear;\n\nSELECT TOP 1 Name\nFROM Language\nORDER BY ReleaseYear DESC;\n",
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
                "value":" These queries are relatively simple and use the same LINQ methods discussed in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog/sep-15-2019-linq"
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
                "value":".  The next set of queries build on one another, with the final query performing an inner join. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// Query #1\nvar mostLinesCodedThisYear =\n  from written in context.CodeWrittenSet\n  where written.Year == 2019\n  orderby written.LinesWritten descending\n  select written;\n\nvar languageCodedMostThisYear = mostLinesCodedThisYear.First();\n\n// Query #2\nAssert(languageCodedMostThisYear.Language == \"Python\");\n// Query #3\nAssert(languageCodedMostThisYear.LanguageReference.ReleaseYear == 1991);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"\n-- Retrieve the code written statistics for this year, ordered by the most coded languages.\nSELECT * FROM CodeWritten\nWHERE Year = 2019\nORDER BY LinesWritten DESC;\n\n-- The same as the previous query except it only returns the most used language.\nSELECT TOP 1 * FROM CodeWritten\nWHERE Year = 2019\nORDER BY LinesWritten DESC;\n\n-- Get the release year of the most used language of 2019 by inner joining the CodeWritten and Language tables.\nSELECT TOP 1 ReleaseYear FROM CodeWritten\nINNER JOIN Language\nON CodeWritten.Language = Language.Name\nWHERE Year = 2019\nORDER BY LinesWritten DESC;\n",
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
                "value":" These queries demonstrate how our model objects make joining tables easier to do. ",
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
                "value":" For certain SQL keywords, LINQ and the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"EntityFrameworkCore",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" package provide functions with equivalent behavior.  For example, using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Contains()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"where",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause is similar to a SQL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"IN",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement and using ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"EF.Functions.Like()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"where",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" clause is similar to a SQL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"LIKE",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statement. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"var jLanguages =\n  from codeWritten in context.CodeWrittenSet\n  where EF.Functions.Like(codeWritten.Language, \"J%\")\n  select codeWritten;\n\nvar javaLanguagesArray = new [] {\"Java\", \"JavaScript\"};\nvar javaLanguages =\n  from codeWritten in context.CodeWrittenSet\n  where javaLanguagesArray.Contains(codeWritten.Language)\n  select codeWritten;\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"\n-- Get all the code written statistics for languages that start with the letter J.\nSELECT * FROM CodeWritten WHERE Language LIKE 'J%';\n\n-- Get the code written statistics for a group of languages.\nSELECT * FROM CodeWritten WHERE Language IN ('Java', 'JavaScript');\n",
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
                "value":" LINQ also has equivalent methods for SQL aggregate functions such as ",
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
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"  \n// Query the code written statistics and group by the language name.  Retrieve the sum of the\n// lines of code written for each language.\nvar languageTotalStats =\n  from codeWritten in context.CodeWrittenSet\n  orderby codeWritten.Language\n  group codeWritten.LinesWritten by codeWritten.Language\n  into totals\n  select totals.Sum();\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT SUM(LinesWritten) AS TOTALS\nFROM CodeWritten\nGROUP BY Language\nORDER BY Language;\n",
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
                "value":" If you want to work with set operators, LINQ has the tools to do that as well.  It provides a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Concat()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method which emulates ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UNION ALL",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Union()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method which emulates ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UNION",
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
            "language":"C#"
        },
        "value":"var oldestLanguages =\n  (from language in context.LanguageSet\n    orderby language.ReleaseYear\n    select language.Name)\n  .Take(2);\n\nvar newestLanguages =\n  (from language in context.LanguageSet\n    orderby language.ReleaseYear descending\n    select language.Name)\n  .Take(2);\n\n// Query #1\nvar oldAndNew = oldestLanguages.Concat(newestLanguages);\n\n// Query #2\nvar oldAndNewUnion = oldestLanguages.Union(newestLanguages);\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"-- Retrieves the two oldest and two newest languages.\nSELECT * FROM (\n  SELECT TOP 2 Name\n  FROM Language\n  ORDER BY ReleaseYear\n) Oldest\nUNION ALL\nSELECT * FROM (\n  SELECT TOP 2 Name\n  FROM Language\n  ORDER BY ReleaseYear DESC\n) Newest;\n\n-- Retrieves the two oldest and two newest languages (without duplicates).\nSELECT * FROM (\n  SELECT TOP 2 Name\n  FROM Language\n  ORDER BY ReleaseYear\n) Oldest\nUNION\nSELECT * FROM (\n  SELECT TOP 2 Name\n  FROM Language\n  ORDER BY ReleaseYear DESC\n) Newest;\n",
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
                "value":" With the help of LINQ and the entire C# ecosystem, you can do queries in C# that wouldn't be possible in SQL alone.  For example, the following code takes two queries and zips their contents together, resulting in a string.  This string represents a language and the total number of lines written in it. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"C#"
        },
        "value":"// Query the languages and return just the names in alphabetical order.\nvar languageNames =\n  from language in context.LanguageSet\n  orderby language.Name\n  select language.Name;\n\nAssert(languageNames.First() == \"Bash\" && languageNames.Last() == \"YAML\");\n\n// Query the code written statistics and group by the language name.  Retrieve the sum of the\n// lines of code written for each language.\nvar languageTotalStats =\n  from codeWritten in context.CodeWrittenSet\n  orderby codeWritten.Language\n  group codeWritten.LinesWritten by codeWritten.Language\n  into totals\n  select totals.Sum();\n\nAssert(languageTotalStats.First() == 3288);\n\n// Zip the two previous queries to associate the language with the total statistics\nvar languagesZipped = languageNames.ToArray()\n  .Zip(languageTotalStats.ToArray(), (name, total) => $\"{name} = {total}\");\n\nAssert(languagesZipped.First() == \"Bash = 3288\");\n",
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-15-2019-linq"
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
                "value":" I compared LINQ in C#  to PL/SQL in the Oracle database.  I believe this article enforces that claim and proves that incorporating  query syntax into an imperative language is extremely expressive and powerful.  While there are some  differences between the LINQ queries and their SQL equivalents, learning LINQ is very easy for someone  who already knows SQL.  While I don't currently use C# for any of my personal projects, if I ever do I  will take full advantage of LINQ and the power it gives developers.  You can check out the full code  for this article on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/misc-code-samples/tree/master/C%23/base/linq_basics"
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

postName = "sep-30-2019-linq-sqlserver";
postDate = new Date('2019-09-30T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Integrated Queries with LINQ and SQL Server",
    description: `In this article, I’m exploring integrated queries with a SQL Server database.  
        First I’ll create the SQL Server database instance with Docker and then query it 
        with LINQ.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "C#",
            picture: "https://asset.jarombek.com/logos/csharp.png",
            color: "csharp"
        },
        {
            name: "SQL Server",
            picture: "https://asset.jarombek.com/logos/sql-server.svg",
            color: "sqlserver"
        },
        {
            name: ".NET Core",
            picture: "https://asset.jarombek.com/logos/dotnetcore.png",
            color: "dotnetcore"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "Bash",
            picture: "https://asset.jarombek.com/logos/bash.png",
            color: "bash"
        },
        {
            name: "Relational Database"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Microsoft SQL Server\", ",
            endName: "",
            linkName: "https://hub.docker.com/_/microsoft-mssql-server?tab=description",
            link: "https://hub.docker.com/_/microsoft-mssql-server?tab=description"
        },
        {
            startName: "\"mssql-node-docker-demo-app\", ",
            endName: "",
            linkName: "https://github.com/twright-msft/mssql-node-docker-demo-app",
            link: "https://github.com/twright-msft/mssql-node-docker-demo-app"
        },
        {
            startName: "\"Basic Queries\", ",
            endName: "",
            linkName: "https://docs.microsoft.com/en-us/ef/core/querying/basic",
            link: "https://docs.microsoft.com/en-us/ef/core/querying/basic"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});