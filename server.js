import config from "./config";
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

/*server.get("/dashboard", (req, res) => {
    fs.createReadStream(path.join(__dirname, "public/dashboard.html")).pipe(res);
});*/

server.listen(config.port, () => console.log("Server listening on port", config.port));