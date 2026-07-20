/**
 * Removes an event listener.
 *
 * @param {object} state
 * @param {string} event
 * @param {Function} listener
 */
export function off(state, event, listener) {
  const listeners = state.listeners.get(event);

  if (!listeners) {
    return;
  }

  listeners.delete(listener);

  if (listeners.length === 0) {
    state.listeners.delete(event);
  }
}
