import { COMPONENT_TYPE } from "./constants.js";

/**
 * Creats a component node.
 * 
 * @param {Function} component
 * @param {object} props
 * @returns {object}
 */
export function createComponent(component, props = {}) {
    return Object.freeze({
        nodeType: COMPONENT_TYPE,
        component,
        props,
    });
}
