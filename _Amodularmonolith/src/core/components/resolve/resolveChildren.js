
import { FRAGMENT_TYPE } from "../constants.js";
import { resolveNode } from "./resolveNode.js";

/**
 * Resolves all child nodes.
 * 
 * @param {Array} children
 * @returns {Array}
 */
export function resolveChildren(children) {
    const resolved = [];

    for (const child of children) {
        const node = resolveNode(child);

        if (node && node.nodeType === FRAGMENT_TYPE) {
            resolved.push(...node.children);
        } else {
            resolved.push(node);
        }
    }

    return Object.freeze(resolved);
}