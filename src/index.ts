import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("Connected user !!");

  socket.on("message", (e) => {
    console.log(e.toString());
  });
});
