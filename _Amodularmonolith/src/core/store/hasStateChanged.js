/**
 * Determines whether a state slice changed.
 * 
 * @param {*} previousStaet
 * @param {*} nextState
 * @returns {boolean}
 */
export function hasStateChanged(previousState, nextState) {
    return previousState !== nextState;
}