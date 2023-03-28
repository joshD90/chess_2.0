import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";

import { UserInfo } from "../../types/infoTypes";
import joinSpareRoom from "../assignRooms/joinSpareRoom";
import sendBasicTurn from "../turn/sendBasicTurn";
import { TurnObject } from "../../types/socketTypes";

const setUpClientListeners = (socket: Socket, io: MyServer) => {
  //when a player first enters the game they want to play with their name
  socket.on("user-info", (info: UserInfo) => {
    const { userName, userTime } = info;
    socket.data.name = userName;
    socket.data.time = userTime;
    joinSpareRoom(socket, io);
  });
  //when a player has taken their turn - no edge cases
  socket.on("change-turn", (turnObj: TurnObject) => {
    console.log(turnObj);
    sendBasicTurn(socket, io, turnObj);
  });
};

export default setUpClientListeners;
