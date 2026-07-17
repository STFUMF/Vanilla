import { on } from "./on.js";

/**
 * Registers a one-time event listener.
 *
 * @param {object} state
 * @param {string} event
 * @param {Function} listener
 */
export function once(state, event, listener) {
  let unsubscribe;

  function wrapper(payload) {
    unsubscribe();

    listener(payload);
  }

  unsubscribe = on(state, event, wrapper);
  return unsubscribe;
}
