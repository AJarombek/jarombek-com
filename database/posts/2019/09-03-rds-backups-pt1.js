/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 9/2/2019
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
                "value":" When working with Amazon RDS (Relational Database Service) or any other database, creating backups of your data is an important safety precaution.  The data of an application is often its most important asset, and if its lost or damaged the app is rendered useless.  With RDS, Amazon provides a backup mechanism called snapshots.  Snapshots backup the database instance and allow users to restore their RDS instance from a snapshot",
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
                "value":" Internally snapshots are stored in an Amazon S3 (Simple Storage Service) bucket.  However, these backups aren't accessible through S3, since the bucket is hidden from the users AWS account",
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
                "value":".  The only way to see snapshots is through the RDS service.  Also, snapshots aren't downloadable and their contents can't be viewed.  This poses some serious limitations when trying to test a database backup. ",
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
                "value":" When working with Amazon RDS (Relational Database Service) or any other database, creating backups of your data is an important safety precaution.  The data of an application is often its most important asset, and if its lost or damaged the app is rendered useless.  With RDS, Amazon provides a backup mechanism called snapshots.  Snapshots backup the database instance and allow users to restore their RDS instance from a snapshot",
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
                "value":" Internally snapshots are stored in an Amazon S3 (Simple Storage Service) bucket.  However, these backups aren't accessible through S3, since the bucket is hidden from the users AWS account",
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
                "value":".  The only way to see snapshots is through the RDS service.  Also, snapshots aren't downloadable and their contents can't be viewed.  This poses some serious limitations when trying to test a database backup. ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/9-3-19-rds-snapshot-console.png"
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
                "value":" Due to the limitations of snapshots, custom solutions for RDS backups are often required.  In this series of articles, I'm going to create an automated mechanism for backing up RDS instances.  My approach uses an AWS Lambda function and the mysqldump command line utility to store MySQL database backup files on Amazon S3. ",
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
                "value":" This lambda function is currently in use for my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.saintsxctf.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" website. In this article I'll discuss the AWS infrastructure around my SaintsXCTF RDS database, which helps give context for the design choices I made.  In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-5-2019-rds-backups-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next  article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I'll discuss the code required to create the lambda function. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Infrastructure Overview"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Infrastructure Overview",
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
                "value":" At a high level, the SaintsXCTF application lives in a single VPC inside my AWS account.  My VPC has four subnets, two which are private and which that are public. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"VPC"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A VPC (Virtual Private Cloud) is a private cloud with its own IP address range, providing a network for cloud resources.  VPCs are a good way to create isolation between different applications or environments in a cloud infrastructure account",
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
                "value":".  Within a VPC, IP addresses are further partitioned into subnetworks (subnets). ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Subnet"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A subnet (subnetwork) is a subsection of an IP address range.  Subnets provide a way to partition IP addresses into groups.  In AWS, a subnet within a VPC can either be publically accessible to the internet or private to the subnetwork. ",
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
                "value":" Here's an infrastructure diagram for my VPC and subnets: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/9-3-19-saints-xctf-infra-diagram-1.png"
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
                "value":" The web application for SaintsXCTF lives on an EC2 instance behind a load balancer in the public subnets.  The RDS MySQL database is highly available and lives in the private subnets.  Since the database exists in a private subnet, only resources within the VPC are able to access it.  Any IP addresses located elsewhere on the internet are blocked from reaching it.  This is great for security, since only the web application in the public subnet should access the database.  However, it makes the process of automating database backups a bit trickier (as we will soon see). ",
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
                "value":" Here is an updated infrastructure diagram with the web application and database: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/9-3-19-saints-xctf-infra-diagram-2.png"
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
                "value":" All my infrastructure for SaintsXCTF is written as code using Terraform.  You can check out the IaC for the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/web-server"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"web server",
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
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/tree/master/database"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"database",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on GitHub. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Infrastructure for Database Backups"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Infrastructure for Database Backups",
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
                "value":" The first piece of infrastructure needed to automate database backups is a lambda function.  Since the lambda function needs access to a database in a private subnet, it must be located within the applications VPC. ",
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
                "value":" The second piece of infrastructure needed is a S3 bucket to store the SQL files containing database backups. While S3 buckets are assigned regions, they can't be placed within a VPC.  S3 buckets can be described as a global resource within the cloud infrastructure. ",
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
                "value":" The third piece of infrastructure needed is Amazon Secrets Manager.  With Secrets Manager I'm able to securely store  the database username and password.  Thanks to Secrets Manager my database credentials aren't hard-coded within the lambda function.  Just like S3, Secrets Manager is assigned a region but not a VPC. ",
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
                "value":" With these three new pieces of infrastructure outlined, I drafted a new infrastructure diagram: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/9-3-19-saints-xctf-infra-diagram-3.png"
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
                "value":" Unfortunately, this diagram still has some missing pieces.  I quickly learned that placing an AWS Lambda function within a VPC causes some complications.  Since I placed the lambda function within the VPC to connect to the database, it no longer had internet access.  This is the default behavior of lambda functions within a VPC",
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
                "value":" While my lambda function was still able to connect to the RDS instance, it lost connection to Secrets Manager and the S3 bucket.  RDS connections still worked because the lambda function and database existed in the same  VPC.  Because of this I could utilize the database's private IP address instead of its public one.  However, S3 and Secrets Manager didn't exist in my applications VPC.  Therefore the only way to connect to them was over the internet. ",
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
                "value":" There are two solutions to this problem.  One is to set up network address translation (NAT) in the private subnet. The other is to create VPC endpoints for Secrets Manager and S3.  I really wanted to avoid using NAT because it costs $0.045 per hour, which is very expensive for my personal use.  Therefore I went with the VPC endpoint approach. VPC endpoints allow for resources within a VPC to connect to other AWS resources without needing internet access",
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
                "value":" With the VPC endpoints in place, here is the final infrastructure diagram: ",
                "children":null
            }
        ]
    },
    {
        "el":"figure",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"img",
                "attributes":{
                    "className":"jarombek-blog-image",
                    "src":"https://asset.jarombek.com/posts/9-3-19-saints-xctf-infra-diagram-4.png"
                },
                "value":null,
                "children":[

                ]
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
                "value":" This article gave a high-level overview of my AWS infrastructure and the new parts needed to automate database backups.  In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/sep-5-2019-rds-backups-pt2"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"next article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", I'll implement these new pieces of infrastructure and go over the AWS Lambda function which lives at the heart of the backup process. ",
                "children":null
            }
        ]
    }
];

postName = "sep-3-2019-rds-backups-pt1";
postDate = new Date('2019-09-03T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "AWS Lambda Function for MySQL RDS Backups Part I: VPC Infrastructure",
    description: `In this series of articles, I’m going to create an automated mechanism for backing 
        up RDS instances.  My approach uses an AWS Lambda function and the mysqldump command line 
        utility to store MySQL database backup files on Amazon S3.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "AWS Lambda",
            picture: "https://asset.jarombek.com/logos/awslambda.png",
            color: "awslambda"
        },
        {
            name: "AWS RDS",
            picture: "https://asset.jarombek.com/logos/awsrds.png",
            color: "awsrds"
        },
        {
            name: "MySQL",
            picture: "https://asset.jarombek.com/logos/mysql.png",
            color: "mysql"
        },
        {
            name: "AWS S3",
            picture: "https://asset.jarombek.com/logos/awss3.svg",
            color: "awss3"
        },
        {
            name: "AWS Secrets Manager",
            picture: "https://asset.jarombek.com/logos/aws-secrets-manager.png",
            color: "awssm"
        },
        {
            name: "AWS VPC Endpoint",
            picture: "https://asset.jarombek.com/logos/aws-vpc-endpoint.png",
            color: "awsvpcendpoint"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Creating a DB Snapshot\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html",
            link: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html"
        },
        {
            startName: "\"How to copy/move RDS snapshots to S3 service?\", ",
            endName: "",
            linkName: "https://forums.aws.amazon.com/message.jspa?messageID=607366",
            link: "https://forums.aws.amazon.com/message.jspa?messageID=607366"
        },
        {
            startName: "\"Virtual private cloud\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Virtual_private_cloud",
            link: "https://en.wikipedia.org/wiki/Virtual_private_cloud"
        },
        {
            startName: "\"Internet Access for Lambda Functions\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/lambda/latest/dg/vpc.html#vpc-internet",
            link: "https://docs.aws.amazon.com/lambda/latest/dg/vpc.html#vpc-internet"
        },
        {
            startName: "\"VPC Endpoints\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html",
            link: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});