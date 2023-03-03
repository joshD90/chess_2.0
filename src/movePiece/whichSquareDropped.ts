import detectWithinSquare from "./detectWithinSquare";
import { board } from "../board/board_class";

import { Coord, GridSquare } from "../types/boardTypes";

const whichSquareDropped = (mousePos: Coord): GridSquare | null => {
  const square = board.grid.find((square) => {
    return detectWithinSquare(square.coord, mousePos, board.width);
  });
  if (!square) return null;
  return square;
};

export default whichSquareDropped;
