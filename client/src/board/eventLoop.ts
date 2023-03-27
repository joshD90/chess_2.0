import drawAll from "../draw/drawAll";
import { board } from "../board/board_class";
//declare our event loop
const eventLoop = () => {
  requestAnimationFrame(() => {
    drawAll(board);
    eventLoop();
  });
};

export default eventLoop;
