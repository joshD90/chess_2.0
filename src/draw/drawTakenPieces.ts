import { PieceOffBoard } from "../pieces/pieceOffBoard_class";
import { drawPieceByCoord } from "./drawSinglePiece";
import drawSquareOffBoard from "./drawSquareOffBoard";

const drawTakenPieces = (
  ctx: CanvasRenderingContext2D,
  pieceArray: PieceOffBoard[],
  squareWidth: number
) => {
  pieceArray.forEach((piece) => {
    drawSquareOffBoard(piece.coord, squareWidth, ctx, "beige");

    drawPieceByCoord(piece.coord, squareWidth, piece, ctx);
  });
};

export default drawTakenPieces;
