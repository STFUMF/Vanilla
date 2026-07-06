import { element } from "../core/renderer";
import { combineReducers } from "../core/store/combineReducers.js";
import { createStore } from "../core/store/createStore.js";
import { thunk } from "../core/store/middleware/thunk.js";

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
    state = {count: 0},
    action
) {
    switch(action.type) {
        case 'increment':
            return {...state, count: state.count + 1}
        default:
            return state;
    }
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


store.dispatch(
    (dispatch, getState) => {

        console.log(
            getState()
        );

        dispatch({
            type: "increment"
        });

        dispatch({
            type: "increment"
        });
        dispatch({
            type: "increment"
        });

        setTimeout(() => {

            dispatch({
                type: "increment"
            });
            console.log(store.getState());
        }, 3000);
    }
);


console.log(store.getState());

export function loadTodos() {
    return async function (dispatch) {
        dispatch({ type: "todo/loading"});

        const todos = await repository.getAll();

        dispatch({type: "todo/loaded", })
    }
}