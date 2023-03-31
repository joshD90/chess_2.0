import { EndGameObject } from "../../types/playerTypes";
import refreshPiecesFromTurn from "./refreshPiecesFromTurn";

import { player, opponent } from "../../player/player_class";
import showEndBanner from "./showEndBanner";

const recieveEndGame = (endGameObj: EndGameObject) => {
  //update our pieces no matter what
  refreshPiecesFromTurn(endGameObj);

  const { winner, method } = endGameObj;

  let endMessage;
  if (endGameObj.winner) {
    endMessage = `${winner} is the Winner by ${method}`;
  } else {
    endMessage = `It is a Draw by ${method}`;
  }
  showEndBanner(false, endMessage);
  //dont want to be able to click on any pieces
  player.setTurn(false);
  opponent.setTurn(false);
};

export default recieveEndGame;
