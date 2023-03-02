import { Board } from "../board/board_class";

const queenMove = [
  "up",
  "down",
  "left",
  "right",
  "diagUpLeft",
  "diagUpRight",
  "diagDownLeft",
  "diagDownRight",
];
const kingMove = queenMove;
const rookMove = ["up", "down", "left", "right"];
const bishopMove = [
  " diagUpLeft",
  "diagUpRight",
  "diagDownLeft",
  "diagDownRight",
];
const pawnOwnMove = ["up", "diagUpLeft", "diagUpRight"];
const pawnOpponentMove = ["down", "diagDownLeft", "diagDownRight"];
const knightMove = [
  "oneoclock",
  "twooclock",
  "fouroclock",
  "fiveoclock",
  "sevenoclock",
  "eightoclock",
  "tenoclock",
  "elevenoclock",
];

const createMoveDirections = (
  type: string,
  board: Board,
  pieceColor: string
) => {
  switch (type) {
    case "queen":
      return queenMove;
    case "king":
      return kingMove;
    case "rook":
      return rookMove;
    case "bishop":
      return bishopMove;
    case "pawn":
      if (board.color === pieceColor) {
        return pawnOwnMove;
      } else return pawnOpponentMove;
    case "knight":
      return knightMove;
    default:
      return [];
  }
};

export default createMoveDirections;
