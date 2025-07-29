/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/13/2020
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
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=s3&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Amazon S3",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (Simple Storage Service) is an AWS service for storing objects.  Since objects are files, S3 can be viewed as a filesystem accessible over HTTP.  I often  use S3 for storing images, fonts, and other assets for my applications.  Some examples include my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/tree/master/jarombek-com-assets"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" jarombek.com assets",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/\nmaster/s3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global shared assets",
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
                "value":" Since Amazon S3 stores files and acts as a filesystem, it can also be used to host static websites. ",
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
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=s3&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Amazon S3",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (Simple Storage Service) is an AWS service for storing objects.  Since objects are files, S3 can be viewed as a filesystem accessible over HTTP.  I often  use S3 for storing images, fonts, and other assets for my applications.  Some examples include my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/tree/master/jarombek-com-assets"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" jarombek.com assets",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/tree/\nmaster/s3"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global shared assets",
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
                "value":" Since Amazon S3 stores files and acts as a filesystem, it can also be used to host static websites. ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Static vs. Dynamic Websites"
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
                                "value":" Static Website ",
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
                                        "value":" A static website displays the content found in its static assets (files containing HTML, CSS, JS, etc.). When a user navigates to a static website, the files stored on the web server are returned to the web browser without modification.  There is no server-side logic impacting what content the web browser receives.  In general, whatever exists in the front-end source code is what gets displayed on the webpage. ",
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
                                        "value":" Thanks to cloud storage systems like Amazon S3, static websites can be an easy and inexpensive option for hosting a website.  One downside of static websites is that any logic which makes a site dynamic must be performed on the client-side, not the server-side",
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
                                        "value":".  Database and API requests can still be made, but they must be performed by the front-end and not delegated to a back-end server.  This can help reduce complexity at the cost of less flexibility.  Static websites providing dynamic logic with front-end JavaScript code are sometimes called client-side dynamic websites",
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
                                "value":" Dynamic Website ",
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
                                        "value":" Dynamic websites serve content based on a back-end web application.  This application returns assets to the web browser which are dependent on the context of the request.  This means different users who request the same URL from their web browser may receive different files (HTML, CSS, JS, etc.) from the web server for rendering.  For example, a signed in user might receive HTML for their profile page while a new user might receive HTML for the applications home page.  Asset delivery is determined by the back-end code, which might be Node.js/Express, Java Spring, or another server-side web framework. ",
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
                                        "value":" Dynamic websites are hosted on a web server, which nowadays often live on the cloud in a VM or container architecture.  This is often more costly and takes more effort to maintain (especially in the case of a VM) than a static website's cloud storage system.  However, this increased complexity also provides applications more flexibility. ",
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
                "value":" In a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/jan-31-2020-react-16-3"
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
                "value":" I wrote about new features introduced in React 16.3.  To demonstrate the new features, I created a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://\nreact16-3.demo.jarombek.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"demo React application",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Since the demo only contained client-side code (JavaScript, CSS, HTML, PNGs) I decided it was a perfect candidate to be hosted on Amazon S3.  For the remainder of this article I'll discuss the process of hosting my demo application on Amazon S3 along with the challenges I faced. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Building the Infrastructure with Terraform"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Building the Infrastructure with Terraform",
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
                "value":" I built the AWS infrastructure necessary to host my static website with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/\nblog?query=terraform&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Terraform is a multi-cloud Infrastructure as Code (IaC) tool used to automate cloud infrastructure deployments.  This article assumes you know how to use Terraform and work with AWS.  If you need an introduction to Terraform, check out my first ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://\njarombek.com/blog/sep-3-2018-terraform"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Terraform",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" article. ",
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
                "value":" The infrastructure I built with Terraform is shown in the diagram below. ",
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
                    "src":"https://asset.jarombek.com/posts/2-15-20-infrastructure.png"
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
                "value":" When a client (usually a web browser) accesses content, it goes through a CloudFront distribution to an S3 bucket.  The S3 bucket finds the resource matching the user's request, and passes it back through CloudFront and finally to the client. ",
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
                "value":" In my infrastructure, the S3 bucket (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"react16-3.demo.jarombek.com",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") contains four resources.  These resources are the files generated from my React applications Webpack build. They are ",
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
                        "value":"index.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", ",
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
                        "value":"app.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", ",
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
                        "value":"styles.js",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
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
                        "value":"styles.css",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following HCL code is the Terraform configuration for these objects. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_s3_bucket_object\" \"app-js\" {\n  bucket = aws_s3_bucket.react16-3-demo-jarombek.id\n  key = \"app.js\"\n  source = \"assets/app.js\"\n  etag = filemd5(\"${path.cwd}/assets/app.js\")\n  content_type = \"application/javascript\"\n}\n\nresource \"aws_s3_bucket_object\" \"index-html\" {\n  bucket = aws_s3_bucket.react16-3-demo-jarombek.id\n  key = \"index.html\"\n  source = \"assets/index.html\"\n  etag = filemd5(\"${path.cwd}/assets/index.html\")\n  content_type = \"text/html\"\n}\n\nresource \"aws_s3_bucket_object\" \"styles-css\" {\n  bucket = aws_s3_bucket.react16-3-demo-jarombek.id\n  key = \"styles.css\"\n  source = \"assets/styles.css\"\n  etag = filemd5(\"${path.cwd}/assets/styles.css\")\n  content_type = \"text/css\"\n}\n\nresource \"aws_s3_bucket_object\" \"styles-js\" {\n  bucket = aws_s3_bucket.react16-3-demo-jarombek.id\n  key = \"styles.js\"\n  source = \"assets/styles.js\"\n  etag = filemd5(\"${path.cwd}/assets/styles.js\")\n  content_type = \"application/javascript\"\n}\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"index.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the entrypoint to the React application, loading the JS and CSS files in its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"<script>",
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
                "value":"<link>",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tags, respectively.  All four files are part of the same S3 bucket.  Its configuration is listed next. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_s3_bucket\" \"react16-3-demo-jarombek\" {\n  bucket = \"react16-3.demo.jarombek.com\"\n  acl = \"public-read\"\n  policy = file(\"${path.module}/policy.json\")\n\n  tags = {\n    Name = \"react16-3.demo.jarombek.com\"\n    Environment = \"production\"\n  }\n\n  website {\n    index_document = \"index.html\"\n    error_document = \"index.html\"\n  }\n}\n",
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
                "value":" The name of the S3 bucket (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"react16-3.demo.jarombek.com",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") matches its domain name.  The static websites index and error document are specified as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index.html",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This means accessing the domain from its base URL (",
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
                        "value":"react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instead of ",
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
                        "value":"react16-3.demo.jarombek.com/index.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") still returns the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"index.html",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object from the S3 bucket. ",
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
                "value":" One layer up from the S3 bucket is a CloudFront distribution.  A CloudFront distribution is a CDN that delivers static assets through edge nodes hosted throughout the world",
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
                "value":".  CloudFront speeds up access times to static assets for clients under the premise of data locality.  With assets stored on edge nodes closer to your geographical location than the S3 bucket (in my case hosted in an AWS data center in North Carolina, USA), assets can be accessed quicker. ",
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
                "value":" I created ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/master/\njarombek-com-react16-3-demo/main.tf#L59-L217"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"two CloudFront distributions",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" for the ",
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
                        "value":"react16-3.demo.jarombek.com",
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
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"www.react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" domains. They both access assets from the same S3 bucket. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_acm_certificate\" \"wildcard-demo-jarombek-com-cert\" {\n  domain = \"*.demo.jarombek.com\"\n}\n\nresource \"aws_cloudfront_distribution\" \"react16-3-demo-jarombek-distribution\" {\n  origin {\n    domain_name = aws_s3_bucket.react16-3-demo-jarombek.bucket_regional_domain_name\n    origin_id = \"origin-bucket-${aws_s3_bucket.react16-3-demo-jarombek.id}\"\n\n    s3_origin_config {\n      origin_access_identity = aws_cloudfront_origin_access_identity.origin-access-identity.cloudfront_access_identity_path\n    }\n  }\n\n  # Whether the cloudfront distribution is enabled to accept user requests\n  enabled = true\n\n  # Which HTTP version to use for requests\n  http_version = \"http2\"\n\n  # Whether the cloudfront distribution can use ipv6\n  is_ipv6_enabled = true\n\n  comment = \"react16-3.demo.jarombek.com CloudFront Distribution\"\n  default_root_object = \"index.html\"\n\n  # Extra CNAMEs for this distribution\n  aliases = [\"react16-3.demo.jarombek.com\"]\n\n  # The pricing model for CloudFront\n  price_class = \"PriceClass_100\"\n\n  default_cache_behavior {\n    # Which HTTP verbs CloudFront processes\n    allowed_methods = [\"HEAD\", \"GET\"]\n\n    # Which HTTP verbs CloudFront caches responses to requests\n    cached_methods = [\"HEAD\", \"GET\"]\n\n    forwarded_values {\n      cookies {\n        forward = \"none\"\n      }\n      query_string = false\n    }\n\n    target_origin_id = \"origin-bucket-${aws_s3_bucket.react16-3-demo-jarombek.id}\"\n\n    # Which protocols to use when accessing items from CloudFront\n    viewer_protocol_policy = \"redirect-to-https\"\n\n    # Determines the amount of time an object exists in the CloudFront cache\n    min_ttl = 0\n    default_ttl = 3600\n    max_ttl = 86400\n  }\n\n  custom_error_response {\n    error_code = 404\n    error_caching_min_ttl = 30\n    response_code = 200\n    response_page_path = \"/\"\n  }\n\n  restrictions {\n    geo_restriction {\n      restriction_type = \"none\"\n    }\n  }\n\n  # The SSL certificate for CloudFront\n  viewer_certificate {\n    acm_certificate_arn = data.aws_acm_certificate.wildcard-demo-jarombek-com-cert.arn\n    ssl_support_method = \"sni-only\"\n  }\n\n  tags = {\n    Name = \"react16-3-demo-jarombek-com-cloudfront\"\n    Environment = \"production\"\n  }\n}\n\nresource \"aws_cloudfront_origin_access_identity\" \"origin-access-identity\" {\n  comment = \"react16-3.demo.jarombek.com origin access identity\"\n}\n",
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
                "value":" I only listed the ",
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
                        "value":"react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" distribution above because the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/master/jarombek-com-react16-3-demo\n/main.tf#L141-L217"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"www.react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" distribution is identical except for its ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aliases",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which are ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[\"www.react16-3.demo.jarombek.com\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instead of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"[\"react16-3.demo.jarombek.com\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  I could probably spend an entire article discussing CloudFront distribution configurations, however all you need to know for this demo is that it optimizes the retrieval of S3 objects. ",
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
                "value":" The final piece of the static website infrastructure is Route53 DNS records for the domains and ACM certificates for using HTTPS.  The Route53 records are shown below and the ACM certificate infrastructure is viewable in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" jarombek-com-infrastructure",
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
                    "href":"https://github.com/AJarombek/terraform-modules/tree/master/acm-certificate"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" terraform-modules",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repositories. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"data \"aws_route53_zone\" \"jarombek\" {\n  name = \"jarombek.com.\"\n}\n\nresource \"aws_route53_record\" \"demo-jarombek-a\" {\n  name = \"react16-3.demo.jarombek.com.\"\n  type = \"A\"\n  zone_id = data.aws_route53_zone.jarombek.zone_id\n\n  alias {\n    evaluate_target_health = false\n    name = aws_cloudfront_distribution.react16-3-demo-jarombek-distribution.domain_name\n    zone_id = aws_cloudfront_distribution.react16-3-demo-jarombek-distribution.hosted_zone_id\n  }\n}\n\nresource \"aws_route53_record\" \"www-demo-jarombek-a\" {\n  name = \"www.react16-3.demo.jarombek.com.\"\n  type = \"A\"\n  zone_id = data.aws_route53_zone.jarombek.zone_id\n\n  alias {\n    evaluate_target_health = false\n    name = aws_cloudfront_distribution.www-react16-3-demo-jarombek-distribution.domain_name\n    zone_id = aws_cloudfront_distribution.www-react16-3-demo-jarombek-distribution.hosted_zone_id\n  }\n}\n",
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
                "value":" The full Terraform configuration is viewable on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\njarombek-com-infrastructure/blob/master/jarombek-com-react16-3-demo"
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
        "el":"sectiontitle",
        "attributes":{
            "title":"S3 Static Website Challenges"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"S3 Static Website Challenges",
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
                "value":" One of the biggest issues I faced when setting up S3 to host a static website was redirecting ",
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
                        "value":"www",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" prefixed HTTPS requests to my S3 bucket.  I read tutorials mentioning that two S3 buckets should be created, one with the main domain (",
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
                        "value":"react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and another with the www prefixed subdomain (",
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
                        "value":"www.react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":")",
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
                "value":".  Unfortunately this solution didn't work due to my configuration using CloudFront. ",
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
                "value":" Since CloudFront creates proxy servers which retrieve and cache assets from S3, a different approach is needed to route www prefixed traffic to the same assets as base domain traffic.  The solution is actually quite simple.  Two CloudFront distributions are created instead of two S3 buckets.  Both CloudFront distributions retrieve assets from the same underlying S3 bucket. ",
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
                "value":" Another challenge arose when navigating through the React application and refreshing the page in a browser. CloudFront and S3's default behavior is to return whatever static asset is located at the path provided by the request.  For example, if a browser navigates to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com/\nstyles.css"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"react16-3.demo.jarombek.com/styles.css",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", CloudFront accesses the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"styles.css",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object from the S3 bucket. ",
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
                "value":" With React Router, the URL changes whenever a new page is accessed.  For example, a user can navigate from the home page (",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"https://react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to a Context API demo page (",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com/context"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" https://react16-3.demo.jarombek.com/context",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  However, if a user refreshes the page, routing won't be handled by React Router since its only available on the client side in a static website.  Therefore, the routing is handled by CloudFront. ",
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
                "value":" By default, CloudFront looks for objects in S3 that correspond to the resource requested.  In the case of ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://react16-3.demo.jarombek.com/context"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"https://react16-3.demo.jarombek.com/context",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" CloudFront will look for an object in S3 with the name ",
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
                        "value":"context",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  This object does not exist, so a 404 HTTP error is returned to the client.  Users of the website receive an error page similar to the one below. ",
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
                    "src":"https://asset.jarombek.com/posts/2-15-20-error-page.png"
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
                "value":" A generic XML error page isn't an ideal scenario.   In this case there shouldn't be an error page displayed at all.  React Router should perform the routing no matter which URL is used under the ",
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
                        "value":"react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" domain.  With React Router in control, the proper pages will be loaded for valid paths and redirects to the home page will occur for invalid paths. ",
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
                "value":" The solution to my problem is quite simple.  If a 404 HTTP error occurs when loading assets from CloudFront, serve the default asset in the S3 bucket.  In my case the default asset is ",
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
                        "value":"index.html",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which in turn will load JavaScript files that bootstrap React and React Router.  By adding the following configuration to my CloudFront distributions, React Router always navigates users to the proper webpage. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"custom_error_response {\n  error_code = 404\n  error_caching_min_ttl = 30\n  response_code = 200\n  response_page_path = \"/\"\n}\n",
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
                "value":" Learning the intricacies between static and dynamic websites helps when making infrastructure decisions for applications.  Depending on the application, choosing a static website hosted on S3 can be a cheaper and easier option, resulting in zero maintenance of a web server.  You can check out the full infrastructure for my static React web application on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/\nblob/master/jarombek-com-react16-3-demo"
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

postName = "feb-15-2020-s3-react";
postDate = new Date('2020-02-15T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Hosting a Static React Application on Amazon S3",
    description: `In this article I discuss the process of hosting my demo application on Amazon 
        S3 along with the challenges I faced.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "AWS S3",
            picture: "https://asset.jarombek.com/logos/awss3.svg",
            color: "awss3"
        },
        {
            name: "AWS CloudFront",
            picture: "https://asset.jarombek.com/logos/aws-cloudfront.svg",
            color: "awscloudfront"
        },
        {
            name: "Terraform",
            picture: "https://asset.jarombek.com/logos/terraform.png",
            color: "terraform"
        },
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "React",
            picture: "https://asset.jarombek.com/logos/react.png",
            color: "react"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Disadvantages of a static website\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Static_web_page#Disadvantages_of_a_static_website",
            link: "https://en.wikipedia.org/wiki/Static_web_page#Disadvantages_of_a_static_website"
        },
        {
            startName: "\"Dynamic web page\", ",
            endName: "",
            linkName: "https://en.wikipedia.org/wiki/Dynamic_web_page",
            link: "https://en.wikipedia.org/wiki/Dynamic_web_page"
        },
        {
            startName: "\"What Is Amazon CloudFront?\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
            link: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
        },
        {
            startName: "\"Example: Setting Up a Static Website Using a Custom Domain\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html",
            link: "https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html"
        },
        {
            startName: "\"(Optional) Configuring a Webpage Redirect\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html",
            link: "https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
