import { ctx } from "../board/canvasContext";
import { GridSquare } from "../types/boardTypes";

const drawAllAN = (grid: GridSquare[]) => {
  grid.forEach((square) => {
    drawAlgebraicNotation(square);
  });
};

const drawAlgebraicNotation = (square: GridSquare) => {
  if (!ctx) return;
  ctx.font = "16px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText(
    `${square.an.col}${square.an.row + 1}`,
    square.coord.x,
    square.coord.y
  );
};

export default drawAllAN;
