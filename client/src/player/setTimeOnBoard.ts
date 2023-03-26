import { TimeInMinutes } from "../types/playerTypes";

const oppTimer = document.querySelector(".opponentTimer") as HTMLDivElement;
const playerTimer = document.querySelector(".playerTimer") as HTMLDivElement;

const setTimeOnBoard = (
  timerToChange: "opponent" | "player",
  timeInMins: TimeInMinutes
) => {
  const timer = timerToChange === "opponent" ? oppTimer : playerTimer;

  timer.innerText = `${timeInMins.mins}:${timeInMins.secs}`;
};

export default setTimeOnBoard;
