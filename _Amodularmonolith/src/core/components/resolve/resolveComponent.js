import { RenderProfiler } from "../profiler/RenderProfiler.js";
import { resolveNode } from "./resolveNode.js";

/**
 * Resolves a component tree into a UI tree
 *
 * @param {object} node
 * @returns {object}
 */
export function resolveComponent(node) {
  //RenderDebugger.log(node.component.name || "Anonymous");
  RenderProfiler.onRender({
    name: node.component.name,
    props: node.props,
  });
  return resolveNode(node);
}
