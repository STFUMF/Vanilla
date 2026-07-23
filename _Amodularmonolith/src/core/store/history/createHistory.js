export function createHistory({ limit = 50, shouldRecord = () => true }) {
  return {
    past: [],
    future: [],

    push(action, state) {
      if (action.meta?.history !== true) {
        return;
      }
      this.past.push(structuredClone(state));
      if (this.past.length > limit) {
        this.past.shift();
      }

      this.future.length = 0;
    },

    undo(currentState) {
      if (this.past.length === 0) {
        return currentState;
      }

      this.future.push(structuredClone(currentState));

      return this.past.pop();
    },

    redo(currentState) {
      if (this.future.length === 0) {
        return currentState;
      }

      this.past.push(structuredClone(currentState));

      return this.future.pop();
    },

    canUndo() {
      return this.past.length > 0;
    },

    canRedo() {
      return this.future.length > 0;
    },
  };
}
