### Overview

Root directory of the server-side source code.  Takes care of the application API and server-side 
React.js rendering.

### Files

| Filename    | Description                                                        |
|-------------|--------------------------------------------------------------------|
| `dao`       | MongoDB data access functions.                                     |
| `fn`        | Invokes AWS Lambda functions.                                      |
| `model`     | MongoDB object models using Mongoose.                              |
| `public`    | Public files for the web application.                              |
| `route`     | Server API Routes invoked by the front-end.                        |
| `server.js` | Entrypoint for the server along with server-side rendering config. |