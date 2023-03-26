import { Board } from "../../board/board_class";
import determineMovePutsUsIntoCheck from "../../legalMoves/generalRestrictions/determineMovePutsIntoCheck";
import checkAllDirections from "../../legalMoves/pieceDirection/checkAllDirections";
import { HypotheticalPosition, LegalMove } from "../../types/legalMoveTypes";

const determineNoLegalMoves = (
  position: HypotheticalPosition,
  defendingColor: "black" | "white",
  board: Board
) => {
  const defendingPieces = position[defendingColor];
  //if our move has placed the opponent king in check then we want to see whether there is any move that the oppoonent pieces can make that will get them out of check
  //iterate through all of our possible moves and for each one of them determineMovePutsIntoCheck
  const overallMoveArray: boolean[] = [];
  defendingPieces.forEach((piece) => {
    //this array will be passed to the function and mutated
    const moveArray: LegalMove[] = [];
    //add all the possible moves for this one piece
    checkAllDirections(piece, board, moveArray, position);
    //the move array now ontains all the possible moves
    const checkedMoveArray = moveArray.map((move) =>
      //we now have an array of booleans
      determineMovePutsUsIntoCheck(
        move,
        position.black,
        position.white,
        piece,
        board
      )
    );
    //if any of the
    if (checkedMoveArray.some((checkedMove) => checkedMove === false))
      return overallMoveArray.push(false);
    return overallMoveArray.push(true);
  });
  if (overallMoveArray.every((el) => el === true)) return true;
  return false;
};

export default determineNoLegalMoves;
