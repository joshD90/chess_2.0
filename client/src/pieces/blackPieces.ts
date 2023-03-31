import _ from "lodash";
import { Piece } from "./piece_class";

const pawn1 = new Piece("black", { col: "a", row: 6 }, "pawn");
const pawn2 = new Piece("black", { col: "b", row: 6 }, "pawn");
const pawn3 = new Piece("black", { col: "c", row: 6 }, "pawn");
const pawn4 = new Piece("black", { col: "d", row: 6 }, "pawn");
const pawn5 = new Piece("black", { col: "e", row: 6 }, "pawn");
const pawn6 = new Piece("black", { col: "f", row: 6 }, "pawn");
const pawn7 = new Piece("black", { col: "g", row: 6 }, "pawn");
const pawn8 = new Piece("black", { col: "h", row: 6 }, "pawn");
const queen = new Piece("black", { col: "d", row: 7 }, "queen");
const king = new Piece("black", { col: "e", row: 7 }, "king");
const bishop1 = new Piece("black", { col: "c", row: 7 }, "bishop");
const bishop2 = new Piece("black", { col: "f", row: 7 }, "bishop");
const knight1 = new Piece("black", { col: "b", row: 7 }, "knight");
const knight2 = new Piece("black", { col: "g", row: 7 }, "knight");
const rook1 = new Piece("black", { col: "a", row: 7 }, "rook");
const rook2 = new Piece("black", { col: "h", row: 7 }, "rook");

const blackPieces = [
  pawn1,
  pawn2,
  pawn3,
  pawn4,
  pawn5,
  pawn6,
  pawn7,
  pawn8,
  queen,
  king,
  bishop1,
  bishop2,
  knight1,
  knight2,
  rook1,
  rook2,
];
//use this to reset our black pieces on new game
export const blackPiecesTemplate = _.cloneDeep(blackPieces);

export default blackPieces;
