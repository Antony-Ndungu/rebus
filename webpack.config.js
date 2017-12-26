const path = require("path");
const webpack = require("webpack")
const HTMLPlugin = require("html-webpack-plugin")

module.exports =  {
    entry: {
        bundle: "./src/index.js",
        vendor: [ "classnames", "lodash", "prop-types", "react", "react-dom", "react-redux", "react-router", "react-router-dom", "redux",
        "redux-thunk", "validator"
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
                loader: "babel-loader"
            }
        ]
    },
    node: {
        dns: "mock",
        net: "mock"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"]
        }),
        new HTMLPlugin({
            template: "./src/index.html"
        })
    ]
}