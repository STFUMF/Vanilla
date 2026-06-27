import { todoEvents } from "./todoEvents.js";

const initialState = [];
export function todoReducer(state = initialState, action){

    switch(action.type){

        case todoEvents.CREATED: 
            return [
                ...state,
                action.payload
            ]
        
        case todoEvents.DELETED: 
            return state.filter(todo => todo.id !== action.payload)
        

        case todoEvents.TOGGLED: 
            return state.map(todo => 
                    todo.id === action.payload.id
                        ? {...todo, completed: !todo.completed }
                        : todo
                )
            
        

        default:
            return state
    }
}