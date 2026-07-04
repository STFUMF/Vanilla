import { OPERATIONS } from "./operations.js";
import { compareProps } from "./compareProps.js";
import { compareChildren } from "./compareChildren.js";

/**
 * Compares two element nodes.
 */

export function compareElement(previousNode, nextNode, path, operations){
    if (previousNode.tag !== nextNode.tag) {
        operations.push({
            type: OPERATIONS.REPLACE,
            path,
            node: nextNode,
        });

        return;
    }

    compareProps(previousNode, nextNode, path, operations);
    compareChildren(previousNode, nextNode, path, operations);
}