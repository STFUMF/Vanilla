import { createMiddlewareAPI } from "./createMiddlewareAPI.js";
import { composeMiddleware } from "./composeMiddleware.js";

/**
 * Applies middleware to a store.
 * 
 * @param {object} stoer
 * @param {Function[]} middlewares
 */
export function applyMiddleware(store, middlewares = []) {

    if (middlewares.length === 0){
        return;
    }

    const api = createMiddlewareAPI(store);

    const chain = middlewares.map(middleware => middleware(api));

    store.dispatch = composeMiddleware(chain)(store.dispatch);

}