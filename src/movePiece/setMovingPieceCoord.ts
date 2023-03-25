import { canvas } from "../board/canvasContext";
import { board } from "../board/board_class";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import mouseRelCanvas from "../utils/mouseRelCanvas";
//update the a piece's moving piece coordinate to equal the mouse pos
const setMovingPieceCoord = (e: MouseEvent | TouchEvent) => {
  const { left, top } = canvas.getBoundingClientRect();
  const mousePos = mouseRelCanvas(e);
  //only need to search through our own pieces
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  //found our activated piece and update its movingCoord prop
  const pieceToChange = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToChange) return;

  pieceToChange.setMovingCoord(mousePos);
};

export default setMovingPieceCoord;
