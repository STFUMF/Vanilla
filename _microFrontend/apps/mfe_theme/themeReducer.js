import { SET_THEME, THEMES } from "./themeActions.js";

const initialState = THEMES.LIGHT

export function themeReducer(state = initialState, action) {

    switch (action.type) {

        case SET_THEME:
            return action.payload;

        default:
            return state;
    }
}