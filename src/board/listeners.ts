import { resizeBoard } from "./boardResize";
import activatePiece from "../movePiece/activatePiece";
import setMovingPieceCoord from "../movePiece/setMovingPieceCoord";
import deactivatePiece from "../movePiece/deactivatePiece";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

//we need to make sure that our canvas is sized to our window
const addListeners = () => {
  canvas.addEventListener("load", resizeBoard);
  window.addEventListener("resize", resizeBoard);
  canvas.addEventListener("mousedown", activatePiece);
  canvas.addEventListener("mouseup", deactivatePiece);
  canvas.addEventListener("mousemove", setMovingPieceCoord);
};

export default addListeners;
