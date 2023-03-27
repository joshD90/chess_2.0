import { ColorObject } from "../../types/infoTypes";
import { MyServer, RoomMap } from "../../types/socketTypes";
import getNameObject from "../startGame/getNameObject";

const assignColors = (
  roomMap: RoomMap,
  roomName: string,
  io: MyServer
): ColorObject => {
  //get an array of the player id's in room
  const playersInRoomArray = Object.keys(getNameObject(roomMap, roomName, io));

  const randomNumber = Math.floor(Math.random() * 2);

  const colorObject = {
    white: playersInRoomArray[randomNumber],
    black: playersInRoomArray[1 - randomNumber],
  };
  console.log(colorObject);
  return colorObject;
};

export default assignColors;
