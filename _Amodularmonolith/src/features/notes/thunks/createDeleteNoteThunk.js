import { createOptimisticThunk } from "../../todo/store/thunks/createOptimisticThunk.js";
import { noteActions } from "../store/noteActions.js";

export function createDeleteNoteThunk(noteService) {
  return function updateNoteThunk(note) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => noteActions.remove(note.id),

        request: () => noteService.deleteNote(note.id),

        rollback: () => noteActions.add(note),

        onError: (error) =>
          noteActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
