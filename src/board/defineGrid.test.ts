import defineGrid from "./defineGrid";

describe("do tests for defining grid", () => {
  test("Check that it is an array", () => {
    expect(defineGrid()).toBeInstanceOf(Array);
  });
  test("check that the array has length 64", () => {
    expect(defineGrid().length).toBe(64);
  });
});

describe("each element should fit coordinate format", () => {
  defineGrid().forEach((el) => {
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

// test("dummy stand in test", () => {
//   expect(1).toBe(1);
// });
