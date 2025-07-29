/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 8/3/2022
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
                "value":" Recently at work, I’ve used Splunk Enterprise extensively to analyze application logs.  In Splunk, I’m able to query logs, trigger alerts when scenarios occur, and create dashboards to visualize logs for fellow engineers and business analysts.  Splunk provides its own query language to interact with logs on its platform; Splunk Processing Language (SPL) is used for searching, alerting, and dashboard creation",
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
                "value":" Although Splunk querying was part of my work-life for years, I never explored it on my own or used it in any personal projects.  Recently, I decided to run a local Splunk Enterprise server to experiment with its basic properties. This groundwork may lead to my adoption of Splunk for monitoring applications logs.  In this article, I describe the basics of Splunk and how to set up a local instance on Docker.  I also discuss basic SPL queries and dashboards, and how some queries can be run before you upload any logs of your own. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Splunk Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Splunk Overview",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Splunk Enterprise"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Splunk Enterprise is software that enables log analysis on application, infrastructure, and security logs.  Splunk consists of a web interface, query language (SPL), and command line interface",
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
                "value":".  Users forward logs from different sources onto Splunk, where they are indexed and made available to query.  Alerts, dashboards, and reports can be created on Splunk, which build upon SPL queries.  With these tools, Splunk allows individuals and organizations to view and react to the status of logs in real-time or near real-time",
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
        "el":"definition",
        "attributes":{
            "word":"Centralized Log Analysis Tools"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A centralized log analysis tool brings together logs from across an organization or department into a single, searchable platform.  Splunk is a popular example of a centralized log analysis tool.  Centralized logging brings many quality-of-life improvements to engineers; it is considerably easier to search on Splunk for logs using a common query language instead of accessing individual servers where logs are initially generated. ",
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
                "value":" Splunk is often compared to another log analysis platform called Elasticsearch, which is part of the ELK stack.  I have written about the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=elasticsearch&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ELK Stack",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in prior articles, mostly because it was used at my prior company.  The biggest difference between the two is Splunk requires a license while the ELK Stack is open source.  Beyond that, I view the choice between the two platforms as a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.gartner.com/reviews/market/security-information-event-management/compare/elasticsearch-vs-splunk"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" personal preference",
                        "children":null
                    }
                ]
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Running Splunk Locally on Docker"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Running Splunk Locally on Docker",
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
                "value":" Splunk Enterprise provides ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://hub.docker.com/r/splunk/splunk/tags"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"official Docker images",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on DockerHub.  If Docker is installed and running on your computer, starting a Splunk server is as simple as the following two shell commands. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"docker pull splunk/splunk:latest\ndocker run -d \\\n    -p 8000:8000 \\\n    -e \"SPLUNK_START_ARGS=--accept-license\" \\\n    -e \"SPLUNK_PASSWORD=splunkadmin\" \\\n    --name splunk \\\n    splunk/splunk:latest\n",
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
                "value":" It may take a minute for the container to be ready.  With the Docker container running, navigating to ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"localhost:8080",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in a web browser should show the following sign-in screen. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-sign-in.png",
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
                "value":" Sign in with the credentials configured in the shell command: ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"admin",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the username and ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"splunkadmin",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the password.  After signing in, you are presented with the homepage for Splunk Enterprise! ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-homepage.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Basic SPL Queries and Commands"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Basic SPL Queries and Commands",
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
                "value":" Now we are ready to start using Splunk.  Before forwarding any logs to Splunk, Splunk’s default indexes can be utilized  to practice writing simple queries.  An index in Splunk is a repository of data (i.e. logs), and the act of indexing transforms raw data sitting in files at an index into searchable events",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"5,6",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  One index present on every Splunk installation is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"_internal",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  From the Splunk homepage, clicking on \"Search & Reporting\" on the left-hand side presents a search screen.  From here, entering the following query will retrieve events from the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"_internal",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" index. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SPL"
        },
        "value":"index=_internal\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-query.png",
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
                "value":" On the left-hand side of the screen, a list of fields (under \"Selected Fields\" and \"Interesting Fields\") are shown which exist in events and are queryable on the current index.  A slightly more complex query might perform statistical analysis on one of these fields.  The following query aggregates the events and checks the count of each unique value in the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"source",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" field. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SPL"
        },
        "value":"index=_internal\n| stats count by source\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-count-query.png",
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
                "value":" In the second line of the query above, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stats",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an SPL command which performs statistical aggregations",
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
                "value":".  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"count",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an aggregation function for counting the number of events, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"by",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a clause to group the aggregation function (similar to a SQL ",
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
                "value":" statement), and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"source",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the name of a field to group upon.  All together, the command ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stats count by source",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" means \"perform a statistical aggregation, grouped by the source field, where the number of events are counted.\" ",
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
                "value":" Another basic query technique is to filter events within an index.  One way to accomplish filtering is with the ",
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
                "value":" SPL command.  For those experienced with SQL, the following query has the same functionality as a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"WHERE <expression> LIKE <pattern>",
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
            "language":"SPL"
        },
        "value":"index=_internal\n| where source LIKE \"%health.log\"\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-filter-query.png",
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
                "value":" A more complex Splunk query may chain together multiple statements using pipes, similar in functionality to Unix pipes in shell commands.  For example, the following SPL command pipes together multiple statements, returning all  previously run SPL queries on the Splunk server. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SPL"
        },
        "value":"index=_audit\n| where action=\"search\"\n| where isnotnull(search)\n| sort -_time\n| table _time, search\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-prior-queries.png",
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
                "value":" Queries are also used to display visualizations, such as the following query which charts Splunk's memory utilization over time. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SPL"
        },
        "value":"index=\"_introspection\"\n| where isnotnull(\"data.pct_memory\") AND component=\"PerProcess\"\n| chart max(data.pct_memory) by _time\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-memory-chart.png",
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
                "value":" Understanding these queries alone will not to make you an expert at Splunk, but they should provide a general sense of how  SPL queries are used.  Complex queries can be written and experimented with before any custom indexes are created, which is great for beginners wishing to experiment.  ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/\nSearchReference/WhatsInThisManual"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Splunk documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides great information on how to structure queries along with documentation on each SPL command",
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
        "el":"sectiontitle",
        "attributes":{
            "title":"Querying Application Logs"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Querying Application Logs",
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
                "value":" In order to query application logs, a custom index must be created.  In a production environment, Splunk forwarders are used to send logs to a Splunk Enterprise server where they are placed in an index.  For demonstration purposes,  I'll skip the setup of a forwarder and manually upload log data to Splunk.  To do this, start by navigating to the homepage and click on \"Add Data\". ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-add-data.png",
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
                "value":" On the following page, scroll down and click \"Upload files from my computer\". ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-upload-files.png",
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
                "value":" A multi-step process is required to upload a file manually.  For full details, check out the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/GetthetutorialdataintoSplunk"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" uploading tutorial data",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" article provided by Splunk",
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
                "value":".  In my scenario, I uploaded a sample log file from my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-api"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints-xctf-api",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" application (accessible from ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://api.saintsxctf.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"api.saintsxctf.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  This sample log is available in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/v1.0.1/splunk/logs/saints-xctf-api.log"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" saints-xctf-api.log",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"devops-prototypes",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository. ",
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
                "value":" While uploading my log file, I also created a corresponding Splunk index.  This index, called ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"saints_xctf_api",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is queryable just like the default indexes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SPL"
        },
        "value":"source=\"saints-xctf-api.log\" index=\"saints_xctf_api\"\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-custom-index.png",
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
                "value":" Even with a small log file like ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints-xctf-api.log",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", interesting queries can be run, such as the following which calculates the frequency of each HTTP status code returned by the API.  Additional queries I ran on this log file are available in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/master/splunk/\nsaints_xctf_api_queries.spl"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints_xctf_api_queries.spl",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"SPL"
        },
        "value":"source=\"saints-xctf-api.log\" index=\"saints_xctf_api\"\n| rex field=_raw \"] \\\"(?<verb>[A-Z]+) (?<endpoint>.+) (?<http_version>.+)\\\" (?<status>[0-9]+)\"\n| table _time verb, endpoint, http_version, status\n| where isnotnull(endpoint)\n| stats count by status\n",
        "children":null
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-http-codes.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Splunk Dashboards"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Splunk Dashboards",
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
                "value":" One of the great advantages of a centralized logging tool is the ability to create visualizations for data, potentially from multiple different sources and applications.  In Splunk, one or more visualizations can be combined together into a dashboard.  Dashboards provide a great way to analyze application logs quickly, and help business analysts with limited or no programming background to gain insight into the state of the processes they manage. ",
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
                "value":" Splunk Enterprise has a \"Dashboard\" tab from which dashboards are created, edited, and viewed.  I usually create dashboards using the newer \"Dashboard Studio\" format, which implements each dashboard with JSON code.  Dashboards are  mainly edited using no-code tools in the UI, but can also be manually modified by changing their JSON configurations.   Usually, highly customized dashboards require a combination of both approaches. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-dashboards.png",
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
                "value":" The following dashboard, saved in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/devops-prototypes/blob/v1.0.1/splunk/\nsplunk_internals.json"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"splunk_internals.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, uses two SPL queries to display information about Splunk memory utilization and previously run queries. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-internal-dashboard.png",
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
                "value":" Using JSON files, dashboards can be passed from one Splunk environment to another.  For example, using the ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"splunk_internals.json",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, my dashboard can be easily replicated.  To do this, first create a new dashboard on Splunk Enterprise, and then paste the JSON code into the \"Source\" section of the dashboard (accessed via the button outlined in red). ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-dashboard-create.png",
            "paddingtop":"true",
            "paddingbottom":"true"
        },
        "value":null,
        "children":[

        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"8-28-22-splunk-dashboard-source.png",
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
                "value":" There is a lot more to show with dashboards, such as how to add custom styling in JSON code.  I will try to cover that in a future article, but for newcomers to Splunk, it’s important to begin by leveraging the basic no-code capabilities of Splunk dashboards to meet business needs. ",
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
                "value":" Splunk is a great way to centralize and perform analysis on logs from multiple sources.  Creating dashboards to display commonly used queries is a great way to provide engineers and business analysts with insights into data and application state.  All the code shown in this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ndevops-prototypes/tree/v1.0.1/splunk"
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

preview = content.slice(0, 2);

postName = "aug-28-2022-splunk-spl";
postDate = new Date('2022-08-28T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Running Splunk and Basic SPL Queries on Docker",
    description: `In this article, I describe the basics of Splunk and how to set up a local instance on Docker.  
        I also discuss basic SPL queries and dashboards, and how some queries can be run before you upload any 
        logs of your own.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Splunk",
            picture: "https://asset.jarombek.com/logos/splunk.png",
            color: "splunk"
        },
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        },
        {
            name: "SPL"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"SPL\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Splexicon:SPL",
            link: "https://docs.splunk.com/Splexicon:SPL"
        },
        {
            startName: "\"Splunk Enterprise Overview\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Documentation/Splunk/9.0.0/Overview/AboutSplunkEnterprise",
            link: "https://docs.splunk.com/Documentation/Splunk/9.0.0/Overview/AboutSplunkEnterprise"
        },
        {
            startName: "\"About real-time searches and reports\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Documentation/Splunk/9.0.0/Search/Aboutrealtimesearches",
            link: "https://docs.splunk.com/Documentation/Splunk/9.0.0/Search/Aboutrealtimesearches"
        },
        {
            startName: "\"Elastic vs Splunk\", ",
            endName: "",
            linkName: "https://www.gartner.com/reviews/market/security-information-event-management/compare/elasticsearch-vs-splunk",
            link: "https://www.gartner.com/reviews/market/security-information-event-management/compare/elasticsearch-vs-splunk"
        },
        {
            startName: "\"Index\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Splexicon:Index",
            link: "https://docs.splunk.com/Splexicon:Index"
        },
        {
            startName: "\"Indexer\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Splexicon:Indexer",
            link: "https://docs.splunk.com/Splexicon:Indexer"
        },
        {
            startName: "\"Search Reference: stats\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Documentation/SplunkCloud/latest/SearchReference/Stats",
            link: "https://docs.splunk.com/Documentation/SplunkCloud/latest/SearchReference/Stats"
        },
        {
            startName: "\"Welcome to the Search Reference\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/SearchReference/WhatsInThisManual",
            link: "https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/SearchReference/WhatsInThisManual"
        },
        {
            startName: "\"Search Tutorial: Upload the tutorial data\", ",
            endName: "",
            linkName: "https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/GetthetutorialdataintoSplunk",
            link: "https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/GetthetutorialdataintoSplunk"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
