import { canvas } from "../board/canvasContext";
import { Coord } from "../types/boardTypes";

//get the position of the mouse relative to the canvas
const mouseRelCanvas = (e: MouseEvent | TouchEvent): Coord => {
  if (e instanceof MouseEvent) {
    const { left, top } = canvas.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    return { x: x, y: y };
    //if touchstart or touch move we can use this.  We will type guard to make sure that touch end does not utilise this function
  } else if (e.touches[0]) {
    const { left, top } = canvas.getBoundingClientRect();

    const x = e.touches[0].clientX - left;
    const y = e.touches[0].clientY - top;
    return { x: x, y: y };
  }
  return { x: 0, y: 0 };
};

export default mouseRelCanvas;
