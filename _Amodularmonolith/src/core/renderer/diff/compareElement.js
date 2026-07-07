import { OPERATION_TYPES } from "./operations";
import { compareProps } from "./compareProps.js";
import { compareChildren } from "./compareChildren.js";

/**
 * Compares two element nodes.
 */

export function compareElement(previousNode, nextNode, path, operations){
   
    if (!isSameElement(previousNode, nextNode)) {
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

function isSameElement(previousNode, nextNode) {
    if (previousNode.tag !== nextNode.tag) {
        return false;
    }

    // Different input types must be replaced.
    if (
        previousNode.tag === "input" &&
        previousNode.props.type !== nextNode.props.type
    ) {
        return false
    }
    return true;
}