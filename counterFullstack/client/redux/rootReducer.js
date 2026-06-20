import { authSlice } from "./slice/authSlice.js";
import { countSlice } from "./slice/countSlice.js";
import { themeSlice } from "./slice/themeSlice.js";



export function rootReducer(state = {}, action){

    return {
        auth:  authSlice(state.auth, action),
        count: countSlice(state.count, action),
        theme: themeSlice(state.theme, action),
    }
}