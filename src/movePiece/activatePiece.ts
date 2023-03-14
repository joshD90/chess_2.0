import { board } from "../board/board_class";
import checkPieceSelected from "./checkPieceSelected";
import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import mouseRelCanvas from "../utils/mouseRelCanvas";
import checkAllDirections from "../legalMoves/pieceDirection/checkAllDirections";
import { legalDots } from "../legalMoves/pieceDirection/legalDots";
import getLegalMoves from "../legalMoves/getLegalMoves";
import { LegalMove } from "../types/legalMoveTypes";

const activatePiece = (e: MouseEvent) => {
  // //we only want to be able to click our own pieces and move them
  const playerPieces = board.color === "white" ? whitePieces : blackPieces;

  const mousePos = mouseRelCanvas(e);
  //should return our piece, if not then it should return null
  const pieceSelected = checkPieceSelected(playerPieces, mousePos);
  if (!pieceSelected) return;

  //activate a piece that it is over
  pieceSelected.activate();
  pieceSelected.movingCoord = mousePos;

  //clear the legal moves array before performing new check
  legalDots.length = 0;
  //we want to have something that getLegalMoves(pieceSelected,board,legalDots, whitePieces,blackPieces) returns void but pushes onto the legal dots
  getLegalMoves(pieceSelected, board, legalDots, whitePieces, blackPieces);
  console.log(legalDots);
};
export default activatePiece;
