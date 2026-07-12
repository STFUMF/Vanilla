import { todoActions } from "../todoActionTypes.js";
import { createOptimisticThunk } from "./createOptimisticThunk.js";

export function createUpdateTodo(todoService) {
  return function updateTodoThunk(oldTodo, updatedTodo) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => todoActions.update(updatedTodo),

        request: () => todoService.updateTodo(updatedTodo),

        rollback: () => todoActions.update(oldTodo),

        onError: (error) =>
          todoActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
