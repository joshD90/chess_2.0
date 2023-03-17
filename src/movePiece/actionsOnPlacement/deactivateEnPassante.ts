import { PieceType } from "../../types/pieceTypes";
//if we haven't taken the enpassante piece in this turn then we need to remove the status
const deactivateEnPassante = (opponentPieces: PieceType[]) => {
  opponentPieces.forEach((piece) => {
    piece.isEnPassante = false;
  });
};
export default deactivateEnPassante;
