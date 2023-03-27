import { Socket } from "socket.io-client";
import initialiseGame from "../player/initialiseGame";
import { StartGameObject } from "../types/playerTypes";

const startOnlineGame = (socket: Socket, gameObj: StartGameObject) => {
  //grab our user input elements
  const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;
  console.log("starting online game");
  const color = gameObj.colors.white === socket.id ? "white" : "black";
  const playerName = gameObj.names[socket.id];
  const opponentName = Object.keys(gameObj.names).filter(
    (name) => name === socket.id
  )[0];
  console.log(color, playerName, opponentName);
  initialiseGame(color, 600, playerName, opponentName);
  coverDiv.style.visibility = "hidden";
};

export default startOnlineGame;
