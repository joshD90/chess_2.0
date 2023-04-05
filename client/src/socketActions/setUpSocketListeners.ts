import { Socket } from "socket.io-client";
import {
  EndGameObject,
  StartGameObject,
  TurnObject,
} from "../types/playerTypes";
import handleRematchFailed from "./roomAllocation/incoming/handleRematchFailed";
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
  //these two are very similar could may be refactored
  socket.on("rematch-failed", () => {
    handleRematchFailed(socket);
  });
  socket.on("other-user-left", () => {
    handleRematchFailed(socket);
  });
};

export default setUpSocketListeners;
