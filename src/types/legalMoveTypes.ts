import { GridSquare } from "./boardTypes";

export type CoordDiff = {
  dx: number;
  dy: number;
};

export type LegalMove = {
  square: GridSquare;
  moveType: "move" | "attack" | "castle" | "enPassante";
};
