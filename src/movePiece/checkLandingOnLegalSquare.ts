import { GridSquare } from "../types/boardTypes";
import { LegalMove } from "../types/legalMoveTypes";

const checkLandingOnLegalSquare = (
  proposedSquare: GridSquare,
  legalMoves: LegalMove[]
): boolean => {
  const shouldDrop = legalMoves.some(
    (move) =>
      move.square.an.col === proposedSquare.an.col &&
      move.square.an.row === proposedSquare.an.row
  );
  return shouldDrop;
};

export default checkLandingOnLegalSquare;
