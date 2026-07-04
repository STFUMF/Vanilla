import { NODE_TYPES } from "./constants";

/**
 * Creates an immutable text node.
 * 
 * @param {string | number | boolean} value
 * @returns {object}
 */
export function text(value){
    return Object.freeze({
        nodeType: NODE_TYPES.TEXT,
        value: String(value),
    });
}