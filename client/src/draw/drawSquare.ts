import { ctx } from "../board/canvasContext";
import { board } from "../board/board_class";
import { Coord } from "../types/boardTypes";

//draw a square on the canvas
const drawSquare = (square: Coord, squareColor: string) => {
  if (!ctx) return;
  let color;
  const x = square.x - board.width / 16;
  const y = square.y - board.width / 16;
  const width = board.width / 8;

  color = squareColor;
  if (squareColor === "white") color = "white";
  if (squareColor === "black") color = "#4e6439";

  //draw our square
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, width);
};

export default drawSquare;
