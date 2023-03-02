import { AN } from "./boardTypes";

export type PieceType = {
  color: string;
  an: AN;
  type: string;
  moveDirections: string[];
  range: number;
  image: HTMLImageElement;
  isActivated: boolean;
};
