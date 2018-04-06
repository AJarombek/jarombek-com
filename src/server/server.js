import express from 'express';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/App';

/**
 * The main file for the Express/Node.js server.  The server provides an API and
 * server side rendering
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

global.React = React;

const html = renderToString(<App/>);

const sendHtmlPage = (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Andrew Jarombek</title>
            <link rel="stylesheet" href="/client/bundle.css">
        </head>
        <body>
            <div id="react-container">${html}</div>
            <script src="/client/vendor.js"></script>
            <script src="/client/bundle.js"></script>
        </body>
        </html>
    `);
};

const app = express();

app.use(express.static(path.join(__dirname, '..')));
app.use(sendHtmlPage);

const port = process.env.port || 8080;

app.listen(port, () => {
   console.info(`Jarombek.com running on port ${port}`);
});