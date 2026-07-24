export function createNoteViewState(controller) {
  return {
    setTitle(title) {
      controller.title = title;
      controller.notifyViewChanged();
    },

    setContent(content) {
      controller.content = content;
      controller.notifyViewChanged();
    },

    setSearch(search) {
      controller.search = search;
      controller.notifyViewChanged();
    },

    setViewChangedListener(listener) {
      controller.onViewChanged = listener;
    },

    notifyViewChanged() {
      controller.onViewChanged();
    },
  };
}
