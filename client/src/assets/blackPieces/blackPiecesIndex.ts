//we use require as webpack and ts appear to struggle with importing svg's

const black_bishop_img = require("./black_bishop.svg") as string;
const black_king_img = require("./black_king.svg") as string;
const black_knight_img = require("./black_knight.svg") as string;
const black_queen_img = require("./black_queen.svg") as string;
const black_rook_img = require("./black_rook.svg") as string;
const black_pawn_img = require("./black_pawn.svg") as string;

//set up our object index signature so that we can dynamically select and change properties of the object
export type PieceImageIndex = { [key: string]: string };

export const black_pieces_index: PieceImageIndex = {
  queen: black_queen_img,
  king: black_king_img,
  bishop: black_bishop_img,
  rook: black_rook_img,
  knight: black_knight_img,
  pawn: black_pawn_img,
};
