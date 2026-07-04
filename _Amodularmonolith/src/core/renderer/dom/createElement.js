import { createDom } from "./createDom.js";
import { applyProps } from "./props";

/**
 * Creates a DOM Element from a UI Tree node.
 * 
 * @param {object} node
 * @returns {HTMLElement}
 */

export function createElement(node) {
    const element = document.createElement(node.tag);

    // Apply properties
    applyProps(element, node.props);

    // Create children
    for (const child of node.children) {
        element.appendChild(createDom(child));
    }

    return element
}