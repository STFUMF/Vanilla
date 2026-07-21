import { todoActions } from "../todoActionTypes.js";
import { createOptimisticThunk } from "./createOptimisticThunk.js";

export function createUpdateTodo(todoService) {
  return function updateTodoThunk(todo) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => todoActions.update(todo),

        request: () => todoService.updateTodo(todo),

        rollback: null,

        onError: (error) =>
          todoActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
