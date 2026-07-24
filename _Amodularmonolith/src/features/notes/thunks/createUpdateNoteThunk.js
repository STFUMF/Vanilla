import { createOptimisticThunk } from "../../todo/store/thunks/createOptimisticThunk.js";
import { noteActions } from "../store/noteActions.js";

export function createUpdateNoteThunk(noteService) {
  return function updateNoteThunk(note) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => noteActions.update(note),

        request: () => noteService.updateNote(note),

        rollback: null,

        onError: (error) =>
          noteActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
