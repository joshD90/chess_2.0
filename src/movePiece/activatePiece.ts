import { board } from "../board/board_class";
import checkPieceSelected from "./checkPieceSelected";
import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import { canvas } from "../board/canvasContext";

const activatePiece = (e: MouseEvent) => {
  //we only want to be able to click our own pieces and move them
  const playerPieces = board.color === "white" ? whitePieces : blackPieces;
  //clientx and y grab the mouseposition relative to the window.  Subtract the top and left of the canvas to get points relative to canvas itself
  const { top, left } = canvas.getBoundingClientRect();

  const mousePos = { x: e.clientX - left, y: e.clientY - top };
  //should return our piece, if not then it should return null
  const pieceSelected = checkPieceSelected(playerPieces, mousePos);
  if (!pieceSelected) return;
  console.log(pieceSelected, "piece selected");
  //activate a piece that it is over
  pieceSelected.activate();
};
export default activatePiece;
