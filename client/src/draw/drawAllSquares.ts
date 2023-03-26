import { GridSquare } from "../types/boardTypes";
import drawSquare from "./drawSquare";
import { board } from "../board/board_class";

const drawAllSquares = (grid: GridSquare[]) => {
  grid.forEach((square) => {
    if (board.color === "white") {
      if (square.anNum.row % 2 === 0) {
        if (square.anNum.col % 2 !== 0) {
          return drawSquare(square.coord, "white");
        } else return drawSquare(square.coord, "black");
      } else {
        if (square.anNum.col % 2 !== 0) {
          return drawSquare(square.coord, "black");
        } else return drawSquare(square.coord, "white");
      }
    } else {
      if (square.anNum.row % 2 === 0) {
        if (square.anNum.col % 2 !== 0) {
          return drawSquare(square.coord, "white");
        } else return drawSquare(square.coord, "black");
      } else {
        if (square.anNum.col % 2 !== 0) {
          return drawSquare(square.coord, "black");
        } else return drawSquare(square.coord, "white");
      }
    }
  });
};

export default drawAllSquares;
