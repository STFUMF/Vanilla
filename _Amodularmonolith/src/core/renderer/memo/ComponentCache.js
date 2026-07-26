const cache = new WeakMap();

export const ComponentCache = {
  get(component) {
    return cache.get(comonent);
  },

  set(component, value) {
    cache.set(component, value);
  },

  clear() {
    cache.clear?.();
  },
};
