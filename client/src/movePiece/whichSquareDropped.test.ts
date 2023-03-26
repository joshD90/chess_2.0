import whichSquareDropped from "./whichSquareDropped";
import { board } from "../board/board_class";

board.makeGrid();

test("Test that returned square will have all the right properties", () => {
  //board.width is already set up due to the fact that it is aligned to the window and the window in jsdom is auto set to 768px
  const mouseX = board.width / 9;
  const mouseY = board.width / 9;

  expect(whichSquareDropped({ x: mouseX, y: mouseY })).not.toBe("null");
  expect(whichSquareDropped({ x: mouseX, y: mouseY })).toHaveProperty("an");
  expect(whichSquareDropped({ x: mouseX, y: mouseY })).toHaveProperty("anNum");
  expect(whichSquareDropped({ x: mouseX, y: mouseY })).toHaveProperty("coord");
});

test("Test that the top left square is 'a''8' for white and 'a''1'", () => {
  const mouseX = board.width / 9;
  const mouseY = board.width / 9;
  const funcToTest = whichSquareDropped({ x: mouseX, y: mouseY });
  expect(funcToTest?.an).toHaveProperty("row");
  expect(funcToTest?.an).toHaveProperty("col");
  expect(funcToTest?.an.col).toBe("a");
  if (board.color === "white") {
    expect(funcToTest?.an.row).toBe(7);
  } else expect(funcToTest?.an.row).toBe(0);
});

test("Test that the bottom right square is 'h' '8' for black and 'h' '1' for white", () => {
  const mouseX = board.width - board.width / 9;
  const mouseY = board.width - board.width / 9;

  const funcToTest = whichSquareDropped({ x: mouseX, y: mouseY });

  expect(funcToTest?.an).toHaveProperty("row");
  expect(funcToTest?.an).toHaveProperty("col");

  expect(funcToTest?.an.col).toBe("h");
  if (board.color === "white") {
    expect(funcToTest?.an.row).toBe(0);
  } else expect(funcToTest?.an.row).toBe(7);
});
