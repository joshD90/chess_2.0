import { Piece } from "./piece_class";

const pawn1 = new Piece("black", { col: "a", row: 6 }, "pawn");
const pawn2 = new Piece("black", { col: "b", row: 6 }, "pawn");

const blackPieces = [pawn1, pawn2];

export default blackPieces;
