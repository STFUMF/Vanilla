

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

    visible(state, search, filter, sort) {
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
                items = items.filter(todo => !todo.completed);
                break;
            
            case "completed":
                items = items.filter(todo => todo.completed);
                break

            default:
               break;
        }


        switch(sort) {
            case "created-asc":
                items.sort((a,b) => a.createdAt - b.createdAt);
                break;
            
            case 'created-desc':
                items.sort((a,b) => b.createdAt - a.createdAt);
                break;

            case "title":
                items.sort((a,b) => a.title.localeCompare(b.title));
                break;
            
            default:
                break;
        }
        
        return items;
    },
};