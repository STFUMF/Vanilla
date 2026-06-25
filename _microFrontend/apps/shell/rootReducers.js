import { combineReducers } from "../../packages/redux/combineReducers.js";
import { todoReducer } from "../mfe_todo/todoReducer.js";


export const rootReducer = combineReducers({
    todos: todoReducer,
})