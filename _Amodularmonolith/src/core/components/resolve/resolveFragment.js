import { createChildContext } from "../../renderer/runtime/createRenderContext.js";
import { resolveNode } from "./resolveNode.js";

export function resolveFragment(fragment, context) {
  return {
    ...fragment,
    children: fragment.children.map((child, index) =>
      resolveNode(child, context),
    ),
  };
}
