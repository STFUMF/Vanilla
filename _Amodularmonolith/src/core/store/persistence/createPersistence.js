export function createPersistence({
  storage,
  key,
  selector = (state) => state,
}) {
  return {
    load() {
      return storage.load(key);
    },

    save(state) {
      storage.save(key, selector(state));
    },

    clear() {
      storage.remove(key);
    },
  };
}
