import { CoordDiff } from "../types/legalMoveTypes";
import { AN } from "../types/boardTypes";
import { Board } from "../board/board_class";
import whatsNextSquare from "./whatsNextSquare";
import { legalDots } from "./legalDots";

const checkDirectionRecursively = (
  coordDiff: CoordDiff,
  an: AN,
  board: Board,
  range: number
) => {
  if (range === 0) return;
  const nextSquare = whatsNextSquare(coordDiff, an, board);
  //if we have come to the end of the direction
  if (!nextSquare) return;
  //if not then add that square to our legal moves
  legalDots.push(nextSquare);
  range--;
  checkDirectionRecursively(coordDiff, nextSquare.an, board, range);
};

export default checkDirectionRecursively;
