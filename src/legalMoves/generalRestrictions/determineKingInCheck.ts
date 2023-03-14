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
  //set our white pieces on defense and black pieces attacking
  if (kingColor === "white") {
    return iteratePiecesForCheck(
      whitePieces,
      blackPieces,
      kingCheckArray,
      board
    );
  } else {
    //set our blackpieces on defense
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
  defendingPieces: PieceType[],
  attackingPieces: PieceType[],
  moveArray: LegalMove[],
  board: Board
): boolean => {
  //we need to be able to pass our hypothetical pieces down through the check all directions function

  let whitePieces: PieceType[];
  let blackPieces: PieceType[];
  if (defendingPieces.find((piece) => piece.color === "white")) {
    whitePieces = defendingPieces;
    blackPieces = attackingPieces;
  } else {
    whitePieces = attackingPieces;
    blackPieces = defendingPieces;
  }
  //add all the legal moves for all of the attackers pieces
  attackingPieces.forEach((piece) => {
    checkAllDirections(piece, board, moveArray, whitePieces, blackPieces);
  });

  const defendingKing = defendingPieces.find((piece) => piece.type === "king");
  if (!defendingKing) throw new Error("Could Not Find King");

  //see are any of the legal moves falling on our kings square
  if (
    moveArray.some(
      (move) =>
        move.square.an.col === defendingKing.an.col &&
        move.square.an.row === defendingKing.an.row
    )
  )
    return true;
  return false;
};

export default determineKingInCheck;
