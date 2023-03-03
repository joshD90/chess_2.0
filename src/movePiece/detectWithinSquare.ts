import { Coord } from "../types/boardTypes";
const detectWithinSquare = (coord: Coord, mousePos: Coord, width: number) => {
  const halfSquare = width / 16;

  if (
    mousePos.x > coord.x - halfSquare &&
    mousePos.x < coord.x + halfSquare &&
    mousePos.y > coord.y - halfSquare &&
    mousePos.y < coord.y + halfSquare
  )
    return true;
  return false;
};

export default detectWithinSquare;
