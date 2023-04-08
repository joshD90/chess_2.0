import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";
import getMyRoom from "../../utils/getMyRoom";
import assignColors from "./assignColors";
import getNameObject from "./getSocketDataObject";

const sendStartGame = (socket: Socket, io: MyServer) => {
  const roomMap = io.of("/").adapter.rooms;
  const myRoom = getMyRoom(socket, io);

  const colorObject = assignColors(roomMap, myRoom, io);
  const nameObject = getNameObject(roomMap, myRoom, io, "name");

  const startGameObject = {
    colors: colorObject,
    names: nameObject,
    time: socket.data.time,
  };

  io.in(myRoom).emit("start-game", startGameObject);
};

export default sendStartGame;
