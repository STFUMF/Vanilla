export function createNoteInteractions(controller) {
  return {
    async addNotec() {
      const title = controller.title.trim();

      if (!title) {
        return;
      }

      const note = {
        id: crypto.randomUUID(),

        title,

        content: controller.content,

        archived: false,

        tags: [],

        createdAt: Date.now(),

        updatedAt: Date.now(),
      };

      await controller.addNote(note);

      controller.title = "";
      controller.content = "";

      controller.notifyViewChanged();
    },

    startEditing(note) {
      controller.editingNoteId = note.id;
      controller.editTitle = note.title;
      controller.editContent = note.content;

      controller.notifyViewChanged();
    },

    cancelEditing() {
      controller.editingNoteId = null;
      controller.editTitle = "";
      controller.editContent = "";

      controller.notifyViewChanged();
    },

    isEditing(id) {
      return controller.editingNoteId === id;
    },

    async saveEdit(note) {
      await controller.updateNote({
        ...note,

        title: controller.editTitle,

        content: controller.editContent,

        updatedAt: Date.now(),
      });

      controller.cancelEditing();
    },

    setEditContent(content) {
      controller.editContent = content;
      controller.notifyViewChanged();
    },

    deleteNotec(note) {
      return controller.deleteNote(note);
    },
  };
}
