/**
 * Registers an event listener.
 *
 * @param {object} state
 * @param {string} event
 * @param {Funcion} listener
 * @returns {Function}
 */
export function on(state, event, listener) {
  if (!state.listeners.has(event)) {
    state.listeners.set(event, new Set());
  }

  const listeners = state.listeners.get(event);

  listeners.add(listener);

  return () => {
    listeners.delete(listener);

    if (listeners.length === 0) {
      state.listeners.delete(event);
    }
  };
}
