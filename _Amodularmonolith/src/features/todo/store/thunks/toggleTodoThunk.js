import { todoActions } from "../todoActionTypes.js";
import { createOptimisticThunk } from "./createOptimisticThunk.js";

export function createToggleTodoThunk(todoService) {
  return function toggleTodoThunk(todo) {
    return async function (dispatch) {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed,
        updatedAt: Date.now(),
      };
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
