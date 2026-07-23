export function createHistory({ limit = 50, shouldRecord = () => true }) {
  const past = [];
  const future = [];

  let transaction = null;
  return {
    push(action, state) {
      if (action.meta?.history !== true) {
        return;
      }

      // Already inside a transaction
      if (transaction !== null) {
        return;
      }

      past.push(structuredClone(state));

      if (past.length > limit) {
        past.shift();
      }

      future.length = 0;
    },

    begin(state) {
      if (transaction !== null) {
        return;
      }

      transaction = structuredClone(state);
    },

    commit() {
      if (transaction === null) {
        return;
      }

      past.push(transaction);

      if (past.length > limit) {
        past.shift();
      }

      future.length = 0;

      transaction = null;
    },

    rollback() {
      transaction = null;
    },

    undo(currentState) {
      if (past.length === 0) {
        return currentState;
      }

      future.push(structuredClone(currentState));

      return past.pop();
    },

    redo(currentState) {
      if (future.length === 0) {
        return currentState;
      }

      past.push(structuredClone(currentState));

      return future.pop();
    },

    canUndo() {
      return past.length > 0;
    },

    canRedo() {
      return future.length > 0;
    },

    clear() {
      past.length = 0;
      future.length = 0;
      transaction = null;
    },
  };
}
