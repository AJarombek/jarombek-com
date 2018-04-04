import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/App';

global.React = React;

const html = renderToString(<App/>);

const sendHtmlPage = (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>React.js Webpack Seed</title>
        </head>
        <body>
            <div id="react-container">${html}</div>
            <script src="bundle.js"></script>
        </body>
        </html>
    `);
};

const app = express();

app.use(express.static('../client'));
app.use(sendHtmlPage);

const port = process.env.port || 3000;

app.listen(port, () => {
   console.info(`Jarombek.com running on port ${port}`);
});