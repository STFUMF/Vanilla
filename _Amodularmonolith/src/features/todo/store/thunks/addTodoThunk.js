import { todoActions } from "../todoActionTypes.js";
import { createOptimisticThunk } from "./createOptimisticThunk.js";

export function createAddTodoThunk(todoService) {
  return function addTodoThunk(todo) {
    return async function (dispatch) {
      console.log("add thunk");
      return createOptimisticThunk({
        optimistic: () => todoActions.add(todo),

        request: () => todoService.addTodo(todo),

        rollback: () => todoActions.remove(todo.id),

        onError: (error) =>
          todoActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
