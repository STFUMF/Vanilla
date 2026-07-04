import { applyProp } from "./applyProp";

/**
 * Applies all properties to a DOM element.
 * 
 * @param {HTMLElement} element
 * @param {object} props
 */

export function applyProps(element, props) {
    for (const [key, value] of Object.entries(props)) {
        applyProp(element, key, value);
    }
}