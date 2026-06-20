
let initialState = 0

export  function countSlice(state = initialState, action){

    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        
        case 'DECREMENT':
            return state - 1;

        default:
            return state
    }
}

export const countAction = {
    increment(){
        return {
            type: 'INCREMENT',
        }
    },

    decrement(){
        return {
            type: 'DECREMENT',
        }
    }
}