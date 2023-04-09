import getTimeInMins from "./getTimeInMins";
import setTimeOnBoard from "./setTimeOnBoard";
//so we cant set color on instantiation due to the fact that we assign this later.  Set up methods to attach color as well as turn properties.  These can be done later
export class Player {
  name: string;
  time: number;
  playerType: "player" | "opponent";
  color?: "white" | "black";
  myTurn?: boolean;
  initialTime: number;

  constructor(name: string, time: number, playerType: "player" | "opponent") {
    this.name = name;
    this.time = time;
    this.playerType = playerType;
    this.initialTime = time;
  }

  getTimeInMinutes() {
    return getTimeInMins(this.time);
  }
  setTime() {
    setTimeOnBoard(this.playerType, this.getTimeInMinutes());
  }
  setTurn(trueOrFalse: boolean) {
    return (this.myTurn = trueOrFalse);
  }
  setColor(color: "white" | "black") {
    return (this.color = color);
  }
  setInitialTime(time: number) {
    return (this.initialTime = time);
  }
}
//instantiate and export so we are only dealing with one instance and then alter these instantiations
export const player = new Player("", 0, "player");
export const opponent = new Player("", 0, "opponent");
