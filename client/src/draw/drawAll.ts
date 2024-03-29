import drawAllSquares from "./drawAllSquares";
import drawAllAN from "./drawAN";
import { Board } from "../board/board_class";
import drawAllPieces from "./drawAllPieces";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import drawMovingPiece from "./drawMovingPiece";
import drawLegalDots from "./drawLegalDots";
import { legalDots } from "../legalMoves/pieceDirection/legalDots";
import drawCheck from "./drawCheck";
import drawQueeningSelection from "./drawQueeningSelection";

import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../board/sideCanvas/piecesTaken_class";

const drawAll = (board: Board) => {
  drawAllSquares(board.grid);
  drawCheck();
  // drawAllAN(board.grid);
  drawAllPieces(blackPieces);
  drawAllPieces(whitePieces);
  drawMovingPiece();
  drawLegalDots(legalDots);
  drawQueeningSelection();
  whitePiecesTaken.drawPieces();
  blackPiecesTaken.drawPieces();
};

export default drawAll;
