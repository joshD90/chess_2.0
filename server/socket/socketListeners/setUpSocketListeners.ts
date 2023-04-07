import { Socket } from "socket.io";

const setUpSocketListeners = (socket: Socket) => {
  socket.on("disconnecting", (obj) => {
    console.log("client disconnected");
    const roomJustLeft = [...socket.rooms];

    socket.to(roomJustLeft).emit("other-user-left");
  });
};
export default setUpSocketListeners;
