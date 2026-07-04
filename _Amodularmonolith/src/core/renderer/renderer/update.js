import { diff } from "../diff";
import { patch } from "../patch";

/**
 * Updates the rendered UI
 * 
 * @param {object} state
 * @param {object} nextTree
 */
export function update(state, nextTree) {
    const operations = diff(
        state.currentTree,
        nextTree
    );

    patch({
        root: state.currentDom,
        operations,
    })
}