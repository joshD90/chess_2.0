import { AN, Coord } from "./boardTypes";

export type DeserialisedPiece = {
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
};

export type PieceType = {
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
  activate: () => boolean;
  deactivate: () => boolean;
  setMovingCoord: (mouseCoord: Coord) => Coord;
  setMoveDirections: () => any;
};

export type IterableType = {
  [key: string]: any;
};
