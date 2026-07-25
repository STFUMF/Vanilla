import { createLoadNotesThunk } from "./createLoadNotesThunk.js";
import { createAddNoteThunk } from "./createAddNoteThunk.js";
import { createUpdateNoteThunk } from "./createUpdateNoteThunk.js";
import { createDeleteNoteThunk } from "./createDeleteNoteThunk.js";

export function createNoteThunks(service) {
  return {
    loadNotes: createLoadNotesThunk(service),
    addNote: createAddNoteThunk(service),
    updateNote: createUpdateNoteThunk(service),
    deleteNote: createDeleteNoteThunk(service),
  };
}
