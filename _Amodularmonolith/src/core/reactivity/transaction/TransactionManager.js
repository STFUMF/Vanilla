import { Scheduler } from "../scheduler/Scheduler.js";

const pendingObservers = new Set();

let transactionDepth = 0;

export const TransactionManager = {
  begin() {
    transactionDepth++;
  },

  end() {
    transactionDepth--;

    if (transactionDepth === 0) {
      for (const observer of pendingObservers) {
        Scheduler.enqueue(observer);
      }

      pendingObservers.clear();
    }
  },

  schedule(observer) {
    if (transactionDepth > 0) {
      pendingObservers.add(observer);
      return;
    }

    Scheduler.enqueue(observer);
  },
};
