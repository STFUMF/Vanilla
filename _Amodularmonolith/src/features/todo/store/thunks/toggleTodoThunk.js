import { todoActions } from "../todoActionTypes.js";
import { createOptimisticThunk } from "./createOptimisticThunk.js";

export function createToggleTodoThunk(todoService) {
  return function toggleTodoThunk(todo) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => todoActions.update(todo),

        request: () => todoService.updateTodo(todo),

        rollback: () =>
          todoActions.update({
            ...todo,
            completed: !todo.completed,
          }),

        onError: (error) =>
          todoActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
