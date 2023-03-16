import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { board, Board } from "../board_class";
import createQueenSelectPieces from "./createQueenSelectPieces";

export class QueeningSelection {
  width: number;
  color: "white" | "black";
  pieceArray: PieceOffBoard[];

  constructor(board: Board) {
    this.width = board.width / 2;
    this.color = board.color as "white" | "black";
    this.pieceArray = this.createPieceArray(board);
  }
  createPieceArray(board: Board) {
    return createQueenSelectPieces(board);
  }
}

export const queeningSelection = new QueeningSelection(board);
