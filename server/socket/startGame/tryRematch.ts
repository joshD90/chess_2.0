import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";
import sendStartGame from "./sendStartGame";
import getMyRoom from "../../utils/getMyRoom";

import getSocketDataObject from "./getNameObject";

const tryRematch = (socket: Socket, io: MyServer): void => {
  const myRoom = getMyRoom(socket, io);
  const allRooms = io.of("/").adapter.rooms;
  socket.data.openToRematch = "true";
  // //if we try to rematch and we are the only person in the room then we can't rematch.  Just leave the room so someone else doesnt join in on top

  if (allRooms.get(myRoom)?.size < 2) {
    io.in(myRoom).emit("other-user-left");
    socket.leave(myRoom);
    return;
  }
  //get the data type associated with open to rematch
  const openToRematchObj = getSocketDataObject(
    allRooms,
    myRoom,
    io,
    "openToRematch"
  );

  //if everyone in the room is openToRematch
  const shouldProceed = Object.values(openToRematchObj).every(
    (el) => el === "true"
  );
  if (!shouldProceed) return;

  sendStartGame(socket, io);
};
export default tryRematch;
