import { FRAGMENT_TYPE } from "./constants.js";

/**
 * Creates a fragment node.
 * 
 * @param {Array} children
 * @returns {object}
 */
export function createFragment(children) {
    return Object.freeze({
        nodeType: FRAGMENT_TYPE,
        children: Object.freeze(children),
    });
}