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
  const otherPieces = color === "white" ? blackPieces : whitePieces;

  const newPosition = createHypotheticalPosition(
    selectedPiece,
    move.square.an,
    piecesToChange,
    otherPieces
  );

  return determineKingInCheck(
    board,
    newPosition.white,
    newPosition.black,
    color
  );
};

export default determineMovePutsUsIntoCheck;
