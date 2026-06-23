import { todoEvents } from "./todo.events";

const initialState = {
    items: []
};

export function todoReducer(state = initialState, action){

    switch(action.type){
        case todoEvents.CREATED:
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case todoEvents.TOGGLED:
            return {
                ...state,
                items: state.items.map(todo =>
                    todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
            };
        

        default: 
            return state;
    }
}