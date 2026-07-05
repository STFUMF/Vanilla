import { resolveNode } from "./resolveNode.js";

/**
 * Resolves a component tree into a UI tree
 * 
 * @param {object} node
 * @returns {object}
 */
export function resolveComponent(node) {
    return resolveNode(node);
}