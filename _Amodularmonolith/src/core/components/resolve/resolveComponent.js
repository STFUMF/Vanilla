import { renderComponent } from "../../renderer/component/renderComponent.js";
import { createComponentIdentity } from "../../renderer/identity/createComponentIdentity.js";
import { ComponentCache } from "../../renderer/memo/ComponentCache.js";
import { renderWithMemo } from "../../renderer/memo/renderWithMemo.js";
import { createRenderPipeline } from "../../renderer/pipeline/createRenderPipeline.js";
import { shallowEqual } from "../../renderer/utils/shallowEqual.js";
import { RenderProfiler } from "../profiler/RenderProfiler.js";
import { resolveNode } from "./resolveNode.js";

/**
 * Resolves a component tree into a UI tree
 *
 * @param {object} node
 * @returns {object}
 */

const render = createRenderPipeline();

export function resolveComponent(node) {
  //RenderDebugger.log(node.component.name || "Anonymous");

  /*  const identity = createComponentIdentity(node);
  console.log(identity);
  RenderProfiler.onRender({
    identity,
    name: node.component.name,
    props: node.props,
  });
 */
  return render(node);
  /*  if (!node.options.memo){
    return renderComponent(node);
  }

  return renderWithMemo(node); */

  /*   if (!node.options.memo) {
    return resolveNode(node.component(node.props));
  }

  const cached = ComponentCache.get(identity);

  if (cached && shallowEqual(cached.props, node.props)) {
    return cached.vnode;
  }

  const vnode = resolveNode(node.component(node.props));

  ComponentCache.set(identity, {
    identity,
    props,
    vnode,
  });
  console.table(ComponentCache.entries());
  return vnode; */
}
