import { Socket } from "socket.io-client";
import {
  EndGameObject,
  StartGameObject,
  TurnObject,
} from "../types/playerTypes";
import handleOtherLeaving from "./roomAllocation/incoming/handleOtherLeaving";
import recieveEndGame from "./game/incoming/receiveEndGame";
import recieveChangeTurn from "./game/incoming/recieveChangeTurn";

import startOnlineGame from "./roomAllocation/incoming/startOnlineGame";

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

  socket.on("other-user-left", () => {
    handleOtherLeaving(socket);
  });
};

export default setUpSocketListeners;
