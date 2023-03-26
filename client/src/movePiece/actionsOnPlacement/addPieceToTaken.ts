import { indexOf } from "lodash";
import {
  blackPiecesTaken,
  PiecesTaken,
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
  piece.color === "white"
    ? pushToArray(whitePiecesTaken, convertedPiece)
    : pushToArray(blackPiecesTaken, convertedPiece);
};
export default addPieceToTaken;

const pushToArray = (
  piecesTaken: PiecesTaken,
  convertedPiece: PieceOffBoard
) => {
  //check whether this piece type is already on the board
  const pieceAlreadyThere = piecesTaken.pieceArray.find(
    (piece) => piece.type === convertedPiece.type
  );

  //if not push the piece to the taken pieces
  if (!pieceAlreadyThere) {
    piecesTaken.pieceArray.push(convertedPiece);
    return;
  }

  const indexOfPiece = piecesTaken.pieceArray.indexOf(pieceAlreadyThere);
  const pieceToMultiply = piecesTaken.pieceArray[indexOfPiece];

  //pieceAlreadyThere.numberOf could be undefined so set to  if undefined
  if (!pieceToMultiply.numberOf) {
    pieceToMultiply.numberOf = 2;

    return;
  }
  //bump up our number
  pieceToMultiply.numberOf++;
};
