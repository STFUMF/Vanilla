/**
 * Notifies all subscribers.
 * 
 * @param {object} state
 */
export function notifySubscribers(state) {
    for (const subscriber of state.subscribers) {
        subscriber(state.state);
    }
}