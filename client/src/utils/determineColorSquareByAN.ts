import { Board } from "../board/board_class";
import { cols } from "../board/defineGrid";
import { AN } from "../types/boardTypes";

const determineColorSquareByAN = (an: AN): "dark" | "light" => {
  //convert our letters into numbers for calculation
  const col = cols.indexOf(an.col);
  if (col === -1) throw Error("This AN is malformed");

  const { row } = an;

  if (col % 2 === 0 && row % 2 === 0) return "dark";
  if (col % 2 === 0 && row % 2 === 1) return "light";

  if (col % 2 === 1 && row % 2 === 0) return "light";
  if (col % 2 === 1 && row % 2 === 1) return "dark";

  //should never reach this but need to satisfy ts
  return "light";
};
export default determineColorSquareByAN;
