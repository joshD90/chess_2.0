import { PieceImageIndex } from "../../assets/blackPieces/blackPiecesIndex";
import { GridSquare } from "../../types/boardTypes";
import { CoordDiffObj, LegalMove } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import hitsOpponentPiece from "../generalRestrictions/hitsOpponentPiece";
import hitsOwnPiece from "../generalRestrictions/hitsOwnPiece";

const returnType = (
  nextSquare: GridSquare,
  coordDiffObj: CoordDiffObj,
  color: string,
  whitePieces: PieceType[],
  blackPieces: PieceType[]
): LegalMove | null => {
  if (hitsOwnPiece(nextSquare.an, color, whitePieces, blackPieces)) return null;

  if (hitsOpponentPiece(nextSquare.an, color, whitePieces, blackPieces)) {
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
