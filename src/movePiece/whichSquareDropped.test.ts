import whichSquareDropped from "./whichSquareDropped";
import { board } from "../board/board_class";

board.makeGrid();

test("Test that returned square will have all the right properties", () => {
  const mouseX = board.width / 8;
  const mouseY = board.width / 8;

  expect(whichSquareDropped({ x: mouseX, y: mouseY })).not.toBe("null");
  //   expect(whichSquareDropped({ x: mouseX, y: mouseY })).toHaveProperty("an");
  //   expect(whichSquareDropped({ x: mouseX, y: mouseY })).toHaveProperty("anNum");
  //   expect(whichSquareDropped({ x: mouseX, y: mouseY })).toHaveProperty("coord");
});

// test("Test that each of the square properties follow the square format", () => {
//   const mouseX = board.width / 8;
//   const mouseY = board.width / 8;
//   expect(whichSquareDropped({ x: mouseX, y: mouseY })?.an).toHaveProperty(
//     "row"
//   );
// });
