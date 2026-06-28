import { SET_SEARCH_QUERY } from "./searchActions.js";

const initialState = "";

export function searchReducer(
    state = initialState,
    action
) {
    switch (action.type) {

        case SET_SEARCH_QUERY:
            return action.payload;

        default:
            return state;
    }
}