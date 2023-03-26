import detectWithinSquare from "./detectWithinSquare";

test("check detect within square returns correctly", () => {
  const coord = { x: 160, y: 160 };
  const mousePos = { x: 170, y: 170 };

  expect(detectWithinSquare(coord, mousePos, 320)).toBe(true);
  expect(detectWithinSquare(coord, mousePos, 160)).toBe(false);
});
