import { Coord } from "../types/boardTypes";

const drawDot = (coord: Coord, ctx: CanvasRenderingContext2D): void => {
  const { x, y } = coord;

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 5, 5);
};

export default drawDot;
