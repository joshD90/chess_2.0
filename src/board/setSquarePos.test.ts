import { setSingleSquarePos } from "./setSquarePos";

describe("testing setSingleSquarePos functionality works", () => {
  test("check that it returns an object with correct properties", () => {
    expect(setSingleSquarePos({ row: 1, col: 2 }, "white", 320)).toHaveProperty(
      "x"
    );
    expect(setSingleSquarePos({ row: 1, col: 2 }, "white", 320)).toHaveProperty(
      "y"
    );
  });
  test("check that output is right for white square", () => {
    expect(setSingleSquarePos({ row: 0, col: 0 }, "white", 320).x).toBe(20);
    expect(setSingleSquarePos({ row: 0, col: 0 }, "white", 320).y).toBe(300);
  });
  test("check that output is right for black square", () => {
    expect(setSingleSquarePos({ row: 0, col: 0 }, "black", 320).x).toBe(300);
    expect(setSingleSquarePos({ row: 0, col: 0 }, "black", 320).y).toBe(20);
  });
});
