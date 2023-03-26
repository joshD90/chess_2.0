import { PieceType } from "../../types/pieceTypes";

const takeEnPassante = (opponentPieces: PieceType[]) => {
  //find the piece that is enPassante
  const enPassantePiece = opponentPieces.find((piece) => piece.isEnPassante);
  if (!enPassantePiece) return;
  const indexOfEnPassante = opponentPieces.indexOf(enPassantePiece);
  //cut it from our opponents pieces
  opponentPieces.splice(indexOfEnPassante, 1);
};

export default takeEnPassante;
