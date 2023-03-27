import { Socket } from "socket.io-client";
import initialiseGame from "../player/initialiseGame";
import { StartGameObject } from "../types/playerTypes";
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
};

export default setUpSocketListeners;
