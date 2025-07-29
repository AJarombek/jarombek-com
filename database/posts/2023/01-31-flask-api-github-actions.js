/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 1/24/2022
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Databricks is a data warehouse and data lake platform designed around Apache Spark.  I use Databricks extensively at work, but also use Databricks and Apache Spark for personal applications.  This summer, I attended my first software engineering conference, the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.databricks.com/dataaisummit/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Databricks Data+AI Summit",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in San Francisco.  The conference was a great way to stay up-to-date on the latest trends in the data engineering industry. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"12-11-22-summit-main-stage.jpg",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" At the start, the Databricks Data+AI Summit felt more like a concert than a software engineering conference.  However, by the end, after taking part in many breakout sessions, I had clear takeaways about the future of the Databricks platform and the Data Science and AI industry at large. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Evolving Data Towards AI"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Evolving Data Towards AI",
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
                "value":" Databricks is continuously adding new features in attempts to become a one-stop cloud solution for data science and AI. Databricks isn't alone in this vision; Snowflake is also trying to build out a platform that customers can use for all their data science needs.  During the conference, Databricks emphasized the evolution of data science within a company and how moving from analyzing historical data to predicting future data gives companies a competitive edge",
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
                "value":".  While the benefits of AI aren't a new revelation, hearing this said at the beginning of the conference resonated with me.  My AI programming experience is rusty at best, and is something I hope to sharpen up soon.  As someone who works with Databricks every day at work, I also need to look for opportunities to experiment with predictive modeling. ",
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
                "value":" The evolution of data science within a company was broken down into seven distinct stages",
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
        "el":"ol",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Clean Data",
                        "children":null
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Reports",
                        "children":null
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Ad Hoc Queries",
                        "children":null
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Data Exploration",
                        "children":null
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Predictive Modeling",
                        "children":null
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Prescriptive Analytics",
                        "children":null
                    }
                ]
            },
            {
                "el":"li",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Automated Decision Making",
                        "children":null
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
                "value":" Cleaning data, generating reports, ad hoc querying, and data exploration are activities I perform all the time. I believe  trying to find opportunities to move into stage five and beyond is equally important to iterating upon and continuously learning within stages 1-4.  All the Databricks infrastructure and data analytics code I've written for personal use is available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/databricks-spark-programs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"databricks-spark-programs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, and I plan to expand upon this codebase soon. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Databricks Workflows vs Airflow"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Databricks Workflows vs. Airflow",
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
                "value":" As previously mentioned, Databricks is attempting to create a one-stop cloud solution for data science and AI.  One piece of software often used alongside Databricks is Apache Airflow, a data pipeline management tool.  I've written about the basics of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-17-2022-airflow"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Apache Airflow",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and have ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/data-analytics-prototypes/tree/master/Airflow"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Airflow code available on GitHub",
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
                "value":" During the conference, Databricks discussed workflows, an alternative to Airflow integrated within the Databricks data lakehouse platform.  Both Airflow and Databricks workflows are designed around orchestrating Directed Acyclic Graphs (DAGs).  In Airflow, DAGs contain tasks and sensors of various purposes, such as running a Databricks job or waiting for a file to exist on AWS S3.  In Databricks workflows, DAGs contain one or more Databricks jobs, which are programs that run on a cluster within the Databricks environment.  Below is an image of a Databricks workflow containing multiple jobs. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"12-11-22-databricks-workflow.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

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
                "value":" With workflows, Databricks hopes that data engineers will orchestrate their data pipelines within the Databricks platform instead of using a third party solution like Airflow.  Although Databricks continues to flesh out their workflow solution, Airflow currently has more features and integrates seamlessly with other cloud platforms and services. Because Airflow is so feature rich, I expect many Databricks customers will continue using it for building data pipelines instead of Databricks workflows until the functionality gap between the two closes. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"ELT and ETL Processes"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"ELT and ETL Processes",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"ELT vs. ETL"
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
                                "value":" Extract, Load, Transform (ELT) ",
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
                                        "value":" An ELT is a software engineering process with three steps.  The first step extracts data from a source, the second step loads data to a destination, and the third step transforms data within the destination locale.  Unlike an ETL, an ELT loads raw source data into its final destination, which is likely a data warehouse, data lake, or data lakehouse.  For example, an ELT might extract data from a source database such as PostgreSQL and load it into delta tables within Databricks, and then transform these delta tables and save their results within new delta tables. ",
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
                                "value":" Extract, Transform, Load (ETL) ",
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
                                        "value":" An ETL is a software engineering process with three steps.  The first step extracts data from a source, the second step transforms data in an intermediary location, and the third step loads data into a destination.  For example, an ETL might extract data from a source database such as PostgreSQL, transform the data using temporary tables in the Databricks lakehouse, and load the transformed data into Parquet files on AWS S3.  ETLs are a more traditional process for working with data within a data warehouse setting, although ELTs are increasing in popularity. ",
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
                "value":" At the Databricks conference, there was a lot of discussion about ELTs and their potential benefits over ETLs.  One benefit of ELTs is a decoupling of the load and transform stages",
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
                "value":".  In a traditional ETL, transforming and loading data is often done in the same process or step of a data pipeline.  The downside of this tight coupling is that if an error occurs during the transform stage, data won't be loaded into the destination location. With an ELT, data is loaded into the destination location before any transformations occur, making it available even if there is a transformation error.  Some other benefits of ELTs include creating a raw data archive that is queryable when business objectives change, along with potential speed increases since the load and transform stages can often be run in parallel",
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
                "value":" A potential downside of ELTs is that unneeded raw, uncleaned data is stored in the destination location, which is likely a company's data warehouse, data lake, or data lakehouse (although as previously mentioned, some may see this as a positive).  Storing large amounts of raw data can increase security risks and raise compliance or data governance concerns",
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
                "value":" Two technologies related to ELTs discussed throughout the Databricks Data+AI Summit were Fivetran and dbt. ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.fivetran.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Fivetran",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is attempting to redefine ETL data pipelines, instead focusing on ELTs that business analysts can set and forget",
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
                "value":".  With Fivetran, data engineers no longer need to code the Extract and Load stages of an ELT, instead focusing their full attention on the Transform stage.  This makes engineers more efficient and kept busy working on business critical tasks. ",
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
                "value":" Fivetran provides connectors for data sources that engineers commonly require data from.  Fivetran has almost two hundred data source connectors at the time of this article's writing, including Google Analytics, Salesforce, PostgreSQL, and AWS S3, to name a few",
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
                "value":".  Fivetran supports ten destinations as well, including Databricks, Snowflake, and Redshift",
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
                "value":".  Mix and matching source connections and destinations enables the creation of many different ELTs with very little setup. ",
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
                "value":" dbt, which stands for \"data build tool\", is a data transformation workflow tool",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"9,10",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  dbt allows engineers to create data models using YAML documents and SQL ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"SELECT",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" statements. These models are materialized as views or tables in data warehouses such as Databricks or Snowflake.  Fivetran integrates nicely with dbt, making it a common practice to use both technologies together.  I hope to create some code samples using Databricks, Fivetran, and dbt sometime soon! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Spark Connect"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Spark Connect",
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
                "value":" Spark Connect, which was announced at the Databricks Data+AI Summit, is a decoupled client server Spark architecture",
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
                "value":".  Spark Connect allows a client application to generate an unresolved Spark plan and send it to a server for remote processing.  With its decoupled architecture, a client application, such as a website or mobile application, can include Spark code that delegates the heavy lifting to a remote server.  This is different from the current Spark data flow where a client application might call an API that behind the scenes runs Spark queries and returns their result. ",
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
                "value":" Spark Connect sounds really promising, although I haven't heard much about it since the conference except for a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.databricks.com/blog/2022/07/07/introducing-spark-connect-the-power-of-apache-spark-everywhere.html"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" single blog post",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Hopefully we will get more details soon and I can try it out! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Battle for Comprehensive Data Platform Supremacy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Battle for Comprehensive Data Platform Supremacy",
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
                "value":" While not explicitly discussed at the Databricks Data+AI Summit, it seems clear that Databricks is pushing towards creating a comprehensive data platform, as is its biggest competitor Snowflake (amongst others). ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.macrometa.com/event-stream-processing/databricks-vs-snowflake"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"This article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" does a great job of highlighting the current differences between Databricks and Snowflake, and if the conference is any indication, both platforms will continue to introduce new features and improve upon existing offerings.  I expect most large companies  will use a combination of both platforms due to each having unique strengths.  You can find my Databricks code within my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/databricks-spark-programs"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"databricks-spark-programs",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository on GitHub. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "jan-31-2023-flask-api-github-actions";
postDate = new Date('2023-01-31T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Configuring GitHub Actions to Test a Flask API",
    description: `In this article, I’ll give an overview of my application infrastructure and show how GitHub Actions 
        are leveraged to run integration tests and code quality tests every time I commit new code.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "GitHub Actions",
            picture: "https://asset.jarombek.com/logos/github-actions.png",
            color: "github-actions"
        },
        {
            name: "Flask",
            picture: "https://asset.jarombek.com/logos/flask.png",
            color: "flask"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "YAML",
            picture: "https://asset.jarombek.com/logos/yaml.png",
            color: "yaml"
        },
        {
            name: "API"
        },
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"About GitHub-hosted runners\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners",
            link: "https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners"
        },
        {
            startName: "\"About service containers\", ",
            endName: "",
            linkName: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers",
            link: "https://docs.github.com/en/actions/using-containerized-services/about-service-containers"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
