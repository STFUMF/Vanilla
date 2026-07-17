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
    state.listeners.set(event, []);
  }

  const listeners = state.listeners.get(event);

  listeners.push(listener);

  return () => {
    const index = listeners.indexOf(listener);

    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length === 0) {
      state.listeners.delete(event);
    }
  };
}
