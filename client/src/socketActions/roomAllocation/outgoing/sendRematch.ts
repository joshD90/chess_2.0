import { Socket } from "socket.io-client";
import showWaitingBanner from "../banners/showWaitingBanner";

const sendRematch = (socket: Socket) => {
  socket.emit("rematch");
  showWaitingBanner(socket);
};
export default sendRematch;
