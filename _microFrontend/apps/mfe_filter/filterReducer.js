import { FILTERS, SET_FILTER } from "./filterActions.js";


const initialState = FILTERS.ALL;

export function filterReducer(state = initialState, action){

    switch(action.type) {

        case SET_FILTER:
            return action.payload;

        default: 
            return state;
    }
}