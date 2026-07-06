/**
 * Removes all registered listeners.
 * 
 * @param {object} state
 */
export function clear(state) {
    state.listeners.clear();
}

