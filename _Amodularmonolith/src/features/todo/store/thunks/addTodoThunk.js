import { todoActions } from "../todoActionTypes.js";

export function createAddTodo(todoService) {
  return function addTodoThunk(todo) {
    return async function (dispatch) {
      // 1. Optimistic update
      dispatch(todoActions.add(todo));
      console.log("added");
      try {
        // 2. Persis through API
        await todoService.addTodo(todo);
      } catch (error) {
        // 3. Rollback
        dispatch(todoActions.remove(todo.id));

        dispatch(
          todoActions.loadFailed({
            message: error.message,
          }),
        );
      }
    };
  };
}
