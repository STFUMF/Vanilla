import { combineReducers } from "../../packages/redux/combineReducers.js";
import { createStore } from "../../packages/redux/createStore.js";
import { editReducer } from "../mfe_edit/editReducer.js";
import { todoReducer } from "../mfe_todo/todoReducer.js";
import { persistMiddleware } from "./middleware/persistMiddleware.js";
import { applyMiddleware } from "../shell/middleware/applyMiddleware.js"
import { loadState } from "./middleware/loadstate.js";
import { filterReducer } from "../mfe_filter/filterReducer.js";
import { searchReducer } from "../mfe_search/searchReducer.js";
import { themeReducer } from "../mfe_theme/themeReducer.js";


export const rootReducer = combineReducers({
    todos: todoReducer,
    editId: editReducer,
    filter: filterReducer,
    search: searchReducer,
    theme: themeReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(persistMiddleware),
    loadState(),
);