import { Socket } from "socket.io-client";

const sendRematch = (socket: Socket) => {
  socket.emit("rematch");
};
export default sendRematch;
