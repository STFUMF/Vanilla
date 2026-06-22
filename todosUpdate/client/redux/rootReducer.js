import { combineReducers } from "./combineReducers.js";
import { filterSlice } from "./slices/filterSlice.js";
import { todosSlice } from "./slices/todoSlice.js";

export const rootReducer = combineReducers({
    todos: todosSlice,
    filter: filterSlice
});