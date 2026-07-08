import { createFragment } from "./createFragment.js";

/**
 * Creates a fragment.
 * 
 * @param {...any} children
 * @returns {object}
 */

export function fragment(...children) {
    return createFragment(children);
}