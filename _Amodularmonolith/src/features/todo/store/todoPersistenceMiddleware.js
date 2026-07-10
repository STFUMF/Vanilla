export function createTodoPersistenceMiddleware(todoService) {
  return (store) => (next) => (action) => {
    next(action);
    const todos = store.getState().todo.items;
    console.log("Action:", action.type);
    console.log("Saving:", todos);
    console.log("Is array?", Array.isArray(todos));

    todoService.persistTodos(todos);
  };
}
