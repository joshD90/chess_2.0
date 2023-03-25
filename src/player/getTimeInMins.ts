import { TimeInMinutes } from "../types/playerTypes";

//return time in minutes and seconds
const getTimeInMins = (seconds: number): TimeInMinutes => {
  //dont want fractional amounts of minutes that is taken care of by our modulus
  const mins = Math.floor(seconds / 60);
  //need to have it in the format of 01, 02 etc
  const secs = (seconds % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return { mins: mins, secs: secs };
};
export default getTimeInMins;
