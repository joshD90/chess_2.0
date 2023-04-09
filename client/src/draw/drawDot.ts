import { Coord } from "../types/boardTypes";

const drawDot = (coord: Coord, ctx: CanvasRenderingContext2D): void => {
  const { x, y } = coord;
  const radius = 5;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgba(118, 150, 86,0.8)";
  ctx.fill();
  ctx.closePath();
};

export default drawDot;
