import mouseRelCanvas from "../utils/mouseRelCanvas";
import whichSquareDropped from "./whichSquareDropped";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import { board } from "../board/board_class";

import checkLandingOnLegalSquare from "./checkLandingOnLegalSquare";
import { legalDots } from "../legalMoves/pieceDirection/legalDots";

import setCheck from "./actionsOnPlacement/setCheck";
import removePieceByAn from "./actionsOnPlacement/removePieceByAn";

const deactivatePiece = (e: MouseEvent) => {
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  const opponentPieces = board.color === "white" ? blackPieces : whitePieces;

  const opponentColor = board.color === "white" ? "black" : "white";
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

  setCheck(board, whitePieces, blackPieces, opponentColor);
  setCheck(board, whitePieces, blackPieces, board.color);
  if (landingType.moveType === "attack") {
    removePieceByAn(squareToDrop.an, opponentPieces);
  }

  board.color = board.color === "white" ? "black" : "white";
};

export default deactivatePiece;
