import { Socket } from "socket.io-client";

const setUpServerActions = (socket: Socket) => {
  socket.on("connect", () => {
    console.log("connected to server");
  });

  socket.on("disconnect", () => {
    console.log("disconnected from server");
  });
};

export default setUpServerActions;
