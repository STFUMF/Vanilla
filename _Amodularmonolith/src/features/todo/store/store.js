import { combineReducers } from "../../../core/store/combineReducers.js";
import { todoReducer } from "./todoReducer.js";
import { createStore } from "../../../core/store/createStore.js";
import { todoSelectors } from "./todoSelectors.js";


const rootReducer = combineReducers({
    todo: todoReducer,
});


export const store = createStore(rootReducer);