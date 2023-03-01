import { board } from "../board/board_class";
import { AN } from "../types/boardTypes";
import createMoveDirections from "./createMoveDirections";
import creatingRange from "./creatingRange";

export class Piece {
  color: string;
  an: AN;
  type: string;
  moveDirections: string[];
  range: number;

  constructor(color: string, an: AN, type: string) {
    this.color = color;
    this.an = an;
    this.type = type;
    this.moveDirections = this.setMoveDirections();
    this.range = this.setRange();
  }

  setMoveDirections() {
    return createMoveDirections(this.type, board, this.color);
  }
  setRange() {
    return creatingRange(this.type);
  }
}
