import { resizeBoard } from "./boardResize";
import activatePiece from "../movePiece/activatePiece";
import setMovingPieceCoord from "../movePiece/setMovingPieceCoord";
import deactivatePiece from "../movePiece/deactivatePiece";
import setBoardShouldFlip from "./setBoardShouldFlip";
import selectPromotion from "./queeningSelection/selectPromotion";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const flipToggle = document.querySelector(".checkbox") as HTMLInputElement;

//we need to make sure that our canvas is sized to our window
const addListeners = () => {
  //board changes
  canvas.addEventListener("load", resizeBoard);
  window.addEventListener("resize", resizeBoard);
  //mouse listeners
  canvas.addEventListener("mousedown", activatePiece);
  canvas.addEventListener("mouseup", deactivatePiece);
  canvas.addEventListener("mousedown", selectPromotion);
  canvas.addEventListener("mousemove", setMovingPieceCoord);
  //finger touch listeners
  canvas.addEventListener("touchstart", activatePiece, { passive: true });
  canvas.addEventListener("touchend", deactivatePiece, { passive: true });
  canvas.addEventListener("touchmove", setMovingPieceCoord, { passive: true });
  canvas.addEventListener("touchstart", selectPromotion, { passive: true });
  //toggle event listener
  flipToggle.addEventListener("change", setBoardShouldFlip);
};

export default addListeners;
