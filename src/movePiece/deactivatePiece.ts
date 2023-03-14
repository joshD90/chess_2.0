import mouseRelCanvas from "../utils/mouseRelCanvas";
import whichSquareDropped from "./whichSquareDropped";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import { board } from "../board/board_class";

import checkLandingOnLegalSquare from "./checkLandingOnLegalSquare";
import { legalDots } from "../legalMoves/pieceDirection/legalDots";

import setCheck from "./actionsOnPlacement/setCheck";
import removePieceByAn from "./actionsOnPlacement/removePieceByAn";
import { canvas } from "../board/canvasContext";

const deactivatePiece = (e: MouseEvent) => {
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  const opponentPieces = board.color === "white" ? blackPieces : whitePieces;

  //find which piece is activated
  const pieceToChange = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToChange) return;

  const mousePos = mouseRelCanvas(e);
  const squareToDrop = whichSquareDropped(mousePos);

  if (!squareToDrop) return pieceToChange.deactivate();

  //see what sort of legal move we are landing on and determine what we need to do
  const landingType = checkLandingOnLegalSquare(squareToDrop, legalDots);

  if (!landingType) return pieceToChange.deactivate();
  //update our pieces new AN and Deactivate
  pieceToChange.deactivate();
  pieceToChange.an = squareToDrop?.an;
  pieceToChange.firstMove = false;

  if (landingType.moveType === "attack") {
    removePieceByAn(squareToDrop.an, opponentPieces);
  }
  const position = { white: whitePieces, black: blackPieces };
  //do our move operators, move this into a seperate function.
  setCheck(board, position, "white");
  setCheck(board, position, "black");
  //switch over our board
  board.color = board.color === "white" ? "black" : "white";
  // board.resizeBoard(canvas);
  // blackPieces.forEach(
  //   (piece) => (piece.moveDirections = piece.setMoveDirections())
  // );
  // whitePieces.forEach(
  //   (piece) => (piece.moveDirections = piece.setMoveDirections())
  // );
};

export default deactivatePiece;
