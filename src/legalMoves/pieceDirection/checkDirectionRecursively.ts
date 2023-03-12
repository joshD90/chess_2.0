import { LegalMove, CoordDiffObj } from "../../types/legalMoveTypes";
import { AN } from "../../types/boardTypes";
import { Board } from "../../board/board_class";

import whatsNextSquare from "./whatsNextSquare";

import returnType from "./returnType";

const checkDirectionRecursively = (
  coordDiffObj: CoordDiffObj,
  an: AN,
  board: Board,
  range: number,
  moveArray: LegalMove[]
) => {
  if (range === 0) return;
  const nextSquare = whatsNextSquare(coordDiffObj.coordDiff, an, board);
  //if we have come to the end of the direction
  if (!nextSquare) return;

  //we run a function here that determins whats the nature of the move. This function checks whether the legal move is an attacking move aka hits an opponent we can return null if its attacking forwrds, and null of only moving diag, push the return
  const moveToPush = returnType(nextSquare, board, coordDiffObj);
  if (!moveToPush) return;

  //if not then add that square to our legal moves
  moveArray.push(moveToPush);
  //if it hits another piece cease recursion
  if (moveToPush.moveType === "attack") return;
  range--;
  checkDirectionRecursively(
    coordDiffObj,
    nextSquare.an,
    board,
    range,
    moveArray
  );
};

export default checkDirectionRecursively;
