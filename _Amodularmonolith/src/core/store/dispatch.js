import { notifySubscribers } from "./notifySubscribers.js";

/**
 * Dispatches an action.
 * 
 * @param {object} state
 * @param {object} action
 */
export function dispatch(state, action) {
    state.state = state.reducer(state.state, action);

    notifySubscribers(state);
}