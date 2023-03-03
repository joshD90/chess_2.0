import { AN, Coord } from "./boardTypes";

export type PieceType = {
  color: string;
  an: AN;
  type: string;
  moveDirections: string[];
  range: number;
  image: HTMLImageElement;
  isActivated: boolean;
  movingCoord: Coord;
  activate: () => boolean;
  deactivate: () => boolean;
  setMovingCoord: (mouseCoord: Coord) => Coord;
};
