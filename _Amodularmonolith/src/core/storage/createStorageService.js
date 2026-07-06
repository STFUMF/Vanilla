/**
 * Creates a storage service.
 * 
 * @param {object} adapter
 * @returns {object}
 */

export function createStoreService(adapter) {
    return {
        get(key) {
            return adapter.get(key);
        },

        set(key, value) {
            adapter.set(key, value);
        },

        remove(key) {
            adapter.remove(key);
        },

        clear() {
            adapter.clear();
        }
    }
}