
/**
 * Mounts a DOM node into the renderer container
 * 
 * @param {object} state
 * @param {Node} dom
 */
export function mount(state, dom) {
    state.container.replaceChildren(dom);
}