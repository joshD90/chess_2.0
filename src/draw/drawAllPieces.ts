import { PieceType } from "../types/pieceTypes";

import { board } from "../board/board_class";
import { drawPiece } from "./drawSinglePiece";

const drawAllPieces = (colorPieces: PieceType[]) => {
  colorPieces.forEach((piece) => {
    if (piece.isActivated) return;
    drawPiece(piece, board);
  });
};

export default drawAllPieces;
