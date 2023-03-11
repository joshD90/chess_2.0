import { Piece } from "./piece_class";

const pawn1 = new Piece("white", { col: "a", row: 1 }, "pawn");
const pawn2 = new Piece("white", { col: "b", row: 1 }, "pawn");
const pawn3 = new Piece("white", { col: "c", row: 1 }, "pawn");
const pawn4 = new Piece("white", { col: "d", row: 1 }, "pawn");
const pawn5 = new Piece("white", { col: "e", row: 1 }, "pawn");
const pawn6 = new Piece("white", { col: "f", row: 1 }, "pawn");
const pawn7 = new Piece("white", { col: "g", row: 1 }, "pawn");
const pawn8 = new Piece("white", { col: "h", row: 1 }, "pawn");
const queen = new Piece("white", { col: "d", row: 0 }, "queen");
const king = new Piece("white", { col: "e", row: 0 }, "king");
const bishop1 = new Piece("white", { col: "c", row: 0 }, "bishop");
const bishop2 = new Piece("white", { col: "f", row: 0 }, "bishop");
const knight1 = new Piece("white", { col: "b", row: 0 }, "knight");
const knight2 = new Piece("white", { col: "g", row: 0 }, "knight");
const rook1 = new Piece("white", { col: "a", row: 0 }, "rook");
const rook2 = new Piece("white", { col: "h", row: 0 }, "rook");

const whitePieces = [
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

export default whitePieces;
