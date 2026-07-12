import { todoActions } from "../todoActionTypes.js";

export function createToggleTodoThunk(todoService) {
  return function toggleTodoThunk(todo, updatedTodo) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => todoActions.toggle(todo.id),

        request: () => todoService.updateTodo(updatedTodo),

        rollback: () => todoActions.update(todo),

        onError: (error) =>
          todoActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
