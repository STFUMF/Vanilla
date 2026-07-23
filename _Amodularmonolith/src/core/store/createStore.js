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

    beginTransaction() {
      state.history.begin(state.state);
    },

    commitTransaction() {
      state.history.commit();
    },

    rollbackTransaction() {
      state.history.rollback();
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
    async transaction(callback) {
      store.beginTransaction();

      try {
        const result = await callback();

        store.commitTransaction();
        return result;
      } catch (error) {
        store.rollbackTransaction();
        throw error;
      }
    },
  };

  applyMiddleware(store, middlewares);

  return store;
}
