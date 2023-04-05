import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";
import getMyRoom from "../../utils/getMyRoom";

const cancelGame = (socket: Socket, io: MyServer): void => {
  const myRoom = getMyRoom(socket, io);
  //reset our deciding
  socket.data.deciding = "";

  socket.leave(myRoom);

  io.to(myRoom).emit("other-user-left");
};

export default cancelGame;
