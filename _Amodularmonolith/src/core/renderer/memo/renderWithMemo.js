import { RenderProfiler } from "../../components/profiler/RenderProfiler.js";
import { renderComponent } from "../component/renderComponent.js";
import { createComponentIdentity } from "../identity/createComponentIdentity.js";
import { shallowEqual } from "../utils/shallowEqual.js";
import { ComponentCache } from "./ComponentCache.js";

export function renderWithMemo(node) {
  const identity = createComponentIdentity(node);

  const cached = ComponentCache.get(identity);

  if (cached && shallowEqual(cached.props, node.props)) {
    RenderProfiler.onMemoHit(identity);

    return cached.vnode;
  }

  RenderProfiler.onMemoMiss(identity);

  const vnode = renderComponent(node);

  ComponentCache.set(identity, {
    identity,
    props: node.props,
    vnode,
  });

  return node;
}
