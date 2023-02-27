import { ctx } from "../board/canvasContext";
//draw a square on the canvas
const drawSquare = () => {
  if (!ctx) return;
  ctx.beginPath();
  ctx.rect(20, 20, 40, 200);
  ctx.stroke();
};

export default drawSquare;
