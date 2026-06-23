import { combineReducers } from "./combineReducers.js";
import { counterSlice } from "../redux/slices/counterSlice.js";
import { filterSlice } from "../redux/slices/filterSlice.js";
import { todosSlice } from "../redux/slices/todoSlice.js";

export const rootReducer = combineReducers({
    todos: todosSlice,
    filter: filterSlice,
    count: counterSlice
});