import { combineReducers } from "../core/store/combineReducers.js";
import { noteReducer } from "../features/notes/store/noteReducer.js";
import { todoReducer } from "../features/todo/store/todoReducer.js";

export const rootReducer = combineReducers({
  todo: todoReducer,
  note: noteReducer,
});
