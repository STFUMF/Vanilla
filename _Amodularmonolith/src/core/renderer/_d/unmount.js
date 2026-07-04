
/**
 * Removes all child nodes from a container.
 * 
 * @param {HTMLElement} container
 */

export function unmount(container) {
    container.replaceChildren();
}
