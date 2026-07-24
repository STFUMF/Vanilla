export function createNoteCommands(controller) {
  return {
    loadNotes() {
      controller.currentLoadRequest?.cancel();

      const request = controller.thunks.loadNotes();

      controller.currentLoadRequest = request;

      return controller.store.dispatch(request);
    },

    addNote(note) {
      return controller.store.dispatch(controller.thunks.addNote(note));
    },

    updateNote(note) {
      return controller.store.dispatch(controller.thunks.updateNote(note));
    },

    deleteNote(note) {
      return controller.store.dispatch(controller.thunks.deleteNote(note));
    },

    archiveNote(note) {
      return this.updateNote({
        ...note,
        archived: true,
        updatedAt: Date.now(),
      });
    },

    restoreNote(note) {
      return this.updateNote({
        ...note,
        archived: false,
        updatedAt: Date.now(),
      });
    },
  };
}
