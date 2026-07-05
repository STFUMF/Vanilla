
import { resolveNode } from "./resolveNode.js";

/**
 * Resolves all child nodes.
 * 
 * @param {Array} children
 * @returns {Array}
 */
export function resolveChildren(children) {
    return children.map(resolveNode);
}