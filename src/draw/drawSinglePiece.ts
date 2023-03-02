import { Board } from "../board/board_class";
import { ctx } from "../board/canvasContext";
import { PieceType } from "../types/pieceTypes";
import anToCoord from "../utils/anToCoord";

export const drawPiece = (piece: PieceType, board: Board) => {
  if (!ctx) return;
  //convert our algebraic notation to x and y coords
  const pieceCoord = anToCoord(piece.an, board);
  const squareWidth = board.width / 8;
  const img = piece.image;
  const x = pieceCoord.x - squareWidth / 2;
  const y = pieceCoord.y - squareWidth / 2;

  //draw that image to the canvas
  ctx?.drawImage(piece.image, 0, 0, 45, 45, x, y, squareWidth, squareWidth);
};
