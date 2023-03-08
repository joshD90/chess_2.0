import { GridSquare } from "../types/boardTypes";
import { ctx } from "../board/canvasContext";
import drawDot from "./drawDot";

const drawLegalDots = (legalMoves: GridSquare[]): void => {
  if (!ctx) return;
  legalMoves.forEach((square) => drawDot(square.coord, ctx!));
};

export default drawLegalDots;
