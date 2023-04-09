import { Socket } from "socket.io-client";
import initialiseGame from "../../../player/initialiseGame";
import resetBoard from "../../../resetGame/resetBoard";
import { StartGameObject } from "../../../types/playerTypes";
import { endBannerElements } from "../banners/endBannerElements";
import hideEndBanner from "../banners/hideEndBanner";
import hideWaitingSection from "../banners/hideWaitingSection";

const startOnlineGame = (socket: Socket, gameObj: StartGameObject) => {
  //remove the openToRematch property in case coming from a rematch
  socket.emit("remove-openToRematch");
  hideEndBanner(endBannerElements, socket);

  //grab our user input elements
  const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;
  const toggleDiv = document.querySelector(".toggleBox") as HTMLDivElement;
  const opponentNameDiv = document.getElementById(
    "opponentName"
  ) as HTMLDivElement;
  const playerNameDiv = document.getElementById("playerName") as HTMLDivElement;

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

  initialiseGame(color, gameObj.time, playerName, opponentName, socket, false);
  coverDiv.classList.add("hidden");
  toggleDiv.classList.add("hidden");
  hideWaitingSection(false, socket);
};

export default startOnlineGame;
