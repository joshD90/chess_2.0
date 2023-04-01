import getMyRoom from "../../utils/getMyRoom";
import { Socket } from "socket.io";
import { EndGameObject, MyServer } from "../../types/socketTypes";

const sendEnd = (socket: Socket, io: MyServer, endGameObj: EndGameObject) => {
  const myRoom = getMyRoom(socket, io);
  //we set our socket to deciding because they may wish to remain in the socket room for another while before choosing the next game
  socket.data.deciding = "true";

  io.to(myRoom).emit("end-game", endGameObj);
};
export default sendEnd;
