import { todoActions } from "../todoActionTypes.js";

export function createLoadTodos(todoService) {
  return function loadTodosThunk() {
    return async function (dispatch) {
      dispatch(todoActions.loadStarted());

      try {
        const todos = await todoService.loadTodos();
        dispatch(todoActions.set(todos));
        console;
      } catch (error) {
        dispatch(todoActions.loadFailed(error.message));
      }
    };
  };
}
