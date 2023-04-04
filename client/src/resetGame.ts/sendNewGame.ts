import { Socket } from "socket.io-client";

import sendUserInformation from "../socketActions/outgoing/sendUserInformation";
import showWaitingBanner from "../socketActions/outgoing/showWaitingBanner";

const sendNewGame = (socket: Socket) => {
  showWaitingBanner(socket);
  setTimeout(() => sendUserInformation(socket), 2000);
};
export default sendNewGame;
