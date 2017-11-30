import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, Route } from "react-router";
import Login from "../src/containers/Login";


export default (req, res, context ) => {
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Route exact path="/login" component={Login}/>
        </StaticRouter>
    );

    if(context.url){
        res.writeHead(301, {
            Location: context.url
        });
        return;
    }

    res.write(
        `<!DOCTYPE html>
        <html>
            <head>
                <title>Rebus</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
            </head>
            <body class="w3-white">
                <div class="w3-container">
                    <div id="app"></div>
                </div>
                <script src="bundle.js"></script>
            </body>
        </html>`
    );
    res.end();
};