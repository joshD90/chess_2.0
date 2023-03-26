import setQueeningCoords from "../board/queeningSelection/setQueeningCoords";
import { Coord } from "../types/boardTypes";
import { creatingImage } from "./creatingImage";
import setPieceValue from "./setPieceValue";

export class PieceOffBoard {
  color: "white" | "black";
  type: string;
  image: HTMLImageElement;
  position: number;
  coord: Coord;
  numberOf?: number;
  value: number;

  constructor(
    color: "white" | "black",
    type: string,
    position: number,
    numberOf?: number
  ) {
    this.color = color;
    this.type = type;
    this.position = position;
    this.numberOf = numberOf;
    this.image = this.setImage();
    this.coord = this.setCoord();
    this.value = this.setValue();
  }

  setImage() {
    return creatingImage(this.color, this.type);
  }
  setCoord() {
    return setQueeningCoords(this.position);
  }
  setValue() {
    return setPieceValue(this.type);
  }
}
