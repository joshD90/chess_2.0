import { Socket } from "socket.io-client";

import sendUserInformation from "./sendUserInformation";
import showWaitingBanner from "../banners/showWaitingBanner";

const sendNewGame = (socket: Socket) => {
  showWaitingBanner(socket);
  socket.emit("leave-actual-room");
  //give time for the socket to leave the room before setting off our next event to join game.  There must be a better way to do this however can't figure out async sockets
  setTimeout(() => sendUserInformation(socket), 300);
};
export default sendNewGame;
