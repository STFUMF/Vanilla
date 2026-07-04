import { OPERATIONS } from "./operations.js";

/**
 * Compares two next nodes.
 */

export function compareText(previousNode, nextNode, path, operations) {
    if (previousNode.value !== nextNode.value) {
        operations.push({
            type: OPERATIONS.TEXT_UPDATE,
            path,
            value: nextNode.value
        });
    }
}