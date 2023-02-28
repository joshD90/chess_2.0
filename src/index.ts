import addListeners from "./board/listeners";
import { canvas } from "./board/canvasContext";

import { board } from "./board/board_class";
import drawAll from "./draw/drawAll";

addListeners();
board.makeGrid();

drawAll();
