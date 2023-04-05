import { Socket } from "socket.io-client";

import sendUserInformation from "./sendUserInformation";
import showWaitingBanner from "../banners/showWaitingBanner";

const sendNewGame = (socket: Socket) => {
  showWaitingBanner(socket);
  sendUserInformation(socket);
};
export default sendNewGame;
