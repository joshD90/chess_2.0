import { drawPiece, drawPieceByCoord } from "./drawSinglePiece";
import { canvas } from "../board/canvasContext";
import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import { board } from "../board/board_class";

const drawMovingPiece = () => {
  const halfSquareWidth = board.width / 16;
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  //find the activated piece
  const pieceToDraw = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToDraw) return;

  //we need to adjust the piece so that the center is drawn on the mouse

  //draw that piece
  drawPieceByCoord(pieceToDraw.movingCoord, board.width / 8, pieceToDraw);
};

export default drawMovingPiece;
