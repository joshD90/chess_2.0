import { Socket } from "socket.io";

import { MyServer } from "../../types/socketTypes";

import createNewRoomName from "./createNewRoomName";
import getActualRooms from "../../utils/getActualRooms";
import sendStartGame from "../startGame/sendStartGame";
import getMyRoom from "../../utils/getMyRoom";
import getSocketDataObject from "../startGame/getNameObject";
import leaveActualRoom from "../socketActions/leaveActualRoom";

const joinSpareRoom = async (socket: Socket, io: MyServer) => {
  const roomMap = io.of("/").adapter.rooms;
  //if we are part of a room leave it and notify other player
  leaveActualRoom(socket, io);
  console.log("should have left room by now");

  const actualRooms = getActualRooms(io);

  //check are there any rooms that have only 1 person in them
  const spareRoom = actualRooms.find((room) => {
    const thisRoom = roomMap.get(room);
    //and make sure that this room does not contain someone still deciding whether to play another game
    const roomStillDeciding = checkIfStillDeciding(roomMap, room, io, socket);
    if (roomStillDeciding) return false;
    return thisRoom.size < 2;
  });

  //join this room if theese conditions are met
  if (spareRoom) {
    socket.join(spareRoom);
    sendStartGame(socket, io);
    return;
  }
  //if not create a new room and join it
  const roomToJoin = createNewRoomName(actualRooms);
  socket.join(roomToJoin);
};
//
//
//
//

//this checks to see whether there is someone in the room but cant enter if they are not ready to play another game yet

export const checkIfStillDeciding = (
  roomMap: Map<string, Set<string>>,
  thisRoom: string,
  io: MyServer,
  socket: Socket
): boolean => {
  if (!thisRoom) return false;
  //returns
  const stillDecidingObj = getSocketDataObject(
    roomMap,
    thisRoom,
    io,
    "deciding"
  );

  const decidingArray = Object.values(stillDecidingObj);

  //if anyone in the room is still deciding
  const someoneStillDeciding = decidingArray.some((value) => value === "true");

  return someoneStillDeciding;
};

export default joinSpareRoom;
