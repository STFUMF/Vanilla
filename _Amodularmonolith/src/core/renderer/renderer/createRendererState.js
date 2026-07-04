/**
 * Creates the renderer state
 * 
 * @param {HTMLElement} container
 * @returns {object}
 */
export function createRendererState(container) {
    return {
        container,
        currentTree: null,
        currentDom: null,
    };
}