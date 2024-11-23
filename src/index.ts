// import
import { WebSocketServer } from "ws";

//create
const wss = new WebSocketServer({ port: 8000 });

//event handler

wss.on("connection", function (socket) {
  console.log("User connected");
  socket.send("Hello sir !!");
});
