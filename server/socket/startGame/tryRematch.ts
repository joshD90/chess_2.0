import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";
import sendStartGame from "./sendStartGame";
import getMyRoom from "../../utils/getMyRoom";
import getActualRooms from "../../utils/getActualRooms";
import { checkIfStillDeciding } from "../assignRooms/joinSpareRoom";

const tryRematch = (socket: Socket, io: MyServer): void => {
  const myRoom = getMyRoom(socket, io);
  const allRooms = io.of("/").adapter.rooms;

  //set our deciding status to false
  socket.data.deciding = "";
  //if we try to rematch and we are the only person in the room then we can't rematch.  Just leave the room so someone else doesnt join in on top
  console.log(allRooms.get(myRoom).size);
  if (allRooms.get(myRoom).size < 2) {
    io.in(myRoom).emit("rematch-failed");
    socket.leave(myRoom);
    return;
  }

  if (checkIfStillDeciding(allRooms, myRoom, io)) return;

  sendStartGame(socket, io);
};
export default tryRematch;
