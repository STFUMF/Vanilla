import { createStoreState } from "./createStoreState.js";
import { dispatch } from "./dispatch.js";
import { getState } from "./getState.js";
import { subscribe } from "./subscribe.js";

/**
 * Creats a store.
 * 
 * @param {Function} reducer
 * @param {*} initialState
 * @returns {object}
 */
export function createStore(reducer, initialState) {
    const state = createStoreState(reducer, initialState);

    return {
        dispatch(action){
            dispatch(state, action);
        },

        getState(){
            return getState(state);
        },

        subscribe(listener) {
            return subscribe(state, listener);
        },
    };
}