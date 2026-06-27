import { combineReducers } from "../../packages/redux/combineReducers.js";
import { createStore } from "../../packages/redux/createStore.js";
import { editReducer } from "../mfe_edit/editReducer.js";
import { todoReducer } from "../mfe_todo/todoReducer.js";


export const rootReducer = combineReducers({
    todos: todoReducer,
    editId: editReducer,
})

export const store = createStore(rootReducer);