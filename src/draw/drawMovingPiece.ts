import { drawPiece, drawPieceByCoord } from "./drawSinglePiece";
import { canvas } from "../board/canvasContext";
import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import { board } from "../board/board_class";

const drawMovingPiece = () => {
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  //find the activated piece
  const pieceToDraw = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToDraw) return;
  //draw that piece
  drawPieceByCoord(pieceToDraw.movingCoord, board, pieceToDraw);
};

export default drawMovingPiece;
