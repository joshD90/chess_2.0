import { canvas } from "./canvasContext";
import { board } from "./board_class";
import sizeByWindow from "./sizeByWindow";
import { queeningSelection } from "./queeningSelection/queeningSelection_Class";

import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "./sideCanvas/piecesTaken_class";
import getSideCanvas from "./sideCanvas/getSideCanvas";

export const resizeBoard = () => {
  //change our size dependent on the window
  sizeByWindow(canvas);

  //resize our board
  board.resizeBoard(canvas);
  //update our queening selection accordingly
  queeningSelection.updatePieceCoords();

  //update side canvas's
  const whiteCanvas = getSideCanvas("white", board.color as "white" | "black");
  whitePiecesTaken.resizeBoard(whiteCanvas);
  const blackCanvas = getSideCanvas("black", board.color as "white" | "black");
  blackPiecesTaken.resizeBoard(blackCanvas);
};
