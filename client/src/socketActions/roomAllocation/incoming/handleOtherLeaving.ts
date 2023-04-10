import { Socket } from "socket.io-client";
import { opponent, player } from "../../../player/player_class";
import hideWaitingSection from "../banners/hideWaitingSection";
import showEndBanner from "../banners/showEndBanner";

const handleOtherLeaving = (socket: Socket) => {
  //we abandon this room so that others don't try and join
  socket.emit("currently-deciding");
  socket.emit("remove-openToRematch");
  //bring up end banner again
  showEndBanner(
    false,
    "Other player has left already. Would you like to join a new game?",
    socket,
    true
  );
  hideWaitingSection(false, socket);
  player.setTurn(false);
  opponent.setTurn(false);
};

export default handleOtherLeaving;
