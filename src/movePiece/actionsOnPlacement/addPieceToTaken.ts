import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../../board/sideCanvas/piecesTaken_class";
import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { PieceType } from "../../types/pieceTypes";

const addPieceToTaken = (piece: PieceType): void => {
  //convert to a piece off board type
  const convertedPiece = new PieceOffBoard(
    piece.color as "white" | "black",
    piece.type,
    0
  );
  if (piece.color === "white") {
    whitePiecesTaken.pieceArray.push(convertedPiece);
    whitePiecesTaken.setPieceArrayCoords();
  }
  if (piece.color === "black") {
    blackPiecesTaken.pieceArray.push(convertedPiece);
    blackPiecesTaken.setPieceArrayCoords();
  }
};
export default addPieceToTaken;
