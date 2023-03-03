import { Board } from "../board/board_class";
import { ctx } from "../board/canvasContext";
import { Coord } from "../types/boardTypes";
import { PieceType } from "../types/pieceTypes";
import anToCoord from "../utils/anToCoord";

export const drawPiece = (piece: PieceType, board: Board) => {
  if (!ctx) return;
  //convert our algebraic notation to x and y coords
  const pieceCoord = anToCoord(piece.an, board);
  const squareWidth = board.width / 8;
  const x = pieceCoord.x - squareWidth / 2;
  const y = pieceCoord.y - squareWidth / 2;
  drawPieceByCoord({ x: x, y: y }, board, piece);
};

export const drawPieceByCoord = (
  coord: Coord,
  board: Board,
  piece: PieceType
) => {
  if (!ctx) return;
  const { x, y } = coord;
  //set our parameters
  const squareWidth = board.width / 8;
  const img = piece.image;
  //draw that image to the canvas params 2-4 are for source pic, last 4 are for canvas drawing
  ctx.drawImage(img, 0, 0, 45, 45, x, y, squareWidth, squareWidth);
};
