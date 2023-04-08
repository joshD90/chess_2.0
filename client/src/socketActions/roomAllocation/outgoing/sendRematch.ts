import { Socket } from "socket.io-client";
import { board } from "../../../board/board_class";
import initialiseGame from "../../../player/initialiseGame";
import { player } from "../../../player/player_class";
import resetBoard from "../../../resetGame/resetBoard";
import showWaitingBanner from "../banners/showWaitingBanner";

const sendRematch = (socket: Socket) => {
  //if single player
  if (board.singlePlayer) {
    resetBoard();
    initialiseGame("white", player.time, "Player 1", "Player 2", socket, true);
    return;
  }

  //if multiplayer
  socket.emit("rematch");
  showWaitingBanner(socket);
};
export default sendRematch;
