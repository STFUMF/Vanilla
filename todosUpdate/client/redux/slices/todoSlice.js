
const ACTIONS = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
}
export function todosSlice(state = [], action){

    switch(action.type){

        case ACTIONS.ADD_TODO:
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ];

        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.payload
                    ? {
                        ...todo,
                        completed: !todo.completed
                        }
                    : todo
            );

        default:
            return state
    }
}

export const todosActions = {

    addTodo(data){
        return {
            type: ACTIONS.ADD_TODO,
            payload: data
        }
    },

    toggleTodo(data){
        return {
            type: ACTIONS.TOGGLE_TODO,
            payload: data
        }
    }
}