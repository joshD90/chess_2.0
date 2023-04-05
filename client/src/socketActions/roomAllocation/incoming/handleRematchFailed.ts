import { Socket } from "socket.io-client";
import hideWaitingSection from "../banners/hideWaitingSection";
import showEndBanner from "../banners/showEndBanner";

const handleRematchFailed = (socket: Socket) => {
  //we abandon this room so that others don't try and join
  socket.emit("leave-actual-room");
  socket.emit("remove-openToRematch");
  //bring up end banner again
  showEndBanner(
    false,
    "Other player has left already. Would you like to join a new game?",
    socket
  );
  hideWaitingSection(false, socket);
  //cant rematch so we disable this
  const rematchBtn = document.querySelector(".rematchBtn") as HTMLButtonElement;
  rematchBtn.style.backgroundColor = "gray";
  rematchBtn.disabled = true;
};

export default handleRematchFailed;
