import { STORE_REDO, STORE_UNDO } from "./history/historyActions.js";
import { notifySubscribers } from "./notifySubscribers.js";

/**
 * Dispatches an action.
 *
 * @param {object} state
 * @param {object} action
 */
export function dispatch(state, action) {
  const previousState = state.state;
  // Undo
  if (action.type === STORE_UNDO) {
    state.state = state.history.undo(state.state);

    notifySubscribers(state);
    return action;
  }

  // Redo
  if (action.type === STORE_REDO) {
    state.state = state.history.redo(state.state);

    notifySubscribers(state);
    return action;
  }

  // Save current state before reducing

  state.history.push(action, previousState);

  state.state = state.reducer(previousState, action);

  notifySubscribers(state);

  return action;

  /* state.state = state.reducer(state.state, action);

  notifySubscribers(state);
  return action; */
}
