import sideSizeByWindow from "./sideSizeByWindow";

export const sideOwnCanvas = document.getElementById(
  "sideCanvasPlayer"
) as HTMLCanvasElement;

sideSizeByWindow(sideOwnCanvas);

const ownPiecesTakenCtx = <CanvasRenderingContext2D>(
  sideOwnCanvas.getContext("2d")
);

export default ownPiecesTakenCtx;
