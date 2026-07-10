import { todoActions } from "../todoActionTypes.js";

export function createLoadTodos(todoService) {
  return function loadTodosThunk() {
    return async function (dispatch) {
      const todos = await todoService.loadTodos();
      console.log("todos:", todos);
      console.log(Array.isArray(todos));
      dispatch(todoActions.set(todos));
    };
  };
}
