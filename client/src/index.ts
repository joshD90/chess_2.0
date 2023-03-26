import { io } from "socket.io-client";

import { board } from "./board/board_class";

import drawAll from "./draw/drawAll";
import initialiseGame from "./player/initialiseGame";
import setUpErrorListeners from "./socketActions/setUpErrorListeners";
import setUpServerActions from "./socketActions/setUpServerActions";
import setUpSocketListeners from "./socketActions/setUpSocketListeners";

//create our server instance
const socket = io("http://localhost:5000");

setUpServerActions(socket);
setUpErrorListeners(socket);
setUpSocketListeners(socket);

//declare our event loop
const eventLoop = () => {
  requestAnimationFrame(() => {
    drawAll(board);
    eventLoop();
  });
};
//grab our user input elements
const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;
const joinGameButton = document.querySelector(
  "#joinGameButton"
) as HTMLButtonElement;

//starts our game
joinGameButton.addEventListener("click", () => {
  coverDiv.style.visibility = "hidden";
  initialiseGame("black", 545, "Josh", "James");
  eventLoop();
});
