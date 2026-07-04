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

    function render(component) {
        const nextTree = component();
        const nextDom = createDom(nextTree);

        container.replaceChildren(nextDom);

        currentTree = nextTree;
        currentDom = nextDom;
    }

    return {
        render,
    };
}