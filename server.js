import config from "./config";
import express from "express";
import api from "./api";
import mongoose from "mongoose";
import bodyParser from "body-parser";
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

server.use("/api", api);

server.listen(config.port, () => console.log("Server listening on port", config.port));