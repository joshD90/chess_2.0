import { ColorObject } from "../../types/infoTypes";
import { MyServer, RoomMap } from "../../types/socketTypes";
import getSocketDataObject from "../startGame/getSocketDataObject";

const assignColors = (
  roomMap: RoomMap,
  roomName: string,
  io: MyServer
): ColorObject => {
  //get an array of the player id's in room
  const playersInRoomArray = Object.keys(
    getSocketDataObject(roomMap, roomName, io, "name")
  );

  const randomNumber = Math.floor(Math.random() * 2);

  const colorObject = {
    white: playersInRoomArray[randomNumber],
    black: playersInRoomArray[1 - randomNumber],
  };

  return colorObject;
};

export default assignColors;
