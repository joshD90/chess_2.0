import { Board } from "../../board/board_class";
import { LegalMove } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import createHypotheticalPosition from "../../utils/createHypotheticalPosition";
import determineKingInCheck from "./determineKingInCheck";

const determineMovePutsUsIntoCheck = (
  move: LegalMove,
  blackPieces: PieceType[],
  whitePieces: PieceType[],
  selectedPiece: PieceType,
  board: Board
) => {
  const { color } = selectedPiece;

  const piecesToChange = color === "white" ? whitePieces : blackPieces;

  const newPosition = createHypotheticalPosition(
    selectedPiece,
    move.square.an,
    piecesToChange
  );
  console.log(
    determineKingInCheck(board, newPosition, blackPieces, "black"),
    "determin king in check return"
  );

  //we need to switch the position around depending on which pieces we have adjusted
  if (color === "white") {
    return determineKingInCheck(board, newPosition, blackPieces, color);
  } else {
    return determineKingInCheck(board, whitePieces, newPosition, color);
  }
};

export default determineMovePutsUsIntoCheck;
