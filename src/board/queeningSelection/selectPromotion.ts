import { board } from "../board_class";
import { queeningSelection } from "./queeningSelection_Class";
import detectWithinSquare from "../../movePiece/detectWithinSquare";
import mouseRelCanvas from "../../utils/mouseRelCanvas";
import promotePawn from "../../movePiece/actionsOnPlacement/promotePawn";
import whitePieces from "../../pieces/whitePieces";
import blackPieces from "../../pieces/blackPieces";

const selectPromotion = (e: MouseEvent) => {
  if (!board.queeningSelection) return;

  //get our mouse pos
  const mousePos = mouseRelCanvas(e);
  //see whether the click has lended on one of our promotion selection
  const pieceSelected = queeningSelection.pieceArray.find((piece) =>
    detectWithinSquare(piece.coord, mousePos, board.width)
  );
  if (!pieceSelected) return;

  //find our pawn that is promoting
  const pawnToPromote = [...whitePieces, ...blackPieces].find(
    (piece) => piece.isQueening
  );
  if (!pawnToPromote) return;

  const position = { white: whitePieces, black: blackPieces };
  promotePawn(pawnToPromote, position, pieceSelected);
};

export default selectPromotion;
