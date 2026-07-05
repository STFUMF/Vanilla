/**
 * Creates a route definition.
 * 
 * @param {string} path
 * @param {Functioon} component
 * @returns {object}
 */
export function createRoute(path, component) {
    return Object.freeze({
        path,
        component,
    });
}