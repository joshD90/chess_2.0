import { Socket } from "socket.io-client";
import {
  EndGameObject,
  StartGameObject,
  TurnObject,
} from "../../types/playerTypes";
import recieveEndGame from "./receiveEndGame";
import recieveChangeTurn from "./recieveChangeTurn";

import startOnlineGame from "./startOnlineGame";

const setUpSocketListeners = (socket: Socket) => {
  socket.on("start-game", (gameObj: StartGameObject) => {
    startOnlineGame(socket, gameObj);
  });
  socket.on("change-turn", (turnObj: TurnObject) => {
    recieveChangeTurn(turnObj);
  });
  socket.on("end-game", (endGameObj: EndGameObject) => {
    recieveEndGame(endGameObj, socket);
  });
};

export default setUpSocketListeners;
