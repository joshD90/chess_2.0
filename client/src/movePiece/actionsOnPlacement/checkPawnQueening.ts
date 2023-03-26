import { GridSquare } from "../../types/boardTypes";
import { PieceType } from "../../types/pieceTypes";

const checkPawnQueening = (
  piece: PieceType,
  squareToDrop: GridSquare
): boolean => {
  if (piece.type !== "pawn") return false;
  const endRow = piece.color === "white" ? 7 : 0;
  if (squareToDrop.an.row !== endRow) return false;
  return true;
};

export default checkPawnQueening;
