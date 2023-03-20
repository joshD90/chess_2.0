import { board } from "../board_class";

const sideSizeByWindow = (canvas: HTMLCanvasElement) => {
  if (window.innerWidth < 720) {
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerWidth / 15 > 45 ? 45 : window.innerWidth / 15;
  } else {
    canvas.height = board.width;
    canvas.width = window.innerWidth / 15 > 45 ? 45 : window.innerWidth / 15;
  }
};

export default sideSizeByWindow;
