import { PieceOffBoard } from "../pieces/pieceOffBoard_class";
import { drawPieceByCoord } from "./drawSinglePiece";
import drawSquareOffBoard from "./drawSquareOffBoard";

const drawTakenPieces = (
  ctx: CanvasRenderingContext2D,
  pieceArray: PieceOffBoard[],
  squareWidth: number
) => {
  pieceArray.forEach((piece) => {
    drawSquareOffBoard(piece.coord, squareWidth, ctx, "#44403c");
    drawPieceByCoord(piece.coord, squareWidth, piece, ctx);
    drawTakenMultiplier(ctx, piece);
  });
};

const drawTakenMultiplier = (
  ctx: CanvasRenderingContext2D,
  piece: PieceOffBoard
) => {
  if (!ctx) return;
  if (!piece.numberOf) return;
  console.log(piece.numberOf);
  ctx.font = "16px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText(`${piece.numberOf}`, piece.coord.x, piece.coord.y);
};

export default drawTakenPieces;
