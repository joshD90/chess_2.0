import { board } from "./board/board_class";

import drawAll from "./draw/drawAll";
import initialiseGame from "./player/initialiseGame";

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
joinGameButton?.addEventListener("click", () => {
  coverDiv.style.visibility = "hidden";
  initialiseGame("black", 545, "Josh", "James");
  eventLoop();
});
