import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";
import getSocketDataObject from "../startGame/getSocketDataObject";

//see whether the users time is the same as whats in the room
const checkTime = (socket: Socket, io: MyServer, room: string): boolean => {
  const roomMap = io.of("/").adapter.rooms;

  const timeObject = getSocketDataObject(roomMap, room, io, "time");

  //compare the string version of the timeObject first value, convert our time number to string to match the types
  if (Object.values(timeObject)[0] !== socket.data.time.toString())
    return false;

  return true;
};

export default checkTime;
