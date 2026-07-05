/**
 * Reduces a single state slice.
 * 
 * @param {*} previousState
 * @param {Function} reducer
 * @param {object} action
 * @returns {*}
 */
export function reduceSlice(previousState, reducer,action) {
    return reducer(previousState, action);
}