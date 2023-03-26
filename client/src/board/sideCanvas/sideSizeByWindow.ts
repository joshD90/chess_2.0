import { board } from "../board_class";

const sideSizeByWindow = (canvas: HTMLCanvasElement) => {
  if (window.innerWidth < 720) {
    canvas.height = window.innerWidth / 15 > 45 ? 45 : window.innerWidth / 15;
    canvas.width = board.width * 0.6;
  } else {
    canvas.width = window.innerWidth / 15 > 45 ? 45 : window.innerWidth / 15;
    canvas.height = board.width * 0.6;
  }
};

export default sideSizeByWindow;
