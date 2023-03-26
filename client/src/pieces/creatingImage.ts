import { black_pieces_index } from "../assets/blackPieces/blackPiecesIndex";
import { white_pieces_index } from "../assets/whitePieces/whitePiecesIndex";

export const creatingImage = (playerColor: string, pieceType: string) => {
  //what color of pieces do we wish to use
  const indexToUse =
    playerColor === "white" ? white_pieces_index : black_pieces_index;
  //white type
  const svg = indexToUse[pieceType];
  //converting our svg into a usable format for canvas to draw
  const imageBlob = new Blob([svg], { type: "image/svg+xml" });
  const imageUrl = URL.createObjectURL(imageBlob);

  const img = new Image();
  img.height = 300;
  img.width = 300;
  img.src = imageUrl;
  return img;
};
