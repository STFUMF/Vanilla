import { createAbortController } from "../../../../core/async/createAbortController.js";
import { todoActions } from "../todoActionTypes.js";

export function createLoadTodos(todoService) {
  let nextId = 0;
  return function loadTodosThunk() {
    const id = ++nextId;
    const abortController = createAbortController();
    const thunk = async function (dispatch) {
      dispatch(todoActions.loadStarted());

      try {
        const todos = await todoService.loadTodos({
          signal: abortController.signal,
        });

        if (abortController.aborted) {
          return;
        }

        dispatch(todoActions.set(todos));
      } catch (error) {
        if (abortController.aborted) {
          return;
        }
        dispatch(todoActions.loadFailed(error.message));
      }
    };

    thunk.cancel = () => {
      abortController.abort();
    };

    return thunk;
  };
}
