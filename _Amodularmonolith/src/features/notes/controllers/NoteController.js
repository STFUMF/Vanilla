import { createNoteQueries } from "./queries/createNoteQueries.js";
import { createNoteViewState } from "./viewState/createNoteViewState.js";
import { createNoteCommands } from "./commands/createNoteCommands.js";
import { createNoteInteractions } from "./interactions/createNoteInteractions.js";
export class NoteController {
  constructor(store, thunks, noteService, events) {
    this.store = store;
    this.thunks = thunks;
    this.noteService = noteService;
    this.events = events;

    this.currentLoadRequest = null;

    // View state
    this.title = "";
    this.content = "";
    this.search = "";

    // Editingg
    this.editingNoteId = null;
    this.editTitle = "";
    this.editContent = "";

    this.onViewChanged = () => {};

    Object.assign(
      this,
      createNoteQueries(this),
      createNoteViewState(this),
      createNoteCommands(this),
      createNoteInteractions(this),
    );
  }
}
