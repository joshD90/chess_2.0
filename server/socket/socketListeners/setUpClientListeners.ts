import { EndGameObject, MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";

import { UserInfo } from "../../types/infoTypes";
import joinSpareRoom from "../assignRooms/joinSpareRoom";
import sendBasicTurn from "../turn/sendBasicTurn";
import { TurnObject } from "../../types/socketTypes";
import sendEnd from "../turn/sendEnd";

import tryRematch from "../startGame/tryRematch";
import leaveActualRoom from "../socketActions/leaveActualRoom";

const setUpClientListeners = (socket: Socket, io: MyServer) => {
  //game mechanics
  //when a player has taken their turn - no edge cases
  socket.on("change-turn", (turnObj: TurnObject) => {
    sendBasicTurn(socket, io, turnObj);
  });

  //when a player makes a move that ends the game
  socket.on("end-game", (endGameObj: EndGameObject) => {
    sendEnd(socket, io, endGameObj);
  });

  //Room Allocation
  //when a player first enters the game they want to play with their name
  socket.on("user-info", (info: UserInfo) => {
    const { userName, userTime } = info;
    socket.data.name = userName;
    socket.data.time = userTime;

    joinSpareRoom(socket, io);
  });

  //for reassigning rooms
  socket.on("rematch", () => {
    tryRematch(socket, io);
  });

  socket.on("leave-actual-room", () => leaveActualRoom(socket, io));

  socket.on("remove-openToRematch", () => (socket.data.openToRematch = ""));

  socket.on("currently-deciding", () => (socket.data.deciding = "true"));
};

export default setUpClientListeners;
