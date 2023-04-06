import { MyServer } from "../../types/socketTypes";
import getMyRoom from "../../utils/getMyRoom";
import { Socket } from "socket.io";
//leave the actual room that we are part of
const leaveActualRoom = async (socket: Socket, io: MyServer): Promise<void> => {
  const myRoom = getMyRoom(socket, io);
  if (!myRoom) return;

  socket.data.deciding = "";
  socket.data.openToRematch = "";

  socket.leave(myRoom);

  io.in(myRoom).emit("other-user-left");
};
export default leaveActualRoom;
