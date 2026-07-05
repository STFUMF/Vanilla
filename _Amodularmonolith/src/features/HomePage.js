import { element } from "../core/renderer";
import { combineReducers } from "../core/store/combineReducers.js";
import { createStore } from "../core/store/createStore.js";

export function HomePage() {
    return element(
        "main",
        {},

        element(
            "h1",
            {},
            "Home"
        ),

        element(
            "button",
            {
                onClick: () => {
                    console.log("Button Clicked!")
                }
            },
            "Click me"
        )
    )
}

function todoReducer(
    state = [],
    action
) {
    return state;
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


const store = createStore(rootReducer,);



console.log(store.getState());
