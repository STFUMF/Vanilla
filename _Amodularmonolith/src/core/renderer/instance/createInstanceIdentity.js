export function createInstanceIdentity(node, context) {
  const key = node.options.key;

  const path = [...context.path];

  if (node.options.key != null) {
    path[path.length - 1] = node.options.key;
  }

  return path.join(".");
}
