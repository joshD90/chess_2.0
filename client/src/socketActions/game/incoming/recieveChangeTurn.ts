import { TurnObject } from "../../../types/playerTypes";
import refreshPiecesFromTurn from "./refreshPiecesFromTurn";

import { player, opponent } from "../../../player/player_class";

const recieveChangeTurn = (turnObj: TurnObject) => {
  refreshPiecesFromTurn(turnObj);
  player.setTurn(true);
  opponent.setTurn(false);
};

export default recieveChangeTurn;
