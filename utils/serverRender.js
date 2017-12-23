import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import store from "../src/store";
import { StaticRouter, Route } from "react-router";
import Login from "../src/containers/Login";


export default (req, res, context) => {
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <Route exact path="/login" component={Login} />
            </Provider>
        </StaticRouter>
    );

    if (context.url) {
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </head>
            <body class="w3-white">
                <div id="app"></div>
                <script src="bundle.js"></script>
            </body>
        </html>`
    );
    res.end();
};