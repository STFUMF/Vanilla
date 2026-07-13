import { createRouterState } from "./createRouterState.js";
import { startRouter } from "./startRouter.js";
import { stopRouter } from "./stopRouter.js";

/**
 * Creates a router.
 *
 * @param {Array} routes
 * @param {Function} onRouteChange
 */
export function createRouter(routes, { onLoading, onChange, onError }) {
  const state = createRouterState();

  state.routes = [...routes];

  return {
    start() {
      startRouter(state, { onLoading, onChange, onError });
    },

    stop() {
      stopRouter(state);
    },
  };
}
