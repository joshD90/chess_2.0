import { Board } from "../../board/board_class";
import { LegalMove } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import checkAllDirections from "../pieceDirection/checkAllDirections";

const determineKingInCheck = (
  board: Board,
  whitePieces: PieceType[],
  blackPieces: PieceType[],
  kingColor: string
) => {
  const kingCheckArray: LegalMove[] = [];
  if (kingColor === "white") {
    return iteratePiecesForCheck(
      whitePieces,
      blackPieces,
      kingCheckArray,
      board
    );
  } else {
    return iteratePiecesForCheck(
      blackPieces,
      whitePieces,
      kingCheckArray,
      board
    );
  }
};

//can vary depending on which king we wish to see is in check
const iteratePiecesForCheck = (
  ourPieces: PieceType[],
  opponentPieces: PieceType[],
  moveArray: LegalMove[],
  board: Board
): boolean => {
  //add all the legal moves for all of our opponents pieces
  opponentPieces.forEach((piece) => {
    checkAllDirections(piece, board, moveArray);
  });
  const ourKing = ourPieces.find((piece) => piece.type === "king");
  if (!ourKing) throw new Error("Could Not Find King");
  //see are any of the legal moves falling on our kings square
  if (
    moveArray.some(
      (move) =>
        move.square.an.col === ourKing.an.col &&
        move.square.an.row === ourKing.an.row
    )
  )
    return true;
  return false;
};

export default determineKingInCheck;
