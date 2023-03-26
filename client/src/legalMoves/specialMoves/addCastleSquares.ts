import { Board } from "../../board/board_class";
import { HypotheticalPosition, LegalMove } from "../../types/legalMoveTypes";
import determineCastleInDirection from "./determineCastleInDirection";

const addCastleSquares = (
  position: HypotheticalPosition,
  color: "white" | "black",
  board: Board,
  moveArray: LegalMove[]
) => {
  const piecesToCheck = position[color];

  const kingPiece = piecesToCheck.find((piece) => piece.type === "king");
  if (!kingPiece) throw new Error("Could not find king");
  //if the king has already moved or is in check he can't castle
  if (!kingPiece.firstMove) return;
  if (kingPiece.inCheck) return;

  const castleLongSquare = determineCastleInDirection(
    "long",
    kingPiece,
    position,
    board
  );
  if (castleLongSquare) moveArray.push(castleLongSquare);
  const castleShortSquare = determineCastleInDirection(
    "short",
    kingPiece,
    position,
    board
  );
  if (castleShortSquare) moveArray.push(castleShortSquare);
};

export default addCastleSquares;
