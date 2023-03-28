import { creatingImage } from "./creatingImage";
const white_queen = creatingImage("white", "queen");
const white_king = creatingImage("white", "king");
const white_rook = creatingImage("white", "rook");
const white_bishop = creatingImage("white", "bishop");
const white_knight = creatingImage("white", "knight");
const white_pawn = creatingImage("white", "pawn");

export const whitePiecesImage = new Map();
whitePiecesImage
  .set("queen", white_queen)
  .set("king", white_king)
  .set("rook", white_rook)
  .set("bishop", white_bishop)
  .set("knight", white_knight)
  .set("pawn", white_pawn);

const black_queen = creatingImage("black", "queen");
const black_king = creatingImage("black", "king");
const black_rook = creatingImage("black", "rook");
const black_bishop = creatingImage("black", "bishop");
const black_knight = creatingImage("black", "knight");
const black_pawn = creatingImage("black", "pawn");

export const blackPiecesImage = new Map();
blackPiecesImage
  .set("queen", black_queen)
  .set("king", black_king)
  .set("rook", black_rook)
  .set("bishop", black_bishop)
  .set("knight", black_knight)
  .set("pawn", black_pawn);
