import { MyServer } from "../types/socketTypes";
import { Socket } from "socket.io";
import getActualRooms from "./getActualRooms";

const getMyRoom = (socket: Socket, io: MyServer): string => {
  const roomMap = io.of("/").adapter.rooms;
  const actualRooms = getActualRooms(io);
  //find the room name
  const myRoomName = actualRooms.find((room) => {
    const thisRoom = roomMap.get(room);
    if (thisRoom.has(socket.id)) return true;
    return false;
  });
  return myRoomName;
};

export default getMyRoom;
