import { NODE_TYPES } from  "../tree";
import { OPERATION_TYPES } from "./operations";
import { compareProps } from "./compareProps.js";
import { compareChildren } from "./compareChildren.js";
import { createNode, removeNode, replaceNode } from "./operations/createOperations.js";
import { compareElement } from "./compareElement.js";
import { compareText } from "./compareText.js";

/**
 * Compares two UI tree nodes.
 * 
 * @param {object|null} previousNode
 * @param {object|null} nextNode
 * @param {number[]} path
 * @param {Array} operations
 */

export function compareNode(previousNode, nextNode, path, operations) {
    // Create
    if (!previousNode && nextNode) {
        operations.push(
            createNode(path, nextNode)
        );

        return;
    }

    // Remove
    if (previousNode && !nextNode) {
        operations.push(
            removeNode(path)
        );

        return;
    }
    
    // Different node kind
    if (previousNode.nodeType !== nextNode.nodeType) {
        operations.push(
            replaceNode(path, nextNode)
        );
        
        return;
    }

    switch (nextNode.nodeType) {
        case NODE_TYPES.TEXT:
            compareText(previousNode, nextNode, path, operations);
            return;
        
        case NODE_TYPES.ELEMENT:
            compareElement(previousNode, nextNode, path, operations);
            return;

        default:
            throw new Error(`Unsupported node type: ${nextNode.nodeType}`);
    }
}