import { Board } from "../../board/board_class";
import { HypotheticalPosition } from "../../types/legalMoveTypes";

const flipBoard = (
  board: Board,
  canvas: HTMLCanvasElement,
  position: HypotheticalPosition
) => {
  //change over who is taking the move
  board.color = board.color === "white" ? "black" : "white";

  if (!board.shouldFlip) return;

  //this will redraw all our pieces and the coordinates
  board.resizeBoard(canvas);

  //once the board is flipped the pawns will need to change the direction they are going based on the color of the board
  position.black.forEach(
    (piece) => (piece.moveDirections = piece.setMoveDirections())
  );
  position.white.forEach(
    (piece) => (piece.moveDirections = piece.setMoveDirections())
  );
};

export default flipBoard;
