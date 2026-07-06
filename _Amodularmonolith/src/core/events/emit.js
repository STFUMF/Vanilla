/**
 * Emits an event.
 * 
 * @param {object} state
 * @param {string} event
 * @param {*} payload
 */
export function emit(state, event, payload) {
    const listeners = state.listeners.get(event);

    if (!listeners) {
        return;
    }

    for (const listener of [...listeners]) {
        listener(payload);
    }
}