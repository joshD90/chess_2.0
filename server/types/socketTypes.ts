import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type MyServer = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap
>;

export type RoomMap = Map<string, Set<string>>;
