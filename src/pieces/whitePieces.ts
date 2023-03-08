import { Piece } from "./piece_class";

const pawn1 = new Piece("white", { col: "a", row: 1 }, "pawn");
const pawn2 = new Piece("white", { col: "b", row: 1 }, "pawn");
const bishop1 = new Piece("white", { col: "c", row: 0 }, "bishop");
const queen = new Piece("white", { col: "d", row: 0 }, "queen");

const whitePieces = [pawn1, pawn2, bishop1, queen];

export default whitePieces;
