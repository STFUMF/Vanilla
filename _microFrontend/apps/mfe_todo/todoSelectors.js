
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