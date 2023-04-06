import { Socket } from "socket.io-client";
import hideEndBanner from "../banners/hideEndBanner";
import sendNewGame from "../outgoing/sendNewGame";
import sendRematch from "../outgoing/sendRematch";

import { endBannerElements } from "./endBannerElements";

const showEndBanner = (
  singlePlayer: boolean,
  endMessage: string,
  socket: Socket,
  rematchDisabled: boolean
) => {
  endBannerElements.bannerDiv.classList.remove("hidden");
  endBannerElements.header.innerText = endMessage;
  endBannerElements.rematch.disabled = rematchDisabled;
  endBannerElements.rematch.style.backgroundColor = rematchDisabled
    ? "gray"
    : "#769656";

  //only add the event listeners once its visible for performance
  //these are removed in hideResetGame
  endBannerElements.exit.addEventListener("click", () => {
    hideEndBanner(endBannerElements, socket);
  });

  endBannerElements.rematch.addEventListener("click", () => {
    hideEndBanner(endBannerElements, socket);
    sendRematch(socket);
  });
  endBannerElements.newGame.addEventListener("click", () => {
    hideEndBanner(endBannerElements, socket);
    sendNewGame(socket);
  });
};

export default showEndBanner;
