import { combineReducers } from "../../packages/redux/combineReducers.js";
import { createStore } from "../../packages/redux/createStore.js";
import { todoReducer } from "../mfe_todo/todoReducer.js";


export const rootReducer = combineReducers({
    todos: todoReducer,
})

export const store = createStore(rootReducer);