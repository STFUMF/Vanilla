import { countSlice } from "./slice/countSlice.js";
import { themeSlice } from "./slice/themeSlice.js";



export function rootReducer(state = {}, action){

    return {
        count: countSlice(state.count, action),
        theme: themeSlice(state.theme, action),
    }
}