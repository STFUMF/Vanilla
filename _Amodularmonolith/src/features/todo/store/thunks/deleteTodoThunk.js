import { todoActions } from "../todoActionTypes.js";
import { createOptimisticThunk } from "./createOptimisticThunk.js";

export function createDeleteTodo(todoService) {
  return function deleteTodoThunk(todo) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => todoActions.remove(todo.id),

        request: () => todoService.deleteTodo(todo.id),

        rollback: () => todoActions.add(todo),

        onError: (error) =>
          todoActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
