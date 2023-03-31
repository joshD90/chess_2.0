import getMyRoom from "../../utils/getMyRoom";
import { Socket } from "socket.io";
import { EndGameObject, MyServer } from "../../types/socketTypes";

const sendEnd = (socket: Socket, io: MyServer, endGameObj: EndGameObject) => {
  const myRoom = getMyRoom(socket, io);

  io.to(myRoom).emit("end-game", endGameObj);
};
export default sendEnd;
