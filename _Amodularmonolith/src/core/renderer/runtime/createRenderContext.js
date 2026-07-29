export function createRenderContext(path = []) {
  return {
    path,
  };
}

export function createChildContext(parent, segment) {
  return createRenderContext([...parent.path, segment]);
}
