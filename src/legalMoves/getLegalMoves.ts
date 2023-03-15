//pseudo-code

import { Board } from "../board/board_class";
import { HypotheticalPosition, LegalMove } from "../types/legalMoveTypes";
import { PieceType } from "../types/pieceTypes";
import removeSelfCheck from "./generalRestrictions/removeSelfCheck";
import checkAllDirections from "./pieceDirection/checkAllDirections";
import addCastleSquares from "./specialMoves/addCastleSquares";

//function to check all legalMoves
//first check whether the king is in check - have an individual function for this
//if the king is in check then we run all direction checks including taking checks. We then run a check on these possible moves and change the board to see whether this configuration will lead to a check - this will be using the above king check function, this means that for our directional checks we will need to pass the legal moves as a paramater as we will be pushing onto a different legal move array.
//these functions can be reused on piece dropping to see whether it is checkmate following the move, also will take this time to see whether we have put the opponents king in check or not

//we then want to check en-passante, we will have to add information to the pawn whether it moved two squares or not on the previous move. If there is en-passante possibilities we push this onto our legal moves array

//we then run a check to see whether there are any castling squares available - this function will check to see whether the king has moved or whether the rook in question has moved.  We will then check to see whether any of the intervening squares are being attacked by any opponent piece. we then add the relevant - will do some hard-coding i think like the last time

//then do the check in all directions and see what this offers
//return the whole array of legal moves

//each legal square to move to must then include a type of legal move, "en-passante", "castle", "capture","move".
//i wonder will we need to include the direction of castling, short or long castle as part of our type? will have to see once closer

const getLegalMoves = (
  selectedPiece: PieceType,
  board: Board,
  moveArray: LegalMove[],
  position: HypotheticalPosition
): void => {
  //check all our directions and add the legal moves in those directions onto our move array
  checkAllDirections(selectedPiece, board, moveArray, position);
  //filter our any moves that would cause us to be in check
  removeSelfCheck(
    moveArray,
    position.black,
    position.white,
    board,
    selectedPiece
  );
  //add in our legal castling squares
  addCastleSquares(
    position,
    selectedPiece.color as "white" | "black",
    board,
    moveArray
  );
};

export default getLegalMoves;
