

import { FRAGMENT_TYPE } from "../../components/constants.js";
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

        case FRAGMENT_TYPE:{
            const fragment = document.createDocumentFragment();
            
            for (const child of node.children){
                fragment.appendChild(createDom(child));
            }
            return fragment;
        }
        default:
            throw new Error(`Unsupported node type: ${String(node.nodeType)}`);
    }
}