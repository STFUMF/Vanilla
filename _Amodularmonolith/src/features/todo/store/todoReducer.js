import { 
    TODO_ADD,
    TODO_UPDATE,
    TODO_DELETE,
    TODO_TOGGLE,
    TODO_SET
} from "./todoActionTypes.js";

const initialState = {
    items: [],
};

export function todoReducer(state = initialState, action) {
    
    switch(action.type) {
        case TODO_SET:
            return {
                ...state,
                items: action.payload,
            };
        
        case TODO_ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ],
            };

        case TODO_UPDATE:
            return {
                ...state,
                items: state.items.map(todo =>
                    todo.id === action.payload.id
                        ? action.payload
                        : todo
                ),
            };

        case TODO_DELETE:
            return {
                ...state,
                items: state.items.filter(
                    todo => todo.id !== action.payload
                ),
            };

        case TODO_TOGGLE:
            return {
                ...state,
                items: state.items.map(todo =>
                    todo.id === action.payload
                        ? {
                            ...todo,
                            completed: !todo.completed,
                            updatedAt: Date.now(),
                            }
                        : todo
                )
            };

        default:
            return state;
    }
}