import { GridSquare } from "../../types/boardTypes";
import { PieceType } from "../../types/pieceTypes";

const setEnPassante = (pieceToChange: PieceType, squareToDrop: GridSquare) => {
  //en passante only applies to a double move, which can only happen to a pawn on the first turn
  if (!pieceToChange.firstMove) return;
  if (pieceToChange.type !== "pawn") return;
  if (pieceToChange.color === "white" && squareToDrop.an.row !== 3) return;
  if (pieceToChange.color === "black" && squareToDrop.an.row !== 4) return;
  pieceToChange.isEnPassante = true;
};

export default setEnPassante;
