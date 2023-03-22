import { Board } from "../board/board_class";
import { ctx } from "../board/canvasContext";
import { PieceOffBoard } from "../pieces/pieceOffBoard_class";
import { Coord } from "../types/boardTypes";
import { PieceType } from "../types/pieceTypes";
import anToCoord from "../utils/anToCoord";
//draws the piece by AN - plugging the full piece in
export const drawPiece = (piece: PieceType, board: Board) => {
  if (!ctx) return;
  //convert our algebraic notation to x and y coords
  const pieceCoord = anToCoord(piece.an, board);
  const squareWidth = board.width / 8;

  drawPieceByCoord(
    { x: pieceCoord.x, y: pieceCoord.y },
    squareWidth,
    piece,
    ctx
  );
};
//draws the piece by coordinate - full piece cannot be plugged in
export const drawPieceByCoord = (
  coord: Coord,
  squareWidth: number,
  piece: PieceType | PieceOffBoard,
  ctx: CanvasRenderingContext2D
) => {
  if (!ctx) return;
  //set our parameters

  const img = piece.image;

  //we need to adjust our x and y values so that the center of the picture is drawn on the central coord

  let { x, y } = coord;
  x = x - squareWidth / 2;
  y = y - squareWidth / 2;

  //draw that image to the canvas params 2-4 are for source pic, last 4 are for canvas drawing
  ctx.drawImage(img, 0, 0, 45, 45, x, y, squareWidth, squareWidth);
};
