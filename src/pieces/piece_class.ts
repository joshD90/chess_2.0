import { board } from "../board/board_class";
import { AN, Coord } from "../types/boardTypes";
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
  isActivated: boolean;
  movingCoord: Coord;
  firstMove: boolean;
  inCheck: boolean;
  isQueening: boolean;
  isEnPassante: boolean;

  constructor(color: string, an: AN, type: string) {
    this.color = color;
    this.an = an;
    this.type = type;
    this.moveDirections = this.setMoveDirections();
    this.range = this.setRange();
    this.image = this.setImage();
    this.isActivated = false;
    this.movingCoord = { x: 0, y: 0 };
    this.firstMove = true;
    this.inCheck = false;
    this.isQueening = false;
    this.isEnPassante = false;
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
  activate() {
    return (this.isActivated = true);
  }
  deactivate() {
    return (this.isActivated = false);
  }
  setMovingCoord(mouseCoord: Coord) {
    return (this.movingCoord = mouseCoord);
  }
}
