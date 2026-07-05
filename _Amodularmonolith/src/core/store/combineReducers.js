import { reduceSlice } from "./reduceSlice.js";
import { hasStateChanged } from "./hasStateChanged.js";

/**
 * Combines feature reducers into a root reducer.
 * 
 * @param {Object<string, Function>} reducers
 * @returns {Function}
 */
export function combineReducers(reducers) {
    const keys = Object.keys(reducers);

    return function rootReducer(state = {}, action) {

        let changed = false;

        const nextState = {};

        for (const key of keys) {
            const reducer = reducers[key];

            const previousSlice = state[key];

            const nextSlice = reduceSlice(previousSlice, reducer, action);

            nextState[key] = nextSlice;

            if(hasStateChanged(previousSlice, nextSlice)) {
                changed = true;
            }
        }

        return changed ? nextState : state;
    }
}