export const historySelectors = {
  canUndo(store) {
    return store.history.canUndo();
  },

  canRedo(store) {
    return store.history.canRedo();
  },
};
