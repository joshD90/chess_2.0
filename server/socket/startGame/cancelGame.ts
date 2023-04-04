import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";
import getMyRoom from "../../utils/getMyRoom";

const cancelGame = (socket: Socket, io: MyServer): void => {
  const myRoom = getMyRoom(socket, io);

  socket.leave(myRoom);
};

export default cancelGame;
