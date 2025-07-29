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
                "value":" I recently finished looking at Java 8 (which was the topic of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-7-2018-java8-completable-future"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"recent",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-8-2018-java8-functional"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"discoveries",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and now I'm switching gears and exploring the Oracle database.  Although I don't use Oracle a ton in my free time I use it a lot at work and it is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://pypl.github.io/DB.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"most popular database",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" at the moment.  Therefore its good to know well! ",
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
                "value":" This discovery follows the setup of my database.  I will skip the actual Oracle installation and configuration (which was a challenge itself!) and move straight to the moment I started typing SQL. ",
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
                "value":" I recently finished looking at Java 8 (which was the topic of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-7-2018-java8-completable-future"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"recent",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-8-2018-java8-functional"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"discoveries",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and now I'm switching gears and exploring the Oracle database.  Although I don't use Oracle a ton in my free time I use it a lot at work and it is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://pypl.github.io/DB.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"most popular database",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" at the moment.  Therefore its good to know well! ",
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
                "value":" This discovery follows the setup of my database.  I will skip the actual Oracle installation and configuration (which was a challenge itself!) and move straight to the moment I started typing SQL. ",
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
                "value":" A disclaimer before I begin.  A lot of my discoveries are about languages and technologies that I really love using.  I wouldn't say I love Oracle but it is a good tool to have in the bag. Just try installing an Oracle product and you will see why many get frustrated with this database!  One bright spot is the PL/SQL language, which allows developers to add some really cool functionality at the database layer of applications.  I won't go into PL/SQL much this time around but definitely will in the future! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Basic Administration"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Basic Administration",
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
                "value":" To start I installed Oracle (the only good installation guide I could find was in a non-Oracle backed ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.codeproject.com/Articles/1027230/Oracle-c-Installation-on-Windows-Step-by-Step"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" blog post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and connected to my database instance.  The first task I wanted to accomplish was creating a user for my database schema.  In Oracle a user is an account for a schema of the same name",
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
                "value":" I created a tablespace called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ANDY",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for all my tables.  A tablespace in Oracle consists of physical storage units for the database's data",
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
                "value":".  It is a way to group the database at the storage level. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"CREATE TABLESPACE ANDY;\n\nCREATE USER C##ANDYUSR IDENTIFIED BY orac1et3st DEFAULT TABLESPACE ANDY;\nGRANT ALL PRIVILEGES TO C##ANDYUSR;\n",
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
                "value":" Next I created my user ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C##ANDYUSR",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and gave it all privileges. I also set its default tablespace to the one I just created.  You may be wondering what is up with the strange username.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C##",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefix defines a common user (contrasted with a local user)",
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
                "value":".  A common user is accessible across all Oracle pluggable databases instead of being local to a single one.  You can confirm the user is a common user with the following query: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"SELECT * FROM ALL_USERS WHERE USERNAME LIKE 'C##%';\n",
        "children":null
    },
    {
        "el":"figure",
        "attributes":{
            "id":"common-user-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/common-user.png"
                },
                "value":null,
                "children":[

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
                "value":" So what is a pluggable database?  It is a new feature in Oracle 12c that allows you to define many databases inside a container database instance",
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
                "value":".  This allows users to control multiple databases while only running one instance of Oracle 12c.  I'm going to ignore pluggable databases for the rest of this article, but I'll briefly show how to create a user for a pluggable database. ",
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
                "value":" In SQL*Plus the following command changes the current session to a pluggable database: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"alter session set container=CAPYBARA1\n",
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
                "value":" From here a pluggable database user is created like before but without the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"C##",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefix: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"CREATE USER ANDYUSR IDENTIFIED BY orac1et3st DEFAULT TABLESPACE ANDY;\nGRANT ALL PRIVILEGES TO ANDYUSR;\n",
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
                "value":" Now let's move on to building the basic table structure of the database! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Table Creation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Table Creation",
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
                "value":" The database stores books that I have read.  These books have a many-to-many relationship to programming languages (since a book can be about many languages and a language can have many books describing it).  The first table I added was ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"languages",
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
        "value":"-- I was thinking of using a sequence to generate a primary key for this table.\n-- However, Oracle 12c introduced identity columns which simplifies sequence\n-- generation statements on columns\nCREATE TABLE languages(\n    language_id INTEGER GENERATED BY DEFAULT AS IDENTITY (\n        START WITH 1 INCREMENT BY 1\n    ),\n    name VARCHAR2(63),\n    created DATE\n) TABLESPACE ANDY;\n\nALTER TABLE languages ADD CONSTRAINT languages_id_pk PRIMARY KEY (language_id);\n\n-- All language name values must be unique in the table\n-- Specifying a unique constraint also creates an index on the column\nALTER TABLE languages ADD CONSTRAINT languages_name_uq UNIQUE (name);\n",
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
                "value":" One interesting aspect of this table is that each language has an id that is auto incremented.  This means that languages aren't manually assigned an id, instead Oracle generates one on request. ",
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
                "value":" The second table is for books: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"CREATE TABLE books(\n    isbn INTEGER CONSTRAINT books_pk PRIMARY KEY,\n    title VARCHAR2(127),\n    released DATE\n) TABLESPACE ANDY;\n\n-- Since I don't give a name to this constraint, Oracle automatically generates one for me\nALTER TABLE books MODIFY title NOT NULL;\n\n-- Add columns to the existing table\nALTER TABLE books ADD started DATE;\nALTER TABLE books ADD finished DATE;\nALTER TABLE books ADD edition INTEGER;\n\n-- Add a virtual column that determines the number of days spent reading the book\nALTER TABLE books ADD (time_reading AS (finished - started));\n\n-- Add some check constraints to the book table.  This will validate incoming data\nALTER TABLE books ADD CONSTRAINT books_isbn_ck CHECK (isbn > 0);\nALTER TABLE books ADD CONSTRAINT books_dates_ck CHECK (finished >= started);\n\n-- Add indexes on commonly queried columns.\n-- Best practice is to create an index when you have queries on a column that\n-- retrieve less than 10 percent of the total rows in the table\nCREATE INDEX i_books_title ON books(title);\n",
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
                "value":" The first really cool thing about this table is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"time_reading",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" column.  This is a virtual column, a feature added in Oracle 11g.  Virtual columns aren't stored on disk, instead they are dynamically generated by performing computations on other columns in the table",
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
                "value":".  The virtual column I defined subtracts the date I started reading from the date I finished, displaying the number of days spent reading the book! ",
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
                "value":" The second cool piece to this table is that some of the columns have ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CHECK",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constraints on them.  These constraints enforce rules on the data that users try inserting into columns",
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
                "value":".  The first constraint makes sure that the ISBN number is greater than zero, and the second constraint checks that the finished date occurs after (or at the same time as) the start date.  These ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"CHECK",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" constraints allow you to add some validation logic on database columns! ",
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
                "value":" Finally I created a ",
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
                "value":" table that stores a many to many relationship between books and languages: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"CREATE TABLE book_languages(\n    isbn INTEGER NOT NULL,\n    name VARCHAR2(63),\n    CONSTRAINT books_languages_isbn_fk\n        FOREIGN KEY (isbn) REFERENCES books(isbn) ON DELETE CASCADE,\n    CONSTRAINT book_languages_name_fk\n        FOREIGN KEY (name) REFERENCES languages(name) ON DELETE CASCADE\n) TABLESPACE ANDY;\n",
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
                "value":" The table constraints define both the columns as foreign keys! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Table Population"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Table Population",
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
                "value":" First I populated both the languages and books tables: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"-- Although permitted to do so, do not insert into the auto generated identity column\nINSERT INTO languages(\n    name, created\n) VALUES (\n    'Java', '23-MAY-1995'\n);\n\nINSERT INTO languages(\n    name, created\n) VALUES (\n    'SQL', '01-JAN-1974'\n);\n\nINSERT INTO languages(\n    name, created\n) VALUES (\n    'PL/SQL', '01-JAN-1992'\n);\n\nINSERT INTO languages(\n    name, created\n) VALUES (\n    'JavaScript', '04-DEC-1995'\n);\n\n-- You are not allowed to insert into virtual columns.  So if you try to insert into\n-- time_reading, you get the error:\n-- ORA-54013: INSERT operation disallowed on virtual columns\nINSERT INTO books(\n    isbn, title, released, started, finished, edition\n) VALUES (\n    9781617291999, 'Java 8 in Action', '01-AUG-2014', '10-OCT-2017', '08-FEB-2018', 1\n);\n\nINSERT INTO books(\n    isbn, title, released, started, finished, edition\n) VALUES (\n    9780071799355, 'Oracle Database 12c SQL', '10-SEP-2013', '02-SEP-2017', '28-SEP-2017', 1\n);\n\nINSERT INTO books(\n    isbn, title, released, started, finished, edition\n) VALUES (\n    9781491901946, 'AngularJS: Up and Running', '01-SEP-2014', '15-JUN-2017', NULL, 1\n);\n",
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
                "value":" Writing out each insert statement requires a bit of overhead, so for the ",
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
                "value":" table I created a PL/SQL procedure to do it for me!  In PL/SQL, a procedure is just a function with no output value.  This is perfect for doing some inserts! ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SQL"
        },
        "value":"DECLARE\nPROCEDURE bulk_insert(\n    p_isbn IN INTEGER,\n    p_name IN VARCHAR2\n) AS\nBEGIN\n    INSERT INTO book_languages(\n        isbn, name\n    ) VALUES (\n        p_isbn, p_name\n    );\nEND;\nBEGIN\n    bulk_insert(p_isbn => 9781617291999, p_name => 'Java');\n    bulk_insert(p_isbn => 9780071799355, p_name => 'SQL');\n    bulk_insert(p_isbn => 9780071799355, p_name => 'PL/SQL');\n    bulk_insert(p_isbn => 9781491901946, p_name => 'JavaScript');\nEND;\n\nSELECT * FROM book_languages;\n",
        "children":null
    },
    {
        "el":"figure",
        "attributes":{
            "id":"bulk-insert-image"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"     ",
                "children":null
            },
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/bulk-insert.png"
                },
                "value":null,
                "children":[

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
                "value":" I'll look into PL/SQL later.  Now the database is fully set up and ready to query (which I will do ",
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
                        "value":"next time",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  The full code for this discovery (with some nice comments!) is up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/tree/master/2018/02-Feb/2-12-Oracle-Start"
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

postName = "feb-12-2018-oracle-start";
postDate = new Date('2018-02-12T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Oracle 12c Database Up & Running",
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
            startName: "\"Difference between database vs user vs schema\", ",
            endName: "",
            linkName: "https://dba.stackexchange.com/questions/37012/difference-between-database-vs-user-vs-schema",
            link: "https://dba.stackexchange.com/questions/37012/difference-between-database-vs-user-vs-schema"
        },
        {
            startName: "\"Tablespaces, Datafiles, and Control Files\", ",
            endName: "",
            linkName: "https://docs.oracle.com/cd/B19306_01/server.102/b14220/physical.htm",
            link: "https://docs.oracle.com/cd/B19306_01/server.102/b14220/physical.htm"
        },
        {
            startName: "\"CREATE USER\", ",
            endName: "",
            linkName: "https://docs.oracle.com/database/121/SQLRF/statements_8003.htm#SQLRF01503",
            link: "https://docs.oracle.com/database/121/SQLRF/statements_8003.htm#SQLRF01503"
        },
        {
            startName: "Jason Price, ",
            endName: " (New York: McGraw-Hill Education, 2013), 295",
            linkName: "Oracle Database 12c SQL",
            link: "https://www.amazon.com/Oracle-Database-12c-Jason-Price/dp/0071799354"
        },
        {
            startName: "",
            endName: ", 340",
            linkName: "Ibid.",
            link: "https://www.amazon.com/Oracle-Database-12c-Jason-Price/dp/0071799354"
        },
        {
            startName: "",
            endName: ", 343",
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