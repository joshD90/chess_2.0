import { MyServer } from "../types/socketTypes";
import { Socket } from "socket.io";
import getMyRoom from "./getMyRoom";
//when we find my room or find socket id's we are just dealing with the string so we want to get the actual socket object
const getOtherPlayerInRoom = (socket: Socket, io: MyServer): string => {
  const myRoom = getMyRoom(socket, io);

  const playerIds = io.of("/").adapter.rooms.get(myRoom);

  const otherPlayer = [...playerIds].find((id) => id !== socket.id);

  return otherPlayer;
};

export default getOtherPlayerInRoom;
