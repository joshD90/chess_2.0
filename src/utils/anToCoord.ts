import { Board } from "../board/board_class";
import { Coord } from "../types/boardTypes";
import { AN } from "../types/boardTypes";

const anToCoord = (an: AN, board: Board): Coord => {
  const coord = board.grid.find(
    (square) => square.an.col === an.col && square.an.row === an.row
  );
  if (!coord) throw new Error("This Coord does not exist on the grid");
  //spread as .find only returns a shallow copy and nested coord is still referenced
  return { ...coord.coord };
};

export default anToCoord;
