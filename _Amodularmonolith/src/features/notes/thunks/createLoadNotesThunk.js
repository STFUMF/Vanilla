import { createAbortController } from "../../../core/async/createAbortController.js";
import { createOptimisticThunk } from "../../todo/store/thunks/createOptimisticThunk.js";
import { noteActions } from "../store/noteActions.js";

export function createLoadNotesThunk(noteService) {
  let nextId = 0;
  return function loadNotesThunk() {
    const id = ++nextId;
    const abortController = createAbortController();
    const thunk = async function (dispatch) {
      dispatch(noteActions.loadStarted());

      try {
        const notes = await noteActions.loadTodos({
          signal: abortController.signal,
        });

        if (abortController.aborted) {
          return;
        }

        dispatch(noteActions.set(notes));
      } catch (error) {
        if (abortController.aborted) {
          return;
        }
        dispatch(noteActions.loadFailed(error.message));
      }
    };

    thunk.cancel = () => {
      abortController.abort();
    };

    return thunk;
  };
}
