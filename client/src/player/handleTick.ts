import { Socket } from "socket.io-client";
import sendEnd from "../socketActions/game/outgoing/sendEndInformation";
import { player, opponent } from "./player_class";

const handleTick = (socket: Socket) => {
  //if we haven't joined a game yet don't need to worry about the clock
  if (player.name === "" || opponent.name === "") return;
  //don't do the clock if the game has ended and it's noones turn
  if (!player.myTurn && !opponent.myTurn) return;

  const playerToUpdate = player.myTurn ? player : opponent;
  playerToUpdate.time--;
  //if one player times out
  if (playerToUpdate.time === 0) {
    sendEnd("timeout", socket, player, opponent);
  }
  playerToUpdate.setTime();
  console.log(playerToUpdate.time, "time after sending the endgame");
};

export default handleTick;
