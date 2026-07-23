export const STORE_UNDO = "STORE_UNDO";
export const STORE_REDO = "STORE_REDO";

export const historyActions = {
  undo() {
    return {
      type: STORE_UNDO,
      meta: {
        history: false,
      },
    };
  },

  redo() {
    return {
      type: STORE_REDO,
      meta: {
        history: false,
      },
    };
  },
};
