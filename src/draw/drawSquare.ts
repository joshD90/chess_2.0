import { ctx } from "../board/canvasContext";
import { board } from "../board/board_class";
import { SquarePos } from "../types/boardTypes";
//draw a square on the canvas
const drawSquare = (square: SquarePos, squareColor: string) => {
  if (!ctx) return;

  const x = square.x - board.width / 16;
  const y = square.y - board.width / 16;
  const width = board.width / 8;
  const color = squareColor === "white" ? "white" : "black";

  //draw our square
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, width);
};

export default drawSquare;
