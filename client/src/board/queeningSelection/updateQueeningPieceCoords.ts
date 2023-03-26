import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";

import setQueeningCoords from "./setQueeningCoords";

const updateQueeningPieceCoords = (queeningPieces: PieceOffBoard[]) => {
  queeningPieces.forEach((piece) => {
    const newCoords = setQueeningCoords(piece.position);
    piece.coord = newCoords;
  });
};
export default updateQueeningPieceCoords;
