import { mount } from "./mount.js";
import { unmount } from "./unmount.js";

/**
 * Renders a node into a container.
 * 
 * @param { Node } node
 * @param { string} selector
 */

export function render(component, container) {

    if (typeof component !== "function") {
        throw new Error("Component must be a function.");
    }

    if (!(container instanceof HTMLElement)) {
        throw new Error(`Invalid render container`);
    }

    const node = component();

    if (!(node instanceof Node)) {
        throw new Error("Component must return a DOM node.");
    }

    unmount(container);
    mount(container, node);
}