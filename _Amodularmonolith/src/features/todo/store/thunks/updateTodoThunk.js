import { todoActions } from "../todoActionTypes.js";

export function createUpdateTodo(todoService) {
  return function updateTodoThunk(oldTodo, updatedTodo) {
    return async function (dispatch) {
      // Optimistic update
      dispatch(todoActions.update(updatedTodo));

      try {
        await todoService.updateTodo(updatedTodo);
      } catch (error) {
        // Rollback
        dispatch(todoActions.update(oldTodo));

        dispatch(
          todoActions.loadFailed({
            message: error.message,
          }),
        );
      }
    };
  };
}
