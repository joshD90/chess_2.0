import express from "express";
import http from "http";
import cors from "cors";

import { Server, Socket } from "socket.io";

import setUpErrorListeners from "./socket/socketListeners/setUpErrorListeners";
import setUpSocketListeners from "./socket/socketListeners/setUpSocketListeners";
import setUpClientListeners from "./socket/socketListeners/setUpClientListeners";

import setupSendTick from "./utils/setupSendTick";
//we create a new server that can take Restful and sockets by passing the app to the server and then creating a new io server instance
const app = express();
const server = http.createServer(app);

const clientDomain = "http://127.0.0.1:5500";
// const clientDomain = "https://chess2.joshuadanceywebdev.ie";

app.use(cors({ origin: clientDomain }));

const io = new Server(server, {
  cors: { origin: clientDomain, methods: ["GET", "POST"] },
});
//set up our interval tick on the start of the server independent of any connections
setInterval(() => io.emit("tick"), 1000);

io.on("connection", (socket: Socket) => {
  console.log(`Connection established with ${socket.id}`);

  setUpErrorListeners(socket);
  setUpSocketListeners(socket);
  setUpClientListeners(socket, io);
});

const PORT = 8802;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
