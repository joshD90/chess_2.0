import { PieceOffBoard } from "../pieces/pieceOffBoard_class";
import { drawPieceByCoord } from "./drawSinglePiece";
import drawSquareOffBoard from "./drawSquareOffBoard";

const drawTakenPieces = (
  ctx: CanvasRenderingContext2D,
  pieceArray: PieceOffBoard[],
  squareWidth: number
) => {
  pieceArray.forEach((piece) => {
    drawSquareOffBoard(piece.coord, squareWidth, ctx, "#57534e");
    drawPieceByCoord(piece.coord, squareWidth, piece, ctx);
  });
  pieceArray.forEach((piece) =>
    drawTakenMultiplier(ctx, piece, piece.color, squareWidth)
  );
};

const drawTakenMultiplier = (
  ctx: CanvasRenderingContext2D,
  piece: PieceOffBoard,
  color: string,
  squareWidth: number
) => {
  if (!ctx) return;
  if (!piece.numberOf) return;

  ctx.font = "16px Arial";

  ctx.fillStyle = color === "white" ? "black" : "white";
  const x = piece.coord.x;
  const y = piece.coord.y + squareWidth / 2 - 1;
  ctx.fillText(`X${piece.numberOf}`, x, y);
};

export default drawTakenPieces;
