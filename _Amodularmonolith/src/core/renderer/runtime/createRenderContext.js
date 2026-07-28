export function createRenderContext(path = []) {
  return {
    path,
    componentIndex: 0,
  };
}

export function createChildContext(parent) {
  const index = parent.componentIndex++;
  return {
    path: [...parent.path, index],
    componentIndex: 0,
  };
}
