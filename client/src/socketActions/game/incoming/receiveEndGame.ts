import _ from "lodash";

import { EndGameObject } from "../../../types/playerTypes";
import refreshPiecesFromTurn from "./refreshPiecesFromTurn";

import { player, opponent } from "../../../player/player_class";
import showEndBanner from "../../roomAllocation/banners/showEndBanner";
import { Socket } from "socket.io-client";

const recieveEndGame = (endGameObj: EndGameObject, socket: Socket) => {
  //update our pieces no matter what
  refreshPiecesFromTurn(endGameObj);

  const { winner, method } = endGameObj;

  let endMessage;
  if (endGameObj.winner) {
    endMessage = `${_.capitalize(winner)} is the Winner by ${_.capitalize(
      method
    )}`;
  } else {
    endMessage = `It is a Draw by ${_.capitalize(method)}`;
  }
  showEndBanner(false, endMessage, socket, false);
  //dont want to be able to click on any pieces
  player.setTurn(false);
  opponent.setTurn(false);
};

export default recieveEndGame;
