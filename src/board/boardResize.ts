import { canvas } from "./canvasContext";
import { board } from "./board_class";
import sizeByWindow from "./sizeByWindow";

export const resizeBoard = () => {
  //change our size dependent on the window
  sizeByWindow(canvas);

  //resize our board
  board.resizeBoard(canvas);
};
