import { Board } from "../../board/board_class";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import determineNoLegalMoves from "./determineNoLegalMoves";

const determineStalemate = (
  position: HypotheticalPosition,
  defendingColor: "white" | "black",
  board: Board
): boolean => {
  const inCheck = position[defendingColor].find(
    (piece) => piece.inCheck === true
  );
  if (inCheck) return false;

  return determineNoLegalMoves(position, defendingColor, board);
};

export default determineStalemate;
