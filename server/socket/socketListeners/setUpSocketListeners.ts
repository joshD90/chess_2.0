import { Socket } from "socket.io";

const setUpSocketListeners = (socket: Socket) => {
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
};
export default setUpSocketListeners;
