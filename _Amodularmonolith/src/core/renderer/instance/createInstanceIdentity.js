export function createInstanceIdentity(node, context) {
  const key = node.options.key;

  const path = [...context.path];

  if (key != null) {
    path[path.length - 1] = key;
  }

  return path.join(".");
}
