import { Socket } from "socket.io";

import { MyServer } from "../../types/socketTypes";

import createNewRoomName from "./createNewRoomName";
import getActualRooms from "../../utils/getActualRooms";
import sendStartGame from "../startGame/sendStartGame";

const joinSpareRoom = (socket: Socket, io: MyServer) => {
  const roomMap = io.of("/").adapter.rooms;

  const actualRooms = getActualRooms(io);
  //check are there any rooms that have only 1 person in them
  const spareRoom = actualRooms.find((room) => {
    const thisRoom = roomMap.get(room);
    return thisRoom.size < 2;
  });
  //if so join this room
  if (spareRoom) {
    socket.join(spareRoom);
    sendStartGame(socket, io);
    return;
  }
  //if not join a new room
  const roomToJoin = createNewRoomName(actualRooms);
  socket.join(roomToJoin);
};

export default joinSpareRoom;
