import { Socket } from "socket.io-client";

import sendUserInformation from "./sendUserInformation";
import showWaitingBanner from "../banners/showWaitingBanner";
import { board } from "../../../board/board_class";
import initialiseGame from "../../../player/initialiseGame";
import { player } from "../../../player/player_class";
import resetBoard from "../../../resetGame/resetBoard";

const sendNewGame = (socket: Socket) => {
  //if single player
  if (board.singlePlayer) {
    resetBoard();
    initialiseGame(
      "white",
      player.initialTime,
      "Player 1",
      "Player 2",
      socket,
      true
    );
    return;
  }

  showWaitingBanner(socket);
  socket.emit("leave-actual-room");
  //give time for the socket to leave the room before setting off our next event to join game.  There must be a better way to do this however can't figure out async sockets
  setTimeout(() => sendUserInformation(socket), 500);
};
export default sendNewGame;
