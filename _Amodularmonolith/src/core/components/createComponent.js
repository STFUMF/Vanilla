import { assertComponent } from "@core/assert";
import { COMPONENT_TYPE } from "./constants.js";

/**
 * Creats a component node.
 *
 * @param {Function} component
 * @param {object} props
 * @returns {object}
 */
export function createComponent(component, props, options = {}) {
  assertComponent(component);
  const { key = null, memo = false, debug = false } = options;
  return {
    nodeType: COMPONENT_TYPE,
    component,
    props,

    options: {
      key,
      memo,
      debug,
    },
  };
}
