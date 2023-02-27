import { GridCoord } from "../types/boardTypes";
//we create a grid of 8 X 8 with letters and numbers
const defineGrid = (): GridCoord[] => {
  let grid: GridCoord[] = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      grid.push({ col: cols[c], row: r });
    }
  }
  return grid;
};

const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default defineGrid;
