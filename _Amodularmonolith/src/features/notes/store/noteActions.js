import { NoteActionTypes } from "./noteActionTypes.js";

export const noteActions = {
  loadStarted() {
    return {
      type: NoteActionTypes.LOAD_STARTED,
    };
  },

  loadSucceeded(notes) {
    return {
      type: NoteActionTypes.LOAD_SUCCEEDED,
      payload: notes,
    };
  },

  loadFailed(message) {
    return {
      type: NoteActionTypes.LOAD_FAILED,
      payload: message,
    };
  },

  add(note) {
    return {
      type: NoteActionTypes.ADD,
      payload: note,
    };
  },

  update(note) {
    return {
      type: NoteActionTypes.UPDATE,
      payload: note,
    };
  },

  delete(id) {
    return {
      type: NoteActionTypes.DELETE,
      payload: id,
    };
  },
};
