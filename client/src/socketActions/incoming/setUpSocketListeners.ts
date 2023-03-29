import { Socket } from "socket.io-client";
import { StartGameObject, TurnObject } from "../../types/playerTypes";
import recieveChangeTurn from "./recieveChangeTurn";

import startOnlineGame from "./startOnlineGame";

const setUpSocketListeners = (socket: Socket) => {
  socket.on("start-game", (gameObj: StartGameObject) => {
    startOnlineGame(socket, gameObj);
  });
  socket.on("change-turn", (turnObj: TurnObject) => {
    recieveChangeTurn(turnObj);
  });
};

export default setUpSocketListeners;
