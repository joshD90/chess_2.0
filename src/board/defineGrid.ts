import { GridSquare } from "../types/boardTypes";
import { board } from "./board_class";
import { setSingleSquarePos } from "./setSquarePos";
//we create a grid where each square has the Algebraic notation, the AN converted to numbers, and a corresponding x and y centerpoint
const defineGrid = (): GridSquare[] => {
  let grid: GridSquare[] = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      //add our algebraic notation version
      const an = { col: cols[c], row: r };
      //have a converted number scored
      const anNum = { col: c, row: r };
      //set our x and y based on this algebraic notation
      const coord = setSingleSquarePos(anNum, board.color, board.width);
      grid.push({ an: an, anNum: anNum, coord: coord });
    }
  }
  return grid;
};

export const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default defineGrid;
