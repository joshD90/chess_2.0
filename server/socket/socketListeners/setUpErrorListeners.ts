import { Socket } from "socket.io";

const setUpErrorListeners = (socket: Socket) => {
  socket.on("connect_error", (error) => {
    console.error("Socket connection error:", error);
  });

  socket.on("connect_timeout", () => {
    console.error("Socket connection timeout");
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
};

export default setUpErrorListeners;
