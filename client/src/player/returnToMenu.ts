import { Socket } from "socket.io-client";
import { board } from "../board/board_class";
import { endBannerElements } from "../socketActions/roomAllocation/banners/endBannerElements";
import hideEndBanner from "../socketActions/roomAllocation/banners/hideEndBanner";

const returnToMenu = (e: Event, socket: Socket) => {
  if (!board.singlePlayer) socket.emit("leave-actual-room");

  const landingDiv = document.querySelector(".landingDiv") as HTMLDivElement;
  hideEndBanner(endBannerElements, socket);
  landingDiv.classList.remove("hidden");
};
export default returnToMenu;
