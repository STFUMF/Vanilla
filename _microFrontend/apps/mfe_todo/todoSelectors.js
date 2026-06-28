import { FILTERS } from "../mfe_filter/filterActions.js";
import { selectFilter } from "../mfe_filter/filterSelectors.js";
import { selectSearchQuery } from "../mfe_search/searchSelectors.js";

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

export function selectSearchedTodos(state) {

    const filter = selectFilter(state);
    const query = selectSearchQuery(state).toLowerCase();
    let todos = selectTodos(state);


    switch (filter){
        case FILTERS.ACTIVE:
            todos =  todos.filter(todo => !todo.completed);
            break;
            
        case FILTERS.COMPLETED:
            todos =  todos.filter(todo => todo.completed);
            break;

    }

    if (query) {
        todos = todos.filter(todo =>
            todo.title
                .toLowerCase()
                .includes(query)
        )
    }

    return todos;
}

export function selectVisibleTodos(state){
    return selectSearchedTodos(state);
}