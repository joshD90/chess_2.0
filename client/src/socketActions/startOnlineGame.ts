import { Socket } from "socket.io-client";
import initialiseGame from "../player/initialiseGame";
import { StartGameObject } from "../types/playerTypes";

const startOnlineGame = (socket: Socket, gameObj: StartGameObject) => {
  //grab our user input elements
  const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;

  //extract our details to set up the game
  const color = gameObj.colors.white === socket.id ? "white" : "black";
  const playerName = gameObj.names[socket.id];
  const opponentName = Object.keys(gameObj.names).filter(
    (name) => name === socket.id
  )[0];

  initialiseGame(color, 600, playerName, opponentName, socket);
  coverDiv.style.visibility = "hidden";
};

export default startOnlineGame;
