import { createFragment } from "./createFragment";

/**
 * Creates a fragment.
 * 
 * @param {...any} children
 * @returns {object}
 */

export function fragment(...children) {
    return createFragment(children);
}