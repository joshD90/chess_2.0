import { board } from "../board/board_class";
import drawAllSquares from "./drawAllSquares";

const drawAll = () => {
  drawAllSquares(board.grid);
};

export default drawAll;
