import { Piece } from "./piece_class";

const pawn1 = new Piece("white", { col: "a", row: 1 }, "pawn");
const pawn2 = new Piece("white", { col: "b", row: 1 }, "pawn");

const whitePieces = [pawn1, pawn2];

export default whitePieces;
