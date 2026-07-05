import { element } from "../core/renderer";
import { createStore } from "../core/store/createStore";

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

function counterReducer(state = 0, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        default:
            return state;
    }
}

const store = createStore(
    counterReducer,
    0
);

store.subscribe(state => {
    console.log(state);
});

store.dispatch({
    type: "increment"
});

store.dispatch({
    type: "increment"
});

store.dispatch({
    type: "decrement"
});