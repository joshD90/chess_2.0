import { board } from "../board/board_class";
import { AN } from "../types/boardTypes";
import anToCoord from "./anToCoord";

const demoAN: AN = { col: "a", row: 1 };

describe("testing anToCoord", () => {
  test("coord returns a coordinate", () => {
    expect(anToCoord(demoAN, board)).toHaveProperty("x");
    expect(anToCoord(demoAN, board)).toHaveProperty("y");
  });
  test("function has created a shallow copy", () => {
    const targetSquare = board.grid.find(
      (square) => square.an.col === demoAN.col && square.an.row === demoAN.row
    );
    expect(anToCoord(demoAN, board)).toEqual(targetSquare?.coord);
    expect(anToCoord(demoAN, board)).not.toBe(targetSquare?.coord);
  });
});
