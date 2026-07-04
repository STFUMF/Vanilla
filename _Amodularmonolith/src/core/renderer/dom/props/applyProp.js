
/**
 * Applies a single property to a DOM element
 * 
 * @param {HTMLElement} element
 * @param {string} key
 * @param {unknown} value
 */

export function applyProp(element, key, value) {
    element.setAttribute(key, String(value));
}