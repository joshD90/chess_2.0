import { Socket } from "socket.io-client";
import { EndBannerElements } from "../../../types/boardTypes";
import sendNewGame from "./../outgoing/sendNewGame";
import sendRematch from "./../outgoing/sendRematch";

const hideEndBanner = (
  endBannerElements: EndBannerElements,
  socket: Socket
) => {
  const exitClosure = () => {
    hideEndBanner(endBannerElements, socket);
  };
  const rematchClosure = () => {
    hideEndBanner(endBannerElements, socket);
    sendRematch(socket);
  };
  const newGameClosure = () => {
    hideEndBanner(endBannerElements, socket);
    sendNewGame(socket);
  };
  //we dont want to keep on adding more and more listeners and keep these listeners on while we dont need them
  endBannerElements.exit.removeEventListener("click", exitClosure);
  endBannerElements.rematch.removeEventListener("click", rematchClosure);
  endBannerElements.newGame.removeEventListener("click", newGameClosure);

  endBannerElements.bannerDiv.classList.add("hidden");
};

export default hideEndBanner;
