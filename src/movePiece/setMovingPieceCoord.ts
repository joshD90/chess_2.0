import { canvas } from "../board/canvasContext";
import { board } from "../board/board_class";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";

const setMovingPieceCoord = (e: MouseEvent) => {
  const { left, top } = canvas.getBoundingClientRect();
  const halfSquareWidth = board.width / 16;
  //have to adjust for the position of the container to get a relative x and y value
  const x = e.clientX - left - halfSquareWidth;
  const y = e.clientY - top - halfSquareWidth;

  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  //found our activated piece and update its movingCoord prop
  const pieceToChange = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToChange) return;

  pieceToChange.setMovingCoord({ x: x, y: y });
};

export default setMovingPieceCoord;
