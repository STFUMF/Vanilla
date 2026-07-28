import { createChildContext } from "../../renderer/runtime/createRenderContext.js";
import { resolveChildren } from "./resolveChildren.js";
import { resolveNode } from "./resolveNode.js";

/**
 * Resolves an element node.
 *
 * @param {object} node
 * @returns {object}
 */
export function resolveElement(element, context) {
  return {
    ...element,
    children: element.children.map((child, index) =>
      resolveNode(child, context),
    ),
  };
}
