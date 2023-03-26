import { PieceImageIndex } from "../blackPieces/blackPiecesIndex";

//we use require as webpack and ts appear to struggle with importing svg's

const white_bishop_img = require("./white_bishop.svg") as string;
const white_king_img = require("./white_king.svg") as string;
const white_knight_img = require("./white_knight.svg") as string;
const white_queen_img = require("./white_queen.svg") as string;
const white_rook_img = require("./white_rook.svg") as string;
const white_pawn_img = require("./white_pawn.svg") as string;

export const white_pieces_index: PieceImageIndex = {
  queen: white_queen_img,
  king: white_king_img,
  bishop: white_bishop_img,
  rook: white_rook_img,
  knight: white_knight_img,
  pawn: white_pawn_img,
};
