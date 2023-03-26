import { Socket } from "socket.io-client";

const setUpSocketListeners = (socket: Socket) => {
  socket.on("message-for-module", (message: string) => {
    console.log(message);
  });
  socket.on("message", (message) => {
    console.log("message is", message);
  });
};

export default setUpSocketListeners;
