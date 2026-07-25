import { createOptimisticThunk } from "../../todo/store/thunks/createOptimisticThunk.js";
import { noteActions } from "../store/noteActions.js";

export function createAddNoteThunk(noteService) {
  return function addNoteThunk(note) {
    return async function (dispatch) {
      return createOptimisticThunk({
        optimistic: () => noteActions.add(note),

        request: () => noteService.addNote(note),

        rollback: () => noteActions.delete(note.id),

        onError: (error) =>
          noteActions.loadFailed({
            message: error.message,
          }),
      })(dispatch);
    };
  };
}
