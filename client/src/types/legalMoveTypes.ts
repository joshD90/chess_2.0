import { AN, GridSquare } from "./boardTypes";
import { PieceType } from "./pieceTypes";

export type CoordDiff = {
  dx: number;
  dy: number;
};

export type CoordDiffObj = {
  coordDiff: CoordDiff;
  pieceType?: string;
  direction?: string;
};

export type MoveType = "move" | "attack" | "castle" | "enPassante";

export type LegalMove = {
  square: GridSquare;
  moveType: "move" | "attack" | "castle" | "enPassante";
};

export type ShouldDrop = {
  should: boolean;
  moveType: MoveType;
};

export type HypotheticalPosition = {
  white: PieceType[];
  black: PieceType[];
};
