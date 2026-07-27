import { resolveNode } from "../../components/resolve/resolveNode.js";

export function renderComponent(node) {
  return resolveNode(node.component(node.props));
}
