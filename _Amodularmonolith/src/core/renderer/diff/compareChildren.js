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

    const commonLength = Math.min(
        previousChildren.length,
        nextChildren.length
    );

    // 1. Compare existing children
    for (let index = 0; index < commonLength; index++) {
        compareNode(
            previousChildren[index],
            nextChildren[index],
            [...path, index],
            operations
        );
    }

    //2. Remove extra children (backwards!)
    for (
        let index = previousChildren.length -1;
        index >= commonLength;
        index--
    ) {
        compareNode(
            previousChildren[index],
            null,
            [...path, index],
            operations
        );
    }

    //3. Create extra children
    for (
        let index = commonLength;
        index < nextChildren.length;
        index++
    ) {
        compareNode(
            null,
            nextChildren[index],
            [...path, index],
            operations
        )
    }
}