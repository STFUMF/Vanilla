/**
 * Creatse an immutable render context.
 * 
 * @param {object} tree
 * @returns {object}
 */
export function createRenderContext(tree) {
    return Object.freeze({
        tree,
    })
}