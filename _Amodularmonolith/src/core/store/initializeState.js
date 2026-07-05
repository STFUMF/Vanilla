/**
 * Initializes the store state.
 * 
 * @param {Function} reducer
 * @returns {*}
 */
export function initializeState(reducer) {
    return reducer(
        undefined,
        {
            type: "@@INIT"
        }
    )
}