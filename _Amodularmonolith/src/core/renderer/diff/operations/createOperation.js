
/**
 * Creates an immutable diff operation.
 * 
 * @param {string} type
 * @param {object} payload
 * @returns {object}
 */

export function createOperation(type, payload = {}) {
    return Object.freeze({
        type,
        ...payload,
    });
}
