/**
 * Composes middleware into a single dispatch function.
 * 
 * @param {Function[]} chain
 * @returns {Function}
 */
export function composeMiddleware(chain) {
    return chain.reduceRight((next, middleware) => middleware(next));
}