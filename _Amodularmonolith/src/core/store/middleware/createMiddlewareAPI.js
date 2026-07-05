/**
 * Creates the middleware API.
 * 
 * @param {object} store
 * @returns {object}
 */
export function createMiddlewareAPI(store) {
    return {
        getState: store.getState,
        dispatch: action => store.dispatch(action),
    };
}