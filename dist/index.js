"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import
const ws_1 = require("ws");
//create
const wss = new ws_1.WebSocketServer({ port: 8000 });
//event handler
wss.on("connection", function (socket) {
    console.log("User connected");
    socket.send("Hello sir !!");
    setInterval(() => {
        socket.send("current price of solana is " + Math.random());
    }, 500);
});
