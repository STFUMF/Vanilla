import { COMPONENT_TYPE, FRAGMENT_TYPE, TEXT_NODE_TYPE } from "../constants.js";
import { NODE_TYPES } from "../../renderer/tree";

import { resolveElement } from "./resolveElement.js";

/**
 * Resolves any node into a UI tree node.
 *
 * @param {object} node
 * @returns {object}
 */
export function resolveNode(node) {
  if (!node) {
    return node;
  }

  if (node.nodeType === COMPONENT_TYPE) {
    return resolveNode(node.component(node.props));
  }

  if (node.nodeType === FRAGMENT_TYPE) {
    return node;
  }
  if (node.nodeType === TEXT_NODE_TYPE) {
    return node;
  }

  switch (node.nodeType) {
    case NODE_TYPES.ELEMENT:
      return resolveElement(node);

    case NODE_TYPES.TEXT:
      return node;

    default:
      throw new Error(`Unsupported node type: ${String(node.nodeType)}`);
  }
}
