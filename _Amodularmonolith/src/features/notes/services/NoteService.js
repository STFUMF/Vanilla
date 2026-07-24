export class NoteService {
  constructor(repository) {
    this.repository = repository;
  }

  loadNotes() {
    return this.repository.loadNotes();
  }

  addNote(note) {
    return this.repository.addNote(note);
  }

  updateNote(note) {
    return this.repository.updateNote(note);
  }

  deleteNote(id) {
    return this.repository.deleteNote(id);
  }

  replaceNotes(notes) {
    return this.repository.replaceNotes(notes);
  }
}
