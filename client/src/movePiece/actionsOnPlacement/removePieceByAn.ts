import { AN } from "../../types/boardTypes";
import { PieceType } from "../../types/pieceTypes";

const removePieceByAn = (an: AN, piecesToChange: PieceType[]): void => {
  //get our piece by the coordinates
  const pieceOnAN = piecesToChange.find(
    (piece) => piece.an.col === an.col && piece.an.row === an.row
  );

  if (!pieceOnAN) return;

  const indexOfPiece = piecesToChange.indexOf(pieceOnAN);

  //remove that piece from the array of pieces
  if (indexOfPiece === -1) return;

  piecesToChange.splice(indexOfPiece, 1);
};

export default removePieceByAn;
