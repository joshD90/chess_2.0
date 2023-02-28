import { GridSquare } from "../types/boardTypes";
import { ANNum } from "../types/boardTypes";

//when the board resizes we will need to redefine our x and y positions for the center of the squares.
const resetSquarePos = (
  grid: GridSquare[],
  color: string,
  width: number
): GridSquare[] => {
  //this spreads the original AN and ANNum and just changes the x and y coords
  const updatedGrid = grid.map((square) => {
    return { ...square, coord: setSingleSquarePos(square.anNum, color, width) };
  });
  //return the whole array as an updated grid
  return updatedGrid;
};

export const setSingleSquarePos = (
  anNum: ANNum,
  color: string,
  boardWidth: number
) => {
  const squareWidth = boardWidth / 8;
  const halfSquareWidth = boardWidth / 16;

  //depending on which color we are our x y positions will be flipped
  const col = color === "white" ? anNum.col : 7 - anNum.col;
  const row = color === "white" ? anNum.row : 7 - anNum.row;

  const x = col * squareWidth + halfSquareWidth;
  const y = row * squareWidth + halfSquareWidth;

  return { x: x, y: y };
};

export default resetSquarePos;
