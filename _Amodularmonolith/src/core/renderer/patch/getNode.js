
/**
 * Resolves a DOM node from a path.
 * 
 * @param {Node} root
 * @param {number[]} path
 * @returns {Node}
 */

export function getNode(root, path) {
    let current = root;

    for (const index of path) {
        current = current.childNodes[index];
    }

    return current;
}