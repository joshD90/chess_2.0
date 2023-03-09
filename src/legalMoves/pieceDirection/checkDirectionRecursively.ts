import { CoordDiff } from "../../types/legalMoveTypes";
import { AN } from "../../types/boardTypes";
import { Board } from "../../board/board_class";

import whatsNextSquare from "./whatsNextSquare";
import { legalDots } from "./legalDots";
import hitsOwnPiece from "../generalRestrictions/hitsOwnPiece";

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
  //if its hits our own piece exit loop
  if (hitsOwnPiece(nextSquare.an, board)) return;

  //we run a function here that determins whats the nature of the move. This function checks whether the legal move is an attacking move aka hits an opponent

  //if not then add that square to our legal moves
  legalDots.push(nextSquare);
  range--;
  checkDirectionRecursively(coordDiff, nextSquare.an, board, range);
};

export default checkDirectionRecursively;
