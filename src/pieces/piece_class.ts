import { board } from "../board/board_class";
import { AN } from "../types/boardTypes";
import createMoveDirections from "./createMoveDirections";
import creatingRange from "./creatingRange";
import { creatingImage } from "./creatingImage";

export class Piece {
  color: string;
  an: AN;
  type: string;
  moveDirections: string[];
  range: number;
  image: HTMLImageElement;

  constructor(color: string, an: AN, type: string) {
    this.color = color;
    this.an = an;
    this.type = type;
    this.moveDirections = this.setMoveDirections();
    this.range = this.setRange();
    this.image = this.setImage();
  }
  //these are used in making the rest of our piece properties from existing data
  setMoveDirections() {
    return createMoveDirections(this.type, board, this.color);
  }
  setRange() {
    return creatingRange(this.type);
  }
  setImage() {
    return creatingImage(this.color, this.type);
  }
}
