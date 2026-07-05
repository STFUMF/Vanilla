/**
 * Registers a subscriber.
 * 
 * @param {object} state
 * @param {Function} listener
 * @returns {Function}
 */

export function subscribe(state, listener) {
    state.subscribers.push(listener);

    return () => {
        const index = state.subscribers.indexOf(listener);

        if (index !== -1) {
            state.subscribers.splice(index, 1);
        }
    };
}