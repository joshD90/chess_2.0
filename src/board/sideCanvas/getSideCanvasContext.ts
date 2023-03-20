import ownPiecesTakenCtx from "./ownPiecesTakenContext";
import opponentPiecesTakenCtx from "./opponentPiecesTakenContext";

const getSideCanvasContext = (
  colorPieces: string,
  boardColor: "black" | "white"
): CanvasRenderingContext2D => {
  if (colorPieces === boardColor) {
    return ownPiecesTakenCtx;
  } else {
    return opponentPiecesTakenCtx;
  }
};
export default getSideCanvasContext;
