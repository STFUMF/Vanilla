import { TransactionManager } from "./TransactionManager.js";

export function transaction(fn) {
  TransactionManager.begin();

  try {
    fn();
  } finally {
    TransactionManager.end();
  }
}
