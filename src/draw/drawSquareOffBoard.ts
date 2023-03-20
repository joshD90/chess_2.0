import { Coord } from "../types/boardTypes";

const drawSquareOffBoard = (
  coords: Coord,
  width: number,
  ctx: CanvasRenderingContext2D,
  color: string
) => {
  const { x, y } = coords;
  const cornerX = x - width / 2;
  const cornerY = y - width / 2;
  //draw our square
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = color;
  ctx.fillRect(cornerX, cornerY, width, width);
};

export default drawSquareOffBoard;
