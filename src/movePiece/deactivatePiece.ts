import mouseRelCanvas from "../utils/mouseRelCanvas";
import whichSquareDropped from "./whichSquareDropped";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import { board } from "../board/board_class";

const deactivatePiece = (e: MouseEvent) => {
  //find which piece is activated
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;
  const pieceToChange = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );
  if (!pieceToChange) return;

  const mousePos = mouseRelCanvas(e);
  const squareToDrop = whichSquareDropped(mousePos);

  if (!squareToDrop) return pieceToChange.deactivate();

  //need to run all our legal move checks here later on

  //update our pieces new AN and Deactivate
  pieceToChange.deactivate();
  pieceToChange.an = squareToDrop?.an;
};

export default deactivatePiece;
