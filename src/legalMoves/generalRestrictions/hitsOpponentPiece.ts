import { AN } from "../../types/boardTypes";

import { PieceType } from "../../types/pieceTypes";

const hitsOpponentPiece = (
  an: AN,
  color: string,
  whitePieces: PieceType[],
  blackPieces: PieceType[]
): boolean => {
  const opponentPiece = color === "white" ? blackPieces : whitePieces;
  //see whether the square we are landing on hits the other player
  const hitsOpponent = opponentPiece.some(
    (piece) => piece.an.row === an.row && piece.an.col === an.col
  );

  return hitsOpponent;
};

export default hitsOpponentPiece;
