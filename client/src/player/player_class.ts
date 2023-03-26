import getTimeInMins from "./getTimeInMins";
import setTimeOnBoard from "./setTimeOnBoard";

export class Player {
  name: string;
  time: number;
  playerType: "player" | "opponent";
  constructor(name: string, time: number, playerType: "player" | "opponent") {
    this.name = name;
    this.time = time;
    this.playerType = playerType;
  }

  getTimeInMinutes() {
    return getTimeInMins(this.time);
  }
  setTime() {
    setTimeOnBoard(this.playerType, this.getTimeInMinutes());
  }
}
//instantiate and export so we are only dealing with one instance and then alter these instantiations
export const player = new Player("", 0, "player");
export const opponent = new Player("", 0, "opponent");
