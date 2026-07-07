export function createTodoPersistenceMiddleware(todoService) {
    return store => next => action => {

                    next(action);

                    const todos = store.getState().todo.items;

                    todoService.persistTodos(todos);
                };
}