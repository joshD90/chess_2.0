import { AN } from "../../types/boardTypes";
import { HypotheticalPosition } from "../../types/legalMoveTypes";

const hitsOpponentPiece = (
  an: AN,
  color: string,
  position: HypotheticalPosition
): boolean => {
  const opponentPiece = color === "white" ? position.black : position.white;
  //see whether the square we are landing on hits the other player
  const hitsOpponent = opponentPiece.some(
    (piece) => piece.an.row === an.row && piece.an.col === an.col
  );

  return hitsOpponent;
};

export default hitsOpponentPiece;
