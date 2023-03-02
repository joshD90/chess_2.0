import addListeners from "./board/listeners";
import { canvas } from "./board/canvasContext";

import { board } from "./board/board_class";
import drawAll from "./draw/drawAll";

const eventLoop = () => {
  requestAnimationFrame(() => {
    drawAll(board);
    eventLoop();
  });
};

addListeners();
board.makeGrid();
eventLoop();
