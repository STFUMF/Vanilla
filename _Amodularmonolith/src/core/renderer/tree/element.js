import { NODE_TYPES } from "./constants";
import { text } from "./text";


/**
 * Creates an immutable element node.
 * 
 * @param {string} tag
 * @param {object} [props={}]
 * @param {...any} children
 * @returns {object}
 */

export function element(tag, props = {}, ...children) {
    const normalizedChildren = children.flat().map((child) => {
        if(typeof child === "object" && child !== null) {
            return child;
        }

        return text(child);
    });

    return Object.freeze({
        nodeType: NODE_TYPES.ELEMENT,
        tag,
        props: Object.freeze({ ...props }),
        children: Object.freeze(normalizedChildren),
    });
}