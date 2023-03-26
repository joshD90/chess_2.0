import { PieceType } from "../../types/pieceTypes";

//if our piece is a pawn and it has not moved yet then it's range is two if not attacking
const adjustRange = (selectedPiece: PieceType, direction: string): number => {
  if (selectedPiece.type !== "pawn") return selectedPiece.range;
  if (!selectedPiece.firstMove) return selectedPiece.range;
  if (direction === "up" || direction === "down") return 2;
  return selectedPiece.range;
};

export default adjustRange;
