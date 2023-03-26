import setAllSquares, { setSingleSquarePos } from "./setSquarePos";
import defineGrid from "./defineGrid";

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

//test our setAllSquares

const testingGrid = defineGrid();

describe("do tests for defining grid", () => {
  test("Check that it is an array", () => {
    expect(setAllSquares(testingGrid, "white", 320)).toBeInstanceOf(Array);
  });
  test("check that the array has length 64", () => {
    expect(setAllSquares(testingGrid, "white", 320).length).toBe(64);
  });
});

describe("each element should fit coordinate format", () => {
  setAllSquares(testingGrid, "white", 320).forEach((el) => {
    test("grid.an has correct properties", () => {
      expect(el).toHaveProperty("an");
      expect(el.an).toHaveProperty("col");
      expect(el.an).toHaveProperty("row");
      expect(typeof el.an.row).toBe("number");
      expect(typeof el.an.col).toBe("string");
    });
    test("grid.anNum has correct properties", () => {
      expect(el).toHaveProperty("anNum");
      expect(el.anNum).toHaveProperty("col");
      expect(el.anNum).toHaveProperty("row");
      expect(typeof el.anNum.row).toBe("number");
      expect(typeof el.anNum.col).toBe("number");
    });
    test("grid.coord has correct properties", () => {
      expect(el).toHaveProperty("coord");
      expect(el.coord).toHaveProperty("x");
      expect(el.coord).toHaveProperty("y");
      expect(typeof el.coord.x).toBe("number");
      expect(typeof el.coord.y).toBe("number");
    });
  });
});
