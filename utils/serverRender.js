import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import store from "../src/store";
import { StaticRouter, Route } from "react-router";
import Login from "../src/containers/Login";
import fs from "fs";
import path from "path";


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
    fs.readFile(path.resolve(__dirname,"../public/index.html"), (err, data) => {
        if(err){
            res.write("<h1>Something went wrong.</h1>: " + err);
            res.end();
            return;
        }
        res.write(data);
        res.end();
    });
    
};