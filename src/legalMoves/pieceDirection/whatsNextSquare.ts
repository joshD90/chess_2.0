import anToCoord from "../../utils/anToCoord";

import { Board } from "../../board/board_class";
import { CoordDiff } from "../../types/legalMoveTypes";
import { AN } from "../../types/boardTypes";
import { GridSquare } from "../../types/boardTypes";

const whatsNextSquare = (
  coordDiff: CoordDiff,
  currentAN: AN,
  board: Board
): GridSquare | null => {
  const { dx, dy } = coordDiff;
  //turn our piece Algebraic notation into x and y coord
  const pieceCoord = anToCoord(currentAN, board);
  const { x, y } = pieceCoord;
  //adjust to our new coord
  const newX = x + dx;
  const newY = y + dy;
  //find where our new coordinate match the board
  const newSquare = board.grid.find(
    (square) => square.coord.x === newX && square.coord.y === newY
  );
  //if the square is off the edge of the board
  if (!newSquare) return null;

  return newSquare;
};

export default whatsNextSquare;
