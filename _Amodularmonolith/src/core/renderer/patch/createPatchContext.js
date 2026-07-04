import { getNode } from "./getNode.js";

/**
 * Creates the context required to apply an operation.
 * 
 * @param {Node} root
 * @param {object} operation
 * @returns {object}
 */
export function createPatchContext(root, operation) {
    return Object.freeze({
        root,
        operation,
        node: getNode(root, operation.path),
    });
}
