import { resizeBoard } from "./boardResize";
import activatePiece from "../movePiece/activatePiece";
import setMovingPieceCoord from "../movePiece/setMovingPieceCoord";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

//we need to make sure that our canvas is sized to our window
const addListeners = () => {
  window.addEventListener("resize", resizeBoard);
  canvas.addEventListener("click", activatePiece);
  canvas.addEventListener("mousemove", setMovingPieceCoord);
};

export default addListeners;
