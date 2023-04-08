import getMyRoom from "../../utils/getMyRoom";
import { Socket } from "socket.io";
import { EndGameObject, MyServer } from "../../types/socketTypes";

const sendEnd = (socket: Socket, io: MyServer, endGameObj: EndGameObject) => {
  const myRoom = getMyRoom(socket, io);

  const roomSet = io.of("/").adapter.rooms.get(myRoom);
  if (!roomSet || roomSet.size === 0) return;
  //we set our socket to deciding because they may wish to remain in the socket room for another while before choosing the next game
  roomSet.forEach((player) => {
    io.sockets.sockets.get(player).data.deciding = "true";
  });

  io.to(myRoom).emit("end-game", endGameObj);
};
export default sendEnd;
