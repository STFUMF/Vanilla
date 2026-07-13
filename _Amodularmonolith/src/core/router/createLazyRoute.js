export function createLazyRoute(path, loader, props = {}, meta = {}) {
  return Object.freeze({
    path,
    type: "lazy",
    loader,
    component: null,
    props,
    meta,
  });
}
