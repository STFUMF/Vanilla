

// Selectors prevent pages and components from knowing that state's internal structure.

export const todoSelectors = {
    items(state) {
        return state.todo.items;
    },

    completed(state) {
        return state.todo.items.filter(
            todo => todo.completed
        );
    },

    remaining(state) {
        return state.todo.items.filter(
            todo => !todo.completed
        );
    },

    total(state) {
        return state.todo.items.length;
    },
};