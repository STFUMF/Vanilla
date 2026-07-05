import { OPERATION_TYPES } from "./operations";
import { compareProps } from "./compareProps.js";
import { compareChildren } from "./compareChildren.js";

/**
 * Compares two element nodes.
 */

export function compareElement(previousNode, nextNode, path, operations){
    if (previousNode.tag !== nextNode.tag) {
        operations.push({
            type: OPERATION_TYPES.REPLACE,
            path,
            node: nextNode,
        });

        return;
    }

    compareProps(previousNode, nextNode, path, operations);
    compareChildren(previousNode, nextNode, path, operations);
}