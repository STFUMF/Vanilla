import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE,
  TODO_SET,
} from "./todoActions.js";

const PERSIST_ACTIONS = new Set([
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE,
  TODO_SET,
]);

export function createTodoPersistenceMiddleware(todoService) {
  return (store) => (next) => (action) => {
    const result = next(action);

    if (!PERSIST_ACTIONS.has(action.type)) {
      return result;
    }
    const todos = store.getState().todo.items;
    console.log("Action:", action.type);
    console.log("Saving:", todos);
    console.log("Is array?", Array.isArray(todos));

    todoService.persistTodos(todos);
    return result;
  };
}
