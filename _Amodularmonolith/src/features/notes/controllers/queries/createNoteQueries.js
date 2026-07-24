import { noteSelectors } from "../../store/noteSelectors.js";

export function createNoteQueries(controller) {
  return {
    getNotes() {
      return noteSelectors.items(controller.store.getState());
    },

    getVisibleNotes() {
      return noteSelectors.visible(
        controller.store.getState(),
        controller.search,
      );
    },

    getArchivedNotes() {
      return noteSelectors.archived(controller.store.getState());
    },

    getStats() {
      const state = controller.store.getState();

      return {
        total: noteSelectors.total(state),
        archived: noteSelectors.archived(state).length,
      };
    },

    isLoading() {
      return noteSelectors.status(controller.store.getState() === "loading");
    },

    getError() {
      return noteSelectors.error(controller.store.getState());
    },
  };
}
