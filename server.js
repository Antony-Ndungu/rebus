import config from "./config";
import serverRender from "./utils/serverRender";
import express from "express";
import api from "./api";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import sassMiddleware from "node-sass-middleware";
import morgan from "morgan";

mongoose.connect(config.database, err => {
    if(err){
        console.log("Connection to MongoDB failed.", err.message);
        return;
    }
        console.log("Connected to MongoDB successfully.");
});


const server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));

server.use(sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
    outputStyle: "compressed"
}));

server.use("/api", api);
server.use(express.static("public"));
server.get("/", (req, res) => {
    const file = fs.createReadStream(__dirname + "/public/index.html");
    file.pipe(res);
});

server.get("/*", (req, res) => {
    const context = {};
    serverRender(req, res, context);
});

server.listen(config.port, () => console.log("Server listening on port", config.port));