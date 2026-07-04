

import { NODE_TYPES } from "../tree";
import { createElement } from "./createElement.js";
import { createText } from "./createText.js";

/**
 * Creates a DOM node from a UI Tree node.
 * 
 * @param {object} node
 * @returns {Node}
 */

export function createDom(node) {
    switch(node.nodeType) {
        case NODE_TYPES.ELEMENT:
            return createElement(node);

        case NODE_TYPES.TEXT:
            return createText(node);

        default:
            throw new Error(`Unsupported node type: ${node.nodeType}`);
    }
}