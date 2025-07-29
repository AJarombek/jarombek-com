/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 3/19/2022
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
                "value":" In my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/feb-28-2022-swiftui-uikit"
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
                "value":", I discussed SwiftUI and how to integrate SwiftUI components into a UIKit application.  SwiftUI is a (relatively) new framework for creating user interfaces in Apple ecosystem applications.  User interfaces built using SwiftUI are configured completely in code with Swift.  In this article, I discuss how to UI test SwiftUI views in an iOS application. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Introduction to UI Testing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Introduction to UI Testing",
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
                "value":" UI tests are a form of integration tests and end to end tests where a user interface is tested in a manner similar to how a user interacts with it.  For example, a UI test may click a button in a user interface and assert that something appears on the screen in response.  I've discussed UI testing frameworks such as ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-11-2021-cypress-typescript"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Cypress",
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
                    "href":"https://jarombek.com/blog/\njul-26-2021-aws-synthetics-canary"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"AWS Synthetics Canary Functions (which utilize Selenium and Puppeteer)",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" in prior articles, both of which are designed for testing web applications. ",
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
                "value":" If you are looking for a step by step guide to start building UI tests in the XCode IDE, ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://www.hackingwithswift.com/articles/83/how-to-test-your-user-interface-using-xcode"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"this article",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a good place to start",
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
                "value":".  If you want to view the UI test code discussed in this article, it is available in my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios/tree/master/SaintsXCTFUITests"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"saints-xctf-ios",
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
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Writing UI Tests"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Writing UI Tests",
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
                "value":" The application under test is my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://apps.apple.com/nz/app/saintsxctf/id1298285886?platform=iphone"
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
                "value":" iOS app, which allows users to log their running exercises.  It was built for my college cross country and track & field teams.  The page under test is a SwiftUI view that allows users to create exercise logs.  This view is shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"2-26-22-exercise-log-view.png",
            "paddingtop":"true",
            "paddingbottom":"true",
            "maxwidth":"60%"
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
                "value":" In my codebase, there is a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios/blob/master/SaintsXCTFUITests/\nExerciseLogUITests.swift"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ExerciseLogUITests.swift",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file containing UI tests for the \"create exercise log\"  view.  UI tests are outlined with the following Swift code. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"// ExerciseLogUITests.swift\n\nimport XCTest\n\nclass ExerciseLogUITests: XCTestCase {\n\n    lazy var app = XCUIApplication()\n\n    override func setUpWithError() throws {\n        app.launchArguments += [\"UI_TESTING\"]\n        continueAfterFailure = false\n    }\n\n    override func tearDownWithError() throws {}\n\n    ...\n}\n",
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
                "value":"ExerciseLogUITests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class contains all the UI tests for the \"create exercise log\" view.  It also contains instance variables used in tests and functions that run before and after test functions.  For example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a variable of type ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCUIApplication",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", representing the iOS application. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is used extensively in tests to interact with the UI and make assertions about its appearance.  The function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setUpWithError()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked before each test function and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"tearDownWithError()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is invoked after each test function.  I don't use these methods for much, but they can be utilized for elaborate testing configurations.  Within ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setUpWithError()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app.launchArguments += [\"UI_TESTING\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" sets the environment for the application during UI tests. The line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"continueAfterFailure = false",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configures test methods to fail fast after they encounter their first error. ",
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
                "value":" The remainder of the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExerciseLogUITests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class contains UI test methods. Running these methods in XCode causes an iOS device simulator to run, opening the application and running test commands and assertions.  Let's look at a basic test. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"func testShowsCreateLog() throws {\n    app.launch()\n    signIn(app: app)\n\n    let tabBar = app.tabBars[\"Tab Bar\"]\n    tabBar.buttons[\"New Log\"].tap()\n\n    let scrollViewsQuery = app.scrollViews\n    let elementsQuery = scrollViewsQuery.otherElements\n\n    XCTAssert(elementsQuery.staticTexts[\"Create Exercise Log\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Average\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Exercise Name*\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Location\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Date*\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Exercise Type\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Distance\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Time\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Feel\"].exists)\n    XCTAssert(elementsQuery.staticTexts[\"Description\"].exists)\n\n    XCTAssert(elementsQuery.buttons[\"Create\"].exists)\n    XCTAssert(elementsQuery.buttons[\"Cancel\"].exists)\n}\n",
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
                "value":"testShowsCreateLog()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a UI test method asserting certain  input elements and buttons exist on a page.  It begins with the method call ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app.launch()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which launches the application in the device simulator.  It then invokes a custom helper function ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"signIn(app: app)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", which signs a test user into the application.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"tabBar.buttons[\"New Log\"].tap()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" navigates to the \"create exercise log\" page by clicking on a button containing the text \"New Log\". ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"testShowsCreateLog()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" uses a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function to make assertions about the UI.  For example, the assertion ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert(elementsQuery.staticTexts[\"Distance\"].exists)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ensures that the text \"Distance\" exists on the page.  Meanwhile, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert(elementsQuery.buttons[\"Create\"].exists)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ensures that the page has a button with the text \"Create\". This test is very simple, but more complicated tests still use the same building blocks; all tests interact with the UI and use ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to make assertions. ",
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
                "value":" Let's look at a slightly more complex UI test. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"func testSliderChangesFeel() throws {\n    app.launch()\n    signIn(app: app)\n\n    let tabBar = app.tabBars[\"Tab Bar\"]\n    tabBar.buttons[\"New Log\"].tap()\n\n    let scrollViewsQuery = app.scrollViews\n    let elementsQuery = scrollViewsQuery.otherElements\n    let feelSlider = elementsQuery.sliders[\"Feel\"]\n\n    XCTAssert(elementsQuery.staticTexts[\"Average\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.0)\n    XCTAssert(elementsQuery.staticTexts[\"Terrible\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.1)\n    XCTAssert(elementsQuery.staticTexts[\"Very Bad\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.2)\n    XCTAssert(elementsQuery.staticTexts[\"Bad\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.3)\n    XCTAssert(elementsQuery.staticTexts[\"Pretty Bad\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.4)\n    XCTAssert(elementsQuery.staticTexts[\"Mediocre\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.6)\n    XCTAssert(elementsQuery.staticTexts[\"Average\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.7)\n    XCTAssert(elementsQuery.staticTexts[\"Fairly Good\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.8)\n    XCTAssert(elementsQuery.staticTexts[\"Good\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.9)\n    XCTAssert(elementsQuery.staticTexts[\"Great\"].exists)\n\n    feelSlider.adjust(toNormalizedSliderPosition: 1.0)\n    XCTAssert(elementsQuery.staticTexts[\"Fantastic\"].exists)\n}\n",
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
                "value":"testSliderChangesFeel()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tests a slider on the \"create exercise log\" page. This slider is used to indicate how an athlete felt while exercising. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-12-22-feel-slider.gif",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"testSliderChangesFeel()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" starts off the same as the previous test.  It launches the application (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app.launch()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), signs in a test user (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"signIn(app: app)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":"), and navigates to the \"create exercise log\" page (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"buttons[\"New Log\"].tap()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":").  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"testSliderChangesFeel()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is a bit more complex than the previous test because it interacts with the page along with making assertions.  Method invocations to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"feelSlider.adjust(toNormalizedSliderPosition: _)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" move the slider to different positions.  Then, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ensures that text describing how the athlete felt is displayed on the screen. ",
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
                "value":" Let's look at one more UI test. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"func testNameFormValidation() throws {\n    app.launch()\n    signIn(app: app)\n\n    let tabBar = app.tabBars[\"Tab Bar\"]\n    tabBar.buttons[\"New Log\"].tap()\n\n    let scrollViewsQuery = app.scrollViews\n    let elementsQuery = scrollViewsQuery.otherElements\n\n    let nameField = elementsQuery.textFields[\"Name Field\"]\n    let nameValidationText = elementsQuery.staticTexts[\"Name Validation Text\"]\n\n    XCTAssertEqual(nameField.value as? String, \"\")\n    XCTAssertFalse(nameValidationText.exists)\n\n    nameField.tap()\n    nameField.typeText(\"5th Ave Mile\")\n\n    XCTAssertEqual(nameField.value as? String, \"5th Ave Mile\")\n    XCTAssertFalse(nameValidationText.exists)\n\n    nameField.typeText(String(repeating: XCUIKeyboardKey.delete.rawValue, count: 12))\n    XCTAssertEqual(nameField.value as? String, \"\")\n    XCTAssert(nameValidationText.exists)\n\n    nameField.typeText(\"A\")\n    XCTAssertEqual(nameField.value as? String, \"A\")\n    XCTAssertFalse(nameValidationText.exists)\n\n    nameField.typeText(String(repeating: XCUIKeyboardKey.delete.rawValue, count: 1))\n    XCTAssertEqual(nameField.value as? String, \"\")\n    XCTAssert(nameValidationText.exists)\n}\n",
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
                "value":"testNameFormValidation()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" tests that form validation is functional for an input field on the \"create exercise log\" page.  The test types text into a \"Name Field\" and then deletes it, asserting that a validation message appears when the text is gone. ",
                "children":null
            }
        ]
    },
    {
        "el":"inlineimage",
        "attributes":{
            "filename":"3-12-22-input-validation.gif",
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
                "value":" Again, this test starts the same as the previous two.  Later on in the test, two new assertion functions are used - ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssertEqual()",
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
                "value":"XCTAssertFalse()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Like any other testing library, XCTest provides many different assertion functions to make testing easier.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssertEqual(nameField.value as? String, \"\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" checks that the \"Name\" field is empty when the page first loads, and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssertFalse(nameValidationText.exists)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" checks that no validation text is shown when the page first loads. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nameField.typeText(\"5th Ave Mile\")",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" types a value into the \"Name\" field. Assertions follow, ensuring the text is displayed on the screen.  The text is then deleted by passing ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"String(repeating: XCUIKeyboardKey.delete.rawValue, count: 12)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"nameField.typeText()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The assertion ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert(nameValidationText.exists)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" ensures that the validation message is properly displayed. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Writing UI Tests with Network Stubs"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Writing UI Tests with Network Stubs",
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
                "value":" Many applications use API calls to populate their user interfaces with data.  The UI tests I've shown so far make API calls the same way as the production application.  However, sometimes we want to manipulate API responses to help perform UI tests.  For example, to test an error scenario, we can manipulate the API to return an error response instead of a typical successful response. ",
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
                "value":" In E2E testing frameworks such as Cypress, manipulated API responses (mocked/stubbed responses) are achieved with ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jarombek.com/blog/aug-11-2021-cypress-typescript"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"fixtures",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Fixtures are JSON files that represent API response objects.  When writing iOS UI tests, a similar approach can be implemented. ",
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
                "value":" The approach for mocking/stubbing API calls in UI tests is to start an API server while the tests run.  From this API, custom API responses can be implemented.  Classes for UI tests with stubbed API calls are configured slightly differently than classes with standard API calls.  The following code, which comes from my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/\nAJarombek/saints-xctf-ios/blob/master/SaintsXCTFUITests/ExerciseLogUIStubTests.swift"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ExerciseLogUIStubTests.swift",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, shows a class outline for my \"create exercise log\" page UI tests with stubbed API calls. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"import XCTest\n\nclass ExerciseLogUIStubTests: XCTestCase {\n\n    let apiStubs = Stubs()\n\n    lazy var app = XCUIApplication()\n\n    override func setUpWithError() throws {\n        try! apiStubs.server.start(9080)\n        app.launchArguments += [\"UI_STUB_TESTING\"]\n        continueAfterFailure = false\n    }\n\n    override func tearDownWithError() throws {\n        apiStubs.server.stop()\n    }\n\n    ...\n}\n",
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
                "value":" Compared to the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExerciseLogUITests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" class shown previously, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"ExerciseLogUIStubTests",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" adds another instance variable (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"apiStubs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") and additional lines of code to ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setUpWithError()",
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
                "value":"tearDownWithError()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Within ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"setUpWithError()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"try! apiStubs.server.start(9080)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" starts an API server on port 9080.  The UI sends requests to this API during tests.  The line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"app.launchArguments += [\"UI_STUB_TESTING\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" configures the environment of the application.  My application is configured to use the local API server running on port 9080 when the environment is ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"UI_STUB_TESTING",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Within ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"tearDownWithError()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", the line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"apiStubs.server.stop()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" stops the API server after testing completes. ",
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
                "value":" The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"apiStubs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance variable is used for both starting and stopping the local API server.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"apiStubs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is an instance of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Stubs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", a custom class containing an instance variable representing the API server and a factory function for stubbing API endpoints.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"Stubs",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" exists in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios/blob/master/SaintsXCTFUITests/\nStubs.swift"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Stubs.swift",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file and is shown below. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"import Foundation\nimport Swifter\n\nenum StubHttpVerb: String, CaseIterable, Identifiable {\n    case get\n    case post\n    case put\n    case delete\n\n    var id: String {\n        self.rawValue\n    }\n}\n\nenum StubHttpStatus: String, CaseIterable, Identifiable {\n    case ok\n    case badRequest\n\n    var id: String {\n        self.rawValue\n    }\n}\n\nclass Stubs {\n    let server = HttpServer()\n\n    func stubRequest(path: String, jsonData: Data, verb: StubHttpVerb = .get, status: StubHttpStatus = .ok) {\n        guard let json = try? JSONSerialization.jsonObject(with: jsonData, options: .mutableContainers) else {\n            return\n        }\n\n        let response: ((HttpRequest) -> HttpResponse) = { _ in\n            if status == .badRequest {\n                return HttpResponse.badRequest(.json(json as AnyObject))\n            } else {\n                return HttpResponse.ok(.json(json as AnyObject))\n            }\n        }\n\n        if verb == .post {\n            server.post[path] = response\n        } else if verb == .put {\n            server.put[path] = response\n        } else if verb == .delete {\n            server.delete[path] = response\n        } else {\n            server.get[path] = response\n        }\n    }\n}\n",
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
                "value":"Swifter",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" library is used to create a server in Swift code.  This server is represented in code by the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"server",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" instance variable, initialized with the line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"let server = HttpServer()",
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
                "value":"stubRequest()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the factory function for stubbing API endpoints that I mentioned previously. ",
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
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stubRequest()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" takes four arguments: ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"path",
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
                "value":"jsonData",
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
                "value":"verb",
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
                "value":"status",
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
                "value":"path",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the path of an endpoint in an API to be stubbed.  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"verb",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the HTTP verb of the endpoint and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"jsonData",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the JSON response body of the endpoint. ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"status",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is the HTTP status code returned by the API endpoint. ",
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
                "value":" Although ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stubRequest()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" doesn't return any value, it configures a new API endpoint with the desired configuration on the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"server",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" object.  Once execution of ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stubRequest()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is complete, this API endpoint can be invoked with HTTP requests.   For UI tests that utilize stubbed API calls, every API endpoint that the application calls is configured with ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"stubRequest()",
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
                "value":" Let's look at one of these tests.  The following test, from the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios/\nblob/v2.1.0/SaintsXCTFUITests/ExerciseLogUIStubTests.swift#L27-L81"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ExerciseLogUIStubTests.swift",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, tests the successful creation of an exercise log. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"func testCreateLogSuccess() throws {\n    apiStubs.stubRequest(path: \"/v2/logs/\", jsonData: LogStubs().createdData, verb: .post)\n    app.launch()\n    signIn(app: app)\n\n    let tabBar = app.tabBars[\"Tab Bar\"]\n    tabBar.buttons[\"New Log\"].tap()\n\n    let scrollViewsQuery = app.scrollViews\n    let elementsQuery = scrollViewsQuery.otherElements\n\n    let nameField = elementsQuery.textFields[\"Name Field\"]\n    let locationField = elementsQuery.textFields[\"Location Field\"]\n    let distanceField = elementsQuery.textFields[\"Distance Field\"]\n    let timeField = elementsQuery.textFields[\"Time Field\"]\n    let descriptionField = elementsQuery.textFields[\"Description Field\"]\n    let feelSlider = elementsQuery.sliders[\"Feel\"]\n\n    nameField.tap()\n    nameField.typeText(\"Central Park\")\n\n    locationField.tap()\n    locationField.typeText(\"New York, NY\")\n\n    distanceField.tap()\n    distanceField.typeText(\"6.3\")\n\n    timeField.tap()\n    timeField.typeText(\"43\")\n    timeField.typeText(\"21\")\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.7)\n\n    descriptionField.tap()\n    descriptionField.typeText(\"Wednesday AM Run\")\n\n    let alert = app.alerts[\"Exercise log created!\"]\n    XCTAssertFalse(alert.exists)\n\n    let createButton = elementsQuery.buttons[\"Create\"]\n    createButton.tap()\n\n    XCTAssert(elementsQuery.staticTexts[\"Average\"].waitForExistence(timeout: 2))\n    XCTAssert(alert.exists)\n\n    alert.buttons[\"Continue\"].tap()\n    XCTAssertFalse(alert.exists)\n\n    XCTAssertEqual(nameField.value as? String, \"\")\n    XCTAssertEqual(locationField.value as? String, \"\")\n    XCTAssertEqual(distanceField.value as? String, \"\")\n    XCTAssertEqual(timeField.value as? String, \"\")\n    XCTAssert(elementsQuery.staticTexts[\"Average\"].exists)\n    XCTAssertEqual(descriptionField.value as? String, \"\")\n}\n",
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
                "value":" The first line of the test, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"apiStubs.stubRequest(path: \"/v2/logs/\", jsonData: LogStubs().createdData, verb: .post)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", stubs an HTTP POST request to a ",
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
                        "value":"/v2/logs/",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" endpoint.  This endpoint is used to create an exercise log.  The remainder of the test fills values into the form displayed on the UI using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"typeText()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method.  Once all values are filled in, the \"Create\" button is clicked using the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"createButton.tap()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" command. ",
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
                "value":" Because the test uses a stubbed API call, no exercise log is created in the application database.  However, from the UI's perspective, it appears that the log was successfully created.  This is one of the great benefits of subbed API calls - they aren't dependent on and don't impact the backend system of an application. ",
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
                "value":" Let's look at another example.  The following test, also from the ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios/\nblob/v2.1.0/SaintsXCTFUITests/ExerciseLogUIStubTests.swift#L83-L140"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"ExerciseLogUIStubTests.swift",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" file, tests a scenario where an internal server error occurs while creating an exercise log. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Swift"
        },
        "value":"func testCreateLogFailure() throws {\n    apiStubs.stubRequest(path: \"/v2/logs/\", jsonData: LogStubs().createdData, verb: .post, status: .badRequest)\n    app.launch()\n    signIn(app: app)\n\n    let tabBar = app.tabBars[\"Tab Bar\"]\n    tabBar.buttons[\"New Log\"].tap()\n\n    let scrollViewsQuery = app.scrollViews\n    let elementsQuery = scrollViewsQuery.otherElements\n\n    let nameField = elementsQuery.textFields[\"Name Field\"]\n    let locationField = elementsQuery.textFields[\"Location Field\"]\n    let distanceField = elementsQuery.textFields[\"Distance Field\"]\n    let timeField = elementsQuery.textFields[\"Time Field\"]\n    let descriptionField = elementsQuery.textFields[\"Description Field\"]\n    let feelSlider = elementsQuery.sliders[\"Feel\"]\n\n    nameField.tap()\n    nameField.typeText(\"Central Park Hills\")\n\n    locationField.tap()\n    locationField.typeText(\"New York, NY\")\n\n    distanceField.tap()\n    distanceField.typeText(\"10.75\")\n\n    timeField.tap()\n    timeField.typeText(\"1\")\n    timeField.typeText(\"13\")\n    timeField.typeText(\"02\")\n\n    feelSlider.adjust(toNormalizedSliderPosition: 0.8)\n\n    descriptionField.tap()\n    descriptionField.typeText(\"Thursday Hill Workout\")\n\n    let alert = app.alerts[\"An unexpected error occurred while creating an exercise log.\"]\n    XCTAssertFalse(alert.exists)\n\n    let createButton = elementsQuery.buttons[\"Create\"]\n    createButton.tap()\n\n    XCTAssert(alert.waitForExistence(timeout: 2))\n\n    alert.buttons[\"Try Again\"].tap()\n    XCTAssert(alert.waitForExistence(timeout: 2))\n\n    alert.buttons[\"Cancel\"].tap()\n    XCTAssertFalse(alert.exists)\n\n    XCTAssertEqual(nameField.value as? String, \"Central Park Hills\")\n    XCTAssertEqual(locationField.value as? String, \"New York, NY\")\n    XCTAssertEqual(distanceField.value as? String, \"10.75\")\n    XCTAssertEqual(timeField.value as? String, \"1:13:02\")\n    XCTAssert(elementsQuery.staticTexts[\"Good\"].exists)\n    XCTAssertEqual(descriptionField.value as? String, \"Thursday Hill Workout\")\n}\n",
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
                "value":" Right off the bat, the stubbed API request for this test is configured to return an HTTP error code with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"status: .badRequest",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" argument.  Similar to the previous example, this test fills out the form shown on the UI and clicks the \"Create\" button to create a new exercise log.  The line ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"let alert = app.alerts[\"An unexpected error occurred while creating an exercise log.\"]",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" assigns a UI alert for an unexpected error to the variable ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"alert",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". The UI test checks to make sure this alert is shown on the UI when an API call fails unexpectedly.  This is accomplished with the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"XCTAssert(alert.waitForExistence(timeout: 2))",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function call, which asserts that the alert is displayed on the UI within two seconds. ",
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
                "value":" This test demonstrates another benefit of stubbed API calls - testing unexpected application states, such as when errors occur. ",
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
                "value":" Writing UI tests is a great way to automate the testing of an application.  With UI tests in place, applications have an additional safety net, ensuring they operate as users expect.  Creating UI tests for SwiftUI views is relatively easy, so it's definitely worth the effort.  All the UI test code shown in this article is available on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/saints-xctf-ios/tree/master/SaintsXCTFUITests"
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

postName = "mar-12-2022-swiftui-ui-testing";
postDate = new Date('2022-03-12T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "UI Testing SwiftUI Views",
    description: `In this article, I discuss how to UI test SwiftUI views in an iOS application.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Swift",
            picture: "https://asset.jarombek.com/logos/swift.png",
            color: "swift"
        },
        {
            name: "iOS",
            picture: "https://asset.jarombek.com/logos/ios.png",
            color: "ios"
        },
        {
            name: "SwiftUI",
            picture: "https://asset.jarombek.com/logos/swiftui.png",
            color: "swiftui"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"How to test your user interface using Xcode\", ",
            endName: "",
            linkName: "https://www.hackingwithswift.com/articles/83/how-to-test-your-user-interface-using-xcode",
            link: "https://www.hackingwithswift.com/articles/83/how-to-test-your-user-interface-using-xcode"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
