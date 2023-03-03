import { board } from "../board/board_class";
import checkPieceSelected from "./checkPieceSelected";
import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import { canvas } from "../board/canvasContext";
import mouseRelCanvas from "../utils/mouseRelCanvas";

const activatePiece = (e: MouseEvent) => {
  //we only want to be able to click our own pieces and move them
  const playerPieces = board.color === "white" ? whitePieces : blackPieces;

  const mousePos = mouseRelCanvas(e);
  //should return our piece, if not then it should return null
  const pieceSelected = checkPieceSelected(playerPieces, mousePos);
  if (!pieceSelected) return;

  //activate a piece that it is over
  pieceSelected.activate();
};
export default activatePiece;
