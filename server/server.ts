import express from "express";
import http from "http";
import cors from "cors";

import { Server, Socket } from "socket.io";
//we create a new server that can take Restful and sockets by passing the app to the server and then creating a new io server instance
const app = express();
const server = http.createServer(app);

const clientDomain = "http://127.0.0.1:5500";

app.use(cors({ origin: clientDomain }));

const io = new Server(server, {
  cors: { origin: clientDomain, methods: ["GET", "POST"] },
});

io.on("connection", (socket: Socket) => {
  console.log("connection established");
  socket.emit("message", "Welcome to the Server");
  socket.emit("message-for-module", "YAY YOUR FUNCTION IS WORKING");
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
