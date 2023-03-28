import mouseRelCanvas from "../utils/mouseRelCanvas";
import whichSquareDropped from "./whichSquareDropped";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import { board } from "../board/board_class";
import { canvas } from "../board/canvasContext";
import doDrop from "./doDrop";
import { Socket } from "socket.io-client";

const deactivatePiece = (e: MouseEvent | TouchEvent, socket: Socket) => {
  const piecesToSearch = board.color === "white" ? whitePieces : blackPieces;

  //find which piece is activated
  const pieceToChange = piecesToSearch.find(
    (piece) => piece.isActivated === true
  );

  if (!pieceToChange) return;
  //we need to get the last position of the moving piece
  const mousePos =
    e instanceof MouseEvent ? mouseRelCanvas(e) : pieceToChange.movingCoord;

  const squareToDrop = whichSquareDropped(mousePos);

  if (!squareToDrop) return pieceToChange.deactivate();

  const position = { white: whitePieces, black: blackPieces };
  //once we have identified our piece and our square we can do the drop logic
  doDrop(squareToDrop, position, pieceToChange, board, canvas, socket);
};

export default deactivatePiece;
