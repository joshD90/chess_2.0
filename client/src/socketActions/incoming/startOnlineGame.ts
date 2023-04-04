import { Socket } from "socket.io-client";
import initialiseGame from "../../player/initialiseGame";
import resetBoard from "../../resetGame.ts/resetBoard";
import { StartGameObject } from "../../types/playerTypes";
import hideWaitingSection from "./hideWaitingSection";

const startOnlineGame = (socket: Socket, gameObj: StartGameObject) => {
  //grab our user input elements
  const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;
  const toggleDiv = document.querySelector(".toggleBox") as HTMLDivElement;
  const opponentNameDiv = document.querySelector(
    ".opponentName"
  ) as HTMLDivElement;
  const playerNameDiv = document.querySelector(".playerName") as HTMLDivElement;
  const waitingSection = document.querySelector(
    ".waitingSection"
  ) as HTMLElement;

  resetBoard();

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
  coverDiv.classList.add("hidden");
  toggleDiv.classList.add("hidden");
  hideWaitingSection(false, socket);
};

export default startOnlineGame;
