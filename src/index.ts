import { board } from "./board/board_class";

import drawAll from "./draw/drawAll";
import initialiseGame from "./player/initialiseGame";

const eventLoop = () => {
  requestAnimationFrame(() => {
    drawAll(board);
    eventLoop();
  });
};
//so we need to figure out a way to send the pieces in the right direction, somehow flipping the board perhaps?
initialiseGame("black", 545, "Josh", "James");
eventLoop();
