import { Socket } from "socket.io-client";
import { StartGameObject, TurnObject } from "../types/playerTypes";
import refreshPiecesFromTurn from "./refreshPiecesFromTurn";
import startOnlineGame from "./startOnlineGame";

const setUpSocketListeners = (socket: Socket) => {
  socket.on("message-for-module", (message: string) => {
    console.log(message);
  });
  socket.on("message", (message: string) => {
    console.log("message is", message);
  });
  socket.on("start-game", (gameObj: StartGameObject) => {
    startOnlineGame(socket, gameObj);
  });
  socket.on("change-turn", (turnObj: TurnObject) => {
    refreshPiecesFromTurn(turnObj);
  });
};

export default setUpSocketListeners;
