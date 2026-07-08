

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

    visible(state, search, filter) {
        let items = this.items(state);

        // search
        if (search.trim()) {
            const query = search.toLowerCase();

            items = items.filter(todo =>
                todo.title
                    .toLowerCase()
                    .includes(query)
            );
        }

        // Filter
        switch (filter) {
            case "active":
                return items = items.filter(todo => !todo.completed);
            
            case "completed":
                return items = items.filter(todo => todo.completed);

            default:
                return items
        }

        return items;
    },
};