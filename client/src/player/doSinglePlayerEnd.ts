import _ from "lodash";
import { EndingGameTypes } from "../types/playerTypes";
import { Player } from "./player_class";
import showEndBanner from "../socketActions/roomAllocation/banners/showEndBanner";
import { Socket } from "socket.io-client";

const doSinglePlayerEnd = (
  type: EndingGameTypes,
  player: Player,
  opponent: Player,
  socket: Socket
) => {
  let bannerMsg: string;

  if (type === "checkmate" || type === "timeout") {
    bannerMsg = `${_.capitalize(player.color)} is the Winner by ${_.capitalize(
      type
    )}`;
  } else {
    bannerMsg = `It is a Draw by ${_.capitalize(type)}`;
  }

  player.setTurn(false);
  opponent.setTurn(false);

  showEndBanner(true, bannerMsg, socket, false);
};

export default doSinglePlayerEnd;
