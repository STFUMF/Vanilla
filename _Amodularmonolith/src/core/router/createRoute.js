/**
 * Creates a route definition.
 *
 * @param {string} path
 * @param {Functioon} component
 * @returns {object}
 */
export function createRoute(path, loader, props = {}, meta = {}) {
  return Object.freeze({
    path,
    type: "lazy",
    loader,
    component: null,
    props,
    meta,
  });
}
