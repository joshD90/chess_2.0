import { Board } from "../../board/board_class";
import { GridSquare } from "../../types/boardTypes";
import { CoordDiffObj, LegalMove } from "../../types/legalMoveTypes";
import hitsOpponentPiece from "../generalRestrictions/hitsOpponentPiece";
import hitsOwnPiece from "../generalRestrictions/hitsOwnPiece";

const returnType = (
  nextSquare: GridSquare,
  board: Board,
  coordDiffObj: CoordDiffObj
): LegalMove | null => {
  if (hitsOwnPiece(nextSquare.an, board)) return null;

  if (hitsOpponentPiece(nextSquare.an, board)) {
    //special dispensation for pawn movement
    if (
      coordDiffObj.pieceType === "pawn" &&
      (coordDiffObj.direction === "up" || coordDiffObj.direction === "down")
    )
      return null;
    //business as usual for everyone else
    return { square: nextSquare, moveType: "attack" };
  }
  //pawns can only move diagonal if attacking
  if (
    coordDiffObj.pieceType === "pawn" &&
    coordDiffObj.direction !== "up" &&
    coordDiffObj.direction !== "down"
  )
    return null;
  //if regular piece and not attacking, movetype is move
  return { square: nextSquare, moveType: "move" };
};

export default returnType;
