import { Board } from "../../board/board_class";
import { LegalMove } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import determineMovePutsUsIntoCheck from "./determineMovePutsIntoCheck";

//runs through our legal move array and removes any moves that would put us into check
const removeSelfCheck = (
  legalMoves: LegalMove[],
  blackPieces: PieceType[],
  whitePieces: PieceType[],
  board: Board,
  selectedPiece: PieceType
) => {
  const filteredMoves = legalMoves.filter(
    (move) =>
      !determineMovePutsUsIntoCheck(
        move,
        blackPieces,
        whitePieces,
        selectedPiece,
        board
      )
  );
  return filteredMoves;
};

export default removeSelfCheck;
