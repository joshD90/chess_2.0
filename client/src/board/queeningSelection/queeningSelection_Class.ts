import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { board, Board } from "../board_class";
import changeQueeningSelectionColors from "./changeQueeningSelectionColors";
import createQueenSelectPieces from "./createQueenSelectPieces";
import updateQueeningPieceCoords from "./updateQueeningPieceCoords";

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
  changePieceArrayColors() {
    this.pieceArray = changeQueeningSelectionColors(board, this.pieceArray);
  }
  updatePieceCoords() {
    updateQueeningPieceCoords(this.pieceArray);
  }
}

export const queeningSelection = new QueeningSelection(board);
