import { AN } from "../../types/boardTypes";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";

const hitsOwnPiece = (
  an: AN,
  color: string,
  position: HypotheticalPosition
): boolean => {
  //select which pieces we wish to use based on our player
  const ownPieces = color === "white" ? position.white : position.black;
  //check whether the coords that we feed in match any of the coords of our pieces
  const hitsPiece = ownPieces.some(
    (piece) => piece.an.row === an.row && piece.an.col === an.col
  );

  return hitsPiece;
};

export default hitsOwnPiece;
