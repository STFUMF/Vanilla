/**
 * Stops the router.
 * 
 * @param {object} state
 */
export function stopRouter(state) {
    if (!state.isStarted) {
        return;
    }

    window.removeEventListener("hashchange", state.handleRouteChange);

    state.handleRouteChange = null;
    state.isStarted = false;
}