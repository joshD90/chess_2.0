import { board } from "../board/board_class";
import { AN } from "../types/boardTypes";
import anToCoord from "./anToCoord";

//when we import the board instatiated object, jest doesn't automatically reference the code that creates the grid as this is done elsewhere in our code
board.makeGrid();

const demoAN: AN = { col: "a", row: 1 };

describe("testing anToCoord", () => {
  test("coord returns a coordinate", () => {
    expect(anToCoord(demoAN, board)).toHaveProperty("x");
    expect(anToCoord(demoAN, board)).toHaveProperty("y");
  });

  test("that we have a grid", () => {
    expect(board.getGrid()).not.toBe("null");
    expect(board.getGrid()).toHaveLength(64);
  });
  test("that our found square matches what we expect from running our demo coord", () => {
    const targetGridSquare = board
      .getGrid()
      .find(
        (square) => square.an.col === demoAN.col && square.an.row === demoAN.row
      );

    expect(targetGridSquare?.an).toEqual(demoAN);
    expect(anToCoord(demoAN, board)).toEqual(targetGridSquare?.coord);
    expect(anToCoord(demoAN, board)).not.toBe(targetGridSquare?.coord);
  });
});
