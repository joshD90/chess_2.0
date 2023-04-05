import { MyServer } from "../../types/socketTypes";
import getMyRoom from "../../utils/getMyRoom";
import { Socket } from "socket.io";
//leave the actual room that we are part of
const leaveActualRoom = (socket: Socket, io: MyServer) => {
  const myRoom = getMyRoom(socket, io);

  if (!myRoom) return;
  //let other player know we have left
  socket.to(myRoom).emit("other-user-left");
  socket.leave(myRoom);
};
export default leaveActualRoom;
