import SubscriptionSet from "../../SubscriptionSet";
import { ICommand } from "../../types";
import { NetStream } from "./connectors/types";

export interface ICondition {
  select: number;
  auth: string;
  subscriber: false | SubscriptionSet;
}

export interface IRedisQueueItem {
  select: number;
  stream: { write: (writable: any) => any };
  command: ICommand;
}
