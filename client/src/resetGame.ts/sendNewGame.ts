import { Socket } from "socket.io-client";

import sendUserInformation from "../socketActions/outgoing/sendUserInformation";

const sendNewGame = (socket: Socket) => {
  sendUserInformation(socket);
};
export default sendNewGame;
