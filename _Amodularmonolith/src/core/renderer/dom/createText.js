/**
 * Creates a DOM Text node.
 * 
 * @param {object} node
 * @returns {text}
 */

export function createText(node) {
    return document.createTextNode(node.value);
}