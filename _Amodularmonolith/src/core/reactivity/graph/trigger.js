import { Scheduler } from "../scheduler/Scheduler.js";
import { TransactionManager } from "../transaction/TransactionManager.js";

export function trigger(signal) {
  for (const observer of signal.subscribers) {
    TransactionManager.schedule(observer);
  }
}
