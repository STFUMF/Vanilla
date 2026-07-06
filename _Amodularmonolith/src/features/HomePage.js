import { createEventBus } from "../core/events/createEventBus.js";
import { element } from "../core/renderer";
import { createStoreService } from "../core/storage/createStorageService.js";
import { LocalStorageAdapter} from "../core/storage/adapters/LocalStorageAdapter.js"
import { combineReducers } from "../core/store/combineReducers.js";
import { createStore } from "../core/store/createStore.js";
import { thunk } from "../core/store/middleware/thunk.js";
import { todoReducer } from "./todo/store/todoReducer.js";

export function HomePage() {
    return element(
        "main",
        {},

        element(
            "h1",
            {},
            "haha"
        ),

        element(
            "button",
            {
                
            },
            "Click me"
        )
    )
}


function settingsReducer(
    state = {
        theme: "light",
    },
    action
) {
    return state;
}

const rootReducer = combineReducers({
    todo: todoReducer,
    settings: settingsReducer,
});


const store = createStore(rootReducer, [thunk]);



console.log(store.getState());

export function loadTodos() {
    return async function (dispatch) {
        dispatch({ type: "todo/loading"});

        const todos = await repository.getAll();

        dispatch({type: "todo/loaded", })
    }
}


