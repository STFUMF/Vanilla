import { createDom } from "../dom";

/**
 * Creates a renderer bound to a root container.
 * 
 * @param {HTMLElement} container
 */

export function createRenderer(container) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("Invalid render container.");
    }

    let currentTree = null;
    let currentDom = null;

    /**
     * Renders a UI tree.
     * 
     * @param {object} tree 
     */

    function render(tree) {
        const dom = createDom(tree);

        container.replaceChildren(dom);

        currentTree = tree;
        currentDom = dom;
    }

    return {
        render,
    };
}