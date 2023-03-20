import sideSizeByWindow from "./sideSizeByWindow";

export const sideOppCanvas = document.getElementById(
  "sideCanvasOpponent"
) as HTMLCanvasElement;

sideSizeByWindow(sideOppCanvas);

const opponentPiecesTakenCtx = <CanvasRenderingContext2D>(
  sideOppCanvas.getContext("2d")
);

export default opponentPiecesTakenCtx;
