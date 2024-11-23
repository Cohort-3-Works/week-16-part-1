// import
import { WebSocketServer } from "ws";

//create
const wss = new WebSocketServer({ port: 8000 });

//event handler

wss.on("connection", function (socket) {
  console.log("User connected");
  socket.send("Hello sir !!");
  setInterval(() => {
    socket.send("current price of solana is " + Math.random());
  }, 500);
});
