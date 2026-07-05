import { resolveChildren } from "./resolveChildren.js";

/**
 * Resolves an element node.
 * 
 * @param {object} node
 * @returns {object}
 */
export function resolveElement(node) {
    return Object.freeze({
        ...node,
        children: resolveChildren(node.children),
    });
}