import { loadRoute } from "./loadRoute.js";
import { resolveRoute } from "./resolveRoute.js";

/**
 * Starts the router.
 *
 * @param {object} state
 * @param {Function} onRouteChange
 */
export function startRouter(state, { onLoading, onChange, onError }) {
  if (state.isStarted) {
    return;
  }

  async function handleRouteChange() {
    const route = resolveRoute(state);

    onLoading?.(route);

    try {
      const loadedRoute = await loadRoute(route);

      onChange?.(loadedRoute);
    } catch (error) {
      onError?.(error);
    }
    // onRouteChange(loadedRoute, state.currentPath);
  }

  state.handleRouteChange = handleRouteChange;

  window.addEventListener("hashchange", handleRouteChange);

  state.isStarted = true;

  handleRouteChange();
}
