import { Socket } from "socket.io-client";

const setUpErrorListeners = (socket: Socket) => {
  socket.on("error", (error) => {
    console.log(error);
  });

  socket.on("connect_error", (error) => {
    console.log(error);
  });
};

export default setUpErrorListeners;
