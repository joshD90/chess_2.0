import { sideOppCanvas } from "./opponentPiecesTakenContext";
import { sideOwnCanvas } from "./ownPiecesTakenContext";

const getSideCanvas = (
  colorPieces: string,
  boardColor: "black" | "white"
): HTMLCanvasElement => {
  if (colorPieces === boardColor) {
    return sideOwnCanvas;
  } else {
    return sideOppCanvas;
  }
};
export default getSideCanvas;
