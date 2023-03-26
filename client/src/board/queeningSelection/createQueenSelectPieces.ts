import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";

import { Board } from "../board_class";

const createQueenSelectPieces = (board: Board): PieceOffBoard[] => {
  const pieceTypeArray = ["queen", "rook", "bishop", "knight"];

  //create our pieces and return them
  const queenSelectionPieces = pieceTypeArray.map(
    (piece, index): PieceOffBoard =>
      new PieceOffBoard(board.color as "black" | "white", piece, index + 1)
  );

  return queenSelectionPieces;
};
export default createQueenSelectPieces;
