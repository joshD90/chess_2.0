import drawAllSquares from "./drawAllSquares";
import drawAllAN from "./drawAN";
import { Board } from "../board/board_class";
import drawAllPieces from "./drawAllPieces";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";

const drawAll = (board: Board) => {
  drawAllSquares(board.grid);
  drawAllAN(board.grid);
  drawAllPieces(blackPieces);
  drawAllPieces(whitePieces);
};

export default drawAll;
