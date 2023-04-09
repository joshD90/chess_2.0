import { Board } from "../../board/board_class";
import getSideCanvas from "../../board/sideCanvas/getSideCanvas";
import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../../board/sideCanvas/piecesTaken_class";
import { HypotheticalPosition } from "../../types/legalMoveTypes";

const flipBoard = (
  board: Board,
  canvas: HTMLCanvasElement,
  position: HypotheticalPosition,
  setup?: boolean
) => {
  //change over who is taking the move
  if (!setup) board.color = board.color === "white" ? "black" : "white";

  if (!board.shouldFlip) return;

  //this will redraw all our pieces and the coordinates
  board.resizeBoard(canvas);

  //update side canvasses
  const whiteCanvas = getSideCanvas("white", board.color as "white" | "black");
  whitePiecesTaken.resizeBoard(whiteCanvas);
  const blackCanvas = getSideCanvas("black", board.color as "white" | "black");
  blackPiecesTaken.resizeBoard(blackCanvas);

  //if we are flipping the board we need to make sure that the names and timer as well
  if (!setup) changeNamesAndTimer();
  //once the board is flipped the pawns will need to change the direction they are going based on the color of the board
  position.black.forEach(
    (piece) => (piece.moveDirections = piece.setMoveDirections())
  );
  position.white.forEach(
    (piece) => (piece.moveDirections = piece.setMoveDirections())
  );
};

const changeNamesAndTimer = () => {
  const playerName = document.getElementById("playerName") as HTMLDivElement;
  const playerTimer = document.getElementById("playerTimer") as HTMLDivElement;

  const opponentName = document.getElementById(
    "opponentName"
  ) as HTMLDivElement;
  const opponentTimer = document.getElementById(
    "opponentTimer"
  ) as HTMLDivElement;
  switchClassList(playerName, opponentName, "playerName", "playerTimer");
  switchClassList(playerTimer, opponentTimer, "playerTimer", "opponentTimer");
};

const switchClassList = (
  el1: HTMLDivElement,
  el2: HTMLDivElement,
  class1: string,
  class2: string
) => {
  if (el1.classList.contains(class1)) {
    el1.classList.remove(class1);
    el1.classList.add(class2);
    el2.classList.remove(class2);
    el2.classList.add(class1);
  } else {
    el1.classList.remove(class2);
    el1.classList.add(class1);
    el2.classList.remove(class1);
    el2.classList.add(class2);
  }
};

export default flipBoard;
