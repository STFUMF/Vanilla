/**
 * Creates a storage adapter.
 * 
 * @param {object} methods
 * @returns {object}
 */
export function createStorageAdapter(methods) {
    return Object.freeze({
        get: methods.get,
        set: methods.set,
        remove: methods.remove,
        clear: methods.clear,
    });
}