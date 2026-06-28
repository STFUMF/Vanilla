import { FILTERS } from "../mfe_filter/filterActions.js";
import { selectFilter } from "../mfe_filter/filterSelectors.js";

export function selectTodos(state){
    return state.todos;
}

export function selectTotalTodos(state){
    return state.todos.length;
}

export function selectCompletedTodos(state){
    return state.todos.filter(todo => todo.completed).length;
}

export function selectRemainingTodos(state) {
    return selectTotalTodos(state) - selectCompletedTodos(state);
}

export function selectCompletionRate(state) {
    const total = selectTotalTodos(state);

    if (total === 0) {
        return 0;
    }

    return Math.round(
        (selectCompletedTodos(state) / total) * 100
    );
}

export function selectVisibleTodos(state) {

    console.log("current filter:", state.filter);
    const filter = selectFilter(state);

    const todos = selectTodos(state);

    switch (filter){
        case FILTERS.ACTIVE:
            return todos.filter(todo => !todo.completed);
            
        case FILTERS.COMPLETED:
            return todos.filter(todo => todo.completed);
        
        case FILTERS.ALL:
        default:
            return todos;
    }
}