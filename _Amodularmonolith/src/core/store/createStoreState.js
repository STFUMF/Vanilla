import { createHistory } from "./history/createHistory.js";
import { initializeState } from "./initializeState.js";
/**
 * Creates the runtime state fora store.
 *
 * @param {Function} reducer
 * @param {*} initialState
 * @returns {object}
 */

export function createStoreState(reducer) {
  return {
    reducer,
    state: initializeState(reducer),
    subscribers: [],
    history: createHistory({
      shouldRecord(action) {
        return !action.type.startsWith("@@");
      },
    }),
  };
}
