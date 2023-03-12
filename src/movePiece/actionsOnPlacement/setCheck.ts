import { Board } from "../../board/board_class";
import determineKingInCheck from "../../legalMoves/generalRestrictions/determineKingInCheck";
import { PieceType } from "../../types/pieceTypes";

const setCheck = (
  board: Board,
  whitePieces: PieceType[],
  blackPieces: PieceType[],
  kingColor: string
) => {
  //see wehether the king is in check
  const isInCheck = determineKingInCheck(
    board,
    whitePieces,
    blackPieces,
    kingColor
  );

  //if in check change our kings status to in check
  const piecesToChange = kingColor === "white" ? whitePieces : blackPieces;

  const kingPiece = piecesToChange.find((piece) => piece.type === "king");

  kingPiece!.inCheck = isInCheck;
};
export default setCheck;
