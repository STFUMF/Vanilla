import { todoActions } from "../todoActionTypes.js";

export function createToggleTodo(todoService) {
  return function toggleTodoThunk(todo) {
    return async function (dispatch) {
      dispatch(todoActions.update(todo));

      try {
        await todoService.toggle(todo);
      } catch (error) {
        dispatch(
          todoActions.loadFailed({
            message: error.message,
          }),
        );
      }
    };
  };
}
