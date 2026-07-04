import { compareNode } from "./compareNode.js";

/**
 * Compares child nodes.
 * 
 * @param {object} previousNode
 * @param {object} nextNode
 * @param {number[]} path
 * @param {Array} operations
 */

export function compareChildren(previousNode, nextNode, path, operations) {
    const previousChildren = previousNode.children;
    const nextChildren = nextNode.children;

    const length = Math.max(
        previousChildren.length,
        nextChildren.length
    );

    for (let index = 0; index < length; index++) {
        compareNode(
            previousChildren[index] ?? null,
            nextChildren[index] ?? null,
            [...path, index],
            operations
        );
    }
}