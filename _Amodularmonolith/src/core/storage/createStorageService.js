/**
 * Creates a storage service.
 *
 * @param {object} adapter
 * @returns {object}
 */

export function createStoreService(adapter) {
  return {
    load(key) {
      return adapter.get(key);
    },

    save(key, value) {
      adapter.set(key, value);
    },

    remove(key) {
      adapter.remove(key);
    },

    clear() {
      adapter.clear();
    },
  };
}
