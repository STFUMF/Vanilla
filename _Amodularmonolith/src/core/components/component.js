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
const EMPTY_CHILDREN = Object.freeze([]);
export function component(componentFn, props = {}, options = {}, ...children) {
  return createComponent(
    componentFn,
    createProps({
      ...props,
      children: children.length ? children : (props.children ?? EMPTY_CHILDREN),
    }),
    options,
  );
}
