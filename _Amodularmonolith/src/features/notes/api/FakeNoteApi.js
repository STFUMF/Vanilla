export function FakeNoteApi(storage) {
  return {
    async loadNotes() {
      const notes = storage.load("notes") ?? [];
      console.log("Loaded notes:", notes);
      return notes;
    },

    async addNote(note) {
      const notes = storage.load("notes") ?? [];

      notes.push(note);

      storage.save("notes", notes);

      return note;
    },

    async updateNote(note) {
      const notes = storage.load("notes") ?? [];

      storage.save(
        "notes",
        notes.map((item) => (item.id === note.id ? note : item)),
      );

      return note;
    },

    async deleteNote(id) {
      const notes = storage.load("notes") ?? [];

      storage.save(
        "notes",
        notes.filter((note) => note.id !== id),
      );

      return id;
    },

    async replaceNotes(notes) {
      storage.save("notes", notes);

      return notes;
    },
  };
}
