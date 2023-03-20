import { HypotheticalPosition } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import determineColorSquareByAN from "../../utils/determineColorSquareByAN";

const determineDrawByInsufficientMaterial = (
  position: HypotheticalPosition
): boolean => {
  const { white, black } = position;
  //if either piece array has 3 pieces checkmate can be achieved
  if (white.length > 2 || black.length > 2) return false;
  //if it is only the kings it's a draw
  if (white.length === 1 && position.black) return true;
  //check for bishop or knight and king against king
  if (isBishopOrKnight(white, black)) return true;
  if (isBishopOrKnight(black, white)) return true;

  if (bishopVsBishop(white, black)) return true;

  return false;
};

//king and bishop vs king and knight is a draw
const isBishopOrKnight = (
  thesePieces: PieceType[],
  otherPieces: PieceType[]
): boolean => {
  //at this point we have completed a circuit break for any piece larger than length of two
  if (
    thesePieces.length === 1 &&
    (otherPieces[1].type === "bishop" || otherPieces[1].type === "knight")
  )
    return true;
  return false;
};

//king and bishop vs king and same squarecolored bishop
const bishopVsBishop = (white: PieceType[], black: PieceType[]): boolean => {
  //make sure that we are dealing with a king and bishop vs king and bishop situation
  if (white.length !== 2 || black.length !== 2) return false;
  if (white[1].type !== "bishop" || black[1].type !== "bishop") return false;

  //if both bishops are of the same color then it is insufficient material
  if (
    determineColorSquareByAN(white[1].an) !==
    determineColorSquareByAN(black[1].an)
  )
    return false;

  return true;
};

export default determineDrawByInsufficientMaterial;
