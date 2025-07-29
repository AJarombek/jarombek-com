/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 10/26/2019
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
                "value":" From October 2018 to May 2019, I moved the infrastructure for both my websites to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=AWS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".   The process for building and tearing down this infrastructure is automated with IaC, specifically ",
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
                "value":".  I've had a lot of fun working with Terraform and learning the different design patterns for infrastructure in the cloud. ",
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
                "value":" After my infrastructure was built, I realized I needed a way to test that my IaC was behaving as expected.  The obvious solution to this requirement was a unit test suite.  I implemented this unit test suite in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=python&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with the help of the AWS SDK.  This article explains why I took the time to write unit tests and  walks through of the basics of testing AWS infrastructure in Python. ",
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
                "value":" From October 2018 to May 2019, I moved the infrastructure for both my websites to ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=AWS&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".   The process for building and tearing down this infrastructure is automated with IaC, specifically ",
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
                "value":".  I've had a lot of fun working with Terraform and learning the different design patterns for infrastructure in the cloud. ",
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
                "value":" After my infrastructure was built, I realized I needed a way to test that my IaC was behaving as expected.  The obvious solution to this requirement was a unit test suite.  I implemented this unit test suite in ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog?query=python&page=1"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" with the help of the AWS SDK.  This article explains why I took the time to write unit tests and  walks through of the basics of testing AWS infrastructure in Python. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Why Build Unit Tests"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Why Build Unit Tests?",
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
                "value":" Over the three and a half years I've been a software engineer, I've slowly realized how valuable unit tests are.  In my early applications, unit tests were noticeably absent.  Unit tests finally started appearing in my repositories this spring.  Now it is mandatory for new applications to have full unit test coverage and I've begun adding tests to older applications. ",
                "children":null
            }
        ]
    },
    {
        "el":"definition",
        "attributes":{
            "word":"Unit Test"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" A Unit Test is an assertion that a unit of code is working as expected",
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
                "value":".  Units of code can be a single line, a function, a class, or an application.  Unit tests are run on a regular basis. This includes (but is not limited to) code commits, application deployments, and scheduled intervals. ",
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
                "value":" There are three main reasons why I hopped on the unit test bandwagon.  The first reason is that writing unit tests helps catch poorly written or useless code.  When I write code, my brain tends to wander and get sidetracked.  Often I write a section of code over the course of days or weeks.  I usually don't have the time to go back through every line of code and make sure its well written or still being used. However, when I write unit tests and have to formulate test scenarios for every line of a program, smelly code becomes easy to identify. ",
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
                "value":" The second reason is that unit tests help catch recurring bugs before they make it into a production build. A good practice is to create a unit test every time a bug is found in an application.  Writing tests for a bug helps developers learn their root cause and provides quick detection for their return in the future. ",
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
                "value":" The third reason is that unit tests ease the pain of upgrading technology versions in an application, whether it be a language, framework, or library.  Unit tests give us peace of mind that all the corners of our application are still functional after software upgrades occur. ",
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
                "value":" I firmly believe the upfront costs of building unit tests are worthwhile in the long run. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Unit Testing AWS Infrastructure"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Unit Testing AWS Infrastructure",
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
                "value":" I wrote unit tests for my Terraform infrastructure using Python and the ",
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
                        "value":"boto3",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" AWS SDK. I took two different approaches for setting up these unit tests.  For my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nglobal-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"global",
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
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" SaintsXCTF",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" AWS infrastructure, I reinvented the wheel and created custom test suites.  By the time I wrote my ",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" infrastructure, I figured there must be a better approach.  I decided to scrap the custom test suite and used Python's built-in ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" library instead.  I'll demonstrate both approaches next, followed by some unit test function examples. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Custom Approach"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Custom Approach",
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
                "value":" My first approach to unit testing infrastructure involved reinventing the wheel in regards to building a test suite.  I first defined an entrypoint to the unit tests.  Executing a single ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/saints-xctf-infrastructure/blob/master/test/src/masterTestSuite.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Python file",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" runs all the unit tests I wrote: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# masterTestSuite.py\n\nimport masterTestFuncs as Test\nfrom bastion import bastionTestSuite as Bastion\nfrom acm import acmTestSuite as ACM\nfrom databases import databaseTestSuite as Database\nfrom iam import iamTestSuite as IAM\nfrom route53 import route53TestSuite as Route53\nfrom webserver import webserverTestSuite as WebServer\n\n# List of all the test suites\ntests = [\n  Bastion.bastion_test_suite,\n  ACM.acm_test_suite,\n  Database.database_test_suite,\n  IAM.iam_test_suite,\n  Route53.route53_test_suite,\n  WebServer.webserver_test_suite\n]\n\n# Create and execute a master test suite\nTest.testsuite(tests, \"Master Test Suite\")\n",
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
                "value":" This entrypoint file is referred to as the \"master test suite.\"  The master test suite invokes child test suites which are grouped by AWS resource type.  For example, all my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\nsaints-xctf-infrastructure/blob/master/test/src/acm/acmTestSuite.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ACM (AWS Certificate Manager) infrastructure tests",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" are found in ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"acmTestSuite",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" and are invoked by calling ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ACM.acm_test_suite",
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
            "language":"Python"
        },
        "value":"# acmTestSuite.py\n\nimport masterTestFuncs as Test\nfrom acm import acmTestFuncs as Func\n\ntests = [\n  lambda: Test.test(Func.acm_dev_wildcard_cert_issued, \"ACM SaintsXCTF Dev Wildcard Certificate Issued\"),\n  lambda: Test.test(Func.acm_wildcard_cert_issued, \"ACM SaintsXCTF Wildcard Certificate Issued\"),\n  lambda: Test.test(Func.acm_cert_issued, \"ACM SaintsXCTF Certificate Issued\")\n]\n\n\ndef acm_test_suite() -> bool:\n  \"\"\"\n  Execute all the tests related to the ACM HTTPS certificates\n  :return: True if the tests succeed, False otherwise\n  \"\"\"\n  return Test.testsuite(tests, \"ACM Test Suite\")\n",
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
                "value":" Notice that the master test suite and ACM test suite have the same structure.  Both test suites contain a list of tests and a function which executes the tests.  The main difference is that the master test suite executes a list of ",
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
                        "value":"test suites",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" while the ACM test suite executes a list of ",
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
                        "value":"unit tests",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Test suites are executed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Test.testsuite()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function and unit tests are executed with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Test.test()",
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
        "value":"def testsuite(tests: list, title: str) -> bool:\n  \"\"\"\n  Wrapper function to execute any number of logically grouped tests\n  :param tests: a list of tests to execute\n  :param title: description of the test suite\n  :return: True if the test suite succeeds, false otherwise\n  \"\"\"\n  print(f\"\\u293F Executing Test Suite: {title}\")\n\n  success = 0\n  failure = 0\n\n  for test_func in tests:\n    if test_func():\n      success += 1\n    else:\n      failure += 1\n\n  suitepassed = failure < 1\n\n  if suitepassed:\n    print(f\"\\u2713 Test Suite Success: {title} ({success} passed, {failure} failed)\")\n  else:\n    print(f\"\\u274C Test Suite Failure: {title} ({success} passed, {failure} failed)\")\n\n  return suitepassed\n\n\ndef test(func: Callable[[], Any], title: str) -> bool:\n  \"\"\"\n  Wrapper function for testing an AWS resource\n  :param func: a function to execute, must return a boolean value\n  :param title: describes the test\n  :return: True if the test succeeds, false otherwise\n  \"\"\"\n\n  result = func()\n\n  if result:\n    print(f\"\\u2713 Success: {title}\")\n    return True\n  else:\n    print(f\"\\u274C Failure: {title}\")\n    return False\n",
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
                "value":" A nice aspect of my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure/blob/master/test/src/\nmasterTestFuncs.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"custom approach",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is that a child test suite can be run as if it's the master test suite.  In this scenario, only the tests within the child test suite will execute. ",
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
                "value":" However, reinventing the unit test wheel didn't add much value to my tests.  Therefore, I decided to try a different approach for my ",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" infrastructure tests. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"unittest Approach"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"unittest Approach",
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
                "value":" My second approach to unit testing infrastructure involved the built-in Python ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" framework.  ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" has an additional component called a test runner.  The test runner orchestrates test suites and the execution of unit tests inside them",
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
                "value":".  My ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/jarombek-com-infrastructure/blob/master/test/src/runner.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"test runner",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is configured to execute all the test suites. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import unittest\nimport suites.acm as acm\nimport suites.iam as iam\nimport suites.route53 as route53\nimport suites.jarombekCom as jarombekCom\nimport suites.jarombekComAssets as jarombekComAssets\n\n# Create the test suite\nloader = unittest.TestLoader()\nsuite = unittest.TestSuite()\n\n# Add test files to the test suite\nsuite.addTests(loader.loadTestsFromModule(acm))\nsuite.addTests(loader.loadTestsFromModule(iam))\nsuite.addTests(loader.loadTestsFromModule(route53))\nsuite.addTests(loader.loadTestsFromModule(jarombekCom))\nsuite.addTests(loader.loadTestsFromModule(jarombekComAssets))\n\n# Create a test runner and execute the test suite\nrunner = unittest.TextTestRunner(verbosity=3)\nresult = runner.run(suite)\n",
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
                "value":" In ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", test suites are subclasses of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TestCase",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".   ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"TestCase",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" provides assertion methods, setup and teardown methods, and test execution methods",
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
                "value":".  The following class is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-infrastructure/blob/master/test/src/suites/acm.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"test suite for ACM infrastructure tests",
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
            "language":"Python"
        },
        "value":"import unittest\nimport boto3\n\n\nclass TestACM(unittest.TestCase):\n\n  def setUp(self) -> None:\n    \"\"\"\n    Perform set-up logic before executing any unit tests\n    \"\"\"\n    self.acm = boto3.client('acm')\n    self.acm_certificates = self.acm.list_certificates(CertificateStatuses=['ISSUED'])\n\n  def test_dev_wildcard_cert_issued(self) -> None:\n    pass\n\n  def test_wildcard_cert_issued(self) -> None:\n    pass\n",
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
                "value":" With ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", much of the test suite setup code necessary in my custom approach is handled by the test framework.  This allows me to spend more time working on the unit tests themselves. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Unit Test Examples"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Unit Test Examples",
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
                "value":" If you want to explore the unit tests I created in depth, I recommend exploring ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/global-aws-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"my",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-infrastructure"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":" GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ",
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
                        "value":"repositories",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  As a quick example, the following two code snippets are my ACM tests for ",
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
                        "value":"saintsxctf.com",
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
                        "value":"jarombek.com",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The first is written using my custom unit test approach and the second is written using the ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" framework. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import boto3\n\nacm = boto3.client('acm')\nacm_certificates = acm.list_certificates(CertificateStatuses=['ISSUED'])\n\n\ndef acm_dev_wildcard_cert_issued() -> bool:\n  \"\"\"\n  Test that the dev wildcard ACM certificate exists\n  :return: True if the ACM certificate exists as expected, False otherwise\n  \"\"\"\n  for cert in acm_certificates.get('CertificateSummaryList'):\n    if cert.get('DomainName') == '*.dev.saintsxctf.com':\n      return True\n\n  return False\n\n\ndef acm_wildcard_cert_issued() -> bool:\n  \"\"\"\n  Test that the wildcard ACM certificate exists\n  :return: True if the ACM certificate exists as expected, False otherwise\n  \"\"\"\n  for cert in acm_certificates.get('CertificateSummaryList'):\n    if cert.get('DomainName') == '*.saintsxctf.com':\n      return True\n\n  return False\n\n\ndef acm_cert_issued() -> bool:\n  \"\"\"\n  Test that the main SaintsXCTF ACM certificate exists\n  :return: True if the ACM certificate exists as expected, False otherwise\n  \"\"\"\n  for cert in acm_certificates.get('CertificateSummaryList'):\n    if cert.get('DomainName') == 'saintsxctf.com':\n      return True\n\n  return False\n",
        "children":null
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import unittest\nimport boto3\n\n\nclass TestACM(unittest.TestCase):\n\ndef setUp(self) -> None:\n  \"\"\"\n  Perform set-up logic before executing any unit tests\n  \"\"\"\n  self.acm = boto3.client('acm')\n  self.acm_certificates = self.acm.list_certificates(CertificateStatuses=['ISSUED'])\n\ndef test_dev_wildcard_cert_issued(self) -> None:\n  \"\"\"\n  Test that the dev wildcard ACM certificate exists\n  \"\"\"\n  for cert in self.acm_certificates.get('CertificateSummaryList'):\n    if cert.get('DomainName') == '*.dev.jarombek.com':\n      self.assertTrue(True)\n      return\n\n  self.assertFalse(True)\n\ndef test_wildcard_cert_issued(self) -> None:\n  \"\"\"\n  Test that the wildcard ACM certificate exists\n  \"\"\"\n  for cert in self.acm_certificates.get('CertificateSummaryList'):\n    if cert.get('DomainName') == '*.saintsxctf.com':\n      self.assertTrue(True)\n      return\n\n  self.assertFalse(True)\n",
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
                "value":" If I could start my infrastructure unit tests over from scratch, I would write them all with the ",
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
                        "value":"unittest",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" framework.  I believe that developers should only reinvent the wheel under two scenarios - as a learning experience or if they think they can improve the existing technology.  While it was a good learning experience creating a unit test suite from scratch, it was very barebones functionality wise.  Because of this, it didn't assist me in learning the underworkings of test frameworks such as ",
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
                        "value":"unittest",
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
                "value":" I should've spent more time exploring the different approaches to Python unit tests before jumping into a custom solution.  There a many different unit testing frameworks for each programming language, and I will make sure to explore all my options before choosing one in future projects. ",
                "children":null
            }
        ]
    }
];

postName = "oct-26-2019-unit-test-aws-infrastructure";
postDate = new Date('2019-10-28T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Unit Testing AWS Infrastructure with Python",
    description: `After my infrastructure was built, I realized I needed a way to test that my IaC 
        was behaving as expected.  The obvious solution to this requirement was to build a unit test 
        suite.`,
    date: postDate,
    type: "Retrospective",
    views: postViews,
    tags: [
        {
            name: "AWS",
            picture: "https://asset.jarombek.com/logos/aws.png",
            color: "aws"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Infrastructure as Code"
        },
        {
            name: "Unit Test"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Alex Garcia & Viktor Farcic, ",
            endName: " (Birmingham, UK: Packt, 2015), 78",
            linkName: "Test-Driven Java Development",
            link: "https://www.oreilly.com/library/view/test-driven-java-development/9781783987429/"
        },
        {
            startName: "\"unittest — Unit testing framework\", ",
            endName: "",
            linkName: "https://docs.python.org/3/library/unittest.html",
            link: "https://docs.python.org/3/library/unittest.html"
        },
        {
            startName: "\"unittest.TestCase()\", ",
            endName: "",
            linkName: "https://docs.python.org/3/library/unittest.html#unittest.TestCase",
            link: "https://docs.python.org/3/library/unittest.html#unittest.TestCase"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});