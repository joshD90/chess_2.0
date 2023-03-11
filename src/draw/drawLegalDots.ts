import { ctx } from "../board/canvasContext";
import drawDot from "./drawDot";
import { LegalMove } from "../types/legalMoveTypes";

const drawLegalDots = (legalMoves: LegalMove[]): void => {
  if (!ctx) return;
  legalMoves.forEach((square) => drawDot(square.square.coord, ctx!));
};

export default drawLegalDots;
