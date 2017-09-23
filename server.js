import config from "./config";
import express from "express";
import api from "./api";

const server = express();

server.use("/api", api);

server.listen(config.port, () => console.log("Server listening on port", config.port));