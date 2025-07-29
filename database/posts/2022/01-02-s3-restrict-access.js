/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 12/28/2021
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
                "value":" For years, unsecured AWS S3 buckets have been a major source of data leaks in the Software Engineering industry.  Enter a Google search for ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://bit.ly/3ECsVSc"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"\"S3 bucket public data leak\"",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and you will find countless examples of hackers leaking data from Amazon S3. ",
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
                "value":" The biggest reason why S3 data leaks are so common is that objects (files) in S3 buckets are easily misconfigured to be public over HTTP.  When an S3 bucket is public, its contents are available for anyone in the world to view.  For engineers new to AWS and the S3 service, the mistake of configuring S3 buckets to be public is very common. ",
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
                "value":" Over the years, AWS has provided many ways to secure S3 buckets and provide explicit warnings to users if S3 buckets are not properly protected.  AWS accounts can even have account-wide restrictions, preventing the creation of public buckets. ",
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
                "value":" In my AWS account, most of the S3 buckets have restrictions for who can access their contents.  However, just a week ago, some buckets in my account were public, such as those used for static websites or those containing assets such as images and fonts for my websites.  While there isn't much danger in keeping these buckets public - they don't contain any sensitive data - it is still best practice to keep them private.  This article discusses how to restrict access to these S3 buckets, while still keeping their contents publicly available via HTTP.  All the infrastructure changes  I made to restrict S3 access are written with Terraform. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Problem to Solve"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Problem to Solve",
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
                "value":" In the AWS Console, if an S3 bucket is publicly accessible, a warning icon is displayed. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"1-2-22-public-buckets.png",
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
                "value":" This warning is meant to deter users from leaving S3 buckets without any security.  In 2018, AWS added a \"Block Public Access\" feature to S3, allowing engineers to restrict the creation of public buckets account-wide.  If an account's \"Block Public Access\" settings aren't restrictive towards public S3 buckets, the AWS Console provides additional warning messages. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"1-2-22-block-public-access.png",
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
                "value":" The public S3 buckets shown in my account are used as static websites.  These static websites are distributed and given domain names using the AWS CloudFront CDN.  For example, one of my S3 buckets, ",
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
                "value":", is distributed using CloudFront and accessible at the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.react16-3.demo.jarombek.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"https://www.react16-3.demo.jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" domain.  Back in February 2020, I wrote an ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-15-2020-s3-react"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" about how to write the AWS infrastructure for this static website using Terraform. ",
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
                "value":" S3 buckets are also given Amazon domain names.  For example, my bucket has the domain ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://react16-3.demo.jarombek.com.s3-website-us-east-1.amazonaws.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" http://react16-3.demo.jarombek.com.s3-website-us-east-1.amazonaws.com/",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  For buckets with public access, anyone with internet access can read the contents of the S3 bucket from this URL. ",
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
                "value":" If you navigate to my S3 bucket's Amazon domain name now, you will receive a HTTP 403 Forbidden error message.  This is because my S3 bucket is now private.  However, at the time I took the AWS Console screenshots above (back when the ",
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
                "value":" bucket was still public), navigating to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"http://react16-3.demo.jarombek.com.s3-website-us-east-1.amazonaws.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" http://react16-3.demo.jarombek.com.s3-website-us-east-1.amazonaws.com/",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" showed the same static website as the official CloudFront URL, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.react16-3.demo.jarombek.com/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"https://www.react16-3.demo.jarombek.com",
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
        "el":"inlineimage",
        "attributes":{
            "filename":"1-2-22-static-website.png",
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
                "value":" While re-evaluating my S3 infrastructure recently, I decided it would be a good idea to make all my S3 buckets, even those for static websites, private.  This way, their contents would be inaccessible through Amazon URLs, but still accessible via the CloudFront CDN.  I also decided to change the \"Block Public Access\" settings for my account.  This way, no S3 buckets can be made public in my account in the future. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Restricting Access to S3 Buckets"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Restricting Access to S3 Buckets",
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
                "value":" To demonstrate how I made my S3 buckets private, I'll again use the ",
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
                "value":" bucket as an example.  The Terraform infrastructure for this bucket exists on GitHub in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-infrastructure/tree/v1.1.0/jarombek-com-react16-3-demo"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"jarombek-com-infrastructure",
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
                "value":" The first piece of infrastructure to create is the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/\nblob/v1.1.0/jarombek-com-react16-3-demo/main.tf#L47-L61"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"S3 bucket",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is provisioned with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_s3_bucket",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Terraform resource. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_s3_bucket\" \"react16-3-demo-jarombek\" {\n  bucket = \"react16-3.demo.jarombek.com\"\n  acl = \"private\"\n\n  tags = {\n    Name = \"react16-3.demo.jarombek.com\"\n    Environment = \"production\"\n    Application = \"react-16-3-demo\"\n  }\n\n  website {\n    index_document = \"index.html\"\n    error_document = \"index.html\"\n  }\n}\n",
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
                "value":" In regards to security, the important argument in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_s3_bucket",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"  is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"acl",
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
                "value":"acl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configures the Access Control List (ACL) value for the S3 bucket.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"acl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" defaults to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"private",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which gives the owner of the S3 bucket (my AWS account) full access to the bucket and provides no access to everyone else.  Back when my S3 buckets were publicly accessible, the value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"acl",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" was ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"public",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The full list of ACL options for S3 buckets are available in the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/\nAmazonS3/latest/userguide/acl-overview.html#canned-acl"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS documentation",
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
                "value":" The next piece of infrastructure is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/v1.1.0/\njarombek-com-react16-3-demo/main.tf#L85-L92"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Public Access Block configuration for the S3 bucket",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which is provisioned with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_s3_bucket_public_access_block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_s3_bucket_public_access_block\" \"react16-3-demo-jarombek\" {\n  bucket = aws_s3_bucket.react16-3-demo-jarombek.id\n\n  block_public_acls = true\n  block_public_policy = true\n  restrict_public_buckets = true\n  ignore_public_acls = true\n}\n",
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
                "value":" Public Access Block configurations can be applied account-wide or to a specific S3 bucket.  The example above is configured for an individual bucket.  Public Access Block configurations contain four settings, represented by the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"block_public_acls",
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
                "value":"block_public_policy",
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
                "value":"restrict_public_buckets",
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
                "value":"ignore_public_acls",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" arguments.  Giving these arguments a value of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"true",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" turns them on, while values of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"false",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (the default value) keep them off.  Since I want these settings applied for additional security, I assign them values of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"true",
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
                "value":" For full details on what these four Public Access Block settings achieve, check out the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html#access-control-block-public-access-options"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" AWS documentation",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" on the subject.  The gist is that with these settings applied, requests to create buckets or objects in buckets with public IAM policies or public ACLs is prohibited. ",
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
                "value":" As I mentioned earlier, Public Access Block settings can be applied to individual S3 buckets or an entire AWS account. If Public Access Block settings are applied to both, the more restrictive of the two settings is enforced.  For example, if the account-wide settings are turned on and the settings for a S3 bucket, let's say ",
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
                "value":", are turned off, the restrictiveness of the account-wide settings are applied to the bucket",
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
                "value":" Account-wide Public Access Block settings are created using a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_s3_account_public_access_block",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource.  The account-wide settings for my AWS account, which exist in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/global-aws-infrastructure/blob/v2.0.3/s3/main.tf#L52-L57"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" global-aws-infrastructure",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" repository, are shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_s3_account_public_access_block\" \"access\" {\n  block_public_acls = true\n  block_public_policy = true\n  restrict_public_buckets = true\n  ignore_public_acls = true\n}\n",
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
                "value":" With account-wide Public Access Block settings turned on, the AWS Console displays the following screen: ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"1-2-22-block-public-access-on.png",
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
                "value":" After the Public Access Block settings are properly configured, I create a CloudFront distribution for the S3 bucket with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_cloudfront_distribution",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource.  The CloudFront distribution also has a corresponding ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_cloudfront_origin_access_identity",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource.  Shortened versions of both are shown below, with the full code available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-infrastructure/blob/v1.1.0/jarombek-com-react16-3-demo/main.tf#L94-L174"
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
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_cloudfront_distribution\" \"react16-3-demo-jarombek-distribution\" {\n  origin {\n    domain_name = aws_s3_bucket.react16-3-demo-jarombek.bucket_regional_domain_name\n    ...\n\n    s3_origin_config {\n      origin_access_identity = aws_cloudfront_origin_access_identity.origin-access-identity.cloudfront_access_identity_path\n    }\n  }\n\n  ...\n}\n\nresource \"aws_cloudfront_origin_access_identity\" \"origin-access-identity\" {\n  comment = \"react16-3.demo.jarombek.com origin access identity\"\n}\n",
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
                "value":" As far as security is concerned, the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_cloudfront_origin_access_identity",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource is important for granting CloudFront access to a private S3 bucket.  It is assigned to the CloudFront distribution with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"origin.s3_origin_config.origin_access_identity",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" Terraform attribute.  The CloudFront Origin Access Identity (OAI) is a user that can be assigned to CloudFront distributions.  The key is to provide read access on a private S3 bucket to an OAI, thus giving CloudFront access to the bucket's contents. ",
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
                "value":" OAIs are given access to S3 buckets using ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/\nv1.1.0/jarombek-com-react16-3-demo/main.tf#L63-L83"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"S3 bucket policies",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", created with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_s3_bucket_policy",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" resource.  The following Terraform configuration gives the OAI access to my S3 bucket. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"HCL"
        },
        "value":"resource \"aws_s3_bucket_policy\" \"react16-3-demo-jarombek\" {\n  bucket = aws_s3_bucket.react16-3-demo-jarombek.id\n  policy = data.aws_iam_policy_document.react16-3-demo-jarombek.json\n}\n\ndata \"aws_iam_policy_document\" \"react16-3-demo-jarombek\" {\n  statement {\n    sid = \"CloudfrontOAI\"\n\n    principals {\n      identifiers = [aws_cloudfront_origin_access_identity.origin-access-identity.iam_arn]\n      type = \"AWS\"\n    }\n\n    actions = [\"s3:GetObject\", \"s3:ListBucket\"]\n    resources = [\n      aws_s3_bucket.react16-3-demo-jarombek.arn,\n      \"${aws_s3_bucket.react16-3-demo-jarombek.arn}/*\"\n    ]\n  }\n}\n",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_iam_policy_document",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" data source creates the S3 bucket policy document.  It provides ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"s3:GetObject",
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
                "value":"s3:ListObject",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" access to the OAI  (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"aws_cloudfront_origin_access_identity.origin-access-identity.iam_arn",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":")  for the ",
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
                "value":" bucket. ",
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
                "value":" After all this infrastructure is created, I have a private S3 bucket, whose contents are still accessible to the public through a CloudFront distribution.  With all my public s3 buckets made private, the AWS console lists them as follows: ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"1-2-22-private-buckets.png",
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
                "value":" All the infrastructure shown in this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/v1.1.0/jarombek-com-react16-3-demo"
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
                "value":" Keeping S3 buckets private, even when they hold publicly accessible assets such as static website files, is critical for cloud infrastructure security.  The approach of using a CloudFront OAI to access a private S3 bucket is very easy to configure, and AWS recommends implementing it. ",
                "children":null
            }
        ]
    }
];

preview = content.slice(0, 2);

postName = "jan-2-2022-s3-restrict-access";
postDate = new Date('2022-01-02T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Restricting Access to Static Website Amazon S3 Buckets using Terraform",
    description: `This article discusses how to restrict access to these S3 buckets, while still keeping their contents 
        publicly available via HTTP.  All the infrastructure changes needed to restrict S3 access are written using 
        Terraform.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "AWS S3",
            picture: "https://asset.jarombek.com/logos/awss3.svg",
            color: "awss3"
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
            name: "AWS CloudFront",
            picture: "https://asset.jarombek.com/logos/aws-cloudfront.svg",
            color: "awscloudfront"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"Blocking public access to your Amazon S3 storage\", ",
            endName: "",
            linkName: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
            link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
