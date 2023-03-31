import { Socket } from "socket.io-client";
import initialiseGame from "../../player/initialiseGame";
import { StartGameObject } from "../../types/playerTypes";

const startOnlineGame = (socket: Socket, gameObj: StartGameObject) => {
  //grab our user input elements
  const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;
  const toggleDiv = document.querySelector(".toggleBox") as HTMLDivElement;
  const opponentNameDiv = document.querySelector(
    ".opponentName"
  ) as HTMLDivElement;
  const playerNameDiv = document.querySelector(".playerName") as HTMLDivElement;

  //extract our details to set up the game
  const color = gameObj.colors.white === socket.id ? "white" : "black";

  const playerName = gameObj.names[socket.id];
  const opponentKey = Object.keys(gameObj.names).filter(
    (name) => name !== socket.id
  )[0];
  const opponentName = gameObj.names[opponentKey];

  opponentNameDiv.innerText = opponentName;
  playerNameDiv.innerText = playerName;

  initialiseGame(color, 600, playerName, opponentName, socket, false);
  coverDiv.style.visibility = "hidden";
  toggleDiv.style.visibility = "hidden";
};

export default startOnlineGame;
