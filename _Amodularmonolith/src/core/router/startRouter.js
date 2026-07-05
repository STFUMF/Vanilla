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

    function handleRouteChange(){
        const route = resolveRoute(state);

        onRouteChange(route, state.currentPath);
    }

    state.handleRouteChange = handleRouteChange;

    window.addEventListener('hashchange', handleRouteChange);

    state.isStarted = true;

    handleRouteChange();
}