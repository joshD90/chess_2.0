import { GridSquare } from "../types/boardTypes";
import { LegalMove } from "../types/legalMoveTypes";
import { ShouldDrop } from "../types/legalMoveTypes";

const checkLandingOnLegalSquare = (
  proposedSquare: GridSquare,
  legalMoves: LegalMove[]
): ShouldDrop | null => {
  const shouldDrop = legalMoves.find(
    (move) =>
      move.square.an.col === proposedSquare.an.col &&
      move.square.an.row === proposedSquare.an.row
  );
  if (!shouldDrop) return null;

  return { should: true, moveType: shouldDrop.moveType };
};

export default checkLandingOnLegalSquare;
