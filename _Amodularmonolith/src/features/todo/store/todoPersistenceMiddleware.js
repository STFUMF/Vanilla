export function createTodoPersistenceMiddleware(todoService) {
    return ({ getState }) =>
            next =>
                action => {

                    const result = next(action);

                    if (action.type.startsWith("todo/")){
                        todoService.saveTodos(getState().todo.items);
                    }
                    return result;
                };
}