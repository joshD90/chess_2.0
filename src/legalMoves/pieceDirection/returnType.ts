import { Board } from "../../board/board_class";
import { GridSquare } from "../../types/boardTypes";
import { LegalMove } from "../../types/legalMoveTypes";
import hitsOpponentPiece from "../generalRestrictions/hitsOpponentPiece";
import hitsOwnPiece from "../generalRestrictions/hitsOwnPiece";

const returnType = (nextSquare: GridSquare, board: Board): LegalMove | null => {
  if (hitsOwnPiece(nextSquare.an, board)) return null;
  if (hitsOpponentPiece(nextSquare.an, board)) {
    console.log("attacking");
    return { square: nextSquare, moveType: "attack" };
  }

  return { square: nextSquare, moveType: "move" };
};

export default returnType;
