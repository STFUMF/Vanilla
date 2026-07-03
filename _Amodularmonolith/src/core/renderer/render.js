import { mount } from "./mount.js";
import { unmount } from "./unmount.js";

/**
 * Renders a node into a container.
 * 
 * @param { Node } node
 * @param { string} selector
 */

export function render(node, selector) {
    const container = document.querySelector(selector);

    if (!container) {
        throw new Error(`Container "${selector}" was not found.`);
    }

    unmount(container);
    mount(container, node);
}