/**
 * Creates the runtime state fora store.
 * 
 * @param {Function} reducer
 * @param {*} initialState
 * @returns {object}
 */

export function createStoreState(reducer, initialState) {
    return {
        reducer,
        state: initialState,
        subscribers: [],
    };
}