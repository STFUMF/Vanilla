import { createAbortController } from "../../../../core/async/createAbortController.js";
import { todoActions } from "../todoActionTypes.js";

export function createLoadTodos(todoService) {
  return function loadTodosThunk() {
    const abortController = createAbortController();
    console.log("Loading todos...");
    const thunk = async function (dispatch) {
      dispatch(todoActions.loadStarted());

      try {
        const todos = await todoService.loadTodos({
          signal: abortController.signal,
        });

        if (abortController.aborted) {
          return;
        }
        console.log("Loading finished");
        dispatch(todoActions.set(todos));
      } catch (error) {
        if (abortController.aborted) {
          return;
        }
        dispatch(todoActions.loadFailed(error.message));
      }
    };

    thunk.cancel = () => {
      console.log("Request cancelled");
      abortController.abort();
    };

    return thunk;
  };
}
