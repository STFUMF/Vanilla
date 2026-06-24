import { createStore } from "../../packages/redux/createStore.js";
import { combineReducers } from "../../packages/redux/combineReducers.js";

import todoReducer from "../mfe-todos/todoReducer.js";

const rootReducer = combineReducers({
  todos: todoReducer
});

export const store =
  createStore(rootReducer);