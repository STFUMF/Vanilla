import { RenderProfiler } from "../../components/profiler/RenderProfiler.js";
import { createComponentIdentity } from "../identity/createComponentIdentity.js";
import { ComponentCache } from "../memo/ComponentCache.js";
import { shallowEqual } from "../utils/shallowEqual.js";

export function memoStage(next) {
  return function (node) {
    if (!node.options.memo) {
      return next(node);
    }

    const identity = createComponentIdentity(node);

    const cached = ComponentCache.get(identity);

    if (cached && shallowEqual(cached.props, node.props)) {
      console.log("✅ Memo HIT:", identity);
      RenderProfiler.onMemoHit(identity);

      return cached.vnode;
    }

    console.log("❌ Memo MISS:", identity);
    RenderProfiler.onMemoMiss(identity);

    const vnode = next(node);

    ComponentCache.set(identity, {
      identity,
      props: node.props,
      vnode,
    });

    return vnode;
  };
}
