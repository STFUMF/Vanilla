
 /**
  * Matches a route by path.
  * 
  * @param {Array} routes
  * @param {string} path
  * @returns {object|null}
  */
 export function matchRoute(routes, path) {
    return routes.find(route => route.path === path) ?? null;
 }