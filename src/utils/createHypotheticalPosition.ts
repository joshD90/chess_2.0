import _ from "lodash";
import removePieceByAn from "../movePiece/actionsOnPlacement/removePieceByAn";
import { Piece } from "../pieces/piece_class";
import { AN } from "../types/boardTypes";
import { HypotheticalPosition } from "../types/legalMoveTypes";
import { PieceType } from "../types/pieceTypes";

const createHypotheticalPosition = (
  selectedPiece: PieceType,
  an: AN,
  pieces: PieceType[],
  otherPieces: PieceType[]
): HypotheticalPosition => {
  //we dont want to mutate the original piece array as this is only hypothetical
  const pieceCopy = _.cloneDeep(pieces);
  const otherPieceCopy = _.cloneDeep(otherPieces);

  const hypotheticalPieces = pieceCopy.map((piece) => {
    //if our piece is the selectedPiece change the row and col to our hypothetical
    if (
      piece.an.col === selectedPiece.an.col &&
      piece.an.row === selectedPiece.an.row
    )
      return new Piece(selectedPiece.color, an, selectedPiece.type);
    //if not, just return the piece as normal
    return piece;
  });

  removePieceByAn(an, otherPieceCopy);

  if (selectedPiece.color === "white") {
    return { white: hypotheticalPieces, black: otherPieceCopy };
  } else {
    return { white: otherPieceCopy, black: hypotheticalPieces };
  }
};

export default createHypotheticalPosition;
