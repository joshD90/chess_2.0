import { Board } from "../../board/board_class";
import { GridSquare } from "../../types/boardTypes";
import { ShouldDrop } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import removePieceByAn from "./removePieceByAn";

const setPawnQueening = (
  pieceToChange: PieceType,
  board: Board,
  squareToDrop: GridSquare,
  landingType: ShouldDrop,
  opponentPieces: PieceType[]
) => {
  //if we are attacking a piece then remove that piece before placing our own piece
  if (landingType.moveType === "attack")
    removePieceByAn(squareToDrop.an, opponentPieces);
  //update our piece to the square it is landing on and set to queening
  pieceToChange.isQueening = true;
  pieceToChange.an.col = squareToDrop.an.col;
  pieceToChange.an.row = squareToDrop.an.row;
  //update our board into its queening status
  board.queeningSelection = true;
};

export default setPawnQueening;
