import { MyServer, TurnObject } from "../../types/socketTypes";
import { Socket } from "socket.io";
import getMyRoom from "../../utils/getMyRoom";

const sendBasicTurn = (socket: Socket, io: MyServer, turnObj: TurnObject) => {
  const myRoom = getMyRoom(socket, io);

  socket.to(myRoom).emit("change-turn", turnObj);
};
export default sendBasicTurn;
