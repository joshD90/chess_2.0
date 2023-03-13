import _ from "lodash";
import { Piece } from "../pieces/piece_class";
import { AN } from "../types/boardTypes";
import { PieceType } from "../types/pieceTypes";

const createHypotheticalPosition = (
  selectedPiece: PieceType,
  an: AN,
  pieces: PieceType[]
): PieceType[] => {
  //we dont want to mutate the original piece array as this is only hypothetical
  const pieceCopy = _.cloneDeep(pieces);

  const hypotheticalPieces = pieceCopy.map((piece) => {
    //if our piece is the selectedPiece change the row and col to our hypothetical
    if (
      piece.an.col === selectedPiece.an.col &&
      piece.an.row === selectedPiece.an.row
    )
      // return {
      //   ...piece,
      //   an: { row: an.row, col: an.col },
      // };
      return new Piece(selectedPiece.color, an, selectedPiece.type);
    //if not, just return the piece as normal
    return piece;
  });

  return hypotheticalPieces;
};

export default createHypotheticalPosition;
