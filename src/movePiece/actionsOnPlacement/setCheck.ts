import { Board } from "../../board/board_class";
import determineKingInCheck from "../../legalMoves/generalRestrictions/determineKingInCheck";
import { HypotheticalPosition } from "../../types/legalMoveTypes";

const setCheck = (
  board: Board,
  position: HypotheticalPosition,
  kingColor: string
) => {
  //see whether the king is in check
  const isInCheck = determineKingInCheck(board, position, kingColor);

  //if in check change our kings status to in check
  const piecesToChange =
    kingColor === "white" ? position.white : position.black;

  const kingPiece = piecesToChange.find((piece) => piece.type === "king");

  kingPiece!.inCheck = isInCheck;
};
export default setCheck;
