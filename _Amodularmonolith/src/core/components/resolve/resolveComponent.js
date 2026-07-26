import { ComponentCache } from "../../renderer/memo/ComponentCache.js";
import { shallowEqual } from "../../renderer/utils/shallowEqual.js";
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

  if (!node.options.memo) {
    return resolveNode(node.props);
  }

  const cached = ComponentCache.get(node.component);

  if (cached && shallowEqual(cached.props, node.props)) {
    return cached.vnode;
  }

  const vnode = resolveNode(node.component(node.props));

  ComponentCache.set(node.component, {
    props: node.props,
    vnode,
  });
  return vnode;
}
