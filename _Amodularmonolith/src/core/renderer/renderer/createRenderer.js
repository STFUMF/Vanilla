import { createDom } from "../dom";
import { createRendererState } from "./createRendererState.js";
import { mount } from "./mount.js";
import { update } from "./update.js";

/**
 * Creates a renderer bound to a root container.
 * 
 * @param {HTMLElement} container
 */

export function createRenderer(container) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("Invalid render container.");
    }

    
    const state = createRendererState(container);

    /**
     * Renders a UI tree.
     * 
     * @param {object} tree 
     */

    function render(context) {
        const { tree } = context;

        // Initial render
        if(state.currentTree === null) {
            const dom = createDom(tree);

            mount(state, dom);

            state.currentTree = tree;
            state.currentDom = dom;

            return;
        }

        // Incremental update
        update(state, tree);
        state.currentTree = tree;
        
    }

    return {
        render,
    };
}