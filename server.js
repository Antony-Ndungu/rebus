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
import socketIo from "socket.io";
import http from "http";
import controllers from "./api/controllers";
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true }).then((connection) => {
    console.log("Database connection successful.");
    connection.collections['sockets'].drop(function (err) {
        if(err){
            console.log(err);
            return;
        }
        console.log('sockets collection dropped');
    });
}).catch((err) => {
    console.log("Database connection failed:", err);
});


const app = express();
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
    outputStyle: "compressed"
}));

const io = socketIo(server);
const controller = controllers["sockets"];
io.on("connection", socket => {
    socket.on("details", data => {
        const mySocket = {
            socketId: socket.id,
            businessShortcode: data.businessShortcode
        }
        controller.findOne({ socketId: socket.id }, (err, socket) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!socket) {
                controller.create(mySocket, (err, dbSocket) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            }
        });
    });
    socket.on("disconnect", () => {
        controller.findOne({ socketId: socket.id }, (err, socket) => {
            if (err) {
                console.log(err);
                return;
            }
            if (socket) {
                controller.remove(socket._id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            }
        });
    });
});


app.use("/api/payments", (req, res, next) => {
    req.body.io = io;
    next();
});
app.post("/mpesa", (req, res) => {
    console.log(req.body);
});
app.use("/api", api);
app.use(express.static("public"));
app.get("/", (req, res) => {
    const file = fs.createReadStream(__dirname + "/public/index.html");
    file.pipe(res);
});

app.get("/*", (req, res) => {
    const context = {};
    serverRender(req, res, context);
});

server.listen(config.port, () => console.log("server listening on port", config.port));