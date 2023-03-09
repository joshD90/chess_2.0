import { Piece } from "./piece_class";

const pawn1 = new Piece("white", { col: "a", row: 1 }, "pawn");
const pawn2 = new Piece("white", { col: "b", row: 1 }, "pawn");
const bishop1 = new Piece("white", { col: "c", row: 0 }, "bishop");
const queen = new Piece("white", { col: "d", row: 0 }, "queen");
const king = new Piece("white", { col: "e", row: 0 }, "king");
const knight1 = new Piece("white", { col: "g", row: 0 }, "knight");

const whitePieces = [pawn1, pawn2, bishop1, queen, king, knight1];

export default whitePieces;
