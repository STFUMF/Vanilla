// A central location or container where data, files, information, or obects are stored
export class NoteRepository {
  constructor(api) {
    this.api = api;
  }

  loadNotes() {
    return this.api.loadNotes();
  }

  addNote(note) {
    return this.api.addNote(note);
  }

  updateNote(note) {
    return this.api.updateNote(note);
  }

  deleteNote(id) {
    return this.api.deleteNote(id);
  }

  replaceNotes(notes) {
    return this.api.replaceNotes(notes);
  }
}
