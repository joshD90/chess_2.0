import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type MyServer = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap
>;
