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
                "value":" For my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MEAN stack prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I had to implement user authentication.  For example, if a user wanted to create a new post, I had to make sure that they were signed in.  After looking at multiple solutions I settled on JSON Web Tokens (JWT) for authentication. ",
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
                "value":" JWT's are used to securely transfer a series of claims between parties",
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
                "value":".  In my application, these claims determine whether a user is signed in.  The parties that these claims are transferred between are the Node.js/Express web server and my Angular 5 client. ",
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
                "value":" For my ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/mean-client-prototype"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"MEAN stack prototype",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" I had to implement user authentication.  For example, if a user wanted to create a new post, I had to make sure that they were signed in.  After looking at multiple solutions I settled on JSON Web Tokens (JWT) for authentication. ",
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
                "value":" JWT's are used to securely transfer a series of claims between parties",
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
                "value":".  In my application, these claims determine whether a user is signed in.  The parties that these claims are transferred between are the Node.js/Express web server and my Angular 5 client. ",
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
                "value":" A JWT is a Base64 encoded JSON object along with an algorithm used for signing.  It contains a header, payload, and signature",
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
                "value":".  These three components are separated by a period in the Base64 encoding like so: ",
                "children":null
            }
        ]
    },
    {
        "el":"span",
        "attributes":{
            "className":"code-span"
        },
        "value":"eyJhbGciOiJSUzI1NiJ9.\neyJpYXQiOjE1MjAzOTI5NDIsImV4cCI6MTUyMDM5NjU0Miwic3ViIjoiNWE5NjE2IyZThiZDBiZDVlIn0.\ndGQU3FsuuOy9-IEEMHGTPB1bCOOk_28d_vofg56h9\n",
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
                "value":" In the above JWT the first line is the header, the second line is the payload, and third line the signature.  The header carries claims about the JWT itself.  In my use case, there was only one claim  - the algorithm to sign the JWT.  This algorithm was RS256, which is RSA along with SHA256.  More on this later. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n    \"alg\": \"RS256\"\n}\n",
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
                "value":" The payload contains user data about the JWT.  This is the data that I wanted transferred in the first place.  In my implementation the JWT payload has three claims.  The first is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"sub",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" claim, which identifies the subject that the claim is about.  In my application, the subject is the user that is logged in.  The second claim is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"iat",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" claim, which specifies when the JWT was issued. The final claim is the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"exp",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" claim, which is the expiration time of the JWT.  Both the issued time and expiration time are specified in UNIX time, or the number of seconds since midnight January 1st, 1970.  Here is a sample decoded payload from my application: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JSON"
        },
        "value":"{\n    \"iat\": 1520392942,\n    \"exp\": 1520396542,\n    \"sub\": \"5a9616e6c5631b2e8bd0bd5e\"\n}\n",
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
                "value":" If you look at the issued time and expiration time closely, you can see there is a difference of 3,600 between the two.  That means the JWT was valid for an hour after it was issued. ",
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
                "value":" The signature, also known as JSON Web Signature, is a really cool portion of JWTs that helps make them so powerful.  The signature is how you determine the authenticity of a JWT",
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
                "value":".  The signature does not prevent users from decoding the header and payload of the JWT.  Instead it is used to perform authentication based on which algorithm is used to sign the JWT.  The algorithm used in my implementation is RSA. ",
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
                "value":" RSA is an algorithm that generates two keys: a public key and a private key",
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
                "value":".  The private key can both create a signed JWT and authenticate it, while the public key can only authenticate it ",
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
                "value":".  This creates some interesting application possibilities since you can give applications a public key and restrict them from signing JWTs.  My Node.js/Express server simply held both the private and public key, using the private one to sign JWTs and the public one to authenticate. ",
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
                "value":" Next I will go through the JWT setup for my MEAN stack. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"MEAN Stack implementation"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"MEAN Stack implementation",
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
                "value":" The first step in setting up the MEAN stack with JWT is to install some dependencies that simplify JWT incorporation and generate both the private and public keys with RSA. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Bash"
        },
        "value":"#!/usr/bin/env bash\n\n# Dependency used to setup JSON Web Token user authentication\nnpm install jsonwebtoken --save\n\n# Handle middleware commonly used with JWT\nnpm install express-jwt --save\n\n# Generate a new RS256 key for a JSON Web Token\n# ssh-keygen is used for creating auth pairs for SSH\nssh-keygen -t rsa -b 4096 -f private.key\n\n# Generate public key from the private key\nopenssl rsa -in private.key -pubout -outform PEM -out private.key.pub\n",
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
                "value":" The next step is to create a login REST endpoint in the Node.js backend.  If the correct username and password is sent to this endpoint, a new JWT is created and sent back to the user.  The subject in the JWT payload is the ID of the user in MongoDB. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const express = require('express');\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt-nodejs');\nconst jwtUtils = require('../utils/jwt');\n\nconst routes = (User) => {\n\n    const authRouter = express.Router();\n\n    authRouter.route('/login')\n        .post((req, res) => {\n\n            const username = req.body.username;\n            const password = req.body.password;\n\n            getToken().catch(error => {console.error(error); res.status(500).send(error)});\n\n            async function getToken() {\n\n                const user = await User.findOne({username: username}).exec();\n\n                // Synchronously compare the password submitted and the hashed value in MongoDB\n                if(bcrypt.compareSync(password, user.password)) {\n\n                    console.info(\"Valid Username and Password Entered!\");\n\n                    // Create the JWT string for authentication\n                    const jwtBearerToken = jwt.sign({}, jwtUtils.RSA_PRIVATE_KEY, {\n                        algorithm: 'RS256',\n                        expiresIn: 3600,\n                        subject: user._id.toString()\n                    });\n\n                    // Send the client the JWT along with its expiration date.  Another\n                    // popular option is to send JWT in a cookie instead of the HTTP body\n                    res.status(200).json({\n                        idToken: jwtBearerToken,\n                        expiresIn: 3600\n                    });\n\n                } else {\n                    res.status(401).send('Not Authorized');\n                }\n            }\n        });\n\n    return authRouter;\n};\n\nmodule.exports = routes;\n",
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
                "value":" I use the private key to sign the JWT.  I separated out variables that reference the private key, public key, and JWT authentication function in a utility class. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"const expressJwt = require('express-jwt');\nconst path = require('path');\nconst fs = require('fs');\n\n// Private key for the RS256 encryption signature\nconst RSA_PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '../private.key'));\n\nexports.RSA_PRIVATE_KEY = RSA_PRIVATE_KEY;\n\n// Public key for the RS256 encryption signature\nconst RSA_PUBLIC_KEY = fs.readFileSync(path.join(__dirname, '../private.key.pub'));\n\nexports.RSA_PUBLIC_KEY = RSA_PUBLIC_KEY;\n\n// Middleware for dealing with JWT tokens on HTTP requests\nexports.checkIfAuthenticated = expressJwt({\n    secret: RSA_PUBLIC_KEY\n});\n\nmodule.exports = exports;\n",
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
                "value":" That authentication function is used on all routes that require a JWT: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"JavaScript"
        },
        "value":"postRouter.route('/')\n    .post(checkIfAuthenticated, (req, res) => {/* Endpoint Implementation */});\n",
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
                "value":" Now the backend is completely set up.  Let's switch to the Angular 5 frontend.  I created an authentication service that sends a request to the login endpoint for a JWT.  If it gets a JWT as a response, it places it in localStorage.  The service also has helper methods for logging out (removing the JWT from localStorage) and checking if the JWT hasn't expired (the users session is still valid). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"TypeScript"
        },
        "value":"import {Injectable} from '@angular/core';\nimport {HttpClient} from \"@angular/common/http\";\nimport 'rxjs/add/operator/map';\nimport {Observable} from \"rxjs/Observable\";\nimport * as moment from \"moment\";\n\n@Injectable()\nexport class AuthenticationService {\n\n    private SECOND = 'second';\n\n    constructor(private http: HttpClient) { }\n\n    // Login a user and create a new session\n    login(username: string, password: string) {\n\n    return this.http.post<any>(`/api/auth/login`, { username: username, password: password})\n        .map(jwtAuth => {\n\n            // Add the JWT to localStorage\n            if (jwtAuth) {\n\n                // Get the time JWT expires by adding the current time and the expires in time\n                const expiresAt: moment.Moment = moment().add(this.SECOND, jwtAuth.expiresIn);\n\n                localStorage.setItem('id_token', jwtAuth.idToken);\n                localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));\n                localStorage.setItem('username', username);\n\n                return new Observable(data => {\n                    data.next('Signed In!');\n                });\n            } else {\n                return new Observable(data => {\n                    data.error('Invalid Username or Password');\n                });\n            }\n        });\n    }\n\n    // Log out the current user by removing the session from LocalStorage\n    static logout() {\n        localStorage.removeItem('id_token');\n        localStorage.removeItem('expires_at');\n        localStorage.removeItem('username');\n    }\n\n    // Determine if the user is logged in based on the JWT expiration date\n    static isLoggedIn() {\n        const loggedIn: boolean = moment().isBefore(this.getExpiration());\n\n        if (!loggedIn && localStorage.getItem('id_token')) {\n            AuthenticationService.logout()\n        }\n\n        return loggedIn;\n    }\n\n    // Get the expiration date of the JWT session from localStorage\n    static getExpiration(): moment.Moment {\n        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));\n        return moment(expiresAt);\n    }\n}\n",
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
                "value":" When navigating to routes in the application that are only accessible to signed in users, the Angular components check to see if the JWT is still valid.  If its not valid, users are redirected back to the login form. ",
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
                "value":" Finally on all outgoing HTTP requests I attached the JWT to the request body.  This is so that the JWT can be verified by the Node.js/Express server. I set up this functionality with an ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"HttpInterceptor",
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
            "language":"TypeScript"
        },
        "value":"import {Injectable} from \"@angular/core\";\nimport {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from \"@angular/common/http\";\nimport {Observable} from \"rxjs/Observable\";\n\n// Intercept outbound HTTP requests.  If user is authorized, add a new header to HTTP request.\n@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n\n    private LOG_TAG: string = '[AuthInterceptor]';\n\n    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {\n\n        const idToken = localStorage.getItem('id_token');\n\n        if (idToken) {\n\n            // If the JWT exists, set it as an HTTP header on outbound requests\n            const authReq = req.clone({\n                headers: req.headers.set(\"Authorization\", \"Bearer \" + idToken)\n            });\n\n            return next.handle(authReq);\n        } else {\n\n            // If there is no JWT, send original HTTP request without an Authorization header\n            return next.handle(req);\n        }\n    }\n\n}\n",
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
                "value":"Conclusion",
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
                "value":" I'm sure this won't be the last time I explore JWT.  I'm also really interested in how exactly the authentication algorithms work!  Huge shout out to Angular University",
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
                "value":" and Auth0",
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
                "value":" for helping me get set up with JWT! ",
                "children":null
            }
        ]
    }
];

postName = "mar-11-2018-jwt";
postDate = new Date('2018-03-11T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "What I Learned About JSON Web Tokens",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "JWT",
            picture: "https://asset.jarombek.com/logos/jwt.png",
            color: "jwt"
        },
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "JSON",
            picture: "https://asset.jarombek.com/logos/json.png",
            color: "json"
        },
        {
            name: "Angular",
            picture: "https://asset.jarombek.com/logos/angular.png",
            color: "angular"
        },
        {
            name: "Node.js",
            picture: "https://asset.jarombek.com/logos/nodejs.png",
            color: "nodejs"
        },
        {
            name: "Express",
            picture: "https://asset.jarombek.com/logos/express.png",
            color: "express"
        },
        {
            name: "RSA"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Sebastián Peyrott, ",
            endName: " (Auth0, 2017), https://auth0.com/e-books/jwt-handbook, 5",
            linkName: "JWT Handbook",
            link: "https://auth0.com/e-books/jwt-handbook"
        },
        {
            startName: "",
            endName: ", 23",
            linkName: "Ibid.",
            link: "https://auth0.com/e-books/jwt-handbook"
        },
        {
            startName: "",
            endName: ", 30",
            linkName: "Ibid.",
            link: "https://auth0.com/e-books/jwt-handbook"
        },
        {
            startName: "",
            endName: ", 33",
            linkName: "Ibid.",
            link: "https://auth0.com/e-books/jwt-handbook"
        },
        {
            startName: "\"Angular Security - Authentication With JSON Web Tokens (JWT): The Complete Guide\", ",
            endName: "",
            linkName: "https://blog.angular-university.io/angular-jwt-authentication/",
            link: "https://blog.angular-university.io/angular-jwt-authentication/"
        },
        {
            startName: "\"JWT\", ",
            endName: "",
            linkName: "https://jwt.io/",
            link: "https://jwt.io/"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});