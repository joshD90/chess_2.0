import { canvas } from "../board/canvasContext";
import { Coord } from "../types/boardTypes";

//get the position of the mouse relative to the canvas
const mouseRelCanvas = (e: MouseEvent): Coord => {
  const { left, top } = canvas.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  return { x: x, y: y };
};

export default mouseRelCanvas;
