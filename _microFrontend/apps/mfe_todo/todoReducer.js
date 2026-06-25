import { todoEvents } from "./todoEvents.js";

const initialState = {
    items: []
}
export function todoReducer(state = initialState, action){

    switch(action.type){

        case todoEvents.CREATED: {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }

        case todoEvents.DELETED: {
            return {
                ...state,
                items: state.items.filter(todo => todo.id !== id)
            }
        }

        case todoEvents.TOGGLED: {
            return {
                ...state,
                items: [state.items.map(todo => 
                    todo.id === action.payload.id
                        ? {...todo, completed: !todo.completed }
                        : todo
                )]
            }
        }

        default:
            return state
    }
}