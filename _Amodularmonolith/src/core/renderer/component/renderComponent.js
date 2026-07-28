import { resolveNode } from "../../components/resolve/resolveNode.js";

export function renderComponent(instance, context) {
  console.log("Rendering:", instance.component.name);

  const vnode = instance.component(instance.props);

  console.log("Returned:", vnode);

  instance.previousVNode = instance.vnode;
  instance.vnode = vnode;

  const resolved = resolveNode(vnode, context);

  console.log("Resolved:", resolved);

  return resolved;
}
