import { GridSquare } from "../types/boardTypes";

const checkLandingOnLegalSquare = (
  proposedSquare: GridSquare,
  legalMoves: GridSquare[]
): boolean => {
  const shouldDrop = legalMoves.some(
    (move) =>
      move.an.col === proposedSquare.an.col &&
      move.an.row === proposedSquare.an.row
  );
  return shouldDrop;
};

export default checkLandingOnLegalSquare;
