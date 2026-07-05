import { createComponent } from "./createComponent.js";
import { createProps } from "./createProps.js";

/**
 * Creates a component node.
 * 
 * @param {Function} component
 * @param {object} props
 * @param {...any} children
 * @returns {object}
 */
export function component(component, props = {}, ...children) {
    return createComponent(
        component,
        createProps({
            ...props,
            children,
        })
    );
}