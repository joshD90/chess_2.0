import { canvas } from "./canvasContext";
import { board } from "./board_class";
import sizeByWindow from "./sizeByWindow";

export const resizeBoard = () => {
  console.log(canvas.width);
  console.log(board.width);
  //change our size dependent on the window
  sizeByWindow(canvas);

  //resize our board
  board.resizeBoard(canvas);
};
