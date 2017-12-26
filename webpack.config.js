const path = require("path");
const webpack = require("webpack")
const HTMLPlugin = require("html-webpack-plugin")

module.exports =  {
    entry: {
        bundle: ["babel-polyfill", "./src/index.js"],
        vendor: [ "preact-compat", "classnames", "lodash", "prop-types", "react-redux", "react-router", "react-router-dom", "redux",
        "redux-thunk", "validator", "axios", "jsonwebtoken", "babel-polyfill"
        ]
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader: "babel-loader",
                exclude:/node_modules/
            }
        ]
    },
    node: {
        dns: "mock",
        net: "mock"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"]
        }),
        new HTMLPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    resolve: {
        "alias": {
          "react": "preact-compat",
          "react-dom": "preact-compat"
        }
    }
}