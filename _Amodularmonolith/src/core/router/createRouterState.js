/**
 * Creates the router state.
 * 
 * @returns {object}
 */
export function createRouterState() {
    return {
        routes: [],
        currentRoute: null,
        currentPath: "",
        isStarted: false,
    };
}