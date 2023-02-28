import { board } from "../board/board_class";
import drawAllSquares from "./drawAllSquares";
import drawAllAN from "./drawAN";

const drawAll = () => {
  drawAllSquares(board.grid);
  drawAllAN(board.grid);
};

export default drawAll;
