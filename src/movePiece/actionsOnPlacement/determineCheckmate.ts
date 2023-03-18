import { Board } from "../../board/board_class";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import determineNoLegalMoves from "./determineNoLegalMoves";

const determineCheckmate = (
  position: HypotheticalPosition,
  defendingColor: "white" | "black",
  board: Board
): boolean => {
  //can only get echeckmate if we are already in check otherwise it would be a stalemate
  const inCheck = position[defendingColor].find(
    (piece) => piece.type === "king" && piece.inCheck === true
  );

  if (!inCheck) return false;
  return determineNoLegalMoves(position, defendingColor, board);
};

export default determineCheckmate;
