import { Board } from "../../board/board_class";
import { AN } from "../../types/boardTypes";
import { HypotheticalPosition, LegalMove } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import createHypotheticalPosition from "../../utils/createHypotheticalPosition";
import determineKingInCheck from "../generalRestrictions/determineKingInCheck";

const determineCastleInDirection = (
  direction: "long" | "short",
  kingPiece: PieceType,
  position: HypotheticalPosition,
  board: Board
): LegalMove | null => {
  const kingRow = kingPiece.an.row;
  //check to see whether our rook has moved, if it has then we cant castle this direction
  const rookAN =
    direction === "long"
      ? { col: "a", row: kingRow }
      : { col: "h", row: kingRow };
  const rook = position[kingPiece.color as "white" | "black"].find(
    (piece) => piece.an.col === rookAN.col && piece.an.row === rookAN.row
  );
  if (!rook) return null;
  if (!rook.firstMove) return null;
  //our square that our king will land on
  const castleLandingAN =
    direction === "long"
      ? { col: "c", row: kingRow }
      : { col: "g", row: kingRow };
  //all the inbetween squares if we are castling long
  const longAN: AN[] = [
    { col: "b", row: kingRow },
    { col: "c", row: kingRow },
    { col: "d", row: kingRow },
  ];
  //inbetween for castling short
  const shortAN: AN[] = [
    { col: "f", row: kingRow },
    { col: "g", row: kingRow },
  ];
  const inBetweenSquaresAN = direction === "long" ? longAN : shortAN;
  //if there are pieces on the squares intervening we can't castle
  if (
    checkSquaresOccupied(
      [...position.white, ...position.black],
      inBetweenSquaresAN
    )
  )
    return null;
  //if there are squares that our king has to pass through that are under check we cant castle
  if (
    checkCastlingSquaresUnderAttack(
      position,
      kingPiece,
      inBetweenSquaresAN,
      board
    )
  )
    return null;
  //we need to convert this back into a Gridsquare and not just an
  const castleLandingSquare = board.grid.find(
    (piece) =>
      piece.an.row === castleLandingAN.row &&
      piece.an.col === castleLandingAN.col
  );
  if (!castleLandingSquare)
    throw new Error(
      "Something went wrong when looking for a square on the board. Something's gone wrong"
    );

  return { square: castleLandingSquare, moveType: "castle" };
};

export const checkSquaresOccupied = (pieces: PieceType[], anArray: AN[]) => {
  //we map through the list of AN's and for each of these we check whether there are any pieces that are on the same an
  const occupiedArray = anArray.map((an) => {
    const isOccupied = pieces.some(
      (piece) => piece.an.col === an.col && piece.an.row === an.row
    );
    return isOccupied;
  });
  return occupiedArray.some((el) => el === true);
};

export const checkCastlingSquaresUnderAttack = (
  position: HypotheticalPosition,
  kingPiece: PieceType,
  anArray: AN[],
  board: Board
) => {
  const ourPieces =
    kingPiece.color === "white" ? position.white : position.black;
  const otherPieces =
    kingPiece.color === "white" ? position.black : position.white;
  //for each of our intervening squares we place the king hypothetically in that square and see whether he would be in check
  const inbetweenSquaresCheckedArray = anArray.map((an) => {
    const newPosition = createHypotheticalPosition(
      kingPiece,
      an,
      ourPieces,
      otherPieces
    );
    const inCheck = determineKingInCheck(board, newPosition, kingPiece.color);
    return inCheck;
  });
  //if any of them are true then the function will return true
  return inbetweenSquaresCheckedArray.some((el) => el === true);
};

export default determineCastleInDirection;
