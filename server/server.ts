import express from "express";
import http from "http";
import cors from "cors";

import { Server, Socket } from "socket.io";

import setUpErrorListeners from "./socket/socketListeners/setUpErrorListeners";
import setUpSocketListeners from "./socket/socketListeners/setUpSocketListeners";
import setUpClientListeners from "./socket/socketListeners/setUpClientListeners";
import getActualRooms from "./utils/getActualRooms";
//we create a new server that can take Restful and sockets by passing the app to the server and then creating a new io server instance
const app = express();
const server = http.createServer(app);

const clientDomain = "http://127.0.0.1:5500";

app.use(cors({ origin: clientDomain }));

const io = new Server(server, {
  cors: { origin: clientDomain, methods: ["GET", "POST"] },
});

io.on("connection", (socket: Socket) => {
  console.log(`Connection established with ${socket.id}`);

  setUpErrorListeners(socket);
  setUpSocketListeners(socket);
  setUpClientListeners(socket, io);
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
