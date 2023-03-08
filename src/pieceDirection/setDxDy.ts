import { Board } from "../board/board_class";
import { CoordDiff } from "../types/legalMoveTypes";

const setDxDy = (direction: string, board: Board): CoordDiff => {
  let unitX: number;
  let unitY: number;

  switch (direction) {
    //straight directions
    case "up":
      unitX = 0;
      unitY = -1;
      break;
    case "down":
      unitX = 0;
      unitY = 1;
      break;
    case "right":
      unitX = 1;
      unitY = 0;
      break;
    case "left":
      unitX = -1;
      unitY = 0;
      break;
    //diagonal directions
    case "diagUpLeft":
      unitX = -1;
      unitY = -1;
      break;
    case "diagUpRight":
      unitX = 1;
      unitY = -1;
      break;
    case "diagDownLeft":
      unitX = -1;
      unitY = 1;
      break;
    case "diagDownRight":
      unitX = 1;
      unitY = 1;
      break;
    //knight moves
    case "oneoclock":
      unitX = 1;
      unitY = -2;
      break;
    case "twooclock":
      unitX = 2;
      unitY = -1;
      break;
    case "fouroclock":
      unitX = 2;
      unitY = -1;
      break;
    case "fiveoclock":
      unitX = 1;
      unitY = -2;
      break;
    case "sevenoclock":
      unitX = -1;
      unitY = -2;
      break;
    case "eightoclock":
      unitX = -2;
      unitY = -1;
      break;
    case "tenoclock":
      unitX = -2;
      unitY = 1;
      break;
    case "elevenoclock":
      unitX = -1;
      unitY = 2;
      break;

    default:
      unitX = 0;
      unitY = 0;
      break;
  }
  const squareWidth = board.width / 8;
  //convert our unit difference into meaningful distances in relation to board
  const dx = unitX * squareWidth;
  const dy = unitY * squareWidth;

  return { dx, dy };
};

export default setDxDy;
