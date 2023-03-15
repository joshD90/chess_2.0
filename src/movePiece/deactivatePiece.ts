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
import flipBoard from "./actionsOnPlacement/flipBoard";
import doDrop from "./doDrop";

const deactivatePiece = (e: MouseEvent) => {
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;

  //find which piece is activated
  const pieceToChange = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToChange) return;

  const mousePos = mouseRelCanvas(e);
  const squareToDrop = whichSquareDropped(mousePos);

  if (!squareToDrop) return pieceToChange.deactivate();

  const position = { white: whitePieces, black: blackPieces };
  //once we have identified our piece and our square we can do the drop logic
  doDrop(squareToDrop, position, pieceToChange, board, canvas);
};

export default deactivatePiece;
