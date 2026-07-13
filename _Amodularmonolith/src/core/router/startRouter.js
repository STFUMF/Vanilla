import { loadRoute } from "./loadRoute.js";
import { resolveRoute } from "./resolveRoute.js";

/**
 * Starts the router.
 *
 * @param {object} state
 * @param {Function} onRouteChange
 */
export function startRouter(state, onRouteChange) {
  if (state.isStarted) {
    return;
  }

  async function handleRouteChange() {
    const route = resolveRoute(state);

    const loadedRoute = await loadRoute(route);

    onRouteChange(loadedRoute, state.currentPath);
  }

  state.handleRouteChange = handleRouteChange;

  window.addEventListener("hashchange", handleRouteChange);

  state.isStarted = true;

  handleRouteChange();
}
