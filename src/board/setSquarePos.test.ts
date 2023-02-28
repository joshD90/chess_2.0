import defineGrid from "./defineGrid";
import setSquarePos from "./setSquarePos";

const width = 160;
const grid = defineGrid();

describe("test for setting our x and y coords", () => {
  const colors = ["white", "black"];
  colors.forEach((color) => {
    test("check that it is an array", () => {
      expect(setSquarePos(grid, color, width)).toBeInstanceOf(Array);
    });
    test("check that we have 64 points", () => {
      expect(setSquarePos(grid, color, width)).toHaveLength(64);
    });
  });

  test("check coord a1 for white", () => {
    expect(setSquarePos(grid, "white", width)[0]).toEqual({
      x: width / 16,
      y: width / 16,
    });
  });

  test("check coord a1 for black", () => {
    expect(setSquarePos(grid, "white", width)[0]).toEqual({
      x: width - width / 16,
      y: width - width / 16,
    });
  });
});
