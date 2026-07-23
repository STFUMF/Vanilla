import { createStoreState } from "./createStoreState.js";
import { dispatch } from "./dispatch.js";
import { getState } from "./getState.js";
import { subscribe } from "./subscribe.js";

import { applyMiddleware } from "./middleware/applyMiddleware.js";
import { historyActions } from "./history/historyActions.js";

/**
 * Creats a store.a
 *
 * @param {Function} reducer
 * @param {*} initialState
 * @returns {object}
 */
export function createStore(reducer, middlewares = []) {
  const state = createStoreState(reducer);

  const store = {
    dispatch(action) {
      return dispatch(state, action);
    },

    getState() {
      return getState(state);
    },

    subscribe(listener) {
      return subscribe(state, listener);
    },

    canUndo() {
      return state.history.canUndo();
    },

    canRedo() {
      return state.history.canRedo();
    },

    undo() {
      return store.dispatch(historyActions.undo());
    },

    redo() {
      return store.dispatch(historyActions.redo());
    },
  };

  applyMiddleware(store, middlewares);

  return store;
}
