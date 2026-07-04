import { OPERATION_TYPES } from "./operations";

/**
 * Compares two next nodes.
 */

export function compareText(previousNode, nextNode, path, operations) {
    if (previousNode.value !== nextNode.value) {
        operations.push({
            type: OPERATION_TYPES.TEXT_UPDATE,
            path,
            value: nextNode.value
        });
    }
}