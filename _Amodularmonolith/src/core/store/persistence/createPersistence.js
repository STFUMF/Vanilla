export function createPersistence({ storage, key } = {}) {
  return {
    load(initialState) {
      const persisted = storage.load(key);

      if (!persisted) {
        return initialState;
      }

      return persisted;
    },

    save(state) {
      storage.save(key, state);
    },

    clear() {
      storage.remove(key);
    },
  };
}
