import { AN } from "../types/boardTypes";
import { PieceType } from "../types/pieceTypes";

const getPieceByAN = (an: AN, pieces: PieceType[]): PieceType | undefined => {
  const piece = pieces.find(
    (piece) => piece.an.col === an.col && piece.an.row === an.row
  );
  return piece;
};

export default getPieceByAN;
