import checkSingleDirection from "./checkSingleDirection";
import setDxDy from "./setDxDy";
import checkDirectionRecursively from "./checkDirectionRecursively";
import { board } from "../../board/board_class";
import { PieceType } from "../../types/pieceTypes";
import blackPieces from "../../pieces/blackPieces";
import whitePieces from "../../pieces/whitePieces";

jest.mock("./setDxDy", () => ({
  setDxDy: jest.fn(),
  __esModule: true,
}));

jest.mock("./checkDirectionRecursively", () => ({
  checkDirectionRecursively: jest.fn(),
  __esModule: true,
}));

test("checking to make sure that it calls the correct functions the right number of times", () => {
  const image = new Image();
  const testPiece: PieceType = {
    color: "white",
    an: { row: 1, col: "a" },
    type: "rook",
    moveDirections: ["up"],
    range: 8,
    isActivated: false,
    image: image,
    movingCoord: { x: 0, y: 0 },
    firstMove: true,
    inCheck: false,
    isQueening: false,
    activate: () => {
      return true;
    },
    deactivate: () => {
      return false;
    },
    setMovingCoord: () => {
      return { x: 0, y: 0 };
    },
    setMoveDirections: () => {},
  };

  const position = { white: whitePieces, black: blackPieces };

  checkSingleDirection("up", testPiece, board, [], position);
  expect(setDxDy).toHaveBeenCalledTimes(1);
  expect(checkDirectionRecursively).toHaveBeenCalledTimes(1);
});
