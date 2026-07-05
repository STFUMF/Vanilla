import { createComponent } from "./createComponent.js";
import { createProps } from "./createProps.js";

/**
 * Creates a component node.
 * 
 * @param {Function} component
 * @param {object} props
 * @returns {object}
 */
export function component(component, props = {}) {
    return createComponent(
        component,
        createProps(props)
    );
}