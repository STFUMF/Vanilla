import { COMPONENT_TYPE, FRAGMENT_TYPE, TEXT_NODE_TYPE } from "../constants.js";
import { NODE_TYPES } from "../../renderer/tree";

import { resolveElement } from "./resolveElement.js";
import { RenderProfiler } from "../profiler/RenderProfiler.js";
import { resolveComponent } from "./resolveComponent.js";
import {
  createChildContext,
  createRenderContext,
} from "../../renderer/runtime/createRenderContext.js";
import { resolveFragment } from "./resolveFragment.js";

/**
 * Resolves any node into a UI tree node.
 *
 * @param {object} node
 * @returns {object}
 */
export function resolveNode(node, context = createRenderContext()) {
  if (!node) return node;

  switch (node.nodeType) {
    case COMPONENT_TYPE:
      return resolveComponent(node, createChildContext(context));

    case FRAGMENT_TYPE:
      return resolveFragment(node, context);

    case NODE_TYPES.TEXT:
      return node;

    case NODE_TYPES.ELEMENT:
      return resolveElement(node, context);

    default:
      throw new Error(`Unsupported node type: ${String(node.nodeType)}`);
  }
}
