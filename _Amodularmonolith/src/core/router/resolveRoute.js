import { getCurrentPath } from "./getCurrentPath.js";
import { matchRoute } from "./matchRoute.js";

/**
 * Resolves the current route.
 * 
 * @param {object} state
 * @returns  {obect|null}
 */
export function resolveRoute(state) {
    const path = getCurrentPath();

    const route = matchRoute(
        state.routes,
        path
    );

    state.currentPath = path;
    state.currentRoute = route;

    return route;
}