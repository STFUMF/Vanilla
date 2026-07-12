import { todoActions } from "../todoActionTypes.js";

export function createDeleteTodo(todoService) {
  return function addTodoThunk(todo) {
    return async function (dispatch) {
      // Optimistic update
      dispatch(todoActions.remove(todo.id));

      try {
        await todoService.deleteTodo(todo.id);
      } catch (error) {
        // Rollback
        dispatch(todoActions.add(todo));

        dispatch(
          todoActions.loadFailed({
            message: error.message,
          }),
        );
      }
    };
  };
}
